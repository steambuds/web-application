import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50'
    : 'flex items-center justify-center py-12';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        <Loader2 className={`${sizeClasses[size]} text-electric-blue-500 animate-spin`} />
        {text && (
          <p className="text-gray-600 font-medium">{text}</p>
        )}
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <Loader2 className={`animate-spin ${className}`} />;
};

export default Loading;
