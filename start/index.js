require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello word");
});
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000),
  () => {
    console.log(`Server is running on port ${port}`);
  };

// console.log("Hello world");
