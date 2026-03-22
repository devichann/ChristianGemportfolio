import Link from "next/link";
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold">Person Search</h1>
              <div className="flex gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/search"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
    </main>
  )
}
