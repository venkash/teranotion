import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Database, 
  TrendingUp, 
  Zap, 
  CheckCircle,
  BarChart3,
  Cloud,
  Brain,
  Workflow,
  Mail,
  Phone
} from 'lucide-react';

const DataAnalyticsModernization = () => {
  const keyCapabilities = [
    'Real-time data streaming & processing with sub-second latency',
    'Unified data fabric architecture across SAP and non-SAP systems',
    'Self-service analytics for business users without IT dependency',
    'AI-powered insights and automated anomaly detection',
    'Zero-ETL approach for seamless data federation',
    'Advanced data governance with role-based access controls'
  ];

  const sapTools = [
    {
      name: 'SAP Business Data Cloud',
      description: 'Unified data fabric platform for real-time analytics and data management',
      icon: Database,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'SAP Analytics Cloud',
      description: 'Cloud-native analytics platform with embedded AI and collaborative planning',
      icon: BarChart3,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'SAP HANA Cloud',
      description: 'In-memory database platform for real-time processing and analytics',
      icon: Cloud,
      color: 'from-blue-400 to-blue-500'
    }
  ];

  const achievementSteps = [
    {
      step: '1',
      title: 'Data Assessment & Strategy',
      description: 'Comprehensive analysis of your current data landscape and definition of target architecture',
      timeline: '2-4 weeks'
    },
    {
      step: '2',
      title: 'Platform Setup & Configuration',
      description: 'Deploy and configure SAP Business Data Cloud with proper security and governance',
      timeline: '4-6 weeks'
    },
    {
      step: '3',
      title: 'Data Integration & Migration',
      description: 'Connect data sources and establish real-time data pipelines with semantic modeling',
      timeline: '6-8 weeks'
    },
    {
      step: '4',
      title: 'Analytics Implementation',
      description: 'Build self-service analytics capabilities and train business users',
      timeline: '4-6 weeks'
    }
  ];

  const businessOutcomes = [
    'Reduce data processing time by 80% with real-time federation',
    'Accelerate time-to-insight by 5x with unified semantic layer',
    'Eliminate data silos across enterprise systems',
    'Enable self-service analytics for 90% of business users',
    'Improve data quality and governance compliance',
    'Reduce total cost of ownership by 40% with cloud-native approach'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
                  <Database className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    Data & Analytics Modernization
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your data landscape with cloud-native analytics and real-time insights. 
                We help organizations build a unified data fabric that breaks down silos and enables 
                intelligent decision-making across the enterprise.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Faster Data Processing</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5x</div>
                  <div className="text-sm text-gray-600">Faster Time-to-Insight</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Data Analytics Modernization"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">Real-time Analytics</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">AI-Powered Insights</div>
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
                <Workflow className="h-6 w-6 mr-3 text-blue-600" />
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
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{step.title}</h3>
                          <span className="text-sm text-blue-600 font-medium">{step.timeline}</span>
                        </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Modernize Your Data & Analytics?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can transform your data landscape and unlock the power of real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@teranotion.com"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
              <a
                href="tel:+13466346646"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium inline-flex items-center justify-center"
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

export default DataAnalyticsModernization;