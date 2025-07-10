import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'SAP Business Data Cloud', href: '/services/sap-business-data-cloud' },
      { name: 'AI Agents & Automation', href: '/services/ai-agents-automation' },
      { name: 'SAP Analytics Cloud', href: '/services/sap-analytics-cloud' },
      { name: 'SAP AI Core & Foundation', href: '/services/sap-ai-core-foundation' },
      { name: 'SAP Datasphere', href: '/services/sap-datasphere' },
      { name: 'SAP Build & Integration', href: '/services/sap-build-integration' }
    ],
    company: [
      { name: 'About Us', href: '/#about' },
      { name: 'Our Approach', href: '/#what-we-do' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/#contact' }
    ],
    resources: [
      { name: 'Blog', href: '/resources' },
      { name: 'Newsletters', href: '/resources' },
      { name: 'Case Studies', href: '/resources' },
      { name: 'Documentation', href: '/resources' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Logo className="h-10 w-10 text-white" />
                <span className="text-2xl font-bold text-white">Teranotion</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted SAP cloud and AI transformation partner. 18+ years of expertise 
                delivering enterprise-grade solutions that drive measurable business results.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-400" />
                  <a href="mailto:contact@teranotion.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@teranotion.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <a href="tel:+13466346646" className="text-gray-300 hover:text-white transition-colors">
                    (346) 634-6646
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-teal-400 mt-1" />
                  <span className="text-gray-300">
                    19247 Goodnight Peak Trl<br />
                    Cypress, TX 77433
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Resources</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-slate-700 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest SAP insights and transformation strategies.
                </p>
                <a
                  href="#newsletter"
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm font-medium inline-block"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © {currentYear} Teranotion. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
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