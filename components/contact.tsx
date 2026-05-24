"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "064 959 4490",
      href: "tel:+27649594490",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@banhutravel.co.za",
      href: "mailto:info@banhutravel.co.za",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Mount Lapiska, Canhuk Drive, Acornhoek, Mpumalanga, South Africa",
      href: null,
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: t.contact.hoursValue,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link
                href="https://wa.me/27649594490"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.contact.whatsapp}
              </Link>
            </Button>
          </div>

          {/* Map */}
          <div className="h-80 lg:h-auto rounded-2xl overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57572.76461792432!2d31.0591!3d-24.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec358e9c0b5d18f%3A0x7f1f1e77f4c5b3d8!2sAcornhoek%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Banhu Travel & Tours Location - Mount Lapiska, Acornhoek, Mpumalanga"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
