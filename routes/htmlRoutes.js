var path = require("path");
var express = require("express");
var app = express();


// Get Notes "/" level folder required for route //
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;