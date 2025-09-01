interface ServiceCardProps {
  title: string;
  description: string;
  variant?: "light" | "purple";
  className?: string;
}

function ServiceCard({ title, description, variant = "light", className = "" }: ServiceCardProps) {
  const isLight = variant === "light";

  return (
    <div 
      className={`
        flex justify-center items-center rounded-lg shadow-[0_0_12px_2px_rgba(0,0,0,0.15)]
        w-full md:w-[350px] lg:w-full
        ${isLight
          ? "bg-[#FDFCFF] py-[76px] px-[35px]"
          : "bg-[#67209D] py-[88px] px-[35px]"
        }
        ${className}
      `}
    >
      <div className="flex flex-col items-center gap-[31px] w-full max-w-[326px]">
        <h3 className={`
          text-center text-xl font-bold leading-[140%] capitalize w-full
          ${isLight ? "text-[#5E2D91]" : "text-[#F8F6FF]"}
        `}>
          {title}
        </h3>

        <p className={`
          text-base text-justify font-medium leading-[140%] capitalize w-full
          ${isLight ? "text-[#421855]" : "text-[#F8F6FF]"}
        `}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;