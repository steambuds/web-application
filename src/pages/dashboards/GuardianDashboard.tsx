import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Users, Sparkles, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, Badge } from '../../components/ui';
import { GUARDIAN_ARTICLES } from '../../config/studentContent';
import GuardianResources from './GuardianResources';

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

  // Default dashboard view - enrollment messaging and resource cards
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
                '#3b82f6', // blue
                '#8b5cf6', // purple
                '#ec4899', // pink
                '#f59e0b', // amber
                '#10b981', // green
                '#ef4444', // red
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
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>

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
            <div className="lg:col-span-1 lg:col-start-3 lg:row-start-1">
              <Card className="sticky top-4 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 border-2 border-primary/20">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-bold text-gray-900">
                      Beyond Bookish Learning
                    </h2>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    Don't let your child become just a <em>kitabi kida</em> (bookworm). Our NEP-aligned programs develop:
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Creative Thinking</h3>
                        <p className="text-xs text-gray-600">Problem-solving over memorization</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Interpersonal Skills</h3>
                        <p className="text-xs text-gray-600">Collaboration & communication</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Resilient Personality</h3>
                        <p className="text-xs text-gray-600">Life skills, not just exam skills</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Emotional Intelligence</h3>
                        <p className="text-xs text-gray-600">Self-awareness & empathy</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-sm text-gray-900">NEP 2020 Aligned</h3>
                    </div>
                    <p className="text-xs text-gray-700">
                      We follow India's National Education Policy, focusing on <strong>holistic development</strong> and making students ready for real-world challenges—not just exams.
                    </p>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-2">
                    <h3 className="font-bold text-sm text-gray-900 mb-3">Quick Contact</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="font-semibold">📧 Email:</span>
                      <a href="mailto:hello@steambuds.in" className="text-primary hover:underline">
                        hello@steambuds.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="font-semibold">📞 Phone:</span>
                      <a href="tel:+919828770365" className="text-primary hover:underline">
                        +91 9828 770 365
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link to="/contact">
                      <Button variant="primary" size="md" className="w-full">
                        Enroll Your Child
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Resources - Second on mobile, Left on desktop (2/3 width) */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Resources for Parents</h2>
                <p className="text-sm text-gray-600">Evidence-based insights to support your child's growth</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GUARDIAN_ARTICLES.map((article) => (
                  <Card
                    key={article.id}
                    variant="hover"
                    className="flex flex-col gap-3 cursor-pointer group bg-white"
                    onClick={() => navigate(`/guardian/dashboard/resources?article=${article.id}`)}
                  >
                    {/* Thumbnail */}
                    <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
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
                      <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors text-gray-900">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-3 flex-grow line-clamp-2">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-end text-xs text-primary font-medium pt-2 border-t border-gray-100">
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

export default GuardianDashboard;
