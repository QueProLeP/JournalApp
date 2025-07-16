const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  workoutId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Workout',                          
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',                          
    required: true
  },
  entry: { type: String, required: true, maxlength: 500 },
  date: { type: Date, required: true }
} , { timestamps: true });

module.exports = mongoose.model('Journal', journalSchema);
