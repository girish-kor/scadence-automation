import useResponsive from '../hooks/useResponsive';
import theme from '../styles/theme';

const Footer = () => {
  const { isMobile, isTablet } = useResponsive();

  const footerStyles = {
    background: theme.gray900,
    color: theme.white,
    padding: 'clamp(3rem, 8vh, 4rem) 1rem clamp(1.5rem, 4vh, 2rem)',
  };

  const containerStyles = {
    maxWidth: '75rem',
    margin: '0 auto',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile || isTablet ? '1fr' : 'repeat(auto-fit, minmax(15rem, 1fr))',
    gap: 'clamp(2rem, 5vw, 3rem)',
    marginBottom: 'clamp(2rem, 5vw, 3rem)',
  };

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
  };

  const logoIconStyles = {
    width: '2.5rem',
    height: '2.5rem',
    background: theme.teal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    fontSize: '1.25rem',
    fontWeight: 'bold',
  };

  const logoTextStyles = {
    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
    fontWeight: '700',
  };

  const sectionHeadingStyles = {
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    fontWeight: '700',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    color: theme.white,
  };

  const linkStyles = {
    color: theme.gray400,
    textDecoration: 'none',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    transition: 'color 0.2s ease',
    display: 'block',
    padding: '0.375rem 0',
    lineHeight: '1.5',
  };

  const contactInfoStyles = {
    color: theme.gray400,
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    lineHeight: '1.8',
    marginBottom: '0.5rem',
  };

  const descriptionStyles = {
    color: theme.gray400,
    lineHeight: '1.6',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
  };

  const bottomSectionStyles = {
    borderTop: `0.0625rem solid ${theme.gray600}`,
    paddingTop: 'clamp(1.5rem, 4vw, 2rem)',
    display: 'flex',
    flexDirection: isMobile || isTablet ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile || isTablet ? 'flex-start' : 'center',
    gap: '1rem',
  };

  const copyrightStyles = {
    color: theme.gray400,
    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
  };

  const bottomLinksStyles = {
    display: 'flex',
    gap: 'clamp(1rem, 3vw, 1.5rem)',
    flexWrap: 'wrap',
  };

  return (
    <footer id="contact" style={footerStyles}>
      <div style={containerStyles}>
        <div style={gridStyles}>
          {/* Company Info */}
          <div>
            <div style={logoContainerStyles}>
              <div style={logoIconStyles}>S</div>
              <span style={logoTextStyles}>Scadence Automation</span>
            </div>
            <p style={descriptionStyles}>
              Next-generation industrial automation solutions for modern industries.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={sectionHeadingStyles}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {['Marine Automation', 'Oil & Gas', 'Pharma', 'IoT Integration'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={linkStyles}
                  onMouseEnter={(e) => (e.target.style.color = theme.teal)}
                  onMouseLeave={(e) => (e.target.style.color = theme.gray400)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 style={sectionHeadingStyles}>Contact</h4>
            <div>
              <p style={contactInfoStyles}>info@scadenceautomation.com</p>
              <p style={contactInfoStyles}>+91 XXX XXX XXXX</p>
              <p style={contactInfoStyles}>Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={bottomSectionStyles}>
          <p style={copyrightStyles}>© 2024 Scadence Automation. All rights reserved.</p>
          <div style={bottomLinksStyles}>
            <a href="#" style={{ ...linkStyles, padding: 0 }}>
              Privacy
            </a>
            <a href="#" style={{ ...linkStyles, padding: 0 }}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
