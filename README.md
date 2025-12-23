<img width="250" height="50" alt="image" src="https://github.com/user-attachments/assets/38f3794e-58c4-4b3d-a31e-4ef089121296" />

#  Per Scholas Software Engineer Bootcamp SBA 12

## Do you want to get ***free*** tech training from Per Scholas? 

## [Click Here to find out how!](https://perscholas.referralrock.com/l/7MIDHLPB/) 

*************************************************************************************************************

# SBA 12: Build a RESTful Server

### Scenario
You are a junior backend developer at a new startup creating a movie review website. Your first major task is to build the core of the backend: a “Movie Finder” API. This API will not store any data itself; instead, it will act as an intermediary, fetching movie information from a public, external movie database. Your API will then provide cleaned-up, relevant data to the future front-end application.

This assessment will test your ability to structure a server, handle routes, interact with an external service, and manage configuration securely - all core skills for a backend developer.

Required Reading: RESTful Principles
Before you begin, it’s important to understand the principles of a RESTful API. REST (REpresentational State Transfer) is an architectural style that defines a set of constraints for creating web services. A well-designed RESTful API is predictable, easy to use, and scalable.

## The key principles are:

- Client-Server Architecture: The client (e.g., a front-end app) and the server (your Express app) are completely separate. The client only needs to know the URI (the endpoint) of the resource it wants to interact with.
- Statelessness: Every request from a client to the server must contain all the information the server needs to fulfill it. The server does not store any information about the client’s state between requests. This makes the application more reliable and easier to scale.
- Uniform Interface: This is the core of REST. It simplifies and decouples the architecture, which allows each part to evolve independently. It includes:
- Resource-Based URLs: URLs should be intuitive and identify resources, not actions. Use nouns, not verbs.

  - Good: /api/movies/search
  - Bad: /api/getMovieSearchResults
  - HTTP Methods (Verbs): Use standard HTTP methods to perform actions on resources.

For this assessment, you will only use GET, but a full CRUD application would also use:
- GET: Retrieve a resource.
- POST: Create a new resource.
- PUT / PATCH: Update an existing resource.
- DELETE: Remove a resource.
  
Standard Representations: Resources are decoupled from their representation. The client and server agree on a format, which is almost always JSON for modern web APIs.

# Instructions

# Task 1: Get Your API Key
- For this assessment, you will use the OMDb (Open Movie Database) API. It’s a free service that provides movie data.
- Visit http://www.omdbapi.com/apikey.aspx .
  - Select the FREE plan.
  - Enter your email address to have a unique API key sent to you.
  - You will receive your key via email shortly. Keep it safe.

# Task 2: Project Setup
- Create a new project directory (e.g., movie-finder-api).
- Initialize a Node.js project: npm init -y.
- Install the required dependencies: express, axios, and dotenv.
``` bash
npm install express axios dotenv
```
 - Create a .env file in the root of your project. Store your OMDb API key in it like this:
    - OMDB_API_KEY=your_key_here
 - Create a .gitignore file and add node_modules/ and .env to it. This is a critical security step.
   
# Task 3: Application Structure
Your application must be structured with separate directories for routes and controllers.
  - Create a server.js file in the root directory. This will be your main entry point.
  - Create a routes directory. Inside it, create a movieRoutes.js file.
  - Create a controllers directory. Inside it, create a movieController.js file.
    
# Task 4: Build the Server (server.js)
- In server.js, require and configure dotenv at the very top.
- Set up your Express application instance.
- The server should listen on a port of your choice (e.g., 3001), logging a message on startup.
- Import the routes from ./routes/movieRoutes.js.
- Mount your movie routes. All routes related to movies should be prefixed with /api. For example, a /search route in your router file will be accessible at /api/search.

# Task 5: Create the Routes (routes/movieRoutes.js)
- Create an express.Router.
- Import the controller functions from ../controllers/movieController.js.
- Define two routes and associate them with the controller functions:
  - GET /search: This will handle movie searches.
  - GET /movies/:id: This will fetch details for a specific movie.
- Export the router.
  
# Task 6: Implement Controller Logic (controllers/movieController.js)
- This is where the main logic of your application will live.

## searchMovies function:
  - This function will handle the GET /api/search route.
  - It should get the search term from a query parameter named title (i.e., req.query.title).
  - Validation: If the title query parameter is missing, it should respond with a 400 Bad Request status and a JSON error message like { "error": "Title query parameter is required" }.
- It should make a GET request to the OMDb API using axios. The base URL is http://www.omdbapi.com/.
- You will need to include two query parameters in your request to OMDb:
  - s (for search term)
  - apikey (your key from process.env.OMDB_API_KEY)
  - If the request is successful, send the list of movies back to the client as JSON.
  - Implement try...catch for error handling.
    
## getMovieDetails function:
- This function will handle the GET /api/movies/:id route.
- It should get the movie’s IMDb ID from the route parameters (req.params.id).
- It should make a GET request to the OMDb API. This time, you will need to include two query parameters:
  - i (for IMDb ID)
  - apikey
- If the request is successful, send the detailed movie data back to the client as JSON.
- Implement try...catch for error handling.
  
## Submission Instructions
- Ensure your project is fully functional and structured as described.
- Test your endpoints using a tool like Postman or by visiting the URLs in your browser.
  - http://localhost:3001/api/search?title=batman
  - http://localhost:3001/api/movies/tt0372784
- Submit a link to your completed GitHub repository. Ensure the .env file is not included in the repository.
