import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../images/steambuds_logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const is_logged_in = false; // Replace with actual authentication logic

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
            {is_logged_in ? (
              <div className="flex gap-3">
                <Link to="/resources" className="btn-primary">Resources</Link>
                {/* Profile page to be implemented */}
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="btn-outline">Login</Link>
                <Link to="/signup" className="btn-primary">Sign up</Link>
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
                {is_logged_in ? (
                  <>
                    <Link to="/resources" className="btn-primary w-fit" onClick={() => setIsMenuOpen(false)}>
                      Resources
                    </Link>
                    {/* Profile page to be implemented */}
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn-outline w-fit" onClick={() => setIsMenuOpen(false)}>
                      Login
                    </Link>
                    <Link to="/signup" className="btn-primary w-fit" onClick={() => setIsMenuOpen(false)}>
                      Sign up
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
