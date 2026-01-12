import {
  Brain,
  TrendingUp,
  Shield,
  Lightbulb,
  Puzzle,
  Users,
  Mic,
  Clock,
  BookOpen,
  Briefcase,
  Rocket,
  ExternalLink
} from 'lucide-react';
import {
  Heading,
  Badge,
  GradientText,
  IconBox,
} from '../components/ui';

const SkillsPlusAcademicsGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="success" className="mb-4">Parenting Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>A Guide for Parents on Why Skills + Academics = True Success</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            As parents, we naturally worry about our children's grades. We check report cards, monitor test scores, and celebrate academic milestones. We do this because we want them to have a secure future.
          </p>
        </div>
      </div>

      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Introduction */}
        <section>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                 <p className="text-blue-900 text-lg mb-4">
                   But have you ever noticed that the student with the highest IQ isn't always the most successful adult? Or that a child can ace a history test but struggle to write a persuasive email?
                 </p>
                 <p className="text-blue-900 text-lg mb-4">
                   Leading research from the world's top universities—<strong>Harvard, Stanford, and Columbia</strong>—has revealed a crucial truth: Academic knowledge is the <em>engine</em>, but skills are the <em>fuel</em>. Without skills like resilience, critical thinking, and communication, even the smartest student can stall.
                 </p>
                 <p className="text-blue-900 font-medium">
                   Here is the science behind why we are focusing on these 12 critical skills for your children in grades 5 through 10, and why this specific age range is the "golden window" for learning them.
                 </p>
              </div>
              <div className="flex-shrink-0">
                <Rocket className="w-24 h-24 text-blue-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Bounce Back Factor */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<TrendingUp className="h-5 w-5" />} color="primary" />
            <Heading level={2}>1. The "Bounce Back" Factor: Why Effort Matters More Than Talent</Heading>
          </div>
          
          <div className="mb-6">
             <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Skills:</span>
             <span className="text-gray-700 ml-2">Spirit of Trying, Adaptability, Resilience (Grit), Personality Development</span>
          </div>

          <p className="text-gray-700 text-lg mb-8">
            Many smart children "hit a wall" in middle school. Things get hard, and because they are used to being "smart," they panic when they don't understand something immediately.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                 <BookOpen className="w-5 h-5 text-purple-600" />
                 The Research
               </h3>
               <p className="text-gray-600 mb-4">
                 Decades of research by <strong>Dr. Carol Dweck at Stanford University</strong> proves that children with a "Growth Mindset" (the belief that ability is built through effort, not born) get higher grades than those who believe intelligence is fixed. Furthermore, <strong>Dr. Angela Duckworth at the University of Pennsylvania</strong> found that "Grit" (passion and perseverance) is a better predictor of success than IQ.
               </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                 <Shield className="w-5 h-5 text-green-600" />
                 Why we teach this
               </h3>
               <p className="text-gray-600">
                 We teach your child the "Spirit of Trying" so that when they fail a math test, they don't say, "I'm bad at math." They say, "I need to try a different strategy." This resilience is the single biggest protector of their mental health and academic future.
               </p>
            </div>
          </div>

          {/* Source Link */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400 text-sm">
             <span className="font-bold text-gray-700 mr-2">Source:</span>
             <span className="space-x-4">
               <a 
                 href="https://ctl.stanford.edu/students/growth-mindset" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline inline-flex items-center gap-1"
               >
                 Stanford University - Growth Mindset <ExternalLink className="w-3 h-3" />
               </a>
               <span className="text-gray-400">|</span>
               <a 
                 href="https://pubmed.ncbi.nlm.nih.gov/17547490/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline inline-flex items-center gap-1"
               >
                 PubMed - Grit Research <ExternalLink className="w-3 h-3" />
               </a>
             </span>
          </div>
        </section>

        {/* Section 2: Learning HOW to Think */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Brain className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>2. Learning <em>How</em> to Think, Not Just <em>What</em> to Think</Heading>
          </div>
          
          <div className="mb-6">
             <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Skills:</span>
             <span className="text-gray-700 ml-2">Curiosity, Critical Thinking, Problem-Solving, Computational Thinking, Creativity</span>
          </div>

          <p className="text-gray-700 text-lg mb-8">
            In the age of Google, your child doesn't need to be a walking encyclopedia. They need to be a detective. If they can memorize a formula but don't know when to use it, the knowledge is useless.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                 <Lightbulb className="w-5 h-5 text-yellow-600" />
                 The Research
               </h3>
               <p className="text-gray-600 mb-4">
                 Research from <strong>Harvard's Graduate School of Education</strong> (specifically the "Project Zero" initiative) shows that when students use structured "Thinking Routines," they understand lessons deeper and remember them longer. Additionally, <strong>Dr. Jeannette Wing (Columbia University)</strong> champions "Computational Thinking"—not just for coders, but as a way for <em>all</em> students to learn how to break big problems into small, solvable steps.
               </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                 <Puzzle className="w-5 h-5 text-blue-600" />
                 Why we teach this
               </h3>
               <p className="text-gray-600">
                 By teaching Critical and Computational Thinking, we are giving your child a toolkit to tackle <em>any</em> subject. A child with these skills doesn't just memorize history dates; they analyze <em>why</em> events happened, which helps them write better essays and form stronger arguments.
               </p>
            </div>
          </div>

          {/* Source Link */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400 text-sm">
             <span className="font-bold text-gray-700 mr-2">Source:</span>
             <span className="space-x-4">
               <a 
                 href="https://pz.harvard.edu/thinking-routines" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline inline-flex items-center gap-1"
               >
                 Harvard Project Zero <ExternalLink className="w-3 h-3" />
               </a>
               <span className="text-gray-400">|</span>
               <a 
                 href="https://www.microsoft.com/en-us/research/wp-content/uploads/2012/08/Jeannette_Wing.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline inline-flex items-center gap-1"
               >
                 Jeannette Wing - Computational Thinking <ExternalLink className="w-3 h-3" />
               </a>
             </span>
          </div>
        </section>

        {/* Section 3: The Skills That Get Hired */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Briefcase className="h-5 w-5" />} color="accent" />
            <Heading level={2}>3. The Skills That Get Hired: Communication & Real-World Readiness</Heading>
           </div>
           
           <div className="mb-6">
             <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Skills:</span>
             <span className="text-gray-700 ml-2">Communication, Public Speaking, Collaboration, Digital Literacy, Financial Literacy</span>
          </div>

           <p className="text-gray-700 text-lg mb-8">
             We all know brilliant people who struggle because they cannot work in a team or explain their ideas. In the modern world, being right isn't enough; you have to be persuasive.
           </p>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                 <Users className="w-5 h-5 text-green-600" />
                 The Research
               </h3>
               <p className="text-gray-600 mb-4">
                 The <strong>World Economic Forum</strong> and the <strong>OECD</strong> (an international economic organization) consistently list "Collaboration" and "Social Influence" as top future job skills. The OECD also highlights <strong>Financial Literacy</strong> as a key component of student well-being, linking it directly to better math and reading scores.
               </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                 <Mic className="w-5 h-5 text-pink-600" />
                 Why we teach this
               </h3>
               <p className="text-gray-600">
                 We introduce <strong>Public Speaking</strong> and <strong>Communication Design</strong> so your child can stand up in front of a crowd (or a boardroom) and speak with confidence. We teach <strong>Financial Literacy</strong> so they understand the value of the resources they manage. We teach <strong>Digital Literacy</strong> so they can navigate the internet safely and smartly, distinguishing facts from fake news.
               </p>
            </div>
          </div>

          {/* Source Link */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400 text-sm">
             <span className="font-bold text-gray-700 mr-2">Source:</span>
             <span className="space-x-4">
               <a 
                 href="https://www.oecd.org/en/data/tools/oecd-learning-compass-2030.html" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline inline-flex items-center gap-1"
               >
                 OECD Learning Compass <ExternalLink className="w-3 h-3" />
               </a>
               <span className="text-gray-400">|</span>
               <a 
                 href="https://reports.weforum.org/docs/WEF_New_Economy_Skills_Unlocking_the_Human_Advantage_2025.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline inline-flex items-center gap-1"
               >
                 WEF Future of Jobs <ExternalLink className="w-3 h-3" />
               </a>
             </span>
          </div>
        </section>

        {/* Section 4: Golden Window */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Clock className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>Why Grades 5-10? The "Golden Window"</Heading>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
             <div className="flex-1 space-y-4 text-gray-700 text-lg">
               <p>
                 You might ask, "Why not wait until college?"
               </p>
               <p>
                 Neuroscience tells us that the brain goes through a massive reconstruction between ages 10 and 16. Scientists call this <strong>neuroplasticity</strong>. During these years, your child's brain is physically wiring itself for adulthood.
               </p>
               <p>
                 If we instill habits of resilience, curiosity, and clear communication <em>now</em>, they become permanent personality traits. If we wait, it becomes much harder to change.
               </p>
             </div>
             <div className="flex-shrink-0 md:w-1/3 bg-purple-50 p-6 rounded-xl border border-purple-100 flex items-center justify-center text-center">
                <div>
                   <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                   <p className="text-purple-900 font-bold">"Neuroplasticity"</p>
                   <p className="text-sm text-purple-700 mt-2">The brain's ability to reorganize itself by forming new neural connections.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <Rocket className="w-12 h-12 mx-auto mb-6 text-green-400" />
          <Heading level={2} className="text-white mb-4">The Bottom Line for Parents</Heading>
          <div className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 space-y-4">
            <p>We are not choosing between "Academics" and "Skills." We are combining them.</p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li className="flex items-start gap-2">
                 <span className="text-green-400 mt-1">•</span>
                 <span><strong>Academics</strong> give your child the knowledge.</span>
              </li>
              <li className="flex items-start gap-2">
                 <span className="text-green-400 mt-1">•</span>
                 <span><strong>Skills</strong> give your child the power to <em>use</em> that knowledge.</span>
              </li>
            </ul>
            <p>By supporting this holistic approach, you aren't just helping your child get into a good college; you are helping them become a capable, happy, and successful adult.</p>
          </div>
        </div>
        
        {/* References */}
        <div className="border-t border-gray-200 pt-12">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
               <BookOpen className="w-5 h-5" />
               References for Further Reading
            </h4>
            <p className="text-sm text-gray-500 mb-4">If you wish to explore the science behind our curriculum, these are the primary sources:</p>
            <ul className="list-decimal list-inside text-sm text-gray-500 space-y-2">
                <li><strong>Grit & Resilience:</strong> <em>Duckworth, A.L., et al. (2007). "Grit: Perseverance and passion for long-term goals."</em> (University of Pennsylvania)</li>
                <li><strong>Growth Mindset:</strong> <em>Dweck, C. (2006). "Mindset: The New Psychology of Success."</em> (Stanford University)</li>
                <li><strong>Critical Thinking:</strong> <em>Harvard Graduate School of Education, Project Zero: "Visible Thinking."</em></li>
                <li><strong>Computational Thinking:</strong> <em>Wing, J.M. (2006). "Computational Thinking." Communications of the ACM.</em> (Columbia University)</li>
                <li><strong>Global Competencies:</strong> <em>OECD Future of Education and Skills 2030.</em></li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default SkillsPlusAcademicsGuide;