import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SuccessMessage, ErrorMessage } from '../components/ui';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Client-side validation
    if (!username || !email || !password) {
      setError('Please complete all fields.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      await signup(username, email, password);
      setSuccess(true);

      // Redirect to login after a brief delay
      setTimeout(() => {
        navigate('/login', {
          state: { message: 'Account created successfully! Please log in.' }
        });
      }, 2000);
    } catch (err) {
      // Error is already set by AuthContext
      setError(err instanceof Error ? err.message : 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold font-display text-center mb-2">Create your account</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Join STEAM Buds and start your learning journey</p>

        {success ? (
          <SuccessMessage
            title="Success!"
            message="Account created successfully! Redirecting to login..."
          />
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <User className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                  placeholder="Your username"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                  placeholder="At least 8 characters"
                  required
                  disabled={isLoading}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
            </div>

            {error && <ErrorMessage message={error} />}

            <button
              type="submit"
              className="w-full btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm">
          Already have an account? <Link className="text-electric-blue-600 font-semibold" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
