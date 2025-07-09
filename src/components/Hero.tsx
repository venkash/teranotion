import React from 'react';
import { ArrowRight, TrendingUp, Database, Bot, Sparkles } from 'lucide-react';

const Hero = () => {
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
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                SAP Sapphire 2024 Innovation
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Enterprise Intelligence with
                <span className="text-slate-700 block mt-2">SAP Business Data Cloud</span>
                <span className="text-blue-600 block">& AI-Driven Automation</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your enterprise with SAP's latest innovations: unified data fabric through 
                Business Data Cloud and intelligent automation powered by Joule AI agents. 
                18+ years of SAP expertise at your service.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="bg-slate-700 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all duration-200 font-medium flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  Let's Talk
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

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SAP Business Data Cloud Analytics"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* Key Technologies */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg text-center group hover:shadow-md transition-all duration-200">
                  <Database className="h-8 w-8 text-slate-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium text-gray-700">SAP BDC</div>
                  <div className="text-xs text-gray-500">Unified Data Fabric</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center group hover:shadow-md transition-all duration-200">
                  <Bot className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium text-gray-700">Joule AI</div>
                  <div className="text-xs text-gray-500">Intelligent Agents</div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg text-center group hover:shadow-md transition-all duration-200">
                  <TrendingUp className="h-8 w-8 text-gray-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium text-gray-700">Analytics</div>
                  <div className="text-xs text-gray-500">Predictive Insights</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg text-center group hover:shadow-md transition-all duration-200">
                  <Sparkles className="h-8 w-8 text-indigo-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium text-gray-700">Integration</div>
                  <div className="text-xs text-gray-500">End-to-End</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-slate-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;