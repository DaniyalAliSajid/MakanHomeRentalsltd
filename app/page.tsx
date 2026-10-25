"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useInView, animate } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Wrench,
  Scale,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Calculator,
} from "lucide-react";

// --- Smooth Numeric Counter Component ---
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-serif tabular-nums font-bold text-brand-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const router = useRouter();

  // Quick Lead Estimator State
  const [postcode, setPostcode] = useState("");
  const [bedrooms, setBedrooms] = useState("2 Bedrooms");
  const [calculatedEstimate, setCalculatedEstimate] = useState({
    monthlyRent: "£3,800 – £5,600",
    annualIncome: "£45,600 – £67,200",
    shortLetUplift: "+32%",
  });

  // Dynamic calculation update based on bedroom selection
  useEffect(() => {
    switch (bedrooms) {
      case "Studio / 1 Bed":
        setCalculatedEstimate({
          monthlyRent: "£2,400 – £3,400",
          annualIncome: "£28,800 – £40,800",
          shortLetUplift: "+26%",
        });
        break;
      case "2 Bedrooms":
        setCalculatedEstimate({
          monthlyRent: "£3,800 – £5,600",
          annualIncome: "£45,600 – £67,200",
          shortLetUplift: "+32%",
        });
        break;
      case "3 Bedrooms":
        setCalculatedEstimate({
          monthlyRent: "£5,500 – £8,200",
          annualIncome: "£66,000 – £98,400",
          shortLetUplift: "+38%",
        });
        break;
      case "4 Bedrooms":
        setCalculatedEstimate({
          monthlyRent: "£8,500 – £12,500",
          annualIncome: "£102,000 – £150,000",
          shortLetUplift: "+42%",
        });
        break;
      case "5+ Bedrooms":
        setCalculatedEstimate({
          monthlyRent: "£13,000 – £22,000",
          annualIncome: "£156,000 – £264,000",
          shortLetUplift: "+46%",
        });
        break;
      default:
        break;
    }
  }, [bedrooms]);

  // Handle Quick Lead Estimator routing
  const handleEstimatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPostcode = postcode.trim().toUpperCase() || "W1H 5QA";
    const query = new URLSearchParams({
      postcode: cleanPostcode,
      bedrooms: bedrooms,
      service: "Rent-to-Rent",
    });
    router.push(`/contact?${query.toString()}`);
  };

  const valueProps = [
    {
      id: "guaranteed-rent",
      title: "Guaranteed Rent-to-Rent",
      subtitle: "Fixed monthly rental income with zero void periods.",
      badge: "Zero Void Risk",
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
      bullets: [
        "Contractual monthly payout on the 1st of every month",
        "Zero landlord management fees or commission deducted",
        "3 to 5 year corporate institutional lease agreements",
        "Complete eviction and rental arrears indemnity",
      ],
      linkText: "Learn about Guaranteed Rent",
    },
    {
      id: "short-let",
      title: "Short-Let Maximization",
      subtitle: "Dynamic pricing engine across Airbnb & Booking.com.",
      badge: "Up to +40% Yield Uplift",
      icon: <TrendingUp className="w-5 h-5 text-brand-gold" />,
      bullets: [
        "Dynamic pricing responding to London events and seasonal demand",
        "Rigorous corporate guest ID verification & security deposits",
        "Hotel-standard bespoke linen, housekeeping & guest turnover",
        "Superhost status with multi-channel automated syndication",
      ],
      linkText: "Explore Short-Let Strategy",
    },
    {
      id: "maintenance",
      title: "Full Maintenance & Care",
      subtitle: "24/7 emergency response & physical property upkeep.",
      badge: "In-House Trade Team",
      icon: <Wrench className="w-5 h-5 text-brand-gold" />,
      bullets: [
        "In-house certified Gas Safe, plumbing & electrical trades",
        "Quarterly high-resolution photographic condition audits",
        "Minor cosmetic repairs covered at zero extra surcharge",
        "Proactive asset preservation to protect long-term resale value",
      ],
      linkText: "View Maintenance Protocols",
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      subtitle: "Full UK tenancy legal compliance & safety management.",
      badge: "ARLA Propertymark Protected",
      icon: <Scale className="w-5 h-5 text-brand-gold" />,
      bullets: [
        "Adherence to Deregulation Act, Right to Rent & Tenant Fees Act",
        "Automated certification tracking: CP12 Gas, EICR & EPC renewals",
        "Mandatory & Additional HMO licensing advice for London boroughs",
        "Custodial Tenancy Deposit Scheme (TDS) and CMP insurance",
      ],
      linkText: "See Regulatory Standards",
    },
  ];

  const portfolioSegments = [
    {
      title: "Prime London Apartments",
      coverage: "Mayfair, Marylebone, Kensington & Chelsea",
      focus: "Executive Corporate Lettings & Guaranteed Rent",
      description:
        "High-specification one, two, and three-bedroom apartments leased to vetted diplomatic and multinational corporate professionals on unbroken multi-year terms.",
    },
    {
      title: "Short-Let Luxury Residences",
      coverage: "Central London Tourist & Financial Corridors",
      focus: "Airbnb Superhost & Booking.com Premier",
      description:
        "Upscale furnished properties managed under high-yield dynamic pricing algorithms with hotel-grade linen, 24/7 guest communications, and full turnover care.",
    },
    {
      title: "Commuter & Regional Portfolios",
      coverage: "Greater London, Surrey & Thriving Urban Hubs",
      focus: "Multi-Unit & Block Asset Management",
      description:
        "Complete block management and single-let clusters maintained by our in-house trade fleet, securing consistent cashflow for private landlords and family offices.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-20 bg-brand-dark border-b border-white/5">
        {/* Soft, natural ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-brand-gold/[0.04] blur-3xl pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
            {/* Tagline Badge: Clean, understated British agency styling */}
            <div className="inline-flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  Leaders in UK Property Management
                </span>
              </div>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
              Maximizing Rental Yields. <br />
              <span className="text-brand-gold font-serif">Zero Landlord Hassle.</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg text-brand-muted leading-relaxed max-w-3xl mx-auto font-normal">
              Managing over 70+ prime UK residential units. Specializing in guaranteed rent-to-rent agreements, short-let management on Airbnb &amp; Booking.com, and 24/7 dedicated in-house maintenance.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors flex items-center justify-center space-x-2"
              >
                <span>Request Landlord Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-sm border border-white/20 text-brand-light hover:border-brand-gold hover:text-brand-gold font-semibold text-xs uppercase tracking-wider bg-white/[0.02] transition-colors flex items-center justify-center"
              >
                <span>Explore Portfolio Services</span>
              </Link>
            </div>

            {/* Accreditations Trust Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-brand-muted/80">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>Airbnb Superhost Partner</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>Booking.com Premier Host</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>ARLA Propertymark Standards</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>London Registered Office</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 w-full">
          <div className="rounded-sm bg-brand-card/70 border border-white/10 p-5 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pb-6 md:pb-0">
                <div className="text-3xl sm:text-4xl">
                  <Counter target={70} suffix="+" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mt-1.5">
                  Managed Properties
                </h4>
                <p className="text-xs text-brand-muted mt-0.5 max-w-xs">
                  Active residential properties managed across London and key UK commuter hubs.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-8 pb-6 md:pb-0">
                <div className="text-3xl sm:text-4xl">
                  <Counter target={15} suffix="+" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mt-1.5">
                  Years Leadership Experience
                </h4>
                <p className="text-xs text-brand-muted mt-0.5 max-w-xs">
                  Director-level property management, lease structuring, and asset care expertise.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-8">
                <div className="text-3xl sm:text-4xl">
                  <Counter target={100} suffix="%" />
                </div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mt-1.5">
                  Rent Guarantee Options
                </h4>
                <p className="text-xs text-brand-muted mt-0.5 max-w-xs">
                  Contractual certainty with zero void days and payments on the 1st of every month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE VALUE PROPOSITION GRID (4 Cards) */}
      {/* ========================================================================= */}
      <section className="py-20 relative bg-brand-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-card border border-white/10 text-brand-gold text-[10px] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>Core Service Model</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Four Pillars of Precision Property Care
            </h2>

            <p className="text-sm text-brand-muted leading-relaxed">
              Every agreement is engineered to insulate landlords from market volatility, maximize net rental cashflow, and maintain property assets in showroom condition.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.id}
                className="group rounded-sm bg-brand-card border border-white/10 hover:border-brand-gold/40 p-8 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-sm bg-brand-dark border border-brand-gold/30 flex items-center justify-center">
                      {prop.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm bg-brand-dark border border-white/10 text-brand-gold">
                      {prop.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-1.5">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-brand-gold/90 font-medium mb-5">
                    {prop.subtitle}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {prop.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2.5 text-xs text-brand-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    href="/services"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-hover transition-colors"
                  >
                    <span>{prop.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. QUICK LEAD ESTIMATOR CARD */}
      {/* ========================================================================= */}
      <section className="py-20 relative bg-brand-card/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-sm bg-brand-card border border-brand-gold/30 p-5 sm:p-10 shadow-xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-dark border border-white/10 mb-2">
                      <Calculator className="w-3.5 h-3.5 text-brand-gold" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
                        Instant Yield Estimator
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Calculate Your Property&apos;s Rental Potential
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] uppercase tracking-wider text-brand-muted block">
                      Estimated Monthly Income
                    </span>
                    <span className="font-serif text-2xl font-bold text-brand-gold">
                      {calculatedEstimate.monthlyRent}
                    </span>
                    <span className="text-[11px] text-brand-muted block mt-0.5">
                      Indicative rental projection
                    </span>
                  </div>
                </div>

                {/* Estimator Form */}
                <form onSubmit={handleEstimatorSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                        Property Postcode (UK) *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={postcode}
                          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                          placeholder="e.g. W1H 5QA, SW3, or M1"
                          className="w-full bg-brand-dark border border-white/15 focus:border-brand-gold rounded-sm pl-10 pr-4 py-3 text-base sm:text-sm text-white font-mono uppercase focus:outline-none transition-colors"
                        />
                      </div>
                      <span className="text-[11px] text-brand-muted mt-1 block">
                        Calculated based on Central London and commuter zone comparables.
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                        Number of Bedrooms *
                      </label>
                      <select
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className="w-full bg-brand-dark border border-white/15 focus:border-brand-gold rounded-sm px-4 py-3 text-base sm:text-sm text-white focus:outline-none transition-colors font-medium"
                      >
                        <option value="Studio / 1 Bed">Studio / 1 Bed</option>
                        <option value="2 Bedrooms">2 Bedrooms</option>
                        <option value="3 Bedrooms">3 Bedrooms</option>
                        <option value="4 Bedrooms">4 Bedrooms</option>
                        <option value="5+ Bedrooms">5+ Bedrooms / Multi-Unit</option>
                      </select>
                      <span className="text-[11px] text-brand-muted mt-1 block">
                        Annual forecast: {calculatedEstimate.annualIncome} (Gross Projection)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-sm bg-brand-dark border border-white/5 text-center text-[11px] sm:text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-brand-muted block">Void Risk</span>
                      <span className="font-semibold text-white">0 Days / Year</span>
                    </div>
                    <div className="border-x border-white/10">
                      <span className="text-[10px] uppercase text-brand-muted block">Payout Date</span>
                      <span className="font-semibold text-brand-gold">1st of Every Month</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-brand-muted block">Commission</span>
                      <span className="font-semibold text-white">0% on Guarantee</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Request Formal Proposal with this Valuation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PORTFOLIO OPERATIONS OVERVIEW (Genuine, authentic data) */}
      {/* ========================================================================= */}
      <section className="py-20 relative bg-brand-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Operational Footprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Residential Management Across the UK
            </h2>
            <p className="text-sm text-brand-muted">
              We manage portfolios tailored to location-specific demand, from executive corporate lettings in Prime Central London to short-let yields and multi-unit blocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioSegments.map((segment, idx) => (
              <div
                key={idx}
                className="rounded-sm bg-brand-card border border-white/10 p-7 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold block mb-1">
                    {segment.focus}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {segment.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-brand-muted mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>{segment.coverage}</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {segment.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-hover transition-colors"
                  >
                    <span>Inquire for this property type</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FINAL CONSULTATION BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 relative bg-brand-card/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
            Confidential Landlord Review
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Ready to Protect and Elevate Your UK Property Asset?
          </h2>
          <p className="text-sm text-brand-muted max-w-2xl mx-auto">
            Contact our London advisory desk today. We execute long-term guaranteed leases within 7 business days, providing uninterrupted income and total asset preservation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors"
            >
              Request Free Landlord Proposal
            </Link>
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-sm border border-white/20 text-brand-light hover:border-brand-gold hover:text-brand-gold font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
