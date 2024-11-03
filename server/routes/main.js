"use strict";

const express = require("express");

const Post = require("../models/post");

const router = express.Router();

router.get("", async (req, res) => {
  const locals = {
    title: "Nodejs Blog",
    description: "Simple Nodejs Blog",
  };

  try {
    const data = await Post.find();
    res.render("index", { locals, data });
  } catch (err) {
    console.log(err)
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
