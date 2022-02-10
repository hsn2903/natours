const express = require("express");

const tourController = require("./../controllers/tourController");

const router = express.Router();

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

router.get(
  "/top-5-cheap",
  tourController.aliasTopTours,
  tourController.getAllTours
);

module.exports = router;
