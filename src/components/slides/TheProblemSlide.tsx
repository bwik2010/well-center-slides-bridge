
import React from 'react';
import { TrendingDown, Home, Users, DollarSign, AlertTriangle, ArrowDown, ArrowUp } from 'lucide-react';

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
      icon: Users,
      stat: (
        <span className="flex items-center gap-1">
          75% <ArrowDown className="h-4 w-4" style={{ color: "#dc2626" }} /> vs 88% <ArrowUp className="h-4 w-4" style={{ color: "#16a34a" }} />
        </span>
      ),
      label: "Black/Brown children face downward mobility vs white children's upward mobility in neighborhoods",
      color: "#8aa1a9"
    }
  ];

  return (
    <div className="w-full h-full p-3 flex flex-col" style={{ aspectRatio: '16/9' }}>
      {/* Header Section */}
      <div className="text-center mb-3">
        <div className="flex items-center justify-center gap-3 mb-2">
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
      <div className="flex-1 grid grid-cols-12 gap-3">
        {/* Left Column - Key Statistics */}
        <div className="col-span-4 flex flex-col justify-between h-full">
          {keyStatistics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-4 shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 flex-1 flex items-center"
                style={{ borderLeftColor: item.color, minHeight: '120px' }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.color + '20' }}
                  >
                    <IconComponent className="h-7 w-7" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>
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
        
        {/* Right Column - Main Problem Statement */}
        <div className="col-span-8">
          <div 
            className="h-full rounded-xl p-5 text-white shadow-lg flex flex-col justify-center"
            style={{
              background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)'
            }}
          >
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b8832b' }}>
                  The Crisis
                </h3>
                <p className="text-sm leading-relaxed">
                  Montgomery County faces dramatic wealth gaps despite being among America's top 20 wealthiest counties. The housing crisis and overwhelmed social services create barriers to upward mobility.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b8832b' }}>
                  The Impact
                </h3>
                <p className="text-sm leading-relaxed">
                  Social disconnection from suburban planning couldn't handle immigration growth over 20 years. COVID-19 worsened existing inequalities.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#b8832b' }}>
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
      <div className="mt-2 flex justify-center">
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
