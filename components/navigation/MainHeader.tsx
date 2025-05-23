
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { Language } from '../../types';
import Logo from '../common/Logo';
import { MicrophoneIcon } from '../common/Icon';
import { ROUTES } from '../../constants';

const MainHeader: React.FC = () => {
  const { user, language, setLanguage, translate } = useAppContext();
  const location = useLocation();

  const noHeaderPaths = [ROUTES.SPLASH, ROUTES.ONBOARDING, ROUTES.AUTH];
  if (noHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 h-[var(--header-height)] flex items-center">
      <div className="container mx-auto px-2 sm:px-4 py-2 flex justify-between items-center">
        <Link to={ROUTES.HOME} className="shrink-0">
          <Logo size="text-lg sm:text-xl" textColor="text-primary-dark"/>
        </Link>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          {user && (
            <>
              <div className="text-right hidden md:block">
                <p className="text-xs sm:text-sm font-medium text-gray-700">{translate('welcome')}, {user.name}!</p>
                <p className="text-xs text-gray-500">{user.county}</p>
              </div>
              <button 
                title={translate('talkToAgriGrow')}
                className="p-1.5 sm:p-2 text-gray-600 hover:text-primary rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => alert(translate('voiceInputNotAvailable'))}
              >
                <MicrophoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
          <select 
            onChange={(e) => setLanguage(e.target.value as Language)} 
            value={language}
            className="p-1 sm:p-1.5 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-700 focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50"
            aria-label="Select language"
          >
            <option value="sw">🇰🇪 SW</option>
            <option value="en">🇬🇧 EN</option>
            <option value="ki">🇰🇪 KI</option>
            <option value="lu">🇰🇪 LU</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
