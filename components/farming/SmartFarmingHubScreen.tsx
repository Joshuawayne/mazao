
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { getMockPestAlerts, getMockVideoTutorials } from '../../services/mockApiService';
import { PestAlertData, VideoTutorialData } from '../../types';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { CalendarIcon, AlertTriangleIcon, VideoCameraIcon, CheckCircleIcon } from '../common/Icon';

interface CalendarEvent {
  id: string;
  date: string; // e.g., "2024-07-15"
  titleKey: string;
  descriptionKey: string;
  cropKey?: string;
  actionKey?: string;
}

const mockCalendarEvents: CalendarEvent[] = [
  { id: 'ce1', date: '2024-08-01', titleKey: 'plantNow', descriptionKey: 'prepareLand', cropKey: 'maizeDroughtResistant', actionKey: 'applyTip' },
  { id: 'ce2', date: '2024-08-15', titleKey: 'applyFertilizer', descriptionKey: 'applyFertilizer', cropKey: 'maizeDroughtResistant' },
  { id: 'ce3', date: '2024-09-05', titleKey: 'plantNow', descriptionKey: 'prepareLand', cropKey: 'beans' },
];

const SmartFarmingHubScreen: React.FC = () => {
  const { translate } = useAppContext();
  const [pestAlerts, setPestAlerts] = useState<PestAlertData[]>([]);
  const [videoTutorials, setVideoTutorials] = useState<VideoTutorialData[]>([]);
  const [selectedPestAlert, setSelectedPestAlert] = useState<PestAlertData | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorialData | null>(null);
  const [selectedCalendarEvent, setSelectedCalendarEvent] = useState<CalendarEvent | null>(null);

  useEffect(() => {
    setPestAlerts(getMockPestAlerts());
    setVideoTutorials(getMockVideoTutorials());
  }, []);

  const handleApplyTip = (tipAction: string) => {
    alert(`${translate('applyTip')}: ${tipAction} (Mock Action)`);
  };
  
  const SectionCard: React.FC<{title: string, icon: React.ReactNode, children: React.ReactNode, 'aria-labelledby': string}> = ({ title, icon, children, 'aria-labelledby': labelledby }) => (
    <section aria-labelledby={labelledby} className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
      <h2 id={labelledby} className="text-md sm:text-lg font-semibold text-primary-dark mb-2 sm:mb-3 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </section>
  );


  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-primary-dark mb-1 sm:mb-2">{translate('smartFarmingHub')}</h1>

      {/* Crop Planner */}
      <SectionCard title={translate('cropPlanner')} icon={<CalendarIcon className="w-5 h-5 text-primary"/>} aria-labelledby="crop-planner-heading">
        <div className="space-y-2">
          {mockCalendarEvents.slice(0,2).map(event => ( // Show a couple of mock events
            <div key={event.id} className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedCalendarEvent(event)}>
              <p className="font-medium text-gray-700">{translate(event.titleKey)} {event.cropKey ? `(${translate(event.cropKey)})` : ''}</p>
              <p className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} - {translate(event.descriptionKey)}</p>
            </div>
          ))}
          <Button variant="link" size="sm" onClick={() => alert(translate('viewFullCalendar'))} className="text-primary">
            {translate('viewFullCalendar')}
          </Button>
        </div>
      </SectionCard>

      {/* Pest Alerts */}
      <SectionCard title={translate('pestAlerts')} icon={<AlertTriangleIcon className="w-5 h-5 text-red-500"/>} aria-labelledby="pest-alerts-heading">
        {pestAlerts.length > 0 ? (
          <div className="space-y-2">
            {pestAlerts.slice(0,2).map(alert => (
              <div key={alert.id} className="p-2.5 bg-red-50 border border-red-200 rounded-md cursor-pointer hover:bg-red-100" onClick={() => setSelectedPestAlert(alert)}>
                <h3 className="font-medium text-red-700">{alert.title} - <span className="text-xs font-normal text-red-600">{alert.location}</span></h3>
                <p className="text-xs text-red-600 truncate">{alert.details}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">{translate('noPestAlerts')}</p>
        )}
      </SectionCard>

      {/* Video Tutorials */}
      <SectionCard title={translate('videoTutorials')} icon={<VideoCameraIcon className="w-5 h-5 text-accent"/>} aria-labelledby="video-tutorials-heading">
        <div className="space-y-2">
          {videoTutorials.slice(0,2).map(video => (
            <div key={video.id} className="flex items-start space-x-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedVideo(video)}>
              <img src={video.thumbnailUrl} alt={video.title} className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded flex-shrink-0"/>
              <div>
                <h3 className="font-medium text-gray-700 text-sm sm:text-base">{video.title}</h3>
                <p className="text-xs text-gray-500 truncate">{video.description}</p>
              </div>
            </div>
          ))}
           <p className="text-xs text-gray-500 mt-1">{translate('videosOfflineAccessible')}</p>
        </div>
      </SectionCard>

      {/* Modals for details */}
      {selectedCalendarEvent && (
        <Modal isOpen={!!selectedCalendarEvent} onClose={() => setSelectedCalendarEvent(null)} title={`${translate(selectedCalendarEvent.titleKey)} ${selectedCalendarEvent.cropKey ? `(${translate(selectedCalendarEvent.cropKey)})` : ''}`}>
          <p className="mb-1"><strong>{translate('date')}:</strong> {new Date(selectedCalendarEvent.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="mb-3">{translate(selectedCalendarEvent.descriptionKey)}</p>
          {selectedCalendarEvent.actionKey && (
            <Button variant="primary" onClick={() => { handleApplyTip(translate(selectedCalendarEvent.actionKey as string)); setSelectedCalendarEvent(null); }}>
              {translate(selectedCalendarEvent.actionKey as string)}
            </Button>
          )}
        </Modal>
      )}

      {selectedPestAlert && (
        <Modal isOpen={!!selectedPestAlert} onClose={() => setSelectedPestAlert(null)} title={selectedPestAlert.title}>
          <p className="mb-1"><strong>{translate('location')}:</strong> {selectedPestAlert.location}</p>
          <p className="mb-3">{selectedPestAlert.details}</p>
          <Button variant="primary" onClick={() => { handleApplyTip(`${translate('learnMoreAbout')} ${selectedPestAlert.title}`); setSelectedPestAlert(null); }}>
            {translate('applyTip')}
          </Button>
        </Modal>
      )}

      {selectedVideo && (
        <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} title={selectedVideo.title} size="lg">
          <p className="mb-2 text-sm">{selectedVideo.description}</p>
          <div className="aspect-video mb-3">
            {/* In a real app, use a proper video player. This is a placeholder for iframe. */}
            <iframe 
                className="w-full h-full rounded"
                src={selectedVideo.videoUrl} // Basic embed, ensure URL is embeddable
                title={selectedVideo.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
          </div>
           <p className="text-xs text-gray-500 mb-3">{translate('languageSwahili')} (Mock)</p>
          <Button variant="secondary" fullWidth onClick={() => { alert(`${translate('watchVideo')}: ${selectedVideo.title}`); setSelectedVideo(null); }}>
            {translate('watchNow')}
          </Button>
        </Modal>
      )}
      
      {/* General Apply Tip Button (Mock) */}
      <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-md text-center">
         <p className="text-sm text-yellow-700 mb-2">{translate('applyGeneralTip')}</p>
         <Button variant="secondary" onClick={() => handleApplyTip(translate('applyGeneralTip'))} size="sm">
            <CheckCircleIcon className="w-4 h-4 mr-1.5"/> {translate('applyTip')}
         </Button>
      </div>
    </div>
  );
};

export default SmartFarmingHubScreen;
