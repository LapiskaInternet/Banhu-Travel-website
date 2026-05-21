import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#tours", label: "Tours" },
  { href: "#community", label: "Community" },
  { href: "#booking", label: "Book Now" },
  { href: "#contact", label: "Contact" },
];

const compliance = [
  "CIPC 2026/020289/07",
  "SARS 9229491288",
  "Tel: 064 959 4490",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">
                  B
                </span>
              </div>
              <span className="font-serif font-bold text-xl">Banhu Tourism</span>
            </div>
            <p className="mt-4 text-background/70 max-w-sm">
              Authentic bushveld experiences in the heart of Mpumalanga
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="font-serif text-lg font-bold">Compliance</h3>
            <ul className="mt-4 space-y-3">
              {compliance.map((item) => (
                <li key={item} className="text-background/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Banhu Tourism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
