const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },

  password: { type: String, required: true },
  checkBox: {
    0: Number,
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number,
    6: Number,
    7: Number,
    8: Number,
    9: Number,
    10: Number,
    11: Number,
    12: Number,
    13: Number,
    14: Number,
    15: Number,
  },
});



module.exports = mongoose.model("User", userSchema);
