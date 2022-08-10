const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = new mongoose.model("Photo", photoSchema);
