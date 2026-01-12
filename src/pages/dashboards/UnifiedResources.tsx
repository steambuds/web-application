import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { GraduationCap, X, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useHeaderAction } from '../../context/HeaderActionContext';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui';
import { getBadgeClassName } from '../../utils/helpers';
import { getUserTypeFromPath, getResourcesForUserType } from '../../utils/contentLoader';

export interface UnifiedResourcesRef {
  openMobileMenu: () => void;
}

/**
 * UnifiedResources Component
 * Desktop: Collapsible sidebar with article list + main content area
 * Mobile: Full-screen article viewer with bottom sheet selector
 * Supports all user types (student, teacher, guardian, school)
 * Dynamically loads content based on user type and authentication state
 * Exposes openMobileMenu method for parent components
 */
const UnifiedResources = forwardRef<UnifiedResourcesRef, {}>((_, ref) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  // Extract user type from URL
  const userType = getUserTypeFromPath(location.pathname);
  if (!userType) {
    // Fallback to home if user type cannot be determined
    navigate('/');
    return null;
  }

  // Load content dynamically based on user type, auth state, and user's actual roles
  // contentLoader acts like an API endpoint - checks role match and returns appropriate content
  const { articles, freeCount } = getResourcesForUserType(
    userType,
    isAuthenticated,
    user?.roles || []
  );

  const articleIdParam = searchParams.get('id');

  // Use the ID from URL if valid, otherwise default to first article
  const initialArticleId = articleIdParam && articles.find(a => a.id === articleIdParam)
    ? articleIdParam
    : articles[0]?.id || '';

  const [selectedArticleId, setSelectedArticleId] = useState<string>(initialArticleId);
  const [isListOpen, setIsListOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setTitle, setMobileAction, setHideDefaultNav } = useHeaderAction();

  const selectedArticle = articles.find(a => a.id === selectedArticleId);
  const SelectedArticleComponent = selectedArticle?.component;

  // Sync state with URL param changes
  useEffect(() => {
    if (articleIdParam && articles.find(a => a.id === articleIdParam)) {
      setSelectedArticleId(articleIdParam);
    }
  }, [articleIdParam, articles]);

  const handleArticleSelect = (id: string) => {
    // Update URL instead of just local state
    setSearchParams({ id });
    setIsMobileMenuOpen(false);
  };

  const isArticleLocked = (index: number): boolean => {
    return !isAuthenticated && index >= freeCount;
  };

  // Expose openMobileMenu method to parent component
  useImperativeHandle(ref, () => ({
    openMobileMenu: () => setIsMobileMenuOpen(true)
  }));

  useEffect(() => {
    // Set header configuration for this page
    setTitle(null);
    setMobileAction(() => () => setIsMobileMenuOpen(true));
    setHideDefaultNav(true);

    // Cleanup on unmount
    return () => {
      setTitle(null);
      setMobileAction(null);
      setHideDefaultNav(false);
    };
  }, [selectedArticle, setTitle, setMobileAction, setHideDefaultNav]);

  return (
    <div className="h-full w-full bg-white flex flex-col lg:flex-row overflow-hidden">

      {/* Desktop Left Sidebar (Collapsible) */}
      {isListOpen && (
        <div className="hidden lg:flex w-80 flex-col border-r border-gray-200 bg-white h-full shrink-0">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Resources</h2>
            <button
              onClick={() => setIsListOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {articles.map((article, index) => {
              const isSelected = article.id === selectedArticleId;
              const isLocked = isArticleLocked(index);

              return (
                <div
                  key={article.id}
                  onClick={() => isLocked ? navigate('/login') : handleArticleSelect(article.id)}
                  className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all border relative ${
                    isSelected
                      ? 'bg-primary/5 border-primary shadow-sm'
                      : 'border-transparent hover:bg-gray-50'
                  } ${isLocked ? 'opacity-60' : ''}`}
                >
                  <img
                    src={article.thumbnail}
                    alt=""
                    className="w-16 h-16 rounded object-cover shrink-0 bg-gray-200"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-bold text-sm leading-snug mb-1 ${
                      isSelected ? 'text-primary' : 'text-gray-900'
                    }`}>
                      {article.title}
                    </h3>
                    <span className={getBadgeClassName(article.badgeColor)}>
                      {article.badge}
                    </span>
                  </div>
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[1px] rounded-lg">
                      <Lock className="w-6 h-6 text-gray-600" />
                    </div>
                  )}
                </div>
              );
            })}

            {!isAuthenticated && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center border border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Sign in to access all resources</p>
                <Link to="/login">
                  <Button variant="primary" size="sm" className="w-full">Sign In</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Expand Button */}
      {!isListOpen && (
        <div className="hidden lg:flex border-r border-gray-200 flex-col h-full bg-white">
          <button
            onClick={() => setIsListOpen(true)}
            className="w-8 h-12 flex items-center justify-center hover:bg-gray-50 border-b border-gray-200"
            title="Show Resources"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1 w-8 bg-gray-50" />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 h-full overflow-hidden bg-white flex flex-col">
        {SelectedArticleComponent ? (
          <div className="flex-1 overflow-y-auto">
            {/* Wrapper to constrain max width like a document */}
            <div className="w-full h-full p-4 lg:p-8">
               <SelectedArticleComponent />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-500">
            <GraduationCap className="w-16 h-16 mb-4 text-gray-300" />
            <p className="text-lg">Select a resource to start reading</p>
          </div>
        )}
      </div>

      {/* Mobile Selection Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="font-bold text-lg">Select Resource</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {articles.map((article, index) => {
                const isSelected = article.id === selectedArticleId;
                const isLocked = isArticleLocked(index);

                return (
                  <button
                    key={article.id}
                    onClick={() => isLocked ? navigate('/login') : handleArticleSelect(article.id)}
                    className={`w-full flex items-start gap-4 p-3 rounded-xl border text-left relative ${
                      isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200'
                    } ${isLocked ? 'opacity-60' : ''}`}
                  >
                    <img
                      src={article.thumbnail}
                      alt=""
                      className="w-20 h-20 rounded-lg object-cover bg-gray-200 shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className={`font-bold text-sm mb-1 ${
                        isSelected ? 'text-primary' : 'text-gray-900'
                      }`}>
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                        {article.description}
                      </p>
                      <span className={getBadgeClassName(article.badgeColor)}>
                        {article.badge}
                      </span>
                    </div>
                    {isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[1px] rounded-xl">
                        <Lock className="w-8 h-8 text-gray-600" />
                      </div>
                    )}
                  </button>
                );
              })}

              {!isAuthenticated && (
                <div className="pt-4 border-t border-gray-100">
                  <Link to="/login" className="block">
                    <Button variant="primary" className="w-full">Sign In for More</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

UnifiedResources.displayName = 'UnifiedResources';

export default UnifiedResources;
