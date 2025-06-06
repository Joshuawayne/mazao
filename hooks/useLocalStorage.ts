
import { useState, useEffect } from 'react';

function getStorageValue<T,>(key: string, defaultValue: T | (() => T)): T {
  if (typeof window === 'undefined') { // Prevent errors during SSR or build time if localStorage is not available
    return defaultValue instanceof Function ? (defaultValue as () => T)() : defaultValue;
  }
  const saved = localStorage.getItem(key);
  if (saved !== null) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
    }
  }
  if (defaultValue instanceof Function) {
    return (defaultValue as () => T)();
  }
  return defaultValue;
}

export function useLocalStorage<T,>(key: string, defaultValue: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    }
  }, [key, value]);

  return [value, setValue];
}
