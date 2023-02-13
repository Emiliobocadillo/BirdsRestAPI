// import express framework
const express = require("express");
// instantiate 
const app = express();

const birds = [
  { id: 1, species: "Seagull", primaryColor: "White" },
  { id: 2, species: "Raven", primaryColor: "Black" },
  { id: 3, species: "Flamingo", primaryColor: "Pink" },
];

// GET ALL BIRDS
app.get("/birds", (req, res) => {
  res.send(birds);
});

// GET SPECIFIC BIRD BY ID
app.get("/birds/:id", (req, res) => {
  const bird = birds.find((bird) => bird.id === parseInt(req.params.id));
  if (!bird) {
    res.status(404).send("No birds with the given ID was found");
  } else {
    res.send(bird);
  }
});

app.listen(8080);
