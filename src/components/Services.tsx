import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Bot, BarChart3, Workflow, Cloud, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'sap-business-data-cloud',
      icon: Database,
      title: 'SAP Business Data Cloud',
      description: 'Unified data fabric with real-time analytics and intelligent data processing capabilities.',
      features: [
        'Real-time data streaming & processing',
        'Unified data fabric architecture',
        'Advanced data modeling & governance',
        'Cloud-native scalability'
      ],
      color: 'from-teal-600 to-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      id: 'ai-agents-automation',
      icon: Bot,
      title: 'AI Agents & Automation',
      description: 'Intelligent automation with SAP Joule framework for autonomous business processes.',
      features: [
        'Intelligent process automation',
        'Conversational AI interfaces',
        'Autonomous decision making',
        'Continuous learning capabilities'
      ],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'sap-analytics-cloud',
      icon: BarChart3,
      title: 'SAP Analytics Cloud',
      description: 'Self-service analytics with embedded AI for predictive insights and collaborative planning.',
      features: [
        'Self-service business intelligence',
        'Predictive analytics & forecasting',
        'Collaborative planning workflows',
        'Mobile-first dashboard design'
      ],
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'sap-ai-core-foundation',
      icon: Cloud,
      title: 'SAP AI Core & Foundation',
      description: 'Enterprise AI platform for building, training, and deploying machine learning models at scale.',
      features: [
        'MLOps platform for AI lifecycle',
        'Pre-trained business AI models',
        'Custom model development',
        'Enterprise-grade AI governance'
      ],
      color: 'from-indigo-600 to-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      id: 'sap-datasphere',
      icon: Database,
      title: 'SAP Datasphere',
      description: 'Comprehensive data management with data warehousing, data lakes, and data virtualization.',
      features: [
        'Data warehouse modernization',
        'Data lake implementation',
        'Data virtualization layer',
        'Multi-cloud data integration'
      ],
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'sap-build-integration',
      icon: Workflow,
      title: 'SAP Build & Integration',
      description: 'Low-code platform for rapid application development and seamless system integration.',
      features: [
        'Visual application development',
        'API management & integration',
        'Workflow automation',
        'Citizen developer tools'
      ],
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Our SAP Solutions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive SAP Cloud & AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From data modernization to AI implementation, we provide end-to-end SAP solutions 
            that transform your business operations and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="block group"
            >
              <div className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your SAP Landscape?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our comprehensive SAP solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Started Today
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-700 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Learn About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;