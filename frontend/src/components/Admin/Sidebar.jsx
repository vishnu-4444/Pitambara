// src/components/Admin/Sidebar.jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Services', href: '/admin/services' },
  { label: 'Blogs', href: '/admin/blogs' },
  { label: 'Submissions', href: '/admin/submissions' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Bookings', href: '/admin/bookings' },
  { label: 'Media', href: '/admin/media' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`block px-3 py-2 rounded ${
                pathname === href
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
