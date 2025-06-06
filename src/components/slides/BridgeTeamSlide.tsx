
import React, { useState, useEffect } from 'react';
import { Users, Save } from 'lucide-react';
import DraggableNode from '../DraggableNode';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const BridgeTeamSlide = () => {
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

  // Load saved positions from localStorage or use defaults
  const [teamMembers, setTeamMembers] = useState(() => {
    const saved = localStorage.getItem('bridgeTeamPositions');
    return saved ? JSON.parse(saved) : defaultTeamMembers;
  });

  const [centerPosition, setCenterPosition] = useState(() => {
    const saved = localStorage.getItem('bridgeTeamCenterPosition');
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
    localStorage.setItem('bridgeTeamPositions', JSON.stringify(teamMembers));
    localStorage.setItem('bridgeTeamCenterPosition', JSON.stringify(centerPosition));
    toast.success('Node positions saved!');
  };

  const resetPositions = () => {
    setTeamMembers(defaultTeamMembers);
    setCenterPosition(defaultCenterPosition);
    localStorage.removeItem('bridgeTeamPositions');
    localStorage.removeItem('bridgeTeamCenterPosition');
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

  const containerBounds = { width: 800, height: 400 };

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
        
        <div className="flex gap-2">
          <Button
            onClick={savePositions}
            size="sm"
            className="flex items-center gap-2"
            style={{ backgroundColor: '#173e4e' }}
          >
            <Save className="h-4 w-4" />
            Save Layout
          </Button>
          <Button
            onClick={resetPositions}
            variant="outline"
            size="sm"
            style={{ borderColor: '#8aa1a9', color: '#173e4e' }}
          >
            Reset
          </Button>
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
      </div>
    </div>
  );
};

export default BridgeTeamSlide;
