const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  workoutId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Workout',                          
    required: true
  },
  exerciseName: { type: String, required: true, maxlength: 50 },
  sets: {type: Number, required: true, min: 1},
  reps: {type: Number, required: true, min: 1},
  weightsPerSet: { type: String, maxlength: 50, default: '' }
} , { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema);
