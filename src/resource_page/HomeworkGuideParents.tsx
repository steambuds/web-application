import { 
  Clock, 
  Smile, 
  Brain, 
  Home, 
  AlertTriangle, 
  Battery, 
  Sun,
  Heart,
  BookOpen
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection,
  Button
} from '../components/ui';

const HomeworkGuideParents = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="accent" className="mb-4">Parenting Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>The "Busy Student" Trap</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Why more homework and tuition doesn't always equal better grades—and why your child needs time to just "be."
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: The Indian Context */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Clock className="h-5 w-5" />} color="accent" />
            <Heading level={2}>The Double Shift: School + Tuition</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            In many Indian households, a child's day starts at 6 AM and ends at 10 PM. Between school, private tuition, and the homework from <em>both</em>, students are working longer hours than most corporate adults.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="flex items-center gap-3 mb-4 text-red-700 font-bold text-xl">
                <AlertTriangle className="w-6 h-6" />
                <h3>The Misconception</h3>
              </div>
              <p className="text-red-800">
                "If they aren't studying, they are wasting time." Many parents feel anxiety seeing their child 'free', fearing they will fall behind. This leads to enrolling them in multiple classes just to keep them "safely busy."
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center gap-3 mb-4 text-green-700 font-bold text-xl">
                <Brain className="w-6 h-6" />
                <h3>The Reality</h3>
              </div>
              <p className="text-green-800">
                Research shows that after about <strong>4 hours of homework per week</strong>, the academic benefits flatten out. Beyond that, it leads to burnout, sleep deprivation, and actually <em>lowers</em> cognitive performance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Why Play Matters */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Sun className="h-5 w-5" />} color="accent" />
            <Heading level={2}>Play is Serious Business</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">It's Not Just 'Time Pass'</h3>
                <p className="text-gray-600">
                  When children play unstructured games, they aren't just having fun. They are developing:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Executive Function:</strong> Planning and self-regulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Social Skills:</strong> Negotiation and empathy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Stress Relief:</strong> Lowering cortisol levels</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic mt-4">
                  Sending a child to their room to "study undistracted" often isolates them from the emotional support they need.
                </p>
              </div>
            }
            right={
              <img
                src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=800"
                alt="Children playing outdoors"
                className="rounded-xl shadow-lg"
              />
            }
            reverse
          />
        </section>

        {/* Section 3: The Purpose of Homework */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<BookOpen className="h-5 w-5" />} color="primary" />
            <Heading level={2}>When is Homework Good?</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Homework isn't the enemy. When designed well, it reinforces what was learned in class. But it becomes toxic when it replaces sleep, family time, and hobbies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Burnout Limit</h3>
              <p className="text-gray-600 text-sm">
                For elementary students, there is almost <strong>zero correlation</strong> between homework and academic achievement. Focus on reading for pleasure instead.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Home Environment</h3>
              <p className="text-gray-600 text-sm">
                Does your child have to choose between sleep and homework? If so, the balance is broken. A tired brain cannot learn.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Connection First</h3>
              <p className="text-gray-600 text-sm">
                Don't let "Did you finish your homework?" be the only question you ask. Try "What made you laugh today?" first.
              </p>
            </Card>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <Smile className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
          <Heading level={2} className="text-white mb-4">A Challenge for Parents</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            This week, try cutting one tuition class or setting a strict "homework stop time" at 8 PM. Observe the change in your child's mood and energy.
          </p>
          {/* <Button variant="primary" size="lg">
            Read: The Science of Play
          </Button> */}
        </div>

      </div>
    </div>
  );
};

export default HomeworkGuideParents;
