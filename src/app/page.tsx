import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import ClientWrapper from '../components/ClientWrapper'
import WhyChooseUs from '../components/WhyChooseUs'
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d0d0d] min-h-screen">
        <Hero />
        <ClientWrapper />
          <WhyChooseUs />
      </main>
    </>
  )
}
