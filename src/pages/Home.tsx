import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Building2, LogIn, Library } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getRoleDefaultRoute } from '../utils/auth';
import logoImage from '../images/steambuds_logo.svg';

const Home: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users to their dashboard
  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      const dashboardRoute = getRoleDefaultRoute(user.roles || []);
      navigate(dashboardRoute, { replace: true });
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="relative bg-gradient from-primary-light via-secondary-light to-accent-light pattern-dots overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <div className="flex flex-col items-center gap-3">
            <img
              src={logoImage}
              alt="STEAM Buds Logo"
              className="w-28 h-16"
            />
            <h1 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Inspire. Ignite. Create. Master.
            </h1>
            <p className="text-gray-700 max-w-2xl">Hands-on STEAM learning for students, teachers, families, and schools.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link to="/login" className="btn-primary inline-flex items-center justify-center"><LogIn className="h-5 w-5 mr-2" /> Login</Link>
              <Link to="/resources" className="btn-outline inline-flex items-center justify-center"><Library className="h-5 w-5 mr-2" /> Public Resources</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-center mb-8">Who are you?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/student" className="card text-center group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="font-semibold">Student</h3>
              <p className="text-sm text-gray-600 mt-1">Explore labs, projects, and competitions</p>
            </Link>
            <Link to="/teacher" className="card text-center group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="font-semibold">Teacher</h3>
              <p className="text-sm text-gray-600 mt-1">Kits, lesson plans, and PD</p>
            </Link>
            <Link to="/school" className="card text-center group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="font-semibold">School</h3>
              <p className="text-sm text-gray-600 mt-1">Lab setup, teachers, curriculum</p>
            </Link>
            <Link to="/guardian" className="card text-center group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="font-semibold">Parent / Guardian / Others</h3>
              <p className="text-sm text-gray-600 mt-1">Private workshops and support</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
