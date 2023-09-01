const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = mongoose.connect("mongodb://127.0.0.1:27017/kps-122", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connect;
};

module.exports = connectDB;
