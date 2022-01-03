const { Student } = require("./../models/studentModel");
//For index
exports.index = function (req, res) {
  Student.find(function (err, student) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got student data Successfully!",
      data: student,
    });
  });
};

exports.add = function (req, res) {
  var student = new Student();
  student.name = req.body.name ? req.body.name : student.name;
  student.age = req.body.age;
  student.course = req.body.course;

  student.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New student Added!",
      data: student,
    });
  });
};
