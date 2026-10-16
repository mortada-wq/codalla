# Codalla UI

A modern React component library inspired by the elegant design patterns of advanced agent interfaces, featuring a sophisticated grey-blue color palette and comprehensive design system.

## ✨ Features

- **Modern Design System**: Sophisticated color palette with grey-blue neutrals and subtle blue undertones
- **Theme System**: Built-in light/dark mode support with system preference detection
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Accessibility**: All components follow accessibility best practices
- **Responsive Design**: Mobile-first responsive components
- **Tree Shaking**: Optimized for modern bundlers with ESM builds
- **CSS Variables**: Dynamic theming system using CSS custom properties

## 🚀 Quick Start

### Installation

```bash
npm install codalla-ui
# or
yarn add codalla-ui
# or
pnpm add codalla-ui
```

### Basic Usage

```tsx
import React from 'react';
import { Button, Card, Input, ThemeProvider } from 'codalla-ui';
import 'codalla-ui/styles/global.css'; // Import global styles

function App() {
  return (
    <ThemeProvider>
      <Card>
        <h3>Welcome to Codalla UI</h3>
        <p>A modern component library.</p>
        <Button variant="primary">Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## 🎨 Design System

Codalla UI uses a sophisticated design system built around grey-blue neutrals with subtle blue undertones, providing a professional and elegant aesthetic.

### Color Palette

The library features a carefully curated color system:

- **Neutrals**: Grey-blue gradient from light (50) to dark (950)
- **Accents**: Primary, success, warning, and error colors
- **Semantic Colors**: Text, background, and border variations

### Typography

- **Font Family**: Inter for UI text, JetBrains Mono for code
- **Scale**: Consistent typographic scale for headings and body text
- **Weight**: Multiple font weights for emphasis and hierarchy

### Spacing & Layout

- **Spacing System**: 4px base unit with consistent scale
- **Border Radius**: Consistent radius values from subtle to prominent
- **Shadows**: Elevation system with multiple levels

## 🧩 Components

### Button

Accessible button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="md">
  Primary Action
</Button>

<Button variant="outline" size="sm">
  Secondary Action
</Button>

<Button variant="ghost" size="lg" disabled>
  Disabled Button
</Button>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`
**Sizes**: `sm`, `md`, `lg`

### Card

Flexible container component with consistent styling and elevation.

```tsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

<Card elevated interactive>
  <h3>Elevated Card</h3>
  <p>Cards that respond to interactions.</p>
</Card>
```

### Input

Accessible form control with validation states.

```tsx
<Input
  type="text"
  label="Name"
  placeholder="Enter your name"
  required
/>

<Input
  type="email"
  label="Email"
  error="Please enter a valid email"
/>

<Input
  type="password"
  label="Password"
  success="Password is strong"
/>
```

## 🎭 Theme System

Built-in theme system with support for light/dark modes and system preferences.

### Using the Theme Provider

```tsx
import { ThemeProvider } from 'codalla-ui';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Manual Theme Control

```tsx
import { useTheme } from 'codalla-ui';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
```

### Custom Theme Tokens

```tsx
import { ThemeProvider, lightTheme, ThemeTokens } from 'codalla-ui';

const customTokens: Partial<ThemeTokens> = {
  colors: {
    primary: 'purple',
    // ... custom colors
  }
};

function App() {
  return (
    <ThemeProvider themeTokens={customTokens}>
      {/* Your components */}
    </ThemeProvider>
  );
}
```

## 🛠️ Development

### Running the Demo

```bash
npm run demo
```

This starts a Vite development server showcasing all components.

### Building the Library

```bash
npm run build
```

This creates both CommonJS and ESM builds in the `lib/` directory.

### Development Scripts

- `npm run demo` - Run the demo application
- `npm run build` - Build the library for production
- `npm run dev` - Development server (library)
- `npm run dev:lib` - Watch mode for library development
- `npm run typecheck` - TypeScript type checking

## 📁 Project Structure

```
codalla-ui/
├── src/
│   ├── components/          # React components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── theme/               # Theme system
│   │   ├── tokens.ts
│   │   └── theme-context.tsx
│   ├── styles/              # Global styles
│   │   └── global.css
│   └── index.ts             # Main export
├── demo/                    # Demo application
│   ├── App.tsx
│   └── main.tsx
└── lib/                     # Built library (generated)
```

## 🔧 Bundler Configuration

The library is compatible with modern bundlers:

```tsx
// Vite
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Rollup
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

```

## 🌟 Design Philosophy

Codalla UI is inspired by the elegant design patterns found in advanced agent interfaces, focusing on:

- **Clarity**: Clean, readable interfaces with proper hierarchy
- **Consistency**: Unified design language across all components
- **Accessibility**: WCAG-compliant components for inclusive design
- **Performance**: Optimized for modern web applications
- **Developer Experience**: Type-safe APIs with excellent documentation

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

---

Built with ❤️ using React, TypeScript, and modern design patterns.