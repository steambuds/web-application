import {
  BookOpen,
  Lightbulb,
  Puzzle,
  Users,
  Award,
  BarChart,
  PenTool,
  Layers,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection
} from '../components/ui';

const NEP2020TeacherGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="secondary" className="mb-4">Teacher Resources</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>NEP 2020: The Teacher's Playbook</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Moving beyond "finishing the syllabus" to "ensuring understanding." Key shifts every educator must adopt today.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Paradigm Shift */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Lightbulb className="h-5 w-5" />} color="accent" />
            <Heading level={2}>From Rote to Competency</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            The heart of NEP 2020 is <strong>Competency-Based Education (CBE)</strong>. It's not about what a student <em>knows</em> (memorized facts), but what they can <em>do</em> with that knowledge. This aligns with modern pedagogical research on <strong>Deep Learning</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Learning Outcomes</h3>
                  <p className="text-gray-600">
                    <strong>Old Way:</strong> "I taught Chapter 4 on Photosynthesis."<br/>
                    <strong>New Way:</strong> "Can the student design an experiment to show sunlight is needed for growth?"
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-600">
                  <Puzzle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Critical Thinking</h3>
                  <p className="text-gray-600">
                    Assessment questions must shift from "Define X" to "Compare X and Y" or "What happens if X is missing?" This forces thinking, not recall.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 2: Pedagogical Tools */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Layers className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>New Methods to Start Using</Heading>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-purple-600 font-bold text-lg">
                  <PenTool className="w-5 h-5" />
                  <h3>Art-Integrated Learning</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Using art not as a break, but as a medium. Teach Geometry through Warli painting, or Physics through musical instrument construction.
                </p>
                <div className="bg-purple-50 p-3 rounded text-xs text-purple-800 font-medium">
                  Goal: Joyful & connected learning.
                </div>
             </div>

             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold text-lg">
                  <Users className="w-5 h-5" />
                  <h3>Experiential Learning</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "Hands-on" is mandatory. Science labs are not just for 11th/12th. Every concept should have a physical component or observation.
                </p>
                <div className="bg-blue-50 p-3 rounded text-xs text-blue-800 font-medium">
                  Goal: Deeper retention.
                </div>
             </div>

             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-pink-600 font-bold text-lg">
                  <BarChart className="w-5 h-5" />
                  <h3>360-Degree Assessment</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Marks shouldn't just come from the teacher. Include <strong>Self-Assessment</strong> and <strong>Peer-Assessment</strong>. Let students critique their own growth.
                </p>
                <div className="bg-pink-50 p-3 rounded text-xs text-pink-800 font-medium">
                  Goal: Self-reflection skills.
                </div>
             </div>
          </div>
        </section>

        {/* Section 3: The Teacher's Role */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Award className="h-5 w-5" />} color="accent" />
            <Heading level={2}>Teacher as Facilitator</Heading>
          </div>

          <TwoColumnSection
             left={
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold mb-4">Stop Broadcasting</h3>
                 <p className="text-gray-600">
                   In the age of Google, you are no longer the sole source of information. Your role has shifted from "Sage on the Stage" to "Guide on the Side."
                 </p>
                 <ul className="space-y-2 text-gray-600">
                   <li className="flex items-start gap-2">
                     <span className="text-primary mt-1">•</span>
                     <span>Curate resources, don't just dictate notes.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-primary mt-1">•</span>
                     <span>Design problems, don't just solve them.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-primary mt-1">•</span>
                     <span>Focus on emotional safety in the classroom.</span>
                   </li>
                 </ul>
                 <p className="text-gray-600 italic mt-4">
                   NEP 2020 emphasizes 50 hours of Continuous Professional Development (CPD) per year for every teacher. Keep learning!
                 </p>
               </div>
             }
             right={
               <img
                 src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                 alt="Teacher working with small group"
                 className="rounded-xl shadow-lg"
               />
             }
             reverse
          />
        </section>

        {/* Section 4: External Resources */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<BookOpen className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Professional Development</Heading>
          </div>
          <p className="text-gray-700 mb-6">
            Resources to upgrade your teaching practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a 
               href="https://cbseacademic.nic.in/manuals.html" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 CBSE Teacher Manuals <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 Official guides on Experiential Learning, Art Integration, and more.
               </p>
             </a>

             <a 
               href="https://diksha.gov.in/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 DIKSHA Platform <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 National digital infrastructure for teachers with training courses and resources.
               </p>
             </a>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center mt-8">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
          <Heading level={2} className="text-white mb-4">Your Action Plan</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Start small. Pick one lesson next week to turn into an experiential activity. Move one test from written to project-based.
          </p>
        </div>

      </div>
    </div>
  );
};

export default NEP2020TeacherGuide;