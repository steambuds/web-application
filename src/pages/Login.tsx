import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Lock, Mail, CheckCircle } from 'lucide-react';
import { Button, Input, ErrorMessage } from '../components/ui';
import { useAuth, getRoleDefaultRoute } from '../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading, isAuthenticated, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Check for success message from signup redirect
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear the message from location state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      const defaultRoute = getRoleDefaultRoute(user.roles);
      navigate(defaultRoute, { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Client-side validation
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }

    try {
      await login(email, password);

      // After successful login, redirect to role-specific page
      // The useEffect above will handle the redirect once user is set
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold font-display text-center mb-2">Welcome back</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Login to continue to your dashboard</p>

        {successMessage && (
          <div className="mb-4 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{successMessage}</p>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            iconLeft={<Mail className="h-4 w-4" />}
            required
            disabled={isLoading}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            iconLeft={<Lock className="h-4 w-4" />}
            required
            disabled={isLoading}
          />

          {error && <ErrorMessage message={error} />}

          <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
          New here? <Link className="text-electric-blue-600 font-semibold" to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
