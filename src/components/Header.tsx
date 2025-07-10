import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'What We Do', href: '/#what-we-do', type: 'anchor' },
    { name: 'Services', href: '/#services', type: 'anchor' },
    { name: 'Resources', href: '/resources', type: 'route' },
    { name: 'About', href: '/#about', type: 'anchor' },
    { name: 'Contact', href: '/#contact', type: 'anchor' },
  ];

  const handleNavClick = (item: any) => {
        // If we're on home page, scroll to section
        const elementId = item.href.substring(2); // Remove /#
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (window.location.pathname !== '/') {
      // Navigate to home page
      window.location.href = '/';
    } else {
      // Scroll to top of home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={handleHomeClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Logo className="h-8 w-8 text-gray-700" />
            <span className="text-2xl font-bold text-gray-900">Teranotion</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.name === 'Home' ? (
                <button
                  key={item.name}
                  onClick={handleHomeClick}
                  className="text-gray-700 hover:text-gray-700 px-3 py-2 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ) : item.type === 'anchor' ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="text-gray-700 hover:text-gray-700 px-3 py-2 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-gray-700 px-3 py-2 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick({ href: '/#contact', type: 'anchor' });
              }}
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.name === 'Home' ? (
                  <button
                    key={item.name}
                    onClick={handleHomeClick}
                    className="text-gray-700 hover:text-gray-700 px-3 py-2 transition-colors duration-200 font-medium text-left"
                  >
                    {item.name}
                  </button>
                ) : item.type === 'anchor' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className="text-gray-700 hover:text-gray-700 px-3 py-2 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-gray-700 px-3 py-2 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick({ href: '/#contact', type: 'anchor' });
                }}
                className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-center mt-4"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;