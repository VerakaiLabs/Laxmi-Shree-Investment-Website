"use client";
interface InvestmentCompanyCardProps {
  logoUrl: string;
  companyName: string;
  description: string;
  readMoreUrl?: string;
  pdfFileName?: string;
  className?: string;
}

export default function InvestmentCompanyCard({
  logoUrl,
  companyName,
  description,
  readMoreUrl = "#",
  pdfFileName = "company-info.pdf",
  className = ""
}: InvestmentCompanyCardProps) {
  const handleDownloadPdf = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = `/pdfs/${pdfFileName}`;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`
      group relative w-[276px] h-[380px] rounded-lg cursor-pointer transition-all duration-300 
      hover:scale-105 hover:shadow-lg overflow-hidden
      ${className}
    `}>
      {/* Default State */}
      <div className="
        absolute inset-0 flex flex-col items-center justify-center gap-[58px] px-6 py-8
        bg-[#FDFCFF] border border-gray-200 rounded-lg
        group-hover:opacity-0 transition-opacity duration-300
      ">
        <img 
          src={logoUrl}
          alt={`${companyName} logo`}
          className="w-[70px] h-[70px] object-contain"
        />
        <h3 className="text-[#6B7280] text-center text-[22px] font-medium leading-[140%] capitalize">
          {companyName}
        </h3>
      </div>

      {/* Hover State */}
      <div className="
        absolute inset-0 flex flex-col justify-center items-center p-6
        bg-gradient-to-br from-[rgba(157,41,198,0.68)] to-[rgba(88,29,145,0.68)]
        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
      ">
        <div className="w-full h-full flex flex-col justify-between items-center">
          {/* Description Text */}
          <p className="text-[#FDFCFF] text-justify text-[12px] font-medium leading-[155%] capitalize">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-3 w-[143px]">
            <a
              href={readMoreUrl}
              className="
                flex h-[40px] px-[25px] py-1 justify-center items-center gap-2.5 
                rounded-[5px] bg-[#4D186F] hover:bg-[#3D0F5A] transition-colors duration-200
                text-white text-center text-[18px] font-semibold leading-[140%] capitalize
                no-underline w-full
              "
            >
              Visit
            </a>
            
              
          </div>
        </div>
      </div>
    </div>
  );
}
