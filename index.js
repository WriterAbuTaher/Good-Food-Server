const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;

const allFood = require("./Data/allFood.json")
const burger = require("./Data/burger.json")
const chicken = require("./Data/chicken.json")
const juice = require("./Data/juice.json")
const cream = require("./Data/cream.json")
const veggie = require("./Data/veggie.json")
const fish = require("./Data/fish.json")

// main all food
app.get('/', (req, res) => {
    res.send(allFood)
});

// category added
app.get('/burger', (req, res) => {
    res.send(burger)
});
app.get('/chicken', (req, res) => {
    res.send(chicken)
});
app.get('/cream', (req, res) => {
    res.send(cream)
});
app.get('/veggie', (req, res) => {
    res.send(veggie)
});
app.get('/juice', (req, res) => {
    res.send(juice)
});
app.get('/fish', (req, res) => {
    res.send(fish)
});

// food detail with id
app.get('/food/:id', (req, res) => {
    const id = req.params.id;
    const food = allFood.find(e => e.id == id);
    res.send(food)
})

app.listen(port, () => {
    console.log(`listening server port: ${port}`);
});

module.exports = app;