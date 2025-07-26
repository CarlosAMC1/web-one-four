
import HeroCarousel from '../components/HeroCarousel'
import ClientWrapper from '../components/ClientWrapper'
import WhyChooseUs from '../components/WhyChooseUs'
import NavbarClient from '../components/NavbarClient';
import Testimonios from '../components/Testimonios';
import CallToAction from '../components/CallToAction';
import Faqs from '../components/Faqs';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
     <NavbarClient />

      <main className="bg-[#0d0d0d] min-h-screen">
        <HeroCarousel />
        
          <WhyChooseUs />
          <ClientWrapper />
          <Testimonios/>
          <CallToAction/>
          <Faqs/>
          <ContactInfo/>
          <Footer/>

      </main>
    </>
  )
}
