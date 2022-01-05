const { Teacher } = require("./../models/teacherModel");
//For index
exports.index = function (req, res) {
  Teacher.find(function (err, teacher) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got teacher data Successfully!",
      data: teacher,
    });
  });
};

exports.add = function (req, res) {
  var teacher = new Teacher();
  teacher.name = req.body.name ? req.body.name : teacher.name;
  teacher.facultyID = req.body.facultyID;
  teacher.course = req.body.course;
  teacher.rating = req.body.rating;

  teacher.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New teacher Added!",
      data: teacher,
    });
  });
};
exports.view = function (req, res) {
  Teacher.findById(req.params.teacher_id, function (err, teacher) {
    if (err) res.send(err);
    res.json({
      message: "teacher Details",
      data: teacher,
    });
  });
};
exports.update = function (req, res) {
  Teacher.findById(req.params.teacher_id, function (err, teacher) {
    if (err) res.send(err);
    teacher.name = req.body.name ? req.body.name : teacher.name;
    teacher.facultyID = req.body.facultyID;
    teacher.course = req.body.course;
    teacher.rating = req.body.rating;

    teacher.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "teacher Details Updated Successfully",
        data: teacher,
      });
    });
  });
};

exports.delete = function (req, res) {
  Teacher.deleteOne(
    {
      _id: req.params.teacher_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "teacher Deleted",
      });
    }
  );
};
