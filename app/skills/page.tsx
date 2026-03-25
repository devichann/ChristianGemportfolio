import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Skills | Christian Gem",
  description: "Technical skills and expertise",
};

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      category: "Backend Development",
      skills: ["Python", "JavaScript", "Java"],
    },
    {
      category: "Game Development",
      skills: ["Godot", "Flutter"],
    },
    {
      category: "Other Technologies",
      skills: ["GitHub", "Networking", "Hardware"],
    },
  ];

  const certifications = [
    { name: "IT Cybersecurity Roadshow Participation", type: "Workshop" },
    { name: "ITE CONVENTION 2025", type: "Event" },
    { name: "SITE Film Festival 2025", type: "Event" },
    { name: "ITE CONVENTION 2024", type: "Event" },
    { name: "CYBER SUMMIT 2023", type: "Conference" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-black mb-12">Technical Skills</h1>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <section key={index}>
              <div className="bg-gray-100 border-b-2 border-black pb-4 mb-8 pl-4">
                <div className="flex items-center gap-3 border-l-4 border-black">
                  <h2 className="text-lg font-bold text-black">
                    {category.category} ({category.skills.length})
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-4 bg-gray-100 border border-black text-black font-medium text-center h-16 flex items-center justify-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Certifications */}
        <section className="mt-16">
          <div className="border-b-2 border-black pb-3 mb-6">
            <h2 className="text-2xl font-bold text-black">Certifications</h2>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <li key={idx} className="text-gray-700 flex items-start gap-3">
                <span className="font-bold text-black mt-0.5">•</span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-black">{cert.name}</span>
                  <span className="text-xs font-bold text-black border border-black px-2 py-1">
                    {cert.type}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
