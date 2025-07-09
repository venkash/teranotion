import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUp,
  Brain, 
  TrendingUp, 
  Zap, 
  CheckCircle,
  Bot,
  Cpu,
  Network,
  Mail,
  Phone
} from 'lucide-react';

const AIFoundation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const keyCapabilities = [
    'Enterprise AI model management with MLOps best practices',
    'Intelligent automation agents with contextual decision-making',
    'Machine learning operations (MLOps) for scalable AI deployment',
    'Conversational AI and natural language processing capabilities',
    'Pre-trained AI models for common business scenarios',
    'Continuous learning and model optimization frameworks'
  ];

  const sapTools = [
    {
      name: 'SAP AI Core',
      description: 'Enterprise AI platform for building, training, and deploying ML models at scale',
      icon: Brain,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Joule Framework',
      description: 'SAP\'s AI copilot framework for building intelligent automation agents',
      icon: Bot,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'SAP AI Business Services',
      description: 'Pre-trained AI models and services for common enterprise use cases',
      icon: Cpu,
      color: 'from-blue-400 to-blue-500'
    }
  ];

  const achievementSteps = [
    {
      step: '1',
      title: 'AI Readiness Assessment',
      description: 'Evaluate current AI maturity and identify high-impact use cases for implementation'
    },
    {
      step: '2',
      title: 'AI Platform Setup',
      description: 'Deploy SAP AI Core and establish MLOps governance and security frameworks'
    },
    {
      step: '3',
      title: 'Model Development & Training',
      description: 'Build and train custom AI models or configure pre-trained business services'
    },
    {
      step: '4',
      title: 'Deployment & Optimization',
      description: 'Deploy AI agents and establish continuous learning and optimization processes'
    }
  ];

  const businessOutcomes = [
    'Deploy AI models 10x faster with enterprise-grade MLOps',
    'Reduce AI development costs by 60% with pre-trained models',
    'Ensure model reliability and governance across the enterprise',
    'Scale AI capabilities across multiple business functions',
    'Automate complex decision-making with intelligent agents',
    'Achieve continuous improvement through machine learning'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navigation Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Back to What We Do Button */}
        <Link
          to="/#what-we-do"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
          title="Back to What We Do"
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
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/#what-we-do" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to What We Do
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    AI Foundation & Enterprise Readiness
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build a robust AI foundation with SAP AI Core and Joule Framework. 
                We help organizations become truly AI-ready by establishing enterprise-grade 
                machine learning operations and intelligent automation capabilities.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">10x</div>
                  <div className="text-sm text-gray-600">Faster AI Deployment</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Foundation"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Bot className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">AI Agents</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Network className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">MLOps Platform</div>
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
                {keyCapabilities.map((capability, index) => (
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
                {businessOutcomes.map((outcome, index) => (
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
                {sapTools.map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-blue-500">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center flex-shrink-0`}>
                        <tool.icon className="h-6 w-6 text-white" />
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

            {/* How We Achieve This */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Brain className="h-6 w-6 mr-3 text-blue-600" />
                How We Achieve This
              </h2>
              <div className="space-y-6">
                {achievementSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Build Your AI Foundation?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how SAP AI Core and intelligent agents can transform your enterprise operations.
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

export default AIFoundation;