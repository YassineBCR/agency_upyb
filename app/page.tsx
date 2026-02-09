import { Starfield } from "@/components/starfield"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Stats } from "@/components/stats"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#000510" }}
    >
      <Starfield />
      <Navbar />
      <Hero />
      <Portfolio />
      <Stats />
      <Footer />
    </main>
  )
}
