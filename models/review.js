const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewer: {type: String, required: true},
  score: { type: Number, min: 0, max: 5, required: true},
  content: { type: String, required: true},
  date: {type: Date, default: Date.now}
});

module.exports = reviewSchema;
