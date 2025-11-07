import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import contactData from '../config/contact';
import logoImage from '../images/steambuds_logo.svg';

const Footer: React.FC = () => {
  const socialMediaLinks = contactData.socialMedia;
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={logoImage}
                alt="Logo"
                className="w-16 h-10"
              />
              <h3 className="text-xl font-bold font-display">STEAM Buds</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
Inspiring the next generation through integrated STEAM education - combining Science, Technology, Engineering, Art, and Medicine in hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href={socialMediaLinks.facebook} className="text-gray-300 hover:text-hot-pink-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={socialMediaLinks.twitter} className="text-gray-300 hover:text-hot-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={socialMediaLinks.instagram} className="text-gray-300 hover:text-hot-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={socialMediaLinks.linkedin} className="text-gray-300 hover:text-hot-pink-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={socialMediaLinks.youtube} className="text-gray-300 hover:text-hot-pink-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-display mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hot-pink-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hot-pink-400 transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/rnd" className="text-gray-300 hover:text-hot-pink-400 transition-colors text-sm">
                  R&D
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-hot-pink-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-hot-pink-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-display mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Private Classes for Students</li>
              <li className="text-gray-300 text-sm">School Lab Setup</li>
              <li className="text-gray-300 text-sm">Teacher Training</li>
              <li className="text-gray-300 text-sm">Curriculum Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-display mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-hot-pink-400" />
                <span className="text-gray-300 text-sm">{contactData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-hot-pink-400" />
                <span className="text-gray-300 text-sm">{contactData.mobile}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-hot-pink-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  {contactData.address.floor}, {contactData.address.flat}, {contactData.address.area} <br />
                  {contactData.address.city}, {contactData.address.pincode}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 STEAM Buds. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-hot-pink-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-hot-pink-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
