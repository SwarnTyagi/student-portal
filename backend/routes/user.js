let router = require("express").Router();

var userController = require("./../controllers/userController");

router.route("/").get(userController.index).post(userController.add);
router
  .route("/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);
module.exports = router;
