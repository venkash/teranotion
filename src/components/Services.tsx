import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Database, 
  Bot, 
  Brain, 
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
      shortDescription: 'Unified, scalable architecture to manage data across SAP and non-SAP sources with real-time federation.',
      features: [
        'Real-time data streaming & processing',
        'Multi-cloud & hybrid deployment',
        'Federated data fabric architecture',
        'Advanced data governance & security'
      ],
      color: 'blue'
    },
    {
      id: 'ai-agents-automation',
      icon: Bot,
      title: 'AI Agents (Joule Framework)',
      shortDescription: 'Custom, enterprise-grade AI agents built on SAP\'s Joule AI framework to automate tasks and decisions.',
      features: [
        'Conversational AI with NLP',
        'Autonomous process execution',
        'Context-aware decision making',
        'Continuous learning capabilities'
      ],
      color: 'indigo'
    },
    {
      id: 'sap-analytics-cloud',
      icon: BarChart3,
      title: 'Data & Analytics Modernization',
      shortDescription: 'From reporting to predictive insights with SAP Datasphere, SAC, and S/4 integration.',
      features: [
        'Augmented analytics with AI',
        'Smart insights & recommendations',
        'Collaborative planning workflows',
        'Embedded predictive analytics'
      ],
      color: 'teal'
    },
    {
      id: 'sap-ai-core-foundation',
      icon: Brain,
      title: 'SAP AI Core & Foundation',
      shortDescription: 'Comprehensive enterprise AI platform for building, training, and deploying ML models at scale.',
      features: [
        'ML model lifecycle management',
        'Vector databases & embeddings',
        'Generative AI integration',
        'AutoML capabilities'
      ],
      color: 'orange'
    },
    {
      id: 'sap-build-integration',
      icon: Workflow,
      title: 'SAP Build & Integration',
      shortDescription: 'Low-code/no-code platform for building intelligent applications and automating workflows.',
      features: [
        'Visual workflow designer',
        'Pre-built connectors & APIs',
        'Drag-and-drop interface',
        'Enterprise security & governance'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
      indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
      teal: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600',
      orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600',
      green: 'bg-green-50 text-green-600 group-hover:bg-green-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: 'border-blue-200 hover:border-blue-300',
      indigo: 'border-indigo-200 hover:border-indigo-300',
      teal: 'border-teal-200 hover:border-teal-300',
      orange: 'border-orange-200 hover:border-orange-300',
      green: 'border-green-200 hover:border-green-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      indigo: 'text-indigo-600',
      teal: 'text-teal-600',
      orange: 'text-orange-600',
      green: 'text-green-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
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
            Comprehensive SAP cloud and AI solutions that transform how you work with data. 
            Click on any service to explore detailed capabilities and implementation approaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link key={index} to={`/services/${service.id}`} className="block">
              <div
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group p-6 border-2 cursor-pointer h-full ${getBorderColor(service.color)}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <service.icon className="h-7 w-7 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500 ml-6">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Learn More */}
                <div className={`flex items-center justify-between ${getAccentColor(service.color)}`}>
                  <span className="text-sm font-medium">Learn More</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Complete SAP BTP Stack</h4>
              <p className="text-sm text-gray-600">End-to-end implementation across the entire SAP Business Technology Platform</p>
            </div>
            <div>
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-First Approach</h4>
              <p className="text-sm text-gray-600">Embedded intelligence and automation in every solution we deliver</p>
            </div>
            <div>
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Methodology</h4>
              <p className="text-sm text-gray-600">18+ years of enterprise experience with structured implementation approach</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
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
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Schedule Consultation
                <Zap className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium inline-flex items-center justify-center"
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