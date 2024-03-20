const path = require('path')
const express = require("express");
const { hostname } = require('os');
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();


// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use("/openai", require('./routes/openaiRoutes.js'));

app.listen(port,()=> console.log("server started on port ${port}"));


