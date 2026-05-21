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

const tours = [
  { value: "village-walk", label: "Motsepadi Village Walk - R450" },
  { value: "mountain-adventure", label: "Mariepskop Mountain Adventure - R1,250" },
  { value: "wildlife-experience", label: "Hoedspruit Wildlife Experience - R950" },
  { value: "conservation-tour", label: "Thornybush Conservation Tour - R1,800" },
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
                Booking Request Received
              </h3>
              <p className="mt-4 text-muted-foreground">
                {"Thank you for your booking request! We'll confirm your adventure via WhatsApp shortly."}
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="mt-6"
              >
                Submit Another Booking
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
            Book Your Adventure
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {"Fill in the form below and we'll confirm your booking via WhatsApp"}
          </p>
        </div>

        {/* Form */}
        <Card className="mt-12 border-0 bg-card shadow-xl">
          <CardContent className="p-6 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
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
                <Label htmlFor="phone">Phone Number *</Label>
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
                <Label htmlFor="tour">Tour Selection *</Label>
                <Select name="tour" required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a tour" />
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
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
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
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea
                  id="requests"
                  name="requests"
                  placeholder="Any dietary requirements, accessibility needs, or special requests..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {"Payment is via EFT. We'll send banking details after confirmation."}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
