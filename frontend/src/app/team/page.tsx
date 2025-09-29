/* eslint-disable react/no-unescaped-entities */


import TeamCard from "../components/TeamCard";
import Navbar from "../components/Navbar";
export const runtime = "edge";

const teamMembers = [
  {
    name: "Laxmi Prasad Prasai",
    position: "CEO",
    imageUrl: "founders/laxmiprasai.png",
    emailUrl: "aarav@company.com",
    linkedinUrl: "https://linkedin.com/in/aaravsharma"
  },
  {
    name: "Priya Singh",
    position: "CTO",
    imageUrl: "founders/laxmibhattarai.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "https://linkedin.com/in/priyasingh"
  },
  {
    name: "Priya Singh",
    position: "CTO",
    imageUrl: "founders/laxmibhattarai.png",
    emailUrl: "priya@company.com",
    linkedinUrl: "https://linkedin.com/in/priyasingh"
  },
  // Add more team members as needed
];

export default function TeamPage() {
  return (
    <>
    <Navbar/>
    <section className="px-4 py-12 md:px-8 lg:px-16">
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
    </>
  );
}