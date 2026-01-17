import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../utils/auth';
import NotAuthorized from './NotAuthorized';

/**
 * RoleProtectedRoute props
 */
interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
  allowPublicAccess?: boolean; // Allow non-authenticated users to see restricted content
}

/**
 * RoleProtectedRoute Component
 *
 * Protects routes by checking:
 * 1. If allowPublicAccess=true and user is not authenticated, render children (with restricted content)
 * 2. If allowPublicAccess=false (default) and user is not authenticated, redirect to login
 * 3. If user is authenticated, check if user has one of the allowed roles
 *    - If yes, render children
 *    - If no, show NotAuthorized
 *
 * Usage:
 * // Standard protected route (requires auth)
 * <RoleProtectedRoute allowedRoles={['student']}>
 *   <StudentDashboard />
 * </RoleProtectedRoute>
 *
 * // Public access with restricted content (no auth required)
 * <RoleProtectedRoute allowedRoles={['student']} allowPublicAccess={true}>
 *   <UnifiedDashboard />
 * </RoleProtectedRoute>
 */
const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({
  children,
  allowedRoles,
  allowPublicAccess = false
}) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Show loading spinner while checking auth state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // If public access is allowed and user is not authenticated, render children (with restricted content)
  if (allowPublicAccess && !isAuthenticated) {
    return <>{children}</>;
  }

  // If not authenticated and public access NOT allowed, redirect to login
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has one of the allowed roles
  const userRoles = user.roles || [];
  const hasAllowedRole = allowedRoles.some(role => userRoles.includes(role));

  // Show NotAuthorized if user doesn't have required role
  if (!hasAllowedRole) {
    return <NotAuthorized userRoles={userRoles} />;
  }

  // User is authenticated and has required role, render children
  return <>{children}</>;
};

export default RoleProtectedRoute;
