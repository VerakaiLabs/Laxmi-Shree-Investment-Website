import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col items-start gap-10 w-full">
      <h2 className="text-[#9D29C6] text-[30px] font-semibold leading-[140%] capitalize">
        Frequently Asked Questions
      </h2>
      
      <div className="flex flex-col items-start gap-6 w-full">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-[18px] w-full">
            <div className="flex justify-between items-start w-full">
              <h3 className="text-[#9D29C6] text-[22px] font-semibold leading-[140%] capitalize flex-1">
                {item.question}
              </h3>
              <button
                onClick={() => toggleItem(index)}
                className="w-6 h-6 flex items-center justify-center transition-transform duration-200"
              >
                {openItems.includes(index) ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
            
            {openItems.includes(index) && (
              <div className="w-full text-[#35115F] text-[18px] font-medium leading-[140%] capitalize">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
