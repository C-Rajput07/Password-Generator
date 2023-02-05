const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("express");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.listen(3000, function (req, res) {
    console.log("Server is runnning on port 3000.");
});