"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Building2,
  Send,
  Loader2,
  Compass,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    postcode: "",
    service: "Rent-to-Rent",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  // Pre-load from URL search params (e.g. from Home Page Quick Lead Estimator or Services Page)
  useEffect(() => {
    const postcodeParam = searchParams.get("postcode");
    const serviceParam = searchParams.get("service");

    if (postcodeParam) {
      setFormData((prev) => ({
        ...prev,
        postcode: postcodeParam.toUpperCase(),
      }));
    }

    if (serviceParam) {
      // Map potential incoming service query string to our 4 dropdown options
      if (serviceParam.includes("Rent") || serviceParam.includes("Guaranteed")) {
        setFormData((prev) => ({ ...prev, service: "Rent-to-Rent" }));
      } else if (serviceParam.includes("Airbnb") || serviceParam.includes("Short-Let")) {
        setFormData((prev) => ({ ...prev, service: "Airbnb Management" }));
      } else if (serviceParam.includes("Maintenance") || serviceParam.includes("Bespoke")) {
        setFormData((prev) => ({ ...prev, service: "Maintenance" }));
      } else {
        setFormData((prev) => ({ ...prev, service: "General Inquiry" }));
      }
    }
  }, [searchParams]);

  // Client-side validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    }

    if (!formData.postcode.trim()) {
      errors.postcode = "Property postcode is required.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please include a brief message or property description.";
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(
          data.message ||
            "Thank you. Your inquiry has been received. Our property advisory team will review your property details and contact you shortly."
        );
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          postcode: "",
          service: "Rent-to-Rent",
          message: "",
        });
        setClientErrors({});
      } else {
        setErrorMessage(
          data.error ||
            "An issue occurred while processing your request. Please try again or email us directly at info@makanhomerentalsltd.com."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please verify your connection or email info@makanhomerentalsltd.com."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light py-20 lg:py-28 relative overflow-hidden">
      {/* Soft, natural ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-brand-gold/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Private Client Engagement
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-light tracking-tight leading-tight">
            Connect With Our Advisory Desk
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
            Whether you are evaluating our Guaranteed Rent-to-Rent contract, exploring dynamic Airbnb short-let optimization, or seeking comprehensive in-house maintenance, our team is at your disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================================= */}
          {/* LEFT SIDE: DIRECT CONTACT INFO */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-sm bg-brand-card/90 border border-white/10 p-5 sm:p-10 shadow-2xl relative overflow-hidden space-y-6 sm:space-y-8">
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block">
                  Direct Inquiries &amp; Executive Contacts
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-light mt-1">
                  Makan Home Rentals Ltd
                </h3>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  Headquartered in Prime Central London, servicing landlords and portfolio investors nationwide.
                </p>
              </div>

              {/* Contact Specifics */}
              <div className="space-y-6 text-xs sm:text-sm">
                {/* 1. Office Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-sm bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 shadow-inner-gold group-hover:border-brand-gold transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-brand-muted block font-semibold">
                      General &amp; Property Inquiries
                    </span>
                    <a
                      href="mailto:info@makanhomerentalsltd.com"
                      className="text-brand-light hover:text-brand-gold font-medium transition-colors break-all"
                    >
                      info@makanhomerentalsltd.com
                    </a>
                  </div>
                </div>

                {/* 2. Direct Line / Office */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-sm bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 shadow-inner-gold group-hover:border-brand-gold transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-brand-muted block font-semibold">
                      Direct Office / Operations
                    </span>
                    <a
                      href="mailto:office@makanhomerentalsltd.com"
                      className="text-brand-light hover:text-brand-gold font-medium transition-colors break-all"
                    >
                      office@makanhomerentalsltd.com
                    </a>
                    <span className="text-[11px] text-brand-muted block mt-0.5">
                      Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM GMT
                    </span>
                  </div>
                </div>

                {/* 3. UK Coverage */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-sm bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 shadow-inner-gold group-hover:border-brand-gold transition-colors">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-brand-muted block font-semibold">
                      UK Coverage
                    </span>
                    <span className="text-brand-light font-medium block">
                      London &amp; Surrounding Regions
                    </span>
                    <span className="text-[11px] text-brand-muted block mt-0.5">
                      Mayfair, Marylebone, Kensington, Canary Wharf, Surrey, Berkshire &amp; High-Yield Corridors
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Address & Accreditations */}
              <div className="pt-6 border-t border-white/10 space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-light block">
                      Registered Office:
                    </span>
                    <span className="text-brand-muted">
                      Flat 39 Dudley Court, Upper Berkeley Street, London W1H 5QA
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-brand-muted pt-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>ARLA Propertymark Protected &bull; Client Money Protection</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Guarantee Card */}
            <div className="p-6 rounded-sm bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border border-brand-gold/30 shadow-inner-gold space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block">
                24-Hour Commitment
              </span>
              <h4 className="font-serif text-base font-bold text-brand-light">
                Confidential Property Assessments
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                All property submissions are treated with strict discretion. We provide empirical rental comparables and guaranteed lease terms within one business day.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: INTERACTIVE FORM */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-brand-card border border-white/10 p-5 sm:p-12 shadow-2xl relative">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                  Landlord Consultation Form
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-light mt-1">
                  Request a Formal Proposal
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-1">
                  Complete the particulars below and our property advisory team will reach out directly.
                </p>
              </div>

              {/* Success Alert Banner */}
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-5 rounded-sm bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm flex items-start space-x-3 shadow-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold text-white block">Inquiry Transmitted Successfully</span>
                      <p className="leading-relaxed">{successMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert Banner */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-5 rounded-sm bg-red-950/60 border border-red-500/50 text-red-200 text-xs sm:text-sm flex items-start space-x-3 shadow-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold text-white block">Submission Notice</span>
                      <p className="leading-relaxed">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Interactive Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (clientErrors.fullName) {
                        setClientErrors({ ...clientErrors, fullName: "" });
                      }
                    }}
                    placeholder="e.g. Lord Julian Harrington"
                    className={`w-full bg-brand-dark border ${
                      clientErrors.fullName ? "border-red-500" : "border-white/15"
                    } focus:border-brand-gold rounded-sm px-4 py-3.5 text-base sm:text-sm text-brand-light focus:outline-none transition-colors`}
                  />
                  {clientErrors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {clientErrors.fullName}
                    </span>
                  )}
                </div>

                {/* 2 & 3. Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (clientErrors.email) {
                          setClientErrors({ ...clientErrors, email: "" });
                        }
                      }}
                      placeholder="julian@harrington.co.uk"
                      className={`w-full bg-brand-dark border ${
                        clientErrors.email ? "border-red-500" : "border-white/15"
                      } focus:border-brand-gold rounded-sm px-4 py-3.5 text-base sm:text-sm text-brand-light focus:outline-none transition-colors`}
                    />
                    {clientErrors.email && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {clientErrors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (clientErrors.phone) {
                          setClientErrors({ ...clientErrors, phone: "" });
                        }
                      }}
                      placeholder="+44 7911 123456"
                      className={`w-full bg-brand-dark border ${
                        clientErrors.phone ? "border-red-500" : "border-white/15"
                      } focus:border-brand-gold rounded-sm px-4 py-3.5 text-base sm:text-sm text-brand-light focus:outline-none transition-colors`}
                    />
                    {clientErrors.phone && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {clientErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* 4 & 5. Postcode and Selected Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                      Property Postcode *
                    </label>
                    <input
                      type="text"
                      value={formData.postcode}
                      onChange={(e) => {
                        setFormData({ ...formData, postcode: e.target.value.toUpperCase() });
                        if (clientErrors.postcode) {
                          setClientErrors({ ...clientErrors, postcode: "" });
                        }
                      }}
                      placeholder="e.g. W1J 6BQ or SW3 1AA"
                      className={`w-full bg-brand-dark border ${
                        clientErrors.postcode ? "border-red-500" : "border-white/15"
                      } focus:border-brand-gold rounded-sm px-4 py-3.5 text-base sm:text-sm text-brand-light font-mono uppercase focus:outline-none transition-colors`}
                    />
                    {clientErrors.postcode && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {clientErrors.postcode}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                      Selected Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-brand-dark border border-white/15 focus:border-brand-gold rounded-sm px-4 py-3.5 text-base sm:text-sm text-brand-light focus:outline-none transition-colors font-medium"
                    >
                      <option value="Rent-to-Rent">Rent-to-Rent</option>
                      <option value="Airbnb Management">Airbnb Management</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* 6. Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-2">
                    Message / Property Particulars *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (clientErrors.message) {
                        setClientErrors({ ...clientErrors, message: "" });
                      }
                    }}
                    placeholder="Provide details regarding your property: bedroom count, target timeline, current tenancy status, or specific management goals..."
                    className={`w-full bg-brand-dark border ${
                      clientErrors.message ? "border-red-500" : "border-white/15"
                    } focus:border-brand-gold rounded-sm px-4 py-3.5 text-base sm:text-sm text-brand-light focus:outline-none transition-colors leading-relaxed`}
                  />
                  {clientErrors.message && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {clientErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button with Loading State */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-sm bg-brand-gold text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-gold-hover transition-colors duration-200 flex items-center justify-center space-x-2.5 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-brand-dark" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Formal Inquiry</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-brand-muted mt-3">
                    Dispatched securely &bull; All client communications are held in strict professional confidence
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="bg-brand-dark min-h-screen" />}>
      <ContactFormContent />
    </Suspense>
  );
}
