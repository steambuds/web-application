import { BookOpen, Lightbulb, Send, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Input, Textarea } from '../components/ui';
import { useAuth } from '../context/AuthContext';
import { useSchoolContactForm } from '../hooks/useSchoolContactForm';
import ConfettiBackground from '../components/ConfettiBackground';
import ArticleCard from '../components/ArticleCard';
import mythOfEducationImg from '../images/myth_of_education.jpeg';
import homeworkTeacherImg from '../images/homework_teacher.jpeg';
import pedagogicalExcellenceImg from '../images/pedagogical_excellence.jpeg';
import goodTeacherImg from '../images/good_teacher.jpeg';
import teacherNepImg from '../images/teacher_nep.jpeg';

/**
 * Article data for school resources (same as teacher resources)
 */
const SCHOOL_ARTICLES = [
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
    id: 'skills-plus-academics',
    title: 'Why Skills + Academics = True Success',
    description: 'A key resource for schools to align parents with holistic education goals.',
    thumbnail: pedagogicalExcellenceImg,
    badge: 'Parent Engagement',
    badgeColor: 'success' as const,
    route: '/resources/skills-plus-academics',
    readTime: '9 min read'
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
 * School Public Page
 * Shows collaboration opportunities and resources for schools
 */
const School: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { formData, handleChange, isSubmitting, submitStatus, handleSubmit } = useSchoolContactForm();

  // Show 2 articles for non-auth, all 3 for authenticated
  const visibleArticles = isAuthenticated ? SCHOOL_ARTICLES : SCHOOL_ARTICLES.slice(0, 2);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect */}
      <ConfettiBackground />

      {/* Clean Header */}
      <section className="pt-12 pb-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Let's Collaborate to Transform Education
          </h1>
          <p className="text-base text-gray-600 max-w-3xl">
            Partner with us to make teaching and learning more engaging, innovative, and impactful for your institution
          </p>
        </div>
      </section>

      {/* Let's Talk Section with Contact Form */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
            <div className="p-6 md:p-8">
              

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                  Thanks for reaching out! We'll be in touch soon to discuss how we can collaborate.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                  Oops! Something went wrong. Please try again or email us at hello@steambuds.in
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="School Name"
                    placeholder="Your institution's name"
                    value={formData.schoolName}
                    onChange={(e) => handleChange('schoolName', e.target.value)}
                    required
                  />
                  <Input
                    label="Your Name"
                    placeholder="Principal/Admin name"
                    value={formData.contactPerson}
                    onChange={(e) => handleChange('contactPerson', e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@school.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                  />
                </div>

                <Textarea
                  label="Tell us what you're looking for"
                  placeholder="What would you like to explore? Lab setup, teacher training, curriculum integration, or something else?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                />

                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Start the Conversation
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Benefits Grid Below Form */}
              <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-electric-blue-400 to-cyber-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 mb-1">Lab Setup</h3>
                    <p className="text-xs text-gray-600">Complete infrastructure</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyber-purple-400 to-hot-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 mb-1">Teacher Training</h3>
                    <p className="text-xs text-gray-600">Professional development</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-hot-pink-400 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 mb-1">Curriculum</h3>
                    <p className="text-xs text-gray-600">Seamless integration</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Educational Insights</h2>
            <p className="text-sm text-gray-600">Evidence-based resources to enhance your teaching approach</p>
          </div>

          {/* All Cards Same Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {visibleArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => navigate(article.route)}
                imageHeight="h-40"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default School;
