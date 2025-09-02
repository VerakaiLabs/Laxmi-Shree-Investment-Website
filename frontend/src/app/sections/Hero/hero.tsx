/* eslint-disable react/no-unescaped-entities */


"use client";

import { useTypewriter } from "@/app/lib/useTypewriter"
import wordsData from "@/app/data/heroData.json"
import ContactButton from "@/app/components/contactButton";
import Navbar from "@/app/components/Navbar";
import styles from "./styles.module.css";
export const runtime = "edge";
export default function HeroPage(){
    const typewriterText = useTypewriter(wordsData, 50, 30, 600);

    return (
        <section 
            className={`${styles.hero_background_container} relative p-[1.4rem] py-[4rem] mb-[4rem] overflow-hidden lg:pl-[4rem] lg:py-[5rem] xl:pl-[5rem] xl:pt-[3.5rem]`}
        >
            
            <div className="pt-[3rem] relative z-10 flex flex-col h-full max-w-full lg:pt-[4rem] xl:pt-[5rem]">

                <h1 className="font-bold text-[2.35rem] lg:text-[1.75rem] lg:mb-[0.5rem] xl:text-[1.85rem] xl:mb-[0rem]" style={{ color: '#581D91' }}>
                    We Serve:
                </h1>
                <h1 className="font-bold text-[2.35rem] h-[9rem] max-w-full sm:w-[24rem] lg:w-[45rem] lg:h-[4.5rem] lg:text-[2.75rem] lg:mb-[1rem] xl:w-[50rem] xl:h-[5rem] xl:text-[2.8rem] xl:mb-[1.25rem]" style={{ color: '#DC9320' }}>
                    {typewriterText}
                    <span className="animate-pulse ml-1">|</span>
                </h1>
                <span className="self-stretch text-[1.15rem] text-justify font-medium leading-[160%] max-w-full lg:w-[38rem] lg:text-[0.95rem] lg:leading-[150%] lg:font-medium xl:w-[40rem] xl:text-[1rem] xl:font-[200] xl:leading-[155%]" style={{color:"#421855"}}>
                 जहाँ योजना स्पष्ट हुन्छ, त्यहाँ भरोसा स्वाभाविक रूपमा बलियो हुन्छ। योजना र भरोसा दुवै साथ आएपछि लक्ष्यसम्म पुग्ने बाटो अझै सजिलो र सुरक्षित हुन्छ। जब मानिससँग ठोस योजना र गहिरो भरोसा हुन्छ, तब कुनै पनि चुनौतीलाई अवसरमा बदल्न सकिन्छ।
                </span>
                <div className="mt-[2rem] flex justify-center lg:justify-start lg:mt-[3.5rem] xl:justify-start xl:mt-[3rem]">
                    <ContactButton/>
                </div>
            </div>
        </section>
    )
}