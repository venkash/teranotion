import React from 'react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'SAP Certified Partners',
      description: 'Official SAP Gold Partner with certified consultants'
    },
    {
      icon: Users,
      title: '50+ Expert Consultants',
      description: 'Team of specialized SAP professionals'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries'
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pioneering SAP Cloud & AI Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At the forefront of SAP's cloud and AI revolution, we help organizations harness 
              the power of intelligent automation and cloud-native analytics. Our expertise spans 
              the entire SAP Business Technology Platform ecosystem, delivering transformative solutions.
            </p>

            {/* Achievements */}
            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <achievement.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Grid */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">SAP Cloud & AI Specialist</h3>
              <p className="opacity-90">
                Certified in SAP Business Technology Platform and AI solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;