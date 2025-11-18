import InvestmentCompanyCard from "../components/InvestmentPageCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const investments = [
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/24168a900ce3df446d4333496333e67a596259e5?width=597",
    companyName: "Barahi Lake View Cable Car Ltd.",
    description: "Elevate your journey from Sedi to Sarangkot with breathtaking views! Experience the majestic beauty of Annapurna and the sacred 51 ft Pancha Mukhi Ganesh with our safe, scenic cable car rides.",
    readMoreUrl: "#",
    pdfFileName: "barahi-cable-car.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/17ffebedd43c1afee7357d4eb91278be010bc4a6?width=753",
    companyName: "Sopan Pharmaceuticals",
    description: "Sopan Pharmaceuticals Limited, founded under Sopan Multiple Company Limited by leading NRNs and entrepreneurs, aims to transform healthcare with innovative, high-quality pharmaceutical products.",
    readMoreUrl: "#",
    pdfFileName: "sopan-pharma.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Himalayan Solar Ltd.",
    description: "From humble beginnings to a solar leader, our journey is driven by innovation and sustainability. With advanced technology, we empower communities and businesses with reliable, clean energy solutions.",
    readMoreUrl: "#",
    pdfFileName: "himalayan-solar.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Gargang Upateka Hydropower",
    description: "Harnessing the power of Nepal's pristine waters, Gargang Upateka Hydropower is committed to providing sustainable and clean energy solutions for the nation's growing energy needs.",
    readMoreUrl: "#",
    pdfFileName: "gargang-upateka-hydropower.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Idi ltd. Hydropower Ltd.",
    description: "Pioneering renewable energy development in Nepal, Eidi Hydropower focuses on sustainable power generation while contributing to local community development and environmental conservation.",
    readMoreUrl: "#",
    pdfFileName: "eidi-hydropower.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Asian Batteries Ltd.",
    description: "Leading manufacturer of high-quality automotive and industrial batteries in Nepal, providing reliable power solutions with advanced technology and exceptional durability.",
    readMoreUrl: "#",
    pdfFileName: "asian-batteries.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Tenx Holding Ltd.",
    description: "A diversified investment holding company focused on strategic investments across multiple sectors including technology, real estate, and manufacturing in Nepal's growing economy.",
    readMoreUrl: "#",
    pdfFileName: "tenx-holding.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Hotel Bhadghau and Resort",
    description: "Experience luxury hospitality in the heart of Nepal with world-class amenities, stunning mountain views, and authentic Nepali culture at Hotel Bhadghau and Resort.",
    readMoreUrl: "#",
    pdfFileName: "hotel-bhadghau.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Rupakot Resort",
    description: "A premium destination resort offering unparalleled mountain views, luxury accommodations, and authentic cultural experiences in the beautiful landscapes of Nepal.",
    readMoreUrl: "#",
    pdfFileName: "rupakot-resort.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Aayu Malun Khola Hydropower Ltd.",
    description: "Dedicated to sustainable hydroelectric power generation, Aayu Malun Khola Hydropower harnesses Nepal's water resources to provide clean, renewable energy for the nation.",
    readMoreUrl: "#",
    pdfFileName: "aayu-malun-khola.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Siddha Bhoomi Retreat Ltd.",
    description: "A serene wellness retreat center offering holistic healing, meditation, and spiritual rejuvenation in Nepal's tranquil natural environment with traditional therapeutic practices.",
    readMoreUrl: "#",
    pdfFileName: "siddha-bhoomi-retreat.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Barahakshetra Cable Car Ltd.",
    description: "Providing scenic cable car services to one of Nepal's most sacred pilgrimage sites, offering visitors breathtaking aerial views while ensuring safe and comfortable transportation.",
    readMoreUrl: "#",
    pdfFileName: "barahakshetra-cable-car.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Himalayan Urja Ltd.",
    description: "Focused on renewable energy solutions and sustainable power generation, Himalayan Urja is committed to meeting Nepal's energy demands through innovative clean technologies.",
    readMoreUrl: "#",
    pdfFileName: "himalayan-urja.pdf"
  },
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/50114886b0e65df2d798a82cb75468d1da303698?width=597",
    companyName: "Ramailo Likhu Hydropower Ltd.",
    description: "Developing sustainable hydroelectric projects that contribute to Nepal's energy security while promoting environmental conservation and community development initiatives.",
    readMoreUrl: "#",
    pdfFileName: "ramailo-likhu-hydropower.pdf"
  }
];

export default function InvestmentsPage() {
  return (
    <>
      <Navbar/>
      <section className="px-4 py-[6.5rem] md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Our Investments</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {investments.map((inv, idx) => (
            <InvestmentCompanyCard
              key={idx}
              logoUrl={inv.logoUrl}
              companyName={inv.companyName}
              description={inv.description}
              readMoreUrl={inv.readMoreUrl}
              pdfFileName={inv.pdfFileName}
            />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}