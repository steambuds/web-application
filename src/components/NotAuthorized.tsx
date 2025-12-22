import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, Button } from './ui';
import { getRoleDefaultRoute, UserRole } from '../utils/auth';
import { ShieldAlert } from 'lucide-react';

/**
 * NotAuthorized props
 */
interface NotAuthorizedProps {
  userRoles: UserRole[];
}

/**
 * NotAuthorized Component
 *
 * Displays an error message when a user tries to access a dashboard
 * they are not authorized for.
 *
 * Shows options to:
 * - Go to their own dashboard
 * - Go to home page
 */
const NotAuthorized: React.FC<NotAuthorizedProps> = ({ userRoles }) => {
  const userDashboard = getRoleDefaultRoute(userRoles);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue-500 to-cyber-purple-500 rounded-full blur-xl opacity-50"></div>
            <div className="relative bg-slate-800 rounded-full p-6 border border-slate-700">
              <ShieldAlert className="w-16 h-16 text-hot-pink-400" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <ErrorMessage
          title="Access Denied"
          message="You are not authorized to access this dashboard. Please visit your own dashboard or return to the home page."
          variant="centered"
        />

        {/* Action Buttons */}
        <div className="mt-8 space-y-4">
          <Link to={userDashboard} className="block">
            <Button variant="primary" fullWidth>
              Go to Your Dashboard
            </Button>
          </Link>

          <Link to="/" className="block">
            <Button variant="outline" fullWidth>
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-6 text-center text-sm text-slate-400">
          If you believe this is an error, please contact support at{' '}
          <a href="mailto:hello@steambuds.in" className="text-primary-400 hover:text-primary-300">
            hello@steambuds.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotAuthorized;
