import features from '../data/features'
import useResponsive from '../hooks/useResponsive'
import theme from '../styles/theme'

const Features = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    background: theme.gray50,
    padding: 'clamp(3rem, 8vh, 5rem) 1rem',
  }

  const containerStyles = {
    maxWidth: '75rem',
    margin: '0 auto',
  }

  const headerStyles = {
    textAlign: 'center',
    marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
  }

  const headingStyles = {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: '700',
    color: theme.gray900,
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
  }

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(15rem, 100%), 1fr))',
    gap: 'clamp(1.5rem, 4vw, 2rem)',
  }

  const featureCardStyles = {
    background: theme.white,
    padding: 'clamp(2rem, 5vw, 2.5rem) clamp(1.5rem, 4vw, 2rem)',
    textAlign: 'center',
    transition: 'transform 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const iconContainerStyles = {
    width: 'clamp(3.5rem, 8vw, 4rem)',
    height: 'clamp(3.5rem, 8vw, 4rem)',
    background: theme.teal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
  }

  const featureTitleStyles = {
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    fontWeight: '700',
    color: theme.gray900,
    marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
    lineHeight: '1.3',
  }

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={headingStyles}>Why Choose Scadence?</h2>
        </div>

        <div style={gridStyles}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                style={featureCardStyles}
                onMouseEnter={e => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-0.25rem)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)'
                  }
                }}
              >
                <div style={iconContainerStyles}>
                  <Icon size={isMobile ? 24 : 28} color={theme.white} />
                </div>

                <h3 style={featureTitleStyles}>{feature.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
