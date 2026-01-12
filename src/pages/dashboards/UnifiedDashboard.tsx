import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui';
import ConfettiBackground from '../../components/ConfettiBackground';
import DashboardSidebar from '../../components/DashboardSidebar';
import ArticleCard from '../../components/ArticleCard';
import { Lock } from 'lucide-react';
import {
  getUserTypeFromPath,
  getDashboardConfigForUserType,
  getResourcesForUserType,
  getActivitiesForUserType
} from '../../utils/contentLoader';
import UnifiedResources from './UnifiedResources';
import UnifiedActivities from './UnifiedActivities';

/**
 * UnifiedDashboard Component
 *
 * Main container for all user type dashboards (student, teacher, guardian, school)
 * Routes:
 * - /<user-type>/dashboard → Shows dashboard overview with resources/activities
 * - /<user-type>/dashboard/resources → Delegates to UnifiedResources
 * - /<user-type>/dashboard/activities → Delegates to UnifiedActivities
 *
 * Supports both authenticated and non-authenticated users:
 * - Non-authenticated: Shows first 2 items with lock icons on rest
 * - Authenticated: Shows all content unlocked
 */
const UnifiedDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  // Extract user type from URL
  const userType = getUserTypeFromPath(location.pathname);
  if (!userType) {
    // Fallback to home if user type cannot be determined
    navigate('/');
    return null;
  }

  // Check if on sub-route
  const isResourcesView = location.pathname.includes('/resources');
  const isActivitiesView = location.pathname.includes('/activities');

  // Delegate to sub-components for resources and activities views
  if (isResourcesView) {
    return (
      <div className="h-full bg-white">
        <UnifiedResources />
      </div>
    );
  }

  if (isActivitiesView) {
    return (
      <div className="h-full bg-white">
        <UnifiedActivities />
      </div>
    );
  }

  // Main dashboard overview
  const config = getDashboardConfigForUserType(userType);

  // Load content dynamically based on user type, auth state, and user's actual roles
  // contentLoader acts like an API endpoint - checks role match and returns appropriate content
  const { articles, freeCount } = getResourcesForUserType(
    userType,
    isAuthenticated,
    user?.roles || []
  );
  const { activities, freeCount: freeActivityCount } = getActivitiesForUserType(
    userType,
    isAuthenticated,
    user?.roles || []
  );

  // Determine which items to show (authenticated vs non-authenticated)
  const visibleArticles = articles;
  const visibleActivities = activities;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiBackground />

      {/* Header */}
      <section className="pt-12 pb-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            {config.title}
          </h1>
          <p className="text-base text-gray-600">
            {config.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content: 2-Column Layout */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar - Third column on desktop, first on mobile */}
            <DashboardSidebar
              title={config.sidebarConfig.title}
              description={config.sidebarConfig.description}
              features={config.sidebarConfig.features}
              ctaText={config.sidebarConfig.ctaText}
              ctaHref={config.sidebarConfig.ctaHref}
              contactPhone={config.sidebarConfig.contactPhone}
            />

            {/* Main Content - First two columns on desktop, second on mobile */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 space-y-8">
              {/* Resources Section */}
              {config.showResourcesSection && (
                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Learning Resources</h2>
                    <p className="text-sm text-gray-600">Essential guides to boost your learning</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {visibleArticles.slice(0, 4).map((article, index) => {
                      const isLocked = !isAuthenticated && index >= freeCount;
                      return (
                        <div
                          key={article.id}
                          className="relative"
                          onClick={() => {
                            if (isLocked) {
                              navigate('/login');
                            } else {
                              navigate(`/${userType}/dashboard/resources?id=${article.id}`);
                            }
                          }}
                        >
                          <ArticleCard
                            article={article}
                            onClick={() => {}}
                          />
                          {isLocked && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px] rounded-xl cursor-pointer">
                              <Lock className="w-8 h-8 text-gray-600" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 text-center">
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/${userType}/dashboard/resources`)}
                    >
                      View All Resources
                    </Button>
                  </div>
                </div>
              )}

              {/* Activities Section */}
              {config.showActivitiesSection && visibleActivities.length > 0 && (
                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">STEAM Activities</h2>
                    <p className="text-sm text-gray-600">Hands-on projects and challenges</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {visibleActivities.slice(0, 6).map((activity, index) => {
                      const isLocked = !isAuthenticated && index >= freeActivityCount;
                      return (
                        <div
                          key={activity.id}
                          className="relative"
                        >
                          <div
                            className={`cursor-pointer group p-4 text-center bg-white rounded-xl border-2 transition-all ${
                              isLocked
                                ? 'border-gray-200 opacity-60'
                                : 'border-gray-200 hover:border-primary hover:shadow-md'
                            }`}
                            onClick={() => {
                              if (isLocked) {
                                navigate('/login');
                              } else {
                                navigate(`/${userType}/dashboard/activities`);
                              }
                            }}
                          >
                            <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform text-white`}>
                              {activity.icon}
                            </div>
                            <h3 className="font-bold text-sm text-gray-900 mb-1">{activity.name}</h3>
                            <p className="text-xs text-gray-600">{activity.description}</p>
                          </div>
                          {isLocked && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[1px] rounded-xl pointer-events-none">
                              <Lock className="w-6 h-6 text-gray-600" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 text-center">
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/${userType}/dashboard/activities`)}
                    >
                      Explore All Activities
                    </Button>
                  </div>
                </div>
              )}

              {/* Sign In CTA for Non-Authenticated Users */}
              {!isAuthenticated && (
                <div className="mt-8 p-6 bg-gradient-to-r from-electric-blue-50 to-cyber-purple-50 rounded-xl border border-electric-blue-200">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        Unlock Full Access
                      </h3>
                      <p className="text-sm text-gray-600">
                        Sign in to access all resources and activities
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => navigate('/login')}
                    >
                      Sign In Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnifiedDashboard;
