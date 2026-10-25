"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Wrench,
  Check,
  X,
  ArrowRight,
  CheckCircle2,
  Award,
  Mail,
} from "lucide-react";

export default function ServicesPage() {
  // Framer Motion Animation Variants
  const slideFromLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const slideFromRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const comparisonRows = [
    {
      feature: "Rent Guarantee",
      highStreet: "No guarantee. Landlord bears full loss if tenant defaults or vacates.",
      makan: "100% Contractually Guaranteed. Payout on exact fixed date every month.",
      makanHighlight: true,
    },
    {
      feature: "Void Period Protection",
      highStreet: "Zero protection. Landlords face 4–8 weeks unpaid void periods between tenancies.",
      makan: "Complete Zero-Void Assurance. Contract runs continuously for 3–5 years.",
      makanHighlight: true,
    },
    {
      feature: "Short-Let Yield Strategy",
      highStreet: "Incapable. Restricted to standard rigid ASTs with no revenue agility.",
      makan: "Dynamic Algorithmic Engine across Airbnb & Booking.com delivering +25% to +45% yield.",
      makanHighlight: true,
    },
    {
      feature: "24/7 Maintenance In-House",
      highStreet: "Outsourced to third-party contractors with 15–20% billing markups.",
      makan: "Dedicated in-house certified trade fleet. Zero contractor commission markups.",
      makanHighlight: true,
    },
    {
      feature: "Dedicated Account Manager",
      highStreet: "Generic call-centre ticket desk with frequent property manager turnover.",
      makan: "Dedicated Senior Property Manager with direct phone & priority email desk.",
      makanHighlight: true,
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/10">
        {/* Ambient lighting & subtle gold radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-gold/15 via-brand-card/30 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -top-24 right-12 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Prime UK Residential Asset Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-light leading-[1.15] max-w-4xl mx-auto"
          >
            Tailored Property Solutions for Modern Landlords
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-muted max-w-3xl mx-auto mt-6 leading-relaxed font-light"
          >
            From contractual rent certainty to algorithmic short-let revenue maximization and 24/7 preventative maintenance, Makan Home Rentals Ltd elevates the standard of British property ownership.
          </motion.p>

          {/* Quick Metrics Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-brand-light/90"
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-sm bg-brand-card/60 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span>0% Commission on Guaranteed Schemes</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-sm bg-brand-card/60 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span>100% On-Time Contractual Payouts</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-sm bg-brand-card/60 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span>90-Minute Emergency Trade Dispatch</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE DETAILED SERVICE BLOCKS (Alternating Left/Right Split Layouts) */}
      {/* ========================================================================= */}
      <section className="py-24 space-y-28 relative">
        {/* Block A: Guaranteed Rent (Rent-to-Rent) -> Text Left, Image Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Side (Left) */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-brand-card border border-brand-gold/40 text-brand-gold text-[10px] uppercase tracking-widest font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Vacancy Risk Assurance</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-light">
                Guaranteed Rent (Rent-to-Rent)
              </h2>

              <p className="text-base text-brand-gold font-medium">
                Long-term hands-off income for landlords wanting zero vacancy risk.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                We sign long-term corporate lease contracts directly with property owners, assuming 100% of the operational and vacancy liabilities. Whether the residence is occupied, undergoing guest turnover, or tenant rent is delayed, your agreed net sum is transferred electronically into your account on the exact same date every single month.
              </p>

              {/* Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Fixed 3–5 Year Contracts</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    Unbroken institutional leases with zero void periods and index-linked stability.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Zero Management Fees</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    No tenant-finding fees, no monthly commission, and no renewal charges.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Same-Day Payout Guarantee</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    Direct automated BACS payment on the 1st of every month without exception.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Bi-Weekly Professional Cleaning</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    Complimentary hotel-standard housekeeping to keep your home in pristine showroom condition.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact?service=Guaranteed+Rent+Scheme"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors"
                >
                  <span>Request Guaranteed Rent Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Image Side (Right) */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-sm overflow-hidden border border-brand-gold/40 shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                  alt="Makan Home Rentals Guaranteed Rent Suite"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-brand-card/90 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold block">
                    Contractual Certainty
                  </span>
                  <p className="font-serif text-lg font-bold text-brand-light">
                    Zero Void Days Contractually Guaranteed
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Full eviction indemnity &amp; legal protection included.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Block B: Short-Let Management -> Image Left, Text Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Side (Left on desktop) */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 order-2 lg:order-1 relative"
            >
              <div className="relative rounded-sm overflow-hidden border border-brand-gold/40 shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                  alt="Makan Short-Let Luxury Property Management"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-brand-card/90 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold block">
                    Algorithmic Yield Maximization
                  </span>
                  <p className="font-serif text-lg font-bold text-brand-light">
                    Up to +45% Gross Revenue Uplift
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Synchronized across Airbnb, Booking.com &amp; Corporate Channels.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text Side (Right on desktop) */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-brand-card border border-brand-gold/40 text-brand-gold text-[10px] uppercase tracking-widest font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>High-Specification Asset Optimization</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-light">
                Short-Let Management (Airbnb &amp; Booking.com)
              </h2>

              <p className="text-base text-brand-gold font-medium">
                Yield optimization for high-specification homes.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                Standard long-term tenancies lock prime residential real estate into fixed, under-market yields. Our short-let strategy combines dynamic price modeling with white-glove hospitality management, unlocking institutional returns from corporate relocations, diplomat stays, and high-net-worth travellers.
              </p>

              {/* Core Features */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-light">Listing Creation &amp; Multi-Channel Sync:</span>{" "}
                    <span className="text-brand-muted">
                      Professional architectural HDR photography, 3D virtual walkthroughs, and live calendar synchronization across Airbnb, Booking.com, Vrbo, and executive relocation networks.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-light">Guest Screening &amp; Identity Vetting:</span>{" "}
                    <span className="text-brand-muted">
                      Biometric passport verification, damage deposit pre-authorizations, and comprehensive background screening to eliminate unauthorized parties.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-light">Dynamic Algorithmic Pricing:</span>{" "}
                    <span className="text-brand-muted">
                      Automated daily rate updates adjusting to London events, airline booking trends, seasonal spikes, and neighbourhood occupancy pacing to achieve peak RevPAR.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-light">Luxury Linen Service &amp; Housekeeping:</span>{" "}
                    <span className="text-brand-muted">
                      Hotel-grade 600-thread Egyptian cotton linen laundering, plush towels, organic amenities, and comprehensive room turnover after every stay.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-light">24/7 Guest Communications &amp; Keyless Check-In:</span>{" "}
                    <span className="text-brand-muted">
                      Average response time under 4 minutes. Seamless smart keyless entry and on-demand concierge assistance for international guests.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact?service=Short-Let+Maximization+(Airbnb+%26+Booking.com)"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors"
                >
                  <span>Explore Short-Let Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Block C: Complete In-House Property Maintenance -> Text Left, Image Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Side (Left) */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-brand-card border border-brand-gold/40 text-brand-gold text-[10px] uppercase tracking-widest font-semibold">
                <Wrench className="w-3.5 h-3.5" />
                <span>Physical Capital Preservation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-light">
                Complete In-House Property Maintenance
              </h2>

              <p className="text-base text-brand-gold font-medium">
                Asset protection and rapid repair response.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                Property depreciation happens when minor issues are neglected or outsourced to slow third-party handymen. Makan Home Rentals deploys our own dedicated fleet of Gas Safe heating engineers, certified electricians, and precision carpenters, ensuring rapid resolution without contractor surcharges.
              </p>

              {/* Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Routine Quarterly Inspections</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    Comprehensive 40-point photographic condition audits uploaded directly to your landlord dashboard.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Gas &amp; Electrical Certifications</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    Automated tracking and renewal of CP12 Gas Safety, EICR, EPC ratings, and smoke alarm legalities.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Dedicated Emergency Trade Fleet</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    24/7 in-house van fleet responding within 90 minutes to plumbing leaks, boiler failures, and lockouts.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-brand-card/70 border border-white/5 space-y-1">
                  <span className="text-xs font-semibold text-brand-light flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>Refurbishment Supervision</span>
                  </span>
                  <p className="text-[11px] text-brand-muted">
                    Turnkey project oversight for bathroom remodels, designer kitchens, and interior modernization.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact?service=Full+Bespoke+Management"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors"
                >
                  <span>Inquire About Property Care</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Image Side (Right) */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-sm overflow-hidden border border-brand-gold/40 shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Makan In-House Maintenance & Property Upkeep"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-brand-card/90 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold block">
                    Rapid In-House Deployment
                  </span>
                  <p className="font-serif text-lg font-bold text-brand-light">
                    24/7 Emergency Trade Fleet
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Zero contractor markups &amp; certified Gas Safe / NICEIC personnel.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPARATIVE MATRIX COMPONENT ("The Makan Advantage") */}
      {/* ========================================================================= */}
      <section className="py-24 bg-brand-card/40 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-card">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                Competitive Benchmark
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-light">
              The Makan Advantage
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Why leading UK property investors and domestic landlords transition away from traditional high-street lettings agencies to Makan Home Rentals Ltd.
            </p>
          </div>

          {/* Structured Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-sm border border-white/10 overflow-hidden shadow-2xl bg-brand-dark/80 backdrop-blur-xl"
          >
            <div className="overflow-x-auto">
              <div className="sm:hidden px-4 py-2 bg-brand-card/90 border-b border-white/5 text-[10px] uppercase tracking-wider text-brand-gold flex items-center justify-between">
                <span>Comparison Matrix</span>
                <span>Swipe horizontally &rarr;</span>
              </div>
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-white/10 bg-brand-card/80 text-xs uppercase tracking-wider">
                    <th className="py-4 px-4 sm:py-5 sm:px-6 font-semibold text-brand-light w-1/4">
                      Strategic Feature
                    </th>
                    <th className="py-4 px-4 sm:py-5 sm:px-6 font-semibold text-brand-muted w-3/8">
                      Traditional High-Street Agent
                    </th>
                    <th className="py-4 px-4 sm:py-5 sm:px-6 font-bold text-brand-gold bg-brand-gold/10 border-l border-brand-gold/30 w-3/8">
                      Makan Home Rentals Ltd
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Feature Column */}
                      <td className="py-5 px-6 font-semibold text-brand-light">
                        {row.feature}
                      </td>

                      {/* Traditional Agent Column */}
                      <td className="py-5 px-6 text-brand-muted">
                        <div className="flex items-start space-x-2">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{row.highStreet}</span>
                        </div>
                      </td>

                      {/* Makan Home Rentals Column */}
                      <td className="py-5 px-6 text-brand-light bg-brand-gold/[0.03] border-l border-brand-gold/20 font-medium">
                        <div className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span>{row.makan}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Bottom Table Guarantee Note */}
          <div className="mt-8 p-6 rounded-sm bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                Zero Surcharges &bull; Transparent British Stewardship
              </span>
              <p className="text-xs text-brand-muted">
                All agreements drafted by registered UK property solicitors and protected by ARLA Propertymark insurance.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors whitespace-nowrap"
            >
              Discuss Your Property
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FINAL CALL TO ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 relative overflow-hidden bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
            Institutional Care for UK Property Owners
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-light">
            Ready to Experience the Makan Standard?
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-light">
            Contact our London office today for an obligation-free rental appraisal, guaranteed rent proposal, or short-let yield forecast.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-gold-hover transition-colors"
            >
              Request Free Valuation &amp; Proposal
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
