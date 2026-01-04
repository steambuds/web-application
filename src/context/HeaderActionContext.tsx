import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HeaderActionContextType {
  title: ReactNode | null;
  setTitle: (title: ReactNode | null) => void;
  mobileAction: (() => void) | null;
  setMobileAction: (action: (() => void) | null) => void;
  hideDefaultNav: boolean;
  setHideDefaultNav: (hide: boolean) => void;
  customNavLinks: ReactNode | null;
  setCustomNavLinks: (links: ReactNode | null) => void;
}

const HeaderActionContext = createContext<HeaderActionContextType | undefined>(undefined);

export const HeaderActionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState<ReactNode | null>(null);
  const [mobileAction, setMobileAction] = useState<(() => void) | null>(null);
  const [hideDefaultNav, setHideDefaultNav] = useState(false);
  const [customNavLinks, setCustomNavLinks] = useState<ReactNode | null>(null);

  return (
    <HeaderActionContext.Provider
      value={{
        title,
        setTitle,
        mobileAction,
        setMobileAction,
        hideDefaultNav,
        setHideDefaultNav,
        customNavLinks,
        setCustomNavLinks,
      }}
    >
      {children}
    </HeaderActionContext.Provider>
  );
};

export const useHeaderAction = () => {
  const context = useContext(HeaderActionContext);
  if (context === undefined) {
    throw new Error('useHeaderAction must be used within a HeaderActionProvider');
  }
  return context;
};
