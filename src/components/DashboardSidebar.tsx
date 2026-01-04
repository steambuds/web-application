import React from 'react';
import { Mail, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card } from './ui';
import FeatureIconBox from './ui/FeatureIconBox';
import { BRAND_EMAIL } from '../constants/brand';

export interface DashboardSidebarProps {
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  contactEmail?: string;
  contactPhone?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  children?: React.ReactNode;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  title,
  description,
  features,
  contactEmail = BRAND_EMAIL,
  contactPhone,
  ctaText = "Enroll Now",
  ctaHref = "/contact",
  className = "",
  children
}) => {
  return (
    <div className={`lg:col-span-1 lg:col-start-3 lg:row-start-1 ${className}`}>
      <Card className="sticky top-4 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 border-2 border-primary/20">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          </div>

          <p className="text-gray-700 text-sm mb-4">
            {description}
          </p>

          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <FeatureIconBox
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {children}

          {/* Quick Contact */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-2">
            <h3 className="font-bold text-sm text-gray-900 mb-3">Get in Touch</h3>
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                {contactEmail}
              </a>
            </div>
            {contactPhone && (
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <span className="font-semibold">📞</span>
                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="text-primary hover:underline">
                  {contactPhone}
                </a>
              </div>
            )}
          </div>

          <Link to={ctaHref}>
            <Button variant="primary" size="md" className="w-full">
              {ctaText}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default DashboardSidebar;
