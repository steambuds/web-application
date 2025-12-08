import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient from-primary-light via-secondary-light to-accent-light pattern-dots flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="space-y-6">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold font-display text-primary">
            404
          </h1>

          {/* Error Message */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-700 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center gap-2 min-w-[180px]"
            >
              <Home className="h-5 w-5" />
              Go to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center justify-center gap-2 min-w-[180px]"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="pt-8">
            <p className="text-sm text-gray-600 mb-3">You might be looking for:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/resources"
                className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Resources
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/rnd"
                className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                R&D
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/about"
                className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/contact"
                className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
