'use client';
import { useState, useEffect } from 'react';
import BlogEditor from '@/components/BlogEditor';
import { toast, Toaster } from 'react-hot-toast';

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
    image: '',
    tag: '',
    category: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    status: 'published',
    featured: false
  });
  const [formKey, setFormKey] = useState(0); // to reset inputs + editor
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/blog')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to fetch blogs:', err));
  }, []);

  const handleInputChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.content.trim()) newErrors.content = 'Content is required';
    if (!form.tag.trim()) newErrors.tag = 'Tag is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const payload = {
        ...form,
        title: form.title.trim(),
        content: form.content.trim(),
        tag: form.tag.trim()
      };

      let res;
      const toastId = toast.loading(editingId ? 'Updating post...' : 'Publishing...');
      if (editingId) {
        res = await fetch(`http://localhost:5000/api/blog/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch('http://localhost:5000/api/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || 'Failed to submit post.', { id: toastId });
        return;
      }

      if (editingId) {
        setBlogs((prev) =>
          Array.isArray(prev)
            ? prev.map((b) => (b._id === editingId ? data : b))
            : [data]
        );
        setEditingId(null);
      } else {
        setBlogs((prev) =>
          Array.isArray(prev)
            ? [data, ...prev]
            : [data]
        );
      }

      // Reset
      setForm({
        title: '',
        content: '',
        image: '',
        tag: '',
        category: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        status: 'published',
        featured: false
      });
      setFormKey((prev) => prev + 1);
      setErrors({});
      toast.success(editingId ? 'Post updated successfully!' : 'Post published!', { id: toastId });
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      console.error('Submit failed:', err);
      toast.error('Network error. Try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {editingId ? 'Edit Blog Post' : 'Add New Blog Post'}
      </h2>

      <div className="space-y-6" key={formKey}>
        <input type="text" placeholder="Title" value={form.title} onChange={(e) => handleInputChange('title', e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Tag" value={form.tag} onChange={(e) => handleInputChange('tag', e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Category" value={form.category} onChange={(e) => handleInputChange('category', e.target.value)} className="w-full border px-3 py-2 rounded" />

        <BlogEditor
          key={formKey}
          value={form.content}
          onChange={(html) => handleInputChange('content', html)}
        />

        <input type="text" placeholder="Meta Title" value={form.metaTitle} onChange={(e) => handleInputChange('metaTitle', e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Meta Description" value={form.metaDescription} onChange={(e) => handleInputChange('metaDescription', e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Meta Keywords" value={form.metaKeywords} onChange={(e) => handleInputChange('metaKeywords', e.target.value)} className="w-full border px-3 py-2 rounded" />

        <div className="flex items-center space-x-4">
          <label>Status:</label>
          <select value={form.status} onChange={(e) => handleInputChange('status', e.target.value)} className="border rounded px-3 py-1">
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

          <label>
            <input type="checkbox" checked={form.featured} onChange={(e) => handleInputChange('featured', e.target.checked)} /> Featured
          </label>
        </div>

        <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          {editingId ? 'Update Post' : 'Publish Post'}
        </button>
      </div>
      <hr className="my-10" />

<h3 className="text-xl font-semibold mb-4 text-gray-700">Your Blog Posts</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {blogs.map((blog) => (
    <div
      key={blog._id}
      className="bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
    >
      {/* Optional image preview */}
      {blog.image && (
        <img src={blog.image} alt="blog" className="h-40 w-full object-cover rounded mb-3" />
      )}

      <h4 className="text-lg font-bold text-gray-800 mb-1">{blog.title}</h4>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Tag:</span> {blog.tag || 'N/A'}<br />
        <span className="font-medium">Category:</span> {blog.category || 'N/A'}<br />
        <span className="font-medium">Date:</span>{' '}
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      <div className="flex space-x-4 mt-2">
        <button
          onClick={() => {
            setForm({ ...blog });
            setEditingId(blog._id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={async () => {
            if (confirm('Are you sure you want to delete this post?')) {
              try {
                await fetch(`http://localhost:5000/api/blog/${blog._id}`, {
                  method: 'DELETE',
                });
                setBlogs(blogs.filter((b) => b._id !== blog._id));
              } catch (err) {
                alert('Failed to delete post.');
                console.error(err);
              }
            }
          }}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
