/**
 * Dummy Dashboard Data
 * Provides sample data for all role dashboards
 */

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number; // 0-100
  instructor?: string;
  nextSession?: string;
  status: 'active' | 'completed' | 'upcoming';
}

export interface Batch {
  id: string;
  name: string;
  grade?: string;
  section?: string;
  studentCount?: number;
  schedule: string;
}

export interface Remark {
  id: string;
  from: string;
  message: string;
  date: string;
  type: 'positive' | 'neutral' | 'improvement';
}

export interface Stats {
  label: string;
  value: string | number;
  icon?: string;
  trend?: 'up' | 'down' | 'stable';
}

export interface Child {
  id: string;
  name: string;
  grade: string;
  progress: number;
  recentActivity: string;
}

export interface PendingTask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

// Student Dashboard Data
export const studentDummyData = {
  courses: [
    {
      id: 'course-1',
      title: 'STEAM Robotics',
      description: 'Learn robotics with Arduino and sensors',
      progress: 75,
      instructor: 'Mr. Sharma',
      nextSession: '2025-12-15 at 10:00 AM',
      status: 'active' as const,
    },
    {
      id: 'course-2',
      title: 'Advanced Mathematics',
      description: 'Calculus and Linear Algebra fundamentals',
      progress: 60,
      instructor: 'Ms. Gupta',
      nextSession: '2025-12-14 at 2:00 PM',
      status: 'active' as const,
    },
    {
      id: 'course-3',
      title: 'Science Lab Experiments',
      description: 'Hands-on experiments in physics and chemistry',
      progress: 45,
      instructor: 'Dr. Patel',
      nextSession: '2025-12-16 at 11:00 AM',
      status: 'active' as const,
    },
  ],
  batch: {
    id: 'batch-1',
    name: 'Batch A',
    grade: 'Grade 10',
    section: 'Section B',
    schedule: 'Mon-Wed-Fri, 10:00 AM - 12:00 PM',
  },
  remarks: [
    {
      id: 'remark-1',
      from: 'Mr. Sharma',
      message: 'Excellent work on the robotics project! Keep up the great effort.',
      date: '2025-12-10',
      type: 'positive' as const,
    },
    {
      id: 'remark-2',
      from: 'Ms. Gupta',
      message: 'Need to improve problem-solving speed in math tests.',
      date: '2025-12-08',
      type: 'improvement' as const,
    },
    {
      id: 'remark-3',
      from: 'Dr. Patel',
      message: 'Good participation in lab experiments this week.',
      date: '2025-12-05',
      type: 'positive' as const,
    },
  ],
  stats: [
    { label: 'Overall Progress', value: '75%', trend: 'up' as const },
    { label: 'Attendance', value: '85%', trend: 'stable' as const },
    { label: 'Assignments Completed', value: '12/15', trend: 'up' as const },
    { label: 'Projects Submitted', value: '4/5', trend: 'stable' as const },
  ],
};

// Teacher Dashboard Data
export const teacherDummyData = {
  courses: [
    {
      id: 'course-t1',
      title: 'STEAM Robotics - Grade 10',
      description: 'Teaching robotics fundamentals to 30 students',
      progress: 70,
      nextSession: '2025-12-15 at 10:00 AM',
      status: 'active' as const,
    },
    {
      id: 'course-t2',
      title: 'Science Lab - Grade 9',
      description: 'Conducting physics and chemistry experiments',
      progress: 55,
      nextSession: '2025-12-14 at 3:00 PM',
      status: 'active' as const,
    },
  ],
  groups: [
    {
      id: 'group-1',
      name: 'Grade 10 - Batch A',
      studentCount: 30,
      schedule: 'Mon-Wed-Fri, 10:00 AM - 12:00 PM',
    },
    {
      id: 'group-2',
      name: 'Grade 9 - Batch B',
      studentCount: 25,
      schedule: 'Tue-Thu, 2:00 PM - 4:00 PM',
    },
  ],
  pendingTasks: [
    {
      id: 'task-1',
      title: 'Review Robotics Assignments',
      description: '15 assignments pending review from last week',
      dueDate: '2025-12-14',
      priority: 'high' as const,
    },
    {
      id: 'task-2',
      title: 'Prepare Lab Materials',
      description: 'Setup for chemistry experiment on Friday',
      dueDate: '2025-12-16',
      priority: 'medium' as const,
    },
    {
      id: 'task-3',
      title: 'Grade Mid-term Exams',
      description: '30 exam papers to evaluate',
      dueDate: '2025-12-18',
      priority: 'high' as const,
    },
    {
      id: 'task-4',
      title: 'Update Lesson Plans',
      description: 'Next semester curriculum planning',
      dueDate: '2025-12-20',
      priority: 'medium' as const,
    },
    {
      id: 'task-5',
      title: 'Parent-Teacher Meetings',
      description: 'Schedule meetings for underperforming students',
      dueDate: '2025-12-17',
      priority: 'low' as const,
    },
  ],
  stats: [
    { label: 'Total Students', value: '55', trend: 'up' as const },
    { label: 'Active Courses', value: '2', trend: 'stable' as const },
    { label: 'Pending Reviews', value: '15', trend: 'down' as const },
    { label: 'Avg. Student Performance', value: '78%', trend: 'up' as const },
  ],
};

// School Dashboard Data
export const schoolDummyData = {
  stats: [
    { label: 'Total Students', value: '500', trend: 'up' as const },
    { label: 'Total Teachers', value: '25', trend: 'stable' as const },
    { label: 'Active Courses', value: '15', trend: 'up' as const },
    { label: 'Average Attendance', value: '88%', trend: 'up' as const },
  ],
  recentEnrollments: [
    { id: '1', name: 'Rajesh Kumar', grade: 'Grade 10', date: '2025-12-10' },
    { id: '2', name: 'Priya Sharma', grade: 'Grade 9', date: '2025-12-09' },
    { id: '3', name: 'Amit Patel', grade: 'Grade 11', date: '2025-12-08' },
    { id: '4', name: 'Sneha Gupta', grade: 'Grade 8', date: '2025-12-07' },
    { id: '5', name: 'Vikram Singh', grade: 'Grade 10', date: '2025-12-06' },
  ],
  remarks: [
    {
      id: 'remark-s1',
      from: 'Principal',
      message: 'Excellent performance in inter-school robotics competition!',
      date: '2025-12-11',
      type: 'positive' as const,
    },
    {
      id: 'remark-s2',
      from: 'District Coordinator',
      message: 'Need to improve laboratory infrastructure for chemistry department.',
      date: '2025-12-05',
      type: 'improvement' as const,
    },
  ],
  upcomingEvents: [
    { id: '1', title: 'Science Fair', date: '2025-12-20' },
    { id: '2', title: 'Parent-Teacher Conference', date: '2025-12-22' },
    { id: '3', title: 'Winter Break Starts', date: '2025-12-24' },
  ],
};

// Guardian Dashboard Data
export const guardianDummyData = {
  children: [
    {
      id: 'child-1',
      name: 'Arjun Kumar',
      grade: 'Grade 10',
      progress: 78,
      recentActivity: 'Submitted robotics project on 2025-12-10',
    },
    {
      id: 'child-2',
      name: 'Riya Kumar',
      grade: 'Grade 8',
      progress: 85,
      recentActivity: 'Attended science lab session on 2025-12-11',
    },
  ],
  upcomingMeetings: [
    {
      id: 'meeting-1',
      title: 'Parent-Teacher Meeting - Arjun',
      teacher: 'Mr. Sharma',
      date: '2025-12-17',
      time: '10:00 AM',
    },
    {
      id: 'meeting-2',
      title: 'Progress Review - Riya',
      teacher: 'Ms. Gupta',
      date: '2025-12-19',
      time: '2:00 PM',
    },
  ],
  remarks: [
    {
      id: 'remark-g1',
      from: 'Mr. Sharma (Arjun\'s Teacher)',
      message: 'Arjun is doing well in robotics. Encourage him to participate more in class discussions.',
      date: '2025-12-10',
      type: 'positive' as const,
    },
    {
      id: 'remark-g2',
      from: 'Ms. Gupta (Riya\'s Teacher)',
      message: 'Riya has shown excellent improvement in mathematics. Keep supporting her efforts!',
      date: '2025-12-08',
      type: 'positive' as const,
    },
  ],
  stats: [
    { label: 'Children Enrolled', value: '2', trend: 'stable' as const },
    { label: 'Average Progress', value: '82%', trend: 'up' as const },
    { label: 'Upcoming Meetings', value: '2', trend: 'stable' as const },
  ],
};
