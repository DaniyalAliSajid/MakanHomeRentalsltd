"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/Logo";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll effect detection for enhanced elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md bg-brand-dark/80 border-b border-white/10 ${
          scrolled ? "shadow-2xl shadow-black/60 bg-brand-dark/90" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Wordmark */}
            <Link
              href="/"
              className="group flex items-center transition-transform duration-300 hover:scale-[1.01]"
              aria-label="Makan Home Rentals Ltd - Home"
            >
              <Logo variant="dark" />
            </Link>

            {/* Center: Desktop Navigation items with animated hover indicator bars */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative py-2 text-sm tracking-wider font-medium transition-colors duration-200 ${
                      isActive ? "text-brand-gold font-semibold" : "text-brand-light/90 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Gold outline button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-gold border border-brand-gold/80 rounded-sm overflow-hidden transition-all duration-200 hover:text-brand-dark hover:bg-brand-gold group"
              >
                <span className="flex items-center space-x-2">
                  <span>Landlord Portal / Free Evaluation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2.5 text-brand-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 rounded-sm border border-brand-gold/30 bg-brand-card/60 transition-colors"
                aria-label="Open main menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay - Direct Portal into body for 100% viewport coverage */}
      {mounted &&
        createPortal(
          <div
            id="mobile-navigation-menu"
            className={`fixed inset-0 z-[99999] bg-[#070C12] flex flex-col md:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-3"
            }`}
            style={{ width: "100vw", height: "100dvh" }}
            aria-hidden={!isOpen}
          >
            {/* Top Bar inside Overlay matching exactly 80px (h-20) */}
            <div className="h-20 px-4 sm:px-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#070C12]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="group flex items-center"
                aria-label="Makan Home Rentals Ltd - Home"
              >
                <Logo variant="dark" />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-brand-gold rounded-sm border border-brand-gold/50 bg-brand-card/90 hover:bg-brand-gold hover:text-brand-dark transition-all duration-200 focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 py-6 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* Agency Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                    Prime UK Property Management
                  </span>
                </div>

                {/* Primary Nav Links */}
                <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-3.5 px-4 rounded-sm transition-all ${
                          isActive
                            ? "bg-brand-card text-brand-gold border-l-2 border-brand-gold font-serif text-2xl font-bold shadow-md"
                            : "text-brand-light hover:text-brand-gold hover:bg-white/[0.04] font-serif text-2xl"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight
                          className={`w-5 h-5 ${isActive ? "text-brand-gold" : "text-brand-muted"}`}
                        />
                      </Link>
                    );
                  })}
                </nav>

                {/* Quick Service Category Links */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-brand-muted font-semibold block px-2">
                    Core Portfolio Services
                  </span>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-sm bg-brand-card/60 hover:bg-brand-card border border-white/5 text-brand-light hover:text-brand-gold transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="font-medium">Guaranteed Rent (Rent-to-Rent)</span>
                      </div>
                      <span className="text-[10px] text-brand-gold font-mono font-semibold">0% Void</span>
                    </Link>

                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-sm bg-brand-card/60 hover:bg-brand-card border border-white/5 text-brand-light hover:text-brand-gold transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="font-medium">Short-Let Maximization (Airbnb)</span>
                      </div>
                      <span className="text-[10px] text-brand-gold font-mono font-semibold">+40% Yield</span>
                    </Link>

                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-sm bg-brand-card/60 hover:bg-brand-card border border-white/5 text-brand-light hover:text-brand-gold transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="font-medium">24/7 Dedicated In-House Fleet</span>
                      </div>
                      <span className="text-[10px] text-brand-gold font-mono font-semibold">Certified</span>
                    </Link>
                  </div>
                </div>

                {/* Primary Valuation Action Button */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-gold-hover transition-colors flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Request Landlord Proposal</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Bottom Credentials & Registered Office Strip */}
              <div className="pt-5 border-t border-white/10 text-xs text-brand-muted space-y-2.5">
                <div className="flex items-center space-x-2 text-brand-light/90">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>ARLA Propertymark Protected Firm</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-light/90">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <a
                    href="mailto:info@makanhomerentalsltd.com"
                    className="hover:text-brand-gold transition-colors break-all"
                  >
                    info@makanhomerentalsltd.com
                  </a>
                </div>
                <p className="text-[11px] text-brand-muted/70 leading-relaxed pt-1">
                  Flat 39 Dudley Court, Upper Berkeley Street, London W1H 5QA &bull; Company No. 15762828
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
