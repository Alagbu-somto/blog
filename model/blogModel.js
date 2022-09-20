const { default: mongoose } = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
