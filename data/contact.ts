import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // const { name, email, message } = req.body;

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.EMAIL_USER,
  //   to: process.env.EMAIL_USER,
  //   subject: `New Contact Form Message from ${name}`,
  //   text: `
  //     Name: ${name}
  //     Email: ${email}
  //     Message: ${message}
  //   `,
  // };

  // try {
  //   await transporter.sendMail(mailOptions);
  //   res.status(200).json({ message: "Email sent successfully" });
  // } catch (error) {
  //   res.status(500).json({ message: "Error sending email", error });
  // }
}

export const contactInfo = {
  email: "mercydanke@gmail.com",
  phone: "+2349064545765",
  description:
    "Feel free to reach out to me via email, phone, or the form below.",
};
