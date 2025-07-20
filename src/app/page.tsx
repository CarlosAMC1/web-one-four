import Navbar from '../components/NavBar'
import HeroCarousel from '../components/HeroCarousel'
import ClientWrapper from '../components/ClientWrapper'
import WhyChooseUs from '../components/WhyChooseUs'
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d0d0d] min-h-screen">
        <HeroCarousel />
        <ClientWrapper />
          <WhyChooseUs />
      </main>
    </>
  )
}
