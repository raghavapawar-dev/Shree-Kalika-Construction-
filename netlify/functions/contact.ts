import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, phone, projectType, message } = JSON.parse(event.body || "{}");

    // Validate input
    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'shrikalika.official@gmail.com',
        pass: process.env.EMAIL_PASS,
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

    // Only attempt to send if credentials are provided
    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: "Inquiry sent successfully!" }),
      };
    } else {
      console.log("Email credentials not found. Inquiry received:", mailOptions.text);
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: "Inquiry received! (Email sending is in demo mode - set EMAIL_PASS in Netlify environment variables to enable real emails)" 
        }),
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send inquiry. Please try again later." }),
    };
  }
};
