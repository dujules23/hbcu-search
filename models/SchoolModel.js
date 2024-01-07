const mongoose = require("mongoose");

const School = mongoose.model(
  "School",
  mongoose.Schema({
    name: String,
    link: String,
    location: String,
    slug: String,
  })
);

module.exports = School;
