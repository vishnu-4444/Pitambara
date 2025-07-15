// src/app/admin/layout.js
import Sidebar from '@/components/Admin/Sidebar';
import Header from '@/components/Admin/Header';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Header />
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}
