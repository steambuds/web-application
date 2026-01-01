import {
  Users,
  Brain,
  Hammer,
  Palette,
  Search,
  MessageCircle,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Layers,
  Target
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

const PedagogicalExcellence = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="secondary" className="mb-4">Teacher Resources</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Pedagogical Excellence</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            An Integrated Framework for Student Personas, Class Dynamics, and Lesson Quality Assessment.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Part I: Understanding the Learner */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Users className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Part I: Understanding the Learner</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Decoding student potential through the RIASEC model and Bloom's Taxonomy. Understanding your students is the first step towards effective teaching.
          </p>

          <Heading level={3} className="mb-6">The RIASEC Personality Model</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="h-full">
              <div className="flex items-center gap-2 mb-3">
                <Hammer className="text-electric-blue-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Realistic</h3>
              </div>
              <p className="text-gray-600">The "Practical Doers" who prefer hands-on activities and tangible outcomes.</p>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-2 mb-3">
                <Search className="text-cyber-purple-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Investigative</h3>
              </div>
              <p className="text-gray-600">The "Knowledge Seekers" driven by logic, theories, and discovery.</p>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="text-hot-pink-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Artistic</h3>
              </div>
              <p className="text-gray-600">The "Expressive Creators" who thrive in unstructured and creative environments.</p>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-electric-blue-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Social</h3>
              </div>
              <p className="text-gray-600">The "Helpers" who find meaning in teaching, counseling, and teamwork.</p>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="text-cyber-purple-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Enterprising</h3>
              </div>
              <p className="text-gray-600">The "Persuaders" who are ambitious, energetic, and leadership-oriented.</p>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="text-hot-pink-500 w-6 h-6" />
                <h3 className="font-bold text-lg">Conventional</h3>
              </div>
              <p className="text-gray-600">The "Organizers" who value structure, rules, and data precision.</p>
            </Card>
          </div>

          <Heading level={3} className="mb-6">Profiling the Dominant Personas</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-yellow-500 w-8 h-8" />
                <h4 className="font-bold text-xl text-gray-900">Expressive Creators & Knowledge Seekers</h4>
              </div>
              <p className="text-gray-700">
                High cognitive engagement. They demand <span className="font-bold text-yellow-600">open-ended challenges</span> and deep theoretical underpinnings. They are bored by rote memorization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-red-500 w-8 h-8" />
                <h4 className="font-bold text-xl text-gray-900">Practical Doers & Ambitious Mismatch</h4>
              </div>
              <p className="text-gray-700">
                Focus on utility and status. They need <span className="font-bold text-red-600">real-world application</span> and clear pathways to success, or they risk becoming disengaged "mismatches."
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <Heading level={3} className="mb-4 text-blue-900">Optimum Class Size for Efficiency</Heading>
            <div className="text-6xl font-bold text-blue-600 mb-2 font-display">15-20</div>
            <div className="text-xl font-medium text-blue-800 mb-6">Students per Class</div>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Research indicates that classes in the 15-20 range provide the <span className="font-bold">ideal balance</span> between social interaction and individualized teacher attention. This allows for higher engagement per capita, faster feedback loops, and easier implementation of differentiation.
            </p>
          </div>
        </section>

        {/* Part II: Assessment and Scaffolding */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Layers className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>Part II: Assessment and Scaffolding</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Strategies for growth and supportive learning structures. How do we support students as they climb the mountain of knowledge?
          </p>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">The Role of Scaffolding</h3>
                <p className="text-gray-600">
                  Scaffolding involves providing students with just enough assistance to perform a task within their <strong>Zone of Proximal Development</strong>.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Modeling and demonstration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Graphic organizers and hints
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Gradual release of responsibility
                  </li>
                </ul>
                <p className="text-gray-600 italic mt-4">
                  Crucially, scaffolds must be <span className="text-purple-600 font-bold">faded</span> as learners gain autonomy.
                </p>
              </div>
            }
            right={
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800"
                alt="Scaffolding concept illustration"
                className="rounded-xl shadow-lg"
              />
            }
            reverse
          />

          <div className="mt-12">
            <Heading level={3} className="mb-6">Cognitive Demand: The Bloom's Arc</Heading>
            <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
              <div className="relative z-10">
                <div className="h-64 flex items-end justify-between px-4 pb-8 border-b-2 border-gray-300">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-8 bg-blue-200 rounded-t-md"></div>
                    <span className="text-sm font-medium">Remember</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-16 bg-blue-300 rounded-t-md"></div>
                    <span className="text-sm font-medium">Understand</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-24 bg-blue-400 rounded-t-md"></div>
                    <span className="text-sm font-medium">Apply</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-32 bg-purple-400 rounded-t-md"></div>
                    <span className="text-sm font-medium">Analyze</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-48 bg-purple-500 rounded-t-md"></div>
                    <span className="text-sm font-medium">Evaluate</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-60 bg-pink-500 rounded-t-md"></div>
                    <span className="text-sm font-medium font-bold text-pink-700">Create</span>
                  </div>
                </div>
                <p className="text-center mt-6 text-lg font-medium text-gray-700">
                  Effective lessons must transition students from passive <span className="text-blue-600 font-bold">understanding</span> to active <span className="text-pink-600 font-bold">creation</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Heading level={3} className="mb-6">Core Assessment Techniques</Heading>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-4">Type</th>
                    <th className="p-4">Goal</th>
                    <th className="p-4">Examples</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900 bg-gray-50">Formative</td>
                    <td className="p-4 text-gray-600">Monitor student learning to provide ongoing feedback.</td>
                    <td className="p-4 text-gray-600">Exit tickets, think-pair-share, quizzes.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900 bg-gray-50">Summative</td>
                    <td className="p-4 text-gray-600">Evaluate student learning at the end of an instructional unit.</td>
                    <td className="p-4 text-gray-600">Final projects, standardized tests.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900 bg-gray-50">Diagnostic</td>
                    <td className="p-4 text-gray-600">Identify strengths and weaknesses before instruction.</td>
                    <td className="p-4 text-gray-600">Pre-tests, self-assessments.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900 bg-gray-50">Ipsative</td>
                    <td className="p-4 text-gray-600">Compare a student's current performance against their past.</td>
                    <td className="p-4 text-gray-600">Portfolio progress, personal best goals.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Part III: Checking Lesson Quality */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<CheckCircle className="h-5 w-5" />} color="accent" />
            <Heading level={2}>Part III: Checking Lesson Quality</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            A 5-Point rubric for instructional evaluation. Are we hitting the mark?
          </p>

          <Heading level={3} className="mb-6">The 5 Pillars of Lesson Quality</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">1. Persona Resonance</h4>
                  <p className="text-gray-600 text-sm">Does the plan engage the <span className="font-semibold text-yellow-600">Creator</span>, <span className="font-semibold text-red-600">Doer</span>, and <span className="font-semibold text-blue-600">Seeker</span> personas effectively?</p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">2. Cognitive Demand</h4>
                  <p className="text-gray-600 text-sm">Does it challenge beyond "Understand" towards <span className="font-semibold text-yellow-600">Apply</span> and <span className="font-semibold text-pink-600">Create</span>?</p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">3. Diff. & Scaffolding</h4>
                  <p className="text-gray-600 text-sm">Are there <span className="font-semibold text-yellow-600">variations</span> for different ability and confidence levels?</p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">4. Tangibility</h4>
                  <p className="text-gray-600 text-sm">Does it culminate in a <span className="font-semibold text-yellow-600">concrete product</span> or action, rather than just talk?</p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">5. Assessment</h4>
                  <p className="text-gray-600 text-sm">How do we measure the fostering of <span className="font-semibold text-yellow-600">curiosity</span> and specific objectives?</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <MessageCircle className="w-12 h-12 mx-auto mb-6 text-purple-400" />
          <Heading level={2} className="text-white mb-4">Questions & Discussion</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Ensuring every lesson resonates, challenges, and produces tangible growth.
          </p>
          <Button variant="primary" size="lg">
            Download Framework PDF
          </Button>
        </div>

      </div>
    </div>
  );
};

export default PedagogicalExcellence;
