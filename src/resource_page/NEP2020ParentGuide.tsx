import {
  BookOpen,
  Target,
  AlertCircle,
  Users,
  Zap,
  Globe,
  Puzzle,
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

const NEP2020ParentGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="primary" className="mb-4">Policy Explained</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>No More Rote Learning? (NEP 2020)</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            The National Education Policy 2020 promises a revolution. But why isn't it happening in every classroom yet? And where do you fit in?
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Core Promises */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Target className="h-5 w-5" />} color="primary" />
            <Heading level={2}>What NEP 2020 Actually Says</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Moving away from "rote learning" (memorization) to <strong>"Competency-Based Learning."</strong> The goal is not just to pass exams, but to learn how to think. This aligns with global standards like the <strong>UN Sustainable Development Goals (SDG 4)</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Puzzle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">5+3+3+4 Structure</h3>
                  <p className="text-gray-600">
                    Replacing the 10+2 system. The focus shifts to early childhood care (Foundational Stage) and offers flexibility in subject choices in high school (no more rigid Science vs Arts streams).
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Experiential Learning</h3>
                  <p className="text-gray-600">
                    "Learning by doing." Vocational skills like coding, pottery, or carpentry are to be integrated from Grade 6. Report cards will be 360-degree holistic progress cards.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 2: The Implementation Gap */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<AlertCircle className="h-5 w-5" />} color="accent" />
            <Heading level={2}>Why Schools Struggle</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">The Reality Check</h3>
                <p className="text-gray-600">
                  While the policy is visionary, the infrastructure is lagging. Changing a syllabus is easy; changing a mindset is hard.
                </p>
                <div className="space-y-4 mt-4">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     <p className="text-gray-700"><strong>Teacher Training:</strong> Most teachers were trained in the old system. They need massive upskilling to teach "creativity."</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     <p className="text-gray-700"><strong>Resource Crunch:</strong> Setting up labs for vocational training (like robotics or carpentry) is expensive for many budget schools.</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     <p className="text-gray-700"><strong>Exam Pressure:</strong> As long as college admissions (like JEE/NEET) depend on high-stakes tests, schools prioritize "finishing the portion" over "understanding concepts."</p>
                   </div>
                </div>
              </div>
            }
            right={
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"
                alt="Empty classroom chairs"
                className="rounded-xl shadow-lg"
              />
            }
            reverse
          />
        </section>

        {/* Section 3: Why Parents Must Step In */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Users className="h-5 w-5" />} color="primary" />
            <Heading level={2}>The Parent's Role</Heading>
          </div>
          
          <div className="bg-green-50 p-8 rounded-2xl">
            <h3 className="font-bold text-xl text-green-900 mb-4 text-center">School Can't Do It Alone</h3>
            <p className="text-green-800 text-center max-w-3xl mx-auto mb-8">
              A school operates for 6 hours. Life operates for 24. If schools are stuck in the transition phase, you must bridge the gap.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm">
                 <div className="text-green-600 mb-3 font-bold flex items-center gap-2">
                   <Globe className="w-5 h-5" />
                   <span>Real World Exposure</span>
                 </div>
                 <p className="text-sm text-gray-600">
                   Schools simulate life; you live it. Take them to the bank, the post office, or your workplace. Show them how math works in a grocery store.
                 </p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm">
                 <div className="text-green-600 mb-3 font-bold flex items-center gap-2">
                   <BookOpen className="w-5 h-5" />
                   <span>Encourage Questions</span>
                 </div>
                 <p className="text-sm text-gray-600">
                   Old schools suppress questions to maintain order. At home, reward curiosity. If they ask "Why?", don't say "Because I said so."
                 </p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm">
                 <div className="text-green-600 mb-3 font-bold flex items-center gap-2">
                   <Users className="w-5 h-5" />
                   <span>Value Skills Over Marks</span>
                 </div>
                 <p className="text-sm text-gray-600">
                   Stop asking "How much did you score?" Start asking "What new thing did you try today?" This shifts their focus from performance to growth.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* Section 4: External Resources */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<BookOpen className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Official Sources</Heading>
          </div>
          <p className="text-gray-700 mb-6">
            Read the full policy and expert analysis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a 
               href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 Ministry of Education: NEP 2020 PDF <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 The original policy document. Dense but definitive.
               </p>
             </a>

             <a 
               href="https://www.observerindia.com/content/nep-2020-a-critical-analysis" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 Expert Analysis on NEP <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 Authentic articles breaking down the pros and cons of implementation.
               </p>
             </a>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center mt-8">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 text-blue-400" />
          <Heading level={2} className="text-white mb-4">Be The Change</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            The policy is on paper, but the practice starts at home. Don't wait for the system to change; start upgrading your child's learning environment today.
          </p>
        </div>

      </div>
    </div>
  );
};

export default NEP2020ParentGuide;