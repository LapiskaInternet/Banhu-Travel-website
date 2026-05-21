import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "Motsepadi Village Walk",
    description:
      "Walk through the heart of Motsepadi village, meet local families, and experience authentic Sepedi culture and traditions.",
    price: "R450",
    duration: "2-3 hours",
    image: "/images/tour-village.jpg",
  },
  {
    id: 2,
    title: "Mariepskop Mountain Adventure",
    description:
      "Conquer the summit of Mariepskop — the highest peak in the northern Drakensberg — with breathtaking 360° views spanning three provinces.",
    price: "R1,250",
    duration: "Full day",
    image: "/images/tour-mountain.jpg",
  },
  {
    id: 3,
    title: "Hoedspruit Wildlife Experience",
    description:
      "Encounter the iconic wildlife of the Lowveld on this guided bush experience in the Acornhoek conservancy area.",
    price: "R950",
    duration: "Half day",
    image: "/images/tour-wildlife.jpg",
  },
  {
    id: 4,
    title: "Thornybush Conservation Tour",
    description:
      "An exclusive partnership tour through Thornybush Nature Reserve, supporting conservation and community learner guide programmes.",
    price: "R1,800",
    duration: "Full day",
    image: "/images/tour-conservation.jpg",
  },
];

export function Tours() {
  return (
    <section id="tours" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Tours
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {"Discover Mpumalanga's hidden gems"}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="group overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.price}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {tour.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {tour.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
                <Button
                  asChild
                  className="mt-4 w-full bg-primary hover:bg-primary/90"
                >
                  <Link href="#booking">Book This Tour</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
