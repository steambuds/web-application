import React from 'react';
import {
  BookOpen,
  FileText,
  Video,
  Link as LinkIcon,
  AlertTriangle,
  Users,
  Clock,
  Leaf,
  Target,
  Globe,
  PenTool,
  Brain,
  Bot,
  Zap,
  Smartphone,
  Briefcase,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Pedagogical Excellence',
    type: 'Framework',
    icon: BookOpen,
    color: 'from-blue-400 to-purple-500',
    link: '/resources/pedagogical-excellence',
    description: 'An Integrated Framework for Student Personas and Lesson Quality.'
  },
  {
    title: 'What Makes a Good Teacher?',
    type: 'Insight',
    icon: Users,
    color: 'from-green-400 to-blue-500',
    link: '/resources/good-teacher',
    description: 'Wisdom from Dr. Vikas Divyakirti and Azul Terronez.'
  },
  {
    title: 'NEP 2020: Teacher\'s Playbook',
    type: 'Policy',
    icon: PenTool,
    color: 'from-purple-500 to-indigo-500',
    link: '/resources/nep-2020-teacher-guide',
    description: 'Practical shifts from rote to competency-based teaching.'
  },
  {
    title: 'Decoding NEP 2020',
    type: 'Policy',
    icon: Globe,
    color: 'from-blue-500 to-teal-400',
    link: '/resources/nep-2020-guide',
    description: 'Why schools struggle to implement it and where parents fit in.'
  },
  {
    title: 'The Myth of Learning Styles',
    type: 'Myth Busting',
    icon: AlertTriangle,
    color: 'from-red-400 to-orange-500',
    link: '/resources/education-myths',
    description: 'Why VARK is a myth and what actually works in education.'
  },
  {
    title: "The 'Busy Student' Trap",
    type: 'For Parents',
    icon: Clock,
    color: 'from-pink-400 to-red-500',
    link: '/resources/parents-homework-guide',
    description: 'Why more tuition and homework does not mean more learning.'
  },
  {
    title: 'Rethinking Homework',
    type: 'For Teachers',
    icon: Target,
    color: 'from-purple-400 to-pink-500',
    link: '/resources/teachers-homework-guide',
    description: 'A guide to equitable and effective assignment design.'
  },
  {
    title: 'Holistic Development',
    type: 'Parenting',
    icon: Leaf,
    color: 'from-teal-400 to-green-500',
    link: '/resources/holistic-development',
    description: 'Essential life skills beyond the textbook.'
  },
  {
    title: 'Study Less, Learn More',
    type: 'Student Guide',
    icon: Brain,
    color: 'from-cyan-400 to-blue-500',
    link: '/resources/study-less-learn-more',
    description: 'The Science of "Smart" Studying: Active Recall, Spaced Repetition, and more.'
  },
  {
    title: 'Is AI Cheating?',
    type: 'Student Guide',
    icon: Bot,
    color: 'from-violet-500 to-fuchsia-500',
    link: '/resources/is-ai-cheating',
    description: 'How to use ChatGPT as a tutor, not a writer. Prompt engineering for students.'
  },
  {
    title: 'Math Mindset',
    type: 'Student Guide',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    link: '/resources/math-mindset',
    description: 'Why "I\'m not a math person" is a lie. The science of Neuroplasticity.'
  },
  {
    title: 'The Dopamine War',
    type: 'Student Guide',
    icon: Smartphone,
    color: 'from-red-500 to-rose-600',
    link: '/resources/dopamine-detox',
    description: 'Why you can\'t focus and how to reclaim your brain from TikTok and Reels.'
  },
  {
    title: 'Marks vs. Skills',
    type: 'Student Guide',
    icon: Briefcase,
    color: 'from-emerald-400 to-green-600',
    link: '/resources/marks-vs-skills',
    description: 'Why building a portfolio of projects matters more than just getting an A+.'
  },
  {
    title: 'Marks & Skills: Parenting',
    type: 'Parenting',
    icon: Scale,
    color: 'from-teal-500 to-emerald-500',
    link: '/resources/marks-vs-skills-parenting',
    description: 'Why you don\'t have to choose between good grades and real-world skills.'
  }
];

const externalResources = [
  { title: 'Robotics 101: Getting Started', type: 'External Article', icon: FileText, color: 'bg-gray-100 text-gray-600' },
  { title: 'Arduino Basics - Step by Step', type: 'External Video', icon: Video, color: 'bg-gray-100 text-gray-600' },
  { title: 'Free Tools & Kits', type: 'External Links', icon: LinkIcon, color: 'bg-gray-100 text-gray-600' },
];

const Resources: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">Knowledge Hub</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deep dives into pedagogy, parenting, and the science of learning. Curated for the STEAM Buds community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map(({ title, type, icon: Icon, color, link, description }) => (
            <Link to={link} key={title} className="group h-full">
              <div className="h-full border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 shadow-sm`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">{type}</span>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors mt-1">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
                <div className="text-purple-600 font-medium text-sm flex items-center gap-2">
                  Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-center mb-8">External Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalResources.map(({ title, type, icon: Icon, color }) => (
              <div key={title} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                  <p className="text-xs text-gray-500">{type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-purple-900 mb-2">Want personalized learning resources?</h3>
          <p className="text-purple-700 mb-6">Create an account to access our full library of interactive courses.</p>
          <div className="flex gap-3 justify-center">
            <Link to="/signup" className="btn-primary">Create Free Account</Link>
            <Link to="/login" className="btn-outline bg-white">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
