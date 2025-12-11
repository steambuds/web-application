import React from 'react';

/**
 * Select Component
 *
 * A dropdown select component with label and error support.
 *
 * @example
 * ```tsx
 * <Select label="Country" options={[{value: 'us', label: 'United States'}]} />
 * <Select label="Role" error="Please select a role" required>
 *   <option value="">Choose...</option>
 *   <option value="student">Student</option>
 *   <option value="teacher">Teacher</option>
 * </Select>
 * ```
 */

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label text */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below the select */
  helperText?: string;
  /** Array of options (alternative to children) */
  options?: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      required = false,
      disabled = false,
      className = '',
      id,
      children,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided
    const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

    // Base select styles
    const baseStyles = 'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 appearance-none bg-white cursor-pointer';

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
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-hot-pink-500 ml-1">*</span>}
          </label>
        )}

        {/* Select Container with Custom Arrow */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={combinedStyles}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            {...props}
          >
            {options
              ? options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))
              : children}
          </select>

          {/* Custom Arrow Icon */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-2 text-sm text-hot-pink-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p id={`${selectId}-helper`} className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
