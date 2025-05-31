
import React from 'react';
import { Building, Users, Network, Award, ShoppingBag, Baby, Briefcase } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SourcesOfRevenueSlide = () => {
  const revenueSources = [
    {
      icon: Building,
      title: "Space Rental",
      description: "Event space and meeting room rentals for community gatherings",
      color: "#173e4e",
      percentage: 20
    },
    {
      icon: Users,
      title: "Entrepreneur Memberships",
      description: "Monthly memberships for co-working space and business services",
      color: "#b8832b",
      percentage: 9
    },
    {
      icon: Network,
      title: "Community Network",
      description: "Networking events and community connection services",
      color: "#8aa1a9",
      percentage: 15
    },
    {
      icon: Award,
      title: "Sponsorships and Consulting",
      description: "Corporate partnerships and expansion consulting",
      color: "#e74c3c",
      percentage: 25
    },
    {
      icon: ShoppingBag,
      title: "Maker's Market",
      description: "Local vendor market and artisan showcase events",
      color: "#9b59b6",
      percentage: 4
    },
    {
      icon: Baby,
      title: "Childcare Space Rent",
      description: "Licensed childcare facility and early childhood programs",
      color: "#27ae60",
      percentage: 27
    },
    {
      icon: Briefcase,
      title: "Enterprise Expansion Consulting",
      description: "Business consulting and expansion strategy services",
      color: "#173e4e"
    }
  ];

  // Chart data for the first 6 revenue sources with their unique colors
  const chartData = revenueSources.slice(0, 6).map((source) => ({
    name: source.title,
    value: source.percentage,
    color: source.color
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold" style={{ color: payload[0].payload.color }}>
            {payload[0].name}
          </p>
          <p className="text-gray-600">
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#173e4e' }}>Sources of Revenue</h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#b8832b' }}></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Diversified revenue streams to ensure sustainable operations and community impact
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Pie Chart and Revenue List Side by Side */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: '#173e4e' }}>
            Revenue Distribution
          </h3>
          
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Pie Chart */}
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                    labelLine={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue Sources List */}
            <div className="space-y-4">
              {revenueSources.slice(0, 6).map((source, index) => {
                const IconComponent = source.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    {/* Color indicator */}
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: source.color }}
                    ></div>
                    
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{
                      backgroundColor: source.color + '20'
                    }}>
                      <IconComponent className="h-5 w-5" style={{ color: source.color }} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg" style={{ color: '#173e4e' }}>
                          {source.title}
                        </h4>
                        <span className="font-bold text-lg" style={{ color: source.color }}>
                          {source.percentage}%
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{source.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom row - Enterprise Expansion Consulting centered */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center" style={{ width: '300px' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{
              backgroundColor: revenueSources[6].color + '20'
            }}>
              <Briefcase className="h-6 w-6" style={{ color: revenueSources[6].color }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#173e4e' }}>{revenueSources[6].title}</h3>
            <p className="text-gray-600 text-sm">{revenueSources[6].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcesOfRevenueSlide;
