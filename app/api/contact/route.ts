import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { fullName, email, phone, postcode, service, message } = body;

    // Server-side validation
    if (!fullName || !email || !phone || !postcode || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required. Please ensure all details are provided.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Read cPanel SMTP configuration from .env.local
    const host = process.env.SMTP_HOST || "mail.makanhomerentalsltd.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER || "info@makanhomerentalsltd.com";
    const pass = process.env.SMTP_PASS || "";
    const isSecure = port === 465 || process.env.SMTP_SECURE === "true";

    const destinationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "info@makanhomerentalsltd.com";
    const officeCc = process.env.OFFICE_EMAIL || "office@makanhomerentalsltd.com";

    // Detect placeholder or missing credentials for local testing
    const isPlaceholderPassword =
      !pass || pass === "YourCpanelPasswordHere" || pass.trim() === "";

    if (isPlaceholderPassword) {
      console.warn(
        `[Makan cPanel SMTP] Running with placeholder SMTP password. Form submission accepted for demonstration. Set valid credentials in .env.local to dispatch via mail.makanhomerentalsltd.com.`
      );

      return NextResponse.json({
        success: true,
        demoMode: true,
        message:
          "Your inquiry has been received. Our property advisory team will review your property details and contact you shortly.",
      });
    }

    // Configure cPanel Webmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: isSecure, // true for 465 (SSL/TLS), false for other ports (587 STARTTLS)
      auth: {
        user,
        pass,
      },
      tls: {
        // cPanel mail servers often operate with server-generated or SNI certificates
        rejectUnauthorized: false,
      },
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>New Property Inquiry - Makan Home Rentals Ltd</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #070C12; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #F8FAFC;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #070C12; padding: 30px 15px;">
          <tr>
            <td align="center">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F172A; border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 4px; overflow: hidden;">
                <!-- Header -->
                <tr>
                  <td style="padding: 30px 40px; background: linear-gradient(135deg, #0F172A 0%, #070C12 100%); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <span style="font-family: Georgia, serif; font-size: 24px; font-weight: bold; letter-spacing: 0.2em; color: #F8FAFC;">MAKAN</span>
                          <span style="display: block; font-size: 9px; letter-spacing: 0.35em; color: #D4AF37; font-weight: 600; margin-top: 4px;">HOME RENTALS LTD</span>
                        </td>
                        <td align="right">
                          <span style="display: inline-block; padding: 4px 10px; background-color: rgba(212, 175, 55, 0.15); border: 1px solid #D4AF37; color: #D4AF37; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 2px;">
                            ${service}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 36px 40px;">
                    <h2 style="font-family: Georgia, serif; font-size: 20px; color: #F8FAFC; margin-top: 0; margin-bottom: 20px; font-weight: 600;">
                      New Landlord & Property Inquiry
                    </h2>
                    <p style="font-size: 13px; color: #94A3B8; line-height: 1.6; margin-bottom: 24px;">
                      A new consultation request has been submitted through the Makan Home Rentals online portal.
                    </p>

                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">
                          Full Name:
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #F8FAFC; font-weight: 600;">
                          ${fullName}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em;">
                          Email Address:
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #D4AF37;">
                          <a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em;">
                          Phone Number:
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #F8FAFC; font-family: monospace;">
                          <a href="tel:${phone}" style="color: #F8FAFC; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em;">
                          Property Postcode:
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #D4AF37; font-weight: bold; font-family: monospace;">
                          ${postcode.toUpperCase()}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em;">
                          Selected Service:
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #F8FAFC; font-weight: 600;">
                          ${service}
                        </td>
                      </tr>
                    </table>

                    <div style="background-color: #070C12; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 4px; padding: 18px; margin-top: 10px;">
                      <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #D4AF37; font-weight: 600; margin-bottom: 8px;">
                        Message / Property Particulars:
                      </span>
                      <p style="font-size: 13px; color: #F8FAFC; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                        ${message}
                      </p>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 40px; background-color: #070C12; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center;">
                    <p style="font-size: 11px; color: #64748B; margin: 0;">
                      Makan Home Rentals Ltd (Company No. 15762828) &bull; Flat 39 Dudley Court, Upper Berkeley Street, London W1H 5QA &bull; Registered in England &amp; Wales
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send the email via cPanel SMTP
    await transporter.sendMail({
      from: `"Makan Portal" <${user}>`,
      replyTo: `${fullName} <${email}>`,
      to: destinationEmail,
      cc: officeCc,
      subject: `[New Inquiry] ${service} - ${postcode.toUpperCase()} (${fullName})`,
      html: emailHtml,
      text: `New Inquiry from ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPostcode: ${postcode}\nService: ${service}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your message has been sent successfully. Our property advisory team will contact you within 24 hours.",
    });
  } catch (err: unknown) {
    console.error("[Makan cPanel SMTP Error]:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Failed to dispatch email inquiry via SMTP.";
    return NextResponse.json(
      {
        success: false,
        error: `SMTP Error: ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}
