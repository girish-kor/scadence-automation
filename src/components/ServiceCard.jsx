import useResponsive from '../hooks/useResponsive'
import theme from '../styles/theme'

const ServiceCard = ({ service }) => {
  const { isMobile } = useResponsive()
  const Icon = service.icon

  const cardStyles = {
    background: theme.white,
    padding: 'clamp(1.5rem, 4vw, 2rem)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    border: `0.0625rem solid ${theme.gray100}`,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }

  const iconContainerStyles = {
    width: 'clamp(3rem, 8vw, 3.5rem)',
    height: 'clamp(3rem, 8vw, 3.5rem)',
    background: service.color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    flexShrink: 0,
  }

  const titleStyles = {
    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
    fontWeight: '700',
    color: theme.gray900,
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
    lineHeight: '1.3',
  }

  const summaryStyles = {
    color: theme.gray600,
    lineHeight: '1.6',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    flex: 1, // Allow content to grow
  }

  const techContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: 'auto', // Push to bottom
  }

  const techBadgeStyles = {
    background: theme.gray100,
    color: theme.gray600,
    padding: '0.375rem 0.75rem',
    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
  }

  return (
    <div
      style={cardStyles}
      onMouseEnter={e => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-0.25rem)'
          e.currentTarget.style.boxShadow = '0 0.5rem 2rem rgba(0, 0, 0, 0.1)'
        }
      }}
      onMouseLeave={e => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }
      }}
    >
      <div style={iconContainerStyles}>
        <Icon size={isMobile ? 20 : 24} color={theme.white} />
      </div>

      <h3 style={titleStyles}>{service.title}</h3>

      <p style={summaryStyles}>{service.summary}</p>

      <div style={techContainerStyles}>
        {service.tech.map(tech => (
          <span key={tech} style={techBadgeStyles}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
