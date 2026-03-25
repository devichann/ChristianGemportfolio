"use client"

import Image from "next/image"
import { ArrowUpRight, Github, Mail, Linkedin } from "lucide-react"
import heroImage from "@/Images/assets/heroimage.jpg"
import spupLogo from "@/Images/assets/spuplogo.png"

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-between px-6 py-10 md:px-16 lg:px-24">

      {/* Main Hero Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-20 py-20">

        {/* Left — Text Content */}
        <div className="flex flex-col gap-8 w-full max-w-md">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium">
            web developer
          </p>

          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium">
            Christian Gem Raganit
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              BSIT 2nd Year — Web Development
            </p>
            <div className="flex items-center gap-2.5">
              <Image
                src={spupLogo}
                alt="SPUP"
                width={24}
                height={24}
                className="object-contain flex-shrink-0"
              />
              <p className="text-lg text-muted-foreground">
                Saint Paul University of Philippines
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/devichann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:christiangemraganit@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="mailto:christiangemraganit@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-foreground rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-gray-400 dark:border-gray-500 text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              Download Resume
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border mt-4"></div>
        </div>

        {/* Right — Hero Image with name */}
        <div className="hidden md:flex flex-col items-start gap-4 flex-shrink-0">
          <Image
            src={heroImage}
            alt="Christian Gem Raganit"
            width={320}
            height={420}
            className="object-cover"
            priority
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
        <div className="text-base tracking-wider text-muted-foreground">
          based in canada
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/devichann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            github
          </a>
          <a
            href="https://twitter.com/christiangem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            twitter
          </a>
        </div>
      </footer>

    </section>
  )
}
