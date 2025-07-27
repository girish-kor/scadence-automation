// ServiceCard.jsx
import useResponsive from '../hooks/useResponsive'
import theme from '../styles/theme'

const ServiceCard = ({ service }) => {
  const { isMobile } = useResponsive()
  const Icon = service.icon

  const wrapperStyles = {
    position: 'relative',
    overflow: 'hidden',
    border: `0.0625rem solid ${theme.gray100}`,
    height: '100%',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    borderRadius: '0.5rem',
  }

  const backgroundStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${service.images?.[0]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(6px)',
    opacity: 0.9,
    zIndex: 0,
  }

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.4)',
    zIndex: 1,
  }

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    color: theme.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 'clamp(1.5rem, 4vw, 2rem)',
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
    borderRadius: '0.5rem',
  }

  const titleStyles = {
    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
    fontWeight: '700',
    color: theme.white,
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
    lineHeight: '1.3',
  }

  const summaryStyles = {
    color: theme.gray100,
    lineHeight: '1.6',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    flex: 1,
  }

  const techContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: 'auto',
  }

  const techBadgeStyles = {
    background: 'rgba(255, 255, 255, 0.15)',
    color: theme.white,
    padding: '0.375rem 0.75rem',
    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    borderRadius: '0.25rem',
    backdropFilter: 'blur(2px)',
  }

  return (
    <div
      style={wrapperStyles}
      onMouseEnter={e => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-0.25rem)'
          e.currentTarget.style.boxShadow = '0 0.5rem 2rem rgba(0, 0, 0, 0.2)'
        }
      }}
      onMouseLeave={e => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }
      }}
    >
      <div style={backgroundStyles} />
      <div style={overlayStyles} />
      <div style={contentStyles}>
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
    </div>
  )
}

export default ServiceCard
