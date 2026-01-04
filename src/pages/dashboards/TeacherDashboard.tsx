import { useLocation, useNavigate } from 'react-router-dom';
import { Award, BookOpen, Users } from 'lucide-react';
import { TEACHER_ARTICLES } from '../../config/studentContent';
import TeacherResources from './TeacherResources';
import ConfettiBackground from '../../components/ConfettiBackground';
import DashboardSidebar from '../../components/DashboardSidebar';
import ArticleCard from '../../components/ArticleCard';

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

  const sidebarFeatures = [
    {
      icon: <Users className="w-4 h-4 text-primary" />,
      title: "Collaborative Culture",
      description: "Work with passionate educators"
    },
    {
      icon: <BookOpen className="w-4 h-4 text-primary" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities"
    },
    {
      icon: <Award className="w-4 h-4 text-primary" />,
      title: "Impactful Work",
      description: "Transform young minds"
    }
  ];

  // Default dashboard view - overview with resources cards
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiBackground />

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
            <DashboardSidebar
              title="Join Our Team"
              description="Become a STEAM educator and inspire the next generation of innovators, thinkers, and problem-solvers."
              features={sidebarFeatures}
              contactEmail="careers@steambuds.in"
              ctaText="Apply Now"
              ctaHref="/contact"
            />

            {/* Professional Resources - Main Content */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Professional Development Resources</h2>
                <p className="text-sm text-gray-600">Evidence-based insights to enhance your teaching</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {TEACHER_ARTICLES.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onClick={() => navigate(`/teacher/dashboard/resources?id=${article.id}`)}
                    imageHeight="h-40"
                  />
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
