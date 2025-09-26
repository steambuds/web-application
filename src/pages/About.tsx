import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  ArrowRight,
  Mail,
  Linkedin,
} from 'lucide-react';
import about from '../config/about';

const About: React.FC = () => {
  const teamMembers = about.team.members;
  const values = about.coreValues.principles;
  const story = about.story;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-blue-50 to-vibrant-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
                <span className="gradient-text">{about.title}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {about.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                {/* <Link to="/services" className="btn-outline">
                  Explore Our Impact
                </Link> */}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop" 
                alt="Students collaborating on innovative projects" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-electric-blue-200 to-vibrant-orange-200 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card bg-gradient-to-br from-electric-blue-50 to-electric-blue-100 border border-electric-blue-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-electric-blue-500 to-electric-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-display text-gray-800">{about.mission.title}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {about.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="card bg-gradient-to-br from-vibrant-orange-50 to-vibrant-orange-100 border border-vibrant-orange-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-vibrant-orange-500 to-vibrant-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-display text-gray-800">{about.vision.title}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              {about.team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.team.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center group hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-800 mb-2">{member.name}</h3>
                <p className="text-electric-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-800">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-electric-blue-100 text-electric-blue-800 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-electric-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-electric-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy/Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              {about.coreValues.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.coreValues.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-electric-blue-100 to-vibrant-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-electric-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Achievements */}
      
      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              {story.title}
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            {story.paragraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
          
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-blue-600 to-vibrant-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-electric-blue-100 mb-8 leading-relaxed">
            Whether you're an educator, parent, or institution, there are many ways to be part of the 
            hands-on learning revolution. Let's work together to inspire the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-electric-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </a>
            {/* <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-electric-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Explore Our Programs
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
