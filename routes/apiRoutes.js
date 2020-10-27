// Global Varibles
var fs = require("fs");
var path = require("path");
var db = require("../db/db.json");
var router = require("express").Router();



// Get Notes //
router.get("/notes", function(req, res) {
  // read db.json file
  var notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
  console.log("notes we just read", notes)
  //parse the array 
  res.json(notes)
});

router.get("/notes", function(req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(db); 
});

// Delete & Undo //
router.delete("/notes/:id", function(req, res) {
    var undeletedNotes = [];
    for (var i = 0; i < db.length; i++) {
        if (db[i].id != req.params.id) {
            undeletedNotes.push(db[i]);
        }
    }
    db = undeletedNotes;
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err, res) {
        if (err) {
            throw err;
        }
    });
    console.log("Delete", db);
    res.json(db);
});


// Post & Push //
router.post("/notes", function(req, res) {


console.log("backend notes", req.body)


    var newNote = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        text: req.body.text
    };
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err, res) {
        if (err) {
            throw err;
        }
    });
    res.json(db);
});



module.exports = router;