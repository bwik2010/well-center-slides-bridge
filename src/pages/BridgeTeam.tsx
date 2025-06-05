
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BridgeTeam = () => {
  const teamMembers = [
    { name: "Trish Weaver", title: "Attorney", position: { x: 100, y: 120 } },
    { name: "Pamela Roussos", title: "CEO Weaving Impact", position: { x: 380, y: 60 } },
    { name: "KC Whang", title: "Commercial Real Estate", position: { x: 580, y: 120 } },
    { name: "Omar Palos", title: "Business Owner: Sweet Seasons", position: { x: 520, y: 480 } },
    { name: "Jay Gerson", title: "Business Owner: Kidsco", position: { x: 200, y: 520 } },
    { name: "Bruce Baker", title: "Non-Profit Executive", position: { x: 380, y: 540 } },
    { name: "Mayrin Munguia", title: "Chick Fil A Franchise Owner", position: { x: 80, y: 480 } },
    { name: "David Son", title: "Pastor and Business Owner", position: { x: 40, y: 320 } },
    { name: "Jasmine Dero", title: "Teacher, Business Owner", position: { x: 60, y: 180 } },
    { name: "Robin McKinney", title: "Non-Profit Executive", position: { x: 220, y: 100 } },
    { name: "Gloria Kalotra", title: "Higher Education Specialist", position: { x: 500, y: 60 } },
    { name: "Rajesh Prabhu", title: "Entrepreneur", position: { x: 520, y: 350 } }
  ];

  const centerPosition = { x: 300, y: 275 };
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

  return (
    <div className="min-h-screen p-6" style={{ background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#173e4e' }}>
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#173e4e' }}>Well Center Bridge Team</h1>
              <p className="text-sm text-gray-600">Team Network Visualization</p>
            </div>
          </div>
          
          <Link to="/">
            <Button 
              variant="outline"
              className="flex items-center gap-2 hover:opacity-80"
              style={{ borderColor: '#8aa1a9', color: '#173e4e' }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Presentation
            </Button>
          </Link>
        </div>

        {/* Team Network Diagram */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="relative w-full h-[600px] overflow-hidden">
            <svg className="absolute inset-0 w-full h-full">
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
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.02}s` }}
                />
              ))}
            </svg>

            {/* Ben Wikner - Center Node */}
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-scale-in"
              style={{ 
                left: centerPosition.x, 
                top: centerPosition.y,
                animationDelay: '0.5s'
              }}
            >
              <div 
                className="px-6 py-3 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-lg border-2 border-white whitespace-nowrap"
                style={{ backgroundColor: '#173e4e' }}
              >
                Ben Wikner
              </div>
            </div>

            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                style={{ 
                  left: member.position.x, 
                  top: member.position.y,
                  animationDelay: `${(index + 1) * 0.1}s`
                }}
              >
                <div 
                  className="px-4 py-2 rounded-full flex flex-col items-center justify-center text-white font-medium text-xs shadow-lg border-2 border-white hover:scale-105 transition-transform duration-200 whitespace-nowrap text-center"
                  style={{ backgroundColor: '#b8832b' }}
                >
                  <div className="font-semibold">{member.name}</div>
                  {member.title && <div className="text-[10px] opacity-90">{member.title}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold mb-1" style={{ color: '#173e4e' }}>13</div>
            <div className="text-sm text-gray-600">Total Team Members</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold mb-1" style={{ color: '#b8832b' }}>1</div>
            <div className="text-sm text-gray-600">Team Lead</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold mb-1" style={{ color: '#8aa1a9' }}>78</div>
            <div className="text-sm text-gray-600">Total Connections</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeTeam;
