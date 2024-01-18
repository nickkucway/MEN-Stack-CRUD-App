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
    getPage: async function (page) {
        const apiMovies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.APIKEY}&page=${page}`)
        return apiMovies.data
    },
}

