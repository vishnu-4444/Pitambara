export default function UserManager() {
    const users = [
      { name: 'Admin One', role: 'Super Admin' },
      { name: 'Editor Jane', role: 'Editor' },
      { name: 'Viewer Sam', role: 'Viewer' },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <ul className="divide-y divide-gray-200">
          {users.map((user, idx) => (
            <li key={idx} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <span className="text-sm text-gray-500">{user.role}</span>
              </div>
              <div className="space-x-4">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  