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
          <p className="text-gray-700 text-lg leading-relaxed">
            I am a passionate 3rd year BSIT student at St. Paul University Philippines with a strong commitment to full-stack development and cybersecurity. Driven by curiosity and a passion for building secure, scalable applications, I focus on continuous learning and practical implementation of modern web technologies.
          </p>
        </section>
      </div>
    </main>
  );
}
