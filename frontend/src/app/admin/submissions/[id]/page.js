'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function SubmissionDetailPage() {
  const { id } = useParams();
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchSubmission = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/contact/${id}`);
        const data = await res.json();
        setSubmission(data);
      } catch (err) {
        console.error('Error fetching submission:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmission();
  }, [id]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!submission) return <p className="text-red-500">Submission not found.</p>;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <Link
          href="/admin/submissions"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
        >
          ← Back to Submissions
        </Link>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submission Details</h2>
      <div className="space-y-3 text-sm">
        <p><strong>Name:</strong> {submission.name}</p>
        <p><strong>Email:</strong> {submission.email}</p>
        <p><strong>Phone:</strong> {submission.phone}</p>
        <p><strong>Message:</strong></p>
        <div className="whitespace-pre-wrap bg-gray-100 border rounded p-4 text-gray-800">
          {submission.message}
        </div>
        <p className="text-gray-500 mt-4 text-xs">
          Submitted on: {new Date(submission.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
