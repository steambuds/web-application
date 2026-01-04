/**
 * Get user initials from name (1-2 letters)
 * @param name - User's full name
 * @returns Initials (e.g., "JD" for "John Doe", "J" for "John")
 */
export const getUserInitials = (name?: string): string => {
  if (!name) return 'U';

  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    // First letter of first two words
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  // First two letters of single word, or just first letter
  return words[0].substring(0, 2).toUpperCase();
};

/**
 * Build navigation link className based on active state
 * @param isActive - Whether the link is currently active
 * @param additionalClasses - Additional classes to append
 * @returns Complete className string
 */
export const getNavLinkClassName = (
  isActive: boolean,
  additionalClasses = ''
): string => {
  const baseClasses = 'font-medium transition-colors duration-200 flex items-center gap-1 md:gap-2 text-xs md:text-base';
  const activeClasses = isActive
    ? 'text-primary border-b-2 border-primary'
    : 'text-gray-700 hover:text-primary';

  return `${baseClasses} ${activeClasses} ${additionalClasses}`.trim();
};



/**
 * Build badge className based on color variant
 * NOTE: Tailwind doesn't support dynamic class generation, so we need to use full class names
 * @param color - Badge color variant
 * @returns Complete className string with background and text color
 */
export const getBadgeClassName = (
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'gray'
): string => {
  const colorMap = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    success: 'bg-success-100 text-success-800',
    error: 'bg-error-100 text-error-800',
    warning: 'bg-warning-100 text-warning-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return `inline-block px-2 py-0.5 text-[10px] rounded-full font-medium ${colorMap[color]}`;
};

/**
 * Check if a path matches app mode (full-screen dashboard with resources)
 * @param pathname - Current route pathname
 * @returns True if path requires app mode layout
 */
export const isAppModePath = (pathname: string): boolean => {
  const appModePaths = [
    '/student/dashboard/activities',
    '/student/dashboard/resources',
    '/teacher/dashboard/resources',
    '/guardian/dashboard/resources',
    '/school/dashboard/resources'
  ];

  return appModePaths.some(path => pathname.includes(path));
};

/**
 * Format timestamp for chat messages
 * @param date - Message timestamp
 * @returns Formatted time string (e.g., "10:30 AM")
 */
export const formatMessageTime = (date: Date): string => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
};
