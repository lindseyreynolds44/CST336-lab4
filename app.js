const express = require("express"); // import express library
const app = express(); // use const "express" from line 1 to create app

// routes
// create a root route
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.send("This will be Mercury web page!");
});

app.get("/venus", function(req, res){
    res.send("This will be Venus web page!");
});


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");        // callback function
})