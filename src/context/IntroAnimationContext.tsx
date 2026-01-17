import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IntroAnimationContextType {
  isIntroComplete: boolean;
  showUserTypeDropdown: boolean;
  hasPlayedThisSession: boolean;
  setIntroComplete: (complete: boolean) => void;
  setShowUserTypeDropdown: (show: boolean) => void;
  markAsPlayed: () => void;
}

const IntroAnimationContext = createContext<IntroAnimationContextType | undefined>(undefined);

export const IntroAnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Animation plays once per page load, resets on refresh
  const [hasPlayedThisSession, setHasPlayedThisSession] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [showUserTypeDropdown, setShowUserTypeDropdown] = useState(false);

  const setIntroComplete = (complete: boolean) => {
    setIsIntroComplete(complete);
  };

  const markAsPlayed = () => {
    setHasPlayedThisSession(true);
  };

  return (
    <IntroAnimationContext.Provider
      value={{
        isIntroComplete,
        showUserTypeDropdown,
        hasPlayedThisSession,
        setIntroComplete,
        setShowUserTypeDropdown,
        markAsPlayed
      }}
    >
      {children}
    </IntroAnimationContext.Provider>
  );
};

export const useIntroAnimation = () => {
  const context = useContext(IntroAnimationContext);
  if (context === undefined) {
    throw new Error('useIntroAnimation must be used within IntroAnimationProvider');
  }
  return context;
};
