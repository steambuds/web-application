import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Building2, LogIn, User } from 'lucide-react';
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20 text-center">
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <img
              src={logoImage}
              alt="STEAM Buds Logo"
              className="w-20 h-12 md:w-28 md:h-16"
            />
            <h1 className="text-2xl md:text-4xl font-bold font-display leading-tight">
              Inspire. Ignite. Create. Master.
            </h1>
            <p className="text-gray-700 max-w-2xl text-sm md:text-base">Hands-on STEAM learning for students, teachers, families, and schools.</p>
            <div className="mt-3 md:mt-4 flex flex-row gap-2 md:gap-3 justify-center">
              <Link to="/login" className="btn-primary inline-flex items-center justify-center py-2 px-4 text-sm md:text-base md:py-3 md:px-6"><LogIn className="h-4 w-4 md:h-5 md:w-5 mr-2" /> Login</Link>
              <Link to="/signup" className="btn-outline inline-flex items-center justify-center py-2 px-4 text-sm md:text-base md:py-3 md:px-6"><User className="h-4 w-4 md:h-5 md:w-5 mr-2" /> Sign Up</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="roles" className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-display font-bold text-center mb-4 md:mb-8">Who are you?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <Link to="/student" className="card text-center group p-3 md:p-6">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-105 transition-transform">
                <GraduationCap className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">Student</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Skill building, Project guidance</p>
            </Link>
            <Link to="/teacher" className="card text-center group p-3 md:p-6">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-105 transition-transform">
                <BookOpen className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">Teacher</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Lesson plans, Training</p>
            </Link>
            <Link to="/school" className="card text-center group p-3 md:p-6">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-105 transition-transform">
                <Building2 className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">School</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Teacher Training, Curriculum</p>
            </Link>
            <Link to="/guardian" className="card text-center group p-3 md:p-6">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-105 transition-transform">
                <Users className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">Guardian</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Tuition, Education guidance</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
