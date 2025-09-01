// import Footer from "./components/Footer";
import HeroPage from "./sections/Hero/hero"
import AboutUs from "./sections/about/about"
import ServicesPage from "./sections/services"
import ContactCTASection from "./sections/contactCTA"
import VisionPage from "./sections/visionPage"
import Navbar from "./components/Navbar"
import LogoCarousel from "./sections/Carousel/carousel"
import FounderCard from"./components/founderMessageCard"
import MessageFromOurFounderPage from "./sections/FounderMessage/founderMessagePage"
import InvestmentsSection from "./sections/Investment/investmentSection"
export default function Main(){
  return(
    <div>
    <Navbar/>
    <HeroPage/>
    <LogoCarousel/>
    <AboutUs/>
    <ServicesPage/>
<MessageFromOurFounderPage/>
<InvestmentsSection/>
    <VisionPage/>
    
    <ContactCTASection/>
    </div>
    
  )
};