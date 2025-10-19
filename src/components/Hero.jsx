import { ChevronRight } from 'lucide-react';
import useResponsive from '../hooks/useResponsive';
import theme from '../styles/theme';

const Hero = () => {
  const { isMobile } = useResponsive();

  const heroStyles = {
    background: theme.white,
    padding: `clamp(7.5rem, 15vh, 10rem) 1rem clamp(3rem, 8vh, 5rem)`, // Responsive padding
    textAlign: 'center',
    minHeight: '80vh', // Ensure good mobile viewport coverage
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyles = {
    maxWidth: '50rem',
    margin: '0 auto',
    width: '100%',
  };

  const headingStyles = {
    fontSize: 'clamp(2rem, 8vw, 4.5rem)', // Fluid typography
    fontWeight: '800',
    color: theme.gray900,
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    lineHeight: '1.1',
    wordWrap: 'break-word', // Prevent overflow
  };

  const subheadingStyles = {
    fontSize: 'clamp(1rem, 4vw, 1.25rem)',
    color: theme.gray600,
    marginBottom: 'clamp(2rem, 5vw, 2.5rem)',
    lineHeight: '1.6',
    maxWidth: '100%',
  };

  const buttonContainerStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const primaryButtonStyles = {
    background: theme.teal,
    color: theme.white,
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'background 0.2s ease',
    minHeight: '2.75rem', // Touch-friendly
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '20rem' : 'none',
  };

  const secondaryButtonStyles = {
    background: 'transparent',
    color: theme.gray900,
    border: `0.125rem solid ${theme.gray900}`,
    padding: '0.875rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    minHeight: '2.75rem',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '20rem' : 'none',
  };

  return (
    <main>
      <section id="home" style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={headingStyles}>
            Industrial <span style={{ color: theme.teal }}>Automation</span> Solutions
          </h1>

          <p style={subheadingStyles}>
            Next-generation automation for marine, oil & gas, pharmaceutical, and manufacturing
            industries
          </p>

          <div style={buttonContainerStyles}>
            <button
              style={primaryButtonStyles}
              onMouseEnter={(e) => (e.target.style.background = '#0D9488')}
              onMouseLeave={(e) => (e.target.style.background = theme.teal)}
            >
              Get Started
              <ChevronRight size={16} />
            </button>

            <button
              style={secondaryButtonStyles}
              onMouseEnter={(e) => {
                e.target.style.background = theme.gray900;
                e.target.style.color = theme.white;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = theme.gray900;
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Hero;
