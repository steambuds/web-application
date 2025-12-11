import React from 'react';

/**
 * Card Component
 *
 * A versatile card container with multiple variants for different use cases.
 * Based on the .card class from index.css with additional variant options.
 *
 * @example
 * ```tsx
 * <Card>Basic card content</Card>
 * <Card variant="gradient">Card with gradient background</Card>
 * <Card variant="hover" padding="lg">Hoverable card with large padding</Card>
 * <Card variant="flat" border shadow="sm">Flat card with custom border and shadow</Card>
 * ```
 */

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Visual variant of the card */
  variant?: 'basic' | 'gradient' | 'hover' | 'flat';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Add border */
  border?: boolean;
  /** Shadow size */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'basic',
      padding = 'md',
      border = false,
      shadow,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'bg-white rounded-xl transition-all duration-300';

    // Variant styles
    const variantStyles = {
      basic: 'shadow-lg hover:shadow-2xl',
      gradient: 'bg-gradient-to-br from-electric-blue-50 to-hot-pink-50 shadow-lg',
      hover: 'shadow-lg hover:shadow-2xl hover:scale-105 hover:shadow-electric-blue-200 border hover:border-cyber-purple-200',
      flat: '',
    };

    // Padding styles
    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    // Shadow styles (if explicitly set)
    const shadowStyles = shadow
      ? {
          none: 'shadow-none',
          sm: 'shadow-sm',
          md: 'shadow-md',
          lg: 'shadow-lg',
          xl: 'shadow-xl',
          '2xl': 'shadow-2xl',
        }[shadow]
      : '';

    // Border styles
    const borderStyles = border ? 'border border-gray-200' : '';

    // Clickable styles
    const clickableStyles = onClick ? 'cursor-pointer' : '';

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${shadowStyles} ${borderStyles} ${clickableStyles} ${className}`;

    return (
      <div
        ref={ref}
        className={combinedStyles}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyPress={
          onClick
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onClick();
                }
              }
            : undefined
        }
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
