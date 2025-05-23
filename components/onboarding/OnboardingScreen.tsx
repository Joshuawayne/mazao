
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingSlideContent } from '../../types';
import { ROUTES } from '../../constants';
import Button from '../common/Button';
import { MicrophoneIcon, ArrowLeftIcon } from '../common/Icon';
import { useAppContext } from '../../contexts/AppContext';

const SingleOnboardingSlide: React.FC<{ slide: OnboardingSlideContent, translate: (key: string) => string }> = ({ slide, translate }) => {
  return (
    <div className="flex-shrink-0 w-full h-full flex flex-col items-center justify-around text-center p-4 sm:p-6 bg-white rounded-lg shadow-xl">
      <img src={slide.image} alt={translate(slide.titleKey)} className="w-40 h-40 sm:w-48 sm:h-48 object-contain mb-4 rounded-lg" />
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2">{translate(slide.titleKey)}</h2>
        <p className="text-gray-600 mb-3 text-base sm:text-lg">{translate(slide.textKey)}</p>
        {slide.testimonialKey && (
          <p className="text-xs sm:text-sm text-gray-500 italic">"{translate(slide.testimonialKey)}"</p>
        )}
      </div>
    </div>
  );
};

const OnboardingScreen: React.FC = () => {
  const navigate = useNavigate();
  const { completeOnboarding, translate } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  const onboardingSlidesData: OnboardingSlideContent[] = [
    { id: 1, titleKey: 'onboardingTitle1', image: 'https://picsum.photos/seed/prices/300/300', textKey: 'onboardingText1', testimonialKey: 'onboardingTestimonial1' },
    { id: 2, titleKey: 'onboardingTitle2', image: 'https://picsum.photos/seed/market/300/300', textKey: 'onboardingText2', testimonialKey: 'onboardingTestimonial2' },
    { id: 3, titleKey: 'onboardingTitle3', image: 'https://picsum.photos/seed/smartfarm/300/300', textKey: 'onboardingText3', testimonialKey: 'onboardingTestimonial3' },
    // { id: 4, titleKey: 'onboardingTitle4', image: 'https://picsum.photos/seed/loans/300/300', textKey: 'onboardingText4' }, // Testimonial optional
  ];

  const handleNextOrGetStarted = () => {
    if (currentSlide < onboardingSlidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      completeOnboarding();
      navigate(ROUTES.AUTH);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    completeOnboarding();
    navigate(ROUTES.AUTH); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="absolute top-4 right-4 z-20">
        <Button variant="ghost" onClick={handleSkip} className="text-gray-600 hover:text-primary !px-3 !py-1.5 text-sm">
          {translate('skip')}
        </Button>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden pt-12 pb-4"> {/* Padding top for skip button */}
        <div className="w-full max-w-md h-[65vh] sm:h-[70vh] relative"> 
          <div 
            className="flex transition-transform duration-300 ease-in-out h-full" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {onboardingSlidesData.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 h-full p-2">
                <SingleOnboardingSlide slide={slide} translate={translate} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots & Voice Icon */}
        <div className="mt-6 flex items-center space-x-3">
          {onboardingSlidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${currentSlide === index ? 'bg-secondary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <button 
            className="p-1 text-gray-500 hover:text-primary" 
            title={translate('voiceInputPrompt')}
            onClick={() => alert(translate('voiceInputNotAvailable'))}
            aria-label={translate('voiceInputPrompt')}
          >
            <MicrophoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 bg-white border-t border-gray-200">
        <div className="flex justify-between items-center space-x-3">
            <Button 
              onClick={handlePrev} 
              disabled={currentSlide === 0} 
              variant="outline" 
              size="md" 
              aria-label="Previous slide"
              className="w-1/3"
            >
                <ArrowLeftIcon className="w-5 h-5 mr-1 sm:mr-2" />
                {/* Previous text can be added if needed */}
            </Button>
            <Button 
              onClick={handleNextOrGetStarted} 
              variant="secondary" 
              size="md" 
              className="w-2/3"
              aria-label={currentSlide === onboardingSlidesData.length - 1 ? translate('getStarted') : translate('next')}
            >
              {currentSlide === onboardingSlidesData.length - 1 ? translate('getStarted') : translate('next')} 
            </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
