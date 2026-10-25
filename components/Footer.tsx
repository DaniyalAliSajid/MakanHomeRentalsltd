import React from "react";
import Link from "next/link";
import { Shield, Award, Mail, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark border-t border-white/10 text-brand-muted text-sm z-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-brand-gold/[0.03] blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo variant="dark" />

            <p className="text-xs leading-relaxed text-brand-muted max-w-sm">
              Professional residential property asset management and guaranteed lettings across London and key UK commuter regions.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 text-xs">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-brand-card/80 border border-white/5 text-brand-light">
                <Shield className="w-3.5 h-3.5 text-brand-gold" />
                <span>Client Money Protected</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-brand-card/80 border border-white/5 text-brand-light">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>ARLA Registered Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors">
                  Guaranteed Rent (Rent-to-Rent)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors">
                  Short-Let Management (Airbnb &amp; Booking.com)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold transition-colors">
                  Complete In-House Maintenance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Landlord Free Evaluation
                </Link>
              </li>
            </ul>
          </div>

          {/* London Registered Office */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Registered Office
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Flat 39 Dudley Court, Upper Berkeley Street, London W1H 5QA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:info@makanhomerentalsltd.com" className="hover:text-brand-gold transition-colors break-all">
                  info@makanhomerentalsltd.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:office@makanhomerentalsltd.com" className="hover:text-brand-gold transition-colors break-all">
                  office@makanhomerentalsltd.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-1.5 text-xs text-brand-gold hover:text-brand-gold-hover font-medium group"
              >
                <span>Request Private Valuation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory, Legal & Attribution Line */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted/70 text-center sm:text-left">
          <p>
            &copy; {currentYear} Makan Home Rentals Ltd (Company No. 15762828). Registered in England &amp; Wales. All rights reserved.
          </p>
          <div>
            <span className="text-[11px] uppercase tracking-wider">
              Created by{" "}
              <a
                href="https://infinitosoftwares.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold-hover underline underline-offset-4 font-semibold transition-colors"
              >
                Infinito Softwares Pvt. Ltd.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
