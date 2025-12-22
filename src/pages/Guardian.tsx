import React from 'react';
import { Heart, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/ui';

const Guardian: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <section className="py-16 pattern-dots">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-xl">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                For Parents & Guardians
              </h1>
              <p className="text-xl text-slate-300">
                Support your child's STEAM journey
              </p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl text-lg mb-8">
            Track progress, connect with teachers, and access resources to support your child's learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Create Guardian Account
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

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Guardian Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Progress Tracking</h3>
                <p className="text-slate-300">
                  Monitor your child's learning progress, attendance, and achievements in real-time.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Parent-Teacher Meetings</h3>
                <p className="text-slate-300">
                  Schedule and manage meetings with teachers to discuss your child's progress.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-cyber-purple-500 to-electric-blue-500 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Family Workshops</h3>
                <p className="text-slate-300">
                  Join family-friendly STEAM workshops and community events together.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="gradient">
            <h2 className="text-3xl font-bold text-white mb-4">
              Be Part of Your Child's Learning
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Create your account to stay connected with your child's STEAM education journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Guardian;
