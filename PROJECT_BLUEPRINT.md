# Shree Kalika Construction - Project Blueprint

This document serves as a comprehensive guide to the architecture, design, and implementation of the Shree Kalika Construction website. Use this to replicate the project or provide context to an AI assistant.

## 🏗 Project Overview
A premium, high-performance construction company website built with React, Vite, and Tailwind CSS. It features a modern, "crafted" UI with smooth animations and a serverless backend for inquiries.

## 🛠 Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS 4.
- **Animations**: Motion (framer-motion).
- **Icons**: Lucide React.
- **Deployment**: Netlify (Serverless Functions for backend).
- **Backend**: Node.js (Nodemailer for emails).

## 🎨 Design System
- **Primary Color**: `#0A192F` (Deep Navy) - Professional & Trustworthy.
- **Secondary Color**: `#F27D26` (Construction Orange) - Energetic & Action-oriented.
- **Typography**: 
  - Headings: `Inter` (Bold/Extrabold).
  - Body: `Inter` (Regular/Medium).
- **Style**: Modern Utility / Technical Dashboard (Recipe 1 & 8).

## 🧩 Component Architecture
1. **Header**: Sticky navigation with glassmorphism effect.
2. **Hero**: High-impact introduction with a clear CTA.
3. **About**: Company history and mission with a stats grid.
4. **Leadership**: Personal message from the founder (Shubham Pawar) with a photo.
5. **Services**: Detailed grid of construction and renovation offerings.
6. **Process**: Step-by-step guide on how the company works.
7. **Portfolio**: Showcase of completed projects.
8. **WhyChooseUs**: Key differentiators (On-time, Quality, Transparent Pricing with ₹ icon).
9. **Testimonials**: Client feedback slider.
10. **Contact**: Functional form with Netlify Function integration and Google Maps.
11. **Footer**: Comprehensive links, social media, and developer credits.

## ⚙️ Key Configurations & Fixes
- **Netlify Ready**: Includes `netlify.toml` and a serverless function in `netlify/functions/contact.ts`.
- **Currency**: Uses the Indian Rupee (`₹`) icon in the pricing section.
- **Image Handling**: Uses a specific Google Drive thumbnail URL format (`https://drive.google.com/thumbnail?id=...&sz=w1000`) to ensure owner photos display correctly across all environments.
- **Responsive**: Mobile-first design with touch-friendly targets.

## 🚀 Deployment Instructions
1. Connect the repository to Netlify.
2. Set Environment Variables:
   - `EMAIL_USER`: `shrikalika.official@gmail.com`
   - `EMAIL_PASS`: Your Gmail App Password.
3. Build Command: `npm run build`.
4. Publish Directory: `dist`.

---
*Website designed by Mayur Pawar (+91 9011140878)*
