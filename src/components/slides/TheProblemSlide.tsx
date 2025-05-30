import React from 'react';
import { TrendingDown, Home, Users, AlertTriangle } from 'lucide-react';
const TheProblemSlide = () => {
  const keyStatistics = [{
    icon: TrendingDown,
    stat: "30-40%",
    label: "Child poverty in local census tracts"
  }, {
    icon: Users,
    stat: "70%",
    label: "Of Cross Community population earns <$40k annually"
  }, {
    icon: Home,
    stat: "$2,100",
    label: "Median rent for 2-bedroom apartment"
  }, {
    icon: AlertTriangle,
    stat: "$129k",
    label: "County median income vs reality"
  }];
  return <div className="w-full h-full p-6 flex flex-col" style={{
    aspectRatio: '16/9'
  }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{
        color: '#173e4e'
      }}>
          The Problem
        </h2>
        <div className="w-20 h-1 mx-auto" style={{
        backgroundColor: '#b8832b'
      }}></div>
      </div>
      
      <div className="flex-1 flex gap-6">
        {/* Main Content - Left Side */}
        <div className="flex-1 pr-4">
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
            <p className="text-base text-gray-700 leading-relaxed mb-3">Over the past generation, the wealth and opportunity gap has widened in Montgomery County. Suburban planning strategies have encouraged social disconnection and were unprepared for the immigrant influx over the past 20 years. The COVID-19 pandemic has worsened these challenges.</p>
            
            <p className="text-base text-gray-700 leading-relaxed mb-3">Despite being among the top 20 wealthiest counties in America, Montgomery County faces an acute housing crisis and exhausted social services. Multiple census tracts show 30-40% child poverty rates. The mean income of the lowest quintile (20% of households with the lowest income) is $26,598, while the mean income for the highest quintile (20% of households with the highest income) is $414,085.  </p>
            
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              With median rent at $2,100 monthly for a two-bedroom apartment, upward mobility seems impossible for most households. 
              Support infrastructure hasn't kept pace with growing needs over two decades.
            </p>
            
            <p className="text-base text-gray-700 leading-relaxed font-semibold" style={{
            color: '#173e4e'
          }}>
              This has created a growing chasm of social and economic disparity, trapping struggling Montgomery County residents in cycles of poverty and hopelessness.
            </p>
          </div>
        </div>
        
        {/* Data Boxes - Right Side */}
        <div className="w-80 flex flex-col gap-3">
          {keyStatistics.map((item, index) => {
          const IconComponent = item.icon;
          return <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2" style={{
              backgroundColor: '#173e4e20'
            }}>
                  <IconComponent className="h-5 w-5" style={{
                color: '#173e4e'
              }} />
                </div>
                <div className="text-xl font-bold mb-1" style={{
              color: '#b8832b'
            }}>{item.stat}</div>
                <div className="text-sm text-gray-600 leading-tight">{item.label}</div>
              </div>;
        })}
        </div>
      </div>
    </div>;
};
export default TheProblemSlide;