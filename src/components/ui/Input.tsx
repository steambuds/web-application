import React from 'react';

/**
 * Input Component
 *
 * A fully-featured form input component with label, error, and icon support.
 * Supports various input types and states.
 *
 * @example
 * ```tsx
 * <Input label="Email" type="email" placeholder="you@example.com" />
 * <Input label="Password" type="password" error="Password is required" />
 * <Input label="Search" iconLeft={<Search />} />
 * <Input label="Name" required iconRight={<User />} />
 * ```
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Icon to display on the left inside the input */
  iconLeft?: React.ReactNode;
  /** Icon to display on the right inside the input */
  iconRight?: React.ReactNode;
  /** Helper text to display below the input */
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      iconLeft,
      iconRight,
      helperText,
      required = false,
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

    // Base input styles
    const baseStyles = 'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2';

    // State styles
    const stateStyles = error
      ? 'border-hot-pink-500 focus:ring-hot-pink-400 focus:shadow-lg focus:shadow-hot-pink-200'
      : 'border-gray-300 focus:ring-electric-blue-400 focus:shadow-lg focus:shadow-electric-blue-200 focus:border-transparent hover:border-cyber-purple-300';

    // Disabled styles
    const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : '';

    // Padding adjustments for icons
    const paddingStyles = iconLeft && iconRight
      ? 'pl-10 pr-10'
      : iconLeft
      ? 'pl-10'
      : iconRight
      ? 'pr-10'
      : '';

    // Combine all styles
    const combinedStyles = `${baseStyles} ${stateStyles} ${disabledStyles} ${paddingStyles} ${className}`;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-hot-pink-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {iconLeft && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {iconLeft}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            id={inputId}
            className={combinedStyles}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {iconRight && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {iconRight}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-hot-pink-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
