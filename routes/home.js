const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  musicVideos = [
    {
      link: "https://youtu.be/DeMc26Nkvp0", 
      name: "Gazing",
      author: "Roy Nkangi & GRG"
    },
    {
      link: "https://youtu.be/DeMc26Nkvp0", 
      name: "Gazing",
      author: "Roy Nkangi & GRG"
    },
    {
      link: "https://youtu.be/DeMc26Nkvp0", 
      name: "Gazing",
      author: "Roy Nkangi & GRG"
    },
    {
      link: "https://youtu.be/DeMc26Nkvp0", 
      name: "Gazing",
      author: "Roy Nkangi & GRG"
    },
  ]
  res.status(200).render('home', musicVideos);
});

module.exports = router;
