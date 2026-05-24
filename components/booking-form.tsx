"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

const tours = [
  { value: "motsepadi", label: "Motsepadi Village Walk - R450" },
  { value: "mariepskop", label: "Mariepskop Mountain Adventure - R1,250" },
  { value: "moloro", label: "Moloro Village Trail - R500" },
  { value: "panorama", label: "Panorama Tour - R1,500" },
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 lg:py-28 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-secondary/10">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                {t.booking.success.title}
              </h3>
              <p className="mt-4 text-muted-foreground">
                {t.booking.success.message}
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="mt-6"
              >
                {t.booking.success.another}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 lg:py-28 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.booking.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Form */}
        <Card className="mt-12 border-0 bg-card shadow-xl">
          <CardContent className="p-6 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.booking.form.name} *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.booking.form.name}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.booking.form.email} *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t.booking.form.phone} *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+27 XX XXX XXXX"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tour">{t.booking.form.tourSelection} *</Label>
                <Select name="tour" required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={t.booking.form.selectTour} />
                  </SelectTrigger>
                  <SelectContent>
                    {tours.map((tour) => (
                      <SelectItem key={tour.value} value={tour.value}>
                        {tour.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">{t.booking.form.preferredDate}</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">{t.booking.form.guests}</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    defaultValue="1"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests">{t.booking.form.specialRequests}</Label>
                <Textarea
                  id="requests"
                  name="requests"
                  placeholder={t.booking.form.specialRequests}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.booking.form.submitting : t.booking.form.submit}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {t.booking.form.paymentNote}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
