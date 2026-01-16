import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GraduationCap, BookOpen, Users, Building2, Lightbulb, Rocket, Target, Brain, Sparkles, ArrowRight } from 'lucide-react';
import logoImage from '../images/steambuds_logo.svg';

interface AnimatedIntroProps {
  onAnimationComplete: () => void;
  skipAnimation?: boolean;
}

const SKILLS = [
  { name: 'Critical Thinking', icon: Brain },
  { name: 'Creativity', icon: Lightbulb },
  { name: 'Collaboration', icon: Users },
  { name: 'Communication', icon: Sparkles },
  { name: 'Digital Literacy', icon: Rocket },
  { name: 'Problem Solving', icon: Target }
];

const USER_TYPES = [
  { id: 'student', label: 'Student', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100', position: 'top-left' },
  { id: 'guardian', label: 'Guardian', icon: Users, color: 'text-green-600', bg: 'bg-green-100', position: 'top-right' },
  { id: 'teacher', label: 'Teacher', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-100', position: 'bottom-left' },
  { id: 'school', label: 'School', icon: Building2, color: 'text-orange-600', bg: 'bg-orange-100', position: 'bottom-right' },
];

const AnimatedIntro: React.FC<AnimatedIntroProps> = ({ onAnimationComplete, skipAnimation = false }) => {
  const [stage, setStage] = useState(skipAnimation ? 4 : 0);
  const timersRef = useRef<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation Stages:
  // 0: Initial Void (Logo pulse)
  // 1: Ignite (Logo glow expands, background shifts)
  // 2: Create (Skills emerge from chaos to order)
  // 3: Master (User types expand to corners)
  // 4: Ascend (User cards fly to header, fade background)

  const clearTimers = () => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  };

  const startAnimation = useCallback(() => {
    clearTimers();
    const timeline = [
      { delay: 800, stage: 1 },   // Ignite
      { delay: 2500, stage: 2 },  // Create (Skills)
      { delay: 5000, stage: 3 },  // Master (Users)
      { delay: 7500, stage: 4 },  // Ascend (Fly to header)
    ];

    timeline.forEach(({ delay, stage: s }) => {
      const timer = window.setTimeout(() => {
        setStage(s);
        if (s === 4) {
          // Animation complete - cards reached header
          setTimeout(onAnimationComplete, 1500); // Allow time for fly animation
        }
      }, delay);
      timersRef.current.push(timer);
    });
  }, [onAnimationComplete]);

  useEffect(() => {
    if (skipAnimation) {
      // If animation already played this session, immediately show final state
      onAnimationComplete();
    } else {
      // Otherwise run the animation
      startAnimation();
    }
    return clearTimers;
  }, [startAnimation, skipAnimation, onAnimationComplete]);

  const handleSkip = useCallback(() => {
    clearTimers();
    setStage(4); // Jump to final state (cards fly to header)
    setTimeout(onAnimationComplete, 1500); // Complete after fly animation
  }, [onAnimationComplete]);

  // Handle scroll during animation - skip to final state and enable scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (stage < 4) {
        // Don't prevent default - let scroll happen after skipping
        handleSkip();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip on arrow keys, page down, space, or escape
      if (stage < 4 && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Escape'].includes(e.key)) {
        handleSkip();
      }
    };

    // Only add listeners if animation is still running
    if (stage < 4) {
      window.addEventListener('wheel', handleScroll, { passive: true });
      window.addEventListener('touchmove', handleScroll, { passive: true });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [stage, handleSkip]);

  // Parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="h-screen w-full snap-start snap-always flex items-center justify-center bg-white overflow-hidden relative">

      {/* Dynamic Background */}
      <div
        className="absolute inset-0 transition-all duration-[2000ms] ease-in-out"
        style={{
          background: stage === 0
            ? 'linear-gradient(135deg, #fdfbf7 0%, #fff 100%)'
            : stage === 4
            ? 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)' // Lighter background at final state
            : 'linear-gradient(135deg, #fff0f5 0%, #e9e1f7 50%, #fff4ec 100%)', // Brand gradients
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`
        }}
      />

      {/* Decorative Blobs */}
      <div className={`absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] transition-all duration-[2000ms] ${stage >= 1 && stage < 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-[100px] transition-all duration-[2000ms] ${stage >= 1 && stage < 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center">

        {/* === CENTRAL LOGO HUB === */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* Ripple Effect */}
          <div className={`absolute inset-0 bg-primary/20 rounded-full animate-ping ${stage >= 1 && stage < 3 ? 'opacity-100' : 'opacity-0'}`} />

          <div className={`relative z-20 bg-white rounded-full shadow-2xl p-6 transition-all duration-[1000ms] cubic-bezier(0.34, 1.56, 0.64, 1)
            ${stage === 0 ? 'scale-50 opacity-0 translate-y-10' : 'scale-100 opacity-100 translate-y-0'}
            ${stage >= 3 && stage < 4 ? 'scale-75' : stage === 4 ? 'scale-100' : ''}
          `}>
             <img src={logoImage} className="w-24 h-24 md:w-32 md:h-32 object-contain" alt="STEAM Buds" />
          </div>

          {/* Tagline Text */}
          <div className={`mt-8 text-center transition-all duration-700 flex flex-col items-center gap-2
            ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">STEAM Buds</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium tracking-wide uppercase text-xs md:text-sm">
              Inspire • Ignite • Create • Master
            </p>
          </div>
        </div>

        {/* === SKILLS ORBIT === */}
        {/* They start scattered (chaos) and move to formation (order) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {SKILLS.map((skill, idx) => {
            const angle = (idx / SKILLS.length) * 2 * Math.PI;
            const radius = 280; // Distance from center (desktop)

            // Mobile: arrange in staggered pattern (2-1-2-1) to avoid horizontal overflow
            // Desktop: circular orbit
            const isMobile = window.innerWidth < 768;
            let mobileX = 0;
            let mobileY = 0;

            if (isMobile) {
              // Staggered pattern: 1-2-2-1
              if (idx === 0) {
                // Top center
                mobileX = 0;
                mobileY = -200;
              } else if (idx === 1) {
                // Second row left (further from center, closer to top)
                mobileX = -110;
                mobileY = -140;
              } else if (idx === 2) {
                // Second row right (further from center, closer to top)
                mobileX = 110;
                mobileY = -140;
              } else if (idx === 3) {
                // Third row left (further from center, closer to bottom)
                mobileX = -110;
                mobileY = 140;
              } else if (idx === 4) {
                // Third row right (further from center, closer to bottom)
                mobileX = 110;
                mobileY = 140;
              } else if (idx === 5) {
                // Bottom center
                mobileX = 0;
                mobileY = 200;
              }
            }

            // Chaos positions (random-ish based on index)
            const chaosX = (idx % 2 === 0 ? 1 : -1) * (300 + idx * 50);
            const chaosY = (idx % 3 === 0 ? 1 : -1) * (200 + idx * 40);

            return (
              <div
                key={skill.name}
                className={`absolute flex items-center gap-2 bg-white/90 backdrop-blur-md px-2 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-gray-100 transition-all duration-[1500ms] cubic-bezier(0.2, 0.8, 0.2, 1)
                  ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                `}
                style={{
                  transform: stage >= 2
                    ? isMobile
                      ? `translate(${mobileX}px, ${mobileY}px)`
                      : `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`
                    : `translate(${chaosX}px, ${chaosY}px) rotate(${Math.random() * 45}deg)`,
                }}
              >
                <div className={`p-1.5 md:p-2 rounded-full ${stage >= 2 ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                  <skill.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                </div>
                <span className="text-[10px] md:text-sm font-semibold text-gray-700">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* === USER TYPES EXPANSION === */}
        <div className="absolute inset-0 pointer-events-none z-30">
          {USER_TYPES.map((user, idx) => {
            // Calculate final positions roughly based on corners
            // We use fixed percentages for simplicity in this full-screen view
            const positions: Record<string, string> = {
              'top-left': 'top-[15%] left-[10%] md:left-[20%]',
              'top-right': 'top-[15%] right-[10%] md:right-[20%]',
              'bottom-left': 'bottom-[15%] left-[10%] md:left-[20%]',
              'bottom-right': 'bottom-[15%] right-[10%] md:right-[20%]',
            };

            // Calculate position in header (stage 4)
            const headerSpacing = 100 + (idx * 120); // Horizontal spacing in header

            return (
              <div
                key={user.id}
                className={`absolute transition-all duration-[1500ms] cubic-bezier(0.34, 1.56, 0.64, 1) ${stage < 4 ? positions[user.position] : ''}
                  ${stage >= 3 && stage < 4 ? 'opacity-100' : 'opacity-0'}
                  ${stage === 4 ? 'scale-0' : stage >= 3 ? 'scale-100' : 'scale-0'}
                `}
                style={{
                   transformOrigin: 'center center',
                   // Stage 0-2: Start from center
                   ...(stage < 3 && {
                     transform: 'translate(-50%, -50%) scale(0)',
                     top: '50%',
                     left: '50%',
                   }),
                   // Stage 3: Expand to corners (handled by className positions)
                   ...(stage === 3 && {
                     transform: 'translate(0, 0) scale(1)',
                   }),
                   // Stage 4: Fly to header position and fade out
                   ...(stage === 4 && {
                     transform: `translate(${headerSpacing}px, -85vh) scale(0)`,
                     top: '50%',
                     left: 'calc(50% - 240px)',
                   }),
                }}
              >
                {/* Elegant card with gradient and glow effect */}
                <div className={`relative px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border-2 border-white/50
                  ${user.id === 'student' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : ''}
                  ${user.id === 'guardian' ? 'bg-gradient-to-br from-green-500 to-green-600' : ''}
                  ${user.id === 'teacher' ? 'bg-gradient-to-br from-purple-500 to-purple-600' : ''}
                  ${user.id === 'school' ? 'bg-gradient-to-br from-orange-500 to-orange-600' : ''}
                `}>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>

                  {/* Text content */}
                  <span className="relative text-white font-bold text-base md:text-lg tracking-wide drop-shadow-lg">
                    {user.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Skip Button - Hidden at stage 4 */}
      {stage < 4 && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 group flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white backdrop-blur-sm rounded-full text-gray-500 hover:text-primary transition-all duration-300 border border-transparent hover:border-gray-200 shadow-sm"
        >
          <span className="text-sm font-medium">Skip Intro</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedIntro;
