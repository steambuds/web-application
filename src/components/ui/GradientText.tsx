import React from 'react';

/**
 * GradientText Component
 *
 * Renders text with a gradient effect using the brand colors.
 * Based on the .gradient-text class from index.css.
 *
 * @example
 * ```tsx
 * <GradientText>Amazing Features</GradientText>
 * <GradientText className="text-4xl font-bold">Hero Title</GradientText>
 * <GradientText as="span">Highlighted text</GradientText>
 * ```
 */

export interface GradientTextProps {
  /** Text content */
  children: React.ReactNode;
  /** HTML tag to render */
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  as: Tag = 'span',
  className = '',
}) => {
  // Gradient text styles from index.css
  const gradientStyles = 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent';

  // Combine styles
  const combinedStyles = `${gradientStyles} ${className}`;

  return <Tag className={combinedStyles}>{children}</Tag>;
};

export default GradientText;
