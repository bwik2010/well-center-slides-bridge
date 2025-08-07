import React from 'react';

const BusinessImpact = () => {
  const stats = [
    {
      number: "161",
      label: "Total Business-Owners Actively Supported",
      highlight: true
    },
    {
      number: "148",
      label: "Black-led Enterprises",
      highlight: false
    },
    {
      number: "53",
      label: "New Social Enterprises in 2024",
      highlight: false
    },
    {
      number: "107",
      label: "Women and Non-Gender Conforming Led Enterprises",
      highlight: false
    },
    {
      number: "12",
      label: "Accelerator Participants",
      highlight: false
    },
    {
      number: "24",
      label: "Boost Participants",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-4xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Business Support Impact
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">
            Empowering Diverse Enterprises & Entrepreneurs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg ${
                stat.highlight
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:shadow-md'
              }`}
            >
              <span
                className={`text-5xl font-black mb-4 block ${
                  stat.highlight ? 'text-white' : 'text-blue-500'
                }`}
              >
                {stat.number}
              </span>
              <div
                className={`text-lg font-medium leading-relaxed ${
                  stat.highlight ? 'text-gray-100' : 'text-gray-700'
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessImpact;