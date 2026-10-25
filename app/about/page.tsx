"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Wrench,
  HeartHandshake,
  CheckCircle2,
  Building2,
  Award,
  Quote,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const pillars = [
    {
      title: "Integrity",
      tagline: "Transparent reporting with zero hidden contractor markups.",
      desc: "We operate on an uncompromising open-ledger model. Landlords receive itemized statements with zero hidden contractor surcharges or secret supplier kickbacks. Every pound is accounted for with total transparency.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      badge: "Open-Ledger Operations",
    },
    {
      title: "Yield Focus",
      tagline: "Active portfolio management designed to outpace traditional rental yields.",
      desc: "Passive landlording is obsolete. We deploy dynamic pricing algorithms, guaranteed corporate leases, and dual-strategy short-let positioning to consistently outperform stagnant high-street letting agent yields by 25% to 45%.",
      icon: <TrendingUp className="w-6 h-6 text-brand-gold" />,
      badge: "Alpha Cashflow Strategy",
    },
    {
      title: "Property Care",
      tagline: "Treating every unit as an asset, ensuring strict preventative maintenance.",
      desc: "We protect both capital appreciation and day-to-day functionality. Routine quarterly photographic audits and an in-house fleet of certified trades ensure small issues never turn into catastrophic structural liabilities.",
      icon: <Wrench className="w-6 h-6 text-brand-gold" />,
      badge: "Preventative Oversight",
    },
    {
      title: "Client Peace of Mind",
      tagline: "Complete hands-off operations for UK-based and international property owners.",
      desc: "Whether you reside in Kensington or Singapore, our white-glove stewardship absorbs every 2:00 AM emergency, tenant vetting dispute, and statutory compliance filing. You enjoy fixed liquidity without friction.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-gold" />,
      badge: "Total Landlord Freedom",
    },
  ];

  const milestones = [
    {
      year: "15+ Years",
      title: "Director-Level Property Heritage",
      description:
        "Senior leadership accumulated over a decade and a half directing prime central London portfolios, overseeing prime residential lettings, complex AST contract structuring, and institutional landlord advisory.",
    },
    {
      year: "2024",
      title: "Establishment of Makan Home Rentals Ltd",
      description:
        "Founded to modernize fragmented, antiquated property management. Built from day one to deliver guaranteed rent-to-rent security, high-yield short-let syndication, and in-house trade response.",
    },
    {
      year: "Today",
      title: "70+ Active Prime UK Residential Units",
      description:
        "Rapidly scaled from bespoke Central London apartments to managing over 70 high-performing residential properties across Mayfair, Marylebone, Kensington, and key commuter corridors with a 99.4% historical occupancy rate.",
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO HEADER */}
      {/* ========================================================================= */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/10">
        {/* Soft, natural ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-brand-gold/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
              About Makan Home Rentals Ltd
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-light leading-[1.15] max-w-4xl mx-auto"
          >
            Decades of Market Expertise, Modern Property Management.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-muted max-w-3xl mx-auto mt-6 leading-relaxed font-light"
          >
            Founded on institutional discipline, algorithmic efficiency, and unyielding landlord protection, Makan Home Rentals Ltd bridges timeless British real estate heritage with modern high-yield operational mastery.
          </motion.p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND STORY BLOCK */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text Column (Left) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-brand-card border border-brand-gold/40 text-brand-gold text-[10px] uppercase tracking-widest font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Our Heritage &amp; Foundation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-light">
                From Boutique Lettings to Nationwide Institutional Care
              </h2>

              <p className="text-base text-brand-gold font-medium leading-relaxed">
                Makan Home Rentals Ltd was formally established in 2024, founded upon over 15 years of Director-level property management experience in prime Central London real estate.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                Having witnessed firsthand the systemic shortcomings of traditional high-street agencies&mdash;uncontrolled void periods, opaque contractor invoices, and slow tenant resolution&mdash;our leadership founded Makan Home Rentals Ltd to pioneer a new paradigm. We set out to offer contractual income guarantees, data-driven short-let maximization, and a dedicated in-house trade fleet.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                What began as a focused management initiative across Mayfair, Marylebone, and Kensington has rapidly evolved into an active portfolio of over <span className="text-brand-light font-semibold">70+ prime residential properties</span> across the UK. Today, institutional investors, family offices, and individual landlords trust Makan Home Rentals to safeguard their capital and generate predictable, superior returns.
              </p>

              {/* Trajectory Milestone Cards */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-brand-card/60 border border-white/5 hover:border-brand-gold/30 transition-colors flex items-start space-x-4"
                  >
                    <div className="px-2.5 py-1 rounded bg-brand-dark border border-brand-gold/40 text-[11px] font-bold text-brand-gold uppercase tracking-wider shrink-0 mt-0.5">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-brand-light uppercase tracking-wider">
                        {milestone.title}
                      </h4>
                      <p className="text-[11px] text-brand-muted mt-1 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual Column (Right) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-sm overflow-hidden border border-brand-gold/40 shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Makan Home Rentals Corporate Heritage"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent" />

                {/* Floating Metrics Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:bottom-6 sm:left-6 sm:right-6 sm:p-6 rounded-sm bg-brand-card/90 backdrop-blur-md border border-white/10 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[10px] uppercase text-brand-muted block">Active Portfolio</span>
                      <span className="font-serif text-2xl font-bold text-gold-gradient">70+ Units</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase text-brand-muted block">Experience</span>
                      <span className="font-serif text-2xl font-bold text-brand-light">15+ Years</span>
                    </div>
                  </div>
                  <p className="text-xs text-brand-light font-medium flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Registered in England &amp; Wales &bull; London Headquarters</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE CORPORATE PILLARS (4-Card Grid) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-brand-card/40 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-card">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                Guiding Principles
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-light">
              Core Corporate Pillars
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Our operational blueprint is anchored on four institutional commitments that guarantee unmatched landlord security, operational transparency, and financial outperformance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-sm bg-brand-card/90 border border-white/10 p-8 sm:p-10 transition-all duration-300 hover:border-brand-gold/60 hover:shadow-2xl hover:shadow-brand-gold/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Top gold accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-brand-dark/90 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold transition-colors shadow-inner-gold">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-sm bg-brand-dark border border-brand-gold/30 text-brand-gold">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-light mb-2 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-brand-gold font-medium mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXECUTIVE QUOTE CARD */}
      {/* ========================================================================= */}
      <section className="py-24 relative overflow-hidden bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto relative rounded-sm bg-brand-card border border-brand-gold/30 shadow-2xl p-6 sm:p-14 lg:p-16 overflow-hidden"
          >
            {/* Gilded quote background icon */}
            <Quote className="absolute -top-6 -right-6 w-36 h-36 text-brand-gold/5 pointer-events-none" />

            <div className="space-y-6 sm:space-y-8 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-brand-card border border-brand-gold/50 flex items-center justify-center text-brand-gold shadow-inner-gold">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <blockquote className="font-serif text-xl sm:text-3xl lg:text-4xl text-brand-light font-medium leading-relaxed italic">
                &ldquo;Our objective is simple: remove every operational headache from the landlord while maximizing the intrinsic value and yield of their property.&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-gold">
                    Managing Director
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-brand-muted mt-0.5">
                    Makan Home Rentals Ltd &bull; London Registered Office
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-xs text-brand-muted">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>ARLA Propertymark Protected Firm</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. REGULATORY ACCREDITATIONS & FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-brand-card/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
            Institutional Oversight
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-light">
            Entrust Your Assets to Proven Specialists
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-light">
            Discover how Makan Home Rentals Ltd can transform your residential property holdings into high-yield, zero-void assets.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-gold-hover transition-colors"
            >
              Request Executive Consultation
            </Link>
            <a
              href="mailto:info@makanhomerentalsltd.com"
              className="px-8 py-4 rounded-sm border border-white/20 text-brand-light hover:text-brand-gold hover:border-brand-gold/60 font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>Email: info@makanhomerentalsltd.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
