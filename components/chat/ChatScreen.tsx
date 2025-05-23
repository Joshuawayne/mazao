
import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import Button from '../common/Button';
import { MicrophoneIcon } from '../common/Icon'; 
import { ChatMessageItem } from '../../types';
import { generateChatbotResponse } from '../../services/geminiService'; // Import Gemini service
import LoadingSpinner from '../common/LoadingSpinner'; // For loading indicator

const ChatScreen: React.FC = () => {
  const { translate } = useAppContext();
  const [activeTab, setActiveTab] = useState<'forum' | 'chatbot' | 'stories'>('chatbot');
  
  // Chatbot state
  const [chatMessages, setChatMessages] = useState<ChatMessageItem[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isBotLoading, setIsBotLoading] = useState(false);
  const [botError, setBotError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Forum state
  const [forumPosts, setForumPosts] = useState([
    { id: 'fp1', user: 'Farmer Alice', textKey: 'forumPost1', timestamp: new Date(Date.now() - 3600000 * 2) },
    { id: 'fp2', user: 'Shamba Owner Bob', textKey: 'forumPost2', timestamp: new Date(Date.now() - 3600000 * 5) },
  ]);
  const [forumInput, setForumInput] = useState('');

  // Success Stories
  const successStories = [
    { id: 'ss1', titleKey: 'successStory1', userImage: 'https://picsum.photos/seed/farmer1/100/100' },
    { id: 'ss2', titleKey: 'successStory2', userImage: 'https://picsum.photos/seed/farmer2/100/100' },
  ];

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  
  useEffect(() => {
    // Initial welcome message for chatbot
    setChatMessages([{ 
        id: 'bot-welcome', 
        sender: 'bot', 
        text: translate('geminiChatbotWelcome'), 
        timestamp: new Date() 
    }]);
  }, [translate]);


  useEffect(scrollToBottom, [chatMessages]);

  const handleSendMessage = async () => {
    if (userInput.trim() === '' || isBotLoading) return;
    
    const newUserMessage: ChatMessageItem = {
      id: `user${Date.now()}`,
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
    };
    setChatMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsBotLoading(true);
    setBotError(null);

    try {
      const response = await generateChatbotResponse(newUserMessage.text);
      const botResponseText = response.error 
        ? `${translate('chatbotError')} (${response.error})`
        : response.text || translate('geminiChatbotDefaultResponse');
      
      const newBotMessage: ChatMessageItem = {
        id: `bot${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, newBotMessage]);
      if (response.error) setBotError(response.error);

    } catch (error) {
      console.error("Failed to get bot response:", error);
      const errorText = translate('chatbotError');
      setChatMessages(prev => [...prev, {
        id: `bot-error-${Date.now()}`,
        sender: 'bot',
        text: errorText,
        timestamp: new Date()
      }]);
      setBotError(errorText);
    } finally {
      setIsBotLoading(false);
    }
  };

  const handleForumPost = () => {
    if (forumInput.trim() === '') return;
    // Mock post submission
    alert(translate('forumPostSubmittedMock'));
    setForumInput('');
  };

  const TabButton: React.FC<{tabKey: 'forum' | 'chatbot' | 'stories', labelKey: string}> = ({ tabKey, labelKey}) => (
      <Button
        variant={activeTab === tabKey ? 'primary' : 'ghost'}
        onClick={() => setActiveTab(tabKey)}
        className={`flex-1 capitalize !rounded-md ${activeTab !== tabKey ? '!text-gray-600' : ''}`}
        aria-pressed={activeTab === tabKey}
      >
        {translate(labelKey)}
      </Button>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-var(--header-height)-var(--footer-height)-1rem)] md:h-[calc(100vh-var(--header-height)-1rem)] bg-gray-50">
      <div className="p-2 sm:p-3 bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex space-x-1 sm:space-x-2">
            <TabButton tabKey="chatbot" labelKey="chatbot" />
            <TabButton tabKey="forum" labelKey="forum" />
            <TabButton tabKey="stories" labelKey="stories" />
        </div>
      </div>

      {/* Chatbot View */}
      {activeTab === 'chatbot' && (
        <div className="flex-grow flex flex-col p-2 sm:p-3 overflow-hidden">
          <div ref={chatContainerRef} className="flex-grow space-y-3 overflow-y-auto mb-3 pr-1 scrollbar-thin">
            {chatMessages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] p-2.5 sm:p-3 rounded-xl shadow ${
                    msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' 
                                        : 'bg-white text-gray-700 rounded-bl-none border border-gray-200'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-green-100' : 'text-gray-400'} text-right`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isBotLoading && (
              <div className="flex justify-start">
                 <div className="max-w-[75%] p-2.5 sm:p-3 rounded-xl shadow bg-white text-gray-700 rounded-bl-none border border-gray-200">
                    <LoadingSpinner size="sm" text={translate('chatbotLoading')} />
                 </div>
              </div>
            )}
             {botError && !isBotLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] p-2.5 sm:p-3 rounded-xl shadow bg-red-50 text-red-700 rounded-bl-none border border-red-200">
                  <p className="text-sm">{translate('chatbotError')}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 p-1 bg-white border-t border-gray-200 rounded-b-lg">
            <button 
                title={translate('voiceInput')} 
                onClick={() => alert(translate('voiceInputNotAvailable'))} 
                className="p-2 text-gray-500 hover:text-primary rounded-full hover:bg-gray-100"
                aria-label={translate('voiceInput')}
            >
              <MicrophoneIcon className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={translate('typeMessage')}
              className="flex-grow p-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-sm"
              disabled={isBotLoading}
            />
            <Button 
              onClick={handleSendMessage} 
              size="md" 
              variant="primary" 
              className="!px-3 !py-2.5" 
              aria-label="Send message"
              isLoading={isBotLoading}
              disabled={isBotLoading}
            >
              {!isBotLoading && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 16.571V11.5a1 1 0 012 0v5.071a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>}
            </Button>
          </div>
        </div>
      )}

      {/* Forum View */}
      {activeTab === 'forum' && (
        <div className="flex-grow p-2 sm:p-3 space-y-3 overflow-y-auto scrollbar-thin">
            <h2 className="text-lg font-semibold text-primary-dark px-1">{translate('communityForum')}</h2>
            {forumPosts.map(post => (
                <div key={post.id} className="bg-white p-3 rounded-lg shadow border border-gray-200">
                    <p className="text-sm text-gray-800">{translate(post.textKey as any)}</p>
                    <p className="text-xs text-gray-500 mt-1.5">{post.user} - {post.timestamp.toLocaleDateString()}</p>
                </div>
            ))}
            <div className="sticky bottom-0 bg-gray-50 py-2">
                 <textarea 
                    value={forumInput}
                    onChange={(e) => setForumInput(e.target.value)}
                    placeholder={`${translate('typeMessage')} (public post)`}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-sm resize-none h-20"
                 />
                 <Button onClick={handleForumPost} fullWidth variant="primary" size="md" className="mt-2">Post to Forum</Button>
            </div>
        </div>
      )}

      {/* Success Stories View */}
      {activeTab === 'stories' && (
        <div className="flex-grow p-2 sm:p-3 space-y-3 overflow-y-auto scrollbar-thin">
            <h2 className="text-lg font-semibold text-primary-dark px-1">{translate('stories')}</h2>
            {successStories.map(story => (
                 <div key={story.id} className="bg-white p-3 sm:p-4 rounded-lg shadow border border-gray-200 flex items-start space-x-3">
                    <img src={story.userImage} alt="Farmer" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0" />
                    <div>
                        <p className="text-sm text-gray-700 leading-relaxed">{translate(story.titleKey as any)}</p>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ChatScreen;
