const express = require("express"); // import express library
const app = express(); // use const "express" from line 1 to create app
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// Routes
// create a root route
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

app.get("/venus", function(req, res){
    res.render("venus.html");
});

app.get("/earth", function(req, res){
    res.render("earth.html");
});

app.get("/mars", function(req, res){
    res.render("mars.html");
});

// Listener - Starting the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");        // callback function
})