import React from 'react';
import { Database, Zap, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const SAPBusinessDataCloud = () => {
  const benefits = [
    {
      icon: Database,
      title: 'Unified Data Access',
      description: 'Combines SAP and third-party data (Snowflake, Databricks, BigQuery) in real time'
    },
    {
      icon: Shield,
      title: 'Governed, Trusted Data',
      description: 'Business context preserved from source to consumption with built-in governance'
    },
    {
      icon: Globe,
      title: 'Federated Data Fabric',
      description: 'No heavy ETL; data stays where it is, reducing duplication and complexity'
    },
    {
      icon: Zap,
      title: 'One Semantic Layer',
      description: 'Better alignment between business teams and IT with unified data models'
    }
  ];

  const teranationServices = [
    'Architect data landscapes using BDC\'s federation model',
    'Extend existing Datasphere solutions to incorporate business data products',
    'Implement semantic modeling, access controls, and business glossary alignment',
    'Design and deploy federated analytics across enterprise systems'
  ];

  return (
    <section id="sap-bdc" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Database className="h-4 w-4 mr-2" />
            SAP Sapphire 2024 Innovation
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SAP Business Data Cloud (BDC)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SAP Business Data Cloud, announced at SAP Sapphire 2024, is the evolution of Datasphere 
            and SAP's data fabric vision. It represents the future of enterprise data management 
            with federated architecture and intelligent governance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Benefits</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SAP Business Data Cloud Architecture"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              {/* Architecture Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Real-Time</div>
                  <div className="text-sm text-gray-600">Data Federation</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">Zero-ETL</div>
                  <div className="text-sm text-gray-600">Architecture</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-teal-600 mb-1">Multi-Cloud</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-orange-600 mb-1">Semantic</div>
                  <div className="text-sm text-gray-600">Layer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teranotion's Role */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Teranotion's Role in Your BDC Journey
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our deep expertise in SAP data architecture and 18+ years of enterprise experience 
              ensures successful BDC implementation and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {teranationServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{service}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Implementation Approach</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Assessment & Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Architecture Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Pilot Implementation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Scale & Optimize</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Start Your BDC Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SAPBusinessDataCloud;