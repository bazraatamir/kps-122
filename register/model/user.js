const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
  userName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
