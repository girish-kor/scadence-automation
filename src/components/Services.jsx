import services from '../data/services';
import theme from '../styles/theme';
import ServiceCard from './ServiceCard';

const Services = () => {
  const sectionStyles = {
    background: theme.white,
    padding: 'clamp(3rem, 8vh, 5rem) 1rem',
  };

  const containerStyles = {
    maxWidth: '75rem',
    margin: '0 auto',
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
  };

  const headingStyles = {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: '700',
    color: theme.gray900,
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
  };

  const subheadingStyles = {
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    color: theme.gray600,
    maxWidth: '37.5rem',
    margin: '0 auto',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(20rem, 100%), 1fr))', // Responsive grid
    gap: 'clamp(1.5rem, 4vw, 2rem)',
  };

  return (
    <section id="services" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={headingStyles}>Our Services</h2>
          <p style={subheadingStyles}>
            Comprehensive automation solutions for modern industrial needs
          </p>
        </div>

        <div style={gridStyles}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
