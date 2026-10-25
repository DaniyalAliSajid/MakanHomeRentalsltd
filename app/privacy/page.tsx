import React from "react";
import { ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Makan Home Rentals Ltd",
  description: "Privacy Policy and Data Protection Notice for Makan Home Rentals Ltd (Company No. 15762828).",
};

export default function PrivacyPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-brand-gold text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>UK GDPR Compliance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-sm text-brand-muted mt-3">
            Last Updated: June 2024 &bull; Makan Home Rentals Ltd (Company No. 15762828)
          </p>
        </div>

        <div className="space-y-10 text-sm text-brand-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">1. Introduction</h2>
            <p>
              Makan Home Rentals Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a private limited company registered in England and Wales under Company Number <strong>15762828</strong>. Our registered office is situated at <strong>Flat 39 Dudley Court, Upper Berkeley Street, London, England, W1H 5QA</strong>.
            </p>
            <p>
              We are committed to safeguarding the privacy and personal data of our website visitors, landlords, prospective tenants, and commercial partners in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">2. Information We Collect</h2>
            <p>When you interact with our website or contact our advisory desk, we may collect the following personal data:</p>
            <ul className="list-disc pl-5 space-y-1 text-brand-light/90">
              <li>Full Name and contact details (email address, telephone number)</li>
              <li>Property details (address, postcode, property type, number of bedrooms)</li>
              <li>Service inquiries and relevant communications</li>
              <li>Technical usage data (IP address, browser type, pages viewed)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">3. How We Use Your Data</h2>
            <p>We process your personal information strictly for lawful purposes, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-brand-light/90">
              <li>Responding to property evaluation requests and consultation inquiries</li>
              <li>Structuring guaranteed rent, short-let management, or maintenance proposals</li>
              <li>Complying with statutory UK landlord, tenancy, and AML regulations</li>
              <li>Ensuring the operational security and performance of our web systems</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">4. Data Sharing &amp; Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal data. Data is only shared with trusted service providers strictly necessary to execute our obligations (e.g., our secure email communications infrastructure, legal advisers, or statutory authorities where required by UK law).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">5. Your Legal Rights</h2>
            <p>
              Under UK data protection laws, you retain the right to access, rectify, erase, or restrict the processing of your personal information. To exercise any of these rights, please contact our data compliance officer.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="font-serif text-xl font-bold text-white">6. Contact Our Data Desk</h2>
            <p>For any inquiries regarding this Privacy Policy or our data protection practices, please contact:</p>
            <div className="p-5 rounded-sm bg-brand-card border border-white/10 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-brand-light">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:info@makanhomerentalsltd.com" className="hover:text-brand-gold transition-colors">
                  info@makanhomerentalsltd.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-brand-light">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Flat 39 Dudley Court, Upper Berkeley Street, London, England, W1H 5QA</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
