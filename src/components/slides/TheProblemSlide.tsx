
import React from 'react';
import { TrendingDown, Home, Users, DollarSign } from 'lucide-react';

const TheProblemSlide = () => {
  const keyStatistics = [{
    icon: TrendingDown,
    stat: "30-40%",
    label: "Child poverty in local census tracts"
  }, {
    icon: DollarSign,
    stat: "$26.6K / $414K",
    label: "Mean income: lowest 20% / highest 20%"
  }, {
    icon: Home,
    stat: "$2,100",
    label: "Median rent for 2-bedroom apartment"
  }];

  return (
    <div className="w-full h-full p-3 flex flex-col" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold mb-1" style={{ color: '#173e4e' }}>
          The Problem
        </h2>
        <div className="w-16 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="flex-1 flex gap-3 min-h-0">
        {/* Main Content - Left Side */}
        <div className="flex-1">
          <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
            <ul className="text-base text-gray-700 leading-relaxed space-y-3 list-disc pl-4">
              <li>
                The wealth gap has widened dramatically in Montgomery County. Suburban planning created social 
                disconnection and couldn't handle the immigrant influx of the past 20 years. COVID-19 made it worse.
              </li>
              
              <li>
                Despite being among America's top 20 wealthiest counties, Montgomery County faces an acute 
                housing crisis and overwhelmed social services. Multiple areas show 30-40% child poverty rates.
              </li>
              
              <li>
                With $2,100 median rent for two bedrooms, upward mobility is nearly impossible. Support 
                infrastructure hasn't kept pace with growing needs.
              </li>
              
              <li className="font-semibold" style={{ color: '#173e4e' }}>
                The social and economic disconnect and disparity is widening, making the future of Montgomery County untenable and unsustainable.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Data Boxes - Right Side */}
        <div className="w-64 flex flex-col gap-2">
          {keyStatistics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1" style={{ backgroundColor: '#173e4e20' }}>
                  <IconComponent className="h-5 w-5" style={{ color: '#173e4e' }} />
                </div>
                <div className="text-xl font-bold mb-1" style={{ color: '#b8832b' }}>{item.stat}</div>
                <div className="text-sm text-gray-600 leading-tight">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheProblemSlide;
