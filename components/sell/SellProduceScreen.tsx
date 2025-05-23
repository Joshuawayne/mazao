
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { CROPS, COUNTIES } from '../../constants';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { MicrophoneIcon, CheckCircleIcon } from '../common/Icon';
import { submitFarmListing, getMockInterestedBuyers } from '../../services/mockApiService';
import { FarmListing, BuyerAlert } from '../../types';
import BuyerAlertCard from '../dashboard/BuyerAlertCard'; // Re-use for consistent display

const SellProduceScreen: React.FC = () => {
  const { user, translate } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation(); // To get prefill data if any

  const [cropType, setCropType] = useState((location.state as {prefillCrop?: string})?.prefillCrop || CROPS[0] || '');
  const [quantity, setQuantity] = useState('');
  const [askingPrice, setAskingPrice] = useState('');
  const [pickupLocation, setPickupLocation] = useState(user?.county || COUNTIES[0] || '');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });
  const [isTipsModalOpen, setIsTipsModalOpen] = useState(false);
  const [listedProduceId, setListedProduceId] = useState<string | null>(null);
  const [interestedBuyers, setInterestedBuyers] = useState<BuyerAlert[]>([]);


  useEffect(() => {
    if (!user) {
      // This should ideally be caught by ProtectedRoute, but as a fallback:
      navigate('/auth', { state: { message: translate('pleaseLoginToSell') }});
    }
    setPickupLocation(user?.county || COUNTIES[0] || '');
    if ((location.state as {prefillCrop?: string})?.prefillCrop) {
      setCropType((location.state as {prefillCrop?: string})?.prefillCrop as string);
    }
  }, [user, navigate, translate, location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setListedProduceId(null);
    setInterestedBuyers([]);

    if (!cropType || !quantity || !pickupLocation) {
      setError(translate('fillAllFields') || 'Please fill all required fields.');
      setIsLoading(false);
      return;
    }

    const listingData: FarmListing = {
      cropType,
      quantity: parseFloat(quantity),
      askingPrice: askingPrice ? parseFloat(askingPrice) : undefined,
      pickupLocation,
    };

    const response = await submitFarmListing(listingData);
    if (response.success && response.listingId) {
      setModalContent({ title: translate('listingSuccessfulTitle'), message: translate(response.messageKey) });
      setIsModalOpen(true);
      setListedProduceId(response.listingId);
      setInterestedBuyers(getMockInterestedBuyers(response.listingId)); // Fetch mock buyers
      // Reset form partially
      setQuantity('');
      setAskingPrice('');
    } else {
      setError(translate(response.messageKey) || translate('listingFailedError'));
    }
    setIsLoading(false);
  };

  const inputFieldStyles = "block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-1";

  if (!user) return <p>{translate('pleaseLoginToSell')}</p>; // Fallback if navigation fails

  return (
    <div className="max-w-lg mx-auto p-2 sm:p-0">
      <h1 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">{translate('sellYourProduce')}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="cropType" className={labelStyles}>{translate('cropType')}</label>
          <select id="cropType" value={cropType} onChange={(e) => setCropType(e.target.value)} required className={inputFieldStyles}>
            {CROPS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className={labelStyles}>{translate('quantityKg')}</label>
          <div className="relative">
            <input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required className={`${inputFieldStyles} pr-10`} placeholder={translate('enterQuantity')} inputMode="decimal" />
            <button type="button" title={translate('voiceInputPrompt')} onClick={() => alert(translate('voiceInputNotAvailable'))} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary p-1">
                <MicrophoneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="askingPrice" className={labelStyles}>
            {translate('askingPriceKsh')} <span className="text-xs text-gray-500">({translate('optionalPrefilled')})</span>
          </label>
          <input id="askingPrice" type="number" value={askingPrice} onChange={(e) => setAskingPrice(e.target.value)} className={inputFieldStyles} placeholder={translate('enterPricePerKg')} inputMode="decimal"/>
        </div>

        <div>
          <label htmlFor="pickupLocation" className={labelStyles}>{translate('pickupLocation')}</label>
          <input id="pickupLocation" type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required className={inputFieldStyles} />
        </div>

        {error && <p className="text-xs text-red-600 text-center">{error}</p>}

        <Button type="submit" variant="primary" fullWidth isLoading={isLoading} size="md">
          {translate('listForSale')}
        </Button>

        <div className="text-center mt-3">
            <Button variant="link" onClick={() => setIsTipsModalOpen(true)} className="text-sm">
                {translate('safeSellingTips')}
            </Button>
        </div>
      </form>

      {listedProduceId && interestedBuyers.length > 0 && (
        <div className="mt-6 sm:mt-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{translate('interestedBuyers')}</h2>
            <div className="space-y-3">
                {interestedBuyers.map(buyer => (
                    <BuyerAlertCard key={buyer.id} buyerAlert={buyer} />
                ))}
            </div>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
        <div className="text-center">
          <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-3"/>
          <p>{modalContent.message}</p>
        </div>
        <div className="mt-4 text-right">
          <Button onClick={() => setIsModalOpen(false)} variant="primary">{translate('ok')}</Button>
        </div>
      </Modal>

      <Modal isOpen={isTipsModalOpen} onClose={() => setIsTipsModalOpen(false)} title={translate('safeSellingTips')}>
        <p className="text-sm text-gray-600">{translate('safeSellingTipsDetails')}</p>
        <div className="mt-4 text-right">
            <Button onClick={() => setIsTipsModalOpen(false)} variant="primary">{translate('ok')}</Button>
        </div>
      </Modal>
    </div>
  );
};

export default SellProduceScreen;
