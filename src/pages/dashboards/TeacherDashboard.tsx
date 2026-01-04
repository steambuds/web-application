import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TeacherResources from './TeacherResources';

/**
 * TeacherDashboard Component
 *
 * Main container for authenticated teacher dashboard
 * Routes:
 * - /teacher/dashboard → Auto-redirects to /teacher/dashboard/resources
 * - /teacher/dashboard/resources → Shows TeacherResources (all unlocked)
 *
 * Navigation is handled via Header component
 */
const TeacherDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Auto-redirect to resources section when accessing base dashboard URL
  useEffect(() => {
    if (location.pathname === '/teacher/dashboard') {
      navigate('/teacher/dashboard/resources', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="h-full bg-white">
      <TeacherResources isPublic={false} />
    </div>
  );
};

export default TeacherDashboard;
