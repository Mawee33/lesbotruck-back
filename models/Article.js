const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  text: String,
});

const articleModel = mongoose.model("Article", ArticleSchema);

module.exports = articleModel;