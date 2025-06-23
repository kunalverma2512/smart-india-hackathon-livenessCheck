import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"UIDAI Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Message from ${name}`,
      html: `
        <div style="padding: 20px; font-family: sans-serif; color: #111827;">
  <h2 style="margin-bottom: 10px;">New Contact Message</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Message:</strong></p>
  <div style="margin-top: 10px; padding: 10px; background: #f3f4f6; border-radius: 5px;">
    ${message}
  </div>
  <hr style="margin-top: 20px;">
  <p style="font-size: 12px; color: #9ca3af;">This message was sent from your UIDAI Face Authentication system.</p>
</div>

      `,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Mail Error:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
};
