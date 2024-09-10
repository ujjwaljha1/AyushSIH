// // server/services/emailService.js
// const emailjs = require('emailjs-com');

// const sendEmail = async (templateId, templateParams) => {
//   try {
//     await emailjs.send(
//       'service_sl1i28m',
//       templateId,
//       templateParams,
//       'YOUR_USER_ID'
//     );
//   } catch (error) {
//     console.error('Failed to send email:', error);
//   }
// };

// exports.sendApplicationSubmittedEmail = async (email, applicationId) => {
//   await sendEmail('APPLICATION_SUBMITTED_TEMPLATE_ID', {
//     to_email: email,
//     application_id: applicationId,
//   });
// };

// exports.sendApplicationApprovedEmail = async (email, applicationId) => {
//   await sendEmail('APPLICATION_APPROVED_TEMPLATE_ID', {
//     to_email: email,
//     application_id: applicationId,
//   });
// };

// exports.sendApplicationRejectedEmail = async (email, applicationId, feedback) => {
//   await sendEmail('APPLICATION_REJECTED_TEMPLATE_ID', {
//     to_email: email,
//     application_id: applicationId,
//     feedback: feedback,
//   });
// };

// exports.sendPaymentReleasedEmail = async (email, applicationId) => {
//   await sendEmail('PAYMENT_RELEASED_TEMPLATE_ID', {
//     to_email: email,
//     application_id: applicationId,
//   });
// };


// // server/services/emailService.js// server/services/emailService.js
// const emailjs = require('@emailjs/nodejs');

// // Initialize EmailJS with your public and private keys
// emailjs.init({
//   publicKey: process.env.EMAIL_PUBLIC_KEY,
//   privateKey: process.env.EMAIL_PRIVATE_KEY,
// });

// const sendEmail = async (templateId, templateParams) => {
//   try {
//     await emailjs.send({
//       service_id: 'service_sl1i28m', // Replace with your actual service ID
//       template_id: 'template_vjdh49e',
//       template_params: templateParams,
//     });
//     console.log(`Email sent successfully for template: ${templateId}`);
//   } catch (error) {
//     console.error(`Failed to send email for template: ${templateId}`, error);
//     throw new Error('Email sending failed');
//   }
// };

// exports.sendApplicationSubmittedEmail = async (email, applicationId) => {
//   try {
//     await sendEmail('APPLICATION_SUBMITTED_TEMPLATE_ID', {
//       to_email: email,
//       application_id: applicationId,
//     });
//   } catch (error) {
//     console.error('Error sending application submitted email:', error);
//   }
// };

// exports.sendApplicationApprovedEmail = async (email, applicationId) => {
//   try {
//     await sendEmail('APPLICATION_APPROVED_TEMPLATE_ID', {
//       to_email: email,
//       application_id: applicationId,
//     });
//   } catch (error) {
//     console.error('Error sending application approved email:', error);
//   }
// };

// exports.sendApplicationRejectedEmail = async (email, applicationId, feedback) => {
//   try {
//     await sendEmail('APPLICATION_REJECTED_TEMPLATE_ID', {
//       to_email: email,
//       application_id: applicationId,
//       feedback: feedback,
//     });
//   } catch (error) {
//     console.error('Error sending application rejected email:', error);
//   }
// };

// exports.sendPaymentReleasedEmail = async (email, applicationId) => {
//   try {
//     await sendEmail('PAYMENT_RELEASED_TEMPLATE_ID', {
//       to_email: email,
//       application_id: applicationId,
//     });
//   } catch (error) {
//     console.error('Error sending payment released email:', error);
//   }
// };



// // server/services/emailService.js
// const nodemailer = require('nodemailer');

// // Create a transporter using SMTP
// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // Use TLS
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// const sendEmail = async (to, subject, html) => {
//   try {
//     let info = await transporter.sendMail({
//       from: '"Scholarship Portal" <noreply@scholarshipportal.com>',
//       to: to,
//       subject: subject,
//       html: html
//     });
//     console.log("Message sent: %s", info.messageId);
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Email sending failed');
//   }
// };

// const emailTemplate = (name, applicationId, status, paymentStatus) => `
//   <html>
//     <body>
//       <h2>Scholarship Application Update</h2>
//       <p>Dear ${name},</p>
//       <p>Your scholarship application (ID: ${applicationId}) has been updated.</p>
//       <p><strong>Application Status:</strong> ${status}</p>
//       <p><strong>Payment Status:</strong> ${paymentStatus}</p>
//       <p>If you have any questions, please contact our support team.</p>
//       <p>Best regards,<br>Scholarship Portal Team</p>
//     </body>
//   </html>
// `;

// exports.sendApplicationEmail = async (email, name, applicationId, status, paymentStatus) => {
//   const subject = `Scholarship Application Update - ${status}`;
//   const html = emailTemplate(name, applicationId, status, paymentStatus);
  
//   try {
//     await sendEmail(email, subject, html);
//     console.log(`Email sent successfully to ${email}`);
//   } catch (error) {
//     console.error('Error sending application email:', error);
//   }
// };

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
