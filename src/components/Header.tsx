import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Info, Mail, BookOpen, Activity } from 'lucide-react';
import logoImage from '../images/steambuds_logo.svg';
import { Button } from './ui';
import { useAuth } from '../context/AuthContext';
import { useHeaderAction } from '../context/HeaderActionContext';
import { getUserInitials, getNavLinkClassName } from '../utils/helpers';

// Navigation link type
interface NavLink {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

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

/**
 * Header Component
 * Responsive navigation header with role-based navigation links
 * Adapts layout for authenticated vs non-authenticated users
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const { title, mobileAction, customNavLinks } = useHeaderAction();

  /**
   * Get navigation links based on user role and current route
   */
  const getRoleSpecificNavLinks = useMemo(() => {
    if (!isAuthenticated || !user?.roles || user.roles.length === 0) {
      return PUBLIC_NAV_LINKS;
    }

    const roles = user.roles;

    // System admin - no navigation links (dashboard only)
    if (roles.includes('admin')) {
      return [];
    }

    // Student navigation
    if (roles.includes('student')) {
      if (location.pathname.startsWith('/student/dashboard')) {
        // On student dashboard: show About, Contact + toggle (Resources OR Activities)
        const isOnActivities = location.pathname.includes('/activities');
        return [
          { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
          { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
          // Show the alternate view (Resources if on Activities, Activities if on Resources)
          isOnActivities
            ? { to: '/student/dashboard/resources', label: 'Resources', icon: <BookOpen className="h-4 w-4" /> }
            : { to: '/student/dashboard/activities', label: 'Activities', icon: <Activity className="h-4 w-4" /> }
        ];
      }
      return [{ to: '/student/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
    }

    // Teacher navigation - show About, Contact on dashboard
    if (roles.includes('teacher')) {
      if (location.pathname.startsWith('/teacher/dashboard')) {
        return [
          { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
          { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
        ];
      }
      return [{ to: '/teacher/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
    }

    // Guardian navigation
    if (roles.includes('guardian') || roles.includes('other')) {
      if (location.pathname.includes('/guardian/dashboard/resources')) {
        // On resources view: show Home button to go back to dashboard
        return [
          { to: '/guardian/dashboard', label: 'Home', icon: <Home className="h-4 w-4" /> },
          { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
          { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
        ];
      }
      if (location.pathname.startsWith('/guardian/dashboard')) {
        // On main dashboard: show About, Contact (no Home button)
        return [
          { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
          { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
        ];
      }
      return [{ to: '/guardian/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
    }

    // School admin navigation
    if (roles.includes('school_admin')) {
      if (location.pathname.includes('/school/dashboard/resources')) {
        // On resources view: show Home button to go back to dashboard
        return [
          { to: '/school/dashboard', label: 'Home', icon: <Home className="h-4 w-4" /> },
          { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
          { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
        ];
      }
      if (location.pathname.startsWith('/school/dashboard')) {
        // On main dashboard: show About, Contact (no Home button)
        return [
          { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
          { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
        ];
      }
      return [{ to: '/school/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> }];
    }

    // Default - no special navigation (use public page links)
    return PUBLIC_NAV_LINKS;
  }, [isAuthenticated, user, location.pathname]);

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
            <nav className="flex space-x-3 md:space-x-6">
              {location.pathname === '/' ? (
                // Home page navigation (About Us, Contact)
                <>
                  {PUBLIC_NAV_LINKS_HOME.map((link) => (
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
              ) : (
                // Other public pages (Home, About Us, Contact)
                <>
                  {PUBLIC_NAV_LINKS.map((link) => (
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

            {/* Standard Mobile menu button - Only show if authenticated AND no mobile action */}
            {/* Hide on guardian/school dashboard (only shows About/Contact which are already visible) */}
            {isAuthenticated && !mobileAction &&
             !(location.pathname === '/guardian/dashboard' ||
               location.pathname === '/school/dashboard' ||
               (location.pathname.startsWith('/guardian/dashboard') &&
                !location.pathname.includes('/resources')) ||
               (location.pathname.startsWith('/school/dashboard') &&
                !location.pathname.includes('/resources'))) && (
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
                : (location.pathname === '/' ? PUBLIC_NAV_LINKS_HOME : PUBLIC_NAV_LINKS)
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
