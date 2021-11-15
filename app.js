require("dotenv").config();

const express = require("express");

const app = express();
const fs = require("fs");

// app.use(express.json());

//creating a folder to store all files
if (!fs.existsSync("Files")) {
  fs.mkdirSync("Files");
}

//common middleware
app.use((req, res, next) => {
  console.log("common middle ware");
  next();
});

//create file
app.get("/createfile", (req, res, next) => {
  console.log("create file process");

  let date = new Date();
  let fileName = `${date.toISOString()}.txt`;
  console.log(fileName);
  fileName = fileName.slice(0, 19).replace(/:/g, "-");

  let data = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log("after", fileName, typeof data);
  //write file
  fs.writeFileSync(`./Files/${fileName}.txt`, data, (err) => {
    if (err) console.log(err);
  });
  res.status(200).send("file created");
});

// retriving the data
app.get("/getfile", (req, res) => {
  let storage = fs.readdirSync("./Files");
  console.log(storage);
  res.send(storage);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("sever started at ", port);
});
