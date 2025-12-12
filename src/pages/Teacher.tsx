import React from 'react';
import { BookOpen, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/ui';

/**
 * Teacher Public Page
 * Shows public information about teacher services
 * Authenticated users are redirected to /teacher/dashboard by PublicRoute wrapper
 */
const Teacher: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 pattern-dots">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-xl">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                For Teachers
              </h1>
              <p className="text-xl text-slate-300">
                Empower your students with STEAM education
              </p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl text-lg mb-8">
            Comprehensive kits, lesson plans, and professional development to bring hands-on STEAM learning to your classroom.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Create Teacher Account
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">
                Login to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Teacher Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-full mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lesson Plans</h3>
                <p className="text-slate-300">
                  Ready-to-use, standards-aligned lesson plans for STEAM topics with step-by-step guides.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Development</h3>
                <p className="text-slate-300">
                  Workshops and training sessions to enhance your STEAM teaching skills.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-cyber-purple-500 to-electric-blue-500 rounded-full mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Teaching Kits</h3>
                <p className="text-slate-300">
                  Complete kits with materials and equipment for hands-on classroom activities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="gradient">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Classroom?
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Join 200+ schools and 1000+ teachers already using STEAM Buds resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Request Demo
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Teacher;
