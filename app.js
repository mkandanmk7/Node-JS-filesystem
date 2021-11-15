require("dotenv").config();

const express = require("express");

const fs = require("fs");

const app = express();

app.use(express.json());

//creating a folder to store all files
if (!fs.existsSync("Files"));

fs.mkdirSync("Files");

app.use((req, res) => {
  console.log("middle ware");
});

const port = 3001;
app.listen(port, () => {
  console.log("sever started at ", port);
});
