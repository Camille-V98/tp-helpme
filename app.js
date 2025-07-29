"use strict";

const express = require('express');
const app = express();
require("dotenv").config()

const port = process.env.PORT_NO || 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

let message = "Hello World"

app.get('/', (req, res) => {
    res.render("index", {message: message })
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })