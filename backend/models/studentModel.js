var mongoose = require("mongoose");
//schema
var studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

var Student = (module.exports = mongoose.model("student", studentSchema));
module.exports = { Student };
