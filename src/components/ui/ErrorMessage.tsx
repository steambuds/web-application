import React from 'react';
import { AlertCircle, XCircle } from 'lucide-react';

/**
 * ErrorMessage Component
 *
 * A component for displaying error states with consistent styling.
 * Can be used for inline form errors or full-page error states.
 *
 * @example
 * ```tsx
 * <ErrorMessage message="Something went wrong. Please try again." />
 * <ErrorMessage
 *   title="Error"
 *   message="Failed to load data."
 *   variant="centered"
 * />
 * <ErrorMessage message="Invalid email address" variant="inline" />
 * ```
 */

export interface ErrorMessageProps {
  /** Error message */
  message: string;
  /** Optional error title */
  title?: string;
  /** Display variant */
  variant?: 'inline' | 'centered' | 'banner';
  /** Icon to display */
  icon?: 'alert' | 'x-circle' | 'none';
  /** Additional CSS classes */
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  title,
  variant = 'inline',
  icon = 'alert',
  className = '',
}) => {
  // Icon selection
  const IconComponent = icon === 'alert' ? AlertCircle : icon === 'x-circle' ? XCircle : null;

  // Variant styles
  if (variant === 'inline') {
    return (
      <div className={`flex items-start space-x-2 text-hot-pink-600 ${className}`} role="alert">
        {IconComponent && <IconComponent className="h-5 w-5 flex-shrink-0 mt-0.5" />}
        <div>
          {title && <p className="font-semibold">{title}</p>}
          <p className={title ? 'text-sm' : ''}>{message}</p>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        className={`bg-hot-pink-50 border border-hot-pink-200 rounded-lg p-4 ${className}`}
        role="alert"
      >
        <div className="flex items-start space-x-3">
          {IconComponent && (
            <div className="flex-shrink-0">
              <IconComponent className="h-5 w-5 text-hot-pink-600" />
            </div>
          )}
          <div className="flex-1">
            {title && <h3 className="text-sm font-semibold text-hot-pink-800 mb-1">{title}</h3>}
            <p className="text-sm text-hot-pink-700">{message}</p>
          </div>
        </div>
      </div>
    );
  }

  // Centered variant
  return (
    <div className={`text-center py-12 ${className}`} role="alert">
      {IconComponent && (
        <div className="bg-hot-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <IconComponent className="h-10 w-10 text-hot-pink-600" />
        </div>
      )}
      {title && <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>}
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;
