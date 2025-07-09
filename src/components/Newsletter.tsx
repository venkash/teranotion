import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-xl text-white opacity-90 mb-8">
            Sign up to learn how AI and BDC are transforming enterprise data strategies. 
            Get exclusive insights, case studies, and implementation guides.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  Subscribe
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
              <p className="text-white opacity-75 text-sm mt-4">
                No spam. Unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-3 text-white">
              <CheckCircle className="h-6 w-6 text-green-300" />
              <span className="text-lg font-medium">Thank you for subscribing!</span>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-white border-opacity-20">
            <a
              href="#contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;