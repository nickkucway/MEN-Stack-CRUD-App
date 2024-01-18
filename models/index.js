// Require the Mongoose package & your environment configuration
const mongoose = require('mongoose');
require('dotenv').config()
const axios = require('axios')

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

module.exports = {
    Movie: require('./movie'),
    seedMovies: require('./seed'),
    getResults: async function (input) {
        const apiMovies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&query=${input}`)
        return apiMovies.data
    },
    getDetails: async function (movieId) {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.APIKEY}`)
        return movie.data
    }
}

