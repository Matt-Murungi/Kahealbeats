const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const musicRoute = require("./routes/music");
const aboutRoute = require("./routes/about");
const homeRoute = require("./routes/home");

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/music", musicRoute);

app.use((req, res, next)=>{
        res.status(400).render('404')
})

module.exports = app;
