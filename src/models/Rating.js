const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  like: {
    type: true,
  },
  dislike: {
    type: false,
  },
  ipAddress: {
    type: String,
  },
});

module.exports = new mongoose.model("Rating", ratingSchema);
