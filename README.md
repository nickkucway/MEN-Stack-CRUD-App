
![watchlist_header](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/4c5790da-9470-45e1-b007-a9aad84a2dd6)

## [View here](https://the-watchlist-fed56736c38e.herokuapp.com/)

### :memo:Description:memo:

This project is a movie logging application called The Watchlist

<details>
<summary>:art:WireFrames:art:</summary>

![movie-site-details](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/5825740e-e886-454e-8197-16334ae81820)
![movie-site-homeindex](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/64314198-c760-495b-911b-d055c33833af)
![movie-site-form](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/fee7b9fe-fa0a-4c86-8d74-e1af9e2aed7d)
![movie-site-about](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/676bede6-6913-440c-9266-1d7381fa6fdf)
![movie-site-reviews](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/d8ebff93-621d-4493-bcbc-995ce0fc314a)

</details>

<details>

<summary>:desktop_computer:Finished App:desktop_computer:</summary>

![screencapture-localhost-3000-2024-01-21-11_19_08](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/25270b55-1d14-47a3-9ac7-129166ba988b)
![screencapture-localhost-3000-results-star-wars-2024-01-21-11_19_41](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/d0bfe75a-8c83-4dbb-aa06-ec009c27fdf2)



</details>

<details>
<summary>Route Map</summary>

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
</details>

<details>
<summary>ERD</summary>

![erd](https://github.com/nickkucway/MEN-Stack-CRUD-App/assets/152036965/32b6b050-2039-4b1c-a18b-2fa474566271)
</details>

<details>
<summary>User Stories</summary>

As a fan of movies, I want to be able to log which movies I've seen on this app, and review them.

As a hiring manager, I want to be able to see the way Nick built out this app.

</details>

<details>

<summary>Trouble Shooting</summary>

Still have an issue with the date defaulting to the current day when editing a movie release date.

</details>

<details>

<summary>:soon:Coming Next:soon:</summary>

would like to add some kind of oauth to add users. 

</details>

## :computer: Technologies Used

  ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
  ![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
  ![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
  ![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
  ![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
  ![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)
  ![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
  ![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
