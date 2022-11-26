# **Grocery List App**
## **MERN Stack Milestone Project** 
---
### Description
This is a grocery list application where you must create an account and sign in to use its features.  There is a search bar where you can search for any type of recipe you might need.  At the moment there is a quick grocery list on the dashboard where you can create a list and then e-mail it to yourself to use later at the store.  I am currently implementing saved lists that will be stored on your account so you can revisit them at a later date.

### Demo
Coming soon.
### Technologies
- React
- Redux
- Node
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Bootstrap
- Axios
- NodeMailer
- Heroku
- Git
- Github
### Features
- Create an account
- Sign in
- Search for recipes
- Create a grocery list
- E-mail grocery list to yourself
** Coming Soon **
- Save grocery lists to your account
### Installation
- Clone the repository
- Run `npm install` in the root directory
** Scripts **
- `npm run dev` - Runs the client and server with concurrently
- `npm run server` - Runs the server only
- 'npm start' - Runs the client only
### Issues
- Currently working on implementing saved lists to your account
- Database on Heroku is not working properly
- Need to move API key to the .env file

## EDAMAM Recipe Search API

### *Documentation: https://developer.edamam.com/edamam-docs-recipe-api*

### *URL: https://api.edamam.com/search?q=""*

There is now a version 2 that has been released.  I will be updating the app to use this version in the future.

### Security
- Passwords are hashed and salted using bcrypt
- JWT is used for authentication
- Currently the API key is not stored in an environment variable, it is vulnerable to being stolen. It is free and I will be changing it and moving it to the .env file in the future.

### Server Endpoints
- GET /api/list/all - Gets all lists
- GET /api/list/:id - Gets a list by id
- PUT /api/list/:id - Updates a list
- DELETE /api/list/:id - Deletes a list
- POST /api/list/create - Creates a list
- PUT /api/list/addItem/:id - Adds an item to a list
- POST /api/user/register - Registers a user
- POST /api/user/login - Logs in a user
- GET /api/user/me - Gets the current user
- POST /api/user/logout - Logs out a user
**These are a work in progress.  I will be updating it as I go.**
- DELETE /api/user/:id
- GET /api/user/:id/list
- POST /api/user/:id/list
- GET /api/user/:id/list/:listId
- PATCH /api/user/:id/list/:listId
- DELETE /api/user/:id/list/:listId

### Client Routes
- / - Home
- /login - Login
- /register - Register
- /dashboard - Dashboard
- /lists - Lists
- /dashboard/:id - Saved List Dashboard

### Change Log
1.0.0 - Initial release
1.0.1 - Recipe search is now working
1.0.2 - Added a quick grocery list to the dashboard
1.0.3 - Added user login and registration
1.0.4 - Added the ability to e-mail list to yourself
1.0.5 - Added README.md

** Coming Soon **
1.0.5 - Adding CRUD functionality to lists saved to your account
1.0.6 - Adding a TypeScript version of the app

### Authors
- **Thomas Crowe** - [Github](www.github.com/wtcrowe4)
- **Brittany Dedafoe** - [Github](www.github.com/bdedafoe)








