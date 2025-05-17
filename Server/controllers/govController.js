
const Application = require('../models/Application');
const emailService = require('../services/emailService');

exports.getApprovedApplications = async (req, res) => {
  try {
    // Check if the user has the 'government' role
    if (req.user.role !== 'gov') {
      return res.status(403).json({ message: 'Not authorized as government official' });
    }

    const applications = await Application.find({ status: 'Approved', paymentStatus: 'Pending' });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.releasePayment = async (req, res) => {
  try {
    // Check if the user has the 'government' role
    if (req.user.role !== 'gov') {
      return res.status(403).json({ message: 'Not authorized as government official' });
    }

    const application = await Application.findByIdAndUpdate(req.params.id, 
      { paymentStatus: 'Released' },
      { new: true }
    );
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    // await emailService.sendPaymentReleasedEmail(application.email, application.applicationId);
    await emailService.sendApplicationEmail(
        application.email,
        `${application.firstName} ${application.lastName}`,
        application.applicationId,
        'Approved',
        'Released'
      );
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};