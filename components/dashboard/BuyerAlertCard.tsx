
import React, { useState } from 'react';
import { BuyerAlert } from '../../types';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { CheckCircleIcon } from '../common/Icon';
import { useAppContext } from '../../contexts/AppContext';

interface BuyerAlertCardProps {
  buyerAlert: BuyerAlert;
}

const BuyerAlertCard: React.FC<BuyerAlertCardProps> = ({ buyerAlert }) => {
  const { translate } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnect = () => {
    setIsModalOpen(true);
  };

  const handleMockCall = () => {
    window.alert(translate('mockCallInitiated', { buyerName: buyerAlert.buyerName }));
    setIsModalOpen(false);
  };

  const handleMockMessage = () => {
    window.alert(translate('mockMessageSent', { buyerName: buyerAlert.buyerName }));
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow duration-200">
        <p className="text-sm sm:text-base text-gray-700 mb-2">{buyerAlert.message}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center">
            {buyerAlert.isVerified && (
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5" />
            )}
            <span className={`text-xs sm:text-sm font-medium ${buyerAlert.isVerified ? 'text-green-600' : 'text-gray-500'}`}>
              {buyerAlert.isVerified ? translate('verifiedBuyer') : translate('buyerNotVerified')}
            </span>
            <span className="text-xs text-gray-500 mx-1 sm:mx-2 hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm text-gray-600 block sm:inline mt-1 sm:mt-0">{buyerAlert.buyerName}</span>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={handleConnect}
            className="mt-2 sm:mt-0 w-full sm:w-auto !py-1.5"
            aria-label={`${translate('connectWith')} ${buyerAlert.buyerName}`}
          >
            {translate('connect')}
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${translate('connectWith')} ${buyerAlert.buyerName}`}
      >
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700">{translate('verificationStatus')}:</p>
            <p className={`text-sm ${buyerAlert.isVerified ? 'text-green-600' : 'text-red-600'}`}>
              {buyerAlert.isVerified ? translate('verifiedBuyer') : translate('buyerNotVerified')}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">{translate('contactDetails')}:</p>
            <p className="text-sm text-gray-600">{translate('mockPhoneNumber')}: 07XX-XXX-XXX (Mock)</p>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
          <Button onClick={handleMockMessage} variant="outline" size="sm" fullWidth className="sm:w-auto">
            {translate('messageBuyerMock')}
          </Button>
          <Button onClick={handleMockCall} variant="primary" size="sm" fullWidth className="sm:w-auto">
            {translate('callBuyerMock', { buyerName: buyerAlert.buyerName })}
          </Button>
        </div>
         <div className="mt-4 text-center sm:text-right">
            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                {translate('close')}
            </Button>
        </div>
      </Modal>
    </>
  );
};

export default BuyerAlertCard;
