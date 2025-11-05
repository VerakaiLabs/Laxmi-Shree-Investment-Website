import InvestmentCompanyCard from "../components/InvestmentPageCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const investments = [
  {
    logoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/24168a900ce3df446d4333496333e67a596259e5?width=597",
    companyName: "Barahi Cable Car Ltd.",
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