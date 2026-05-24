"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

const compliance = [
  "CIPC 2026/020289/07",
  "SARS 9229491288",
  "Tel: 064 959 4490",
];

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#tours", label: t.nav.tours },
    { href: "#community", label: t.nav.community },
    { href: "#booking", label: t.nav.bookNow },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Banhu Travel & Tours"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl">BANHU</span>
                <span className="text-sm text-background/70">Travel & Tours</span>
              </div>
            </div>
            <p className="mt-4 text-background/70 max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold">{t.footer.quickLinks}</h3>
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
            <h3 className="font-serif text-lg font-bold">{t.footer.compliance}</h3>
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
            © {new Date().getFullYear()} Banhu Travel & Tours. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
