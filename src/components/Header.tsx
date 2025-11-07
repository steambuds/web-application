import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/rnd', label: 'R&D' },
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
                src="https://cdn.builder.io/api/v1/image/assets%2Feb86118a426a451d80c7f6e121c9e2c0%2F6bbf2e69ae9b4abdb143beb3b813ce43"
                alt="Logo"
                className="w-24 h-15"
              />
            <div>
              <h1 className="text-2xl leading-8 font-bold font-display">
                <span className="text-electric-blue-600" style={{ color: '#f86087' }}>STEAM</span> <span className="text-gray-700" style={{ color: '#ee936b' }}>&nbsp;Buds</span>
              </h1>
              <p style={{ color: '#886bbb', fontSize: '9px', fontWeight: 700, lineHeight: '16px' }}>INSPIRE.IGNITE.INCEPT.CREATE.MASTER</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.to)
                    ? 'text-electric-blue-600 border-b-2 border-electric-blue-600'
                    : 'text-gray-700 hover:text-electric-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
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
                      ? 'text-electric-blue-600'
                    : 'text-gray-700 hover:text-electric-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="btn-primary w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
