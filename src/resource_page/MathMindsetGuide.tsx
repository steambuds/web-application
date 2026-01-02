import {
  Brain,
  Unlock,
  TrendingUp,
  XCircle,
  CheckCircle,
  Zap,
  Target,
  Smile
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection,
} from '../components/ui';

const MathMindsetGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="primary" className="mb-4">Student Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Why "I'm Not a Math Person" is a Lie</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            The science of Neuroplasticity proves that no one is "biologically bad" at math. Here is how to rewire your brain for success.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Myth of the "Math Gene" */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Brain className="h-5 w-5" />} color="accent" />
            <Heading level={2}>The Brain is a Muscle</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            For decades, people believed intelligence was fixed at birth. Modern neuroscience (specifically <strong>Neuroplasticity</strong>) has proven this wrong. Your brain is physically changeable, like a muscle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="hover" className="border-l-4 border-l-red-500">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg text-red-600">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Fixed Mindset</h3>
                  <p className="text-gray-600 mb-2">"I was born bad at math."</p>
                  <p className="text-gray-600 mb-2">"If I have to try hard, I must not be smart."</p>
                  <p className="text-gray-600">"Failure means I reached my limit."</p>
                </div>
              </div>
            </Card>

            <Card variant="hover" className="border-l-4 border-l-green-500">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Growth Mindset</h3>
                  <p className="text-gray-600 mb-2">"Math is a skill I can build with practice."</p>
                  <p className="text-gray-600 mb-2">"Effort makes me smarter."</p>
                  <p className="text-gray-600">"Failure is just data for learning."</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 2: The Power of "Yet" */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Unlock className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>The Power of "Yet"</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">A Three-Letter Magic Word</h3>
                <p className="text-gray-600">
                  Carol Dweck, a Stanford psychologist, found that adding "yet" to the end of a negative sentence changes your brain's chemistry.
                </p>
                <div className="bg-purple-50 p-6 rounded-xl space-y-4">
                   <div className="flex items-center gap-3">
                     <span className="text-red-500 font-bold">I don't understand fractions.</span>
                     <span className="text-gray-400">→</span>
                     <span className="text-green-600 font-bold">I don't understand fractions... YET.</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <span className="text-red-500 font-bold">This is impossible.</span>
                     <span className="text-gray-400">→</span>
                     <span className="text-green-600 font-bold">I haven't solved it... YET.</span>
                   </div>
                </div>
                <p className="text-gray-600">
                  It signals to your brain that the current struggle is temporary, not permanent.
                </p>
              </div>
            }
            right={
              <div className="h-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center shadow-lg">
                 <TrendingUp className="w-20 h-20 mb-6 text-white/90" />
                 <h3 className="text-3xl font-bold mb-2">Neurons Connect</h3>
                 <p className="text-blue-100">Every time you push through a hard problem, new synapses form. You are literally building a better brain.</p>
              </div>
            }
            reverse
          />
        </section>

        {/* Section 3: Struggle is Good */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Zap className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Why Mistakes are Necessary</Heading>
          </div>
          
          <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-200 rounded-full text-yellow-800">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-900 mb-2">The Spark of Growth</h3>
                <p className="text-yellow-800 text-lg">
                  Research shows that your brain grows <strong>more</strong> when you make a mistake than when you get an answer right easily.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Card className="text-center p-6">
               <h3 className="font-bold text-lg mb-2 text-gray-900">Easy Success</h3>
               <p className="text-gray-600 text-sm">
                 If you get 100% on every test without trying, you aren't learning. You are just proving what you already know.
               </p>
             </Card>
             <Card className="text-center p-6 bg-blue-50 border-blue-200">
               <h3 className="font-bold text-lg mb-2 text-blue-900">The Struggle Zone</h3>
               <p className="text-blue-800 text-sm">
                 That feeling of frustration? That's the feeling of your neurons firing to find a new pathway. Embrace it.
               </p>
             </Card>
             <Card className="text-center p-6">
               <h3 className="font-bold text-lg mb-2 text-gray-900">The Reward</h3>
               <p className="text-gray-600 text-sm">
                 Once the connection is made, the skill becomes automatic. What was once "impossible" becomes "easy."
               </p>
             </Card>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <Smile className="w-12 h-12 mx-auto mb-6 text-green-400" />
          <Heading level={2} className="text-white mb-4">You Are a Math Person</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            The only requirement to be a "math person" is to be a person who does math. Stop saying "I can't." Start saying "I'm learning."
          </p>
        </div>

      </div>
    </div>
  );
};

export default MathMindsetGuide;
