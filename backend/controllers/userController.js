const { User } = require("./../models/userModel");

exports.index = function (req, res) {
  User.find(function (err, user) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got user data Successfully!",
      data: user,
    });
  });
};

exports.add = function (req, res) {
  var user = new User();
  user.username = req.body.username ? req.body.username : user.username;
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New user Added!",
      data: user,
    });
  });
};
exports.view = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "User Details",
      data: user,
    });
  });
};
exports.update = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) res.send(err);
    user.username = req.body.username ? req.body.username : user.username;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "User Details Updated Successfully",
        data: user,
      });
    });
  });
};

exports.delete = function (req, res) {
  User.deleteOne(
    {
      _id: req.params.user_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "User Deleted",
      });
    }
  );
};
