export default function ServicesTable() {
    const services = [
      { id: 1, name: 'Penetration Testing', tag: 'Cybersecurity' },
      { id: 2, name: 'GDPR Compliance', tag: 'Legal' },
      { id: 3, name: 'Incident Response', tag: 'Forensics' },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm uppercase">
              <th className="p-3">#</th>
              <th className="p-3">Service Name</th>
              <th className="p-3">Category</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-t text-sm">
                <td className="p-3">{service.id}</td>
                <td className="p-3 font-medium text-gray-900">{service.name}</td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    {service.tag}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button className="text-blue-600 hover:underline mr-4">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  