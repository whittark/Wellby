# Wellby
![node](https://img.shields.io/node/v/express) ![npm](https://img.shields.io/npm/v/express) ![reactjs](https://img.shields.io/badge/ReactJS-v16.12.0-green) ![react-redux](https://img.shields.io/badge/react--redux-v7.1.3-green)

## Overview
Wellby is a wellness social media application designed for sharing health-related questions or wellness successes to a support community of your making.
This full stack ReactJS wellness app uses Redux for state management, Sequelize/mySQL as a database, and Express/Node.js for the backend.

## Technologies and Dependencies
- JavaScript
- ReactJS
- Redux and [React-Redux](https://www.npmjs.com/package/bcrypt)
- [Redux Persist](https://www.npmjs.com/package/redux-persist) 
- Bootstrap and [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap)
- Sequelize ORM ( with mySQL)
- Node.js and Express
- User authentication and validation
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- Multer for back end photo upload parsing

## Key Features

* Clean, ES6 JavaScript code
* Express and express.Router() to handle server routes
* ReactJS UI 
* State management using Redux and Redux Persist to persist the Redux store
* User sign-up
* User authentication with JWT and local storage for persistance 
* Bcrypt for password salting and hashing
* Restricted routes in ReactJS using react-router-dom
* Multer for photo upload


## User Actions

Create a new account

Log in

View posts by category or type

Post a wellness question or announcement

Respond to a post

View your account



## Getting Started

To download and test this app, you will need the Node Package Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

You will also need Node.js installed.  For more information, visit <https://nodejs.org/en/download/>

### Installing

To install, access the Github page <https://github.com/whittark/Wellby>.  You may fork the repository and then clone it to your computer.  

Next, download the required NPM packages on the client and root folders. Because these packages are listed as dependencies already in the package.json file, you may install these packages by entering `npm install` on the command line. 

This app uses MySQL and Sequelize. Use the information in models/schema.sql to establish your remote database You'll also need to create a .env file in the root folder and add DB_PASS=YOURSQLPASSWORD.

If you wish, you can download the redux dev tool extension [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) . This line of code in client/index.js allows you to view states as they change from the developer console. 

``` 
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

```

## Deployment and General Use
This app can be deployed to a server, such as Heroku or AWS, for online use from different users in different locations. To store data input, you will need to utilize an online database, such as the JAWSDB_URL add-on offered by Heroku.

It is currently deployed using heroku. To make changes to the live document, you will need to get access to the heroku app. After cloning the repo from github:

``` 
git clone git@github.com:whittark/Wellby.git

```
and making desired changes, you'll need to add the heroku app remotely

```
git remote add heroku git@heroku.com:ADDPAGE.git

```
then you can git add, commit, and push to heroku master.


## License

![MIT](https://img.shields.io/bower/l/bootstrap)
