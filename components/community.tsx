"use client";

import { GraduationCap, Handshake, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function Community() {
  const { t } = useLanguage();

  const communityItems = [
    {
      icon: GraduationCap,
      title: t.community.learnerGuide.title,
      description: t.community.learnerGuide.description,
    },
    {
      icon: Handshake,
      title: t.community.partnership.title,
      description: t.community.partnership.description,
    },
    {
      icon: TrendingUp,
      title: t.community.economic.title,
      description: t.community.economic.description,
    },
  ];

  return (
    <section id="community" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.community.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.community.subtitle}
          </p>
        </div>

        {/* Community Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {communityItems.map((item) => (
            <Card
              key={item.title}
              className="border-0 bg-muted/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
