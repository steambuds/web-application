import {
  Smartphone,
  Zap,
  Clock,
  Unlock,
  Eye,
  Activity,
  Shield,
  Coffee,
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

const DopamineDetoxGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="outline" color="error" className="mb-4">Student Guide</Badge>
          <Heading level={1} className="mb-4">
            <GradientText>Your Brain on Scrolling</GradientText>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl">
            Why you can scroll Reels for 2 hours but can't read a textbook for 10 minutes. And how to fight back against the "Attention Economy."
          </p>
        </div>
      </div>

      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: The Hook */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Smartphone className="h-5 w-5" />} color="accent" />
            <Heading level={2}>It's Not Your Fault</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            You aren't "lazy." You are up against thousands of engineers at TikTok, Instagram, and YouTube whose only job is to hack your brain's reward system. They use a psychological principle called the <strong>Variable Reward Schedule</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="flex items-center gap-3 mb-4 text-red-700 font-bold text-xl">
                <Zap className="w-6 h-6" />
                <h3>The Dopamine Loop</h3>
              </div>
              <p className="text-red-800 mb-4">
                Every time you swipe, your brain gets a tiny hit of dopamine (the pleasure chemical). It's exactly like a slot machine. You never know if the next video will be funny, so you keep "pulling the lever" (swiping) to find out.
              </p>
              <div className="bg-white p-3 rounded text-sm text-red-700 italic border border-red-200">
                "Just one more video..." turns into 2 AM. This is biological hijacking.
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4 text-blue-700 font-bold text-xl">
                <Activity className="w-6 h-6" />
                <h3>The Cost: "Popcorn Brain"</h3>
              </div>
              <p className="text-blue-800 mb-4">
                Constant scrolling trains your brain to expect a reward every 15 seconds. Real life—like reading, studying, or even talking to friends—feels boring because it moves too slow. This state of constant distraction is often called <strong>"Popcorn Brain."</strong>
              </p>
              <div className="bg-white p-3 rounded text-sm text-blue-700 italic border border-blue-200">
                Your focus isn't broken; it's just trained on the wrong thing.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Deep Work */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Shield className="h-5 w-5" />} color="primary" />
            <Heading level={2}>The Superpower: Deep Work</Heading>
          </div>

          <TwoColumnSection
            left={
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Why Focus is the New IQ</h3>
                <p className="text-gray-600">
                  <strong>Cal Newport</strong>, author of <em>Deep Work</em>, argues that the ability to focus without distraction is becoming increasingly rare and valuable. In a world of shallow scrolling, the person who can go "deep" wins.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
                  <p className="text-yellow-900 font-medium">
                    "If you can't focus, you can't learn hard things. If you can't learn hard things, you can't thrive in the 21st century."
                  </p>
                </div>
                <p className="text-gray-600 mt-4">
                  Reclaiming your focus isn't just about grades; it's about reclaiming your <strong>life</strong>. It allows you to create, not just consume.
                </p>
              </div>
            }
            right={
              <div className="bg-gray-900 rounded-xl p-8 text-white h-full flex flex-col justify-center text-center">
                 <Eye className="w-16 h-16 mx-auto mb-6 text-green-400" />
                 <h3 className="text-2xl font-bold mb-4">The Attention Economy</h3>
                 <p className="text-gray-400">
                   If you aren't paying for the product, you are the product. Your attention is being sold to advertisers. Take it back.
                 </p>
              </div>
            }
          />
        </section>

        {/* Section 3: Practical Hacks */}
        <section className="pt-12 border-t border-gray-200">
           <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<Unlock className="h-5 w-5" />} color="secondary" />
            <Heading level={2}>How to Fight Back</Heading>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            You don't need to throw away your phone. You just need to set boundaries. Here are three evidence-based strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card variant="hover">
              <div className="p-2 bg-red-100 rounded-lg text-red-600 w-fit mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">The Pomodoro Timer</h3>
              <p className="text-sm text-gray-600 mb-4">
                Work for 25 minutes, break for 5. Your brain can handle "boring" if it knows a break is coming. It lowers the barrier to starting.
              </p>
            </Card>

            <Card variant="hover">
              <div className="p-2 bg-gray-100 rounded-lg text-gray-600 w-fit mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Greyscale Mode</h3>
              <p className="text-sm text-gray-600 mb-4">
                Turn your screen black and white in settings. Suddenly, Instagram looks a lot less appetizing. It strips away the visual "sugar" that triggers dopamine.
              </p>
            </Card>

            <Card variant="hover">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 w-fit mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">"Phone Jail"</h3>
              <p className="text-sm text-gray-600 mb-4">
                Put your phone in another room while studying. "Out of sight, out of mind" is a scientific fact. It reduces the "cognitive load" of resisting temptation.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 4: External Resources */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={<BookOpen className="h-5 w-5" />} color="primary" />
            <Heading level={2}>Read More from the Masters</Heading>
          </div>
          <p className="text-gray-700 mb-6">
            Dive deeper into the science of focus and digital minimalism with these resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a 
               href="https://calnewport.com/blog/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 Cal Newport's Blog <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 The author of <em>Deep Work</em> and <em>Digital Minimalism</em> writes about focus in a distracted world.
               </p>
             </a>

             <a 
               href="https://hubermanlab.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
             >
               <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary flex items-center gap-2">
                 Huberman Lab <ExternalLink className="w-4 h-4" />
               </h3>
               <p className="text-gray-600 mt-2 text-sm">
                 Stanford Neuroscientist Andrew Huberman explains the biology of dopamine and how to control it.
               </p>
             </a>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-red-500 text-white rounded-2xl p-8 md:p-12 text-center mt-8">
          <Activity className="w-12 h-12 mx-auto mb-6 text-red-200" />
          <Heading level={2} className="text-white mb-4">Be Boring</Heading>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
             Embrace boredom. It's in the quiet moments—not the noisy ones—that your best ideas will come. Reclaim your brain.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DopamineDetoxGuide;