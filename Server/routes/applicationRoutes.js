const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const upload = require('../middleware/upload');

router.post('/', upload.fields([
  { name: 'marksheet12th', maxCount: 1 },
  { name: 'familyIncomeCertificate', maxCount: 1 },
  { name: 'passbookFirstPage', maxCount: 1 },
  { name: 'aadharFrontPage', maxCount: 1 }
]), applicationController.submitApplication);

router.get('/:applicationId', applicationController.getApplicationStatus);
router.get('/past', applicationController.getPastApplications);


module.exports = router;