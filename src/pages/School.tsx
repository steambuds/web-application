import React from 'react';
import { Building2, Wrench, Users, BookOpen, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

const School: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-electric-blue-500" />
            <h1 className="text-3xl md:text-4xl font-display font-bold">For Schools</h1>
          </div>
          <p className="text-gray-700 max-w-2xl">End-to-end solutions: lab setup, expert teachers, curriculum, and PD. Everything you need to run a world-class STEAM program.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/signup" className="btn-primary">Create school account</Link>
            <Link to="/login" className="btn-outline">Login</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="font-display text-2xl font-bold mb-4">School Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><Wrench className="h-5 w-5 text-hot-pink-500 mt-0.5" /> Lab setup and maintenance</li>
              <li className="flex items-start gap-2"><Users className="h-5 w-5 text-electric-blue-500 mt-0.5" /> Full-time/part-time expert teachers</li>
              <li className="flex items-start gap-2"><BookOpen className="h-5 w-5 text-cyber-purple-500 mt-0.5" /> Curriculum and assessments</li>
              <li className="flex items-start gap-2"><Cog className="h-5 w-5 text-electric-blue-500 mt-0.5" /> Program management and reporting</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="font-display text-2xl font-bold mb-4">School Profile</h2>
            <form className="grid grid-cols-1 gap-3">
              <input className="border rounded-lg px-3 py-2" placeholder="School name" />
              <input className="border rounded-lg px-3 py-2" placeholder="City" />
              <input className="border rounded-lg px-3 py-2" placeholder="Approx. no. of students" />
              <button type="button" className="btn-secondary">Save to my account</button>
              <p className="text-xs text-gray-500 -mt-2">Login or create an account to save.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default School;
