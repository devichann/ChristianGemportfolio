"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import heroImage from "@/Images/assets/heroimage.jpg"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 py-8 md:px-12 lg:px-20">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="text-sm tracking-wider text-foreground">
          Christian Gem Raganit
        </div>
        <nav className="hidden md:flex items-center gap-8">
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
      <main className="flex-1 flex items-center justify-between gap-16">
        <div className="flex flex-col justify-center max-w-xl">
          <p className="text-sm tracking-wider text-muted-foreground mb-6">
            developer
          </p>
          <h1 className="text-base md:text-lg leading-relaxed text-foreground mb-8 max-w-xl">
            bsit 2nd yr web dev from saint paul university of philippines
          </h1>
          <div className="flex items-center gap-6">
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

        {/* Image with name below */}
        <div className="hidden md:flex flex-col items-start gap-3 flex-shrink-0">
          <Image
            src={heroImage}
            alt="Christian Gem Raganit"
            width={240}
            height={300}
            className="object-cover grayscale"
            priority
          />
          <p className="text-sm tracking-wider text-foreground">
            Christian Gem Raganit
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between">
        <div className="text-sm tracking-wider text-muted-foreground">
          based in canada
        </div>
        <div className="flex items-center gap-6">
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
