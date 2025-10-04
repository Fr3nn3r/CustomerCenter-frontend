import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { useTranslation } from 'react-i18next';

const LetsTalkModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-ink">{t('modal.title')}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-ink transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-swiss-red focus:ring-offset-2 rounded-lg p-2"
            aria-label={t('modal.close')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Calendly Widget */}
        <div className="h-[600px] overflow-auto">
          <InlineWidget
            url="https://calendly.com/frederic-brunner/intro"
            styles={{
              height: '100%',
              minHeight: '600px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LetsTalkModal;
