import React from 'react';

/**
 * Textarea Component
 *
 * A multi-line text input component with label and error support.
 *
 * @example
 * ```tsx
 * <Textarea label="Message" placeholder="Enter your message..." rows={4} />
 * <Textarea label="Description" error="Description is required" required />
 * <Textarea label="Comments" helperText="Maximum 500 characters" />
 * ```
 */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below the textarea */
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      required = false,
      disabled = false,
      className = '',
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided
    const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

    // Base textarea styles
    const baseStyles = 'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 resize-none';

    // State styles
    const stateStyles = error
      ? 'border-hot-pink-500 focus:ring-hot-pink-400 focus:shadow-lg focus:shadow-hot-pink-200'
      : 'border-gray-300 focus:ring-electric-blue-400 focus:shadow-lg focus:shadow-electric-blue-200 focus:border-transparent hover:border-cyber-purple-300';

    // Disabled styles
    const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : '';

    // Combine all styles
    const combinedStyles = `${baseStyles} ${stateStyles} ${disabledStyles} ${className}`;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-hot-pink-500 ml-1">*</span>}
          </label>
        )}

        {/* Textarea Field */}
        <textarea
          ref={ref}
          id={textareaId}
          className={combinedStyles}
          disabled={disabled}
          required={required}
          rows={rows}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />

        {/* Error Message */}
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 text-sm text-hot-pink-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p id={`${textareaId}-helper`} className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
