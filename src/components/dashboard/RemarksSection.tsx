import React from 'react';
import { Card } from '../ui';
import { MessageSquare, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Remark } from '../../data/dummyDashboardData';

interface RemarksSectionProps {
  remarks: Remark[];
  title?: string;
}

/**
 * RemarksSection Component
 * Displays remarks/feedback with type-specific styling
 */
const RemarksSection: React.FC<RemarksSectionProps> = ({ remarks, title = 'Recent Feedback' }) => {
  const getRemarkIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'improvement':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getRemarkBorderColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'border-l-green-400';
      case 'improvement':
        return 'border-l-yellow-400';
      default:
        return 'border-l-blue-400';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-6 h-6 text-electric-blue-400" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      <div className="space-y-3">
        {remarks.map((remark) => (
          <Card
            key={remark.id}
            variant="flat"
            className={`border-l-4 ${getRemarkBorderColor(remark.type)}`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{getRemarkIcon(remark.type)}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-white text-sm">{remark.from}</span>
                  <span className="text-xs text-slate-400">
                    {new Date(remark.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-slate-300 text-sm">{remark.message}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RemarksSection;
