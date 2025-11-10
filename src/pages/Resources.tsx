import React from 'react';
import { BookOpen, FileText, Video, Link as LinkIcon } from 'lucide-react';

const resources = [
  { title: 'Robotics 101: Getting Started', type: 'Article', icon: FileText, color: 'from-electric-blue-400 to-cyber-purple-500' },
  { title: 'Arduino Basics - Step by Step', type: 'Video', icon: Video, color: 'from-cyber-purple-400 to-hot-pink-500' },
  { title: 'STEM vs STEAM: Why Art Matters', type: 'Article', icon: BookOpen, color: 'from-hot-pink-400 to-electric-blue-500' },
  { title: 'Science Fair Project Ideas', type: 'Guide', icon: FileText, color: 'from-electric-blue-400 to-hot-pink-500' },
  { title: 'Free Tools & Kits', type: 'Links', icon: LinkIcon, color: 'from-cyber-purple-400 to-electric-blue-500' },
];

const Resources: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">Public Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore curated articles, videos, and guides to kickstart your learning journey. No login required.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map(({ title, type, icon: Icon, color }) => (
            <div key={title} className="card group">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">{type}</p>
              <button className="btn-outline">View</button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">Want personalized learning?</p>
          <div className="mt-3 flex gap-3 justify-center">
            <a href="/signup" className="btn-primary">Create a free account</a>
            <a href="/login" className="btn-outline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
