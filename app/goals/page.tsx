import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Goals | Christian Gem",
  description: "Professional goals and aspirations",
};

export default function Goals() {
  const goals = [
    {
      title: "Master Full-Stack Development",
      description: "Deepen expertise in both frontend and backend technologies to build scalable, production-ready applications.",
    },
    {
      title: "Advance in Cybersecurity",
      description: "Develop strong security fundamentals and best practices to build secure, defensible systems.",
    },
    {
      title: "Improve All Listed Skills",
      description: "Continuously refine proficiency in Python, JavaScript, React, Next.js, Java, Godot, Flutter, and related technologies.",
    },
    {
      title: "Become a Better Developer",
      description: "Focus on writing clean, maintainable, and efficient code while developing strong problem-solving abilities.",
    },
    {
      title: "Gain Professional Experience",
      description: "Work on real-world projects that challenge my abilities and contribute meaningfully to development teams.",
    },
    {
      title: "Contribute to Open Source",
      description: "Participate in open-source projects to give back to the community and learn from experienced developers.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Goals & Aspirations</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Short & Long-Term Goals
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            As a 2nd year BSIT student, my primary focus is to consistently improve all my technical skills while building real-world experience. I aim to transition from academic learning to professional development, becoming a competent full-stack developer with strong security awareness.
          </p>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="border-l-4 border-black pl-6 py-2">
                <h3 className="text-xl font-bold text-black mb-2">{goal.title}</h3>
                <p className="text-gray-700">{goal.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Learning Path
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold text-black">Near Future:</span> Strengthen backend development and database optimization skills.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-black">Mid-term:</span> Develop expertise in cybersecurity practices and secure coding standards.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-black">Long-term:</span> Build a portfolio of production applications and establish myself as a skilled, security-focused developer.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
