const { Permission } = require("./../models/permissionModel");
//For index
exports.index = function (req, res) {
  Permission.find(function (err, permission) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got data Successfully!",
      data: permission,
    });
  });
};

exports.add = function (req, res) {
  const permission = new Permission(req.body);

  permission.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "Newly Added permission!",
      data: permission,
    });
  });
};
exports.view = function (req, res) {
  Permission.findById(req.params.permission_id, function (err, permission) {
    if (err) res.send(err);
    res.json({
      message: "Permission Details",
      data: permission,
    });
  });
};
exports.update = function (req, res) {
  Permission.findById(req.params.permission_id, function (err, permission) {
    if (err) res.send(err);
    permission = { ...permission, ...req.body };
    permission.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "permission Details Updated Successfully",
        data: permission,
      });
    });
  });
};

exports.delete = function (req, res) {
  Permission.deleteOne(
    {
      _id: req.params.permission_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Permission Deleted",
      });
    }
  );
};
