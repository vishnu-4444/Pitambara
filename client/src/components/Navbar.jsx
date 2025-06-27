import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
