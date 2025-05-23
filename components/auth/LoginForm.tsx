
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { LockIcon } from '../common/Icon';
import { useAppContext } from '../../contexts/AppContext';
import { ROUTES, MOCK_USER_NAME, COUNTIES, CROPS } from '../../constants';

const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, translate } = useAppContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (phone === '0712345678' && otp === '1234') { 
      login({
        name: MOCK_USER_NAME, 
        phone: phone,
        county: COUNTIES[Math.floor(Math.random() * COUNTIES.length)], 
        primaryCrop: CROPS[Math.floor(Math.random() * CROPS.length)], 
      });
      navigate(ROUTES.HOME);
    } else {
      setError(translate('invalidCredentials') || 'Invalid phone or OTP. Try 0712345678 / 1234');
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="phone-login" className="block text-sm font-medium text-gray-700 mb-1">
          {translate('phoneNumber')}
        </label>
        <input
          id="phone-login"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          placeholder="07XX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="otp-login" className="block text-sm font-medium text-gray-700 mb-1">
          {translate('otp')}
        </label>
        <div className="relative">
          <input
            id="otp-login"
            type="password" 
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm pr-10"
            placeholder={translate('enterOtp') || "Enter OTP"}
          />
          <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {error && <p className="text-xs text-red-600 text-center">{error}</p>}

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-primary focus:ring-primary-dark border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-gray-900">
            {translate('rememberMe')}
          </label>
        </div>
        <Button variant="link" type="button" className="font-medium text-primary-dark hover:text-primary text-sm p-0">
          {translate('forgotOTP')}
        </Button>
      </div>

      <Button type="submit" variant="primary" fullWidth isLoading={isLoading} size="md">
        {translate('logIn')}
      </Button>
    </form>
  );
};

export default LoginForm;
