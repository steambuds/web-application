import React from 'react';

/**
 * Heading Component
 *
 * A typography component for h1-h6 headings with consistent styling.
 * Uses Poppins font family as defined in the design system.
 *
 * @example
 * ```tsx
 * <Heading level={1}>Main Title</Heading>
 * <Heading level={2} gradient>Section Title</Heading>
 * <Heading level={3} className="mb-4">Subsection</Heading>
 * ```
 */

export interface HeadingProps {
  /** Heading level (h1-h6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Heading content */
  children: React.ReactNode;
  /** Apply gradient text effect */
  gradient?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  gradient = false,
  align = 'left',
  className = '',
}) => {
  // Font family - Poppins for all headings
  const fontFamily = 'font-display';

  // Base heading styles
  const baseStyles = 'font-bold text-gray-800';

  // Size styles for each heading level
  const sizeStyles = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Gradient text effect
  const gradientStyles = gradient
    ? 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'
    : '';

  // Combine all styles
  const combinedStyles = `${fontFamily} ${baseStyles} ${sizeStyles[level]} ${alignStyles[align]} ${gradientStyles} ${className}`;

  // Render the appropriate heading tag
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={combinedStyles}>{children}</Tag>;
};

export default Heading;
