"use strict";

const express = require("express");

const Post = require("../models/post");

const router = express.Router();

router.get("", (req, res) => {
  const locals = {
    title: "Nodejs Blog",
    description: "Simple Nodejs Blog",
  };

  res.render("index", { locals });
});


router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
