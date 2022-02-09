const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// body-parsing
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// 3rd party middlewares
app.use(morgan("dev"));

// Routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// Lstenning server
module.exports = app;
