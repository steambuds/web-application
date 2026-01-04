import { Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { useAuth } from '../context/AuthContext';
import ConfettiBackground from '../components/ConfettiBackground';
import ArticleCard from '../components/ArticleCard';
import homeworkParentImg from '../images/homework_parent.jpeg';
import markSkillParentImg from '../images/mark_skill_parent.jpeg';
import parentNepImg from '../images/parent_nep.jpeg';
import beyondTextbookImg from '../images/beyond_textbook.jpeg';

/**
 * Article data for guardian resources
 */
const GUARDIAN_ARTICLES = [
  {
    id: 'homework-guide-parents',
    title: 'The "Busy Student" Trap',
    description: 'Why more homework and tuition doesn\'t always equal better grades—and why your child needs time to just "be."',
    thumbnail: homeworkParentImg,
    badge: 'Parenting Guide',
    badgeColor: 'accent' as const,
    route: '/resources/parents-homework-guide',
    readTime: '8 min read'
  },
  {
    id: 'marks-vs-skills-parenting',
    title: 'Marks AND Skills: The Balancing Act',
    description: 'Why choosing between "Good Grades" and "Real Skills" is a false dilemma—how to prepare for the future.',
    thumbnail: markSkillParentImg,
    badge: 'Parenting Guide',
    badgeColor: 'secondary' as const,
    route: '/resources/marks-vs-skills-parenting',
    readTime: '10 min read'
  },
  {
    id: 'nep-2020-parent-guide',
    title: 'No More Rote Learning?(NEP 2020)',
    description: 'Why schools struggle to implement it and where you as a parent fit in the revolution.',
    thumbnail: parentNepImg,
    badge: 'Policy Guide',
    badgeColor: 'primary' as const,
    route: '/resources/nep-2020-parent-guide',
    readTime: '12 min read'
  },
  {
    id: 'holistic-development',
    title: 'Beyond The Textbook',
    description: 'Why rote memorization isn\'t enough—how to prepare your child with empathy, finance, and resilience.',
    thumbnail: beyondTextbookImg,
    badge: 'Life Skills',
    badgeColor: 'success' as const,
    route: '/resources/holistic-development',
    readTime: '10 min read'
  }
];

/**
 * Guardian Public Page
 * Shows resources for parents/guardians
 * Authenticated users are redirected to /guardian/dashboard by PublicRoute wrapper
 */
const Guardian: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Show 2 articles for non-auth, all 4 for authenticated
  const visibleArticles = isAuthenticated ? GUARDIAN_ARTICLES : GUARDIAN_ARTICLES.slice(0, 2);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiBackground />

      {/* Clean Header */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3">
            Parenting in the Age of Innovation
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Guides to help you support your child's holistic growth and future readiness
            {!isAuthenticated && (
              <span className="text-gray-500"> • <Link to="/login" className="text-primary hover:underline">Sign in</Link> to unlock all resources</span>
            )}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Featured Article + Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {visibleArticles.map((article, index) => {
              const isFeatured = index === 0;
              return (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => navigate(article.route)}
                  className={isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}
                  imageHeight={isFeatured ? 'h-48 sm:h-64 lg:h-96' : 'h-48'}
                />
              );
            })}
          </div>

          {/* Subtle Login CTA for non-authenticated users */}
          {!isAuthenticated && (
            <div className="mt-6 text-center">
              <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-electric-blue-50 to-cyber-purple-50 rounded-xl px-6 py-4 border border-electric-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm">Want to see more?</p>
                    <p className="text-xs text-gray-600">Access complete library & dashboard</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link to="/login">
                    <Button variant="outline" size="md" className="text-sm px-4 py-2">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="primary" size="md" className="text-sm px-4 py-2">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Guardian;
