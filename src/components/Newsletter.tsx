import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // First try the custom function for automated emails
      try {
        const functionResponse = await fetch('/.netlify/functions/newsletter-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'email': email,
            'timestamp': new Date().toISOString(),
            'source': 'website'
          })
        });

        if (functionResponse.ok) {
          setIsSubscribed(true);
          setEmail('');
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSubscribed(false);
          }, 5000);
          return;
        }
      } catch (functionError) {
        console.log('Function failed, falling back to Netlify Forms');
      }

      // Fallback to Netlify Forms if function fails
      const formResponse = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          'email': email,
          'timestamp': new Date().toISOString(),
          'source': 'website'
        }).toString()
      });

      if (formResponse.ok) {
        setIsSubscribed(true);
        setEmail('');
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      } else {
        throw new Error('Both subscription methods failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-800">
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
            <form 
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto"
              name="newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-50"
                  disabled={isLoading}
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600 mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
              
              {error && (
                <div className="flex items-center justify-center space-x-2 text-red-300 mt-4">
                  <AlertCircle className="h-5 w-5" />
                  <span>{error}</span>
                </div>
              )}
              
              <p className="text-white opacity-75 text-sm mt-4">
                No spam. Unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 text-white mb-4">
                <CheckCircle className="h-8 w-8 text-green-300" />
                <span className="text-xl font-medium">Thank you for subscribing!</span>
              </div>
              <p className="text-white opacity-90">
                You'll receive our latest insights on SAP cloud and AI solutions.
              </p>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-white border-opacity-20">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition-colors duration-200 font-medium"
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