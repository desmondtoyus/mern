const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Testing Route
router.route("/")
  .get(articleController.findAll)
  .post(function (req, res) {
    console.log("Routing working");
  });

  // The correct Route
// router.route("/")
//   .get(reportController.findAll)
//   .post(reportController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
