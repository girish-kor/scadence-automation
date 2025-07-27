import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import useResponsive from '../hooks/useResponsive'
import useScrollPosition from '../hooks/useScrollPosition'
import theme from '../styles/theme'

const Navbar = () => {
  const scrollY = useScrollPosition()
  const { isMobile, isTablet } = useResponsive()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mobile-first navigation styles
  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: theme.white,
    borderBottom:
      scrollY > 50
        ? `0.125rem solid ${theme.teal}`
        : `0.0625rem solid ${theme.gray100}`,
    transition: 'border-bottom 0.2s ease',
  }

  const containerStyles = {
    maxWidth: '90rem', // 1440px max container
    margin: '0 auto',
    padding: '1rem', // Mobile-first padding
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const logoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1, // Allow logo to flex on mobile
  }

  const logoIconStyles = {
    width: '2.5rem', // Mobile size
    height: '2.5rem',
    background: theme.teal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    fontSize: '1.25rem',
    fontWeight: 'bold',
  }

  const logoTextStyles = {
    fontSize: isMobile ? '1rem' : '1.25rem', // Responsive font size
    fontWeight: '700',
    color: theme.gray900,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

  // Desktop navigation menu
  const desktopMenuStyles = {
    display: isMobile || isTablet ? 'none' : 'flex',
    gap: '2rem',
    alignItems: 'center',
  }

  // Mobile menu styles
  const mobileMenuStyles = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: theme.white,
    borderBottom: `0.0625rem solid ${theme.gray100}`,
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    padding: '1rem',
  }

  const menuButtonStyles = {
    display: isMobile || isTablet ? 'flex' : 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: theme.gray900,
    padding: '0.5rem',
    minHeight: '2.75rem', // Touch-friendly size
    minWidth: '2.75rem',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <header>
      <nav style={navStyles}>
        <div style={containerStyles}>
          {/* Logo Section */}
          <div style={logoStyles}>
            <div style={logoIconStyles}>S</div>
            <span style={logoTextStyles}>
              {isMobile ? 'Scadence' : 'Scadence Automation'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div style={desktopMenuStyles}>
            {['Home', 'Services', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: theme.gray600,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  padding: '0.5rem', // Touch-friendly padding
                }}
                onMouseEnter={e => (e.target.style.color = theme.teal)}
                onMouseLeave={e => (e.target.style.color = theme.gray600)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={menuButtonStyles}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={mobileMenuStyles}>
          {['Home', 'Services', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: theme.gray600,
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: `0.0625rem solid ${theme.gray100}`,
                transition: 'color 0.2s ease',
              }}
              onClick={() => setIsMenuOpen(false)}
              onTouchStart={e => (e.target.style.color = theme.teal)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
export default Navbar
