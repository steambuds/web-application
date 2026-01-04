import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Briefcase, Users, Award, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, Badge } from '../../components/ui';
import { TEACHER_ARTICLES } from '../../config/studentContent';
import TeacherResources from './TeacherResources';

/**
 * TeacherDashboard Component
 *
 * Main container for authenticated teacher dashboard
 * Routes:
 * - /teacher/dashboard → Shows dashboard with resources overview
 * - /teacher/dashboard/resources → Shows TeacherResources (all unlocked)
 *
 * Navigation is handled via Header component
 */
const TeacherDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isResourcesSection = location.pathname.includes('/resources');

  // If on resources view, show TeacherResources component
  if (isResourcesSection) {
    return (
      <div className="h-full bg-white">
        <TeacherResources isPublic={false} />
      </div>
    );
  }

  // Default dashboard view - overview with resources cards
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
            Welcome to Your Professional Hub
          </h1>
          <p className="text-base text-gray-600">
            Access resources, grow your skills, and shape the future of education
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Join Our Team - Sidebar */}
            <div className="lg:col-span-1 lg:col-start-3 lg:row-start-1">
              <Card className="sticky top-4 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 border-2 border-primary/20">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-bold text-gray-900">Join Our Team</h2>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    Become a STEAM educator and inspire the next generation of innovators, thinkers, and problem-solvers.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Collaborative Culture</h3>
                        <p className="text-xs text-gray-600">Work with passionate educators</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Professional Growth</h3>
                        <p className="text-xs text-gray-600">Continuous learning opportunities</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Impactful Work</h3>
                        <p className="text-xs text-gray-600">Transform young minds</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-2">
                    <h3 className="font-bold text-sm text-gray-900 mb-3">Get in Touch</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:careers@steambuds.in" className="text-primary hover:underline">
                        careers@steambuds.in
                      </a>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="primary" size="md" className="w-full">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* Professional Resources - Main Content */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Professional Development Resources</h2>
                <p className="text-sm text-gray-600">Evidence-based insights to enhance your teaching</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {TEACHER_ARTICLES.map((article) => (
                  <Card
                    key={article.id}
                    variant="hover"
                    className="flex flex-col cursor-pointer group bg-white"
                    onClick={() => navigate(`/teacher/dashboard/resources?article=${article.id}`)}
                  >
                    {/* Thumbnail */}
                    <div className="w-full h-40 rounded-lg mb-3 overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <Badge variant="outline" color={article.badgeColor} className="mb-2 w-fit text-xs">
                        {article.badge}
                      </Badge>

                      <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors text-gray-900">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-2">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-end text-xs text-primary font-medium pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;
