import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StudentActivities from './StudentActivities';
import StudentResources from './StudentResources';

/**
 * StudentDashboard Component
 *
 * Main container for authenticated student dashboard
 * Routes:
 * - /student/dashboard → Auto-redirects to /student/dashboard/resources
 * - /student/dashboard/resources → Shows StudentResources (all unlocked)
 * - /student/dashboard/activities → Shows StudentActivities (all unlocked)
 *
 * Navigation is handled via Header component (Resources/Activities buttons)
 */
const StudentDashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActivitiesSection = location.pathname.includes('/activities');

  // Auto-redirect to resources section when accessing base dashboard URL
  useEffect(() => {
    if (location.pathname === '/student/dashboard') {
      navigate('/student/dashboard/resources', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="h-full bg-white">
      {!isActivitiesSection ? (
        // Resources View - Full height/width handled by component
        <div className="h-full w-full">
          <StudentResources />
        </div>
      ) : (
        // Activities View - Full height/width handled by component
        <div className="h-full w-full">
          <StudentActivities />
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
