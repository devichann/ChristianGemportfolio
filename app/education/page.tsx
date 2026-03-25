import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Education | Christian Gem",
  description: "Educational background and training",
};

export default function Education() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-black mb-12">Educational Background</h1>

        {/* Tertiary Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Tertiary Education
          </h2>
          <div className="border-l-4 border-black pl-6 py-4">
            <h3 className="text-xl font-bold text-black mb-2">Bachelor of Science in Information Technology</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-black">Institution:</span> St. Paul University Philippines
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-black">Duration:</span> 2024 - Present
            </p>
          </div>
        </section>

        {/* Secondary Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Secondary Education
          </h2>

          <div className="mb-8">
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-bold text-black mb-2">Senior High School</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-black">Institution:</span> Licerio Antiporda Sr. National School Main
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Duration:</span> 2021 - 2023
              </p>
            </div>
          </div>

          <div>
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-bold text-black mb-2">Junior High School</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-black">Institution:</span> Licerio Antiporda Sr. National School Main
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Duration:</span> 2017 - 2021
              </p>
            </div>
          </div>
        </section>

        {/* Seminars & Workshops */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
            Seminars, Workshops & Conferences
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-lg font-bold text-black mb-2">IT Cybersecurity Roadshow</h3>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Venue:</span> St. Paul University Philippines, Tuguegarao City, Cagayan
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Date:</span> October 25, 2025
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-lg font-bold text-black mb-2">SITE Film Festival 2025</h3>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Venue:</span> St. Paul University Philippines, Tuguegarao City, Cagayan
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Date:</span> June 19, 2025
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-lg font-bold text-black mb-2">ITE CONVENTION 2025</h3>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Theme:</span> Innovate, Transform, Sustain: Shaping a Smarter World
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Venue:</span> St. Paul University Philippines, Tuguegarao City
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-lg font-bold text-black mb-2">ITE CONVENTION 2024</h3>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Theme:</span> Sustainable Synergy: Integrating Information Technology and Engineering for a Greener Tomorrow
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Venue:</span> St. Paul University Philippines, Tuguegarao City, Cagayan
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Date:</span> April 17-19, 2024
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-lg font-bold text-black mb-2">Cyber Summit 2023</h3>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Theme:</span> Driving Sustainable Development through Innovation of Technology for a Better Future
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Venue:</span> St. Paul University Philippines, Tuguegarao City, Cagayan
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-black">Date:</span> May 24-26, 2023
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
