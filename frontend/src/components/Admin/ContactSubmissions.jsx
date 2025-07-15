export default function ContactSubmissions() {
    const submissions = [
      { name: 'Amit', email: 'amit@example.com', subject: 'Inquiry', message: 'Need a security audit.' },
      { name: 'Priya', email: 'priya@example.com', subject: 'Partnership', message: 'Interested in collaboration.' },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 uppercase text-xs">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((entry, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{entry.name}</td>
                <td className="p-3">{entry.email}</td>
                <td className="p-3">{entry.subject}</td>
                <td className="p-3">{entry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  