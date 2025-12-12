import React from 'react';
import { School as SchoolIcon, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/ui';

const School: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <section className="py-16 pattern-dots">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyber-purple-500 to-electric-blue-500 rounded-xl">
              <SchoolIcon className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                For Schools
              </h1>
              <p className="text-xl text-slate-300">
                Transform education with STEAM
              </p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl text-lg mb-8">
            Complete STEAM lab setup, curriculum integration, and teacher training for schools across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Partner With Us
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">
                School Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">School Partnerships</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-cyber-purple-500 to-electric-blue-500 rounded-full mb-4">
                  <SchoolIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lab Setup</h3>
                <p className="text-slate-300">
                  Complete STEAM lab infrastructure including equipment, materials, and safety protocols.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Teacher Training</h3>
                <p className="text-slate-300">
                  Comprehensive professional development programs for your teaching staff.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-full mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Curriculum Integration</h3>
                <p className="text-slate-300">
                  Seamlessly integrate STEAM into your existing curriculum with our support.
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
              Join 200+ Schools Nationwide
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Transform your school with comprehensive STEAM education. Request a consultation today.
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

export default School;
