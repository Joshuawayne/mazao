
import React, { useEffect } from 'react';
import Logo from '../common/Logo';
import LoadingSpinner from '../common/LoadingSpinner';
import { useAppContext } from '../../contexts/AppContext';

const SplashScreen: React.FC = () => {
  const { translate } = useAppContext();

  // The actual navigation logic based on loading state, firstVisit, and user
  // is handled in App.tsx. This component is purely visual during the isLoading phase.
  // The useEffect in AppContext sets isLoading to false after a timeout.

  return (
    <div 
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "linear-gradient(rgba(20, 100, 40, 0.75), rgba(20, 100, 40, 0.75)), url('https://picsum.photos/seed/kenyafarm/1200/800')" }}
      // Tailwind equivalent for background: bg-[url('https://picsum.photos/seed/kenyafarm/1200/800')] bg-cover bg-center relative
      // And a pseudo-element or inner div for the overlay:
      // <div className="absolute inset-0 bg-green-800 opacity-75"></div>
    >
      <div className="text-center">
        <Logo 
          size="text-3xl sm:text-4xl" 
          textColor="text-white"
          showTagline={true}
          taglineText={translate('tagline')}
          taglineSize="text-lg sm:text-xl"
        />
        <div className="mt-12">
          <LoadingSpinner size="lg" color="text-white" text={translate('loading')} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
