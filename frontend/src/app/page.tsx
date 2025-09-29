import HeroPage from "./sections/hero/hero"
import AboutUs from "./sections/about/about"
import ServicesPage from "./sections/services"
import ContactCTASection from "./sections/contactCTA"
import VisionPage from "./sections/visionPage"
import Navbar from "./components/Navbar"
import LogoCarousel from "./sections/carousel/carousel"
import FounderCard from "./components/founderMessageCard"
import MessageFromOurFounderPage from "./sections/founderMessage/founderMessagePage"
import InvestmentsSection from "./sections/Investment/investmentSection"

export const runtime = "edge";

export default function Main(){
  return(
    <div>
      <Navbar/>
      <HeroPage/>
      <LogoCarousel/>
      <div data-section="about">
        <AboutUs />
      </div>
      <ServicesPage/>
      <MessageFromOurFounderPage/>
      <div data-section="investments">
        <InvestmentsSection />  
      </div>
      <VisionPage/>
      <ContactCTASection/>
    </div>
  )
}