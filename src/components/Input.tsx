import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon: Icon, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
          )}
          <input
            ref={ref}
            className={`w-full border rounded-lg py-2.5 ${
              Icon ? 'pl-10' : 'pl-3'
            } pr-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400 ${
              error ? 'border-hot-pink-500 focus:ring-hot-pink-400' : 'border-gray-300'
            } ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-hot-pink-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
