import React from 'react';
import { Database, Bot, BarChart3, Workflow, CheckCircle, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const conceptualServices = [
    {
      icon: BarChart3,
      title: 'Data & Analytics Modernization',
      description: 'Transform traditional reporting into intelligent, predictive insights using SAP\'s latest data fabric and analytics technologies',
      approach: 'Using SAP Business Data Cloud and SAP Analytics Cloud',
      color: 'blue'
    },
    {
      icon: Workflow,
      title: 'End-to-End Digital Transformation',
      description: 'Architecture, integration, governance, and cloud optimization tailored for your business goals with comprehensive change management',
      approach: 'Leveraging SAP Build Platform and Integration Suite',
      color: 'indigo'
    },
    {
      icon: Bot,
      title: 'AI Foundation & Readiness',
      description: 'Set up your enterprise to be AI-ready with intelligent agents, ML platforms, and automated decision-making capabilities',
      approach: 'Built on SAP AI Core and Joule Framework',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      indigo: 'from-indigo-500 to-indigo-600',
      teal: 'from-teal-500 to-teal-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="what-we-do" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Teranotion, we help enterprises modernize their data and analytics platforms 
            using the latest in SAP technology. Our approach focuses on three core transformation areas 
            that drive intelligent business outcomes.
          </p>
        </div>

        {/* Conceptual Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {conceptualServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(service.color)} p-6 text-white`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-full">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-1">Our Approach:</div>
                  <div className="text-sm text-gray-600">{service.approach}</div>
                </div>

                {/* Learn More */}
                <div className="text-center">
                  <a
                    href="#services"
                    className={`inline-flex items-center text-${service.color === 'blue' ? 'blue' : service.color === 'indigo' ? 'indigo' : 'teal'}-600 font-medium hover:translate-x-1 transition-transform`}
                  >
                    See Our Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Teranotion?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">18+ Years Enterprise Expertise</h4>
                    <p className="text-gray-600">Deep experience in SAP systems and enterprise architecture</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Deep Technical Know-How</h4>
                    <p className="text-gray-600">Expertise in Datasphere, SAC, S/4, and AI integrations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Strategic AI Guidance</h4>
                    <p className="text-gray-600">End-to-end guidance for AI and data-driven transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Trusted Advisor Model</h4>
                    <p className="text-gray-600">From POC to scaled execution with ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enterprise Team"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;