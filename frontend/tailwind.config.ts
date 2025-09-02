import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  
  ],
  theme: {
   screens: {
      sm: "27.5rem",      // 576px
      md: "48rem",        // 768px
      lg: "80rem",        // 1280px
      xl: "96rem",        // 1536px
      "2xl": "120rem",    // 1920px
      "3xl": "133.75rem", // 2139px
      "4xl": "158.75rem", // 2539px
    },

    extend: {

        fontFamily: {
        'clashGrotesk': ['clashGrotesk-Semibold', 'sans-serif'],
        'generalSans-medium': ['generalSans-medium', 'sans-serif'],
        'generalSans-semibold': ['generalSans-Semibold', 'sans-serif'],
      },

      backgroundImage: {
                        'hero-gradient': 'linear-gradient(344deg, rgba(157, 41, 198, 0.50) 0.99%, rgba(255, 255, 255, 0.25) 101.21%)', 
      },


      colors: {
        primary: "#6633CC",        
        secondary: "#DC9320", 
        background:"#F8F6FF",   
        
        "dark-purple-text": "#421855",  
        violet: "#67209D",        
        grape: "#6633CC",         
        purpures: "#9D4BAD",       
        saffron: "#F5C144",        
        magnolia: "#FCF7FF",
        
        // Component specific
        statpurp: "#291954",
        cardviolet: "#241A4A4D",   
        cardgrape: "#6633CC2B",    
      },
      
      gradientColorStopPositions: {
        1: "1%",
        3: "3%",
      },
      
      spacing: {
        "18": "4.5rem",   // 72px
        "22": "5.5rem",   // 88px
        "26": "6.5rem",   // 104px
        "30": "7.5rem",   // 120px
      },
      
      // Typography
      fontSize: {
        "xs": "0.75rem",     // 12px
        "sm": "0.875rem",    // 14px
        "base": "1rem",      // 16px
        "lg": "1.125rem",    // 18px
        "xl": "1.25rem",     // 20px
        "2xl": "1.5rem",     // 24px
        "3xl": "1.875rem",   // 30px
        "4xl": "2.25rem",    // 36px
        "5xl": "3rem",       // 48px
        "6xl": "3.75rem",    // 60px
      },
      
      // Custom animations
      
      
      
    },
  },
  plugins: [],
};

export default config;