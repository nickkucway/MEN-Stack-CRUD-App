/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/movies`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all movies
router.get('/', function (req, res) {
    db.Movie.find({})
        .then(movie => res.json(movie))
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,

router.post('/', (req, res) => {
    db.Movie.create(req.body)
        .then(movie => res.redirect('/movies/' + movie._id))
})


// New Route (GET/Read): This route renders a form 
router.get('/new', (req, res) => {
    res.render('movies/new-movie')
})


// Show Route (GET/Read): Will display an individual movie document
router.get('/:id', function (req, res) {
    db.Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/movie-details', {
            movie: movie
        })
    })
        .catch(() => res.send('404 Error: Page Not Found'))
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 

router.put('/:id', (req, res) => {
    db.Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(movie => res.redirect('/movies/' + movie._id))
})

// Destroy Route (DELETE/Delete): This route deletes a movie document 
router.delete('/:id', (req, res) => {
    db.Movie.findByIdAndDelete(req.params.id)
        .then(movie => res.send('You\'ve deleted movie ' + movie._id))
})


// Edit Route (GET/Read): This route renders a form
router.get('/:id/edit', (req, res) => {
    db.Movie.findById(req.params.id)
        .then(movie => res.render('movies/edit-movie', {movie: movie}))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
