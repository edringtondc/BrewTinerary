const router = require("express").Router();
const breweryRoutes = require("./brewery");

// Book routes
router.use("/brewery", breweryRoutes);

module.exports = router;