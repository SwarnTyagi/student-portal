const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

const studentRouter = require("./routes/student");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const teacherRouter = require("./routes/teacher");
const authenticate = require("./middlewares/authenticate");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(bodyParser.json());
app.use("/students", authenticate, studentRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/teachers", authenticate, teacherRouter);
const dbPath = "mongodb://localhost:27017/userDatabase";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

dotenv.config();
const mongo = mongoose.connect(dbPath, options);

mongo.then(
  () => {
    console.log("connected");
  },
  (error) => {
    console.log(error, "error");
  }
);

app.listen(8000, () => {
  console.log("running at 8000");
});
