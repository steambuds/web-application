import React from 'react';
import { Card } from '../ui';
import { Users, Calendar } from 'lucide-react';
import { Batch } from '../../data/dummyDashboardData';

interface BatchCardProps {
  batch: Batch;
}

/**
 * BatchCard Component
 * Displays batch/group information
 */
const BatchCard: React.FC<BatchCardProps> = ({ batch }) => {
  return (
    <Card variant="gradient" className="h-full">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-xl">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-xl text-white mb-2">{batch.name}</h3>

          {(batch.grade || batch.section) && (
            <p className="text-slate-300 mb-3">
              {batch.grade}
              {batch.section && ` - ${batch.section}`}
            </p>
          )}

          {batch.studentCount && (
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
              <Users className="w-4 h-4" />
              <span>{batch.studentCount} Students</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>{batch.schedule}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BatchCard;
