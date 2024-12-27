import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
}

interface AppContextType extends AppState {
  login: (user: { name: string; email: string }) => void;
  logout: () => void;
}

// Define the props interface for AppProvider
interface AppProviderProps {
  children: ReactNode; // This allows any valid React node as children
}

const defaultState: AppState = {
  isAuthenticated: false,
  user: null,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>(defaultState);

  const login = (user: { name: string; email: string }) => {
    setState({ isAuthenticated: true, user });
  };

  const logout = () => {
    setState({ isAuthenticated: false, user: null });
  };

  return (
    <AppContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};