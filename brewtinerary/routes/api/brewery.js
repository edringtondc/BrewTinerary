const router = require("express").Router();
const breweryController = require("../../controllers/brewerycontroller");

// Matches with "/api/books"
router.route("/") //api/brewery/
  .get(breweryController.findAll)
  .post(breweryController.create);

// Matches with "/api/books/:id"
router
  .route("/:id") //api/brewery/:id
  .get(breweryController.findById)
  .put(breweryController.update)
  .delete(breweryController.remove);

module.exports = router;

router.route("/api/breweries")

