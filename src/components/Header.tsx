import React, { useState, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, User, Info, Mail, BookOpen, Activity, GraduationCap, Users, Building2, ChevronDown } from 'lucide-react';
import logoImage from '../images/steambuds_logo.svg';
import { Button } from './ui';
import { useAuth } from '../context/AuthContext';
import { useHeaderAction } from '../context/HeaderActionContext';
import { useIntroAnimation } from '../context/IntroAnimationContext';
import { getUserInitials, getNavLinkClassName } from '../utils/helpers';

// Navigation link type
interface NavLink {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

const DASHBOARD_ROUTES = {
  student: '/student/dashboard',
  teacher: '/teacher/dashboard',
  guardian: '/guardian/dashboard',
  school: '/school/dashboard',
  admin: '/admin/dashboard'
};

// Public navigation links
const PUBLIC_NAV_LINKS_HOME: NavLink[] = [
  { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
  { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
];

const PUBLIC_NAV_LINKS: NavLink[] = [
  { to: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
  { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
  { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
];

const getStudentNavLinks = (pathname: string): NavLink[] => {
  if (pathname.includes('/student/dashboard/resources') ||
      pathname.includes('/student/dashboard/activities')) {
    const isOnActivities = pathname.includes('/activities');
    return [
      { to: DASHBOARD_ROUTES.student, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> },
      isOnActivities
        ? { to: `${DASHBOARD_ROUTES.student}/resources`, label: 'Resources', icon: <BookOpen className="h-4 w-4" /> }
        : { to: `${DASHBOARD_ROUTES.student}/activities`, label: 'Activities', icon: <Activity className="h-4 w-4" /> }
    ];
  }
  if (pathname.startsWith(DASHBOARD_ROUTES.student)) {
    return [
      { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
      { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
    ];
  }
  return [{ to: DASHBOARD_ROUTES.student, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
};

const getTeacherNavLinks = (pathname: string): NavLink[] => {
  if (pathname.includes('/teacher/dashboard/resources')) {
    return [{ to: DASHBOARD_ROUTES.teacher, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
  }
  if (pathname.startsWith(DASHBOARD_ROUTES.teacher)) {
    return [
      { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
      { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
    ];
  }
  return [{ to: DASHBOARD_ROUTES.teacher, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
};

const getGuardianNavLinks = (pathname: string): NavLink[] => {
  if (pathname.includes('/guardian/dashboard/resources')) {
    return [{ to: DASHBOARD_ROUTES.guardian, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
  }
  if (pathname.startsWith(DASHBOARD_ROUTES.guardian)) {
    return [
      { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
      { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
    ];
  }
  return [{ to: DASHBOARD_ROUTES.guardian, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
};

const getSchoolNavLinks = (pathname: string): NavLink[] => {
  if (pathname.includes('/school/dashboard/resources')) {
    return [{ to: DASHBOARD_ROUTES.school, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
  }
  if (pathname.startsWith(DASHBOARD_ROUTES.school)) {
    return [
      { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
      { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
    ];
  }
  return [{ to: DASHBOARD_ROUTES.school, label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
};

const USER_TYPE_OPTIONS = [
  { id: 'student', label: 'Student', icon: GraduationCap, path: '/student/dashboard' },
  { id: 'guardian', label: 'Guardian', icon: Users, path: '/guardian/dashboard' },
  { id: 'teacher', label: 'Teacher', icon: BookOpen, path: '/teacher/dashboard' },
  { id: 'school', label: 'School', icon: Building2, path: '/school/dashboard' },
];

/**
 * Header Component
 * Responsive navigation header with role-based navigation links
 * Adapts layout for authenticated vs non-authenticated users
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserTypeDropdownOpen, setIsUserTypeDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { title, mobileAction, customNavLinks } = useHeaderAction();
  const { showUserTypeDropdown } = useIntroAnimation();

  /**
   * Get navigation links based on user role and current route
   */
  const getRoleSpecificNavLinks = useMemo(() => {
    if (!isAuthenticated || !user?.roles || user.roles.length === 0) {
      return PUBLIC_NAV_LINKS;
    }

    const roles = user.roles;
    if (roles.includes('admin')) return [];
    if (roles.includes('student')) return getStudentNavLinks(location.pathname);
    if (roles.includes('teacher')) return getTeacherNavLinks(location.pathname);
    if (roles.includes('guardian') || roles.includes('other')) return getGuardianNavLinks(location.pathname);
    if (roles.includes('school_admin')) return getSchoolNavLinks(location.pathname);

    return PUBLIC_NAV_LINKS;
  }, [isAuthenticated, user, location.pathname]);

  const shouldShowMobileMenu = useMemo(() => {
    if (!isAuthenticated || mobileAction) return false;
    
    // Hide standard mobile menu on dashboard pages (except resources/activities where needed)
    // Actually, logic is: hide if on main dashboard page
    const pathname = location.pathname;
    const isMainDashboard = 
      pathname === DASHBOARD_ROUTES.student ||
      pathname === DASHBOARD_ROUTES.teacher ||
      pathname === DASHBOARD_ROUTES.guardian ||
      pathname === DASHBOARD_ROUTES.school;
      
    // Also hide for some sub-routes if they are "main" dashboard views?
    // Original logic:
    // (location.pathname.startsWith('/guardian/dashboard') && !location.pathname.includes('/resources'))
    // This means hide for /guardian/dashboard AND /guardian/dashboard/something ELSE than resources?
    // Actually, the original logic hid the menu on dashboard pages because they already show About/Contact in the navbar,
    // and there are no other links to show in the hamburger menu.
    
    // Let's simplify: Show mobile menu button ONLY if there are links to show that might be hidden?
    // Or just respect the original complex logic for now.
    
    if (isMainDashboard) return false;
    
    // Special cases from original code
    if (pathname.startsWith(DASHBOARD_ROUTES.guardian) && !pathname.includes('/resources')) return false;
    if (pathname.startsWith(DASHBOARD_ROUTES.school) && !pathname.includes('/resources')) return false;
    
    return true;
  }, [isAuthenticated, mobileAction, location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-2 md:px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logoImage}
                alt="Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
              {!title && (
                <div className="hidden md:block">
                  <h1 className="text-xl leading-6 font-bold font-display">
                    <span className="text-primary">STEAM</span> <span className="text-accent">&nbsp;Buds</span>
                  </h1>
                </div>
              )}
            </Link>
            {title && (
              <div className="md:hidden pl-2 border-l border-gray-300">
                {title}
              </div>
            )}
          </div>

          {/* Navigation - Visible on mobile for all users */}
          {isAuthenticated ? (
            // Role-specific navigation for authenticated users
            <nav className="flex space-x-3 md:space-x-6">
              {getRoleSpecificNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={getNavLinkClassName(isActive(link.to))}
                >
                  {/* Icon only visible on desktop */}
                  <span className="hidden sm:inline">{link.icon}</span>
                  {/* Label always visible */}
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          ) : (
            // Public navigation
            <nav className="flex items-center space-x-3 md:space-x-6">
              {location.pathname === '/' ? (
                // Home page navigation (About Us, Contact) - filter out current page
                <>
                  {PUBLIC_NAV_LINKS_HOME.filter(link => link.to !== location.pathname).map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={getNavLinkClassName(isActive(link.to))}
                    >
                      {/* Icon only visible on desktop */}
                      <span className="hidden sm:inline">{link.icon}</span>
                      {/* Label always visible */}
                      <span>{link.label}</span>
                    </Link>
                  ))}

                  {/* User Type Dropdown (shown after intro animation) */}
                  {showUserTypeDropdown && (
                    <div className="relative">
                      <button
                        onClick={() => setIsUserTypeDropdownOpen(!isUserTypeDropdownOpen)}
                        className="relative flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-sm md:text-base shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <span className="relative">I am a</span>
                        <ChevronDown className={`relative w-4 h-4 transition-transform duration-300 ${isUserTypeDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isUserTypeDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 z-50 backdrop-blur-lg">
                          {USER_TYPE_OPTIONS.map((option, index) => (
                            <button
                              key={option.id}
                              onClick={() => {
                                navigate(option.path);
                                setIsUserTypeDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-gradient-to-r flex items-center gap-3 transition-all duration-200 rounded-lg mx-1 group
                                ${index === 0 ? 'hover:from-blue-50 hover:to-blue-100' : ''}
                                ${index === 1 ? 'hover:from-green-50 hover:to-green-100' : ''}
                                ${index === 2 ? 'hover:from-purple-50 hover:to-purple-100' : ''}
                                ${index === 3 ? 'hover:from-orange-50 hover:to-orange-100' : ''}
                              `}
                            >
                              <option.icon className={`w-5 h-5 transition-colors duration-200
                                ${index === 0 ? 'text-blue-500 group-hover:text-blue-600' : ''}
                                ${index === 1 ? 'text-green-500 group-hover:text-green-600' : ''}
                                ${index === 2 ? 'text-purple-500 group-hover:text-purple-600' : ''}
                                ${index === 3 ? 'text-orange-500 group-hover:text-orange-600' : ''}
                              `} />
                              <span className="text-gray-700 font-medium group-hover:text-gray-900">{option.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                // Other public pages (Home, About Us, Contact) - filter out current page
                <>
                  {PUBLIC_NAV_LINKS.filter(link => link.to !== location.pathname).map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={getNavLinkClassName(isActive(link.to))}
                    >
                      {/* Icon only visible on desktop */}
                      <span className="hidden sm:inline">{link.icon}</span>
                      {/* Label always visible */}
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </>
              )}
              {/* Add custom navigation link if provided (e.g., Resources/Activities toggle) */}
              {customNavLinks}
            </nav>
          )}

          <div className="flex items-center gap-2">
            {/* App Action Mobile Button (e.g., Sidebar Toggle) */}
            {mobileAction && (
              <button
                className="md:hidden p-2"
                onClick={mobileAction}
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            )}

            {/* User Icon (Unified for Auth/Unauth) */}
            <div className="flex items-center">
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs md:text-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                  title={user?.username || 'Profile'}
                >
                  {getUserInitials(user?.username)}
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                  title="Sign In"
                >
                  <User className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
              )}
            </div>

            {/* Standard Mobile menu button - Only show if authenticated AND no mobile action AND shouldShowMobileMenu */}
            {shouldShowMobileMenu && (
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && !mobileAction && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <div className="flex flex-col space-y-3">
              {(isAuthenticated
                ? getRoleSpecificNavLinks
                : (location.pathname === '/' ? PUBLIC_NAV_LINKS_HOME : PUBLIC_NAV_LINKS).filter(link => link.to !== location.pathname)
              ).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={getNavLinkClassName(isActive(link.to), 'gap-2')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              {/* Add custom navigation link in mobile menu if provided */}
              {!isAuthenticated && customNavLinks && (
                <div onClick={() => setIsMenuOpen(false)}>
                  {customNavLinks}
                </div>
              )}
              <div className="flex flex-col space-y-2 items-start pt-2 border-t border-gray-200">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                        {getUserInitials(user?.username)}
                      </div>
                      <span className="font-medium text-gray-700">
                        {user?.username || 'Profile'}
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline">Login</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="primary">Sign up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
