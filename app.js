//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { options } = require("request");
const { Auth } = require("request/lib/auth");



const app = express();




let userArray = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");s
    function add() {
        let a = document.getElementById("userInput").value;
        userArray.push(a);
        console.log(userArray);
    }
});



app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running at port 3000");
});

app.post("/", function (req, res) {
    let userInput = req.body.userInput;
    userArray.push(userInput);
    console.log(userArray);
})


