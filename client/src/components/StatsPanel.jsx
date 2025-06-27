import React from "react";
import CountUp from "react-countup";

const StatsPanel = () => {
    return (
        <div className="py-16 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-6 text-center">
          <div>
            <div className="text-3xl">✅</div>
            <h2 className="text-2xl font-bold mt-2">
              <CountUp end={10} duration={3} suffix="+" />
            </h2>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <div className="text-3xl">🌍</div>
            <h2 className="text-2xl font-bold mt-2">
              <CountUp end={50} duration={3} suffix="+" />
            </h2>
            <p className="text-gray-600">Clients Served</p>
          </div>
          <div>
            <div className="text-3xl">🛡️</div>
            <h2 className="text-2xl font-bold mt-2">
            <CountUp end={30} duration={3} suffix="+" />
            </h2>
            <p className="text-gray-600">Cyber Audits</p>
          </div>
          <div>
            <div className="text-3xl">📜</div>
            <h2 className="text-2xl font-bold mt-2">
              <CountUp end={20} duration={3} suffix="+" />
            </h2>
            <p className="text-gray-600">Compliance Projects</p>
          </div>
        </div>
      </div>
    );
};

export default StatsPanel;