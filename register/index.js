const express = require("express");
const connectDB = require("./data");
const userRouter = require("./router/user");
const app = express();
connectDB();
app.use(express.json());
app.use("/user", userRouter);
app.listen(3000, () => {
  console.log(`server listen 3000 port`);
});
