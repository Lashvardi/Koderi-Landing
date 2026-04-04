import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import FeaturesCards from './components/sections/FeaturesCards'
import HowItWorks from './components/sections/HowItWorks'
import AppPreview from './components/sections/AppPreview'
import Audience from './components/sections/Audience'
import FeaturesGrid from './components/sections/FeaturesGrid'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesCards />
        <HowItWorks />
        <AppPreview />
        <Audience />
        <FeaturesGrid />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
