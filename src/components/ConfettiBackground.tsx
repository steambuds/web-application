import React from 'react';
import { CONFETTI_COLORS } from '../constants/brand';

interface ConfettiBackgroundProps {
  count?: number;
  colors?: string[];
}

const ConfettiBackground: React.FC<ConfettiBackgroundProps> = ({
  count = 50,
  colors = CONFETTI_COLORS
}) => {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-screen pointer-events-none overflow-hidden z-0">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10px',
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              animation: `confetti-fall ${3 + Math.random() * 4}s linear ${Math.random() * 2}s infinite`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default ConfettiBackground;
