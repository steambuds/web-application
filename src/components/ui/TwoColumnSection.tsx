import React from 'react';

/**
 * TwoColumnSection Component
 *
 * A responsive two-column layout component for text + image or content + content layouts.
 * Automatically stacks on mobile devices.
 *
 * @example
 * ```tsx
 * <TwoColumnSection
 *   left={<div><h2>About Us</h2><p>Description...</p></div>}
 *   right={<img src="..." alt="..." />}
 * />
 *
 * <TwoColumnSection
 *   left={<img src="..." />}
 *   right={<div>Content...</div>}
 *   reverse
 * />
 * ```
 */

export interface TwoColumnSectionProps {
  /** Content for left column */
  left: React.ReactNode;
  /** Content for right column */
  right: React.ReactNode;
  /** Reverse column order on desktop (right first) */
  reverse?: boolean;
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end';
  /** Gap between columns */
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional CSS classes */
  className?: string;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  left,
  right,
  reverse = false,
  align = 'center',
  gap = 'lg',
  className = '',
}) => {
  // Alignment styles
  const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };

  // Gap styles
  const gapStyles = {
    sm: 'gap-6',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16',
  };

  // Reverse styles
  const reverseStyles = reverse ? 'lg:flex-row-reverse' : '';

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 ${gapStyles[gap]} ${alignStyles[align]} ${reverseStyles} ${className}`}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default TwoColumnSection;
