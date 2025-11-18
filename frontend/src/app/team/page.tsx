/* eslint-disable react/no-unescaped-entities */


import TeamCard from "../components/TeamCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const runtime = "edge";



const teamMembers = [
  {
    name: "Laxmi Prasad Prasai",
    position: "Chairman",
    imageUrl: "founders/laxmiprasai.png",
    emailUrl: "aarav@company.com",
    linkedinUrl: "https://www.linkedin.com/in/laxmi-prasad-prasai-5771a5392/"
  },
  {
    name: "Laxmi Bhattarai",
    position: "Director",
    imageUrl: "founders/laxmibhattarai.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/laxmi-bhattarai-7665264b"
  },
  {
    name: "Lilamani Pathak",
    position: "MD",
    imageUrl: "founders/lilapathak.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/lilamani-pathak-a8a3baa6"
  },
  {
    name: "Sankhar Ghimire",
    position: "MD",
    imageUrl: "founders/sankharghimire.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/shankar-ghimire-81b936232"
  }
  // Add more team members as needed
];

export default function TeamPage() {
  return (
    <>
    <Navbar/>
    <section className="px-4 pt-[6.5rem] md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Our Leadership Team</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <TeamCard
            key={idx}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
            emailUrl={member.emailUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </section>
    {/* <section className="px-4 pt-[5rem] md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Management Team</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <TeamCard
            key={idx}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
            emailUrl={member.emailUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </section>
    <section className="px-4 pt-[5rem] md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Advisory Board</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <TeamCard
            key={idx}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
            emailUrl={member.emailUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div> 
    </section>*/}
    <div className="mt-[4rem]">
    <Footer/>
    </div>
    </>
  );
}