import React from 'react';
import { CheckCircle, Users, Building2, Heart } from 'lucide-react';
const ContentSlide = () => {
  return <div className="w-full h-full p-6" style={{
    aspectRatio: '16/9'
  }}>
      <div className="max-w-6xl mx-auto h-full">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{
        color: '#173e4e'
      }}>Capital Investment</h2>
        
        <div className="grid grid-cols-2 gap-8 items-center h-5/6">
          {/* Left Content - Partners */}
          <div>
            
          </div>
          
          {/* Right Content - Funding */}
          <div className="relative">
            <div className="rounded-2xl p-6 h-64" style={{
            background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)'
          }}>
              <div className="text-center text-white">
                <h4 className="text-xl font-semibold mb-4">Funding Partners</h4>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <div className="text-3xl font-bold mb-2" style={{
                    color: '#ffd700'
                  }}>
                      $2,270,000
                    </div>
                    <p className="text-sm opacity-90">Capital Funding Committed</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white bg-opacity-15 rounded-lg p-2">
                      <p className="font-semibold text-xs">State of Maryland</p>
                      <p className="text-xs opacity-80">Government</p>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-lg p-2">
                      <p className="font-semibold text-xs">Montgomery County</p>
                      <p className="text-xs opacity-80">Local Gov</p>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-lg p-2">
                      <p className="font-semibold text-xs">City of Gaithersburg</p>
                      <p className="text-xs opacity-80">Municipal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60" style={{
            backgroundColor: '#b8832b'
          }}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-60" style={{
            backgroundColor: '#173e4e'
          }}></div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContentSlide;