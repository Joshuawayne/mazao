
import React, { useState } from 'react';
import Logo from '../common/Logo';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { useAppContext } from '../../contexts/AppContext';
import { Language } from '../../types';
import Button from '../common/Button';


const AuthScreen: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const { language, setLanguage, translate } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-light via-green-50 to-yellow-100 p-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="mb-6 sm:mb-8 text-center">
          <Logo 
            size="text-2xl sm:text-3xl"
            textColor="text-primary-dark"
            showTagline={true}
            taglineText={translate('tagline')}
            taglineSize="text-sm sm:text-md"
          />
        </div>

        {isLoginView ? <LoginForm /> : <SignUpForm />}

        <div className="mt-6 text-center">
          <Button
            variant="link"
            onClick={() => setIsLoginView(!isLoginView)}
            className="text-sm text-primary-dark hover:text-primary focus:text-primary"
          >
            {isLoginView
              ? `${translate('dontHaveAccount')} ${translate('signUp')}`
              : `${translate('alreadyHaveAccount')} ${translate('logIn')}`}
          </Button>
        </div>
      </div>
       <div className="mt-4 text-center">
         <select 
            onChange={(e) => setLanguage(e.target.value as Language)} 
            value={language}
            className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
            aria-label="Select language"
          >
            <option value="sw">🇰🇪 Kiswahili</option>
            <option value="en">🇬🇧 English</option>
            <option value="ki">🇰🇪 Gĩkũyũ</option>
            <option value="lu">🇰🇪 Dholuo</option>
        </select>
      </div>
    </div>
  );
};

export default AuthScreen;
