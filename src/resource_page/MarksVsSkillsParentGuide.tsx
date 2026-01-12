import {
  Scale,
  Award,
  Briefcase,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  GraduationCap,
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

const MarksVsSkillsParentGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="secondary" className="mb-4">Parenting Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Marks AND Skills: The Balancing Act</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Why choosing between "Good Grades" and "Real Skills" is a false dilemma. How to prepare your child for a future where a degree is just the entry ticket.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Changing Landscape */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<TrendingUp className="h-5 w-5" />} color="primary" />
            <Heading level={2}>The Rules Have Changed</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Twenty years ago, a 95% score guaranteed a good job. Today, it merely guarantees an interview. To get the job (and keep it), your child needs something more. This is the era of the <strong>"T-Shaped Individual"</strong>—someone with deep expertise in one area (the vertical bar) and broad skills across many others (the horizontal bar).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold text-xl">
                <GraduationCap className="w-6 h-6" />
                <h3>Marks Open Doors</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Let's be realistic: Grades still matter for college admissions and initial screenings. They demonstrate discipline and the ability to work within a system.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-blue-800 font-medium">
                Marks = "I can do what I'm told."
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-green-600 font-bold text-xl">
                <Briefcase className="w-6 h-6" />
                <h3>Skills Build Careers</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Adaptability, coding, emotional intelligence, and complex problem-solving are what determine promotion, salary, and job security in an AI-driven world.
              </p>
              <div className="bg-green-50 p-3 rounded text-sm text-green-800 font-medium">
                Skills = "I can solve new problems."
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Danger of "Marks Only" */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<AlertTriangle className="h-5 w-5" />} color="accent" />
            <Heading level={2}>The Danger of the Single Focus</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">The "Paper Tiger" Trap</h3>
                <p className="text-gray-600">
                  Students who focus 100% on grades often suffer from <strong>"Fragile Excellence."</strong> They are perfect on paper but crumble when faced with real-world ambiguity where there is no textbook answer.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                  <p className="text-red-900">
                    <strong>Warning Sign:</strong> If your child asks "Is this going to be on the test?" for everything, they are optimizing for grades, not learning.
                  </p>
                </div>
              </div>
            }
            right={
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg h-full">
                 <h3 className="text-xl font-bold mb-4 text-gray-900">What Employers Ask Now:</h3>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <div className="mt-1"><CheckCircle className="w-5 h-5 text-green-500" /></div>
                     <span className="text-gray-600">"Show me a project you built from scratch."</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <div className="mt-1"><CheckCircle className="w-5 h-5 text-green-500" /></div>
                     <span className="text-gray-600">"Tell me about a time you failed and how you fixed it."</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <div className="mt-1"><CheckCircle className="w-5 h-5 text-green-500" /></div>
                     <span className="text-gray-600">"How do you learn a new tool that didn't exist in college?"</span>
                   </li>
                 </ul>
                 <p className="mt-6 text-sm text-gray-400 italic text-center">
                   (Notice: None of these ask for a GPA.)
                 </p>
              </div>
            }
          />
        </section>

        {/* Section 3: How Parents Can Help */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Scale className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>How to Strike the Balance</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            You don't have to tell them to stop studying. You just need to broaden the definition of "success."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card variant="hover">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600 w-fit mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Celebrate Effort, Not IQ</h3>
              <p className="text-sm text-gray-600">
                Instead of "You're so smart," say "I love how you stuck with that hard problem." This builds resilience (a key skill).
              </p>
            </Card>

            <Card variant="hover">
              <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600 w-fit mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Encourage "Side Hustles"</h3>
              <p className="text-sm text-gray-600">
                If they want to start a YouTube channel, sell crafts, or mod a video game—support it. That's Project Management 101.
              </p>
            </Card>

            <Card variant="hover">
              <div className="p-2 bg-pink-100 rounded-lg text-pink-600 w-fit mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Value Non-Academic Wins</h3>
              <p className="text-sm text-gray-600">
                Treat a finished painting or a repaired bicycle with the same excitement as an A on a math test.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 4: External Resources */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<BookOpen className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Read More</Heading>
          </div>
          <p className="text-gray-700 mb-6">
            Understand the changing landscape of education and work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a 
               href="https://www.forbes.com/sites/bernardmarr/2022/08/05/the-top-10-skills-employers-are-looking-for-in-2023/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 Forbes: Top Skills Employers Want <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 Why adaptability and critical thinking are becoming more valuable than technical degrees.
               </p>
             </a>

             <a 
               href="https://www.ted.com/talks/sal_khan_let_s_teach_for_mastery_not_test_scores?language=en" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 Sal Khan (Khan Academy) TED Talk <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 "Let's teach for mastery, not test scores." A powerful argument for understanding over grades.
               </p>
             </a>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center mt-8">
          <Scale className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
          <Heading level={2} className="text-white mb-4">The Best of Both Worlds</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            A child with good grades AND real-world skills is unstoppable. Your job is to make sure the pursuit of one doesn't kill the other.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MarksVsSkillsParentGuide;