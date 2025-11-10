import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

function inferRoleFromEmail(email: string): 'student' | 'teacher' | 'school' | 'guardian' {
  const e = email.toLowerCase();
  if (e.includes('student') || e.includes('.stu') || e.includes('+stu')) return 'student';
  if (e.includes('teacher') || e.includes('+tch')) return 'teacher';
  if (e.includes('school') || e.includes('+sch')) return 'school';
  return 'guardian';
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    const role = inferRoleFromEmail(email);
    // In a real app, authenticate and fetch role from server.
    // Here we route deterministically based on email for demo purposes.
    const routeByRole: Record<typeof role, string> = {
      student: '/student',
      teacher: '/teacher',
      school: '/school',
      guardian: '/guardian',
    };
    navigate(routeByRole[role], { replace: true });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold font-display text-center mb-2">Welcome back</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Login to continue to your dashboard</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                placeholder="e.g. priya@student.example.com"
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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {error && <p className="text-sm text-hot-pink-600">{error}</p>}

          <button type="submit" className="w-full btn-primary">Login</button>
        </form>

        <div className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded">
          Tip: We route by email for demo. Include one of: “student”, “teacher”, “school”. Otherwise you’ll go to “guardian”.
        </div>

        <p className="mt-6 text-center text-sm">
          New here? <Link className="text-electric-blue-600 font-semibold" to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
