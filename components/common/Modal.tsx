
import React, { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, size = 'md' }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div 
        className={`bg-white rounded-lg shadow-xl w-full ${sizeClasses[size]} transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modalShow`}
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
        role="document"
      >
        <div className="p-5 sm:p-6">
          {(title || onClose) && (
            <div className="flex justify-between items-center mb-4">
              {title && <h3 id="modal-title" className="text-xl font-semibold text-gray-800">{title}</h3>}
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          )}
          <div className="text-gray-700">
            {children}
          </div>
        </div>
        {footer && (
          <div className="px-5 sm:px-6 py-4 bg-gray-50 rounded-b-lg flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
            {footer}
          </div>
        )}
      </div>
      {/* Fix: Replaced <style jsx global> with standard <style> for React compatibility */}
      <style>{`
        @keyframes modalShow {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-modalShow {
          animation: modalShow 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default Modal;