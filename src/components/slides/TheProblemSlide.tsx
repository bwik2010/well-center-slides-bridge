
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
    <div className="w-full h-full p-4 flex flex-col" style={{ aspectRatio: '16/9' }}>
      {/* Header Section */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 rounded-full" style={{ backgroundColor: '#173e4e20' }}>
            <AlertTriangle className="h-6 w-6" style={{ color: '#173e4e' }} />
          </div>
          <h2 className="text-3xl font-bold" style={{ color: '#173e4e' }}>
            The Problem
          </h2>
        </div>
        <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-12 gap-4">
        {/* Left Column - Key Statistics */}
        <div className="col-span-4 space-y-3">
          {keyStatistics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-3 shadow-lg border-l-4 hover:shadow-xl transition-all duration-300"
                style={{ borderLeftColor: item.color }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.color + '20' }}
                  >
                    <IconComponent className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold" style={{ color: item.color }}>
                      {item.stat}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Right Column - Main Problem Statement */}
        <div className="col-span-8">
          <div 
            className="h-full rounded-xl p-4 text-white shadow-lg flex flex-col justify-center"
            style={{
              background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)'
            }}
          >
            <div className="space-y-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#b8832b' }}>
                  The Crisis
                </h3>
                <p className="text-sm leading-relaxed">
                  Montgomery County faces dramatic wealth gaps despite being among America's top 20 wealthiest counties. The housing crisis and overwhelmed social services create barriers to upward mobility.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#b8832b' }}>
                  The Impact
                </h3>
                <p className="text-sm leading-relaxed">
                  Social disconnection from suburban planning couldn't handle immigration growth over 20 years. COVID-19 worsened existing inequalities.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#b8832b' }}>
                  The Future Risk
                </h3>
                <p className="text-sm leading-relaxed font-semibold">
                  Growing social and economic disconnect makes Montgomery County's future untenable and unsustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Bar */}
      <div className="mt-3 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1.5 rounded-full" style={{ backgroundColor: '#173e4e' }}></div>
          <div className="w-6 h-1.5 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
          <div className="w-6 h-1.5 rounded-full" style={{ backgroundColor: '#8aa1a9' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TheProblemSlide;
