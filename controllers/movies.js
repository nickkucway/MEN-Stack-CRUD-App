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
// creates a new movie document using the form data, 
// and redirects the user to the new movie's show page
router.post('/', (req, res) => {
    db.Movie.create(req.body)
        .then(movie => res.json(movie))
})


// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.send('You\'ve hit the new route!')
})


// Show Route (GET/Read): Will display an individual movie document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Movie.findById(req.params.id)
        .then(movie => res.json(movie))
        .catch(() => res.send('404 Error: Page Not Found'))
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified movie document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    db.Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(movie => res.json(movie))
})

// Destroy Route (DELETE/Delete): This route deletes a movie document 
// using the URL parameter (which will always be the movie document's ID)
router.delete('/:id', (req, res) => {
    db.Movie.findByIdAndDelete(req.params.id)
        .then(movie => res.send('You\'ve deleted movie ' + movie._id))
})


// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing movie
router.get('/:id/edit', (req, res) => {
    db.Movie.findById(req.params.id)
        .then(movie => res.send('You\'ll be editing movie ' + movie._id))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
