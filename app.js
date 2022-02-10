const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

// body-parsing
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// serving static files
app.use(express.static("public"));
// 3rd party middlewares
app.use(morgan("dev"));

// Template engine
app.set("views", "views");
app.set("view engine", "ejs");

// Routes

app.use("/", viewRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// Listenning server
module.exports = app;
