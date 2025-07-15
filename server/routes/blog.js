const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// Allowed fields for updates
const allowedUpdates = [
  'title', 'content', 'tag', 'isPublished',
  'seoTitle', 'seoDescription', 'author',
  'category', 'featuredImage'
];

// Create new blog post
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  // ✅ 1. Basic validation
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  try {
    const blog = new Blog(req.body);
    const saved = await blog.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a blog post
router.put('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  // ✅ 2. Validate allowed fields
  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid update fields.' });
  }

  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // ✅ 3. Handle not-found
    if (!updated) {
      return res.status(404).json({ error: 'Blog not found.' });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'Blog not found.' });
    }

    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
