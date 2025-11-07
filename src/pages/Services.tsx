import React from 'react';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Zap,
  Cog,
  Building2,
  BookOpen,
} from 'lucide-react';
import services from '../config/services';

const Services: React.FC = () => {
  const schoolService = services.forSchools;
  const studentService = services.forStudents;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
            <span className="gradient-text">{services.title}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {services.description}
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Teachers for Schools */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-electric-blue-500 to-electric-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-800">{schoolService.title}</h2>
                  <p className="text-electric-blue-600 font-medium">{schoolService.subTitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {schoolService.description}
              </p>

              <div className="space-y-6 mb-8">
                {schoolService.detail.focus.map((service) => (
                  <div key={service.title} className="card border border-electric-blue-100 hover:border-electric-blue-300 transition-colors">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-electric-blue-100 to-electric-blue-200 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <service.icon className="h-6 w-6 text-electric-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-display text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-electric-blue-50 to-electric-blue-100 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold font-display text-gray-800 mb-4">What's Included in Our School Partnership:</h3>
                <div className="space-y-3">
                  {schoolService.Highlights.map((highlight) => (
                    <div key={highlight.title} className="flex items-center text-sm text-gray-700">
                    <highlight.icon className="h-4 w-4 text-cyber-purple-500 mr-3" />
                    {highlight.title}
                  </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a href="/contact" className="btn-primary">
                  Get Expert Teachers
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </a>
              </div>
            </div>

            {/* Classes for Students */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-hot-pink-500 to-hot-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-800">{studentService.title}</h2>
                  <p className="text-hot-pink-600 font-medium">{studentService.subTitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {studentService.description}
              </p>

              <div className="space-y-6 mb-8">
                {studentService.detail.focus.map((classInfo) => (
                  <div key={classInfo.title} className="card border border-hot-pink-100 hover:border-hot-pink-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold font-display text-gray-800">{classInfo.title}</h3>
                      <div className="flex items-center text-sm text-hot-pink-600 bg-hot-pink-50 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 mr-1" />
                        {classInfo.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{classInfo.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {classInfo.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-cyber-purple-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-hot-pink-50 to-hot-pink-100 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold font-display text-gray-800 mb-4">What's Included in Our School Partnership:</h3>
                <div className="space-y-3">
                  {studentService.Highlights.map((highlight) => (
                    <div key={highlight.title} className="flex items-center text-sm text-gray-700">
                      <highlight.icon className="h-4 w-4 text-cyber-purple-500 mr-3" />
                      {highlight.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a href="/contact" className="btn-secondary">
                  Join Workshops
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              STEAM Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs integrate Science, Technology, Engineering, Art, and Medicine to prepare students for the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-electric-blue-500 to-electric-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">Robotics & Automation</h3>
              <p className="text-sm text-gray-600">Arduino, Raspberry Pi, sensors, and mechanical design</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-hot-pink-500 to-hot-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">Electronics & IoT</h3>
              <p className="text-sm text-gray-600">Circuit design, embedded systems, and connected devices</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyber-purple-500 to-cyber-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">Digital Art & Programming</h3>
              <p className="text-sm text-gray-600">Creative coding, digital design, AI applications, and interactive media</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-hot-pink-500 to-hot-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">Biomedical Innovation</h3>
              <p className="text-sm text-gray-600">Medical device design, biotechnology, health tech, and life sciences</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-blue-600 via-cyber-purple-600 to-hot-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-electric-blue-100 mb-8 leading-relaxed">
            Whether you're a parent looking to inspire your child or an educator wanting to transform your school, 
            we're here to help you build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-electric-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </a>
            <a href="/about" className="border-2 border-white text-white hover:bg-white hover:text-electric-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Learn About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
