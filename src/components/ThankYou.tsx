import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, ArrowRight, Home } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Subscribing!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to the Teranotion community! You'll receive our latest insights on 
            SAP cloud solutions, AI automation, and digital transformation strategies.
          </p>

          {/* What to Expect */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              What to Expect
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Monthly newsletters with SAP industry insights</li>
              <li>• Exclusive case studies and implementation guides</li>
              <li>• Early access to our latest blog posts and resources</li>
              <li>• Invitations to webinars and SAP community events</li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="space-y-4">
            <p className="text-gray-600">
              While you're here, explore our comprehensive SAP solutions and resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources"
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/"
                className="border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:contact@teranotion.com" className="text-blue-600 hover:text-blue-700">
                contact@teranotion.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;