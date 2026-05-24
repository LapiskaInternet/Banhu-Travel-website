"use client";

import Image from "next/image";
import { Award, CheckCircle, Users } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: CheckCircle, label: `6 ${t.about.stats.tours}` },
    { icon: Award, label: `4.9 ${t.about.stats.rating}` },
    { icon: Users, label: `500+ ${t.about.stats.guests}` },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/guide-tourists.jpg"
                alt="Banhu Travel & Tours guide showing tourists the bushveld"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Logo overlay */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 bg-background rounded-full p-2 shadow-xl">
              <Image
                src="/images/logo.png"
                alt="Banhu Travel & Tours"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {t.about.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission goes beyond tourism — we are committed to community
              upliftment through skills development and job creation in
              partnership with local schools and businesses. Every tour you take
              directly supports learner guides from local villages, creating
              pathways into the tourism industry for young South Africans.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-muted rounded-full px-5 py-3"
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
