
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DraggableNode from '@/components/DraggableNode';
import { toast } from 'sonner';

const BridgeTeam = () => {
  const defaultTeamMembers = [
    { name: "Trish Weaver", title: "Attorney", position: { x: 100, y: 200 } },
    { name: "Pamela Roussos", title: "CEO Weaving Impact", position: { x: 200, y: 80 } },
    { name: "KC Whang", title: "Commercial Real Estate", position: { x: 600, y: 80 } },
    { name: "Omar Palos", title: "Business Owner: Sweet Seasons", position: { x: 750, y: 200 } },
    { name: "Jay Gerson", title: "Business Owner: Kidsco", position: { x: 650, y: 350 } },
    { name: "Bruce Baker", title: "Non-Profit Executive", position: { x: 450, y: 400 } },
    { name: "Mayrin Munguia", title: "Chick Fil A Franchise Owner", position: { x: 200, y: 400 } },
    { name: "David Son", title: "Pastor and Business Owner", position: { x: 50, y: 350 } },
    { name: "Jasmine Dero", title: "Teacher, Business Owner", position: { x: 100, y: 280 } },
    { name: "Robin McKinney", title: "Non-Profit Executive", position: { x: 300, y: 120 } },
    { name: "Gloria Kalotra", title: "Higher Education Specialist", position: { x: 450, y: 80 } },
    { name: "Rajesh Prabhu", title: "Entrepreneur", position: { x: 500, y: 350 } }
  ];

  const defaultCenterPosition = { x: 400, y: 220 };

  // Load saved positions from localStorage or use defaults
  const [teamMembers, setTeamMembers] = useState(() => {
    const saved = localStorage.getItem('bridgeTeamPositionsPage');
    return saved ? JSON.parse(saved) : defaultTeamMembers;
  });

  const [centerPosition, setCenterPosition] = useState(() => {
    const saved = localStorage.getItem('bridgeTeamCenterPositionPage');
    return saved ? JSON.parse(saved) : defaultCenterPosition;
  });

  const benWikner = { name: "Ben Wikner", title: "", position: centerPosition };
  const allMembers = [benWikner, ...teamMembers];

  const updateMemberPosition = (index: number, newPosition: { x: number; y: number }) => {
    setTeamMembers(prev => prev.map((member, i) => 
      i === index ? { ...member, position: newPosition } : member
    ));
  };

  const updateCenterPosition = (newPosition: { x: number; y: number }) => {
    setCenterPosition(newPosition);
  };

  const savePositions = () => {
    localStorage.setItem('bridgeTeamPositionsPage', JSON.stringify(teamMembers));
    localStorage.setItem('bridgeTeamCenterPositionPage', JSON.stringify(centerPosition));
    toast.success('Node positions saved!');
  };

  const resetPositions = () => {
    setTeamMembers(defaultTeamMembers);
    setCenterPosition(defaultCenterPosition);
    localStorage.removeItem('bridgeTeamPositionsPage');
    localStorage.removeItem('bridgeTeamCenterPositionPage');
    toast.info('Positions reset to default');
  };

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

  const containerBounds = { width: 800, height: 450 };

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
              <p className="text-sm text-gray-600">Team Network Visualization - Drag nodes to reposition</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              onClick={savePositions}
              className="flex items-center gap-2"
              style={{ backgroundColor: '#173e4e' }}
            >
              <Save className="h-4 w-4" />
              Save Layout
            </Button>
            <Button
              onClick={resetPositions}
              variant="outline"
              style={{ borderColor: '#8aa1a9', color: '#173e4e' }}
            >
              Reset
            </Button>
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
        </div>

        {/* Team Network Diagram */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="relative w-full h-[450px] overflow-hidden">
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
            <DraggableNode
              name="Ben Wikner"
              title=""
              position={centerPosition}
              onPositionChange={updateCenterPosition}
              isCenter={true}
              containerBounds={containerBounds}
            />

            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <DraggableNode
                key={member.name}
                name={member.name}
                title={member.title}
                position={member.position}
                onPositionChange={(newPosition) => updateMemberPosition(index, newPosition)}
                containerBounds={containerBounds}
              />
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
