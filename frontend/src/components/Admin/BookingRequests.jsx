export default function BookingRequests() {
    const bookings = [
      { name: 'Rahul', service: 'Legal Advisory', time: '2025-07-15 11:00 AM' },
      { name: 'Sneha', service: 'Cyber Audit', time: '2025-07-16 3:00 PM' },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <ul className="divide-y divide-gray-200">
          {bookings.map((req, i) => (
            <li key={i} className="py-4 flex justify-between">
              <div>
                <p className="font-medium text-gray-800">{req.name}</p>
                <p className="text-sm text-gray-500">
                  {req.service} - {req.time}
                </p>
              </div>
              <button className="text-blue-600 hover:underline">View</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  