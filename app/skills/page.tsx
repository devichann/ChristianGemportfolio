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

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-black mb-12">Technical Skills</h1>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-black pb-3">
                {category.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-3 bg-gray-100 border border-black text-black font-medium text-center"
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
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Certifications
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-700">• Top 10 Finisher – Tour de Santa Ana (King of the Mountain)</li>
            <li className="text-gray-700">• 2nd Place – Extreme Gonzaga Bike Challenge</li>
            <li className="text-gray-700">• 2nd Place – Bantay Buyun Loop Race for a Cause</li>
            <li className="text-gray-700">• IT Cybersecurity Roadshow Participation</li>
            <li className="text-gray-700">• ITE CONVENTION 2025</li>
            <li className="text-gray-700">• SITE Film Festival 2025</li>
            <li className="text-gray-700">• ITE CONVENTION 2024</li>
            <li className="text-gray-700">• CYBER SUMMIT 2023</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
