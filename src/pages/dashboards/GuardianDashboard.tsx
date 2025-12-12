import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Heading, Card } from '../../components/ui';
import StatsCard from '../../components/dashboard/StatsCard';
import RemarksSection from '../../components/dashboard/RemarksSection';
import { guardianDummyData } from '../../data/dummyDashboardData';
import { Heart, Users, Calendar } from 'lucide-react';

/**
 * GuardianDashboard Component
 * Personalized dashboard for guardians showing:
 * - Children's information and progress
 * - Upcoming parent-teacher meetings
 * - Teacher remarks about children
 * - Guardian statistics
 */
const GuardianDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <Heading level={1} gradient className="mb-1">
                Welcome, {user?.username || 'Guardian'}!
              </Heading>
              <p className="text-slate-300">Track your children's learning progress</p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {guardianDummyData.stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        {/* Children's Progress */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-electric-blue-400" />
            <h2 className="text-2xl font-bold text-white">Children's Progress</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guardianDummyData.children.map((child) => (
              <Card key={child.id} variant="gradient">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-white mb-1">{child.name}</h3>
                    <p className="text-slate-300 mb-3">{child.grade}</p>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-400">Overall Progress</span>
                        <span className="text-sm font-semibold text-electric-blue-400">
                          {child.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-electric-blue-500 to-cyber-purple-500 rounded-full transition-all duration-300"
                          style={{ width: `${child.progress}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-slate-400">{child.recentActivity}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-hot-pink-400" />
            <h2 className="text-2xl font-bold text-white">Upcoming Meetings</h2>
          </div>
          <Card variant="flat">
            <div className="space-y-4">
              {guardianDummyData.upcomingMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-slate-700 last:border-0 gap-2"
                >
                  <div>
                    <p className="font-semibold text-white">{meeting.title}</p>
                    <p className="text-sm text-slate-400">with {meeting.teacher}</p>
                  </div>
                  <div className="text-sm text-slate-300">
                    {new Date(meeting.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}{' '}
                    at {meeting.time}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Teacher Remarks */}
        <div>
          <RemarksSection remarks={guardianDummyData.remarks} title="Teacher Feedback" />
        </div>
      </div>
    </div>
  );
};

export default GuardianDashboard;
