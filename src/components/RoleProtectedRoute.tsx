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
}

/**
 * RoleProtectedRoute Component
 *
 * Protects routes by checking:
 * 1. If user is authenticated (if not, redirect to login)
 * 2. If user has one of the allowed roles (if not, show NotAuthorized)
 *
 * Usage:
 * <RoleProtectedRoute allowedRoles={['student']}>
 *   <StudentDashboard />
 * </RoleProtectedRoute>
 */
const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Show loading spinner while checking auth state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
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
