import useResponsive from '../hooks/useResponsive'
import theme from '../styles/theme'

const About = () => {
  const { isMobile, isTablet } = useResponsive()

  const sectionStyles = {
    background: theme.gray50,
    padding: 'clamp(3rem, 8vh, 5rem) 1rem',
  }

  const containerStyles = {
    maxWidth: '75rem',
    margin: '0 auto',
  }

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
    gap: 'clamp(2rem, 5vw, 3.75rem)',
    alignItems: 'center',
  }

  const headingStyles = {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: '700',
    color: theme.gray900,
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
  }

  const paragraphStyles = {
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    color: theme.gray600,
    lineHeight: '1.7',
    marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
  }

  const capabilitiesGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
    gap: '1rem',
    marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
  }

  const statsContainerStyles = {
    display: 'flex',
    gap: 'clamp(1.5rem, 5vw, 2.5rem)',
    justifyContent: isMobile ? 'space-around' : 'flex-start',
  }

  const illustrationStyles = {
    height: 'clamp(15rem, 40vw, 25rem)',
    background: theme.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    order: isMobile || isTablet ? -1 : 0, // Show illustration first on mobile
  }

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={gridStyles}>
          <div>
            <h2 style={headingStyles}>About Scadence</h2>

            <p style={paragraphStyles}>
              We deliver robust, smart, and scalable automation solutions across
              key industrial sectors.Our expertise spans VFD retrofitting,
              IoT-based monitoring, and cloud integration.
            </p>

            <div style={capabilitiesGridStyles}>
              {[
                'PLC/HMI/SCADA',
                'IoT Integration',
                'Cloud Analytics',
                'Energy Optimization',
              ].map(item => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    color: theme.gray900,
                  }}
                >
                  <div
                    style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      background: theme.teal,
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div style={statsContainerStyles}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 2.25rem)',
                    fontWeight: '800',
                    color: theme.teal,
                    marginBottom: '0.25rem',
                  }}
                >
                  10+
                </div>
                <div
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    color: theme.gray600,
                    fontWeight: '500',
                  }}
                >
                  Years Experience
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 2.25rem)',
                    fontWeight: '800',
                    color: theme.blue,
                    marginBottom: '0.25rem',
                  }}
                >
                  100+
                </div>
                <div
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    color: theme.gray600,
                    fontWeight: '500',
                  }}
                >
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Geometric Illustration */}
          <div style={illustrationStyles}>
            <div
              style={{
                width: 'clamp(6rem, 15vw, 7.5rem)',
                height: 'clamp(6rem, 15vw, 7.5rem)',
                background: theme.teal,
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 'clamp(-0.75rem, -2vw, -1.25rem)',
                  right: 'clamp(-0.75rem, -2vw, -1.25rem)',
                  width: 'clamp(3rem, 8vw, 3.75rem)',
                  height: 'clamp(3rem, 8vw, 3.75rem)',
                  background: theme.blue,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 'clamp(-0.75rem, -2vw, -1.25rem)',
                  left: 'clamp(-0.75rem, -2vw, -1.25rem)',
                  width: 'clamp(2rem, 5vw, 2.5rem)',
                  height: 'clamp(2rem, 5vw, 2.5rem)',
                  background: theme.yellow,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
