const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Tour = require("./../../models/tourModel");

// Connection to MongoDb
const DB = process.env.DATABASE;
mongoose.connect(DB, (con) => {
  console.log(`DB connected successfully!`);
});

// Read json file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

// Import data into db
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data succesfully loaded!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// Delete all data from db
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data succesfully deleted!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
