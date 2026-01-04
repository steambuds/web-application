import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Activity, BookOpen, Users } from 'lucide-react';
import { Button, Card } from '../../components/ui';
import { STUDENT_ARTICLES, STUDENT_ACTIVITIES } from '../../config/studentContent';
import StudentActivities from './StudentActivities';
import StudentResources from './StudentResources';
import ConfettiBackground from '../../components/ConfettiBackground';
import DashboardSidebar from '../../components/DashboardSidebar';
import ArticleCard from '../../components/ArticleCard';

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

  const sidebarFeatures = [
    {
      icon: <Users className="w-4 h-4 text-primary" />,
      title: "Small Batches",
      description: "Personalized attention"
    },
    {
      icon: <BookOpen className="w-4 h-4 text-primary" />,
      title: "Project-Based",
      description: "Real-world learning"
    },
    {
      icon: <Activity className="w-4 h-4 text-primary" />,
      title: "Expert Mentors",
      description: "Industry professionals"
    }
  ];

  // Default dashboard view - overview with resources/activities cards
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiBackground />

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
            <DashboardSidebar
              title="Join Our Classes"
              description="Learn STEAM concepts through hands-on projects, expert mentorship, and collaborative learning."
              features={sidebarFeatures}
              ctaText="Enroll Now"
              ctaHref="/contact"
            />

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
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onClick={() => navigate(`/student/dashboard/resources?id=${article.id}`)}
                    />
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
