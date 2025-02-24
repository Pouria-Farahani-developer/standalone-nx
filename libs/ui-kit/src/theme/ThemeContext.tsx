"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  language:string;
  toggleLanguage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fa_IR');  // Default language is 'en'
  const [mounted, setMounted] = useState(false); // Prevents SSR hydration errors

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedLanguage = localStorage.getItem('language');

    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    setMounted(true);
  }, []);

  // Persist the theme in localStorage whenever it changes
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (language) {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const toggleLanguage = () => {
    const changeLanguage = language !== 'fa_IR' ? 'fa_IR' : 'en';
    setLanguage(changeLanguage);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: () => setIsDarkMode((prev) => !prev), language, toggleLanguage }}>
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
