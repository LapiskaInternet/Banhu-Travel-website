"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#tours", label: "Tours" },
  { href: "#community", label: "Community" },
  { href: "#booking", label: "Book Now" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">B</span>
            </div>
            <span className="font-serif font-bold text-xl text-foreground">BANHU</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+27649594490"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>064 959 4490</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>SeSo</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-80 overflow-y-auto">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>SeSotho</DropdownMenuItem>
                <DropdownMenuItem>Sepedi</DropdownMenuItem>
                <DropdownMenuItem>Xitsonga</DropdownMenuItem>
                <DropdownMenuItem>Chinese (中文)</DropdownMenuItem>
                <DropdownMenuItem>Russian (Русский)</DropdownMenuItem>
                <DropdownMenuItem>Hindi (हिन्दी)</DropdownMenuItem>
                <DropdownMenuItem>French (Français)</DropdownMenuItem>
                <DropdownMenuItem>German (Deutsch)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="tel:+27649594490"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span>064 959 4490</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
