import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
// Responsive Footer
import Footer from './components/Footer'
// Main App Component with Global Styles
const App = () => {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        minHeight: '100vh',
        lineHeight: '1.5',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Footer />
    </div>
  )
}

export default App
