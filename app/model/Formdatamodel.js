const mongoose = require("mongoose");

const DiseaseDataSchema = new mongoose.Schema({
  diseasename: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  remedies: {
    type: String,
    required: true,
  },
  precaution: {
    type: String,
    required: true,
  },
  visualcontent: {
    type: String,
    required: true,
  },
  emergency_contact: {
    type: String,
    required: true,
  },
  general_contact: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("DiseaseData", DiseaseDataSchema);
