import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
    </main>
  )
}
