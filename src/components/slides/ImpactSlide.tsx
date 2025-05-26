
import React from 'react';
import { TrendingUp, Users, Leaf, DollarSign } from 'lucide-react';

const ImpactSlide = () => {
  const metrics = [
    {
      icon: Users,
      value: "2,500+",
      label: "Community Members Served",
      color: "emerald"
    },
    {
      icon: Leaf,
      value: "15",
      label: "Sustainability Programs",
      color: "teal"
    },
    {
      icon: DollarSign,
      value: "$1.2M",
      label: "Economic Impact Generated",
      color: "blue"
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Program Success Rate",
      color: "indigo"
    }
  ];

  return (
    <div className="h-full p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Measuring our success through community growth, sustainability achievements, and economic empowerment
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className={`bg-${metric.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 text-${metric.color}-600`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</h3>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
            <p className="text-lg opacity-90 leading-relaxed">
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
