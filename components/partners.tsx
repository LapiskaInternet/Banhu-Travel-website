import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Acorn Art Hub",
    description:
      "Promoting local arts, crafts, and cultural expression in the Acornhoek community.",
  },
  {
    name: "Tilali Information Centre",
    description:
      "Community information hub providing resources and guidance to local residents and visitors.",
  },
  {
    name: "Lapiska Internet Café",
    description:
      "Providing digital access and connectivity to the Acornhoek community from our shared location on Canhuk Drive.",
  },
  {
    name: "Shobiyane High School",
    description:
      "Partnering in education and youth development programmes to build future tourism professionals.",
  },
  {
    name: "Powerline Primary School",
    description:
      "Supporting early education and creating awareness of tourism career opportunities for young learners.",
  },
  {
    name: "Thornybush Community",
    description:
      "Collaborating on conservation, community upliftment, and sustainable tourism initiatives.",
  },
  {
    name: "Timbavati Foundation",
    description:
      "Supporting conservation education and community development in the Greater Timbavati area.",
  },
  {
    name: "SASEDA Business Forum",
    description:
      "Advancing local economic development through business networking and enterprise support in the region.",
  },
  {
    name: "Ten Boys Enterprise",
    description:
      "Local enterprise partner driving community-based business initiatives and job creation.",
  },
];

export function Partners() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Strategic Partners
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Together we build a stronger community
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
