
import React from 'react';
import { TrendingUp, Users, Building, DollarSign, Calendar } from 'lucide-react';

const ImpactSlide = () => {
  const metrics = [
    {
      icon: Building,
      value: "12,000",
      label: "Square Feet Community Center",
      color: "#173e4e"
    },
    {
      icon: Users,
      value: "200",
      label: "Households Engaged",
      color: "#8aa1a9"
    },
    {
      icon: TrendingUp,
      value: "200",
      label: "Entrepreneurs Supported",
      color: "#b8832b"
    },
    {
      icon: Calendar,
      value: "300",
      label: "Event Capacity",
      color: "#173e4e"
    }
  ];

  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#173e4e' }}>Community Impact by the Numbers</h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#b8832b' }}></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our state-of-the-art facility will serve as the cornerstone for community resilience and economic empowerment
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: metric.color + '20' }}>
                  <IconComponent className="h-6 w-6" style={{ color: metric.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-1" style={{ color: '#173e4e' }}>{metric.value}</h3>
                <p className="text-gray-600 font-medium text-sm">{metric.label}</p>
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)' }}>
            <h3 className="text-lg font-bold mb-3">Funding Secured</h3>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: '#b8832b' }}>$2.25 Million</div>
              <p className="text-sm opacity-90">Capital funding committed by State of MD and Montgomery County</p>
            </div>
          </div>
          
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#8aa1a920', border: '2px solid #8aa1a9' }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#173e4e' }}>Community Space</h3>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: '#b8832b' }}>Multifunctional</div>
              <p className="text-sm text-gray-700">Social space for events, gatherings, and community building activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSlide;
