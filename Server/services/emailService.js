

const nodemailer = require('nodemailer');

// Create a transporter using SMTP
let transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Replace with Hostinger's SMTP server
  port: 465, // Default port for secure SMTP
  secure: true, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to, subject, html) => {
  try {
    let info = await transporter.sendMail({
      from: '"Scholarship Portal" <noreply@pratimesh.com >', // Replace with your email address
      to: to,
      subject: subject,
      html: html
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
};

const emailTemplate = (name, applicationId, status, paymentStatus) => `
  <html>
    <body>
      <h2>Scholarship Application Update</h2>
      <p>Dear ${name},</p>
      <p>Your scholarship application (ID: ${applicationId}) has been updated.</p>
      <p><strong>Application Status:</strong> ${status}</p>
      <p><strong>Payment Status:</strong> ${paymentStatus}</p>
      <p>If you have any questions, please contact our support team.</p>
      <p>Best regards,<br>Scholarship Portal Team</p>
    </body>
  </html>
`;

exports.sendApplicationEmail = async (email, name, applicationId, status, paymentStatus) => {
  const subject = `Scholarship Application Update - ${status}`;
  const html = emailTemplate(name, applicationId, status, paymentStatus);
  
  try {
    await sendEmail(email, subject, html);
    console.log(`Email sent successfully to ${email}`);
  } catch (error) {
    console.error('Error sending application email:', error);
  }
};
