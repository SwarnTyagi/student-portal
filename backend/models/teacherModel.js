var mongoose = require("mongoose");
//schema
var teacherSchema = mongoose.Schema({
  facultyID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

var Teacher = (module.exports = mongoose.model("teacher", teacherSchema));
module.exports = { Teacher };
