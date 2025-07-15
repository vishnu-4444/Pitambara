// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  category: String,
  tag: String,
  author: String,
  featuredImage: String,
  seoTitle: String,
  seoDescription: String,
  isPublished: { type: Boolean, default: false },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

module.exports = Blog;
