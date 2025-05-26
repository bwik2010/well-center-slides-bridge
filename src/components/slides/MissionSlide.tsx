
import React from 'react';
import { Target, Users, Leaf, Building } from 'lucide-react';

const MissionSlide = () => {
  return (
    <div className="h-full p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#173e4e' }}>Our Mission</h2>
        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl p-8 mb-10 border" style={{ background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)', borderColor: '#8aa1a9' }}>
          <div className="flex items-center justify-center mb-6">
            <Target className="h-12 w-12" style={{ color: '#b8832b' }} />
          </div>
          <p className="text-2xl leading-relaxed text-center font-medium text-white">
            To bridge social and economic gaps that build sustainable living and community resilience in Montgomery County
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" style={{ borderTop: `4px solid #173e4e` }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#8aa1a9' }}>
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#173e4e' }}>Social Connection</h3>
            <p className="text-gray-600">Building stronger community bonds and social networks</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" style={{ borderTop: `4px solid #b8832b` }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#b8832b' }}>
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#173e4e' }}>Sustainable Living</h3>
            <p className="text-gray-600">Promoting environmentally conscious and sustainable practices</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" style={{ borderTop: `4px solid #8aa1a9` }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#173e4e' }}>
              <Building className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#173e4e' }}>Economic Resilience</h3>
            <p className="text-gray-600">Creating economic opportunities and financial stability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSlide;
