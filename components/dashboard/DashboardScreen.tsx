
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { CropPrice, BuyerAlert, QuickTip } from '../../types';
import { getMockBuyerAlerts, getMockQuickTips } from '../../services/mockApiService'; // Keep for alerts and tips
import { fetchCropPrices } from '../../services/apiService'; // Import new API service
import CropPriceCard from './CropPriceCard';
import BuyerAlertCard from './BuyerAlertCard';
import Button from '../common/Button';
import { ROUTES } from '../../constants';
import LoadingSpinner from '../common/LoadingSpinner';

const DashboardScreen: React.FC = () => {
  const { translate, user } = useAppContext();
  const navigate = useNavigate();
  
  const [cropPrices, setCropPrices] = useState<CropPrice[]>([]);
  const [isLoadingPrices, setIsLoadingPrices] = useState<boolean>(true);
  const [pricesError, setPricesError] = useState<string | null>(null);

  const [buyerAlerts, setBuyerAlerts] = useState<BuyerAlert[]>([]);
  const [quickTips, setQuickTips] = useState<QuickTip[]>([]);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const loadCropPrices = async () => {
      setIsLoadingPrices(true);
      setPricesError(null);
      try {
        const prices = await fetchCropPrices();
        setCropPrices(prices);
      } catch (err) {
        setPricesError(translate('apiError') || 'Failed to load crop prices.');
        console.error(err);
      } finally {
        setIsLoadingPrices(false);
      }
    };

    loadCropPrices();
    setBuyerAlerts(getMockBuyerAlerts()); // Continue using mock for these for now
    setQuickTips(getMockQuickTips());     // Continue using mock for these for now
  }, [translate]);

  useEffect(() => {
    if (quickTips.length === 0) return;
    const tipInterval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % quickTips.length);
    }, 5000); // Rotate tip every 5 seconds
    return () => clearInterval(tipInterval);
  }, [quickTips]);

  const currentTip = quickTips[currentTipIndex];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* User Greeting for smaller screens, as MainHeader might hide it */}
      <div className="md:hidden mb-3">
        <h1 className="text-xl font-semibold text-gray-800">
          {translate('welcome')}, {user?.name}!
        </h1>
        <p className="text-sm text-gray-600">{user?.county}</p>
      </div>

      {/* Crop Price Carousel */}
      <section aria-labelledby="market-prices-heading">
        <h2 id="market-prices-heading" className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{translate('marketPrices')}</h2>
        {isLoadingPrices && (
          <div className="flex justify-center items-center h-32">
            <LoadingSpinner text={translate('loading')} />
          </div>
        )}
        {pricesError && !isLoadingPrices && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{translate('error')}: </strong>
            <span className="block sm:inline">{pricesError}</span>
          </div>
        )}
        {!isLoadingPrices && !pricesError && cropPrices.length > 0 && (
          <div className="flex overflow-x-auto space-x-3 sm:space-x-4 pb-3 scrollbar-thin">
            {cropPrices.map(crop => (
              <CropPriceCard key={crop.id} crop={crop} />
            ))}
          </div>
        )}
         {!isLoadingPrices && !pricesError && cropPrices.length === 0 && (
            <p className="text-gray-600 bg-white p-4 rounded-md shadow-sm">No crop prices available at the moment.</p>
        )}
      </section>

      {/* Buyer Match Alerts */}
      <section aria-labelledby="buyer-alerts-heading">
        <h2 id="buyer-alerts-heading" className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{translate('buyerAlerts')}</h2>
        {buyerAlerts.length > 0 ? (
          <div className="space-y-3">
            {buyerAlerts.map(alertItem => (
              <BuyerAlertCard key={alertItem.id} buyerAlert={alertItem} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 bg-white p-4 rounded-md shadow-sm">{translate('noBuyerAlerts')}</p>
        )}
      </section>

      {/* Quick Tips Banner */}
      {currentTip && (
        <section aria-labelledby="quick-tips-heading">
          <h2 id="quick-tips-heading" className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{translate('quickTips')}</h2>
          <div className="bg-primary-light text-primary-dark p-3 sm:p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-sm sm:text-base mb-2 sm:mb-0 sm:mr-4 flex-grow">{currentTip.text}</p>
            {currentTip.detailsLink && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-white !border !px-3 !py-1.5 self-start sm:self-center"
                onClick={() => navigate(currentTip.detailsLink as string)}
              >
                {translate('learnMore')}
              </Button>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default DashboardScreen;
