| URL           | REST Route    | HTTP Verb	  | CRUD Action	  | EJS View(s)	 |
| ------------- | ------------- | ------------|---------------|------------- |
| /             |               |get          |read           |home-index.ejs      |
| /movies     | index         |get          |read           |home-index.ejs |
| /movies/:id | show          |get          |read           |movies-details.ejs |
| /movies/new | new           |get          |               |new-movie.ejs |
| /movies/    | create        |post         |create         | |
| /movies/:id/edit| edit      |get          |read           |edit-movie.ejs |
| /movies/:id| update         |patch/put    |update         | |
| /movies/:id| destroy        |delete       |delete         | |
| /reviews     | index         |get          |read           |reviews-index.ejs |
| /reviews/new/:movieId     | new         |get          |read           |new-review.ejs |
| /reviews/create/:movieId     | create         |post          |    create       | |
| /reviews/:id     | destroy         |delete          |    delete       | |
| /seed         |                |get          |delete & create| |
| /about         |                |get          || about.ejs|
| /*           |                |get          |               |404.ejs |
