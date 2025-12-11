import React from 'react';

/**
 * IconBox Component
 *
 * A decorative container for icons with gradient backgrounds.
 * Common pattern used throughout the app for feature highlights and contact info.
 *
 * @example
 * ```tsx
 * <IconBox icon={<Mail className="h-5 w-5" />} />
 * <IconBox icon={<User />} color="secondary" size="lg" />
 * <IconBox icon={<Star />} color="accent" rounded="full" />
 * ```
 */

export interface IconBoxProps {
  /** Icon element to display */
  icon: React.ReactNode;
  /** Color scheme */
  color?: 'primary' | 'secondary' | 'accent' | 'gradient';
  /** Size of the icon box */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Border radius */
  rounded?: 'lg' | 'xl' | 'full';
  /** Additional CSS classes */
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  icon,
  color = 'gradient',
  size = 'md',
  rounded = 'lg',
  className = '',
}) => {
  // Base styles
  const baseStyles = 'flex items-center justify-center flex-shrink-0 text-white';

  // Size styles
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // Color styles
  const colorStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    gradient: 'bg-gradient-to-br from-electric-blue-500 to-hot-pink-500',
  };

  // Rounded styles
  const roundedStyles = {
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  // Combine all styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${roundedStyles[rounded]} ${className}`;

  return <div className={combinedStyles}>{icon}</div>;
};

export default IconBox;
