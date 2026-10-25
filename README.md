# Makan Home Rentals Ltd — Official Web Platform

Premier UK residential property asset management, guaranteed rent (rent-to-rent) schemes, short-let optimization (Airbnb & Booking.com), and 24/7 dedicated in-house trade maintenance across London and prime UK commuter corridors.

Built and maintained by **Infinito Softwares Pvt. Ltd.** ([https://infinitosoftwares.com/](https://infinitosoftwares.com/)).

---

## 🏛️ Brand & Company Details
* **Company Name:** Makan Home Rentals Ltd
* **Company Registration No.:** 15762828 (Registered in England & Wales)
* **Registered Office:** Flat 39 Dudley Court, Upper Berkeley Street, London W1H 5QA
* **Official Enquiries:** `info@makanhomerentalsltd.com`
* **Direct Office Operations:** `office@makanhomerentalsltd.com`

---

## 🛠️ Technology Stack
* **Framework:** Next.js 15 (App Router, Server Actions & Route Handlers)
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS with bespoke British luxury palette (Dark Slate `#070C12`, Antique Gold `#D4AF37`)
* **Typography:** Playfair Display (Serif) & Plus Jakarta Sans (Sans)
* **Icons:** Lucide React & Custom SVG Vector Emblem
* **Email Dispatch:** Nodemailer with cPanel Webmail SSL/TLS SMTP Integration
* **Animations:** Hardware-accelerated CSS keyframes & Framer Motion counters

---

## 📁 Repository Structure
```
├── app/
│   ├── api/contact/route.ts  # cPanel Webmail SMTP mailer endpoint
│   ├── about/page.tsx         # Corporate heritage, pillars & quote card
│   ├── contact/page.tsx       # Interactive lead capture form with instant validation
│   ├── privacy/page.tsx       # UK GDPR & Data Protection Act 2018 policy
│   ├── services/page.tsx      # Multi-service split blocks & comparison matrix
│   ├── layout.tsx             # Root layout, Google fonts, metadata & viewport
│   ├── page.tsx               # Homepage, hero, stats counter & lead estimator
│   └── globals.css            # Custom CSS variables, scrollbars & animations
├── components/
│   ├── Logo.tsx               # Official Makan vector monogram emblem & wordmark
│   ├── Navbar.tsx             # Sticky header with full-screen mobile portal drawer
│   └── Footer.tsx             # Corporate footer with credentials & Infinito attribution
├── public/
│   ├── favicon.ico            # Multi-resolution ICO (16x16, 32x32, 48x48)
│   ├── icon.svg               # Vector SVG icon for retina tabs
│   ├── icon.png               # Standard 32x32 PNG icon
│   ├── apple-icon.png         # 180x180 Apple touch icon
│   └── logo-dark.svg          # Official brand logo
├── netlify.toml               # Automated Netlify Next.js 15 deployment config
└── .env.example               # Template for cPanel Webmail SMTP variables
```

---

## ⚙️ Environment Variables Setup

Copy `.env.example` to `.env.local` for local development:
```bash
cp .env.example .env.local
```

Fill in the cPanel Webmail SMTP credentials:
```env
# cPanel Webmail SMTP Configuration
SMTP_HOST=mail.makanhomerentalsltd.com
SMTP_PORT=465
SMTP_USER=info@makanhomerentalsltd.com
SMTP_PASS=YourCpanelEmailPasswordHere

# Destination Notification Addresses
CONTACT_NOTIFICATION_EMAIL=info@makanhomerentalsltd.com
OFFICE_EMAIL=office@makanhomerentalsltd.com
```

> **Note:** If `SMTP_PASS` is omitted during local development, the backend automatically runs in safe demo mode, returning structured success payloads without failing.

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Lint & Typecheck:**
   ```bash
   npm run lint
   ```

4. **Production Build Validation:**
   ```bash
   npm run build
   ```

---

## 🌐 Netlify Deployment Guide

1. **Connect GitHub Repository:**
   * Go to [Netlify Dashboard](https://app.netlify.com/) &rarr; **Add new site** &rarr; **Import an existing project**.
   * Select your GitHub repository.

2. **Build Settings:**
   * **Build command:** `npm run build`
   * **Publish directory:** `.next`
   * *These settings are automatically configured via `netlify.toml` in this repository.*

3. **Add Environment Variables:**
   * In Netlify Site Settings &rarr; **Environment variables**, add:
     * `SMTP_HOST`: `mail.makanhomerentalsltd.com`
     * `SMTP_PORT`: `465`
     * `SMTP_USER`: `info@makanhomerentalsltd.com`
     * `SMTP_PASS`: `<your-cpanel-password>`
     * `CONTACT_NOTIFICATION_EMAIL`: `info@makanhomerentalsltd.com`
     * `OFFICE_EMAIL`: `office@makanhomerentalsltd.com`

4. **Deploy:**
   * Click **Deploy Site**. Netlify will build and deploy the Next.js App Router application automatically.

---

## 📄 License & Credits
© 2026 Makan Home Rentals Ltd (Company No. 15762828). All rights reserved.  
Platform engineered by [Infinito Softwares Pvt. Ltd.](https://infinitosoftwares.com/).
