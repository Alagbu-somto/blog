//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const controllers = require("./controllers/blogControlleres");
const composeRoutes = require("./Routers/composeRoutes");

const app = express();

app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/blogDB");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", controllers.homeControler_get);

app.get("/about", controllers.aboutController_get);

app.get("/contact", controllers.contactController_get);

app.use(composeRoutes);

app.get("/post/:topic", controllers.postControllers_get);

app.post("/delete", controllers.deleteControllers_post);

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
}
module.exports = app;
