interface InvestmentCardProps {
  title: string;
  description: string;
  image: string;
  variant?: "purple" | "white";
  className?: string;
}

export default function InvestmentCard({ 
  title, 
  description, 
  image, 
  variant = "white", 
  className = "" 
}: InvestmentCardProps) {
  const isPurple = variant === "purple";
  const isDefaultImage = image.includes("default.svg");
  
  return (
    <div className={`
      flex flex-col justify-center items-center rounded-lg border border-[#5E2D91] shadow-lg
      ${isPurple 
        ? "bg-gradient-to-br from-[#9D29C6] to-[#581D91] text-[#FDFCFF]" 
        : "bg-[#FDFCFF] text-[#5E2D91]"
      }
      ${className}
    `}>
      <div className="flex flex-col items-center gap-7 p-6 md:p-10 w-full max-w-sm">
        {/* Image */}
        <img
          src={image}
          alt=""
          className={`w-full h-20 md:h-28 object-contain rounded ${isDefaultImage ? "opacity-0" : ""}`}
        />
        
        {/* Content */}
        <div className="flex flex-col items-end gap-3 w-full">
          {/* Title */}
          <h3 className={`
            w-full text-center text-lg md:text-xl font-semibold leading-[140%] capitalize
            ${isPurple ? "text-[#FDFCFF]" : "text-[#5E2D91]"}
          `}>
            {title}
          </h3>
          
          {/* Description */}
          <p className={`
            w-full text-justify text-sm md:text-base font-medium leading-[140%] capitalize
            ${isPurple ? "text-[#FDFCFF]" : "text-[#421855]"}
          `}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
