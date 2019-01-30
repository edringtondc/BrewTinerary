const router = require("express").Router();
const breweryController = require("../../controllers/brewerycontroller");

// Matches with "/api/books"
router.route("/")
  .get(breweryController.findAll)
  .post(breweryController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(breweryController.findById)
  .put(breweryController.update)
  .delete(breweryController.remove);

module.exports = router;