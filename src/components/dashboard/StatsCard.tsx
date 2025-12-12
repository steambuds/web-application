import React from 'react';
import { Card } from '../ui';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Stats } from '../../data/dummyDashboardData';

interface StatsCardProps {
  stat: Stats;
}

/**
 * StatsCard Component
 * Displays a statistic with optional trend indicator
 */
const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  const getTrendIcon = () => {
    switch (stat.trend) {
      case 'up':
        return <TrendingUp className="w-5 h-5 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-5 h-5 text-red-400" />;
      case 'stable':
        return <Minus className="w-5 h-5 text-slate-400" />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    switch (stat.trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      case 'stable':
        return 'text-slate-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <Card variant="gradient" className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400">{stat.label}</span>
          {stat.trend && getTrendIcon()}
        </div>
        <div className={`text-3xl font-bold ${getTrendColor()}`}>
          {stat.value}
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
