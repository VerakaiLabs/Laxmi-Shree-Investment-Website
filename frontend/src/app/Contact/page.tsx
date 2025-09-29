"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
export const runtime = "edge";

const ContactDetails = () => (
  <div className="w-[300px] h-[267px] flex flex-col items-end gap-[82px]">
    <h2 className="text-[#35115F] text-right text-[22px] font-semibold leading-[140%] capitalize w-full">
      Contact Details
    </h2>
    
    <div className="flex flex-col items-start gap-[14px] w-full">
      <div className="text-[#9D29C6] text-[18px] font-medium leading-[140%] capitalize">
        Phone: +977 9812121212
      </div>
      <div className="text-[#9D29C6] text-[18px] font-medium leading-[140%] capitalize">
        Email: contact@laxmishree.com
      </div>
      <div className="text-[#9D29C6] text-[18px] font-medium leading-[140%] capitalize">
        Whatsapp: +977 9812121212
      </div>
    </div>
  </div>
);

const GoogleMap = () => (
  <div className="w-[852px] h-[364px] rounded-[10px] border border-[#5E2D91] overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6947310358896!2d85.31673831506216!3d27.69769998279441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb725c06645532aec!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1647876543210!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Laxmi Shree Investment Location"
    />
  </div>
);

export default function Contact() {
  const faqItems = [
    {
      question: "Where is the office?",
      answer: "Lorem ipsum dolor sit amet consectetur. Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam."
    },
    {
      question: "Where is the office?",
      answer: "Lorem ipsum dolor sit amet consectetur. Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam."
    },
    {
      question: "Where is the office?",
      answer: "Lorem ipsum dolor sit amet consectetur. Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam.Egestas facilisi magna et non etiam."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="flex flex-col items-center gap-[212px] py-[174px] px-4">
        <div className="w-full max-w-[1297px] flex flex-col items-start gap-[120px]">
          
          <div className="flex flex-col items-start gap-[110px] w-full">
            
            <div className="flex flex-col justify-center items-start gap-8 w-full">
              <div className="flex flex-col justify-between items-start opacity-90 w-[302px] h-[49px]">
                <h1 className="text-[#9D29C6] text-[30px] font-semibold leading-normal capitalize">
                  Let's Get in touch
                </h1>
              </div>
              
              <div className="flex items-start rounded-[10px] bg-[#F5F1FF] relative w-full max-w-[1290px] h-[364px]">
                <GoogleMap />
                
                <div className="absolute right-8 top-6 h-[364px] flex items-center">
                  <div className="bg-[#F5F1FF] p-6 rounded-lg">
                    <ContactDetails />
                  </div>
                </div>
              </div>
            </div>
            
            <FAQ items={faqItems} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
