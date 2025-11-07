import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, ChevronDown } from 'lucide-react';

const roles = [
  { key: 'student', label: 'Student', route: '/student' },
  { key: 'teacher', label: 'Teacher', route: '/teacher' },
  { key: 'school', label: 'School', route: '/school' },
  { key: 'guardian', label: 'Parent / Guardian / Others', route: '/guardian' },
] as const;

type RoleKey = typeof roles[number]['key'];

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<RoleKey>('student');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !password) {
      setError('Please complete all fields.');
      return;
    }
    const target = roles.find(r => r.key === role)!;
    navigate(target.route, { replace: true });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold font-display text-center mb-2">Create your account</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Join STEAM Buds and start your learning journey</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
            <div className="relative">
              <User className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                placeholder="Your name"
                required
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
                placeholder="Create a password"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
            <div className="relative">
              <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as RoleKey)}
                className="w-full border rounded-lg py-2.5 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-electric-blue-400 appearance-none"
              >
                {roles.map(r => (
                  <option key={r.key} value={r.key}>{r.label}</option>
                ))}
              </select>
            </div>
          </div>

          {error && <p className="text-sm text-hot-pink-600">{error}</p>}

          <button type="submit" className="w-full btn-primary">Create account</button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account? <Link className="text-electric-blue-600 font-semibold" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
