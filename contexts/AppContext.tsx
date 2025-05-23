
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User, Language } from '../types';
import { DEFAULT_LANGUAGE } from '../constants';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { translations } from '../services/i18n'; // Direct import for i18n function

interface AppContextType {
  user: User | null;
  language: Language;
  isLoading: boolean;
  isFirstVisit: boolean; 
  isSidebarCollapsed: boolean; // Added for sidebar state
  login: (userData: Omit<User, 'id' | 'isLoggedIn'>) => void;
  logout: () => void;
  setLanguage: (language: Language) => void;
  setLoading: (loading: boolean) => void;
  completeOnboarding: () => void;
  toggleSidebar: () => void; // Added for sidebar state
  translate: (key: string, replacements?: {[key: string]: string}) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const i18nTranslate = (key: string, currentLang: Language, replacements?: {[key: string]: string}): string => {
  const translationSet = translations[key as keyof typeof translations];
  let translationText: string | undefined;

  if (translationSet) {
    translationText = translationSet[currentLang] || translationSet.en;
  } else {
    console.warn(`Translation key "${key}" not found in i18n service. Key: ${key}, Lang: ${currentLang}`);
    translationText = key; // Fallback to the key itself
  }
  
  if (replacements && translationText) {
    Object.keys(replacements).forEach(placeholder => {
      const regex = new RegExp(`{${placeholder}}`, 'g');
      translationText = (translationText as string).replace(regex, replacements[placeholder]);
    });
  }
  return translationText || key;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useLocalStorage<User | null>('agrigrow-user', null);
  const [language, setLanguageState] = useLocalStorage<Language>('agrigrow-language', DEFAULT_LANGUAGE as Language);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage<boolean>('agrigrow-isFirstVisit', true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useLocalStorage<boolean>('agrigrow-sidebarCollapsed', false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const login = (userData: Omit<User, 'id' | 'isLoggedIn'>) => {
    const fullUserData: User = {
      id: Date.now().toString(),
      ...userData,
      isLoggedIn: true,
    };
    setUser(fullUserData);
  };

  const logout = () => {
    setUser(null);
  };

  const completeOnboarding = () => {
    setIsFirstVisit(false);
  };

  const translateContext = (key: string, replacements?: {[key: string]: string}): string => {
    return i18nTranslate(key, language, replacements);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <AppContext.Provider value={{
      user,
      language,
      isLoading,
      isFirstVisit,
      isSidebarCollapsed,
      login,
      logout,
      setLanguage,
      setLoading,
      completeOnboarding,
      toggleSidebar,
      translate: translateContext
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
