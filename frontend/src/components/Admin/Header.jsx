export default function Header() {
    return (
      <header className="flex justify-between items-center bg-white p-4 rounded-md shadow">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome, Admin</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Logout
        </button>
      </header>
    );
  }
  