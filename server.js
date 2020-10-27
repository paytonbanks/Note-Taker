var express = require("express");
var app = express();
// var router = express.Router();
var PORT = process.env.PORT || 3000;


// var routes = require("./routes");
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// Start Server to listen for incoming request. //
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

