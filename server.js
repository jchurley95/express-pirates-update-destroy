
// REQUIREMENTS
var express = require("express");
var app = express(); 
var logger = require("morgan"); // used for terminal logging of status codes
var bodyParser = require("body-parser");
var hsb = require("hbs");
const methodOverride = require("method-override");

var port = process.env.PORT || 3000;


// MIDDLEWARE
app.use(logger("dev"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));


// CONTROLLERS

var pirateController = require('./controllers/pirates.js');
app.use('/pirates', pirateController);

app.get('/', (req, res) => {
    res.send('This is our homepage');
})

// LISTENERS

app.listen(port, (req, res) => {
    console.log("Listening");
})