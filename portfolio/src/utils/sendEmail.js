import nodemailer from 'nodemailer';

export async function sendEmail(to, subject, text) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Missing EMAIL_USER or EMAIL_PASS environment variables.');
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  // Define mail options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to, // Recipient email address
    subject, // Email subject
    text, // Email body
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return info; // Return email information for debugging
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Failed to send email. Please check your credentials and network settings.');
  }
}
