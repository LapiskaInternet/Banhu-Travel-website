import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
          Experience the Heart of Mpumalanga
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
          Guided tours through Mariepskop, Motsepadi, and the Acornhoek region
          — where nature meets community
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            <Link href="#booking">Book Your Adventure</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 hover:text-white px-8 py-6 text-lg"
          >
            <Link href="#tours">Explore Tours</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </Link>
      </div>
    </section>
  );
}
