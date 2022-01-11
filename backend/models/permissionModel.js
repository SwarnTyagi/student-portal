var mongoose = require("mongoose");
//schema
var permissionSchema = mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  createUser: {
    type: Boolean,
  },
  updateUser: {
    type: Boolean,
  },
  deleteUser: {
    type: Boolean,
  },
  viewUser: {
    type: Boolean,
  },
  createTeacher: {
    type: Boolean,
  },
  updateTeacher: {
    type: Boolean,
  },
  deleteTeacher: {
    type: Boolean,
  },
  viewTeacher: {
    type: Boolean,
  },
  createStudent: {
    type: Boolean,
  },
  updateStudent: {
    type: Boolean,
  },
  deleteStudent: {
    type: Boolean,
  },
  viewStudent: {
    type: Boolean,
  },
  updateAcademicPlan: {
    type: Boolean,
  },
});

var Permission = (module.exports = mongoose.model(
  "permission",
  permissionSchema
));
module.exports = { Permission };
