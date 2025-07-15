export default function MediaUploader() {
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <p className="mb-2 text-gray-700">Upload media files (images, PDFs):</p>
        <input type="file" multiple className="mb-4" />
        <div className="text-sm text-gray-500">No files uploaded yet.</div>
      </div>
    );
  }
  