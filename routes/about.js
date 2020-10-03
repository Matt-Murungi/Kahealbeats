const express = require("express");
const { route } = require("./music");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    about: "about",
  });
});

module.exports = router;