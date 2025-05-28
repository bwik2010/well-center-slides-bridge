import React from 'react';
import { Users } from 'lucide-react';
const BridgeTeamSlide = () => {
  const teamMembers = [{
    name: "Trish Weaver",
    position: {
      x: 150,
      y: 80
    }
  }, {
    name: "Pamela Roussos",
    position: {
      x: 300,
      y: 110
    }
  }, {
    name: "KC Whang",
    position: {
      x: 400,
      y: 220
    }
  }, {
    name: "Omar Palos",
    position: {
      x: 360,
      y: 330
    }
  }, {
    name: "Jay Gerson",
    position: {
      x: 240,
      y: 370
    }
  }, {
    name: "Larry Bram",
    position: {
      x: 120,
      y: 330
    }
  }, {
    name: "Mayrin Munguia",
    position: {
      x: 80,
      y: 220
    }
  }, {
    name: "Lucia Zegara",
    position: {
      x: 120,
      y: 110
    }
  }, {
    name: "David Son",
    position: {
      x: 480,
      y: 150
    }
  }, {
    name: "Jasmine Dero",
    position: {
      x: 440,
      y: 300
    }
  }, {
    name: "Robin McKinney",
    position: {
      x: 40,
      y: 300
    }
  }, {
    name: "Gloria Kalotra",
    position: {
      x: 280,
      y: 40
    }
  }];
  const centerPosition = {
    x: 240,
    y: 205
  };
  const benWikner = {
    name: "Ben Wikner",
    position: centerPosition
  };
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
  return <div className="w-full h-full flex flex-col" style={{
    background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)'
  }}>
      {/* Header */}
      <div className="flex items-center justify-center pt-8 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg" style={{
          backgroundColor: '#173e4e'
        }}>
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold" style={{
            color: '#173e4e'
          }}>Well Center Bridge Team</h1>
            <p className="text-lg text-gray-600"></p>
          </div>
        </div>
      </div>

      {/* Team Network Diagram */}
      <div className="flex-1 mx-8 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
          <div className="relative w-full h-full overflow-hidden">
            <svg className="absolute inset-0 w-full h-full">
              {/* Lines connecting all team members to each other */}
              {connections.map((connection, index) => <line key={connection.key} x1={connection.from.x} y1={connection.from.y} x2={connection.to.x} y2={connection.to.y} stroke="#8aa1a9" strokeWidth="1" strokeOpacity="0.3" />)}
            </svg>

            {/* Ben Wikner - Center Node */}
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{
            left: centerPosition.x,
            top: centerPosition.y
          }}>
              <div className="px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-xs shadow-lg border-2 border-white whitespace-nowrap" style={{
              backgroundColor: '#173e4e'
            }}>
                Ben Wikner
              </div>
            </div>

            {/* Team Members */}
            {teamMembers.map((member, index) => <div key={member.name} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{
            left: member.position.x,
            top: member.position.y
          }}>
                <div className="px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-xs shadow-lg border-2 border-white hover:scale-105 transition-transform duration-200 whitespace-nowrap" style={{
              backgroundColor: '#b8832b'
            }}>
                  {member.name}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default BridgeTeamSlide;