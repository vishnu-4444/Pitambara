'use client';

import { useState } from 'react';
import BlogEditor from '@/components/BlogEditor';

export default function NewBlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [author, setAuthor] = useState('User'); // Later from logged-in session
  const [featuredImage, setFeaturedImage] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      content,
      category,
      tags: tags.split(',').map(t => t.trim()),
      seoTitle,
      seoDescription,
      author,
      isPublished,
      featuredImage,
    };

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    alert(res.ok ? 'Blog saved!' : data.error || 'Error saving blog');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input" required />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="input" />
      <input placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} className="input" />
      <input placeholder="Featured Image URL" value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} className="input" />
      
      <BlogEditor value={content} onChange={setContent} />

      <input placeholder="SEO Title" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="input" />
      <input placeholder="SEO Description" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="input" />

      <label>
        <input type="checkbox" checked={isPublished} onChange={() => setIsPublished(!isPublished)} />
        Publish
      </label>

      <button type="submit" className="btn">Save Blog</button>
    </form>
  );
}
