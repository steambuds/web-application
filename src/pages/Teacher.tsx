import { Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { useAuth } from '../context/AuthContext';
import ConfettiBackground from '../components/ConfettiBackground';
import ArticleCard from '../components/ArticleCard';
import mythOfEducationImg from '../images/myth_of_education.jpeg';
import pedagogicalExcellenceImg from '../images/pedagogical_excellence.jpeg';
import goodTeacherImg from '../images/good_teacher.jpeg';
import homeworkTeacherImg from '../images/homework_teacher.jpeg';
import teacherNepImg from '../images/teacher_nep.jpeg';

/**
 * Article data for teacher resources
 */
const TEACHER_ARTICLES = [
  {
    id: 'pedagogical-excellence',
    title: 'Pedagogical Excellence Framework',
    description: 'Master student personas, class dynamics, and lesson quality with RIASEC and Bloom\'s Taxonomy.',
    thumbnail: pedagogicalExcellenceImg,
    badge: 'Framework',
    badgeColor: 'secondary' as const,
    route: '/resources/pedagogical-excellence',
    readTime: '12 min read'
  },
  {
    id: 'nep-2020-teacher-guide',
    title: 'NEP 2020: Teacher\'s Playbook',
    description: 'Move beyond "finishing the syllabus" to ensuring understanding—key shifts for educators.',
    thumbnail: teacherNepImg,
    badge: 'Policy Implementation',
    badgeColor: 'primary' as const,
    route: '/resources/nep-2020-teacher-guide',
    readTime: '12 min read'
  },
  {
    id: 'homework-guide-teachers',
    title: 'Rethinking Homework',
    description: 'Design assignments that promote equity, autonomy, and genuine learning—without the burnout.',
    thumbnail: homeworkTeacherImg,
    badge: 'Teaching Strategy',
    badgeColor: 'secondary' as const,
    route: '/resources/homework-guide-teachers',
    readTime: '10 min read'
  },
  
  {
    id: 'education-myths',
    title: 'The Biggest Myth of Education',
    description: 'Discover why "Learning Styles" (VARK) might be holding students back, and what science actually says works.',
    thumbnail: mythOfEducationImg,
    badge: 'Myth Busting',
    badgeColor: 'error' as const,
    route: '/resources/education-myths',
    readTime: '8 min read'
  },
  {
    id: 'good-teacher',
    title: 'What Makes a Good Teacher?',
    description: 'Insights from leading educators on effective teaching strategies for the modern classroom.',
    thumbnail: goodTeacherImg,
    badge: 'Professional Development',
    badgeColor: 'primary' as const,
    route: '/resources/what-makes-good-teacher',
    readTime: '10 min read'
  }
];

/**
 * Teacher Public Page
 * Shows professional development resources for teachers
 * Authenticated users are redirected to /teacher/dashboard by PublicRoute wrapper
 */
const Teacher: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Show 2 articles for non-auth, all 3 for authenticated
  const visibleArticles = isAuthenticated ? TEACHER_ARTICLES : TEACHER_ARTICLES.slice(0, 2);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiBackground />

      {/* Clean Header */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3">
            Professional Development for Modern Educators
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Evidence-based insights and practical frameworks for modern educators
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

export default Teacher;
