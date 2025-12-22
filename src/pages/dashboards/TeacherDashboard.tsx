import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Heading, Card, Badge } from '../../components/ui';
import CourseCard from '../../components/dashboard/CourseCard';
import BatchCard from '../../components/dashboard/BatchCard';
import StatsCard from '../../components/dashboard/StatsCard';
import { teacherDummyData } from '../../data/dummyDashboardData';
import { BookOpen, AlertCircle } from 'lucide-react';

/**
 * TeacherDashboard Component
 * Personalized dashboard for teachers showing:
 * - Teaching courses
 * - Assigned student groups
 * - Pending tasks (assignments to review, etc.)
 * - Teacher statistics
 */
const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'primary';
      default:
        return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <Heading level={1} gradient className="mb-1">
                Welcome back, {user?.username || 'Teacher'}!
              </Heading>
              <p className="text-slate-300">Manage your courses and student groups</p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {teacherDummyData.stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        {/* Pending Tasks */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Pending Tasks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teacherDummyData.pendingTasks.map((task) => (
              <Card key={task.id} variant="hover">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-white flex-1">{task.title}</h3>
                  <Badge variant="solid" color={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </div>
                <p className="text-slate-300 text-sm mb-3">{task.description}</p>
                <div className="text-sm text-slate-400">
                  Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Teaching Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teacherDummyData.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Assigned Groups */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Assigned Student Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teacherDummyData.groups.map((group) => (
              <BatchCard key={group.id} batch={group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
