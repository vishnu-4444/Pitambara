export default function StatsPanel() {
    const stats = [
      { title: 'Years of Experience', value: '10+' },
      { title: 'Clients Served', value: '120+' },
      { title: 'Cyber Audits', value: '300+' },
      { title: 'Compliance Projects', value: '50+' },
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-2">{stat.title}</div>
          </div>
        ))}
      </div>
    );
  }
  