import React from 'react';
import { Lightbulb, Wrench, Rocket, CheckCircle, Cpu, Zap, BookOpen, Building2 } from 'lucide-react';

const RnD: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
            <span className="gradient-text">Research & Development (R&D)</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We explore practical, affordable, and scalable innovations that make STEAM learning engaging and impactful for schools and students.
          </p>
        </div>
      </section>

      {/* Why we are doing this R&D */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">Why we are doing this R&D</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">To bridge the gap between classroom concepts and real-world problem solving through frugal, hands-on innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card border border-electric-blue-100">
              <div className="bg-gradient-to-br from-electric-blue-500 to-electric-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-display text-gray-800 mb-2">Concept to Creation</h3>
              <p className="text-gray-600">Turn theory into prototypes so students experience how ideas evolve into usable solutions.</p>
            </div>
            <div className="card border border-vibrant-orange-100">
              <div className="bg-gradient-to-br from-vibrant-orange-500 to-hot-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-display text-gray-800 mb-2">Hands-on & Affordable</h3>
              <p className="text-gray-600">Design low-cost kits and workflows that any school can adopt without heavy infrastructure.</p>
            </div>
            <div className="card border border-lime-green-100">
              <div className="bg-gradient-to-br from-lime-green-500 to-neon-yellow-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-display text-gray-800 mb-2">Future Skills</h3>
              <p className="text-gray-600">Focus on robotics, electronics, coding, and biomedical thinking aligned with NEP and STEAM goals.</p>
            </div>
            <div className="card border border-cyber-purple-100">
              <div className="bg-gradient-to-br from-cyber-purple-500 to-electric-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-display text-gray-800 mb-2">School-ready</h3>
              <p className="text-gray-600">Everything we build is classroom-tested, time-bound, and aligned to realistic school schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we are doing this */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">How we are doing this</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A simple, repeatable process that moves from needs to working prototypes in the classroom.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-gradient-to-br from-electric-blue-500 to-electric-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">1. Identify Needs</h3>
              <p className="text-gray-600">Work with teachers and students to shortlist real problems and map them to learning outcomes.</p>
            </div>
            <div className="card text-center">
              <div className="bg-gradient-to-br from-vibrant-orange-500 to-hot-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">2. Design Sprint</h3>
              <p className="text-gray-600">Rapid ideation, paper modelling, and circuit sketches to plan the build.</p>
            </div>
            <div className="card text-center">
              <div className="bg-gradient-to-br from-lime-green-500 to-neon-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">3. Build & Test</h3>
              <p className="text-gray-600">Assemble prototypes, program controllers, measure performance, and iterate.</p>
            </div>
            <div className="card text-center">
              <div className="bg-gradient-to-br from-cyber-purple-500 to-electric-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">4. Share & Scale</h3>
              <p className="text-gray-600">Document steps, make class kits, and train teachers so more students can replicate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Already done programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">Programs we have already run</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A glimpse of our school-ready pilots and workshops that sparked curiosity and results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group border border-electric-blue-100 hover:border-electric-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-display text-gray-800">Robotics Bootcamp</h3>
                <span className="text-xs text-electric-blue-700 bg-electric-blue-50 px-2 py-1 rounded-full">2 days</span>
              </div>
              <p className="text-gray-600 mb-4">Students built line-following and obstacle-avoiding bots using Arduino and sensors.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-electric-blue-600 mr-2" />40+ students, Grades 7–9</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-electric-blue-600 mr-2" />8 project demos</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-electric-blue-600 mr-2" />Teacher orientation included</li>
              </ul>
            </div>

            <div className="card group border border-vibrant-orange-100 hover:border-vibrant-orange-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-display text-gray-800">Smart Garden (IoT)</h3>
                <span className="text-xs text-vibrant-orange-700 bg-vibrant-orange-50 px-2 py-1 rounded-full">3 sessions</span>
              </div>
              <p className="text-gray-600 mb-4">Built soil-moisture monitoring with automatic watering and mobile notifications.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-vibrant-orange-600 mr-2" />20+ students, Grades 8–10</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-vibrant-orange-600 mr-2" />Electronics + coding integration</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-vibrant-orange-600 mr-2" />Reusable classroom kit</li>
              </ul>
            </div>

            <div className="card group border border-lime-green-100 hover:border-lime-green-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-display text-gray-800">Health-Tech Challenge</h3>
                <span className="text-xs text-lime-green-700 bg-lime-green-50 px-2 py-1 rounded-full">1 week</span>
              </div>
              <p className="text-gray-600 mb-4">Teams designed low-cost assistive devices and presented working mockups.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-lime-green-600 mr-2" />15+ teams participated</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-lime-green-600 mr-2" />Mentor feedback rounds</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-lime-green-600 mr-2" />Showcase and awards</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/contact" className="btn-primary">
              Bring an R&D Program to Your School
              <Rocket className="ml-2 h-5 w-5 inline" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RnD;
