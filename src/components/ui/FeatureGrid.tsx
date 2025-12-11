import React from 'react';

/**
 * FeatureGrid Component
 *
 * A responsive grid layout component for displaying cards, features, or content.
 * Automatically adjusts columns based on screen size.
 *
 * @example
 * ```tsx
 * <FeatureGrid>
 *   <Card>Feature 1</Card>
 *   <Card>Feature 2</Card>
 *   <Card>Feature 3</Card>
 * </FeatureGrid>
 *
 * <FeatureGrid columns={4} gap="lg">
 *   {items.map(item => <Card key={item.id}>{item.content}</Card>)}
 * </FeatureGrid>
 * ```
 */

export interface FeatureGridProps {
  /** Grid items */
  children: React.ReactNode;
  /** Number of columns on desktop */
  columns?: 1 | 2 | 3 | 4;
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional CSS classes */
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  children,
  columns = 3,
  gap = 'lg',
  className = '',
}) => {
  // Column styles - mobile-first responsive
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  // Gap styles
  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  return (
    <div className={`grid ${columnStyles[columns]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default FeatureGrid;
