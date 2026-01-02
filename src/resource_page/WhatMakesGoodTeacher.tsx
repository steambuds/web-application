import {
  Users,
  MessageCircle,
  Heart,
  BookOpen,
  Award,
  Ear,
  Lightbulb,
  GraduationCap,
  CheckCircle,
  Smile,
  Globe,
  Shield,
  Video,
  Mic
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection
} from '../components/ui';

const WhatMakesGoodTeacher = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="primary" className="mb-4">Professional Development</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>What Makes a Good Teacher?</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Insights from Dr. Vikas Divyakirti, Dr. Kumar Vishwas, and Azul Terronez on effective teaching in the modern era.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Dr. Vikas Divyakirti */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Users className="h-5 w-5" />} color="primary" />
            <Heading level={2}>The Gen Z Challenge</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Dr. Vikas Divyakirti highlights the unique challenges of teaching in the internet age—specifically reduced attention spans and instant fact-checking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="hover" className="h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Interactive Communication</h3>
                  <p className="text-gray-600">
                    Teaching must be a two-way street. In an era of distraction, involving students through questions and dialogue is the only way to maintain engagement.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="hover" className="h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-100 rounded-lg text-pink-600">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Friendly Relationship</h3>
                  <p className="text-gray-600">
                    Move from dictator to friend. Building a friendly rapport ensures that even critical feedback is received constructively rather than defensively.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Effective Methods</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-600 font-bold">
                    <BookOpen className="w-5 h-5" />
                    <h4>Stories & Examples</h4>
                  </div>
                  <p className="text-gray-600">
                    Incorporating narratives, poetic expressions, and relatable examples to explain complex concepts makes learning memorable.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 font-bold">
                    <Globe className="w-5 h-5" />
                    <h4>Experiential Learning</h4>
                  </div>
                  <p className="text-gray-600">
                    Don't just teach concepts; provide experiences. Films, field trips, and direct observation lead to deeper understanding than lectures alone.
                  </p>
                </div>
              </div>
            }
            right={
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                alt="Teacher interacting with students"
                className="rounded-xl shadow-lg"
              />
            }
          />
        </section>

        {/* Section 2: Dr. Kumar Vishwas */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Award className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>The Nation Builder</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Dr. Kumar Vishwas emphasizes the profound responsibility of educators in shaping the character of a nation.
          </p>

          <div className="bg-purple-50 rounded-2xl p-8 mb-12">
             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                   <Heading level={3} className="mb-4 text-purple-900">"Param-Ishwar"</Heading>
                   <p className="text-purple-800 italic text-lg mb-6">
                     "A teacher's error can impact an entire generation. Teachers are akin to the supreme being because they elevate individuals from lower to higher states."
                   </p>
                   <ul className="space-y-2 text-gray-600">
                     <li className="flex items-center gap-2">
                       <CheckCircle className="w-4 h-4 text-green-500" />
                       Teachers as 'Stairs' for student ascent
                     </li>
                     <li className="flex items-center gap-2">
                       <CheckCircle className="w-4 h-4 text-green-500" />
                       Character building is the sole domain of teachers
                     </li>
                     <li className="flex items-center gap-2">
                       <CheckCircle className="w-4 h-4 text-green-500" />
                       Success is measured by positive social impact, not wealth
                     </li>
                   </ul>
                </div>
                <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-lg">
                  <Shield className="w-24 h-24 text-purple-500" />
                </div>
             </div>
          </div>
        </section>

        {/* Section 3: Azul Terronez */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Ear className="h-5 w-5" />} color="accent" />
            <Heading level={2}>What Students Say</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            After collecting 26,000 responses, Azul Terronez identified what makes a good teacher great from the student's perspective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <Card className="text-center p-6">
               <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                 <Ear className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-lg mb-2">Listen Deeply</h3>
               <p className="text-gray-600 text-sm">
                 Students have their own language. Great teachers listen to what is not explicitly stated and understand the "why" behind behavior.
               </p>
             </Card>
             <Card className="text-center p-6">
               <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                 <Lightbulb className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-lg mb-2">Be a Learner</h3>
               <p className="text-gray-600 text-sm">
                 Students rarely see teachers learning. Showing vulnerability and discovering answers together inspires students.
               </p>
             </Card>
             <Card className="text-center p-6">
               <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                 <Heart className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-lg mb-2">Be Human</h3>
               <p className="text-gray-600 text-sm">
                 A great teacher understands students' lives outside school. They don't make assumptions and offer support when students are stuck.
               </p>
             </Card>
          </div>
        </section>

        {/* Section 4: The Science of Teaching */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<GraduationCap className="h-5 w-5" />} color="primary" />
            <Heading level={2}>The Science of Teaching</Heading>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6">
                Teaching is a complex skill requiring deep subject knowledge, psychological insight, and pedagogical expertise. Master instructors maximize lesson time and teach students <strong>how to learn</strong>.
              </p>
              <h4 className="font-bold text-lg mb-4">Key to Improvement:</h4>
              <div className="space-y-4">
                 <div className="flex items-start gap-3">
                   <Video className="w-5 h-5 text-green-600 mt-1" />
                   <div>
                     <strong className="block text-gray-900">Self-Reflection</strong>
                     <span className="text-gray-600">Video recording lessons for self-analysis.</span>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <Mic className="w-5 h-5 text-green-600 mt-1" />
                   <div>
                     <strong className="block text-gray-900">Precise Feedback</strong>
                     <span className="text-gray-600">Regular, specific feedback from lead teachers and students.</span>
                   </div>
                 </div>
              </div>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-xl">
               <Heading level={3} className="text-white mb-6">Impact of a Great Teacher</Heading>
               <div className="space-y-6">
                 <div>
                   <div className="text-3xl font-bold text-green-400 mb-1">50% More</div>
                   <p className="text-gray-400">Learning annually with a top teacher compared to an average one.</p>
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-green-400 mb-1">Lifetime</div>
                   <p className="text-gray-400">Boost in earnings and career advancement for students taught by effective teachers.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WhatMakesGoodTeacher;
