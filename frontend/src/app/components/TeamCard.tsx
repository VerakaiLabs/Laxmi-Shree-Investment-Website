interface TeamCardProps {
  name: string;
  position: string;
  imageUrl: string;
  emailUrl?: string;
  linkedinUrl?: string;
  className?: string;
}

export default function TeamCard({ 
  name, 
  position, 
  imageUrl, 
  emailUrl, 
  linkedinUrl, 
  className = "" 
}: TeamCardProps) {
  return (
    <div
      className={`
        relative w-[276px] h-[400px] flex-shrink-0 rounded-lg border border-[#A875FF]
        ${className}
      `}
      style={{
        background: "linear-gradient(154deg, #F5F0FF 0.18%, #FAFAFA 283.69%, #FFF8E6 567.21%)"
      }}
    >
      {/* Image Container */}
      <div className="absolute left-[11px] top-[12px] w-[254px] h-[318px] flex justify-center items-center rounded-lg  p-1">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-[246px] h-[306px] object-cover rounded-lg"
        />
      </div>

      {/* Content Container */}
      <div className="absolute left-[11px] top-[340px] w-[256px] h-[44px] flex justify-between items-end">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-[20px] font-semibold leading-[140%] capitalize bg-gradient-to-b from-[#5E2D91] to-[#5E2D91] bg-clip-text text-transparent">
            {name}
          </h3>
          <p className="text-[#6B7280] text-[14px] font-medium leading-[140%] capitalize">
            {position}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-1.5">
          {emailUrl && (
            <a 
              href={`mailto:${emailUrl}`}
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              {/* ...email SVG... */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 25 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path 
                  d="M4.97607 20C4.42607 20 3.95541 19.8043 3.56407 19.413C3.17274 19.0217 2.97674 18.5507 2.97607 18V6C2.97607 5.45 3.17207 4.97933 3.56407 4.588C3.95607 4.19667 4.42674 4.00067 4.97607 4H20.9761C21.5261 4 21.9971 4.196 22.3891 4.588C22.7811 4.98 22.9767 5.45067 22.9761 6V18C22.9761 18.55 22.7804 19.021 22.3891 19.413C21.9977 19.805 21.5267 20.0007 20.9761 20H4.97607ZM12.9761 13L20.9761 8V6L12.9761 11L4.97607 6V8L12.9761 13Z" 
                  fill="#5E2D91"
                />
              </svg>
            </a>
          )}

          {linkedinUrl && (
            <a 
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              {/* ...linkedin SVG... */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 25 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path 
                  d="M19.9761 3C20.5065 3 21.0152 3.21071 21.3903 3.58579C21.7654 3.96086 21.9761 4.46957 21.9761 5V19C21.9761 19.5304 21.7654 20.0391 21.3903 20.4142C21.0152 20.7893 20.5065 21 19.9761 21H5.97607C5.44564 21 4.93693 20.7893 4.56186 20.4142C4.18679 20.0391 3.97607 19.5304 3.97607 19V5C3.97607 4.46957 4.18679 3.96086 4.56186 3.58579C4.93693 3.21071 5.44564 3 5.97607 3H19.9761ZM19.4761 18.5V13.2C19.4761 12.3354 19.1326 11.5062 18.5212 10.8948C17.9099 10.2835 17.0807 9.94 16.2161 9.94C15.3661 9.94 14.3761 10.46 13.8961 11.24V10.13H11.1061V18.5H13.8961V13.57C13.8961 12.8 14.5161 12.17 15.2861 12.17C15.6574 12.17 16.0135 12.3175 16.276 12.5801C16.5386 12.8426 16.6861 13.1987 16.6861 13.57V18.5H19.4761ZM7.85607 8.56C8.30164 8.56 8.72895 8.383 9.04401 8.06794C9.35908 7.75288 9.53607 7.32556 9.53607 6.88C9.53607 5.95 8.78607 5.19 7.85607 5.19C7.40786 5.19 6.978 5.36805 6.66106 5.68499C6.34413 6.00193 6.16607 6.43178 6.16607 6.88C6.16607 7.81 6.92607 8.56 7.85607 8.56ZM9.24607 18.5V10.13H6.47607V18.5H9.24607Z" 
                  fill="#5E2D91"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}