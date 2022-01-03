let router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    status: "API Works",
    message: "Welcome to FirstRest API",
  });
});

var studentController = require("./../controllers/studentController");

router
  .route("/student")
  .get(studentController.index)
  .post(studentController.add);

module.exports = router;
