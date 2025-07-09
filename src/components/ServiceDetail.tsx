import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  TrendingUp, 
  Workflow, 
  Zap,
  Cloud,
  Bot,
  Brain,
  BarChart3,
  Database,
  Mail,
  Phone
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const icons = {
      Cloud,
      Bot,
      Brain,
      BarChart3,
      Database,
      Workflow
    };
    return icons[iconName as keyof typeof icons] || Cloud;
  };

  const Icon = getIcon(service.icon);

  const getColorClasses = (color: string) => {
    const colors = {
      slate: 'bg-gradient-to-r from-slate-600 to-slate-700 text-white',
      blue: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white',
      gray: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white',
      indigo: 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white'
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      slate: 'text-slate-600',
      blue: 'text-blue-600',
      gray: 'text-gray-600',
      indigo: 'text-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  const getBgColor = (color: string) => {
    const colors = {
      slate: 'from-slate-50 to-slate-100',
      blue: 'from-blue-50 to-blue-100',
      gray: 'from-gray-50 to-gray-100',
      indigo: 'from-indigo-50 to-indigo-100'
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  const getTagColor = (color: string) => {
    const colors = {
      slate: 'bg-slate-100 text-slate-800',
      blue: 'bg-blue-100 text-blue-800',
      gray: 'bg-gray-100 text-gray-800',
      indigo: 'bg-indigo-100 text-indigo-800'
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  const getDotColor = (color: string) => {
    const colors = {
      slate: 'bg-slate-500',
      blue: 'bg-blue-500',
      gray: 'bg-gray-500',
      indigo: 'bg-indigo-500'
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${getBgColor(service.color)} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${getColorClasses(service.color)}`}>
                  <Icon className="h-10 w-10" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    {service.title}
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className={`text-2xl font-bold mb-1 ${getAccentColor(service.color)}`}>
                    {service.benefits.length}+
                  </div>
                  <div className="text-sm text-gray-600">Key Benefits</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className={`text-2xl font-bold mb-1 ${getAccentColor(service.color)}`}>
                    {service.technologies.length}
                  </div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                {/* Technologies Preview */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(service.color)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
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
            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className={`h-6 w-6 mr-3 ${getAccentColor(service.color)}`} />
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <div className={`w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 ${getDotColor(service.color)}`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className={`h-6 w-6 mr-3 ${getAccentColor(service.color)}`} />
                Core Technologies
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-l-blue-500">
                    <span className="font-medium text-gray-900">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Business Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className={`h-6 w-6 mr-3 ${getAccentColor(service.color)}`} />
                Business Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${service.color === 'blue' ? 'bg-blue-100' : service.color === 'teal' ? 'bg-teal-100' : service.color === 'orange' ? 'bg-orange-100' : service.color === 'purple' ? 'bg-purple-100' : service.color === 'green' ? 'bg-green-100' : 'bg-red-100'}`}>
                        <TrendingUp className={`h-4 w-4 ${getAccentColor(service.color)}`} />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Workflow className={`h-6 w-6 mr-3 ${getAccentColor(service.color)}`} />
                Common Use Cases
              </h2>
              <div className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${service.color === 'blue' ? 'bg-blue-100' : service.color === 'teal' ? 'bg-teal-100' : service.color === 'orange' ? 'bg-orange-100' : service.color === 'purple' ? 'bg-purple-100' : service.color === 'green' ? 'bg-green-100' : 'bg-red-100'}`}>
                        <Workflow className={`h-4 w-4 ${getAccentColor(service.color)}`} />
                      </div>
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Implement {service.title}?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how this solution can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@teranotion.com"
                className="bg-white text-slate-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
              <a
                href="tel:+13466346646"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-700 transition-colors duration-200 font-medium inline-flex items-center justify-center"
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