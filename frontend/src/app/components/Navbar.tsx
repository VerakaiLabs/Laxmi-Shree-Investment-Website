"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LogoSVG from "@/app/assets/icons/MainLogo.svg";
import DropdownButton from "@/app/assets/icons/DropdownButton.svg";
import ContactButton from "./contactButton";
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationItems = [
    { name: "Home", href: "/", isActive: true },
    { name: "About", href: "/about" },
    { name: "Investments", href: "/investments" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Notice", href: "/news" }
  ];

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
      <div className="p-[0.5rem] pr-[0.8rem]">
        <div className="flex flex-row items-center justify-between">
          <Image 
              src={LogoSVG}
              alt="Laxmi Shree Investment Logo"
              width={160}
              height={40}
            />

          <div className="hidden  lg:flex lg:items-center lg:justify-between lg:gap-[3.5rem]  ">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  <a
                    href={item.href}
                    className="text-[#421855] text-lg font-medium leading-[98.404%] hover:text-[#9D29C6] transition-colors"
                  >
                    {item.name}
                  </a>
                  
                </div>
              ))}
            </div>
            
              <div>
          <div className="md:flex md:flex-row md:gap-[3rem]">
            <div className="hidden md:flex  lg:hidden">
              <ContactButton/>
            </div>
            <button>
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
      </div>
    </nav>
  );
}