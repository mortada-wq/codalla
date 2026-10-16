import React from 'react';
import { useTheme } from '../src/theme/theme-context';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { Input } from '../src/components/Input';

// Import the CSS
import '../src/styles/global.css';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="demo-app">
      {/* Header with theme toggle */}
      <header className="demo-header">
        <div className="demo-brand">
          <h1>Codalla UI Components</h1>
          <p>Modern React UI library inspired by elegant agent interfaces</p>
        </div>
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="sm"
          className="theme-toggle"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </header>

      <main className="demo-content">
        {/* Introduction Section */}
        <Card className="demo-section">
          <h2>✨ Design System Overview</h2>
          <p>
            This component library showcases modern UI components with a sophisticated
            color palette featuring grey-blue neutrals with subtle blue undertones,
            inspired by advanced agent interface design patterns.
          </p>
          <div className="theme-indicator">
            Current theme: <strong>{theme}</strong>
          </div>
        </Card>

        {/* Button Showcase */}
        <section className="demo-section">
          <h2>🖱️ Button Components</h2>
          <p>Multiple variants, sizes, and states for versatile interaction patterns.</p>
          
          <div className="button-showcase">
            <div className="button-row">
              <h3>Primary Variants</h3>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
            
            <div className="button-row">
              <h3>Secondary Variants</h3>
              <Button variant="secondary" size="sm">Small</Button>
              <Button variant="secondary" size="md">Medium</Button>
              <Button variant="secondary" size="lg">Large</Button>
            </div>
            
            <div className="button-row">
              <h3>Outline Variants</h3>
              <Button variant="outline" size="sm">Small</Button>
              <Button variant="outline" size="md">Medium</Button>
              <Button variant="outline" size="lg">Large</Button>
            </div>
            
            <div className="button-row">
              <h3>Ghost Variants</h3>
              <Button variant="ghost" size="sm">Small</Button>
              <Button variant="ghost" size="md">Medium</Button>
              <Button variant="ghost" size="lg">Large</Button>
            </div>

            <div className="button-row">
              <h3>States</h3>
              <Button variant="primary">Default</Button>
              <Button variant="primary">Hover</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
        </section>

        {/* Card Showcase */}
        <section className="demo-section">
          <h2>📦 Card Components</h2>
          <p>Flexible container components with consistent styling and elevation levels.</p>
          
          <div className="card-showcase">
            <Card className="demo-card">
              <h3>Default Card</h3>
              <p>A simple card with default styling and subtle border separation.</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>

            <Card className="demo-card">
              <h3>Elevated Card</h3>
              <p>Cards with enhanced depth using subtle shadow elevation system.</p>
              <div className="card-meta">
                <span className="card-badge">Featured</span>
                <span className="card-date">2 days ago</span>
              </div>
            </Card>

            <Card className="demo-card interactive">
              <h3>Interactive Card</h3>
              <p>Cards that respond to hover and focus states for enhanced user feedback.</p>
              <div className="card-actions">
                <Button variant="primary" size="sm">Action</Button>
                <Button variant="ghost" size="sm">Secondary</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Input Showcase */}
        <section className="demo-section">
          <h2>📝 Input Components</h2>
          <p>Accessible form controls with consistent styling and validation states.</p>
          
          <div className="input-showcase">
            <Card className="demo-card">
              <h3>Text Inputs</h3>
              <div className="input-group">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  label="Name"
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  label="Email"
                />
                <Input
                  type="password"
                  placeholder="Enter password"
                  label="Password"
                />
              </div>
            </Card>

            <Card className="demo-card">
              <h3>Input States</h3>
              <div className="input-group">
                <Input
                  type="text"
                  placeholder="Default state"
                  label="Default"
                />
                <Input
                  type="text"
                  placeholder="With error"
                  label="Error State"
                  error="This field is required"
                />
                <Input
                  type="text"
                  placeholder="With success"
                  label="Success State"
                  success="Valid input"
                />
              </div>
            </Card>

            <Card className="demo-card">
              <h3>Form Example</h3>
              <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <Input
                    type="text"
                    placeholder="First name"
                    label="First Name"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Last name"
                    label="Last Name"
                    required
                  />
                </div>
                <div className="form-row">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    label="Email Address"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    label="Phone Number"
                  />
                </div>
                <div className="form-row">
                  <Input
                    type="password"
                    placeholder="••••••••"
                    label="Password"
                    required
                  />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    label="Confirm Password"
                    required
                  />
                </div>
                <div className="form-actions">
                  <Button type="submit" variant="primary">
                    Create Account
                  </Button>
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* Style Guide Section */}
        <section className="demo-section">
          <h2>🎨 Design Tokens</h2>
          <p>The color palette and spacing system that powers the component library.</p>
          
          <Card className="demo-card">
            <h3>Color Palette</h3>
            <div className="color-palette">
              <div className="color-group">
                <h4>Neutrals</h4>
                <div className="color-swatch-group">
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-950)'}}>
                    <span>950</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-900)'}}>
                    <span>900</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-800)'}}>
                    <span>800</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-700)'}}>
                    <span>700</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-600)'}}>
                    <span>600</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-500)'}}>
                    <span>500</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-400)'}}>
                    <span>400</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-300)'}}>
                    <span>300</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-200)'}}>
                    <span>200</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-100)'}}>
                    <span>100</span>
                  </div>
                  <div className="color-swatch" style={{backgroundColor: 'var(--dsw-static-neutral-bluish-50)'}}>
                    <span>50</span>
                  </div>
                </div>
              </div>
              
              <div className="color-group">
                <h4>Accents</h4>
                <div className="color-swatch-group">
                  <div className="color-swatch primary" style={{backgroundColor: 'var(--dsw-color-primary)'}}>
                    <span>Primary</span>
                  </div>
                  <div className="color-swatch success" style={{backgroundColor: 'var(--dsw-color-success)'}}>
                    <span>Success</span>
                  </div>
                  <div className="color-swatch warning" style={{backgroundColor: 'var(--dsw-color-warning)'}}>
                    <span>Warning</span>
                  </div>
                  <div className="color-swatch error" style={{backgroundColor: 'var(--dsw-color-error)'}}>
                    <span>Error</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="demo-footer">
        <p>
          Built with ❤️ using React, TypeScript, and modern design patterns.
          <br />
          Design inspired by elegant agent interface aesthetics.
        </p>
      </footer>
    </div>
  );
};

export default App;