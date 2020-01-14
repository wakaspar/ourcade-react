const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const scoreRoutes = express.Router();
const PORT = 4000;

let Score = require('./score.model');

app.use(cors());
app.use(bodyParser.json());

// Connect to Database
mongoose.connect('mongodb://127.0.0.1:27017/scores', { useNewUrlParser: true });
const connection = mongoose.connection;
// db sanity check
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
