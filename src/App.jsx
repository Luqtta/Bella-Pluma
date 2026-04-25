import AboutSection from './components/AboutSection'
import DifferentialsSection from './components/DifferentialsSection'
import FinalCtaSection from './components/FinalCtaSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import WhatsAppButton from './components/WhatsAppButton'

const generalMessage = 'Ola! Tenho interesse nos produtos da BELLA PLUMA.'

function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      <WhatsAppButton
        message={generalMessage}
        variant="floating"
        iconOnly
        ariaLabel="Falar no WhatsApp"
        className="h-14 w-14 rounded-full border-4 border-white p-0 shadow-md hover:scale-105"
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <DifferentialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
