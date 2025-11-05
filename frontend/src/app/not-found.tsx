import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <Navbar />
      
      <div className="flex items-center justify-center px-[1.4rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[5rem] 3xl:px-[8rem] pt-16 pb-8 min-h-[calc(100vh-5rem)]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/not_found/Background_Logo.svg"
            alt="404 Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        {/* Background Pattern/Shapes */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* Large circular shapes in background */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 3xl:w-56 3xl:h-56 bg-purple-100 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-3/4 right-1/4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 3xl:w-48 3xl:h-48 bg-orange-100 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 3xl:w-28 3xl:h-28 bg-purple-200 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-xl mx-auto">
          {/* 404 Large Text */}
          <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] 3xl:text-[13rem] font-bold text-[#5E2D91] leading-none mb-2 md:mb-3 lg:mb-4">
            404
          </h1>

          {/* Card Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl border-2 border-[#5E2D91] shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 3xl:p-12">
            {/* Message */}
            <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-semibold text-[#5E2D91] mb-4 md:mb-5 lg:mb-6 xl:mb-7 3xl:mb-8">
              Nobody seems to be here !
            </h2>

            {/* Go Back Button */}
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-[#F59E0B] to-[#EAB308] text-white font-medium rounded-lg md:rounded-xl px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 3xl:px-8 3xl:py-4 text-xs md:text-sm lg:text-base xl:text-lg 3xl:text-xl hover:from-[#EAB308] hover:to-[#F59E0B] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}