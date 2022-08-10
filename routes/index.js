var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Photo Dump" });
});

router.get("/", function (req, res, next) {
  res.redirect("/");
});

module.exports = router;
