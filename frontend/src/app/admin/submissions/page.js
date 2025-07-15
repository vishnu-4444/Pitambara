'use client';

import { useEffect, useState } from 'react';

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/contact');
        const data = await res.json();
        setSubmissions(data);
      } catch (err) {
        console.error('Failed to fetch submissions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleExportCSV = () => {
    if (submissions.length === 0) return;

    const headers = ['Name', 'Email', 'Phone', 'Message', 'Date'];
    const rows = submissions.map((s) => [
      s.name,
      s.email,
      s.phone,
      `"${s.message.replace(/"/g, '""')}"`,
      new Date(s.createdAt).toLocaleString(),
    ]);

    const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'contact_submissions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {loading ? (
        <p className="text-gray-500">Loading submissions...</p>
      ) : submissions.length === 0 ? (
        <p className="text-gray-500">No submissions found.</p>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <div className="flex justify-between items-center mb-4 p-4">
            <h2 className="text-xl font-semibold text-gray-800">Contact Form Submissions</h2>
            <button
              onClick={handleExportCSV}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
            >
              Export CSV
            </button>
          </div>

          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600 uppercase text-xs bg-gray-50">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Message</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((entry) => (
                <tr key={entry._id} className="border-t">
                  <td className="p-3">{entry.name}</td>
                  <td className="p-3">{entry.email}</td>
                  <td className="p-3">{entry.phone}</td>
                  <td className="p-3 max-w-xs truncate">{entry.message}</td>
                  <td className="p-3 text-sm text-gray-500">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-right">
                    <a
                      href={`/admin/submissions/${entry._id}`}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
