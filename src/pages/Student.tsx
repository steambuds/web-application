import React from 'react';
import { GraduationCap, Rocket, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Student: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-electric-blue-500" />
            <h1 className="text-3xl md:text-4xl font-display font-bold">For Students</h1>
          </div>
          <p className="text-gray-700 max-w-2xl">Hands-on projects, competitions, and mentorship to help you learn by building. Create a profile to track your progress and get curated resources.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/signup" className="btn-primary">Create your student account</Link>
            <Link to="/login" className="btn-outline">Login</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="font-display text-2xl font-bold mb-4">Student Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><Rocket className="h-5 w-5 text-hot-pink-500 mt-0.5" /> Weekly maker labs and robotics clubs</li>
              <li className="flex items-start gap-2"><Star className="h-5 w-5 text-cyber-purple-500 mt-0.5" /> Competition prep (WRO, RoboCup, science fairs)</li>
              <li className="flex items-start gap-2"><Star className="h-5 w-5 text-electric-blue-500 mt-0.5" /> 1:1 mentorship and project reviews</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="font-display text-2xl font-bold mb-4">Your Profile</h2>
            <p className="text-gray-700 mb-4">Create a profile to track skills, badges, and projects. Personalize recommendations based on your interests.</p>
            <form className="grid grid-cols-1 gap-3">
              <input className="border rounded-lg px-3 py-2" placeholder="Name" />
              <input className="border rounded-lg px-3 py-2" placeholder="Grade / Class" />
              <input className="border rounded-lg px-3 py-2" placeholder="Interests (e.g. robotics, AI, design)" />
              <button type="button" className="btn-secondary">Save to my account</button>
              <p className="text-xs text-gray-500 -mt-2">Login or create an account to save.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Student;
