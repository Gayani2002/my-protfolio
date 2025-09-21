import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validate the input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
     const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing email configuration:", {
        hasUser: !!emailUser,
        hasPass: !!emailPass
      });
      return res.status(500).json({ error: "Server configuration error - missing email credentials" });
    }
    // Transporter (using Gmail + App Password)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailUser,  // your Gmail
        pass: emailPass,  // your App Password
      },
    });
// Verify connection configuration
    await transporter.verify();
    console.log("Server is ready to take our messages");

    // Create a subject from the name
    const subject = `Portfolio Contact: Message from ${name}`;


    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // send to yourself
      subject: subject,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Error sending email" });
  }
}