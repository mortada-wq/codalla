// Core theme configuration inspired by modern agent interfaces
export interface ThemeTokens {
  colors: {
    // Neutral color system with subtle blue undertones
    neutral: {
      50: string;
      100: string;
      150: string;
      200: string;
      250: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      750: string;
      800: string;
      850: string;
      900: string;
      950: string;
      1000: string;
    };
    
    // Blue accents for primary actions and highlights
    blue: {
      50: string;
      100: string;
      500: string;
      600: string;
      800: string;
      900: string;
      950: string;
    };
    
    // Status colors
    success: {
      100: string;
      500: string;
      900: string;
    };
    
    warning: {
      100: string;
      500: string;
      600: string;
      900: string;
    };
    
    error: {
      100: string;
      400: string;
      500: string;
      600: string;
      900: string;
    };
  };
  
  typography: {
    fontFamily: {
      sans: string[];
      mono: string[];
    };
    
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  
  spacing: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    24: string;
    32: string;
  };
  
  radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  animation: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    
    easing: {
      ease: string;
      easeIn: string;
      easeOut: string;
      easeInOut: string;
    };
  };
}

export const lightTheme: ThemeTokens = {
  colors: {
    neutral: {
      50: 'rgb(249, 250, 251)',
      100: 'rgb(235, 238, 242)',
      150: 'rgb(233, 236, 242)',
      200: 'rgb(225, 229, 238)',
      250: 'rgb(220, 220, 220)',
      300: 'rgb(207, 211, 214)',
      400: 'rgb(173, 178, 184)',
      500: 'rgb(151, 157, 166)',
      600: 'rgb(129, 133, 140)',
      700: 'rgb(97, 102, 107)',
      750: 'rgb(67, 69, 74)',
      800: 'rgb(53, 54, 56)',
      850: 'rgb(44, 44, 46)',
      900: 'rgb(27, 27, 28)',
      950: 'rgb(21, 21, 23)',
      1000: 'rgb(15, 17, 21)',
    },
    blue: {
      50: 'rgb(239, 246, 255)',
      100: 'rgb(219, 234, 254)',
      500: 'rgb(59, 130, 246)',
      600: 'rgb(37, 99, 235)',
      800: 'rgb(30, 64, 175)',
      900: 'rgb(14, 48, 116)',
      950: 'rgb(23, 37, 84)',
    },
    success: {
      100: 'rgb(230, 250, 237)',
      500: 'rgb(34, 197, 94)',
      900: 'rgb(35, 60, 44)',
    },
    warning: {
      100: 'rgb(254, 245, 231)',
      500: 'rgb(245, 158, 11)',
      600: 'rgb(221, 134, 41)',
      900: 'rgb(39, 36, 31)',
    },
    error: {
      100: 'rgb(254, 226, 226)',
      400: 'rgb(242, 90, 90)',
      500: 'rgb(239, 68, 68)',
      600: 'rgb(236, 19, 19)',
      900: 'rgb(87, 12, 12)',
    },
  },
  typography: {
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  radii: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
};

export const darkTheme: ThemeTokens = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    neutral: {
      ...lightTheme.colors.neutral,
      // Adjusted for dark mode with subtle blue undertones
      50: 'rgb(249, 250, 251)',    // Keep light for contrast elements
      100: 'rgb(235, 238, 242)',   // Text on dark backgrounds
      150: 'rgb(233, 236, 242)',
      200: 'rgb(225, 229, 238)',
      250: 'rgb(220, 220, 220)',
      300: 'rgb(207, 211, 214)',
      400: 'rgb(173, 178, 184)',
      500: 'rgb(151, 157, 166)',
      600: 'rgb(129, 133, 140)',
      700: 'rgb(97, 102, 107)',
      750: 'rgb(67, 69, 74)',
      800: 'rgb(53, 54, 56)',
      850: 'rgb(44, 44, 46)',
      900: 'rgb(27, 27, 28)',      // Layer 2
      950: 'rgb(28, 35, 45)',      // Main background with blue undertones
      1000: 'rgb(15, 17, 21)',
    },
  },
};

export type Theme = 'light' | 'dark';
export type ThemeTokensUnion = typeof lightTheme | typeof darkTheme;