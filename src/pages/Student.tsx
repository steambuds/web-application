import React from 'react';
import { GraduationCap, Rocket, Star, Target, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/ui';

/**
 * Student Public Page
 * Shows public information about student services
 * NO profile forms, NO personalization
 * Authenticated users are redirected to /student/dashboard by PublicRoute wrapper
 */
const Student: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 pattern-dots">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-xl">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                For Students
              </h1>
              <p className="text-xl text-slate-300">
                Ignite your passion for STEAM learning
              </p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl text-lg mb-8">
            Hands-on projects, competitions, and mentorship to help you learn by building.
            Join our community of young innovators and makers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Create Student Account
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-full mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Maker Labs</h3>
                <p className="text-slate-300">
                  Weekly hands-on sessions with Arduino, sensors, and robotics kits.
                  Build real projects from scratch.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Competitions</h3>
                <p className="text-slate-300">
                  Prepare for WRO, RoboCup, science fairs, and hackathons.
                  Compete with peers nationwide.
                </p>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-cyber-purple-500 to-electric-blue-500 rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mentorship</h3>
                <p className="text-slate-300">
                  1:1 mentorship from industry experts and project reviews.
                  Get guidance on your learning journey.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="hover">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 rounded-lg">
                  <Target className="h-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">STEAM Robotics</h3>
                  <p className="text-sm text-slate-400">Beginner to Advanced</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Learn robotics fundamentals with Arduino and sensors. Build line-following robots and more.
              </p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                  12-week program
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                  Hands-on projects
                </li>
              </ul>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-hot-pink-500 to-accent-500 rounded-lg">
                  <Target className="h-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Python Programming</h3>
                  <p className="text-sm text-slate-400">Beginner Friendly</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Start your coding journey with Python. Learn programming basics through fun projects.
              </p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                  8-week program
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                  Interactive coding
                </li>
              </ul>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-cyber-purple-500 to-electric-blue-500 rounded-lg">
                  <Target className="h-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Science Lab</h3>
                  <p className="text-sm text-slate-400">Experimental Learning</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Hands-on experiments in physics and chemistry. Learn through discovery and experimentation.
              </p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                  10-week program
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                  Lab equipment included
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="gradient">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your STEAM Journey?
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Join 5000+ students already learning with STEAM Buds.
              Create your account today and start exploring!
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

export default Student;
