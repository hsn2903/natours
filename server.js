const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

// Connection to MongoDb
const DB = process.env.DATABASE;
mongoose.connect(DB, (con) => {
  console.log(`DB connected successfully!`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});