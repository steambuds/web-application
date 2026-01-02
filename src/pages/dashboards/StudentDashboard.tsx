import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Heading, Button, Card } from '../../components/ui';
import { GraduationCap, Lock } from 'lucide-react';
import AICheatingGuide from '../../resource_page/AICheatingGuide';
import DopamineDetoxGuide from '../../resource_page/DopamineDetoxGuide';
import MarksVsSkillsGuide from '../../resource_page/MarksVsSkillsGuide';
import MathMindsetGuide from '../../resource_page/MathMindsetGuide';
import StudyLessLearnMore from '../../resource_page/StudyLessLearnMore';
import aiCheatingImg from '../../images/ai_cheating.jpeg';
import brainOnScrollingImg from '../../images/brain_on_scrolling.jpeg';
import markVsSkillImg from '../../images/mark_vs_skill.jpeg';
import notMathPersonImg from '../../images/not_math_person.jpeg';
import studyLessLearnMoreImg from '../../images/study_less_learn_more.jpeg';

interface Article {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  component: React.FC;
}

const STUDENT_ARTICLES: Article[] = [
  {
    id: 'ai-cheating',
    title: 'Is AI Cheating?',
    description: 'How to use ChatGPT as a tutor, not a writer.',
    thumbnail: aiCheatingImg,
    component: AICheatingGuide,
  },
  {
    id: 'dopamine-detox',
    title: 'The Dopamine War',
    description: 'Why you can\'t focus and how to reclaim your brain.',
    thumbnail: brainOnScrollingImg,
    component: DopamineDetoxGuide,
  },
  {
    id: 'marks-vs-skills',
    title: 'Marks vs. Skills',
    description: 'Why building a portfolio matters more than just getting an A+.',
    thumbnail: markVsSkillImg,
    component: MarksVsSkillsGuide,
  },
  {
    id: 'math-mindset',
    title: 'Math Mindset',
    description: 'Why "I\'m not a math person" is a lie.',
    thumbnail: notMathPersonImg,
    component: MathMindsetGuide,
  },
  {
    id: 'study-less-learn-more',
    title: 'Study Less, Learn More',
    description: 'The Science of "Smart" Studying.',
    thumbnail: studyLessLearnMoreImg,
    component: StudyLessLearnMore,
  },
];

/**
 * StudentDashboard Component
 * Shows student articles with authentication-based gating
 */
const StudentDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [selectedArticleId, setSelectedArticleId] = useState<string>(STUDENT_ARTICLES[0].id);

  // Show first 2 articles for non-authenticated, all for authenticated
  const visibleArticleCount = isAuthenticated ? STUDENT_ARTICLES.length : 2;
  const selectedArticle = STUDENT_ARTICLES.find(a => a.id === selectedArticleId);
  const SelectedArticleComponent = selectedArticle?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <Heading level={1} gradient className="mb-1">
                {isAuthenticated ? `Welcome back, ${user?.username || 'Student'}!` : 'Student Resources'}
              </Heading>
              <p className="text-slate-300">
                {isAuthenticated ? 'Explore your learning resources' : 'Sign in to unlock all articles'}
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Article List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Learning Guides</h2>

            {STUDENT_ARTICLES.map((article, index) => {
              const isLocked = index >= visibleArticleCount;
              const isSelected = article.id === selectedArticleId;

              return (
                <div key={article.id} className="relative">
                  <Card
                    variant={isSelected ? 'gradient' : 'hover'}
                    className={`cursor-pointer transition-all ${
                      isLocked ? 'opacity-40' : ''
                    } ${isSelected ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => !isLocked && setSelectedArticleId(article.id)}
                  >
                    <div className="flex gap-3">
                      {/* Thumbnail */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm mb-1 text-white truncate">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Lock Overlay for non-authenticated */}
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm rounded-xl">
                      <div className="text-center">
                        <Lock className="w-6 h-6 text-white mx-auto mb-2" />
                        <p className="text-xs text-white font-semibold">Sign In to Unlock</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Sign In CTA for non-authenticated users */}
            {!isAuthenticated && (
              <div className="bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-xl p-4 text-center">
                <Lock className="w-8 h-8 text-white mx-auto mb-2" />
                <h3 className="font-bold text-white mb-2">Unlock All Articles</h3>
                <p className="text-white/90 text-sm mb-4">
                  Sign in to access all {STUDENT_ARTICLES.length} learning guides
                </p>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="w-full bg-white text-primary hover:bg-gray-100">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Right Panel - Selected Article */}
          <div className="lg:col-span-2">
            {SelectedArticleComponent ? (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <SelectedArticleComponent />
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center">
                <p className="text-gray-600">Select an article to read</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
