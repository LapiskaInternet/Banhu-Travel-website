import { Award, CheckCircle, Users } from "lucide-react";

const stats = [
  { icon: CheckCircle, label: "50+ Tours Completed" },
  { icon: Award, label: "CATHSSETA Certified" },
  { icon: Users, label: "Community First" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/guide-tourists.jpg"
                alt="Banhu Tourism guide showing tourists the bushveld"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              About Banhu Tourism
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded by Jimmy Mbowane, Banhu Tourism is a CATHSSETA-registered
              tour operation based in Acornhoek, Mpumalanga. Our office is
              located at Mount Lapiska on Canhuk Drive. We specialize in
              authentic bushveld experiences that connect visitors with the
              natural beauty and cultural richness of the Acornhoek region and
              the greater Lowveld.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission goes beyond tourism — we are committed to community
              upliftment through skills development and job creation in
              partnership with Thornybush Nature Reserve, the Timbavati
              Foundation, and a network of local partners. Every tour you take
              directly supports learner guides from Powerline and Shobiyane
              villages, creating pathways into the tourism industry for young
              South Africans.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6">
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
