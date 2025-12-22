import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen } from 'lucide-react';
import logoImage from '../images/steambuds_logo.svg';
import { Button } from './ui';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  // Public navigation links
  const navLinksHome: Array<{ to: string; label: string; icon?: React.ReactNode }> = [
    { to: '/resources', label: 'Resources' },
    { to: '/rnd', label: 'R&D' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const navLinks: Array<{ to: string; label: string; icon?: React.ReactNode }> = [
    { to: '/', label: 'Home' },
    { to: '/resources', label: 'Resources' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  // Role-specific navigation links
  const getRoleSpecificNavLinks = useMemo(() => {
    if (!isAuthenticated || !user?.roles || user.roles.length === 0) {
      return navLinks;
    }

    const roles = user.roles;

    // System admin - no navigation links (dashboard only)
    if (roles.includes('admin')) {
      return [];
    }

    // Student navigation
    if (roles.includes('student')) {
      return [
        { to: '/student/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> },
        { to: '/resources', label: 'Resources', icon: <BookOpen className="h-4 w-4" /> },
      ];
    }

    // Teacher navigation (instructor or facilitator)
    if (roles.includes('instructor') || roles.includes('facilitator')) {
      return [
        { to: '/teacher/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> },
        { to: '/resources', label: 'Resources', icon: <BookOpen className="h-4 w-4" /> },
      ];
    }

    // School admin navigation
    if (roles.includes('school_admin')) {
      return [
        { to: '/school/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> },
        { to: '/resources', label: 'Resources', icon: <BookOpen className="h-4 w-4" /> },
      ];
    }

    // Guardian navigation (default for users with no specific role)
    return [
      { to: '/guardian/dashboard', label: 'My Dashboard', icon: <Home className="h-4 w-4" /> },
      { to: '/resources', label: 'Resources', icon: <BookOpen className="h-4 w-4" /> },
    ];
  }, [isAuthenticated, user]);

  const isActive = (path: string) => location.pathname === path;

  // Get user initials (1-2 letters)
  const getUserInitials = (name?: string): string => {
    if (!name) return 'U';

    const words = name.trim().split(/\s+/);
    if (words.length >= 2) {
      // First letter of first two words
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    // First two letters of single word, or just first letter
    return words[0].substring(0, 2).toUpperCase();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {isAuthenticated ? (
              <img
                src={logoImage}
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
            ) : (
              <>
                <img
                  src={logoImage}
                  alt="Logo"
                  className="w-20 h-12"
                />
                <div>
                  <h1 className="text-xl leading-6 font-bold font-display">
                    <span className="text-primary">STEAM</span> <span className="text-accent">&nbsp;Buds</span>
                  </h1>
                  <p className="text-secondary text-xxs font-bold">INSPIRE.IGNITE.INCEPT.CREATE.MASTER</p>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          {isAuthenticated ? (
            // Role-specific navigation for authenticated users
            <nav className="hidden md:flex space-x-6">
              {getRoleSpecificNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors duration-200 flex items-center gap-2 ${
                    isActive(link.to)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.icon && link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : location.pathname === '/' ? (
            // Public navigation for home page
            <nav className="hidden md:flex space-x-6">
              {navLinksHome.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.to)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : (
            // Public navigation for other pages
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.to)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* CTA Button */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex gap-3 items-center">
                <Link
                  to="/profile"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                  title={user?.username || 'Profile'}
                >
                  {getUserInitials(user?.username)}
                </Link>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary">Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <div className="flex flex-col space-y-3">
              {(isAuthenticated ? getRoleSpecificNavLinks : (location.pathname === '/' ? navLinksHome : navLinks)).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors duration-200 flex items-center gap-2 ${
                    isActive(link.to)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon && link.icon}
                  {link.label}
                </Link>
              ))}
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
