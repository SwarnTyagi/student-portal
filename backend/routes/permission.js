let router = require("express").Router();

var permissionController = require("./../controllers/permissionController");

router
  .route("/")
  .get(permissionController.index)
  .post(permissionController.add);
router
  .route("/:permission_id")
  .get(permissionController.view)
  .patch(permissionController.update)
  .put(permissionController.update)
  .delete(permissionController.delete);
module.exports = router;
