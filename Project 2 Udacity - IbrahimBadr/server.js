// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
app.listen(port, () => {
    console.log(`Server... \nStatus: Running \nURL + Port Number is: http://localhost:${port}/`);
});

// Add a GET route
app.get('/all', (req, res) => {
    console.log(projectData);
    res.send(projectData);
})

// Add a POST route
app.post('/add', (request, response) => {
    projectData = request.body;
    console.log(projectData);
    response.send(projectData);
});
