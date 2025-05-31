
import React from 'react';
import { Users } from 'lucide-react';

const BridgeTeamSlide = () => {
  const teamMembers = [
    { name: "Trish Weaver", position: { x: 150, y: 120 } },
    { name: "Pamela Roussos", position: { x: 400, y: 80 } },
    { name: "KC Whang", position: { x: 750, y: 120 } },
    { name: "Omar Palos", position: { x: 850, y: 300 } },
    { name: "Jay Gerson", position: { x: 750, y: 450 } },
    { name: "Bruce Baker", position: { x: 500, y: 480 } },
    { name: "Mayrin Munguia", position: { x: 150, y: 400 } },
    { name: "Lucia Zegara", position: { x: 300, y: 200 } },
    { name: "David Son", position: { x: 700, y: 200 } },
    { name: "Jasmine Dero", position: { x: 600, y: 350 } },
    { name: "Robin McKinney", position: { x: 250, y: 450 } },
    { name: "Gloria Kalotra", position: { x: 550, y: 120 } }
  ];

  const centerPosition = { x: 500, y: 280 };
  const benWikner = { name: "Ben Wikner", position: centerPosition };
  const allMembers = [benWikner, ...teamMembers];

  // Generate all possible connections between team members
  const connections = [];
  for (let i = 0; i < allMembers.length; i++) {
    for (let j = i + 1; j < allMembers.length; j++) {
      connections.push({
        from: allMembers[i].position,
        to: allMembers[j].position,
        key: `${i}-${j}`
      });
    }
  }

  return (
    <div className="w-full h-full flex flex-col" style={{
      background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)'
    }}>
      {/* Header */}
      <div className="flex items-center justify-center pt-6 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg" style={{
            backgroundColor: '#173e4e'
          }}>
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold" style={{
              color: '#173e4e'
            }}>Well Center Bridge Team</h1>
          </div>
        </div>
      </div>

      {/* Team Network Diagram */}
      <div className="flex-1 mx-6 mb-6">
        <div className="bg-white rounded-2xl shadow-xl p-4 h-full">
          <div className="relative w-full h-full overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 560">
              {/* Lines connecting all team members to each other */}
              {connections.map((connection, index) => (
                <line
                  key={connection.key}
                  x1={connection.from.x}
                  y1={connection.from.y}
                  x2={connection.to.x}
                  y2={connection.to.y}
                  stroke="#8aa1a9"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
              ))}
            </svg>

            {/* Ben Wikner - Center Node */}
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(centerPosition.x / 1000) * 100}%`,
                top: `${(centerPosition.y / 560) * 100}%`
              }}
            >
              <div 
                className="px-6 py-3 rounded-full flex items-center justify-center text-white font-medium text-base shadow-lg border-2 border-white whitespace-nowrap"
                style={{
                  backgroundColor: '#173e4e'
                }}
              >
                Ben Wikner
              </div>
            </div>

            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(member.position.x / 1000) * 100}%`,
                  top: `${(member.position.y / 560) * 100}%`
                }}
              >
                <div 
                  className="px-5 py-2.5 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-lg border-2 border-white hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                  style={{
                    backgroundColor: '#b8832b'
                  }}
                >
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeTeamSlide;
