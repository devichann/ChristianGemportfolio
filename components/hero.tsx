"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import heroImage from "@/Images/assets/heroimage.jpg"
import spupLogo from "@/Images/assets/spuplogo.png"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-8 py-10 md:px-16 lg:px-24">

      {/* Header */}
      <header className="flex items-center justify-between pb-8 border-b border-border">
        <div className="text-sm tracking-widest font-medium">
          Christian Gem Raganit
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            work
          </a>
          <a href="#about" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            about
          </a>
          <a href="#contact" className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            contact
          </a>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="flex-1 flex items-center justify-between gap-20 py-16">

        {/* Left — Text Content */}
        <div className="flex flex-col gap-7 max-w-lg">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            web developer
          </p>

          <h1 className="text-xl md:text-2xl font-light leading-snug tracking-wide text-foreground">
            Christian Gem Raganit
          </h1>

          <div className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              bsit 2nd year — web development
            </p>
            <div className="flex items-center gap-2.5">
              <Image
                src={spupLogo}
                alt="SPUP"
                width={22}
                height={22}
                className="object-contain flex-shrink-0"
              />
              <p className="text-sm text-muted-foreground">
                saint paul university of philippines
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-1">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm tracking-wider text-foreground border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
            >
              view work
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              get in touch
            </a>
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="hidden md:flex flex-col items-start gap-4 flex-shrink-0">
          <Image
            src={heroImage}
            alt="Christian Gem Raganit"
            width={260}
            height={320}
            className="object-cover"
            priority
          />
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Christian Gem Raganit
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-8 border-t border-border">
        <div className="text-sm tracking-wider text-muted-foreground">
          based in canada
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            linkedin
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            twitter
          </a>
        </div>
      </footer>

    </section>
  )
}
