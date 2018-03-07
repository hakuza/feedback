const express = require("express");
const router = express.Router();
const Review = require("./../database/index.js");

router.get("/", function(req, res) {
  Review.Review.find({}).then(results => {
    res.send(results);
  });
});

module.exports = router;
