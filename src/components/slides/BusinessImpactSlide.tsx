import React from 'react';

const BusinessImpactSlide = () => {
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
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="max-w-6xl mx-auto h-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#173e4e' }}>
            Business Support Impact
          </h2>
          <div className="h-1 rounded-full w-16 mx-auto mb-4" style={{
            background: 'linear-gradient(90deg, #8aa1a9 0%, #173e4e 100%)'
          }}></div>
          <p className="text-xl text-gray-600 font-medium">
            Empowering Diverse Enterprises & Entrepreneurs
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-8 h-4/5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col justify-center ${
                stat.highlight
                  ? 'text-white shadow-lg'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:shadow-md'
              }`}
              style={stat.highlight ? {
                background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)'
              } : {}}
            >
              <span
                className={`text-4xl font-black mb-3 block ${
                  stat.highlight ? 'text-white' : ''
                }`}
                style={!stat.highlight ? { color: '#8aa1a9' } : {}}
              >
                {stat.number}
              </span>
              <div
                className={`text-base font-medium leading-relaxed ${
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

export default BusinessImpactSlide;