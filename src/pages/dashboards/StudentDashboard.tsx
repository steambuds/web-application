import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Activity, GraduationCap, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, Badge } from '../../components/ui';
import { STUDENT_ARTICLES, STUDENT_ACTIVITIES } from '../../config/studentContent';
import StudentActivities from './StudentActivities';
import StudentResources from './StudentResources';

/**
 * StudentDashboard Component
 *
 * Main container for authenticated student dashboard
 * Routes:
 * - /student/dashboard → Shows dashboard with resources/activities overview
 * - /student/dashboard/resources → Shows StudentResources (all unlocked)
 * - /student/dashboard/activities → Shows StudentActivities (all unlocked)
 *
 * Navigation is handled via Header component (Resources/Activities buttons)
 */
const StudentDashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActivitiesSection = location.pathname.includes('/activities');
  const isResourcesSection = location.pathname.includes('/resources');

  // If on resources or activities view, show respective component
  if (isResourcesSection) {
    return (
      <div className="h-full bg-white">
        <StudentResources />
      </div>
    );
  }

  if (isActivitiesSection) {
    return (
      <div className="h-full bg-white">
        <StudentActivities />
      </div>
    );
  }

  // Default dashboard view - overview with resources/activities cards
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <div className="absolute inset-x-0 top-0 h-screen pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10px',
              backgroundColor: [
                '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444',
              ][Math.floor(Math.random() * 6)],
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              animation: `confetti-fall ${3 + Math.random() * 4}s linear ${Math.random() * 2}s infinite`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>

      {/* Header */}
      <section className="pt-12 pb-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Welcome to Your Learning Hub
          </h1>
          <p className="text-base text-gray-600">
            Explore resources, join activities, and accelerate your learning journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Connect with Us - Sidebar */}
            <div className="lg:col-span-1 lg:col-start-3 lg:row-start-1">
              <Card className="sticky top-4 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 border-2 border-primary/20">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-bold text-gray-900">Join Our Classes</h2>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    Learn STEAM concepts through hands-on projects, expert mentorship, and collaborative learning.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Small Batches</h3>
                        <p className="text-xs text-gray-600">Personalized attention</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Project-Based</h3>
                        <p className="text-xs text-gray-600">Real-world learning</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Expert Mentors</h3>
                        <p className="text-xs text-gray-600">Industry professionals</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-2">
                    <h3 className="font-bold text-sm text-gray-900 mb-3">Get in Touch</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:hello@steambuds.in" className="text-primary hover:underline">
                        hello@steambuds.in
                      </a>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="primary" size="md" className="w-full">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* Learning Resources - Main Content */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 space-y-8">
              {/* Resources Section */}
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Learning Resources</h2>
                  <p className="text-sm text-gray-600">Essential guides to boost your learning</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {STUDENT_ARTICLES.slice(0, 4).map((article) => (
                    <Card
                      key={article.id}
                      variant="hover"
                      className="flex flex-col gap-3 cursor-pointer group bg-white"
                      onClick={() => navigate(`/student/dashboard/resources?article=${article.id}`)}
                    >
                      <div className="w-full h-32 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex flex-col flex-grow">
                        <Badge variant="outline" color={article.badgeColor} className="mb-2 w-fit text-xs">
                          {article.badge}
                        </Badge>
                        <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors text-gray-900">
                          {article.title}
                        </h3>
                        <div className="flex items-center justify-end text-xs text-primary font-medium pt-2 border-t border-gray-100">
                          <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={() => navigate('/student/dashboard/resources')}>
                    View All Resources
                  </Button>
                </div>
              </div>

              {/* Activities Section */}
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">STEAM Activities</h2>
                  <p className="text-sm text-gray-600">Hands-on projects and challenges</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {STUDENT_ACTIVITIES.slice(0, 6).map((activity) => (
                    <Card
                      key={activity.id}
                      variant="hover"
                      className="cursor-pointer group p-4 text-center"
                      onClick={() => navigate('/student/dashboard/activities')}
                    >
                      <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform text-white`}>
                        {activity.icon}
                      </div>
                      <h3 className="font-bold text-sm text-gray-900 mb-1">{activity.name}</h3>
                      <p className="text-xs text-gray-600">{activity.description}</p>
                    </Card>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={() => navigate('/student/dashboard/activities')}>
                    Explore All Activities
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
