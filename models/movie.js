// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review.js')


// Create a schema to define the properties of the pets collection
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, min: 1900, max: 2050, required: true },
    length: { type: Number, min: 0, required: true },
    genre: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
    // reviews go here
    reviews: [reviewSchema]
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Movie', movieSchema);
