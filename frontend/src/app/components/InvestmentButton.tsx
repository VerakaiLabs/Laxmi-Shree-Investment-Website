interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CTAButton({ 
  children, 
  onClick, 
  href, 
  variant = "outlined", 
  size = "md",
  className = "" 
}: CTAButtonProps) {
  const baseClasses = "flex justify-center items-center gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 3xl:gap-5 rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl 3xl:rounded-2xl font-medium transition-colors";
  
  const variantClasses = {
    outlined: "border border-[#5E2D91] md:border-2 lg:border-2 xl:border-2 3xl:border-2 bg-transparent text-[#35115F] hover:bg-[#DC9320] hover:text-white hover:border-none",
    filled: "bg-[#DC9320] text-white border-none hover:bg-[#C8851C]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm md:px-5 md:py-2.5 md:text-sm lg:px-5 lg:py-2.5 lg:text-base xl:px-6 xl:py-3 xl:text-base 3xl:px-7 3xl:py-3.5 3xl:text-lg",
    md: "px-6 py-4 text-base md:px-7 md:py-4.5 md:text-lg lg:px-8 lg:py-5 lg:text-lg xl:px-9 xl:py-5.5 xl:text-xl 3xl:px-12 3xl:py-6 3xl:text-2xl",
    lg: "px-8 py-4 text-lg md:px-9 md:py-4.5 md:text-xl lg:px-10 lg:py-5 lg:text-xl xl:px-11 xl:py-5.5 xl:text-2xl 3xl:px-14 3xl:py-7 3xl:text-3xl"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}