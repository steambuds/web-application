import {
  Briefcase,
  Award,
  PenTool,
  Globe,
  Star,
  TrendingUp,
  FolderOpen,
  Layers,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection,
} from '../components/ui';

const MarksVsSkillsGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="success" className="mb-4">Student Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Marks vs. Skills</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Why "Will this be on the test?" matters less than "Can I build something with this?" How to build a portfolio that actually gets you hired.
          </p>
        </div>
      </div>

      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The New Currency */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Briefcase className="h-5 w-5" />} color="primary" />
            <Heading level={2}>The Resume is Dead(ish)</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            In the past, a 98% score was the golden ticket. Today, companies (like Google, Tesla, and startups) and top universities care less about what you <em>memorized</em> and more about what you have <em>created</em>. This shift is often called the <strong>"Skills-Based Hiring"</strong> revolution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg text-gray-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">The Old Way: Credentials</h3>
                  <p className="text-gray-600">
                    "I got an A in Computer Science."
                  </p>
                  <p className="text-xs text-red-500 mt-2 font-semibold">
                    Problem: Thousands of other students did too. It proves you can pass a test, not that you can code.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-600">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">The New Way: Proof</h3>
                  <p className="text-gray-600">
                    "I built this app that helps my neighbors track trash collection."
                  </p>
                  <p className="text-xs text-green-600 mt-2 font-semibold">
                    Advantage: It shows initiative, problem-solving, and real-world impact. That is unignorable.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 2: Building Your Portfolio */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Layers className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>Start Young, Start Small</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">You Already Have Content</h3>
                <p className="text-gray-600">
                  A portfolio isn't just for artists. It's a record of your curiosity. It documents your <strong>"Project-Based Learning"</strong> journey.
                </p>
                <div className="space-y-4 mt-4">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                     <p className="text-gray-700"><strong>Lego Builders:</strong> Take photos of your custom builds. Explain the engineering challenges you solved.</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                     <p className="text-gray-700"><strong>Writers/Gamers:</strong> Start a blog reviewing games or discussing lore. Writing consistently is a rare skill.</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                     <p className="text-gray-700"><strong>Coders:</strong> Don't just follow tutorials. Build something "useless" but fun, and put it on GitHub.</p>
                   </div>
                </div>
              </div>
            }
            right={
              <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 h-full flex flex-col justify-center text-center">
                 <Globe className="w-16 h-16 mx-auto mb-6 text-yellow-600" />
                 <h3 className="text-2xl font-bold mb-2 text-yellow-900">Your Personal Brand</h3>
                 <p className="text-yellow-800">
                   When someone Googles your name in 5 years, what will they find? A blank page? Or a history of interesting projects?
                 </p>
              </div>
            }
          />
        </section>

        {/* Section 3: The "Soft" Skills */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Star className="h-5 w-5" />} color="accent" />
            <Heading level={2}>The Skills Exams Can't Measure</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Technical skills get you the interview. Soft skills (often called <strong>"Power Skills"</strong>) get you the job and the promotion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
               <div className="flex items-center gap-2 mb-3 text-blue-600 font-bold">
                 <TrendingUp className="w-5 h-5" />
                 <h3>Resilience</h3>
               </div>
               <p className="text-sm text-gray-600">
                 Can you handle failure? When your code breaks or your painting looks wrong, do you quit or pivot? This is "Grit."
               </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
               <div className="flex items-center gap-2 mb-3 text-pink-600 font-bold">
                 <PenTool className="w-5 h-5" />
                 <h3>Communication</h3>
               </div>
               <p className="text-sm text-gray-600">
                 Can you explain complex ideas simply? The smartest person in the room is useless if they can't persuade others.
               </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
               <div className="flex items-center gap-2 mb-3 text-purple-600 font-bold">
                 <Briefcase className="w-5 h-5" />
                 <h3>Leadership</h3>
               </div>
               <p className="text-sm text-gray-600">
                 Not just "being the boss." Leadership is noticing a problem and organizing people to fix it without being asked.
               </p>
            </div>
          </div>
        </section>

        {/* Section 4: External Resources */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<BookOpen className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Read About the Future of Work</Heading>
          </div>
          <p className="text-gray-700 mb-6">
            See what the world's leading organizations say about the skills you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a 
               href="https://www.weforum.org/agenda/2023/05/future-of-jobs-2023-skills/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 World Economic Forum: Future of Jobs <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 The top 10 skills employers are looking for (Spoiler: Analytical thinking and creative thinking top the list).
               </p>
             </a>

             <a 
               href="https://www.linkedin.com/business/talent/blog/talent-strategy/global-talent-trends" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 LinkedIn Global Talent Trends <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 Insights into how "Skills-First" hiring is changing the job market.
               </p>
             </a>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-green-600 text-white rounded-2xl p-8 md:p-12 text-center mt-8">
          <FolderOpen className="w-12 h-12 mx-auto mb-6 text-green-200" />
          <Heading level={2} className="text-white mb-4">Start Your Portfolio Today</Heading>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
            Don't wait for permission. Open a document, take a picture, write a paragraph. Document your journey. Your future self will thank you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MarksVsSkillsGuide;