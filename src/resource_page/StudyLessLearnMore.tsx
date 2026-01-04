import {
  Brain,
  Clock,
  MessageCircle,
  Zap,
  BookOpen,
  Target,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection,
} from '../components/ui';

const StudyLessLearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="primary" className="mb-4">Student Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Study Less, Learn More</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            The Science of 'Smart' Studying. Stop just "working hard" and start hacking your brain's retention systems.
          </p>
        </div>
      </div>

      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Trap of "Hard" Studying */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Target className="h-5 w-5" />} color="accent" />
            <Heading level={2}>The "Hard Work" Trap</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Most students rely on rereading notes and highlighting textbooks. Science shows these are some of the <strong>least effective</strong> ways to learn. They give you the <em>illusion</em> of competence without actual retention.
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
             <h3 className="font-bold text-red-900 text-lg mb-2">The Illusion of Competence</h3>
             <p className="text-red-800">
               When you reread, your brain recognizes the text and says "I know this." But recognizing is not the same as being able to retrieve it during an exam.
             </p>
          </div>
        </section>

        {/* Section 2: Active Recall */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Zap className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Concept 1: Active Recall</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Test Yourself, Don't Just Read</h3>
                <p className="text-gray-600">
                  Active Recall means retrieving information from your brain without looking at the source. It feels harder because it IS harder—and that struggle is where the learning happens.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <strong className="block text-gray-900">Close the book</strong>
                      <span className="text-gray-600">After reading a page, look away and recite the main points.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <strong className="block text-gray-900">Practice Testing</strong>
                      <span className="text-gray-600">Testing is not just for grading; it's a learning tool. It strengthens neural pathways 10x more than re-reading.</span>
                    </div>
                  </div>
                </div>
              </div>
            }
            right={
              <div className="bg-blue-50 p-8 rounded-xl h-full flex items-center justify-center">
                 <div className="text-center">
                   <Brain className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                   <p className="text-blue-800 font-bold text-lg">"Struggle is the feeling of your brain growing."</p>
                 </div>
              </div>
            }
          />
        </section>

        {/* Section 3: Spaced Repetition */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Clock className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>Concept 2: Spaced Repetition</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            You will forget 50% of what you learned within 24 hours unless you review it. But you don't need to review it every day. You need to review it just as you are about to forget it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">Day 1</div>
              <p className="text-gray-600">Learn the material. (100% retention)</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">Day 2</div>
              <p className="text-gray-600">Review for 10 mins. (Restore to 100%)</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">Day 7</div>
              <p className="text-gray-600">Review for 5 mins. (Hack the forgetting curve)</p>
            </Card>
          </div>
        </section>

        {/* Section 4: The Feynman Technique */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<MessageCircle className="h-5 w-5" />} color="accent" />
            <Heading level={2}>Concept 3: The Feynman Technique</Heading>
          </div>
          
          <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">"If you can't explain it to a 5-year-old, you don't understand it."</h3>
            <p className="text-gray-300">
              Richard Feynman, a Nobel prize-winning physicist, believed that complexity is a sign of shallow understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
               <h4 className="font-bold text-xl mb-4">How to do it:</h4>
               <ol className="list-decimal list-inside space-y-4 text-gray-700">
                 <li>Choose a concept you want to learn.</li>
                 <li>Pretend you are teaching it to a toddler (simplify vocabulary).</li>
                 <li>Identify gaps in your explanation (where you get stuck or use jargon).</li>
                 <li>Go back to the source material to fill those gaps.</li>
                 <li>Simplify and create analogies.</li>
               </ol>
             </div>
             <Card variant="gradient" className="flex items-center justify-center">
                <div className="text-center text-white">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 text-white/80" />
                  <p className="font-bold text-xl">Simplicity = Mastery</p>
                </div>
             </Card>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-6 text-blue-500" />
          <Heading level={2} className="text-blue-900 mb-4">Work Smarter, Not Harder</Heading>
          <p className="text-blue-800 text-lg max-w-2xl mx-auto mb-8">
            Your goal is to cut study time in half while retaining more. Pick one technique today—start with Active Recall—and watch your grades transform.
          </p>
        </div>

      </div>
    </div>
  );
};

export default StudyLessLearnMore;
