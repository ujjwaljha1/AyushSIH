// server/models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fathersName: { type: String, required: true },
  mothersName: { type: String, required: true },
  fathersProfession: { type: String, required: true },
  mothersProfession: { type: String, required: true },
  state: { type: String, required: true },
  place: { type: String, required: true },
  pincode: { type: String, required: true },
  email: { type: String, required: true },
  alternativeEmail: { type: String },
  phoneNumber: { type: String, required: true },
  alternatePhoneNumber: { type: String },
  aadharNumber: { type: String, required: true },
  board12th: { type: String, required: true },
  marksheet12th: { type: String, required: true },
  familyIncomeCertificate: { type: String, required: true },
  passbookFirstPage: { type: String, required: true },
  aadharFrontPage: { type: String, required: true },
  applicationId: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  adminFeedback: { type: String },
  paymentStatus: { type: String, enum: ['Pending', 'Released'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);