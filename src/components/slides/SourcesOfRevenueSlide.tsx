import React from 'react';
import { Building, Users, Network, Award, ShoppingBag, Baby, Briefcase } from 'lucide-react';

const SourcesOfRevenueSlide = () => {
  const revenueSources = [
    {
      icon: Building,
      title: "Space Rental",
      description: "Event space and meeting room rentals for community gatherings",
      color: "#173e4e"
    },
    {
      icon: Users,
      title: "Entrepreneur Memberships",
      description: "Monthly memberships for co-working space and business services",
      color: "#b8832b"
    },
    {
      icon: Network,
      title: "Community Network",
      description: "Networking events and community connection services",
      color: "#8aa1a9"
    },
    {
      icon: Award,
      title: "Sponsorships and Consulting",
      description: "Corporate partnerships and event sponsorship opportunities",
      color: "#173e4e"
    },
    {
      icon: ShoppingBag,
      title: "Maker's Market",
      description: "Local vendor market and artisan showcase events",
      color: "#b8832b"
    },
    {
      icon: Baby,
      title: "Childcare Space Rent",
      description: "Licensed childcare facility and early childhood programs",
      color: "#8aa1a9"
    },
    {
      icon: Briefcase,
      title: "Enterprise Expansion Consulting",
      description: "Business consulting and expansion strategy services",
      color: "#173e4e"
    }
  ];

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
                <h3 className="text-lg font-bold mb-2" style={{ color: '#173e4e' }}>{source.title}</h3>
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
