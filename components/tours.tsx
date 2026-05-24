"use client";

import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const tours = [
  {
    id: 1,
    titleKey: "motsepadi",
    title: "Motsepadi Village Walk",
    description:
      "Walk through the heart of Motsepadi village, meet local families, and experience authentic Sepedi culture and traditions.",
    price: "R450",
    duration: "2-3 hours",
    image: "/images/tour-village.jpg",
    comingSoon: false,
  },
  {
    id: 2,
    titleKey: "mariepskop",
    title: "Mariepskop Mountain Adventure",
    description:
      "Conquer the summit of Mariepskop — the highest peak in the northern Drakensberg — with breathtaking 360° views spanning three provinces.",
    price: "R1,250",
    duration: "Full day",
    image: "/images/tour-mountain.jpg",
    comingSoon: false,
  },
  {
    id: 3,
    titleKey: "shangane",
    title: "Shangane Heritage Trail",
    description:
      "Immerse yourself in the rich traditions and heritage of the Shangane people through an authentic cultural journey.",
    price: "R650",
    duration: "Half day",
    image: "/images/tour-wildlife.jpg",
    comingSoon: true,
  },
  {
    id: 4,
    titleKey: "moloro",
    title: "Moloro Village Trail",
    description:
      "Discover the beauty and community spirit of Moloro village on this guided walking tour through scenic landscapes.",
    price: "R500",
    duration: "3-4 hours",
    image: "/images/tour-conservation.jpg",
    comingSoon: false,
  },
  {
    id: 5,
    titleKey: "panorama",
    title: "Panorama Tour",
    description:
      "Experience the famous Panorama Route with stunning views of God's Window, Blyde River Canyon, and the Three Rondavels.",
    price: "R1,500",
    duration: "Full day",
    image: "/images/hero-bg.jpg",
    comingSoon: false,
  },
  {
    id: 6,
    titleKey: "mpisane",
    title: "Mpisane Battle Site",
    description:
      "Walk in the footsteps of history at the Mpisane Battle Site, learning about the rich military heritage of the region.",
    price: "R550",
    duration: "Half day",
    image: "/images/guide-tourists.jpg",
    comingSoon: true,
  },
];

export function Tours() {
  const { t } = useLanguage();

  return (
    <section id="tours" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.tours.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.tours.subtitle}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className={`group overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-shadow ${
                tour.comingSoon ? "opacity-80" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  {tour.comingSoon ? (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {t.tours.comingSoon}
                    </Badge>
                  ) : (
                    <Badge className="bg-primary text-primary-foreground">
                      {tour.price}
                    </Badge>
                  )}
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
                {tour.comingSoon ? (
                  <Button
                    disabled
                    className="mt-4 w-full"
                    variant="outline"
                  >
                    {t.tours.comingSoon}
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="mt-4 w-full bg-primary hover:bg-primary/90"
                  >
                    <Link href="#booking">{t.tours.bookTour}</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
