"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext({ isDarkMode: false, toggleTheme: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Prevents SSR hydration errors


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setIsDarkMode(storedTheme === 'dark');
    setMounted(true);
  }, []);


  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: () => setIsDarkMode((prev) => !prev) }}>
      {mounted ? children : null} {/* Prevents mismatches */}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
