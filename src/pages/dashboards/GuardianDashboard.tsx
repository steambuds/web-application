import { useLocation, useNavigate } from 'react-router-dom';
import { Brain, Heart, Target, Users, Zap } from 'lucide-react';
import { GUARDIAN_ARTICLES } from '../../config/studentContent';
import GuardianResources from './GuardianResources';
import ConfettiBackground from '../../components/ConfettiBackground';
import DashboardSidebar from '../../components/DashboardSidebar';
import ArticleCard from '../../components/ArticleCard';

/**
 * GuardianDashboard Component
 *
 * Main container for authenticated guardian dashboard
 * Routes:
 * - /guardian/dashboard → Shows enrollment messaging and resource cards
 * - /guardian/dashboard/resources → Shows GuardianResources (sidebar + article viewer)
 */
const GuardianDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isResourcesView = location.pathname.includes('/resources');

  // If on resources view, show GuardianResources component
  if (isResourcesView) {
    return (
      <div className="h-full bg-white">
        <GuardianResources isPublic={false} />
      </div>
    );
  }

  const sidebarFeatures = [
    {
      icon: <Brain className="w-4 h-4 text-primary" />,
      title: "Creative Thinking",
      description: "Problem-solving over memorization"
    },
    {
      icon: <Users className="w-4 h-4 text-primary" />,
      title: "Interpersonal Skills",
      description: "Collaboration & communication"
    },
    {
      icon: <Target className="w-4 h-4 text-primary" />,
      title: "Resilient Personality",
      description: "Life skills, not just exam skills"
    },
    {
      icon: <Heart className="w-4 h-4 text-primary" />,
      title: "Emotional Intelligence",
      description: "Self-awareness & empathy"
    }
  ];

  // Default dashboard view - enrollment messaging and resource cards
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiBackground />

      {/* Header */}
      <section className="pt-12 pb-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Be the Guardian of Your Child's Future
          </h1>
          <p className="text-base text-gray-600">
            Shaping the next generation of innovators, thinkers, and problem-solvers
          </p>
        </div>
      </section>

      {/* Main Content: 2-Column Layout */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enrollment Messaging - First on mobile, Right on desktop (1/3 width) */}
            <DashboardSidebar
              title="Beyond Bookish Learning"
              description="Don't let your child become just a kitabi kida (bookworm). Our NEP-aligned programs develop:"
              features={sidebarFeatures}
              contactPhone="+91 9828 770 365"
              ctaText="Enroll Your Child"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-sm text-gray-900">NEP 2020 Aligned</h3>
                </div>
                <p className="text-xs text-gray-700">
                  We follow India's National Education Policy, focusing on <strong>holistic development</strong> and making students ready for real-world challenges—not just exams.
                </p>
              </div>
            </DashboardSidebar>

            {/* Resources - Second on mobile, Left on desktop (2/3 width) */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Resources for Parents</h2>
                <p className="text-sm text-gray-600">Evidence-based insights to support your child's growth</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GUARDIAN_ARTICLES.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onClick={() => navigate(`/guardian/dashboard/resources?id=${article.id}`)}
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

export default GuardianDashboard;
