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
    name: "Sankhar Bahadur Ghimire",
    position: "MD",
    imageUrl: "founders/sankharghimire.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/shankar-ghimire-81b936232"
  },
  {
    name: "Laxmi Bhattarai",
    position: "Director",
    imageUrl: "founders/laxmibhattarai.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/laxmi-bhattarai-7665264b"
  },
  {
    name: "Er.Lilamani Pathak",
    position: "Director",
    imageUrl: "founders/lilapathak.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "http://linkedin.com/in/lilamani-pathak-a8a3baa6"
  }
];

export default function TeamPage() {
  return (
    <>
      <Navbar/>
      <section className="px-4 pt-[6.5rem] md:px-8 lg:px-16 pb-8">
        <h1 className="text-3xl font-bold text-center text-[#9D29C6] mb-10">Our Leadership Team</h1>
        
        <div className="max-w-7xl mx-auto space-y-6">
          {/* First Row - Chairman (Single, Centered) */}
          <div className="flex justify-center">
            <TeamCard
              name={teamMembers[0].name}
              position={teamMembers[0].position}
              imageUrl={teamMembers[0].imageUrl}
              emailUrl={teamMembers[0].emailUrl}
              linkedinUrl={teamMembers[0].linkedinUrl}
            />
          </div>

          {/* Second Row - MD and Directors (Three cards in a row) */}
          <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:gap-12 flex-wrap">
            {teamMembers.slice(1, 4).map((member, idx) => (
              <TeamCard
                key={idx + 1}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                emailUrl={member.emailUrl}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commented sections for future use */}
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