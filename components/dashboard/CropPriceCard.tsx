
import React from 'react';
import { CropPrice } from '../../types';
import Button from '../common/Button';
import { TrendUpIcon, TrendDownIcon } from '../common/Icon'; 
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';


interface CropPriceCardProps {
  crop: CropPrice;
}

const CropPriceCard: React.FC<CropPriceCardProps> = ({ crop }) => {
  const { translate } = useAppContext();
  const navigate = useNavigate();

  const trendIcon = crop.trend === 'up' 
    ? <TrendUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" /> 
    : crop.trend === 'down' 
    ? <TrendDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" /> 
    : <span className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 font-bold">-</span>;

  const handleSellNow = () => {
    // Navigate to SellProduceScreen and potentially pre-fill crop type
    navigate(ROUTES.SELL_PRODUCE, { state: { prefillCrop: crop.name } });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 w-44 sm:w-48 md:w-52 flex-shrink-0 snap-start">
      <div className="flex items-center mb-1 sm:mb-2">
        <span className="text-2xl sm:text-3xl mr-2">{crop.icon}</span>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">{crop.name}</h3>
      </div>
      <div className="flex items-baseline justify-between mb-2 sm:mb-3">
        <p className="text-lg sm:text-xl font-bold text-primary-dark">{crop.price}</p>
        <div className="flex items-center">
          {trendIcon}
        </div>
      </div>
      <Button variant="secondary" size="sm" fullWidth onClick={handleSellNow}>
        {translate('sellNow')}
      </Button>
    </div>
  );
};

export default CropPriceCard;
