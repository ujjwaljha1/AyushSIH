const Application = require('../models/Application');
const emailService = require('../services/emailService');

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find({ status: 'Pending' });
    res.json(applications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.approveApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, 
      { status: 'Approved' },
      { new: true }
    );
    // await emailService.sendApplicationApprovedEmail(application.email, application.applicationId);
    await emailService.sendApplicationEmail(
        application.email,
        `${application.firstName} ${application.lastName}`,
        application.applicationId,
        'Approved',
        'Pending'
      );
    res.json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.rejectApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, 
      { status: 'Rejected', adminFeedback: req.body.feedback },
      { new: true }
    );
    // await emailService.sendApplicationRejectedEmail(application.email, application.applicationId, req.body.feedback);
    await emailService.sendApplicationEmail(
        application.email,
        `${application.firstName} ${application.lastName}`,
        application.applicationId,
        'Rejected',
        'N/A'
      );
    res.json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
