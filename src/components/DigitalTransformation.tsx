import React from 'react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Users,
      title: 'Expert SAP Consultants',
      description: 'Team of specialized SAP professionals',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Award,
      title: 'SAP Certified Excellence',
      description: 'Certified across SAP Business Technology Platform',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const expertise = [
    'SAP Business Data Cloud',
    'AI Agents & Automation',
    'SAP Analytics Cloud',
    'SAP AI Core & Foundation',
    'SAP Datasphere',
    'SAP Build Platform',
    'Cloud-Native Architecture',
    'Intelligent Process Automation'
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Trusted SAP Cloud & AI Partner
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With 18+ years of SAP expertise, we're at the forefront of cloud and AI innovation. 
              We help organizations harness intelligent automation and cloud-native analytics to 
              drive measurable business transformation across the entire SAP ecosystem.
            </p>

            {/* Achievements */}
            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Core Expertise Areas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-slate-700 rounded-2xl shadow-2xl p-8 backdrop-blur-sm border border-slate-600">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">18+</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">BTP</div>
                  <div className="text-sm text-gray-300">Platform Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">Cloud</div>
                  <div className="text-sm text-gray-300">Native Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">SAP Certified & AI Specialist</h3>
              <p className="opacity-90">
                Certified across the complete SAP Business Technology Platform ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;