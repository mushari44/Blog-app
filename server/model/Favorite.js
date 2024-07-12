const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Favorite", favoriteSchema);
