/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const moviesCtrl = require('./controllers/movies')
const reviewsCtrl = require('./controllers/reviews')



/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());
// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));



/* Mount routes
--------------------------------------------------------------- */
app.get('/', function (req, res) {
    res.send('movie app')
});

app.get('/seed', function (req, res) {
    // Remove any existing Movies
    db.Movie.deleteMany({})
        .then(removedMovies => {
            console.log(`Removed ${removedMovies.deletedCount} movies`)
            // Seed the pets collection with the seed data
            db.Movie.insertMany(db.seedMovies)
                .then(addedMovies => {
                    console.log(`Added ${addedMovies.length} movies`)
                    res.json(addedMovies)
                })
        })
});

// This tells our app to look at the `controllers/movies.js` file 
// to handle all routes that begin with `localhost:3000/movies`
app.use('/movies', moviesCtrl)

// This tells our app to look at the `controllers/reviews.js` file 
// to handle all routes that begin with `localhost:3000/reviews`
app.use('/reviews', reviewsCtrl)

app.get('/about', function (req, res) {
    res.send('You\'ve hit the about route')
});


// The "catch-all" route: Runs for any other URL that doesn't match the above routes
// keep at bottom of routes
app.get('*', function (req, res) {
    res.send('404 Error: Page Not Found')
});


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
