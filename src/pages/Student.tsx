import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui';
import { GraduationCap, Lock } from 'lucide-react';
import AICheatingGuide from '../resource_page/AICheatingGuide';
import DopamineDetoxGuide from '../resource_page/DopamineDetoxGuide';
import MarksVsSkillsGuide from '../resource_page/MarksVsSkillsGuide';
import MathMindsetGuide from '../resource_page/MathMindsetGuide';
import StudyLessLearnMore from '../resource_page/StudyLessLearnMore';
import aiCheatingImg from '../images/ai_cheating.jpeg';
import brainOnScrollingImg from '../images/brain_on_scrolling.jpeg';
import markVsSkillImg from '../images/mark_vs_skill.jpeg';
import notMathPersonImg from '../images/not_math_person.jpeg';
import studyLessLearnMoreImg from '../images/study_less_learn_more.jpeg';

interface Article {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  badge: string;
  badgeColor: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'gray';
  component: React.FC;
}

const STUDENT_ARTICLES: Article[] = [
  {
    id: 'ai-cheating',
    title: 'Is AI Cheating?',
    description: 'How to use ChatGPT as a tutor, not a writer. Prompt engineering for students.',
    thumbnail: aiCheatingImg,
    badge: 'Student Guide',
    badgeColor: 'accent',
    component: AICheatingGuide,
  },
  {
    id: 'dopamine-detox',
    title: 'The Dopamine War',
    description: 'Why you can\'t focus and how to reclaim your brain from TikTok and Reels.',
    thumbnail: brainOnScrollingImg,
    badge: 'Student Guide',
    badgeColor: 'error',
    component: DopamineDetoxGuide,
  },
  {
    id: 'marks-vs-skills',
    title: 'Marks vs. Skills',
    description: 'Why building a portfolio of projects matters more than just getting an A+.',
    thumbnail: markVsSkillImg,
    badge: 'Student Guide',
    badgeColor: 'success',
    component: MarksVsSkillsGuide,
  },
  {
    id: 'math-mindset',
    title: 'Math Mindset',
    description: 'Why "I\'m not a math person" is a lie. The science of Neuroplasticity.',
    thumbnail: notMathPersonImg,
    badge: 'Student Guide',
    badgeColor: 'primary',
    component: MathMindsetGuide,
  },
  {
    id: 'study-less-learn-more',
    title: 'Study Less, Learn More',
    description: 'The Science of "Smart" Studying: Active Recall, Spaced Repetition, and more.',
    thumbnail: studyLessLearnMoreImg,
    badge: 'Student Guide',
    badgeColor: 'primary',
    component: StudyLessLearnMore,
  },
];

/**
 * Student Public Page
 * Shows student learning resources with inline article viewing
 */
const Student: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [selectedArticleId, setSelectedArticleId] = useState<string>(STUDENT_ARTICLES[0].id);

  // Show first 2 articles for non-authenticated, all for authenticated
  const visibleArticleCount = isAuthenticated ? STUDENT_ARTICLES.length : 2;
  const selectedArticle = STUDENT_ARTICLES.find(a => a.id === selectedArticleId);
  const SelectedArticleComponent = selectedArticle?.component;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header */}
      <section className="pt-12 pb-6 px-6 lg:px-12 relative z-10">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Student Learning Resources
          </h1>
          <p className="text-base text-gray-600">
            {isAuthenticated
              ? 'Master the science of smart studying and personal growth'
              : 'Sign in to unlock all learning guides'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-8 px-6 lg:px-12 relative z-10">
        <div className="w-full">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Article List - Left Sidebar (1/4 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-3">
                <h2 className="text-lg font-bold text-gray-900 mb-4">All Guides ({STUDENT_ARTICLES.length})</h2>

                {STUDENT_ARTICLES.map((article, index) => {
                  const isLocked = index >= visibleArticleCount;
                  const isSelected = article.id === selectedArticleId;

                  return (
                    <div key={article.id} className="relative">
                      <div
                        className={`px-2 py-1.5 rounded-lg border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/50 bg-white'
                        } ${isLocked ? 'opacity-40' : ''}`}
                        onClick={() => !isLocked && setSelectedArticleId(article.id)}
                      >
                        <div className="flex gap-2">
                          {/* Thumbnail - 60% */}
                          <div className="w-[60%] aspect-video rounded overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
                            <img
                              src={article.thumbnail}
                              alt={article.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          {/* Title - 40% */}
                          <div className="w-[40%] flex items-center">
                            <h3 className="font-bold text-xs text-gray-900 line-clamp-3">
                              {article.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Lock Overlay */}
                      {isLocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px] rounded-lg">
                          <Lock className="w-5 h-5 text-gray-600" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Sign In CTA */}
                {!isAuthenticated && (
                  <div className="bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 border-2 border-primary/20 rounded-lg p-4 text-center mt-4">
                    <Lock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h3 className="font-bold text-sm text-gray-900 mb-1">Unlock All Guides</h3>
                    <p className="text-xs text-gray-600 mb-3">
                      Sign in to access all {STUDENT_ARTICLES.length} articles
                    </p>
                    <Link to="/login">
                      <Button variant="primary" size="sm" className="w-full text-xs">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Selected Article - Main Content (3/4 width) */}
            <div className="lg:col-span-3">
              {SelectedArticleComponent ? (
                <div className="bg-white">
                  <SelectedArticleComponent />
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-12 text-center border border-gray-200">
                  <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Select an article to read</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Student;
