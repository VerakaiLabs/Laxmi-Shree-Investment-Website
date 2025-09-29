"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LogoSVG from "@/app/assets/icons/MainLogo.svg";
import DropdownButton from "@/app/assets/icons/DropdownButton.svg";
import ContactButton from "./contactButton";

export const runtime = "edge";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
  { name: "Home", href: "/", isSPA: true },
  { name: "About", href: "/about", isSPA: true },
  { name: "Investments", href: "/investments", isSPA: true },
  { name: "Team", href: "/team", isSPA: false }, // Changed from "/Team" to "/team"
  { name: "Gallery", href: "/gallery", isSPA: false },
  { name: "Notice", href: "/news", isSPA: false }
];

  const handleNavigation = (item: typeof navigationItems[0]) => {
    if (pathname === "/" && item.isSPA) {
      // On home page, scroll to section
      if (item.href === "/") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (item.href === "/about") {
        const aboutSection = document.querySelector('[data-section="about"]');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      } else if (item.href === "/investments") {
        const investmentsSection = document.querySelector('[data-section="investments"]');
        investmentsSection?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to separate page
      router.push(item.href);
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="p-[0.4rem] pr-[0.8rem]">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image 
              src={LogoSVG}
              alt="Laxmi Shree Investment Logo"
              width={180}
              height={60}
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-[3.5rem]">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {pathname === "/" && item.isSPA ? (
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`text-lg font-medium leading-[98.404%] hover:text-[#9D29C6] transition-colors ${
                      pathname === item.href ? 'text-[#9D29C6]' : 'text-[#421855]'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-lg font-medium leading-[98.404%] hover:text-[#9D29C6] transition-colors ${
                      pathname === item.href ? 'text-[#9D29C6]' : 'text-[#421855]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
            
          <div className="md:flex md:flex-row md:gap-[3rem]">
            <div className="hidden md:flex lg:flex xl:md:flex">
              <ContactButton/>
            </div>
            <button className="lg:hidden md:hidden">
              <Image 
                src={DropdownButton}
                alt="Dropdown Button"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}