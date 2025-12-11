import React from 'react';

/**
 * Badge Component
 *
 * A small label component for tags, statuses, and labels.
 * Based on the .badge and .badge-outline classes from index.css.
 *
 * @example
 * ```tsx
 * <Badge>New</Badge>
 * <Badge variant="outline">Featured</Badge>
 * <Badge color="secondary">Popular</Badge>
 * <Badge color="accent" size="lg">Hot</Badge>
 * ```
 */

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'solid' | 'outline';
  /** Color scheme */
  color?: 'primary' | 'secondary' | 'accent' | 'gray' | 'success' | 'warning' | 'error';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className = '',
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center rounded-full font-medium';

  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  };

  // Solid variant color styles
  const solidColorStyles = {
    primary: 'bg-primary-light text-primary-dark',
    secondary: 'bg-secondary-light text-secondary-dark',
    accent: 'bg-accent-light text-accent-dark',
    gray: 'bg-gray-200 text-gray-800',
    success: 'bg-cyber-purple-100 text-cyber-purple-700',
    warning: 'bg-hot-pink-100 text-hot-pink-700',
    error: 'bg-hot-pink-200 text-hot-pink-800',
  };

  // Outline variant color styles
  const outlineColorStyles = {
    primary: 'border border-primary-light text-primary-dark bg-white',
    secondary: 'border border-secondary-light text-secondary-dark bg-white',
    accent: 'border border-accent-light text-accent-dark bg-white',
    gray: 'border border-gray-300 text-gray-700 bg-white',
    success: 'border border-cyber-purple-300 text-cyber-purple-700 bg-white',
    warning: 'border border-hot-pink-300 text-hot-pink-700 bg-white',
    error: 'border border-hot-pink-400 text-hot-pink-800 bg-white',
  };

  // Select color styles based on variant
  const colorStyles = variant === 'solid' ? solidColorStyles[color] : outlineColorStyles[color];

  // Combine all styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles} ${className}`;

  return <span className={combinedStyles}>{children}</span>;
};

export default Badge;
