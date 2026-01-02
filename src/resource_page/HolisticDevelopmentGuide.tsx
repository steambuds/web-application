import {
  Brain,
  Heart,
  Clock,
  Leaf,
  Activity,
  Shield,
  Coins,
  Utensils,
  Smile,
  Users,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection,
} from '../components/ui';

const HolisticDevelopmentGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="success" className="mb-4">Parenting Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Beyond The Textbook</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Why rote memorization isn't enough, and how you can prepare your child for real life through essential skills like empathy, finance, and resilience.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Missing Skills */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Brain className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>The "Whole Child" Checklist</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Success in the 21st century requires more than high marks. Is your child developing these crucial life competencies?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card variant="hover">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="text-yellow-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Cognitive Skills</h3>
              </div>
              <p className="text-gray-600 text-sm">Critical thinking, problem-solving, and curiosity. Moving beyond "what" to "how" and "why."</p>
            </Card>
            <Card variant="hover">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="text-pink-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Emotional Skills</h3>
              </div>
              <p className="text-gray-600 text-sm">Empathy, self-regulation, and handling failure. The foundation of mental health.</p>
            </Card>
            <Card variant="hover">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-blue-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Time Management</h3>
              </div>
              <p className="text-gray-600 text-sm">Prioritizing tasks, avoiding procrastination, and balancing work with rest.</p>
            </Card>
            <Card variant="hover">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="text-green-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Responsibility</h3>
              </div>
              <p className="text-gray-600 text-sm">Environmental stewardship, owning mistakes, and caring for shared spaces.</p>
            </Card>
            <Card variant="hover">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="text-red-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Healthy Habits</h3>
              </div>
              <p className="text-gray-600 text-sm">Understanding nutrition, the importance of exercise, and sleep hygiene.</p>
            </Card>
            <Card variant="hover">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-gray-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Resilience</h3>
              </div>
              <p className="text-gray-600 text-sm">Bouncing back from setbacks. Viewing failure as a stepping stone, not a dead end.</p>
            </Card>
          </div>
        </section>

        {/* Section 2: Practical Parenting */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Users className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Home is the First School</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Involve Them in Real Life</h3>
                <p className="text-gray-600">
                  You don't need a special class to teach these skills. Daily life provides the best curriculum.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600 mt-1">
                      <Coins className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Financial Literacy</h4>
                      <p className="text-gray-600 text-sm">Give a weekly allowance for "wants" vs "needs." Let them budget for a toy. If they overspend, let them experience the lack of funds.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600 mt-1">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Cooking & Chores</h4>
                      <p className="text-gray-600 text-sm">Cooking teaches fractions, chemistry, and patience. Chores teach contribution to the family unit.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mt-1">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Emotional Check-ins</h4>
                      <p className="text-gray-600 text-sm">Instead of "What did you score?", ask "What was hard for you today? How did you handle it?"</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            right={
              <img
                src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80&w=800"
                alt="Parent and child gardening together"
                className="rounded-xl shadow-lg"
              />
            }
            reverse
          />
        </section>

        {/* Section 3: The "Memory" Trap */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Brain className="h-5 w-5" />} color="accent" />
            <Heading level={2}>Why Memorization Isn't Enough</Heading>
          </div>
          
          <div className="bg-red-50 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="font-bold text-xl text-red-900 mb-4">The "Parrot" Problem</h3>
              <p className="text-red-800 mb-6">
                Memorizing answers might get marks today, but it fails tomorrow. In a world of AI and Google, <strong>knowing facts</strong> is less valuable than <strong>connecting ideas</strong>.
              </p>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>AI can recite facts; humans must interpret them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Innovation comes from creativity, not repetition.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Real-world problems rarely have multiple-choice answers.</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center shadow-md p-8 text-center">
                 <p className="text-2xl font-display font-bold text-gray-400">
                   "Education is what remains after one has forgotten what one has learned in school."
                 </p>
                 <p className="text-sm text-gray-500 mt-4">- Albert Einstein</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 text-green-400" />
          <Heading level={2} className="text-white mb-4">Start Small Today</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Pick one skill this week. Maybe it's "folding their own clothes" or "managing a 100 Rs budget." Watch them grow confident, not just compliant.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HolisticDevelopmentGuide;
