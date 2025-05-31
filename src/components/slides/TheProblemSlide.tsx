
import React from 'react';
import { TrendingDown, Home, Users, DollarSign, AlertTriangle } from 'lucide-react';

const TheProblemSlide = () => {
  const keyStatistics = [
    {
      icon: TrendingDown,
      stat: "30-40%",
      label: "Child poverty in local census tracts",
      color: "#173e4e"
    },
    {
      icon: DollarSign,
      stat: "$26.6K / $414K",
      label: "Mean income: lowest 20% / highest 20%",
      color: "#b8832b"
    },
    {
      icon: Home,
      stat: "$2,100",
      label: "Median rent for 2-bedroom apartment",
      color: "#8aa1a9"
    }
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col" style={{ aspectRatio: '16/9' }}>
      {/* Header Section */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: '#173e4e20' }}>
            <AlertTriangle className="h-8 w-8" style={{ color: '#173e4e' }} />
          </div>
          <h2 className="text-4xl font-bold" style={{ color: '#173e4e' }}>
            The Problem
          </h2>
        </div>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Left Column - Key Statistics */}
        <div className="space-y-4">
          {keyStatistics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-4 shadow-lg border-l-4 hover:shadow-xl transition-all duration-300"
                style={{ borderLeftColor: item.color }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.color + '20' }}
                  >
                    <IconComponent className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: item.color }}>
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Center Column - Main Problem Statement */}
        <div className="col-span-2">
          <div 
            className="h-full rounded-2xl p-6 text-white shadow-lg flex flex-col justify-center"
            style={{
              background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)'
            }}
          >
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b8832b' }}>
                  The Crisis
                </h3>
                <p className="text-base leading-relaxed">
                  Montgomery County faces dramatic wealth gaps despite being among America's top 20 wealthiest counties. The housing crisis and overwhelmed social services create barriers to upward mobility.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b8832b' }}>
                  The Impact
                </h3>
                <p className="text-base leading-relaxed">
                  Social disconnection from suburban planning couldn't handle immigration growth over 20 years. COVID-19 worsened existing inequalities.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b8832b' }}>
                  The Future Risk
                </h3>
                <p className="text-base leading-relaxed font-semibold">
                  Growing social and economic disconnect makes Montgomery County's future untenable and unsustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Bar */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#173e4e' }}></div>
          <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
          <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#8aa1a9' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TheProblemSlide;
