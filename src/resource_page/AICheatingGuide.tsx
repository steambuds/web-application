import {
  Bot,
  AlertTriangle,
  MessageSquare,
  Search,
  PenTool,
  Brain,
  ShieldAlert
} from 'lucide-react';
import {
  Card,
  Heading,
  Badge,
  GradientText,
  IconBox,
  TwoColumnSection,
} from '../components/ui';

const AICheatingGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="accent" className="mb-4">Student Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Is AI Cheating?</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            How to use ChatGPT as a personal tutor, not a writer. Turn AI into a superpower for learning, rather than a crutch that weakens your skills.
          </p>
        </div>
      </div>

      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Trap */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<AlertTriangle className="h-5 w-5" />} color="accent" />
            <Heading level={2}>The Copy-Paste Trap</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Everyone uses AI, but most use it wrong. When you ask AI to "write an essay on climate change" and hand it in, you haven't learned anything. You've just outsourced your thinking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="flex items-center gap-3 mb-4 text-red-700 font-bold text-xl">
                <ShieldAlert className="w-6 h-6" />
                <h3>The "Crutch" Method</h3>
              </div>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span>"Write a 500-word essay for me."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span>"Solve this math problem." (without explanation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span>Copy-pasting answers directly.</span>
                </li>
              </ul>
              <p className="text-sm text-red-600 mt-4 italic">
                Result: You get the grade, but your brain muscles atrophy.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center gap-3 mb-4 text-green-700 font-bold text-xl">
                <Brain className="w-6 h-6" />
                <h3>The "Superpower" Method</h3>
              </div>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✅</span>
                  <span>"Critique my argument for weaknesses."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✅</span>
                  <span>"Explain this concept like I'm 12."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✅</span>
                  <span>"Quiz me on these three topics."</span>
                </li>
              </ul>
              <p className="text-sm text-green-600 mt-4 italic">
                Result: You learn faster and deeper than ever before.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Prompt Engineering for Students */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Bot className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Prompt Engineering 101</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            The quality of the answer depends on the quality of your question. Here are three prompts to transform your study sessions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card variant="hover">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 w-fit mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Socratic Tutor</h3>
              <p className="text-sm text-gray-600 mb-4">
                Don't ask for the answer. Ask it to guide you.
              </p>
              <div className="bg-gray-100 p-3 rounded text-xs text-gray-700 font-mono">
                "I'm studying [Topic]. Don't give me the answer, but ask me questions to help me figure it out myself."
              </div>
            </Card>

            <Card variant="hover">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600 w-fit mb-4">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Editor</h3>
              <p className="text-sm text-gray-600 mb-4">
                Use it to improve <em>your</em> writing, not replace it.
              </p>
              <div className="bg-gray-100 p-3 rounded text-xs text-gray-700 font-mono">
                "Here is my draft. Roast it. Tell me where my logic is weak and how to make the introduction punchier."
              </div>
            </Card>

            <Card variant="hover">
              <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600 w-fit mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Simplifier</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stuck on jargon? Break it down.
              </p>
              <div className="bg-gray-100 p-3 rounded text-xs text-gray-700 font-mono">
                "Explain Quantum Entanglement using an analogy about socks. Treat me like a 5th grader."
              </div>
            </Card>
          </div>
        </section>

        {/* Section 3: The Skill of Verification */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Search className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>Trust, but Verify</Heading>
          </div>
          
          <TwoColumnSection
             left={
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold mb-4">AI Hallucinates</h3>
                 <p className="text-gray-600">
                   Large Language Models (LLMs) are like confident improvisors. They can sound 100% sure while being 100% wrong.
                 </p>
                 <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                   <p className="text-yellow-900">
                     <strong>Rule of Thumb:</strong> Never use a fact, date, or citation from AI without checking a second source.
                   </p>
                 </div>
                 <p className="text-gray-600">
                   The skill of the future isn't "knowing" answers—it's <strong>verifying</strong> them. If you can catch the AI in a mistake, you truly understand the topic.
                 </p>
               </div>
             }
             right={
               <div className="bg-gray-900 p-6 rounded-xl text-green-400 font-mono text-sm leading-relaxed shadow-lg">
                 <span className="text-gray-500">User:</span> What is the capital of Australia?<br/><br/>
                 <span className="text-blue-400">AI:</span> The capital of Australia is Sydney.<br/><br/>
                 <span className="text-gray-500">User:</span> (Checks Google) Actually, it's Canberra.<br/><br/>
                 <span className="text-blue-400">AI:</span> You are correct. My apologies. The capital is Canberra.<br/><br/>
                 <span className="text-white border-t border-gray-700 pt-4 block mt-4">
                   *Always check facts. The bot is a tool, not an oracle.*
                 </span>
               </div>
             }
          />
        </section>

        {/* Conclusion */}
        <div className="bg-purple-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <Bot className="w-12 h-12 mx-auto mb-6 text-purple-300" />
          <Heading level={2} className="text-white mb-4">Don't Be a Robot</Heading>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto mb-8">
            The world doesn't need more average writers; AI has that covered. The world needs critical thinkers who can command the machines. Use AI to upgrade your mind, not replace it.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AICheatingGuide;
