import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

export interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  onClose
}) => {
  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-800',
      iconColor: 'text-green-500',
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-hot-pink-50',
      borderColor: 'border-hot-pink-500',
      textColor: 'text-hot-pink-800',
      iconColor: 'text-hot-pink-500',
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-500',
    },
    info: {
      icon: Info,
      bgColor: 'bg-electric-blue-50',
      borderColor: 'border-electric-blue-500',
      textColor: 'text-electric-blue-800',
      iconColor: 'text-electric-blue-500',
    },
  };

  const { icon: Icon, bgColor, borderColor, textColor, iconColor } = config[type];

  return (
    <div className={`${bgColor} border-l-4 ${borderColor} p-4 rounded-lg`} role="alert">
      <div className="flex items-start">
        <Icon className={`${iconColor} h-5 w-5 mt-0.5 flex-shrink-0`} />
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${textColor} mb-1`}>{title}</h3>
          )}
          <p className={`text-sm ${textColor}`}>{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`ml-3 flex-shrink-0 ${iconColor} hover:opacity-70 transition-opacity`}
            aria-label="Close alert"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
