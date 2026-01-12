import { Activity, Brain, Target, Heart, Users, BookOpen } from 'lucide-react';
import {
  STUDENT_ARTICLES,
  TEACHER_ARTICLES,
  GUARDIAN_ARTICLES,
  SCHOOL_ARTICLES,
  STUDENT_ACTIVITIES,
  FREE_RESOURCES_COUNT,
  FREE_TEACHER_RESOURCES_COUNT,
  FREE_GUARDIAN_RESOURCES_COUNT,
  FREE_SCHOOL_RESOURCES_COUNT,
  FREE_ACTIVITIES_COUNT
} from '../config/content';
import {
  UserType,
  DashboardConfig,
  ResourcesConfig,
  ActivitiesConfig
} from '../types/unified';
import { UserRole } from './auth';

/**
 * Extract user type from URL pathname
 * @param pathname - The URL pathname (e.g., "/student/dashboard/resources")
 * @returns The user type or null if not found
 * @example getUserTypeFromPath('/student/dashboard') → 'student'
 * @example getUserTypeFromPath('/teacher/dashboard/resources') → 'teacher'
 */
export function getUserTypeFromPath(pathname: string): UserType | null {
  const match = pathname.match(/^\/(student|teacher|guardian|school)/);
  return match ? (match[1] as UserType) : null;
}

/**
 * Get resources for a specific user type with role-based filtering
 * Acts like an API endpoint - returns content based on user's authentication and role match
 *
 * @param userType - The type of content requested (from URL: student, teacher, guardian, school)
 * @param isAuthenticated - Whether the user is logged in
 * @param userRoles - The actual roles of the logged-in user (empty array if not authenticated)
 * @returns Configuration with articles and free content count
 *
 * Logic:
 * - If NOT authenticated: return limited content (free count enforced)
 * - If authenticated BUT role doesn't match user type: return limited content (treat as guest)
 * - If authenticated AND role matches: return full content (free count = total articles)
 */
export function getResourcesForUserType(
  userType: UserType,
  isAuthenticated: boolean,
  userRoles: UserRole[] = []
): ResourcesConfig {
  const contentMap = {
    student: {
      articles: STUDENT_ARTICLES,
      freeCount: FREE_RESOURCES_COUNT
    },
    teacher: {
      articles: TEACHER_ARTICLES,
      freeCount: FREE_TEACHER_RESOURCES_COUNT
    },
    guardian: {
      articles: GUARDIAN_ARTICLES,
      freeCount: FREE_GUARDIAN_RESOURCES_COUNT
    },
    school: {
      articles: SCHOOL_ARTICLES,
      freeCount: FREE_SCHOOL_RESOURCES_COUNT
    }
  };

  const content = contentMap[userType];

  // If not authenticated, return limited content
  if (!isAuthenticated) {
    return content;
  }

  // If authenticated, check if user's role matches the requested user type
  const requiredRoles = getUserTypeRequiredRoles(userType);
  const hasMatchingRole = userRoles.some(role => requiredRoles.includes(role));

  // If role matches, grant full access (set freeCount to total articles)
  if (hasMatchingRole) {
    return {
      articles: content.articles,
      freeCount: content.articles.length // Full access
    };
  }

  // If role doesn't match, return limited content (like a guest)
  return content;
}

/**
 * Get activities for a specific user type with role-based filtering
 * Acts like an API endpoint - returns content based on user's authentication and role match
 *
 * @param userType - The type of content requested (from URL: student, teacher, guardian, school)
 * @param isAuthenticated - Whether the user is logged in
 * @param userRoles - The actual roles of the logged-in user (empty array if not authenticated)
 * @returns Configuration with activities and free content count
 *
 * Logic:
 * - If NOT authenticated: return limited content (free count enforced)
 * - If authenticated BUT role doesn't match user type: return limited content (treat as guest)
 * - If authenticated AND role matches: return full content (free count = total activities)
 */
export function getActivitiesForUserType(
  userType: UserType,
  isAuthenticated: boolean,
  userRoles: UserRole[] = []
): ActivitiesConfig {
  // Currently only students have activities, others return empty array
  const contentMap: Record<UserType, ActivitiesConfig> = {
    student: {
      activities: STUDENT_ACTIVITIES,
      freeCount: FREE_ACTIVITIES_COUNT
    },
    teacher: {
      activities: [], // Future: add teacher activities
      freeCount: 0
    },
    guardian: {
      activities: [], // Future: add guardian activities
      freeCount: 0
    },
    school: {
      activities: [], // Future: add school activities
      freeCount: 0
    }
  };

  const content = contentMap[userType];

  // If not authenticated or no activities, return as-is
  if (!isAuthenticated || content.activities.length === 0) {
    return content;
  }

  // If authenticated, check if user's role matches the requested user type
  const requiredRoles = getUserTypeRequiredRoles(userType);
  const hasMatchingRole = userRoles.some(role => requiredRoles.includes(role));

  // If role matches, grant full access (set freeCount to total activities)
  if (hasMatchingRole) {
    return {
      activities: content.activities,
      freeCount: content.activities.length // Full access
    };
  }

  // If role doesn't match, return limited content (like a guest)
  return content;
}

/**
 * Get dashboard layout configuration for a specific user type
 * @param userType - The type of user (student, teacher, guardian, school)
 * @returns Dashboard configuration with title, sidebar, and section visibility
 */
export function getDashboardConfigForUserType(userType: UserType): DashboardConfig {
  const configs: Record<UserType, DashboardConfig> = {
    student: {
      title: "Welcome to Your Learning Hub",
      subtitle: "Explore resources, join activities, and accelerate your learning journey",
      sidebarConfig: {
        title: "Join Our Classes",
        description: "Learn STEAM concepts through hands-on projects, expert mentorship, and collaborative learning.",
        features: [
          {
            icon: <Users className="w-4 h-4 text-primary" />,
            title: "Small Batches",
            description: "Personalized attention"
          },
          {
            icon: <BookOpen className="w-4 h-4 text-primary" />,
            title: "Project-Based",
            description: "Real-world learning"
          },
          {
            icon: <Activity className="w-4 h-4 text-primary" />,
            title: "Expert Mentors",
            description: "Industry professionals"
          }
        ],
        ctaText: "Enroll Now",
        ctaHref: "/contact"
      },
      showResourcesSection: true,
      showActivitiesSection: true
    },
    teacher: {
      title: "Your Teaching Dashboard",
      subtitle: "Manage courses, connect with students, and grow professionally",
      sidebarConfig: {
        title: "Professional Growth",
        description: "Join our collaborative teaching community and make a lasting impact on the next generation.",
        features: [
          {
            icon: <Users className="w-4 h-4 text-primary" />,
            title: "Collaborative Culture",
            description: "Learn from peers"
          },
          {
            icon: <BookOpen className="w-4 h-4 text-primary" />,
            title: "Resources",
            description: "Teaching materials"
          },
          {
            icon: <Activity className="w-4 h-4 text-primary" />,
            title: "Impactful Work",
            description: "Shape young minds"
          }
        ],
        ctaText: "Join Our Team",
        ctaHref: "/contact"
      },
      showResourcesSection: true,
      showActivitiesSection: true // Future: teacher activities
    },
    guardian: {
      title: "Be the Guardian of Your Child's Future",
      subtitle: "Shaping the next generation of innovators, thinkers, and problem-solvers",
      sidebarConfig: {
        title: "Beyond Bookish Learning",
        description: "Don't let your child become just a kitabi kida (bookworm). Our NEP-aligned programs develop:",
        features: [
          {
            icon: <Brain className="w-4 h-4 text-primary" />,
            title: "Creative Thinking",
            description: "Problem-solving over memorization"
          },
          {
            icon: <Users className="w-4 h-4 text-primary" />,
            title: "Interpersonal Skills",
            description: "Collaboration & communication"
          },
          {
            icon: <Target className="w-4 h-4 text-primary" />,
            title: "Resilient Personality",
            description: "Life skills, not just exam skills"
          },
          {
            icon: <Heart className="w-4 h-4 text-primary" />,
            title: "Emotional Intelligence",
            description: "Self-awareness & empathy"
          }
        ],
        ctaText: "Enroll Your Child",
        ctaHref: "/contact",
        contactPhone: "+91 9828 770 365"
      },
      showResourcesSection: true,
      showActivitiesSection: false // No guardian activities yet
    },
    school: {
      title: "Transform Your School's Education",
      subtitle: "Partner with us to bring world-class STEAM education to your institution",
      sidebarConfig: {
        title: "Comprehensive Solutions",
        description: "From lab setup to teacher training, we provide everything needed for excellence in STEAM education.",
        features: [
          {
            icon: <Users className="w-4 h-4 text-primary" />,
            title: "Teacher Training",
            description: "Professional development"
          },
          {
            icon: <BookOpen className="w-4 h-4 text-primary" />,
            title: "Curriculum",
            description: "NEP-aligned content"
          },
          {
            icon: <Activity className="w-4 h-4 text-primary" />,
            title: "Lab Setup",
            description: "Complete infrastructure"
          }
        ],
        ctaText: "Partner With Us",
        ctaHref: "/contact",
        contactPhone: "+91 9828 770 365"
      },
      showResourcesSection: true,
      showActivitiesSection: false // No school activities yet
    }
  };

  return configs[userType];
}

/**
 * Map user type to required roles for route protection
 * @param userType - The type of user (student, teacher, guardian, school)
 * @returns Array of roles that can access this user type's pages
 */
export function getUserTypeRequiredRoles(userType: UserType): UserRole[] {
  const roleMap: Record<UserType, UserRole[]> = {
    student: ['student'],
    teacher: ['teacher'],
    guardian: ['guardian', 'other'],
    school: ['school_admin']
  };

  return roleMap[userType];
}

/**
 * Map user role to default user type (for redirects after login)
 * Used to determine which dashboard to redirect to based on user's primary role
 * @param roles - Array of user roles
 * @returns User type to redirect to
 */
export function getRoleUserType(roles: UserRole[]): UserType {
  // Priority order: student > teacher > guardian > school
  // Note: admin role is not mapped as it has its own separate dashboard
  if (roles.includes('student')) return 'student';
  if (roles.includes('teacher')) return 'teacher';
  if (roles.includes('school_admin')) return 'school';
  if (roles.includes('guardian') || roles.includes('other')) return 'guardian';

  // Default fallback
  return 'guardian';
}
