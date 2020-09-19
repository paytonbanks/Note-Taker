var express = require("express");
var path = require("path");

var fs = require("fs");

require("./routes/apiRoutes");
require("./routes/htmlRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

