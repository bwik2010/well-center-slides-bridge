
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
      color: "#173e4e",
      percentage: 25
    },
    {
      icon: ShoppingBag,
      title: "Maker's Market",
      description: "Local vendor market and artisan showcase events",
      color: "#b8832b",
      percentage: 4
    },
    {
      icon: Baby,
      title: "Childcare Space Rent",
      description: "Licensed childcare facility and early childhood programs",
      color: "#8aa1a9",
      percentage: 27
    },
    {
      icon: Briefcase,
      title: "Enterprise Expansion Consulting",
      description: "Business consulting and expansion strategy services",
      color: "#173e4e"
    }
  ];

  // Chart data for the first 6 revenue sources
  const chartData = revenueSources.slice(0, 6).map((source, index) => ({
    name: source.title,
    value: source.percentage,
    color: index % 3 === 0 ? "#173e4e" : index % 3 === 1 ? "#b8832b" : "#8aa1a9"
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
        {/* Pie Chart Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#173e4e' }}>
            Revenue Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
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
                <Legend 
                  wrapperStyle={{ 
                    fontSize: '12px',
                    paddingTop: '20px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {revenueSources.slice(0, 6).map((source, index) => {
            const IconComponent = source.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{
                  backgroundColor: source.color + '20'
                }}>
                  <IconComponent className="h-6 w-6" style={{ color: source.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#173e4e' }}>
                  {source.title}
                  {source.percentage && (
                    <span className="text-sm font-normal text-gray-600 block">
                      {source.percentage}%
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 text-sm">{source.description}</p>
              </div>
            );
          })}
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
