import React from 'react';

/**
 * FormGroup Component
 *
 * A wrapper component for form fields that provides consistent spacing and layout.
 * Useful for grouping related form elements.
 *
 * @example
 * ```tsx
 * <FormGroup>
 *   <Input label="First Name" />
 * </FormGroup>
 *
 * <FormGroup columns={2}>
 *   <Input label="First Name" />
 *   <Input label="Last Name" />
 * </FormGroup>
 * ```
 */

export interface FormGroupProps {
  /** Form elements to render */
  children: React.ReactNode;
  /** Number of columns for grid layout */
  columns?: 1 | 2 | 3 | 4;
  /** Additional CSS classes */
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  columns = 1,
  className = '',
}) => {
  // Grid column styles
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${columnStyles[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
};

export default FormGroup;
