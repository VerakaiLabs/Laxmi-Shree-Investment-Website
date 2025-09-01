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
  const baseClasses = "flex justify-center items-center gap-2.5 rounded-lg font-medium transition-colors";
  
  const variantClasses = {
    outlined: "border border-[#5E2D91] bg-transparent text-[#35115F] hover:bg-[#DC9320] hover:text-white hover:border-none",
    filled: "bg-[#DC9320] text-white border-none hover:bg-[#C8851C]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-4 text-base md:text-lg",
    lg: "px-8 py-4 text-lg md:text-xl"
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
