import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "About | Christian Gem",
  description: "Learn about Christian Gem Raganit",
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-black mb-8">About Me</h1>

        {/* Personal Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-black">Birth Date:</span> December 8, 2005
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-black">Birthplace:</span> Centro, Buguey, Cagayan
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-black">Gender:</span> Male
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-black">Citizenship:</span> Filipino
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-black">Religion:</span> Catholic
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-black">Address:</span> Centro, Buguey, Cagayan
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-black">Email:</span>
                <a href="mailto:christianraganit@spup.edu.ph" className="text-blue-600 hover:text-blue-800 ml-2">
                  christianraganit@spup.edu.ph
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Professional Summary
          </h2>
          <div className="border-l-4 border-black bg-gray-50 p-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a passionate 2nd year BSIT student at St. Paul University Philippines with a strong commitment to full-stack development and cybersecurity. Driven by curiosity and a passion for building secure, scalable applications, I focus on continuous learning and practical implementation of modern web technologies.
            </p>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h3 className="text-lg font-semibold text-black mb-2">Development</h3>
              <p className="text-gray-700">Full-stack web development with modern frameworks and scalable architectures</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h3 className="text-lg font-semibold text-black mb-2">Cybersecurity</h3>
              <p className="text-gray-700">Secure coding practices and protection of applications from vulnerabilities</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h3 className="text-lg font-semibold text-black mb-2">Technologies</h3>
              <p className="text-gray-700">React, Next.js, JavaScript, Python, Java, and modern web technologies</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h3 className="text-lg font-semibold text-black mb-2">Learning</h3>
              <p className="text-gray-700">Continuous improvement through real-world projects and practical experience</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
