import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Dialog Component
 *
 * A modal/dialog component for overlays and confirmations.
 * Includes backdrop, close button, and title/body/footer sections.
 *
 * @example
 * ```tsx
 * <Dialog
 *   isOpen={showDialog}
 *   onClose={() => setShowDialog(false)}
 *   title="Confirm Action"
 * >
 *   <p>Are you sure you want to proceed?</p>
 * </Dialog>
 *
 * <Dialog
 *   isOpen={open}
 *   onClose={handleClose}
 *   title="Edit Profile"
 *   footer={
 *     <>
 *       <Button variant="outline" onClick={handleClose}>Cancel</Button>
 *       <Button onClick={handleSave}>Save</Button>
 *     </>
 *   }
 * >
 *   <form>...</form>
 * </Dialog>
 * ```
 */

export interface DialogProps {
  /** Whether the dialog is open */
  isOpen: boolean;
  /** Callback when dialog should close */
  onClose: () => void;
  /** Dialog title */
  title?: string;
  /** Dialog body content */
  children: React.ReactNode;
  /** Optional footer content (buttons, etc.) */
  footer?: React.ReactNode;
  /** Size of the dialog */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Prevent closing on backdrop click */
  preventBackdropClose?: boolean;
  /** Additional CSS classes for dialog content */
  className?: string;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  preventBackdropClose = false,
  className = '',
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  // Size styles
  const sizeStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !preventBackdropClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl w-full ${sizeStyles[size]} max-h-[90vh] flex flex-col ${className}`}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2
              id="dialog-title"
              className="text-xl font-bold font-display text-gray-800"
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue-400 rounded-lg p-1"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4 overflow-y-auto flex-1">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;
