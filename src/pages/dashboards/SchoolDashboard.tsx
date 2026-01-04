import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Lightbulb, Users, BookOpen, Send } from 'lucide-react';
import { useState } from 'react';
import { Button, Card, Badge, Input, Textarea } from '../../components/ui';
import { SCHOOL_ARTICLES } from '../../config/studentContent';
import SchoolResources from './SchoolResources';
import env from '../../config/env';

/**
 * SchoolDashboard Component
 *
 * Main container for authenticated school admin dashboard
 * Routes:
 * - /school/dashboard → Shows collaboration form and resource cards
 * - /school/dashboard/resources → Shows SchoolResources (sidebar + article viewer)
 */
const SchoolDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isResourcesView = location.pathname.includes('/resources');

  // Form state
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`${env.apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.contactPerson,
          email: formData.email,
          message: `School: ${formData.schoolName}\nPhone: ${formData.phone}\n\n${formData.message}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ schoolName: '', contactPerson: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // If on resources view, show SchoolResources component
  if (isResourcesView) {
    return (
      <div className="h-full bg-white">
        <SchoolResources isPublic={false} />
      </div>
    );
  }

  // Default dashboard view - collaboration form and resource cards
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
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    required
                  />
                  <Input
                    label="Your Name"
                    placeholder="Principal/Admin name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@school.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <Textarea
                  label="Tell us what you're looking for"
                  placeholder="What would you like to explore? Lab setup, teacher training, curriculum integration, or something else?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            {SCHOOL_ARTICLES.map((article) => (
              <Card
                key={article.id}
                variant="hover"
                className="flex flex-col cursor-pointer group bg-white"
                onClick={() => navigate(`/school/dashboard/resources?article=${article.id}`)}
              >
                {/* Thumbnail - Image */}
                <div className="w-full h-40 rounded-lg mb-3 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  {/* Badge */}
                  <Badge variant="outline" color={article.badgeColor} className="mb-2 w-fit text-xs">
                    {article.badge}
                  </Badge>

                  {/* Title */}
                  <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors text-gray-900">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-2">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-end text-xs text-primary font-medium pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolDashboard;
