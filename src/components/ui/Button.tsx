import React from 'react';

/**
 * Button Component
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Supports icons on the left or right side.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click Me</Button>
 * <Button variant="outline" size="lg" iconLeft={<Mail />}>Email Us</Button>
 * <Button variant="secondary" fullWidth disabled>Disabled</Button>
 * <Button variant="accent" loading>Loading...</Button>
 * ```
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Icon to display on the left */
  iconLeft?: React.ReactNode;
  /** Icon to display on the right */
  iconRight?: React.ReactNode;
  /** Make button full width */
  fullWidth?: boolean;
  /** Show loading state */
  loading?: boolean;
  /** Button content */
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      fullWidth = false,
      loading = false,
      disabled = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    // Variant styles
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-md',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary shadow-md',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
      accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent shadow-md',
    };

    // Size styles
    const sizeStyles = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-6 text-base',
      lg: 'py-4 px-8 text-lg',
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

    return (
      <button
        ref={ref}
        className={combinedStyles}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {!loading && iconRight && <span className="ml-2">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
