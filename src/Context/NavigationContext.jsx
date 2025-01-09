import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
