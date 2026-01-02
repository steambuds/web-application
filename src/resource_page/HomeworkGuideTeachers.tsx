import {
  Scale,
  Clock,
  Users,
  Zap,
  Target,
  PenTool
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

const HomeworkGuideTeachers = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="secondary" className="mb-4">Teacher Resources</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Rethinking Homework</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            A guide to designing assignments that promote equity, autonomy, and genuine learning—without the burnout.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: The Quality vs Quantity Debate */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Scale className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Quality Over Quantity</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            The traditional belief that "more practice equals better mastery" has a breaking point. Research indicates a point of diminishing returns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">The 10-Minute Rule</h3>
                  <p className="text-gray-600">
                    A widely accepted standard is 10 minutes of homework per grade level per night. (e.g., 10 mins for 1st grade, 60 mins for 6th grade).
                  </p>
                  <p className="text-sm text-blue-600 mt-2 font-semibold">
                    Are your assignments fitting this timeframe for the average student?
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg text-red-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">The 4-Hour Ceiling</h3>
                  <p className="text-gray-600">
                    For high schoolers, benefits plateau after about 4 hours per week. Beyond that, stress increases and performance often degrades due to lack of sleep.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 2: The Equity Lens */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Users className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>The Equity Gap</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Who is Doing the Homework?</h3>
                <p className="text-gray-600">
                  Homework often highlights inequality. Some students have educated parents, quiet rooms, and high-speed internet. Others have none of these.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-purple-900 font-medium">
                    If a student cannot complete the work independently, it is not an assessment of the student—it's an assessment of their home privileges.
                  </p>
                </div>
                <p className="text-gray-600">
                  <strong>Solution:</strong> Design tasks that can be completed without parental help or expensive resources.
                </p>
              </div>
            }
            right={
              <img
                src="https://images.unsplash.com/photo-1427504746696-ea3093607dbe?auto=format&fit=crop&q=80&w=800"
                alt="Classroom diverse students"
                className="rounded-xl shadow-lg"
              />
            }
            reverse
          />
        </section>

        {/* Section 3: Meaningful Design */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<PenTool className="h-5 w-5" />} color="accent" />
            <Heading level={2}>Designing Better Assignments</Heading>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4">Instead of...</th>
                  <th className="p-4">Try...</th>
                  <th className="p-4">Why?</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-red-600 font-medium">50 Repetitive Math Problems</td>
                  <td className="p-4 text-green-600 font-medium">5 Deep Application Problems</td>
                  <td className="p-4 text-gray-600">Proves mastery without fatigue.</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-red-600 font-medium">Copying Definitions</td>
                  <td className="p-4 text-green-600 font-medium">Find Real-World Examples</td>
                  <td className="p-4 text-gray-600">Connects learning to life context.</td>
                </tr>
                <tr>
                  <td className="p-4 text-red-600 font-medium">"Finish Classwork"</td>
                  <td className="p-4 text-green-600 font-medium">Inverted Classroom (Prep)</td>
                  <td className="p-4 text-gray-600">Uses home time for low-cognitive prep, class time for high-cognitive work.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <Target className="w-12 h-12 mx-auto mb-6 text-green-400" />
          <Heading level={2} className="text-white mb-4">Audit Your Assignments</Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Next time you assign homework, ask: "Can my student do this alone? Is it necessary? Will it take less than 20 minutes?"
          </p>
          <Button variant="primary" size="lg">
            Download Assessment Rubric
          </Button>
        </div>

      </div>
    </div>
  );
};

export default HomeworkGuideTeachers;
