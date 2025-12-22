import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Heading, Card } from '../../components/ui';
import StatsCard from '../../components/dashboard/StatsCard';
import RemarksSection from '../../components/dashboard/RemarksSection';
import { schoolDummyData } from '../../data/dummyDashboardData';
import { School, UserPlus, Calendar } from 'lucide-react';

/**
 * SchoolDashboard Component
 * Personalized dashboard for school admins showing:
 * - School-wide statistics
 * - Recent enrollments
 * - Administrative remarks
 * - Upcoming events
 */
const SchoolDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-cyber-purple-500 to-electric-blue-500 rounded-xl">
              <School className="w-8 h-8 text-white" />
            </div>
            <div>
              <Heading level={1} gradient className="mb-1">
                Welcome, {user?.username || 'Admin'}!
              </Heading>
              <p className="text-slate-300">School administration dashboard</p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {schoolDummyData.stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Enrollments */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UserPlus className="w-6 h-6 text-electric-blue-400" />
              <h2 className="text-2xl font-bold text-white">Recent Enrollments</h2>
            </div>
            <Card variant="flat">
              <div className="space-y-3">
                {schoolDummyData.recentEnrollments.map((enrollment) => (
                  <div
                    key={enrollment.id}
                    className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-white">{enrollment.name}</p>
                      <p className="text-sm text-slate-400">{enrollment.grade}</p>
                    </div>
                    <span className="text-xs text-slate-400">
                      {new Date(enrollment.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-hot-pink-400" />
              <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
            </div>
            <Card variant="flat">
              <div className="space-y-3">
                {schoolDummyData.upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0"
                  >
                    <p className="font-semibold text-white">{event.title}</p>
                    <span className="text-xs text-slate-400">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Administrative Remarks */}
        <div>
          <RemarksSection remarks={schoolDummyData.remarks} title="Administrative Remarks" />
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
