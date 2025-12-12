import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Heading } from '../../components/ui';
import CourseCard from '../../components/dashboard/CourseCard';
import BatchCard from '../../components/dashboard/BatchCard';
import RemarksSection from '../../components/dashboard/RemarksSection';
import StatsCard from '../../components/dashboard/StatsCard';
import { studentDummyData } from '../../data/dummyDashboardData';
import { GraduationCap } from 'lucide-react';

/**
 * StudentDashboard Component
 * Personalized dashboard for students showing:
 * - Enrolled courses with progress
 * - Current batch information
 * - Teacher feedback/remarks
 * - Progress statistics
 */
const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <Heading level={1} gradient className="mb-1">
                Welcome back, {user?.username || 'Student'}!
              </Heading>
              <p className="text-slate-300">Here's your learning progress overview</p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {studentDummyData.stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        {/* Batch Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Your Batch</h2>
          <BatchCard batch={studentDummyData.batch} />
        </div>

        {/* Enrolled Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Enrolled Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentDummyData.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Remarks Section */}
        <div>
          <RemarksSection remarks={studentDummyData.remarks} title="Teacher Feedback" />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
