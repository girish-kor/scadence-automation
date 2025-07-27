import { useEffect, useState } from 'react'

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    ...screenSize,
    isMobile: screenSize.width < 480,
    isTablet: screenSize.width >= 480 && screenSize.width < 768,
    isLaptop: screenSize.width >= 768 && screenSize.width < 1024,
    isDesktop: screenSize.width >= 1024 && screenSize.width < 1280,
    isUltrawide: screenSize.width >= 1280,
  }
}

export default useResponsive
