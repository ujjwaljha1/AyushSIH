const Application = require('../models/Application');
const emailService = require('../services/emailService');


const generateApplicationId = () => {
    // Generate a random 8-digit number
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  };

// exports.submitApplication = async (req, res) => {
//   try {
//     const applicationData = {
//       ...req.body,
//       marksheet12th: req.files['marksheet12th'][0].path,
//       familyIncomeCertificate: req.files['familyIncomeCertificate'][0].path,
//       passbookFirstPage: req.files['passbookFirstPage'][0].path,
//       aadharFrontPage: req.files['aadharFrontPage'][0].path,
//       status: 'Pending',
//       applicationId: generateApplicationId()
//     };

//     const application = new Application(applicationData);
//     await application.save();

//     // await emailService.sendApplicationSubmittedEmail(application.email, application.applicationId);
//     await emailService.sendApplicationEmail(
//         application.email,
//         `${application.firstName} ${application.lastName}`,
//         application.applicationId,
//         'Submitted',
//         'Pending'
//       );

//     res.status(201).json({ applicationId: application.applicationId });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

exports.submitApplication = async (req, res) => {
  try {
    const applicationData = {
      ...req.body,
      marksheet12th: `uploads/${req.files['marksheet12th'][0].filename}`,
      familyIncomeCertificate: `uploads/${req.files['familyIncomeCertificate'][0].filename}`,
      passbookFirstPage: `uploads/${req.files['passbookFirstPage'][0].filename}`,
      aadharFrontPage: `uploads/${req.files['aadharFrontPage'][0].filename}`,
      status: 'Pending',
      applicationId: generateApplicationId()
    };

    const application = new Application(applicationData);
    await application.save();

    await emailService.sendApplicationEmail(
      application.email,
      `${application.firstName} ${application.lastName}`,
      application.applicationId,
      'Submitted',
      'Pending'
    );

    res.status(201).json({ applicationId: application.applicationId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findOne({ applicationId: req.params.applicationId });
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json({
      applicationId: application.applicationId,
      status: application.status,
      adminFeedback: application.adminFeedback,
      paymentStatus: application.paymentStatus
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getPastApplications = async (req, res) => {
  try {
    const pastApplications = await Application.find({
      status: { $in: ['Approved', 'Rejected'] }
    }).sort({ createdAt: -1 });

    res.json(pastApplications);
  } catch (error) {
    console.error('Error fetching past applications:', error);
    res.status(500).json({ message: 'Server error' });
  }
};