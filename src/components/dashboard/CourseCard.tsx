import React from 'react';
import { Card, Badge } from '../ui';
import { BookOpen, Clock, User } from 'lucide-react';
import { Course } from '../../data/dummyDashboardData';

interface CourseCardProps {
  course: Course;
}

/**
 * CourseCard Component
 * Displays a course with progress bar and details
 */
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'completed':
        return 'primary';
      case 'upcoming':
        return 'warning';
      default:
        return 'gray';
    }
  };

  return (
    <Card variant="hover" className="h-full">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">{course.title}</h3>
            <Badge variant="solid" color={getStatusColor(course.status)}>
              {course.status}
            </Badge>
          </div>
        </div>
      </div>

      <p className="text-slate-300 text-sm mb-4">{course.description}</p>

      {course.instructor && (
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
          <User className="w-4 h-4" />
          <span>{course.instructor}</span>
        </div>
      )}

      {course.nextSession && (
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>Next: {course.nextSession}</span>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-400">Progress</span>
          <span className="text-sm font-semibold text-electric-blue-400">{course.progress}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-electric-blue-500 to-cyber-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
