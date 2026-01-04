import React from 'react';

export interface FeatureIconBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconContainerClass?: string;
}

const FeatureIconBox: React.FC<FeatureIconBoxProps> = ({
  icon,
  title,
  description,
  className = '',
  iconContainerClass = 'bg-white'
}) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className={`w-8 h-8 ${iconContainerClass} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-sm text-gray-900">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureIconBox;
