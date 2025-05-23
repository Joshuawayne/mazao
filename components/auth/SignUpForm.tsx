
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { MicrophoneIcon, LockIcon } from '../common/Icon';
import { useAppContext } from '../../contexts/AppContext';
import { ROUTES, COUNTIES, CROPS } from '../../constants';

const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [county, setCounty] = useState(COUNTIES[0] || '');
  const [primaryCrop, setPrimaryCrop] = useState(CROPS[0] || '');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();
  const { login, translate } = useAppContext();

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name || !phone || !county || !primaryCrop) {
        setError(translate('fillAllFields') || "Please fill all fields.");
        return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (phone.length > 9) { 
        setOtpSent(true);
        alert(`${translate('otpSentMock')} ${phone}. (Mock OTP: 1234)`);
    } else {
        setError(translate('invalidPhoneNumber'));
    }
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (otp === '1234') { 
      login({ name, phone, county, primaryCrop });
      navigate(ROUTES.HOME);
    } else {
      setError(translate('invalidOtp'));
    }
    setIsLoading(false);
  };
  
  const inputFieldStyles = "block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm";


  return (
    <form onSubmit={otpSent ? handleSignUp : handleRequestOtp} className="space-y-5">
      {!otpSent ? (
        <>
          <div>
            <label htmlFor="name-signup" className="block text-sm font-medium text-gray-700 mb-1">{translate('name')}</label>
            <input id="name-signup" type="text" value={name} onChange={(e) => setName(e.target.value)} required className={inputFieldStyles} placeholder={translate('enterYourName')}/>
          </div>
          <div>
            <label htmlFor="phone-signup" className="block text-sm font-medium text-gray-700 mb-1">{translate('phoneNumber')}</label>
            <div className="relative">
                <input id="phone-signup" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className={`${inputFieldStyles} pr-10`} placeholder="07XX XXX XXX" />
                <button type="button" title={translate('voiceInputPrompt')} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary p-1">
                    <MicrophoneIcon className="w-5 h-5" />
                </button>
            </div>
          </div>
          <div>
            <label htmlFor="county-signup" className="block text-sm font-medium text-gray-700 mb-1">{translate('county')}</label>
            <select id="county-signup" value={county} onChange={(e) => setCounty(e.target.value)} required className={inputFieldStyles}>
              {COUNTIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="crop-signup" className="block text-sm font-medium text-gray-700 mb-1">{translate('primaryCrop')}</label>
            <select id="crop-signup" value={primaryCrop} onChange={(e) => setPrimaryCrop(e.target.value)} required className={inputFieldStyles}>
              {CROPS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <Button type="submit" variant="primary" fullWidth isLoading={isLoading} size="md">
            {translate('requestOtp')}
          </Button>
        </>
      ) : (
        <>
            <p className="text-sm text-center text-gray-700">{translate('otpSentTo')} {phone}. {translate('enterOtpBelow')}</p>
            <div>
                <label htmlFor="otp-signup" className="block text-sm font-medium text-gray-700 mb-1">{translate('otp')}</label>
                <div className="relative">
                    <input id="otp-signup" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required className={`${inputFieldStyles} pr-10`} placeholder={translate('enterOtp')} />
                    <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
            </div>
            <Button type="submit" variant="primary" fullWidth isLoading={isLoading} size="md">
                {translate('signUp')}
            </Button>
            <Button variant="link" onClick={() => setOtpSent(false)} fullWidth>
              {translate('changePhoneNumber')}
            </Button>
        </>
      )}
      {error && <p className="text-xs text-red-600 text-center mt-2">{error}</p>}
    </form>
  );
};
// Add to i18n: fillAllFields: { sw: "Tafadhali jaza sehemu zote.", en: "Please fill all fields." },
export default SignUpForm;
