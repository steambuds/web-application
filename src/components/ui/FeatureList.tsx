import React from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * FeatureList Component
 *
 * A list component for displaying features with icons and descriptions.
 * Common pattern used for feature highlights and benefits.
 *
 * @example
 * ```tsx
 * <FeatureList
 *   items={[
 *     { icon: Star, title: 'Feature 1', description: 'Description here' },
 *     { icon: Zap, title: 'Feature 2', description: 'Description here' }
 *   ]}
 * />
 * ```
 */

export interface FeatureItem {
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

export interface FeatureListProps {
  /** Array of feature items */
  items: FeatureItem[];
  /** Icon color */
  iconColor?: 'primary' | 'secondary' | 'accent' | 'gradient';
  /** Layout orientation */
  orientation?: 'vertical' | 'horizontal';
  /** Additional CSS classes */
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  items,
  iconColor = 'primary',
  orientation = 'vertical',
  className = '',
}) => {
  // Icon color styles
  const iconColorStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    gradient: 'bg-gradient-to-br from-electric-blue-500 to-hot-pink-500 text-white',
  };

  // Orientation styles
  const containerStyles = orientation === 'vertical' ? 'space-y-6' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  return (
    <div className={`${containerStyles} ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-start space-x-4">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                iconColor === 'gradient'
                  ? iconColorStyles.gradient
                  : `bg-${iconColor}-light ${iconColorStyles[iconColor]}`
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureList;
