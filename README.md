# xavier

## Project Description
Xavier is a shopping platform. It's my attempt at creating a functional website using vue.js. This project is part of my third semester exams for Alt School of Engineering, Africa.

The goal of the exam is to use nested routes for the navigation menu that will show on each page, and authguards, such that users cannot access certain routes (like the products route) unless they're logged in. They should also not be able to access the login route once logged in. 

As a bonus, I extracted a composable to get the currently logged-in user and created a page that shows the product’s details by using a rest api.

## Technologies Used
Vue.js (as the framework to build the entire project)

HTML (to create the bare bones of the web application)

Javascript (for functionality)

CSS (for styling)

Bootstrap CSS(for quick components like card and buttons for the project)

Vuex (library to manage state)

Vue-router (to manage routes and links)

Axios (to fetch and consume data from a rest API)

Firebase (for authentication and validation)

Fortawesome (to get ready-to-use icons for responsive navigation)

## Challenges
Using vue.js to create a complete project made me realize that I need to brush up my javascript skills. I'm used to working with React and it was a challenge transitioning to Vue. However, now that I am aware of my shortcomings, I will take the required steps to improve.

## How to use
The website is pretty easy to use as the design is intuitive. Once you open the app, sign up as a user with an email, username, and password. This should take you the homepage, where you're logged as a user. You also gain access to the products page and dashboard. 

If you log out of the app, you lose access to these pages until you log in again.

To log in, use the same email and password you used while registering. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
