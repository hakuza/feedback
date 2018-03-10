const express = require("express");
const router = express.Router();
const Review = require("./../database/index.js");

router.get("/*", function(req, res) {
  console.log(req.query);
  Review.Review.find({ courseId: req.query.id }).then(results => {
    res.send(results);
  });
});

module.exports = router;
