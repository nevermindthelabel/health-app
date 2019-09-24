const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
  medication: {
    type: String,
    required: true
  },
  dosage: {
    type: Number,
    required: true
  },
  dr: {
    type: String
  }
});

const Medication = mongoose.model('medication', MedicationSchema);

module.exports = Medication;
