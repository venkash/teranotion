import React from 'react';
import { Database, Bot, BarChart3, Workflow, CheckCircle, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Database,
      title: 'SAP Business Data Cloud (BDC)',
      description: 'Unified, scalable architecture to manage data across SAP and non-SAP sources',
      features: [
        'Real-time data federation',
        'Snowflake, Databricks, BigQuery integration',
        'Governed semantic layer',
        'No heavy ETL required'
      ],
      color: 'blue'
    },
    {
      icon: Bot,
      title: 'AI Agents (Joule Framework)',
      description: 'Custom, enterprise-grade AI agents built on SAP\'s Joule AI framework to automate tasks, insights, and business decisions',
      features: [
        'Automated financial close',
        'Procurement assistance',
        'Predictive inventory management',
        'HR policy automation'
      ],
      color: 'indigo'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics Modernization',
      description: 'From reporting to predictive insights with SAP Datasphere, SAC, and S/4 integration',
      features: [
        'Datasphere implementation',
        'SAP Analytics Cloud',
        'S/4HANA integration',
        'Predictive analytics'
      ],
      color: 'teal'
    },
    {
      icon: Workflow,
      title: 'End-to-End Digital Transformation',
      description: 'Architecture, integration, governance, and cloud optimization tailored for your business goals',
      features: [
        'Cloud architecture design',
        'Integration strategy',
        'Data governance',
        'Change management'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      indigo: 'from-indigo-500 to-indigo-600',
      teal: 'from-teal-500 to-teal-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  const getIconBg = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      teal: 'bg-teal-100 text-teal-600',
      orange: 'bg-orange-100 text-orange-600'
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
            using the latest in SAP technology, delivering transformative solutions that drive 
            intelligent business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(service.color)} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className={`text-${service.color === 'blue' ? 'blue' : service.color === 'indigo' ? 'indigo' : service.color === 'teal' ? 'teal' : 'orange'}-600 font-medium flex items-center group-hover:translate-x-1 transition-transform`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
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