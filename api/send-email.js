// api/send-email.js
// Vercel Serverless Function — RAMELEC Contact Form Handler
// Uses Nodemailer with SMTP (or swap "transport" for Resend below)

const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  // -----------------------------------------------------------
  // OPTION A — SMTP (Gmail, OVH, etc.)
  // Set these in Vercel Dashboard → Project → Settings → Env Vars
  // -----------------------------------------------------------
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // e.g. "smtp.gmail.com"
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,     // your SMTP username / email
      pass: process.env.SMTP_PASS,     // your SMTP password / app password
    },
  });

  // -----------------------------------------------------------
  // OPTION B — Resend (comment out Option A above and use this)
  // npm install resend
  // -----------------------------------------------------------
  // const { Resend } = require("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Build email content
    const mailOptions = {
      from: `"RAMELEC Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "ramelec.ang@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande de contact — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background: #1a1a2e; padding: 24px; text-align: center;">
            <h1 style="color: #f5a623; margin: 0; font-size: 24px;">RAMELEC</h1>
            <p style="color: #94a3b8; margin: 4px 0 0;">Nouvelle demande de contact</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b; width: 140px;">Nom</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Téléphone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${phone || "Non renseigné"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${service || "Non précisé"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #64748b; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            RAMELEC SAS — 3 Rue Lavoisier, 93500 Pantin — SIREN: 978 951 291
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // For Resend option B:
    // await resend.emails.send({ from: "RAMELEC <contact@ramelec.fr>", to: [...], subject: ..., html: ... });

    return res.status(200).json({ success: true, message: "Email envoyé avec succès." });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi. Veuillez réessayer." });
  }
};



