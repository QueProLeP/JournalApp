const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',                          
    required: true
  },
  workoutName: { type: String, required: true },
  date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);
