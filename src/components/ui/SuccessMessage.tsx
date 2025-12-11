import React from 'react';
import { CheckCircle } from 'lucide-react';

/**
 * SuccessMessage Component
 *
 * A centered success state component with icon and message.
 * Pattern found in Contact.tsx for form submission success.
 *
 * @example
 * ```tsx
 * <SuccessMessage
 *   title="Message Sent!"
 *   message="Thank you for reaching out. We'll get back to you soon."
 * />
 * <SuccessMessage
 *   title="Success"
 *   message="Your profile has been updated."
 *   iconColor="primary"
 * />
 * ```
 */

export interface SuccessMessageProps {
  /** Success title */
  title: string;
  /** Success message */
  message: string;
  /** Icon background color */
  iconColor?: 'primary' | 'secondary' | 'accent' | 'cyber-purple';
  /** Additional CSS classes */
  className?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  message,
  iconColor = 'cyber-purple',
  className = '',
}) => {
  // Icon background color styles
  const iconColorStyles = {
    primary: 'bg-primary-light text-primary',
    secondary: 'bg-secondary-light text-secondary',
    accent: 'bg-accent-light text-accent',
    'cyber-purple': 'bg-cyber-purple-100 text-cyber-purple-600',
  };

  return (
    <div className={`text-center py-12 ${className}`}>
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${iconColorStyles[iconColor]}`}
      >
        <CheckCircle className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default SuccessMessage;
