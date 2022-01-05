let router = require("express").Router();

var teacherController = require("./../controllers/teacherController");

router.route("/").get(teacherController.index).post(teacherController.add);
router
  .route("/:teacher_id")
  .get(teacherController.view)
  .patch(teacherController.update)
  .put(teacherController.update)
  .delete(teacherController.delete);
module.exports = router;
