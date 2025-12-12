import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import logoImage from '../images/steambuds_logo.svg';
import { Button } from './ui';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  const navLinksHome = [
    { to: '/resources', label: 'Resources' },
    { to: '/rnd', label: 'R&D' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/resources', label: 'Resources' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
                src={logoImage}
                alt="Logo"
                className="w-24 h-15"
              />
            <div>
              <h1 className="text-2xl leading-8 font-bold font-display">
                <span className="text-primary">STEAM</span> <span className="text-accent">&nbsp;Buds</span>
              </h1>
              <p className="text-secondary text-xxs font-bold">INSPIRE.IGNITE.INCEPT.CREATE.MASTER</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {location.pathname === '/'? (
          <nav className="hidden md:flex space-x-8">
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
          ):(
            <nav className="hidden md:flex space-x-8">
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
                <Link to="/profile">
                  <Button variant="primary" iconLeft={<User className="h-4 w-4" />}>
                    {user?.username || 'Profile'}
                  </Button>
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
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.to)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 items-start">
                {isAuthenticated ? (
                  <>
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="primary" iconLeft={<User className="h-4 w-4" />}>
                        {user?.username || 'Profile'}
                      </Button>
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
