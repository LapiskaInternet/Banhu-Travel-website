import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Tours } from "@/components/tours";
import { Community } from "@/components/community";
import { Partners } from "@/components/partners";
import { BookingForm } from "@/components/booking-form";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Tours />
        <Community />
        <Partners />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
