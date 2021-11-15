require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.use("/", async (req, res) => {
  console.log("middle ware");
});

const port = 3001;
app.listen(port, () => {
  console.log("sever started at ", port);
});
