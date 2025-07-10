import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Database, Brain, Workflow, CheckCircle, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const transformationAreas = [
    {
      id: '/transformation/data-analytics-modernization',
      icon: Database,
      title: 'Data & Analytics Modernization',
      description: 'Transform your data landscape with cloud-native analytics and real-time insights using SAP Business Data Cloud and SAP Analytics Cloud.',
      keyCapabilities: [
        'Real-time data streaming & processing',
        'Unified data fabric architecture',
        'Self-service analytics for business users',
        'AI-powered insights and recommendations'
      ],
      tools: ['SAP Business Data Cloud', 'SAP Analytics Cloud', 'SAP HANA Cloud'],
      color: 'teal',
      gradient: 'from-teal-600 to-teal-700'
    },
    {
      id: '/transformation/digital-transformation',
      icon: Workflow,
      title: 'End-to-End Digital Transformation',
      description: 'Accelerate your digital journey with low-code platforms and seamless integration across your entire business ecosystem.',
      keyCapabilities: [
        'Low-code/no-code application development',
        'Seamless system integration',
        'Process automation and optimization',
        'Citizen developer enablement'
      ],
      tools: ['SAP Build Platform', 'SAP Integration Suite', 'SAP Process Automation'],
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      id: '/transformation/ai-foundation',
      icon: Brain,
      title: 'AI Foundation & Enterprise Readiness',
      description: 'Build a robust AI foundation with SAP AI Core and Joule Framework to make your enterprise truly AI-ready for the future.',
      keyCapabilities: [
        'Enterprise AI model management',
        'Intelligent automation agents',
        'Machine learning operations (MLOps)',
        'Conversational AI and natural language processing'
      ],
      tools: ['SAP AI Core', 'Joule Framework', 'SAP AI Business Services'],
      color: 'teal',
      gradient: 'from-teal-700 to-teal-800'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: 'bg-teal-50 border-teal-200 hover:border-teal-300'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  const getIconColor = (color: string) => {
    const colors = {
      teal: 'text-teal-600'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  const getButtonColor = (gradient: string) => {
    return `bg-gradient-to-r ${gradient} text-white hover:shadow-lg`;
  };

  return (
    <section id="what-we-do" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Our Core Transformation Areas
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help enterprises transform through three interconnected areas, each powered by specific SAP solutions 
            that work together to create a comprehensive digital transformation strategy.
          </p>
        </div>

        {/* Transformation Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {transformationAreas.map((area, index) => (
            <Link
              key={area.id}
              to={area.id}
              className="block"
            >
              <div
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${getColorClasses(area.color)} p-8 h-full flex flex-col`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.gradient} flex items-center justify-center mb-6`}>
                <area.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Key Capabilities */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {area.keyCapabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${getIconColor(area.color)}`} />
                      <span className="text-gray-700 text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Core Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${getButtonColor(area.gradient)} cursor-pointer mt-auto`}>
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how these transformation areas can work together to drive your digital evolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Your Transformation
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-700 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;