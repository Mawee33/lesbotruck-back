const express = require("express");
const router = new express.Router();
const studentModel = require("./../models/Article");

router.get("/articles", (req, res) => {
    articleModel
      .find()
      .then(dbRes => {
        res.status(200).json(dbRes);
      })
      .catch(dbErr => {
        res.status(500).json(dbErr);
      });
  });
  
  router.get("/articles/:id", (req, res) => {
    studentModel
      .findById(req.params.id)
      .then(dbRes => {
        res.status(200).json(dbRes);
      })
      .catch(dbErr => {
        res.status(500).json(dbErr);
      });
  });
  
  router.post("/articles", (req, res) => {
   articleModel
      .create(req.body)
      .then(dbRes => {
        res.status(200).json(dbRes);
      })
      .catch(dbErr => {
        res.status(500).json(dbErr);
      });
  });
  
  module.exports = router;