import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Database, 
  Bot, 
  TrendingUp, 
  Brain, 
  Shield,
  Cloud,
  Zap,
  Workflow,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'sap-business-data-cloud',
      icon: Cloud,
      title: 'SAP Business Data Cloud',
      shortDescription: 'Enterprise-grade cloud-native data platform for unified data management and real-time analytics.',
      fullDescription: 'Enterprise-grade cloud-native data platform that unifies data management, real-time analytics, and intelligent automation across your entire business ecosystem. Built for scale and performance with advanced security.',
      features: [
        'Real-time data streaming & processing',
        'Multi-cloud & hybrid deployment',
        'Scalable microservices architecture',
        'Advanced data governance & security',
        'API-first integration approach',
        'Event-driven data pipelines'
      ],
      benefits: [
        'Reduce data processing time by 80%',
        'Scale automatically with business growth',
        'Ensure 99.9% data availability',
        'Accelerate time-to-insight by 5x'
      ],
      useCases: [
        'Real-time customer analytics',
        'Supply chain optimization',
        'Financial risk management',
        'IoT data processing'
      ],
      technologies: ['SAP HANA Cloud', 'SAP Data Intelligence', 'SAP Event Mesh', 'SAP Integration Suite'],
      color: 'blue'
    },
    {
      id: 'ai-agents-automation',
      icon: Bot,
      title: 'AI Agents & Automation',
      shortDescription: 'Intelligent AI agents that understand context, learn from interactions, and execute complex processes.',
      fullDescription: 'Intelligent AI agents that understand context, learn from interactions, and autonomously execute complex business processes while continuously improving performance through machine learning.',
      features: [
        'Conversational AI with NLP',
        'Autonomous process execution',
        'Machine learning optimization',
        'Multi-language support',
        'Context-aware decision making',
        'Continuous learning capabilities'
      ],
      benefits: [
        'Automate 70% of routine tasks',
        'Reduce processing errors by 95%',
        '24/7 intelligent operations',
        'Improve customer satisfaction by 40%'
      ],
      useCases: [
        'Customer service automation',
        'Invoice processing & approval',
        'Inventory management',
        'Compliance monitoring'
      ],
      technologies: ['SAP Conversational AI', 'SAP Intelligent RPA', 'SAP AI Business Services', 'SAP Process Automation'],
      color: 'teal'
    },
    {
      id: 'sap-ai-core-foundation',
      icon: Brain,
      title: 'SAP AI Core & Foundation',
      shortDescription: 'Comprehensive enterprise AI platform for building, training, and deploying ML models at scale.',
      fullDescription: 'Comprehensive enterprise AI platform for building, training, deploying, and managing machine learning models at scale with built-in MLOps and governance capabilities.',
      features: [
        'ML model lifecycle management',
        'Vector databases & embeddings',
        'Generative AI integration',
        'AutoML capabilities',
        'Model versioning & rollback',
        'A/B testing framework'
      ],
      benefits: [
        'Deploy models 10x faster',
        'Reduce AI development costs by 60%',
        'Ensure model reliability & governance',
        'Scale AI across enterprise'
      ],
      useCases: [
        'Predictive maintenance',
        'Fraud detection systems',
        'Demand forecasting',
        'Personalization engines'
      ],
      technologies: ['SAP AI Core', 'SAP AI Launchpad', 'SAP HANA ML', 'SAP Analytics Cloud Smart Predict'],
      color: 'orange'
    },
    {
      id: 'sap-analytics-cloud',
      icon: BarChart3,
      title: 'SAP Analytics Cloud',
      shortDescription: 'Next-generation analytics platform with embedded AI for augmented analytics and planning.',
      fullDescription: 'Next-generation analytics platform with embedded AI that delivers augmented analytics, collaborative planning, and intelligent insights for data-driven decision making.',
      features: [
        'Augmented analytics with AI',
        'Smart insights & recommendations',
        'Collaborative planning workflows',
        'Natural language queries',
        'Mobile-first dashboards',
        'Embedded predictive analytics'
      ],
      benefits: [
        'Increase analyst productivity by 60%',
        'Democratize data access across teams',
        'Accelerate decision making by 3x',
        'Improve forecast accuracy by 25%'
      ],
      useCases: [
        'Executive dashboards',
        'Financial planning & analysis',
        'Sales performance tracking',
        'Operational reporting'
      ],
      technologies: ['SAP Analytics Cloud', 'SAP Smart Predict', 'SAP Smart Insights', 'SAP Digital Boardroom'],
      color: 'purple'
    },
    {
      id: 'sap-build-integration',
      icon: Workflow,
      title: 'SAP Build & Integration',
      shortDescription: 'Low-code/no-code platform for building intelligent applications and automating workflows.',
      fullDescription: 'Low-code/no-code platform that empowers citizen developers to build intelligent applications, automate workflows, and integrate cloud services without extensive coding.',
      features: [
        'Visual workflow designer',
        'Pre-built connectors & APIs',
        'Drag-and-drop interface',
        'Template marketplace',
        'Version control & deployment',
        'Enterprise security & governance'
      ],
      benefits: [
        'Reduce development time by 75%',
        'Enable citizen development',
        'Lower total cost of ownership',
        'Accelerate digital transformation'
      ],
      useCases: [
        'Employee onboarding apps',
        'Approval workflow automation',
        'Customer portal development',
        'Data integration pipelines'
      ],
      technologies: ['SAP Build Apps', 'SAP Build Process Automation', 'SAP Build Work Zone', 'SAP Integration Suite'],
      color: 'green'
    },
    {
      id: 'sap-datasphere',
      icon: Database,
      title: 'SAP Datasphere',
      shortDescription: 'Comprehensive data fabric solution for connecting data sources and enabling federated analytics.',
      fullDescription: 'Comprehensive data fabric solution that connects disparate data sources, creates semantic business models, and enables federated analytics across the enterprise.',
      features: [
        'Data fabric architecture',
        'Semantic modeling layer',
        'Data marketplace & catalog',
        'Federated query engine',
        'Data lineage tracking',
        'Self-service data preparation'
      ],
      benefits: [
        'Unify data across systems',
        'Reduce data silos by 90%',
        'Improve data quality & trust',
        'Enable self-service analytics'
      ],
      useCases: [
        'Master data management',
        'Cross-system reporting',
        'Data lake modernization',
        'Regulatory compliance'
      ],
      technologies: ['SAP Datasphere', 'SAP Data Warehouse Cloud', 'SAP Master Data Governance', 'SAP Information Steward'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
      teal: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600',
      orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600',
      purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600',
      green: 'bg-green-50 text-green-600 group-hover:bg-green-600',
      red: 'bg-red-50 text-red-600 group-hover:bg-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: 'border-blue-200 hover:border-blue-300',
      teal: 'border-teal-200 hover:border-teal-300',
      orange: 'border-orange-200 hover:border-orange-300',
      purple: 'border-purple-200 hover:border-purple-300',
      green: 'border-green-200 hover:border-green-300',
      red: 'border-red-200 hover:border-red-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      teal: 'text-teal-600',
      orange: 'text-orange-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      red: 'text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SAP Cloud & AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge SAP cloud and AI solutions that transform how you work with data. 
            Click on any service to explore detailed capabilities and benefits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Link key={index} to={`/services/${service.id}`} className="block">
              {/* Service Card */}
              <div
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group p-6 border-2 cursor-pointer ${getBorderColor(service.color)}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <service.icon className="h-7 w-7 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Expand Button */}
                <div className={`flex items-center justify-between ${getAccentColor(service.color)}`}>
                  <span className="text-sm font-medium">Learn More</span>
                  <ExternalLink className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Complete SAP Business Technology Platform
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud Foundation</h4>
              <p className="text-sm text-gray-600">Multi-cloud infrastructure with enterprise security and compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
              <p className="text-sm text-gray-600">Embedded AI capabilities with pre-trained models and custom ML</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integration & Automation</h4>
              <p className="text-sm text-gray-600">Seamless connectivity with intelligent process automation</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Embrace AI-Powered Analytics?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Discover how SAP's cloud and AI technologies can revolutionize your data strategy and automate your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Schedule AI Consultation
                <Zap className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Learn More About Us
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