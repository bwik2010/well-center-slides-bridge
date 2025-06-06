
import React from 'react';
import { Users } from 'lucide-react';

const BridgeTeamSlide = () => {
  // Load saved positions from localStorage or use defaults if none exist
  const getSavedPositions = () => {
    const savedTeamMembers = localStorage.getItem('bridgeTeamPositions');
    const savedCenterPosition = localStorage.getItem('bridgeTeamCenterPosition');
    
    const defaultTeamMembers = [
      { name: "Trish Weaver", title: "Attorney", position: { x: 150, y: 80 } },
      { name: "Pamela Roussos", title: "CEO Weaving Impact", position: { x: 300, y: 50 } },
      { name: "KC Whang", title: "Commercial Real Estate", position: { x: 500, y: 70 } },
      { name: "Omar Palos", title: "Business Owner: Sweet Seasons", position: { x: 650, y: 150 } },
      { name: "Jay Gerson", title: "Business Owner: Kidsco", position: { x: 600, y: 300 } },
      { name: "Bruce Baker", title: "Non-Profit Executive", position: { x: 450, y: 350 } },
      { name: "Mayrin Munguia", title: "Chick Fil A Franchise Owner", position: { x: 200, y: 320 } },
      { name: "David Son", title: "Pastor and Business Owner", position: { x: 80, y: 250 } },
      { name: "Jasmine Dero", title: "Teacher, Business Owner", position: { x: 120, y: 150 } },
      { name: "Robin McKinney", title: "Non-Profit Executive", position: { x: 250, y: 80 } },
      { name: "Gloria Kalotra", title: "Higher Education Specialist", position: { x: 400, y: 50 } },
      { name: "Rajesh Prabhu", title: "Entrepreneur", position: { x: 500, y: 280 } }
    ];
    
    const defaultCenterPosition = { x: 400, y: 200 };
    
    return {
      teamMembers: savedTeamMembers ? JSON.parse(savedTeamMembers) : defaultTeamMembers,
      centerPosition: savedCenterPosition ? JSON.parse(savedCenterPosition) : defaultCenterPosition
    };
  };

  const { teamMembers, centerPosition } = getSavedPositions();
  const benWikner = { name: "Ben Wikner", title: "", position: centerPosition };
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

  const StaticNode = ({ name, title, position, isCenter = false }) => (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 select-none z-10"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div 
        className={`px-4 py-2 rounded-full flex flex-col items-center justify-center text-white font-medium text-xs shadow-lg border-2 border-white whitespace-nowrap text-center ${
          isCenter ? 'px-6 py-3 text-base' : ''
        }`}
        style={{
          backgroundColor: isCenter ? '#173e4e' : '#b8832b'
        }}
      >
        <div className="font-semibold">{name}</div>
        {title && <div className="text-[10px] opacity-90">{title}</div>}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col" style={{
      background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)'
    }}>
      {/* Header */}
      <div className="flex items-center justify-between pt-6 pb-3 px-6">
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
        <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
          <div className="relative w-full h-full overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
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
            <StaticNode
              name="Ben Wikner"
              title=""
              position={centerPosition}
              isCenter={true}
            />

            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <StaticNode
                key={member.name}
                name={member.name}
                title={member.title}
                position={member.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeTeamSlide;
