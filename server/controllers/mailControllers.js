import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();
export const sendContactMail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your email
        pass: process.env.MAIL_PASS, // your app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER, // receiving address
      subject: `Contact Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; background-color: #f9fafb; padding: 40px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
      <div style="background: linear-gradient(to right, #fb923c, #f43f5e); padding: 20px 30px;">
        <h1 style="color: white; font-size: 24px; margin: 0;">🔒 Face Authentication Inquiry</h1>
        <p style="color: #ffe; font-size: 14px; margin: 5px 0 0;">A user has submitted a contact form request</p>
      </div>

      <div style="padding: 30px;">
        <h2 style="color: #111827; font-size: 20px; margin-bottom: 20px;">Contact Details</h2>

        <table style="width: 100%; font-size: 15px; line-height: 1.6;">
          <tr>
            <td style="color: #6b7280;"><strong>Name:</strong></td>
            <td style="color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="color: #6b7280;"><strong>Email:</strong></td>
            <td style="color: #111827;">${email}</td>
          </tr>
          <tr>
            <td style="color: #6b7280;"><strong>Phone:</strong></td>
            <td style="color: #111827;">${phone || "Not Provided"}</td>
          </tr>
        </table>

        <div style="margin-top: 30px;">
          <h3 style="color: #111827; font-size: 18px; margin-bottom: 10px;">Message</h3>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; color: #374151;">
            ${message}
          </div>
        </div>

        <div style="margin-top: 40px; font-size: 13px; color: #9ca3af; text-align: center;">
          — This message was sent from the UIDAI Face Authentication System —
        </div>
      </div>
    </div>
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
