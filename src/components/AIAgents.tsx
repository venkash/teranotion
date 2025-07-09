import React from 'react';
import { Bot, Zap, Brain, Workflow, CheckCircle, ArrowRight, DollarSign, Package, Users, FileCheck } from 'lucide-react';

const AIAgents = () => {
  const useCases = [
    {
      icon: DollarSign,
      title: 'Automated Financial Close & Reconciliation',
      description: 'SAP S/4 + Joule integration for automated month-end processes',
      benefits: ['Reduce close time by 60%', 'Eliminate manual errors', 'Real-time variance analysis']
    },
    {
      icon: Package,
      title: 'Procurement Assistant',
      description: 'AI agent that drafts, reviews, and tracks purchase orders',
      benefits: ['Automated PO creation', 'Vendor compliance checks', 'Spend optimization']
    },
    {
      icon: Workflow,
      title: 'Predictive Inventory Management',
      description: 'Real-time demand forecasting and automated replenishment',
      benefits: ['Reduce stockouts by 40%', 'Optimize inventory levels', 'Demand pattern recognition']
    },
    {
      icon: Users,
      title: 'HR Policy & Onboarding Agent',
      description: 'Handles policy queries, onboarding flows, and approvals',
      benefits: ['24/7 employee support', 'Consistent policy application', 'Streamlined onboarding']
    }
  ];

  const expertise = [
    'Custom AI agent design using SAP Joule\'s orchestration layer',
    'Fine-tuning for industry-specific workflows and business rules',
    'Governance, data integration, and security layer design',
    'Integration with existing SAP S/4HANA and cloud systems',
    'Performance monitoring and continuous improvement frameworks'
  ];

  return (
    <section id="ai-agents" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            <Bot className="h-4 w-4 mr-2" />
            Powered by SAP Joule
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Agents (SAP Joule)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SAP's AI Agents, powered by the Joule AI copilot, are designed to handle repeatable, 
            context-rich tasks across business functions. Transform your operations with intelligent 
            automation that learns and adapts.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Real-World Use Cases We Deliver
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors duration-200">
                      <useCase.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{useCase.title}</h4>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teranotion's Expertise */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Teranotion's AI Agent Expertise
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team combines deep SAP knowledge with cutting-edge AI implementation experience 
                to deliver intelligent agents that truly understand your business context.
              </p>
              
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Agents in Action"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                {/* AI Capabilities */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <Brain className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Context-Aware</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Real-Time</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <Workflow className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Autonomous</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <FileCheck className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Deploy Intelligent AI Agents?
              </h4>
              <p className="text-gray-600">
                Let's discuss how Joule-powered AI agents can transform your business processes
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              Explore AI Agent Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;