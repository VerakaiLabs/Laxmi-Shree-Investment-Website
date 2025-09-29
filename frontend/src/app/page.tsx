import HeroPage from "./sections/Hero/hero"
import AboutUs from "./sections/About/about"
import ServicesPage from "./sections/services"
import ContactCTASection from "./sections/contactCTA"
import VisionPage from "./sections/visionPage"
import Navbar from "./components/Navbar"
import LogoCarousel from "./sections/Carousel/carousel"
import MessageFromOurFounderPage from "./sections/FounderMessage/founderMessagePage"
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
};