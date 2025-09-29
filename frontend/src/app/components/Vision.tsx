interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "default" | "purple" | "dark";
  className?: string;
}

export default function VisionCard({ icon, title, description, variant = "default", className }: FeatureCardProps) {
  const variants = {
    default: "bg-white text-[#5E2D91] shadow-[0_0_0.75rem_0.125rem_rgba(0,0,0,0.15)]",
    purple: "bg-[#67209D] text-white shadow-lg",
    dark: "bg-[#401F64] text-white"
  };

  return (
    <div className={` flex items-center gap-[1.5rem] p-[1.5rem] rounded-lg ${variants[variant]} ${className || ''}`}>
      <div className="flex-shrink-0 w-[3.75rem] h-[3.75rem] flex items-center justify-center 3xl:w-[3.9rem] 3xl:h-[3.9rem] ">
        {icon}
      </div>
      <div className="flex-1 space-y-[0.5rem]">
        <h3 className="text-[1.2rem] 3xl:text-[1.5rem] capitalize">
          {title}
        </h3>
        <p className="text-[0.9rem] 3xl:text-[1.3rem] text-justify leading-relaxed capitalize opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
}