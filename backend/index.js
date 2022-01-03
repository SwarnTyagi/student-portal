const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const studentRouter = require("./routes/student");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use("/", studentRouter);
const dbPath = "mongodb://localhost:27017/studentdatabase";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

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
