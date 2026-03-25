"use client";

import { Navbar } from "@/components/navbar";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add logic to send the email
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-black mb-12">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Email</p>
                <a
                  href="mailto:christianraganit@spup.edu.ph"
                  className="text-blue-600 hover:text-blue-800 text-lg"
                >
                  christianraganit@spup.edu.ph
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  Alternative Email
                </p>
                <a
                  href="mailto:christiangemraganit@gmail.com"
                  className="text-blue-600 hover:text-blue-800 text-lg"
                >
                  christiangemraganit@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Location</p>
                <p className="text-gray-700 text-lg">Centro, Buguey, Cagayan, Philippines</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Social Links</p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/devichann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-lg block"
                  >
                    GitHub: @devichann
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-lg block"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-black text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="px-4 py-3 bg-green-100 border border-green-500 text-green-700">
                  Message submitted successfully!
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
