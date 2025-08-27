import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Wrench, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Award
} from 'lucide-react';
import services from '../config/services';

const Home: React.FC = () => {
  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Priya Sharma",
  //     role: "Parent",
  //     image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=150&h=150&fit=crop&crop=face",
  //     content: "My child's confidence in STEAM subjects has soared! The integrated approach at STEAM Buds has transformed how she thinks about problem-solving across disciplines.",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     name: "Rajesh Kumar",
  //     role: "School Principal",
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  //     content: "The lab setup was seamless, and the curriculum is fantastic. Our students are now building robots and solving real-world problems!",
  //     rating: 5
  //   },
  //   {
  //     id: 3,
  //     name: "Aisha Patel",
  //     role: "Student (Grade 8)",
  //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  //     content: "I never thought I could build a working robot! Now I want to become an engineer and invent things that help people.",
  //     rating: 5
  //   }
  // ];
  const schoolService = services.forSchools;
  const studentService = services.forStudents;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 pattern-dots overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight drop-shadow-lg">
                <span className="gradient-text">
                  Learn. Create. Innovate.
                </span>
                <br />
                <span className="text-gray-800">
                  The Next Generation of STEAM Leaders
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Inspiring young minds through integrated STEAM education that combines Science, Technology, Engineering, Art, and Medicine. Join thousands of students who are creating innovative solutions for tomorrow's challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary text-center">
                  Explore Our Classes
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/contact" className="btn-outline text-center">
                  Partner With Us
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-electric-blue-500" />
                  <span>50+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-vibrant-orange-500" />
                  <span>2+ Schools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-lime-green-500" />
                  <span>5+ Projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=500&fit=crop" 
                  alt="Indian students collaborating on engineering projects" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-electric-blue-200 via-cyber-purple-200 to-hot-pink-200 rounded-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven three-step approach transforms curious minds into confident innovators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-electric-blue-500 to-cyber-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Learn</h3>
              <p className="text-gray-600 leading-relaxed">
                Join our hands-on classes and learn the fundamentals of engineering, robotics, and innovation 
                through interactive workshops and expert guidance.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-vibrant-orange-500 to-hot-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Build</h3>
              <p className="text-gray-600 leading-relaxed">
                Build real-world projects and bring your ideas to life using cutting-edge tools, 
                technologies, and materials in our state-of-the-art labs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-lime-green-500 to-neon-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Invent</h3>
              <p className="text-gray-600 leading-relaxed">
                Think like an engineer and invent the future of India. Develop critical thinking, 
                problem-solving skills, and the confidence to innovate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              {services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {services.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* private Student Workshops */}
            <div className="card group hover:bg-gradient-to-br hover:from-electric-blue-50 hover:to-cyber-purple-100 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-electric-blue-400 to-cyber-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-800">{schoolService.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {schoolService.description}
              </p>
              <div className="space-y-3 mb-6">
                {schoolService.Highlights.slice(0, 3).map((highlight, index) => (
                  <div className="flex items-center text-sm text-gray-700" key={index}>
                    <div className="w-2 h-2 bg-electric-blue-500 rounded-full mr-3"></div>
                    {highlight.title}
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn-primary">
                Get Expert Teachers
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
            </div>

            {/* private Student Workshops */}
            <div className="card group hover:bg-gradient-to-br hover:from-vibrant-orange-50 hover:to-hot-pink-100 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-vibrant-orange-400 to-hot-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-800">{studentService.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {studentService.description}
              </p>
              <div className="space-y-3 mb-6">
                {studentService.Highlights.slice(0, 3).map((highlight, index) => (
                  <div className="flex items-center text-sm text-gray-700" key={index}>
                    <div className="w-2 h-2 bg-vibrant-orange-500 rounded-full mr-3"></div>
                    {highlight.title}
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn-secondary">
                Join Workshops
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students, parents, and educators who have experienced the magic of hands-on learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-neon-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="h-8 w-8 text-electric-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-600 italic leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-blue-400 via-cyber-purple-500 via-hot-pink-500 to-atomic-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Ready to Inspire the Next Generation?
          </h2>
          <p className="text-xl text-electric-blue-100 mb-8 leading-relaxed">
            Join thousands of students and hundreds of schools who are already building the future. 
            Start your innovation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-electric-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </a>
            <a href="/services" className="border-2 border-white text-white hover:bg-white hover:text-electric-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Explore Our Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
