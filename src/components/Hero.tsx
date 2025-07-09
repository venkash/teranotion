import React from 'react';
import { ArrowRight, TrendingUp, Database, Bot, Sparkles, Zap, Brain, BarChart3 } from 'lucide-react';

const Hero = () => {
  const offerings = [
    {
      icon: Database,
      title: 'SAP Business Data Cloud',
      description: 'Unified data fabric with real-time analytics',
      color: 'from-slate-500 to-slate-600',
      delay: '0s'
    },
    {
      icon: Bot,
      title: 'AI Agents (Joule)',
      description: 'Intelligent automation & decision making',
      color: 'from-blue-500 to-blue-600',
      delay: '0.2s'
    },
    {
      icon: BarChart3,
      title: 'Analytics Modernization',
      description: 'Self-service insights & predictive analytics',
      color: 'from-indigo-500 to-indigo-600',
      delay: '0.4s'
    }
  ];

  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Enterprise with
                <span className="text-slate-700 block mt-2">SAP Cloud & AI Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unlock the power of unified data, intelligent automation, and predictive analytics. 
                18+ years of SAP expertise delivering enterprise-grade cloud and AI transformations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="bg-slate-700 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all duration-200 font-medium flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#what-we-do"
                  className="border-2 border-slate-700 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium text-center"
                >
                  Explore Solutions
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-1">18+</div>
                  <div className="text-sm text-gray-600">Years SAP Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-1">99%</div>
                  <div className="text-sm text-gray-600">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Offerings */}
          <div className="relative">
            {/* Main Container */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Our Core Offerings
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise SAP Solutions</h3>
              </div>
              
              {/* Animated Tiles */}
              <div className="space-y-4">
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-6 hover:shadow-lg transition-all duration-500 cursor-pointer"
                    style={{ 
                      animationDelay: offering.delay,
                      animation: 'slideInRight 0.8s ease-out forwards'
                    }}
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${offering.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative flex items-center space-x-4">
                      {/* Icon with animation */}
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${offering.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <offering.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-slate-700 transition-colors">
                          {offering.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {offering.description}
                        </p>
                      </div>
                      
                      {/* Arrow indicator */}
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    {/* Animated border */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <a
                  href="#services"
                  className="inline-flex items-center text-slate-700 hover:text-slate-800 font-medium transition-colors duration-200"
                >
                  View All Solutions
                  <Zap className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-slate-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slide-in animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;