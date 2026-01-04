import {
  Brain,
  Eye,
  Ear,
  Hand,
  FileText,
  AlertTriangle,
  Search,
  CheckCircle,
  Zap,
  Layout
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

const EducationMyths = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="error" className="mb-4">Myth Busting</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>The Biggest Myth of Education</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Why "Learning Styles" (VARK) might be holding students back, and what science says actually works.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: The VARK Myth */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<AlertTriangle className="h-5 w-5" />} color="accent" />
            <Heading level={2}>The Myth of Learning Styles</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            The idea that individuals have a preferred way of learning—Visual, Auditory, Reading/Writing, or Kinesthetic (VARK)—is one of the most stubborn myths in education.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <Eye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="font-bold text-gray-700">Visual</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <Ear className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-bold text-gray-700">Auditory</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <FileText className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <div className="font-bold text-gray-700">Read/Write</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <Hand className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="font-bold text-gray-700">Kinesthetic</div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-red-900 text-lg mb-2">The Reality</h3>
            <p className="text-red-800">
              There is <span className="font-bold">no scientific basis</span> for students naturally clustering into these distinct groups. Rigorous studies have shown no significant improvement in learning outcomes when instruction matches a student's self-proclaimed learning style.
            </p>
          </div>
        </section>

        {/* Section 2: Why it Persists */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Search className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>Why the Myth Persists</Heading>
          </div>

          <TwoColumnSection
             left={
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold mb-4">Confirmation Bias</h3>
                 <p className="text-gray-600">
                   People often find learning styles convincing because they <strong>already believe</strong> it to be true. They interpret their experiences to fit this belief.
                 </p>
                 <p className="text-gray-600">
                   For example, a "visual learner" might learn better from a diagram not because they are visual, but because <span className="font-semibold text-purple-600">diagrams are effective for everyone</span> when explaining spatial concepts.
                 </p>
                 <div className="bg-purple-100 p-4 rounded-lg mt-4">
                   <p className="text-sm text-purple-800 italic">
                     "Believing in learning styles can be detrimental, leading teachers to unnecessary worries and students to reluctance in engaging with certain instruction types."
                   </p>
                 </div>
               </div>
             }
             right={
               <img
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                 alt="Group of people discussing"
                 className="rounded-xl shadow-lg"
               />
             }
             reverse
          />
        </section>

        {/* Section 3: What Actually Works */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<CheckCircle className="h-5 w-5" />} color="primary" />
            <Heading level={2}>What Actually Works</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="hover" className="h-full border-t-4 border-t-green-500">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <Layout className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Multimedia Effect</h3>
                  <p className="text-gray-600 mb-4">
                    Multimodal approaches—where words and pictures are presented together—are more effective for <strong>everyone</strong>.
                  </p>
                  <p className="text-sm text-gray-500">
                    Combining narration with visuals (like in a video) boosts retention far more than either alone, regardless of "style".
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="hover" className="h-full border-t-4 border-t-blue-500">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Active Engagement</h3>
                  <p className="text-gray-600 mb-4">
                    The most important factor is what happens <strong>inside the learner's head</strong>.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Active thinking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Problem-solving
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Imagining different scenarios
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <Zap className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
          <Heading level={2} className="text-white mb-4">Think Critically</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Don't limit yourself to a label. Use diverse search queries, seek multiple perspectives, and embrace evidence-based learning strategies.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button variant="primary" size="lg">Explore More Articles</Button>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default EducationMyths;
