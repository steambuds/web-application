import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getRoleDefaultRoute } from '../utils/auth';

interface PublicRouteProps {
  children: React.ReactNode;
}

/**
 * PublicRoute Component
 * Wraps public pages and redirects authenticated users to their dashboard
 */
const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (isAuthenticated && user) {
    const dashboardRoute = getRoleDefaultRoute(user.roles || []);
    return <Navigate to={dashboardRoute} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
