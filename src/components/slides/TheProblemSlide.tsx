
import React from 'react';
import { TrendingDown, Home, Users, DollarSign } from 'lucide-react';

const TheProblemSlide = () => {
  const keyStatistics = [{
    icon: TrendingDown,
    stat: "30-40%",
    label: "Child poverty in local census tracts"
  }, {
    icon: DollarSign,
    stat: "$26,598",
    label: "Mean income of lowest 20% of households"
  }, {
    icon: Home,
    stat: "$2,100",
    label: "Median rent for 2-bedroom apartment"
  }];

  return (
    <div className="w-full h-full p-4 flex flex-col" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#173e4e' }}>
          The Problem
        </h2>
        <div className="w-16 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Main Content - Left Side */}
        <div className="flex-1">
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
            <ul className="text-sm text-gray-700 leading-relaxed space-y-3 list-disc pl-5">
              <li>
                Over the past generation, the wealth and opportunity gap has widened in Montgomery County. 
                Suburban planning strategies have encouraged social disconnection and were unprepared for the 
                immigrant influx over the past 20 years. The COVID-19 pandemic has worsened these challenges.
              </li>
              
              <li>
                Despite being among the top 20 wealthiest counties in America, Montgomery County faces an acute 
                housing crisis and exhausted social services. Multiple census tracts show 30-40% child poverty rates. 
                The mean income of the lowest 20% of households is $26,598, while the mean income for the highest 20% 
                of households is $414,085.
              </li>
              
              <li>
                With median rent at $2,100 monthly for a two-bedroom apartment, upward mobility seems impossible 
                for most households. Support infrastructure hasn't kept pace with growing needs over two decades.
              </li>
              
              <li className="font-semibold" style={{ color: '#173e4e' }}>
                This has created a growing chasm of social and economic disparity, trapping struggling Montgomery 
                County residents in cycles of poverty and hopelessness.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Data Boxes - Right Side */}
        <div className="w-64 flex flex-col gap-3">
          {keyStatistics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#173e4e20' }}>
                  <IconComponent className="h-5 w-5" style={{ color: '#173e4e' }} />
                </div>
                <div className="text-lg font-bold mb-1" style={{ color: '#b8832b' }}>{item.stat}</div>
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
