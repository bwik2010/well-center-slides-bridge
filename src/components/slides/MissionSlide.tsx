
import React from 'react';
import { Target, Users, Leaf, Building } from 'lucide-react';

const MissionSlide = () => {
  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#173e4e' }}>Our Mission</h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        <div className="rounded-2xl p-6 mb-4 border flex-shrink-0" style={{
          background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)',
          borderColor: '#8aa1a9'
        }}>
          <div className="flex items-center justify-center mb-4">
            <Target className="h-10 w-10" style={{ color: '#b8832b' }} />
          </div>
          <p className="text-lg leading-relaxed text-center font-medium text-white mb-3">
            To bridge social and economic gaps that build sustainable living and community resilience in Montgomery County through:
          </p>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
            <p className="text-white font-semibold text-base">
              A multifunctional, 12,000 square foot, state-of-the-art community center
            </p>
            <p className="text-white opacity-90 text-sm mt-1">
              Engaging 200 households • 200 entrepreneurs • Up to 300 people for events
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 flex-1">
          <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" style={{
            borderTop: `3px solid #173e4e`
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{
              backgroundColor: '#8aa1a9'
            }}>
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#173e4e' }}>Early Childhood Dev.</h3>
            <p className="text-sm text-gray-600">Giving children and families the opportunity for success from the start</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" style={{
            borderTop: `3px solid #b8832b`
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{
              backgroundColor: '#b8832b'
            }}>
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#173e4e' }}>Entrepreneurship</h3>
            <p className="text-sm text-gray-600">Creating a local entrepreneurial eco-system and mentor network</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" style={{
            borderTop: `3px solid #8aa1a9`
          }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{
              backgroundColor: '#173e4e'
            }}>
              <Building className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#173e4e' }}>Social Bridging</h3>
            <p className="text-sm text-gray-600">Building stronger community connection and social interaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSlide;
