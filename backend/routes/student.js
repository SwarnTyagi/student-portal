let router = require("express").Router();

var studentController = require("./../controllers/studentController");

router.route("/").get(studentController.index).post(studentController.add);
router
  .route("/:student_id")
  .get(studentController.view)
  .patch(studentController.update)
  .put(studentController.update)
  .delete(studentController.delete);
module.exports = router;
