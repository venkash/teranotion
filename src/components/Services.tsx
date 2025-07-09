import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Bot, 
  BarChart3, 
  Workflow,
  Cloud,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'sap-business-data-cloud',
      icon: Database,
      title: 'SAP Business Data Cloud',
      shortDescription: 'Unified, scalable architecture to manage data across SAP and non-SAP sources with real-time federation and zero-ETL approach.',
      keyCapabilities: [
        'Real-time data federation',
        'Multi-cloud deployment',
        'Semantic modeling layer',
        'Advanced data governance'
      ],
      color: 'teal',
      category: 'Data Foundation'
    },
    {
      id: 'ai-agents-automation',
      icon: Bot,
      title: 'AI Agents (Joule Framework)',
      shortDescription: 'Custom, enterprise-grade AI agents built on SAP\'s Joule AI framework for intelligent process automation.',
      keyCapabilities: [
        'Conversational AI with NLP',
        'Autonomous process execution',
        'Context-aware decision making',
        'Continuous learning'
      ],
      color: 'teal',
      category: 'AI & Automation'
    },
    {
      id: 'sap-analytics-cloud',
      icon: BarChart3,
      title: 'SAP Analytics Cloud',
      shortDescription: 'Next-generation analytics platform with embedded AI for augmented analytics, planning, and predictive insights.',
      keyCapabilities: [
        'Augmented analytics with AI',
        'Smart insights & recommendations',
        'Collaborative planning',
        'Natural language queries'
      ],
      color: 'gray',
      category: 'Analytics & Insights'
    },
    {
      id: 'sap-build-integration',
      icon: Workflow,
      title: 'SAP Build & Integration',
      shortDescription: 'Low-code/no-code platform for building intelligent applications and automating workflows across the enterprise.',
      keyCapabilities: [
        'Visual workflow designer',
        'Pre-built connectors & APIs',
        'Drag-and-drop interface',
        'Enterprise security & governance'
      ],
      color: 'indigo',
      category: 'Integration & Development'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600',
      gray: 'bg-gray-50 text-gray-600 group-hover:bg-gray-600',
      indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  const getBorderColor = (color: string) => {
    const colors = {
      teal: 'border-teal-200 hover:border-teal-300',
      gray: 'border-gray-200 hover:border-gray-300',
      indigo: 'border-indigo-200 hover:border-indigo-300'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      teal: 'text-teal-600',
      gray: 'text-gray-600',
      indigo: 'text-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      teal: 'bg-teal-100 text-teal-800',
      gray: 'bg-gray-100 text-gray-800',
      indigo: 'bg-indigo-100 text-indigo-800'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core SAP Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive SAP cloud and AI solutions that power your digital transformation. 
            Each solution is designed to integrate seamlessly and deliver measurable business value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Link key={index} to={`/services/${service.id}`} className="block">
              <div
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group p-6 border-2 cursor-pointer h-full ${getBorderColor(service.color)}`}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.color)}`}>
                    {service.category}
                  </span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>

                {/* Icon & Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 ${getColorClasses(service.color)}`}>
                    <service.icon className="h-7 w-7 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2 mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-3">Key Capabilities:</div>
                  {service.keyCapabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{capability}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <div className={`flex items-center justify-between ${getAccentColor(service.color)}`}>
                  <span className="text-sm font-medium">Explore Solution</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Technology Foundation */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built on SAP Business Technology Platform
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our solutions leverage the complete SAP BTP stack for enterprise-grade security, 
              scalability, and integration capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud-Native Foundation</h4>
              <p className="text-sm text-gray-600">Multi-cloud infrastructure with enterprise security and compliance</p>
            </div>
            <div>
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-First Approach</h4>
              <p className="text-sm text-gray-600">Embedded intelligence and automation in every solution we deliver</p>
            </div>
            <div>
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Integration</h4>
              <p className="text-sm text-gray-600">Seamless connectivity across SAP and non-SAP systems</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our SAP cloud and AI solutions can accelerate your digital transformation 
              and unlock new business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Schedule Consultation
                <Zap className="ml-2 h-5 w-5" />
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