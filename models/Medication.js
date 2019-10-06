const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  dosage: {
    type: Number
  },
  dr: {
    type: String
  },
  sideEffects: {
    type: String
  }
});

const Medication = mongoose.model('medication', MedicationSchema);

module.exports = Medication;
