"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import heroImage from "@/Images/assets/heroimage.jpg"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 py-8 md:px-12 lg:px-20">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="text-xs tracking-wider text-foreground">
          christian gem raganit
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            work
          </a>
          <a href="#about" className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            about
          </a>
          <a href="#contact" className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            contact
          </a>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="flex-1 flex items-center justify-between gap-16">
        <div className="flex flex-col justify-center max-w-xl">
          <p className="text-xs tracking-wider text-muted-foreground mb-6">
            developer
          </p>
          <h1 className="text-sm md:text-base leading-relaxed text-foreground mb-8 max-w-xl">
            bsit 2nd yr web dev from saint paul university of philippines
          </h1>
          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs tracking-wider text-foreground border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
            >
              view work
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#contact"
              className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              get in touch
            </a>
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0">
          <Image
            src={heroImage}
            alt="christian gem raganit"
            width={200}
            height={260}
            className="object-cover grayscale"
            priority
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between">
        <div className="text-xs tracking-wider text-muted-foreground">
          based in canada
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            github
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            linkedin
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            twitter
          </a>
        </div>
      </footer>
    </section>
  )
}
