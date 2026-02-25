import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, projectType, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure Nodemailer
      // Note: For production, use environment variables for SMTP settings
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'shrikalika.official@gmail.com',
          pass: process.env.EMAIL_PASS, // App password if using Gmail
        },
      });

      const mailOptions = {
        from: email,
        to: 'shrikalika.official@gmail.com',
        subject: `New Inquiry from ${name} - Shree Kalika Construction`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Project Type: ${projectType}
          
          Message:
          ${message}
        `,
        html: `
          <h3>New Project Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Only attempt to send if credentials are provided, otherwise log it
      if (process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Inquiry sent successfully!" });
      } else {
        console.log("Email credentials not found. Inquiry received:", mailOptions.text);
        res.json({ 
          success: true, 
          message: "Inquiry received! (Email sending is in demo mode - set EMAIL_PASS in .env to enable real emails)" 
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send inquiry. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
