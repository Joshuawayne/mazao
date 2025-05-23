
import { Language } from '../types';

type Translations = {
  [key: string]: {
    [lang in Language]?: string;
  } & { en: string }; // Ensure English is always present as a fallback
};

export const translations: Translations = {
  // Splash & General
  tagline: { sw: "Kukuza Wajanja, Uza Bora", en: "Grow Smarter, Sell Better", ki: "[KI] Grow Smarter, Sell Better", lu: "[LU] Grow Smarter, Sell Better" },
  getStarted: { sw: "Anza Sasa", en: "Get Started", ki: "[KI] Get Started", lu: "[LU] Get Started" },
  skip: { sw: "Ruka", en: "Skip", ki: "[KI] Skip", lu: "[LU] Skip" },
  loading: { sw: "Inapakia...", en: "Loading...", ki: "[KI] Loading...", lu: "[LU] Loading..." },
  next: { sw: "Endelea", en: "Next", ki: "[KI] Next", lu: "[LU] Next"},
  error: { sw: "Hitilafu", en: "Error", ki: "[KI] Error", lu: "[LU] Error"},
  apiError: { sw: "Imeshindwa kupakia data. Tafadhali jaribu tena.", en: "Failed to load data. Please try again.", ki: "[KI] Failed to load data. Please try again.", lu: "[LU] Failed to load data. Please try again."},
  
  // Onboarding
  onboardingTitle1: { sw: "Pata Bei Bora", en: "Find the Best Prices", ki: "[KI] Find the Best Prices", lu: "[LU] Find the Best Prices" },
  onboardingText1: { sw: "Angalia bei za mazao yako kwa wakati halisi.", en: "See real-time prices for your crops.", ki: "[KI] See real-time prices for your crops.", lu: "[LU] See real-time prices for your crops." },
  onboardingTestimonial1: { sw: "Jane kutoka Nakuru aliuza mahindi kwa Ksh 3,000!", en: "Jane from Nakuru sold maize for Ksh 3,000!", ki: "[KI] Jane from Nakuru sold maize for Ksh 3,000!", lu: "[LU] Jane from Nakuru sold maize for Ksh 3,000!" },
  onboardingTitle2: { sw: "Uza Moja kwa Moja kwa Wanunuzi", en: "Sell Directly to Buyers", ki: "[KI] Sell Directly to Buyers", lu: "[LU] Sell Directly to Buyers" },
  onboardingText2: { sw: "Ungana na wanunuzi wanaoaminika Nairobi.", en: "Connect with trusted buyers in Nairobi.", ki: "[KI] Connect with trusted buyers in Nairobi.", lu: "[LU] Connect with trusted buyers in Nairobi." },
  onboardingTestimonial2: { sw: "Peter aliungana na mnunuzi wa moja kwa moja na akapata 20% zaidi kwa parachichi zake.", en: "Peter connected with a direct buyer and got 20% more for his avocados.", ki: "[KI] Peter connected with a direct buyer and got 20% more for his avocados.", lu: "[LU] Peter connected with a direct buyer and got 20% more for his avocados." },
  onboardingTitle3: { sw: "Kukuza kwa Ujanja", en: "Grow Smarter", ki: "[KI] Grow Smarter", lu: "[LU] Grow Smarter" },
  onboardingText3: { sw: "Pata vidokezo vya kuongeza mavuno yako.", en: "Get tips to boost your harvest.", ki: "[KI] Get tips to boost your harvest.", lu: "[LU] Get tips to boost your harvest." },
  onboardingTestimonial3: { sw: "Asha aliongeza mavuno yake kwa 30% kwa kutumia tahadhari za wadudu.", en: "Asha boosted her harvest by 30% using pest alerts.", ki: "[KI] Asha boosted her harvest by 30% using pest alerts.", lu: "[LU] Asha boosted her harvest by 30% using pest alerts." },
  onboardingTitle4: { sw: "Pata Mikopo na Bima", en: "Access Loans & Insurance", ki: "[KI] Access Loans & Insurance", lu: "[LU] Access Loans & Insurance" },
  onboardingText4: { sw: "Pata pesa za kukuza shamba lako.", en: "Get money to grow your shamba.", ki: "[KI] Get money to grow your shamba.", lu: "[LU] Get money to grow your shamba." },

  // Auth
  signUp: { sw: "Jisajili", en: "Sign Up", ki: "Andĩka Ũhoro", lu: "[LU] Sign Up" },
  logIn: { sw: "Ingia", en: "Log In", ki: "[KI] Log In", lu: "[LU] Log In" },
  name: { sw: "Jina", en: "Name", ki: "[KI] Name", lu: "[LU] Name" },
  phoneNumber: { sw: "Nambari ya Simu", en: "Phone Number", ki: "Namba cia Thimũ", lu: "[LU] Phone Number" },
  county: { sw: "Kaunti", en: "County", ki: "[KI] County", lu: "[LU] County" },
  primaryCrop: { sw: "Zao Kuu", en: "Primary Crop", ki: "[KI] Primary Crop", lu: "[LU] Primary Crop" },
  otp: { sw: "Nenosiri la Mara Moja (OTP)", en: "One-Time Password (OTP)", ki: "Kiugo gĩa Kũhitha kĩa Rĩmwe", lu: "[LU] One-Time Password (OTP)" },
  rememberMe: { sw: "Nikumbuke", en: "Remember Me", ki: "Ĩtĩkĩra gũkandirikana", lu: "[LU] Remember Me" },
  forgotOTP: { sw: "Umesahau OTP?", en: "Forgot OTP?", ki: "[KI] Forgot OTP?", lu: "[LU] Forgot OTP?" },
  resendOTP: { sw: "Tuma OTP Tena", en: "Resend OTP", ki: "[KI] Resend OTP", lu: "[LU] Resend OTP" },
  voiceInputPrompt: { sw: "Sema maelezo yako...", en: "Speak your details...", ki: "[KI] Speak your details...", lu: "[LU] Speak your details..." },
  otpSentMock: { sw: "OTP (mfano: 1234) imetumwa kwa", en: "OTP (mock: 1234) sent to", ki: "[KI] OTP (mock: 1234) sent to", lu: "[LU] OTP (mock: 1234) sent to" },
  invalidPhoneNumber: { sw: "Tafadhali ingiza nambari sahihi ya simu.", en: "Please enter a valid phone number.", ki: "[KI] Please enter a valid phone number.", lu: "[LU] Please enter a valid phone number." },
  enterYourName: { sw: "Ingiza jina lako", en: "Enter your name", ki: "[KI] Enter your name", lu: "[LU] Enter your name" },
  requestOtp: { sw: "Omba OTP", en: "Request OTP", ki: "[KI] Request OTP", lu: "[LU] Request OTP" },
  otpSentTo: { sw: "OTP imetumwa kwa", en: "An OTP has been sent to", ki: "[KI] An OTP has been sent to", lu: "[LU] An OTP has been sent to" },
  enterOtpBelow: { sw: "Ingiza hapa chini.", en: "Enter it below.", ki: "[KI] Enter it below.", lu: "[LU] Enter it below." },
  enterOtp: { sw: "Ingiza OTP", en: "Enter OTP", ki: "[KI] Enter OTP", lu: "[LU] Enter OTP" },
  invalidOtp: { sw: "OTP si sahihi. Tafadhali tumia 1234 kwa mfano.", en: "Invalid OTP. Please use 1234 for mock.", ki: "[KI] Invalid OTP. Please use 1234 for mock.", lu: "[LU] Invalid OTP. Please use 1234 for mock." },
  changePhoneNumber: { sw: "Badilisha Nambari ya Simu?", en: "Change Phone Number?", ki: "[KI] Change Phone Number?", lu: "[LU] Change Phone Number?" },
  dontHaveAccount: { sw: "Huna akaunti?", en: "Don't have an account?", ki: "Ndũrĩ na akaunti?", lu: "[LU] Don't have an account?" },
  alreadyHaveAccount: { sw: "Tayari una akaunti?", en: "Already have an account?", ki: "[KI] Already have an account?", lu: "[LU] Already have an account?" },
  invalidCredentials: { sw: "Nambari ya simu au OTP si sahihi.", en: "Invalid phone number or OTP.", ki: "[KI] Invalid phone number or OTP.", lu: "[LU] Invalid phone number or OTP."},
  fillAllFields: { sw: "Tafadhali jaza sehemu zote.", en: "Please fill all fields.", ki: "[KI] Please fill all fields.", lu: "[LU] Please fill all fields." },
  
  // Dashboard & Navigation
  welcome: { sw: "Karibu", en: "Welcome", ki: "[KI] Welcome", lu: "[LU] Welcome" },
  talkToAgriGrow: { sw: "Ongea na AgriGrow", en: "Talk to AgriGrow", ki: "[KI] Talk to AgriGrow", lu: "[LU] Talk to AgriGrow" },
  sellNow: { sw: "Uza Sasa", en: "Sell Now", ki: "[KI] Sell Now", lu: "[LU] Sell Now" },
  connect: { sw: "Ungana", en: "Connect", ki: "[KI] Connect", lu: "[LU] Connect" },
  verifiedBuyer: { sw: "Mnunuzi Aliyethibitishwa", en: "Verified Buyer", ki: "[KI] Verified Buyer", lu: "[LU] Verified Buyer" },
  buyerNotVerified: { sw: "Mnunuzi Hajathibitishwa", en: "Buyer Not Verified", ki: "[KI] Buyer Not Verified", lu: "[LU] Buyer Not Verified" },
  connectWith: { sw: "Ungana na", en: "Connect with", ki: "[KI] Connect with", lu: "[LU] Connect with" },
  quickTipExample: { sw: "Uza chai sasa kupata bei nzuri!", en: "Sell tea now for high prices!", ki: "[KI] Sell tea now for high prices!", lu: "[LU] Sell tea now for high prices!" },
  worksOffline: { sw: "Inafanya kazi Nje ya Mtandao", en: "Works Offline", ki: "[KI] Works Offline", lu: "[LU] Works Offline" },
  home: { sw: "Nyumbani", en: "Home", ki: "[KI] Home", lu: "[LU] Home" },
  sellProduce: { sw: "Uza Mazao", en: "Sell Produce", ki: "[KI] Sell Produce", lu: "[LU] Sell Produce" },
  learn: { sw: "Jifunze", en: "Learn", ki: "[KI] Learn", lu: "[LU] Learn" },
  chat: { sw: "Soga", en: "Chat", ki: "[KI] Chat", lu: "[LU] Chat" },
  marketPrices: { sw: "Bei za Soko", en: "Market Prices", ki: "[KI] Market Prices", lu: "[LU] Market Prices" },
  buyerAlerts: { sw: "Tahadhari za Wanunuzi", en: "Buyer Alerts", ki: "[KI] Buyer Alerts", lu: "[LU] Buyer Alerts" },
  noBuyerAlerts: { sw: "Hakuna tahadhari mpya za wanunuzi.", en: "No new buyer alerts.", ki: "[KI] No new buyer alerts.", lu: "[LU] No new buyer alerts." },
  quickTips: { sw: "Vidokezo vya Haraka", en: "Quick Tips", ki: "[KI] Quick Tips", lu: "[LU] Quick Tips" },
  contactDetails: { sw: "Maelezo ya Mawasiliano", en: "Contact Details", ki: "[KI] Contact Details", lu: "[LU] Contact Details" },
  mockPhoneNumber: { sw: "Nambari ya Simu (Mfano)", en: "Mock Phone Number", ki: "[KI] Mock Phone Number", lu: "[LU] Mock Phone Number" },
  callBuyerMock: { sw: "Piga Simu {buyerName} (Mfano)", en: "Call {buyerName} (Mock)", ki: "[KI] Call {buyerName} (Mock)", lu: "[LU] Call {buyerName} (Mock)" },
  messageBuyerMock: { sw: "Tuma Ujumbe kupitia AgriGrow (Mfano)", en: "Message via AgriGrow (Mock)", ki: "[KI] Message via AgriGrow (Mock)", lu: "[LU] Message via AgriGrow (Mock)" },
  mockCallInitiated: { sw: "Simu ya mfano imeanzishwa kwa {buyerName}.", en: "Mock call initiated to {buyerName}.", ki: "[KI] Mock call initiated to {buyerName}.", lu: "[LU] Mock call initiated to {buyerName}." },
  mockMessageSent: { sw: "Ujumbe wa mfano umetayarishwa kwa {buyerName}.", en: "Mock message prepared for {buyerName}.", ki: "[KI] Mock message prepared for {buyerName}.", lu: "[LU] Mock message prepared for {buyerName}." },
  verificationStatus: { sw: "Hali ya Uthibitisho", en: "Verification Status", ki: "[KI] Verification Status", lu: "[LU] Verification Status" },
  close: { sw: "Funga", en: "Close", ki: "[KI] Close", lu: "[LU] Close" },
  toggleNavigation: { sw: "Badilisha Urambazaji", en: "Toggle Navigation", ki: "[KI] Toggle Navigation", lu: "[LU] Toggle Navigation" },
  navigation: { sw: "Urambazaji", en: "Navigation", ki: "[KI] Navigation", lu: "[LU] Navigation" },

  // Sell Produce
  listForSale: { sw: "Orodhesha kwa Uuzaji", en: "List for Sale", ki: "[KI] List for Sale", lu: "[LU] List for Sale" },
  cropType: { sw: "Aina ya Zao", en: "Crop Type", ki: "[KI] Crop Type", lu: "[LU] Crop Type" },
  quantityKg: { sw: "Kiasi (kg)", en: "Quantity (kg)", ki: "[KI] Quantity (kg)", lu: "[LU] Quantity (kg)" },
  askingPriceKsh: { sw: "Bei ya Kuuliza (Ksh)", en: "Asking Price (Ksh)", ki: "[KI] Asking Price (Ksh)", lu: "[LU] Asking Price (Ksh)" },
  pickupLocation: { sw: "Mahali pa Kuchukua", en: "Pickup Location", ki: "[KI] Pickup Location", lu: "[LU] Pickup Location" },
  listingSuccessfulTitle: { sw: "Umefanikiwa!", en: "Successful!", ki: "[KI] Successful!", lu: "[LU] Successful!" },
  listingSuccessfulMessage: { sw: "Mazao yako yameorodheshwa! Tarajia kupata wanunuzi hivi karibuni.", en: "Your produce is listed! Expect buyer matches soon.", ki: "[KI] Your produce is listed! Expect buyer matches soon.", lu: "[LU] Your produce is listed! Expect buyer matches soon." },
  safeSellingTips: { sw: "Vidokezo vya Uuzaji Salama", en: "Safe Selling Tips", ki: "[KI] Safe Selling Tips", lu: "[LU] Safe Selling Tips" },
  optionalPrefilled: { sw: "Hiari, imejazwa na wastani wa bei ya soko", en: "Optional, pre-filled with market average", ki: "[KI] Optional, pre-filled with market average", lu: "[LU] Optional, pre-filled with market average" },
  enterQuantity: { sw: "k.m., 100", en: "e.g., 100", ki: "[KI] e.g., 100", lu: "[LU] e.g., 100" },
  enterPricePerKg: { sw: "k.m., 50", en: "e.g., 50", ki: "[KI] e.g., 50", lu: "[LU] e.g., 50" },
  listingFailedError: { sw: "Imeshindwa kuorodhesha zao. Tafadhali jaribu tena.", en: "Failed to list produce. Please try again.", ki: "[KI] Failed to list produce. Please try again.", lu: "[LU] Failed to list produce. Please try again." },
  safeSellingTipsDetails: { sw: "Vidokezo: Kutana mahali pa umma, thibitisha mnunuzi, kubaliana bei kwanza.", en: "Tips: Meet in public, verify buyer, agree on price first.", ki: "[KI] Tips: Meet in public, verify buyer, agree on price first.", lu: "[LU] Tips: Meet in public, verify buyer, agree on price first." },
  pleaseLoginToSell: { sw: "Tafadhali ingia ili kuuza mazao.", en: "Please log in to sell produce.", ki: "[KI] Please log in to sell produce.", lu: "[LU] Please log in to sell produce." },
  sellYourProduce: { sw: "Uza Mazao Yako", en: "Sell Your Produce", ki: "[KI] Sell Your Produce", lu: "[LU] Sell Your Produce" },
  interestedBuyers: { sw: "Wanunuzi Wanaovutiwa", en: "Interested Buyers", ki: "[KI] Interested Buyers", lu: "[LU] Interested Buyers" },
  ok: { sw: "Sawa", en: "OK", ki: "[KI] OK", lu: "[LU] OK" },

  // Smart Farming Hub
  smartFarmingHub: { sw: "Kituo cha Kilimo Bora", en: "Smart Farming Hub", ki: "[KI] Smart Farming Hub", lu: "[LU] Smart Farming Hub" },
  cropPlanner: { sw: "Mpangaji wa Mazao", en: "Crop Planner", ki: "[KI] Crop Planner", lu: "[LU] Crop Planner" },
  pestAlerts: { sw: "Tahadhari za Wadudu", en: "Pest Alerts", ki: "[KI] Pest Alerts", lu: "[LU] Pest Alerts" },
  videoTutorials: { sw: "Mafunzo ya Video", en: "Video Tutorials", ki: "[KI] Video Tutorials", lu: "[LU] Video Tutorials" },
  applyTip: { sw: "Tumia Kidokezo", en: "Apply Tip", ki: "[KI] Apply Tip", lu: "[LU] Apply Tip" },
  january: { sw: "Januari", en: "January", ki: "[KI] January", lu: "[LU] January" },
  february: { sw: "Februari", en: "February", ki: "[KI] February", lu: "[LU] February" },
  march: { sw: "Machi", en: "March", ki: "[KI] March", lu: "[LU] March" },
  maizeDroughtResistant: { sw: "Mahindi Yanayostahimili Ukame", en: "Drought-Resistant Maize", ki: "[KI] Drought-Resistant Maize", lu: "[LU] Drought-Resistant Maize" },
  beans: { sw: "Maharage", en: "Beans", ki: "[KI] Beans", lu: "[LU] Beans" },
  tea: { sw: "Chai", en: "Tea", ki: "[KI] Tea", lu: "[LU] Tea" },
  plantNow: { sw: "Panda Sasa", en: "Plant Now", ki: "[KI] Plant Now", lu: "[LU] Plant Now" },
  prepareLand: { sw: "Andaa Shamba", en: "Prepare Land", ki: "[KI] Prepare Land", lu: "[LU] Prepare Land" },
  applyFertilizer: { sw: "Weka Mbolea", en: "Apply Fertilizer", ki: "[KI] Apply Fertilizer", lu: "[LU] Apply Fertilizer" },
  viewFullCalendar: { sw: "Angalia Kalenda Kamili ya Upandaji (Mfano)", en: "View Full Planting Calendar (Mock)", ki: "[KI] View Full Planting Calendar (Mock)", lu: "[LU] View Full Planting Calendar (Mock)" },
  viewDetails: { sw: "Angalia Maelezo", en: "View Details", ki: "[KI] View Details", lu: "[LU] View Details" },
  learnMoreAbout: { sw: "Jifunze zaidi kuhusu", en: "Learn more about", ki: "[KI] Learn more about", lu: "[LU] Learn more about" },
  learnMore: { sw: "Jifunze Zaidi", en: "Learn More", ki: "[KI] Learn More", lu: "[LU] Learn More" },
  noPestAlerts: { sw: "Hakuna tahadhari za wadudu.", en: "No active pest alerts.", ki: "[KI] No active pest alerts.", lu: "[LU] No active pest alerts." },
  languageSwahili: { sw: "Kiswahili", en: "Swahili", ki: "[KI] Swahili", lu: "[LU] Swahili" },
  watchVideo: { sw: "Tazama Video", en: "Watch Video", ki: "[KI] Watch Video", lu: "[LU] Watch Video" },
  watchNow: { sw: "Tazama Sasa", en: "Watch Now", ki: "[KI] Watch Now", lu: "[LU] Watch Now" },
  videosOfflineAccessible: { sw: "Video zinapatikana nje ya mtandao (mfano).", en: "Videos are offline accessible (mock).", ki: "[KI] Videos are offline accessible (mock).", lu: "[LU] Videos are offline accessible (mock)." },
  applyGeneralTip: { sw: "Tumia kidokezo cha jumla cha kilimo (Mfano). K.m., Nunua mbegu zinazostahimili ukame.", en: "Apply a general farming tip (Mock Action). E.g., Buy drought-resistant seeds.", ki: "[KI] Apply a general farming tip (Mock Action). E.g., Buy drought-resistant seeds.", lu: "[LU] Apply a general farming tip (Mock Action). E.g., Buy drought-resistant seeds." },
  viewCalendarEventDetails: { sw: "Angalia Maelezo ya Tukio la Kalenda", en: "View Calendar Event Details", ki: "[KI] View Calendar Event Details", lu: "[LU] View Calendar Event Details" },
  date: { sw: "Tarehe", en: "Date", ki: "[KI] Date", lu: "[LU] Date" },
  location: { sw: "Mahali", en: "Location", ki: "[KI] Location", lu: "[LU] Location" },

  // Chat
  forum: { sw: "Jukwaa", en: "Forum", ki: "[KI] Forum", lu: "[LU] Forum" },
  chatbot: { sw: "Roboti ya Soga", en: "Chatbot", ki: "[KI] Chatbot", lu: "[LU] Chatbot" },
  stories: { sw: "Hadithi", en: "Stories", ki: "[KI] Stories", lu: "[LU] Stories" },
  typeMessage: { sw: "Andika ujumbe...", en: "Type message...", ki: "[KI] Type message...", lu: "[LU] Type message..." },
  voiceInputNotAvailable: { sw: "Uingizaji wa sauti kwa mfano - haujatekelezwa", en: "Voice input mock - not implemented", ki: "[KI] Voice input mock - not implemented", lu: "[LU] Voice input mock - not implemented" },
  voiceInput: { sw: "Ingiza kwa Sauti", en: "Voice Input", ki: "[KI] Voice Input", lu: "[LU] Voice Input" },
  
  chatbotLoading: { sw: "AgriBot anafikiria...", en: "AgriBot is thinking...", ki: "[KI] AgriBot is thinking...", lu: "[LU] AgriBot is thinking..." },
  chatbotError: { sw: "Samahani, AgriBot amepata hitilafu. Jaribu tena.", en: "Sorry, AgriBot encountered an error. Please try again.", ki: "[KI] Sorry, AgriBot encountered an error. Please try again.", lu: "[LU] Sorry, AgriBot encountered an error. Please try again." },
  geminiChatbotWelcome: { sw: "Habari! Mimi ni AgriBot, msaidizi wako wa AI. Una swali gani kuhusu kilimo leo?", en: "Hello! I'm AgriBot, your AI assistant. What farming questions do you have today?", ki: "[KI] Hello! I'm AgriBot, your AI assistant. What farming questions do you have today?", lu: "[LU] Hello! I'm AgriBot, your AI assistant. What farming questions do you have today?"},
  geminiChatbotDefaultResponse: { sw: "Hiyo ni kauli ya kuvutia. Unaweza kuniuliza kuhusu bei za mazao, mbinu za upanzi, au kudhibiti wadudu.", en: "That's an interesting point. You can ask me about crop prices, planting techniques, or pest control.", ki: "[KI] That's an interesting point. You can ask me about crop prices, planting techniques, or pest control.", lu: "[LU] That's an interesting point. You can ask me about crop prices, planting techniques, or pest control."},

  chatbotWelcome: { sw: "Habari! Mimi ni AgriBot, msaidizi wako. Ninawezaje kukusaidia leo? Niulize maswali kama 'Ninauzaje mahindi?'", en: "Hello! I am AgriBot, your assistant. How can I help you today? Ask me things like 'How do I sell maize?'", ki: "[KI] Hello! I am AgriBot, your assistant. How can I help you today? Ask me things like 'How do I sell maize?'", lu: "[LU] Hello! I am AgriBot, your assistant. How can I help you today? Ask me things like 'How do I sell maize?'" },
  chatbotDefaultResponse: { sw: "Asante kwa ujumbe wako. Bado ninajifunza! Kwa maswali magumu, tafadhali wasiliana na usaidizi.", en: "Thanks for your message. I'm still learning! For complex queries, please contact support.", ki: "[KI] Thanks for your message. I'm still learning! For complex queries, please contact support.", lu: "[LU] Thanks for your message. I'm still learning! For complex queries, please contact support." },
  chatbotSellMaizeResponse: { sw: "Ili kuuza mahindi: Nenda 'Uza Mazao', orodhesha kiasi cha mahindi na bei. Tutakulinganisha na wanunuzi!", en: "To sell maize: Go to 'Sell Produce', list your maize quantity and price. We will match you with buyers!", ki: "[KI] To sell maize: Go to 'Sell Produce', list your maize quantity and price. We will match you with buyers!", lu: "[LU] To sell maize: Go to 'Sell Produce', list your maize quantity and price. We will match you with buyers!" },
  chatbotGreetingResponse: { sw: "Habari yako! Ninawezaje kukusaidia na mahitaji yako ya kilimo?", en: "Hello there! How can I assist you with your farming needs?", ki: "[KI] Hello there! How can I assist you with your farming needs?", lu: "[LU] Hello there! How can I assist you with your farming needs?" },
  communityForum: { sw: "Jukwaa la Jamii", en: "Community Forum", ki: "[KI] Community Forum", lu: "[LU] Community Forum" },
  forumPost1: { sw: "Ni mbolea gani bora kwa chai wakati wa mvua fupi?", en: "What is the best fertilizer for tea during short rains?", ki: "[KI] What is the best fertilizer for tea during short rains?", lu: "[LU] What is the best fertilizer for tea during short rains?" },
  forumPost2: { sw: "Nimepata mnunuzi mzuri wa parachichi zangu kupitia programu hii! Ninapendekeza sana.", en: "I found a great buyer for my avocados through this app! Highly recommend.", ki: "[KI] I found a great buyer for my avocados through this app! Highly recommend.", lu: "[LU] I found a great buyer for my avocados through this app! Highly recommend." },
  forumPostSubmittedMock: { sw: "Ujumbe wako umewasilishwa kwa ukaguzi (mfano).", en: "Your post has been submitted for moderation (mock).", ki: "[KI] Your post has been submitted for moderation (mock).", lu: "[LU] Your post has been submitted for moderation (mock)." },
  successStory1: { sw: "Mary kutoka Kiambu aliongeza mapato yake ya nyanya mara mbili kwa kutumia habari za bei sokoni na kuungana moja kwa moja na hoteli za Nairobi.", en: "Mary from Kiambu doubled her tomato income by using the market price information and connecting directly with Nairobi hotels.", ki: "[KI] Mary from Kiambu doubled her tomato income by using the market price information and connecting directly with Nairobi hotels.", lu: "[LU] Mary from Kiambu doubled her tomato income by using the market price information and connecting directly with Nairobi hotels." },
  successStory2: { sw: "John huko Kisumu alitumia vidokezo vya umwagiliaji wa matone kutoka Kituo cha Kilimo Bora na akaokoa maji kwa 40% huku akiongeza mavuno yake ya sukuma wiki.", en: "John in Kisumu adopted drip irrigation tips from the Smart Farming Hub and saved 40% water while increasing his sukuma wiki yield.", ki: "[KI] John in Kisumu adopted drip irrigation tips from the Smart Farming Hub and saved 40% water while increasing his sukuma wiki yield.", lu: "[LU] John in Kisumu adopted drip irrigation tips from the Smart Farming Hub and saved 40% water while increasing his sukuma wiki yield." },
};

export const translate = (key: keyof typeof translations, currentLang: Language, replacements?: {[key: string]: string}): string => {
  let translationSet = translations[key];
  let translationText: string | undefined;

  if (translationSet) {
    translationText = translationSet[currentLang] || translationSet.en;
  } else {
    console.warn(`Translation key "${key}" not found.`);
    translationText = String(key); // Fallback to key if not found
  }
  
  if (replacements && translationText) {
    Object.keys(replacements).forEach(placeholder => {
      const regex = new RegExp(`{${placeholder}}`, 'g');
      translationText = (translationText as string).replace(regex, replacements[placeholder]);
    });
  }
  return translationText || String(key);
};
