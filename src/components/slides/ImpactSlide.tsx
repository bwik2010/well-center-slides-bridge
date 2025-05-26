
import React from 'react';
import { TrendingUp, Users, Leaf, DollarSign } from 'lucide-react';

const ImpactSlide = () => {
  const metrics = [
    {
      icon: Users,
      value: "2,500+",
      label: "Community Members Served",
      color: "#173e4e"
    },
    {
      icon: Leaf,
      value: "15",
      label: "Sustainability Programs",
      color: "#8aa1a9"
    },
    {
      icon: DollarSign,
      value: "$1.2M",
      label: "Economic Impact Generated",
      color: "#b8832b"
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Program Success Rate",
      color: "#173e4e"
    }
  ];

  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#173e4e' }}>Our Impact</h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#b8832b' }}></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Measuring our success through community growth, sustainability achievements, and economic empowerment
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
        
        <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-3">Looking Forward</h3>
            <p className="text-base opacity-90 leading-relaxed">
              Our commitment to Montgomery County continues to grow stronger each year. Together, we're building 
              a more resilient, sustainable, and equitable community for all residents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSlide;
