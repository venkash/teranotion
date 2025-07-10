import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Database, Bot, Sparkles, Zap, Brain, BarChart3, Workflow } from 'lucide-react';

const Hero = () => {
  const [currentOfferingIndex, setCurrentOfferingIndex] = useState(0);

  const offerings = [
    {
      id: 'sap-business-data-cloud',
      icon: Database,
      title: 'SAP Business Data Cloud',
      description: 'Unified data fabric with real-time analytics',
      color: 'from-teal-500 to-teal-600',
      delay: '0s'
    },
    {
      id: 'ai-agents-automation',
      icon: Bot,
      title: 'AI Agents (Joule)',
      description: 'Intelligent automation & decision making',
      color: 'from-teal-600 to-teal-700',
      delay: '0.2s'
    },
    {
      id: 'sap-analytics-cloud',
      icon: BarChart3,
      title: 'SAP Analytics Cloud',
      description: 'Self-service insights & predictive analytics',
      color: 'from-teal-400 to-teal-500',
      delay: '0.4s'
    },
    {
      id: 'sap-build-integration',
      icon: Workflow,
      title: 'SAP Build & Integration',
      description: 'Low-code platform for rapid development',
      color: 'from-teal-700 to-teal-800',
      delay: '0.6s'
    }
  ];

  // Auto-cycle through offerings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferingIndex((prevIndex) => 
        (prevIndex + 1) % offerings.length
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [offerings.length]);

  const currentOffering = offerings[currentOfferingIndex];

  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 via-white to-teal-50 pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Enterprise with
                <span className="text-gray-700 block mt-2">SAP Cloud & AI Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unlock the power of unified data, intelligent automation, and predictive analytics. 
                18+ years of SAP expertise delivering enterprise-grade cloud and AI transformations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#what-we-do"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('what-we-do');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 font-medium text-center"
                >
                  Explore Solutions
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-1">18+</div>
                  <div className="text-sm text-gray-600">Years SAP Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-1">99%</div>
                  <div className="text-sm text-gray-600">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cycling Offering Display */}
          <div className="relative">
            {/* Main Container */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Our Core Offerings
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise SAP Solutions</h3>
              </div>
              
              {/* Current Offering Display */}
              <div className="relative h-64 flex items-center justify-center">
                <Link 
                  to={`/services/${currentOffering.id}`}
                  className="group w-full"
                >
                  <div
                    key={currentOfferingIndex}
                    className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-50 to-teal-100 p-8 hover:shadow-lg transition-all duration-500 cursor-pointer animate-fadeInScale"
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentOffering.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative text-center">
                      {/* Icon with animation */}
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${currentOffering.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <currentOffering.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                          {currentOffering.title}
                        </h4>
                        <p className="text-gray-600 mb-6 text-lg">
                          {currentOffering.description}
                        </p>
                        
                        {/* Learn More Button */}
                        <div className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated border */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </Link>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {offerings.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentOfferingIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentOfferingIndex 
                        ? 'bg-teal-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
                >
                  View All Solutions
                  <Zap className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-teal-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-teal-400 rounded-full opacity-30 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;