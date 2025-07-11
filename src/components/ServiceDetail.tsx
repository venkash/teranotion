import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUp, CheckCircle, Zap, TrendingUp, Mail, Phone } from 'lucide-react';
import { Database, Bot, BarChart3, Cloud, Workflow } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Service data
  const services = {
    'sap-business-data-cloud': {
      icon: Database,
      title: 'SAP Business Data Cloud',
      subtitle: 'Unified Data Fabric & Real-Time Analytics',
      description: 'Transform your data landscape with cloud-native analytics and real-time insights using SAP Business Data Cloud. Create a unified data fabric that connects all your business data sources.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      quickStats: [
        { value: 'Real-Time', label: 'Data Processing' },
        { value: '80%', label: 'Faster Insights' }
      ],
      keyCapabilities: [
        'Real-time data streaming and processing',
        'Unified data fabric architecture',
        'Advanced data modeling and governance',
        'Cloud-native scalability and performance',
        'Self-service data preparation',
        'Automated data quality management'
      ],
      businessOutcomes: [
        'Reduce data preparation time by 80%',
        'Enable real-time decision making',
        'Improve data quality and consistency',
        'Scale data operations seamlessly',
        'Accelerate time-to-insight',
        'Lower total cost of ownership'
      ],
      sapTools: [
        {
          name: 'SAP Datasphere',
          description: 'Comprehensive data management with data warehousing and virtualization',
          color: 'from-teal-500 to-teal-600'
        },
        {
          name: 'SAP HANA Cloud',
          description: 'In-memory database platform for real-time analytics',
          color: 'from-teal-600 to-teal-700'
        },
        {
          name: 'SAP Data Intelligence',
          description: 'Data orchestration and machine learning platform',
          color: 'from-teal-400 to-teal-500'
        }
      ],
      color: 'teal'
    },
    'ai-agents-automation': {
      icon: Bot,
      title: 'AI Agents & Automation',
      subtitle: 'Intelligent Process Automation with SAP Joule',
      description: 'Implement intelligent automation with SAP Joule framework for autonomous business processes. Deploy AI agents that learn, adapt, and make decisions independently.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      quickStats: [
        { value: '24/7', label: 'Autonomous Operation' },
        { value: '90%', label: 'Process Automation' }
      ],
      keyCapabilities: [
        'Intelligent process automation',
        'Conversational AI interfaces',
        'Autonomous decision making',
        'Continuous learning capabilities',
        'Natural language processing',
        'Workflow orchestration'
      ],
      businessOutcomes: [
        'Automate 70% of routine tasks',
        'Reduce processing time by 90%',
        'Improve accuracy and consistency',
        'Enable 24/7 operations',
        'Enhance customer experience',
        'Free up human resources for strategic work'
      ],
      sapTools: [
        {
          name: 'SAP Joule',
          description: 'AI copilot framework for intelligent automation',
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'SAP Process Automation',
          description: 'Low-code platform for workflow automation',
          color: 'from-blue-600 to-blue-700'
        },
        {
          name: 'SAP Conversational AI',
          description: 'Natural language processing and chatbot platform',
          color: 'from-blue-400 to-blue-500'
        }
      ],
      color: 'blue'
    },
    'sap-analytics-cloud': {
      icon: BarChart3,
      title: 'SAP Analytics Cloud',
      subtitle: 'Self-Service Analytics & Predictive Insights',
      description: 'Democratize analytics with SAP Analytics Cloud. Enable self-service business intelligence with embedded AI for predictive insights and collaborative planning.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      quickStats: [
        { value: 'Self-Service', label: 'Analytics Platform' },
        { value: '60%', label: 'Faster Decisions' }
      ],
      keyCapabilities: [
        'Self-service business intelligence',
        'Predictive analytics and forecasting',
        'Collaborative planning workflows',
        'Mobile-first dashboard design',
        'Natural language queries',
        'Embedded machine learning'
      ],
      businessOutcomes: [
        'Accelerate decision-making by 60%',
        'Increase forecast accuracy by 40%',
        'Reduce reporting time by 75%',
        'Enable citizen data scientists',
        'Improve planning collaboration',
        'Drive data-driven culture'
      ],
      sapTools: [
        {
          name: 'SAP Analytics Cloud',
          description: 'Complete analytics platform with BI, planning, and predictive capabilities',
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'SAP Augmented Analytics',
          description: 'AI-powered insights and automated analytics',
          color: 'from-purple-600 to-purple-700'
        },
        {
          name: 'SAP Digital Boardroom',
          description: 'Executive dashboards and strategic planning tools',
          color: 'from-purple-400 to-purple-500'
        }
      ],
      color: 'purple'
    },
    'sap-ai-core-foundation': {
      icon: Cloud,
      title: 'SAP AI Core & Foundation',
      subtitle: 'Enterprise AI Platform & MLOps',
      description: 'Build a robust AI foundation with SAP AI Core. Implement enterprise-grade machine learning operations for scalable AI deployment and management.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      quickStats: [
        { value: 'MLOps', label: 'Enterprise Platform' },
        { value: '10x', label: 'Faster Deployment' }
      ],
      keyCapabilities: [
        'MLOps platform for AI lifecycle management',
        'Pre-trained business AI models',
        'Custom model development and training',
        'Enterprise-grade AI governance',
        'Scalable model deployment',
        'Continuous model monitoring'
      ],
      businessOutcomes: [
        'Deploy AI models 10x faster',
        'Reduce AI development costs by 60%',
        'Ensure model reliability and governance',
        'Scale AI across the enterprise',
        'Accelerate innovation cycles',
        'Maintain competitive advantage'
      ],
      sapTools: [
        {
          name: 'SAP AI Core',
          description: 'Enterprise AI platform for building and deploying ML models',
          color: 'from-indigo-500 to-indigo-600'
        },
        {
          name: 'SAP AI Foundation',
          description: 'Pre-built AI services and business-ready models',
          color: 'from-indigo-600 to-indigo-700'
        },
        {
          name: 'SAP AI Launchpad',
          description: 'Central hub for AI operations and model management',
          color: 'from-indigo-400 to-indigo-500'
        }
      ],
      color: 'indigo'
    },
    'sap-datasphere': {
      icon: Database,
      title: 'SAP Datasphere',
      subtitle: 'Data Fabric & Enterprise Data Management',
      description: 'Modernize your data architecture with SAP Datasphere. Implement comprehensive data management with data warehousing, data lakes, and virtualization.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      quickStats: [
        { value: 'Unified', label: 'Data Fabric' },
        { value: '90%', label: 'Reduced Silos' }
      ],
      keyCapabilities: [
        'Data warehouse modernization',
        'Data lake implementation',
        'Data virtualization layer',
        'Multi-cloud data integration',
        'Data governance and lineage',
        'Semantic data modeling'
      ],
      businessOutcomes: [
        'Unify data across all sources',
        'Reduce data silos by 90%',
        'Accelerate analytics projects',
        'Improve data governance',
        'Enable self-service data access',
        'Lower infrastructure costs'
      ],
      sapTools: [
        {
          name: 'SAP Datasphere',
          description: 'Comprehensive data fabric and management platform',
          color: 'from-green-500 to-green-600'
        },
        {
          name: 'SAP Data Warehouse Cloud',
          description: 'Cloud-native data warehousing solution',
          color: 'from-green-600 to-green-700'
        },
        {
          name: 'SAP Master Data Governance',
          description: 'Enterprise master data management',
          color: 'from-green-400 to-green-500'
        }
      ],
      color: 'green'
    },
    'sap-build-integration': {
      icon: Workflow,
      title: 'SAP Build & Integration',
      subtitle: 'Low-Code Platform & System Integration',
      description: 'Accelerate development with SAP Build platform. Enable rapid application development and seamless system integration with low-code tools.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      quickStats: [
        { value: 'Low-Code', label: 'Development Platform' },
        { value: '5x', label: 'Faster Development' }
      ],
      keyCapabilities: [
        'Visual application development',
        'API management and integration',
        'Workflow automation',
        'Citizen developer tools',
        'Pre-built connectors',
        'Event-driven architecture'
      ],
      businessOutcomes: [
        'Accelerate development by 5x',
        'Reduce integration complexity',
        'Enable citizen developers',
        'Improve system connectivity',
        'Lower development costs',
        'Increase business agility'
      ],
      sapTools: [
        {
          name: 'SAP Build Apps',
          description: 'Low-code application development platform',
          color: 'from-orange-500 to-orange-600'
        },
        {
          name: 'SAP Integration Suite',
          description: 'Comprehensive integration platform',
          color: 'from-orange-600 to-orange-700'
        },
        {
          name: 'SAP Build Process Automation',
          description: 'Workflow and process automation tools',
          color: 'from-orange-400 to-orange-500'
        }
      ],
      color: 'orange'
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/#services" className="text-blue-600 hover:text-blue-700">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const getColorClasses = (color: string) => {
    const colors = {
      teal: 'from-teal-600 to-teal-700',
      blue: 'from-blue-600 to-blue-700',
      purple: 'from-purple-600 to-purple-700',
      indigo: 'from-indigo-600 to-indigo-700',
      green: 'from-green-600 to-green-700',
      orange: 'from-orange-600 to-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navigation Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Back to Services Button */}
        <Link
          to="/#services"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
          title="Back to Services"
        >
          <ArrowLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
        </Link>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
          title="Back to Top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/#services" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${getColorClasses(service.color)} flex items-center justify-center`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-600 mt-2">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{service.quickStats[0].value}</div>
                  <div className="text-sm text-gray-600">{service.quickStats[0].label}</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{service.quickStats[1].value}</div>
                  <div className="text-sm text-gray-600">{service.quickStats[1].label}</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Fast Implementation</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Proven ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Key Capabilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-blue-600" />
                Key Capabilities
              </h2>
              <div className="space-y-4">
                {service.keyCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 bg-blue-500"></div>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                Business Outcomes
              </h2>
              <div className="space-y-4">
                {service.businessOutcomes.map((outcome, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* SAP Tools */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="h-6 w-6 mr-3 text-blue-600" />
                Core SAP Tools
              </h2>
              <div className="space-y-6">
                {service.sapTools.map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-blue-500">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{tool.name}</h3>
                        <p className="text-gray-600 text-sm">{tool.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Approach */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Implementation Approach
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Assessment & Strategy</h4>
                      <p className="text-gray-600 text-sm">Evaluate current state and define transformation roadmap</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Design & Architecture</h4>
                      <p className="text-gray-600 text-sm">Create detailed solution architecture and implementation plan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Implementation & Testing</h4>
                      <p className="text-gray-600 text-sm">Deploy solution with comprehensive testing and validation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Go-Live & Support</h4>
                      <p className="text-gray-600 text-sm">Launch solution with ongoing support and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started with {service.title}?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how this solution can transform your business operations and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@teranotion.com"
                className="bg-white text-gray-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
              <a
                href="tel:+13466346646"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-600 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;