import React from 'react';

/**
 * HeroSection Component
 *
 * A reusable hero section template with gradient background and pattern.
 * Common pattern used at the top of pages throughout the app.
 *
 * @example
 * ```tsx
 * <HeroSection
 *   title="Welcome to STEAM Buds"
 *   subtitle="Empowering the next generation of innovators"
 * />
 *
 * <HeroSection
 *   title="About Us"
 *   subtitle="Learn about our mission and team"
 *   pattern="dots"
 *   gradientFrom="electric-blue-50"
 *   gradientTo="hot-pink-50"
 * />
 * ```
 */

export interface HeroSectionProps {
  /** Main title */
  title: string | React.ReactNode;
  /** Subtitle text */
  subtitle?: string | React.ReactNode;
  /** Background pattern */
  pattern?: 'none' | 'dots' | 'grid';
  /** Gradient start color */
  gradientFrom?: string;
  /** Gradient end color */
  gradientTo?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional content (buttons, etc.) */
  children?: React.ReactNode;
  /** Vertical padding size */
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional CSS classes */
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  pattern = 'none',
  gradientFrom = 'electric-blue-50',
  gradientTo = 'hot-pink-50',
  align = 'center',
  children,
  paddingY = 'lg',
  className = '',
}) => {
  // Pattern styles
  const patternStyles = {
    none: '',
    dots: 'pattern-dots',
    grid: 'pattern-grid',
  };

  // Padding styles
  const paddingStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-28',
  };

  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <section
      className={`bg-gradient-to-br from-${gradientFrom} to-${gradientTo} ${paddingStyles[paddingY]} ${patternStyles[pattern]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={alignStyles[align]}>
          {/* Title */}
          {typeof title === 'string' ? (
            <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
              {title}
            </h1>
          ) : (
            title
          )}

          {/* Subtitle */}
          {subtitle && (
            typeof subtitle === 'string' ? (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            ) : (
              subtitle
            )
          )}

          {/* Additional Content */}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
