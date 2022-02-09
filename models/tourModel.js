const mongoose = require("mongoose");

// Describing Schema
const tourSchema = mongoose.Schema({
  name: String,
  rating: Number,
  duration: Number,
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
