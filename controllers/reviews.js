/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/applications`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (All Reviews): 
// GET localhost:3000/reviews/
router.get('/', (req, res) => {
	db.Movie.find({}, { reviews: true, _id: false })
        .then(movies => {
		    // format query results to appear in one array, 
		    // rather than an array of objects containing arrays 
	    	const flatList = []
	    	for (let movie of movies) {
	        	flatList.push(...movie.reviews)
	    	}
	    	res.json(flatList)
		}
	)
});

// New Route: GET localhost:3000/reviews/new
router.get('/new/:movieId', (req, res) => {
    res.send('You\'ve reached the new route. You\'ll be making a new review for movie ' + req.params.movieId)
})

// Create Route: POST localhost:3000/reviews/
router.post('/create/:movieId', (req, res) => {
    db.Movie.findByIdAndUpdate(
        req.params.movieId,
        { $push: { reviews: req.body } },
        { new: true }
    )
        .then(movie => res.json(movie))
});

// Show Route: GET localhost:3000/reviews/:id
router.get('/:id', (req, res) => {
    db.Movie.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        .then(movie => {
	        // format query results to appear in one object, 
	        // rather than an object containing an array of one object
            res.json(movie.applications[0])
        })
});

// Destroy Route: DELETE localhost:3000/reviews/:id
router.delete('/:id', (req, res) => {
    db.Movie.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        { $pull: { reviews: { _id: req.params.id } } },
        { new: true }
    )
        .then(movie => res.json(movie))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
