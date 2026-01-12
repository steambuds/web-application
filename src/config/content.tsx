import { ReactNode } from 'react';
import {
  Beaker,
  Calculator,
  Rocket,
  Lightbulb,
  Code,
  Palette,
} from 'lucide-react';

// Import Article Components
import AICheatingGuide from '../resource_page/AICheatingGuide';
import DopamineDetoxGuide from '../resource_page/DopamineDetoxGuide';
import MarksVsSkillsGuide from '../resource_page/MarksVsSkillsGuide';
import MathMindsetGuide from '../resource_page/MathMindsetGuide';
import StudyLessLearnMore from '../resource_page/StudyLessLearnMore';

// Import Images
import aiCheatingImg from '../images/ai_cheating.jpeg';
import brainOnScrollingImg from '../images/brain_on_scrolling.jpeg';
import markVsSkillImg from '../images/mark_vs_skill.jpeg';
import notMathPersonImg from '../images/not_math_person.jpeg';
import studyLessLearnMoreImg from '../images/study_less_learn_more.jpeg';

/**
 * Article Configuration
 */
export interface Article {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  badge: string;
  badgeColor: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'gray';
  component: React.FC;
}

export const STUDENT_ARTICLES: Article[] = [
  {
    id: 'ai-cheating',
    title: 'Is AI Cheating?',
    description: 'How to use ChatGPT as a tutor, not a writer. Prompt engineering for students.',
    thumbnail: aiCheatingImg,
    badge: 'Student Guide',
    badgeColor: 'accent',
    component: AICheatingGuide,
  },
  {
    id: 'dopamine-detox',
    title: 'Your Brain on Scrolling',
    description: 'Why you can\'t focus and how to reclaim your brain from TikTok and Reels.',
    thumbnail: brainOnScrollingImg,
    badge: 'Student Guide',
    badgeColor: 'error',
    component: DopamineDetoxGuide,
  },
  {
    id: 'marks-vs-skills',
    title: 'Marks vs. Skills',
    description: 'Why building a portfolio of projects matters more than just getting an A+.',
    thumbnail: markVsSkillImg,
    badge: 'Student Guide',
    badgeColor: 'success',
    component: MarksVsSkillsGuide,
  },
  {
    id: 'math-mindset',
    title: 'Math Mindset',
    description: 'Why "I\'m not a math person" is a lie. The science of Neuroplasticity.',
    thumbnail: notMathPersonImg,
    badge: 'Student Guide',
    badgeColor: 'primary',
    component: MathMindsetGuide,
  },
  {
    id: 'study-less-learn-more',
    title: 'Study Less, Learn More',
    description: 'The Science of "Smart" Studying: Active Recall, Spaced Repetition, and more.',
    thumbnail: studyLessLearnMoreImg,
    badge: 'Student Guide',
    badgeColor: 'primary',
    component: StudyLessLearnMore,
  },
];

/**
 * Activity Configuration
 */
export interface Activity {
  id: string;
  name: string;
  icon: ReactNode;
  color: string;
  description: string;
}

export const STUDENT_ACTIVITIES: Activity[] = [
  {
    id: 'science-lab',
    name: 'Science Lab',
    icon: <Beaker className="w-6 h-6" />,
    color: 'bg-blue-500',
    description: 'Hands-on science experiments'
  },
  {
    id: 'math-zone',
    name: 'Math Zone',
    icon: <Calculator className="w-6 h-6" />,
    color: 'bg-purple-500',
    description: 'Problem solving challenges'
  },
  {
    id: 'robotics',
    name: 'Robotics',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-red-500',
    description: 'Build and program robots'
  },
  {
    id: 'innovation',
    name: 'Innovation Lab',
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'bg-yellow-500',
    description: 'Creative project ideas'
  },
  {
    id: 'coding',
    name: 'Coding Club',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-green-500',
    description: 'Learn programming'
  },
  {
    id: 'art-tech',
    name: 'Art & Tech',
    icon: <Palette className="w-6 h-6" />,
    color: 'bg-pink-500',
    description: 'Digital art and design'
  }
];

/**
 * Chat Message Configuration
 */
export interface Message {
  id: string;
  text: string;
  sender: 'student' | 'team';
  timestamp: Date;
  senderName: string;
}

export const DUMMY_CONVERSATIONS: Record<string, Message[]> = {
  'science-lab': [
    {
      id: '1',
      text: 'How do I set up the chemical reaction experiment?',
      sender: 'student',
      timestamp: new Date('2024-01-15T10:00:00'),
      senderName: 'You'
    },
    {
      id: '2',
      text: 'Great question! First, make sure you have all the safety equipment ready. Then follow steps 1-3 in the experiment guide.',
      sender: 'team',
      timestamp: new Date('2024-01-15T10:15:00'),
      senderName: 'Mr. Sharma'
    }
  ],
  'math-zone': [],
  'robotics': [],
  'innovation': [],
  'coding': [],
  'art-tech': []
};

/**
 * Access Control Constants
 */
export const FREE_RESOURCES_COUNT = 2; // Number of free resources for non-authenticated users
export const FREE_ACTIVITIES_COUNT = 2; // Number of free activities for non-authenticated users

/**
 * Teacher Resources Configuration
 */
// Import teacher resource components
import PedagogicalExcellence from '../resource_page/PedagogicalExcellence';
import WhatMakesGoodTeacher from '../resource_page/WhatMakesGoodTeacher';
import EducationMyths from '../resource_page/EducationMyths';
import HomeworkGuideTeachers from '../resource_page/HomeworkGuideTeachers';
import NEP2020TeacherGuide from '../resource_page/NEP2020TeacherGuide';

// Import teacher images
import mythOfEducationImg from '../images/myth_of_education.jpeg';
import pedagogicalExcellenceImg from '../images/pedagogical_excellence.jpeg';
import goodTeacherImg from '../images/good_teacher.jpeg';
import homeworkTeacherImg from '../images/homework_teacher.jpeg';
import teacherNepImg from '../images/teacher_nep.jpeg';

export const TEACHER_ARTICLES: Article[] = [
  {
    id: 'pedagogical-excellence',
    title: 'Pedagogical Excellence Framework',
    description: 'Master student personas, class dynamics, and lesson quality with RIASEC and Bloom\'s Taxonomy.',
    thumbnail: pedagogicalExcellenceImg,
    badge: 'Framework',
    badgeColor: 'secondary',
    component: PedagogicalExcellence,
  },
  {
    id: 'nep-2020-teacher-guide',
    title: 'NEP 2020: Teacher\'s Playbook',
    description: 'Move beyond "finishing the syllabus" to ensuring understanding—key shifts for educators.',
    thumbnail: teacherNepImg,
    badge: 'Policy Implementation',
    badgeColor: 'primary',
    component: NEP2020TeacherGuide,
  },
  {
    id: 'homework-guide-teachers',
    title: 'Rethinking Homework',
    description: 'Design assignments that promote equity, autonomy, and genuine learning—without the burnout.',
    thumbnail: homeworkTeacherImg,
    badge: 'Teaching Strategy',
    badgeColor: 'secondary',
    component: HomeworkGuideTeachers,
  },
  {
    id: 'education-myths',
    title: 'The Biggest Myth of Education',
    description: 'Discover why "Learning Styles" (VARK) might be holding students back, and what science actually says works.',
    thumbnail: mythOfEducationImg,
    badge: 'Myth Busting',
    badgeColor: 'error',
    component: EducationMyths,
  },
  {
    id: 'good-teacher',
    title: 'What Makes a Good Teacher?',
    description: 'Insights from leading educators on effective teaching strategies for the modern classroom.',
    thumbnail: goodTeacherImg,
    badge: 'Professional Development',
    badgeColor: 'primary',
    component: WhatMakesGoodTeacher,
  }
];

export const FREE_TEACHER_RESOURCES_COUNT = 2; // Number of free teacher resources for non-authenticated users

/**
 * Guardian Resources Configuration
 */
// Import guardian resource components
import HomeworkGuideParents from '../resource_page/HomeworkGuideParents';
import MarksVsSkillsParentGuide from '../resource_page/MarksVsSkillsParentGuide';
import NEP2020ParentGuide from '../resource_page/NEP2020ParentGuide';
import HolisticDevelopmentGuide from '../resource_page/HolisticDevelopmentGuide';

// Import guardian images
import homeworkParentImg from '../images/homework_parent.jpeg';
import markSkillParentImg from '../images/mark_skill_parent.jpeg';
import parentNepImg from '../images/parent_nep.jpeg';
import beyondTextbookImg from '../images/beyond_textbook.jpeg';

export const GUARDIAN_ARTICLES: Article[] = [
  {
    id: 'homework-guide-parents',
    title: 'The "Busy Student" Trap',
    description: 'Why more homework and tuition doesn\'t always equal better grades—and why your child needs time to just "be."',
    thumbnail: homeworkParentImg,
    badge: 'Parenting Guide',
    badgeColor: 'accent',
    component: HomeworkGuideParents,
  },
  {
    id: 'marks-vs-skills-parenting',
    title: 'Marks AND Skills: The Balancing Act',
    description: 'Why choosing between "Good Grades" and "Real Skills" is a false dilemma—how to prepare for the future.',
    thumbnail: markSkillParentImg,
    badge: 'Parenting Guide',
    badgeColor: 'secondary',
    component: MarksVsSkillsParentGuide,
  },
  {
    id: 'nep-2020-parent-guide',
    title: 'No More Rote Learning?(NEP 2020)',
    description: 'Why schools struggle to implement it and where you as a parent fit in the revolution.',
    thumbnail: parentNepImg,
    badge: 'Policy Guide',
    badgeColor: 'primary',
    component: NEP2020ParentGuide,
  },
  {
    id: 'holistic-development',
    title: 'Beyond The Textbook',
    description: 'Why rote memorization isn\'t enough—how to prepare your child with empathy, finance, and resilience.',
    thumbnail: beyondTextbookImg,
    badge: 'Life Skills',
    badgeColor: 'success',
    component: HolisticDevelopmentGuide,
  }
];

export const FREE_GUARDIAN_RESOURCES_COUNT = 2; // Number of free guardian resources for non-authenticated users

/**
 * School Resources Configuration
 * (Same as teacher resources - professional development for educators)
 */
export const SCHOOL_ARTICLES: Article[] = TEACHER_ARTICLES;

export const FREE_SCHOOL_RESOURCES_COUNT = 2; // Number of free school resources for non-authenticated users

/**
 * Structured Content Map for Unified Dashboard System
 * Centralizes all content by user type for easier access and management
 */
export const CONTENT_BY_USER_TYPE = {
  student: {
    articles: STUDENT_ARTICLES,
    activities: STUDENT_ACTIVITIES,
    freeResourceCount: FREE_RESOURCES_COUNT,
    freeActivityCount: FREE_ACTIVITIES_COUNT
  },
  teacher: {
    articles: TEACHER_ARTICLES,
    activities: [], // Future: add teacher activities
    freeResourceCount: FREE_TEACHER_RESOURCES_COUNT,
    freeActivityCount: 0
  },
  guardian: {
    articles: GUARDIAN_ARTICLES,
    activities: [], // Future: add guardian activities
    freeResourceCount: FREE_GUARDIAN_RESOURCES_COUNT,
    freeActivityCount: 0
  },
  school: {
    articles: SCHOOL_ARTICLES,
    activities: [], // Future: add school activities
    freeResourceCount: FREE_SCHOOL_RESOURCES_COUNT,
    freeActivityCount: 0
  }
};
