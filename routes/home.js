const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  musicVideos = [
    {
      link: "https://www.youtube.com/embed/kUlMSoTs5PI?list=PLjSangC7SdqSXiEhP-GcoQHwRmK6qjqC_", 
   
      name: "Making Moves",
      author: "Roy Nkangi & GRG"
    },
    {
      link: "https://www.youtube.com/embed/BGY1BIBxS20", 
      name: "Gazing",
      author: "Roy Nkangi & GRG"
    },
    {
      link: "https://www.youtube.com/embed/wlynl-vgPo0" , 
      name: "Me to Me",
      author: "Roy Nkangi & GRG"
    },
    {
      link: "https://www.youtube.com/embed/P3N7OttRn08", 
      name: "Get Loose",
      author: "Roy Nkangi & GRG"
    },
    {
      link: "https://www.youtube.com/embed/OgQePlVfer4", 
      name: "No Time",
      author: "Roy Nkangi & GRG"
    },   {
      link: "https://www.youtube.com/embed/TXhQz_fBuCs", 
      name: "Never Knew",
      author: "Roy Nkangi & GRG"
    },
  ]
  res.status(200).render('home', musicVideos);
});

module.exports = router;
