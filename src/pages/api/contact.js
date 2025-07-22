import nodemailer from "nodemailer";
import validator from "validator";

// --- Simple in-memory rate limiting (per IP) ---
const rateLimit = {};
const WINDOW = 60 * 1000; // 1 minute
const MAX_REQ = 5;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // --- Rate limiting ---
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.connection?.remoteAddress ||
    "unknown";
  const now = Date.now();
  rateLimit[ip] = (rateLimit[ip] || []).filter(ts => now - ts < WINDOW);
  if (rateLimit[ip].length >= MAX_REQ) {
    return res.status(429).json({ success: false, error: "Too many requests. Please try again later." });
  }
  rateLimit[ip].push(now);

  // --- Honeypot anti-spam ---
  if (req.body.website && req.body.website.length > 0) {
    return res.status(400).json({ success: false, error: "Spam detected." });
  }

  // --- Sanitize and validate input ---
  const name = validator.escape(req.body.name || "");
  const email = validator.normalizeEmail(req.body.email || "");
  const phone = validator.escape(req.body.phone || "");
  const subject = validator.escape(req.body.subject || "");
  const message = validator.escape(req.body.message || "");

  if (
    !validator.isLength(name, { min: 2, max: 100 }) ||
    !validator.isEmail(email || "") ||
    !validator.isLength(subject, { min: 2, max: 150 }) ||
    !validator.isLength(message, { min: 5, max: 2000 })
  ) {
    return res.status(400).json({ success: false, error: "Invalid input." });
  }

  // --- Send email ---
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}