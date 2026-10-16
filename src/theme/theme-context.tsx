import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeTokens, lightTheme, darkTheme } from './tokens';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  colors: ThemeTokens['colors'];
  spacing: ThemeTokens['spacing'];
  typography: ThemeTokens['typography'];
  radii: ThemeTokens['radii'];
  shadows: ThemeTokens['shadows'];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  enableSystem = true,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('codalla-theme') as Theme;
    if (saved && (saved === 'light' || saved === 'dark')) {
      return saved;
    }
    
    // Check system preference if enabled
    if (enableSystem) {
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    }
    
    return defaultTheme;
  });

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  // Update document attributes and localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    // Set theme attribute
    root.setAttribute('data-theme', theme);
    
    // Set input modality for focus styles
    const updateInputModality = () => {
      const hasMouse = window.matchMedia('(pointer: fine)').matches;
      root.setAttribute('data-input-modality', hasMouse ? 'pointer' : 'touch');
    };
    
    updateInputModality();
    window.addEventListener('resize', updateInputModality);
    
    // Save to localStorage
    localStorage.setItem('codalla-theme', theme);
    
    return () => {
      window.removeEventListener('resize', updateInputModality);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    colors: currentTheme.colors,
    spacing: currentTheme.spacing,
    typography: currentTheme.typography,
    radii: currentTheme.radii,
    shadows: currentTheme.shadows,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy theme switching in components
export const useThemeMode = () => {
  const { theme, setTheme, toggleTheme } = useTheme();
  return { theme, setTheme, toggleTheme };
};

// Hook for accessing theme tokens
export const useThemeTokens = () => {
  const { colors, spacing, typography, radii, shadows } = useTheme();
  return { colors, spacing, typography, radii, shadows };
};