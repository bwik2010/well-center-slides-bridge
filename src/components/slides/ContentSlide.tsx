import React from 'react';
import { CheckCircle, Users, Building2, Heart } from 'lucide-react';
const ContentSlide = () => {
  return <div className="w-full h-full p-6" style={{
    aspectRatio: '16/9'
  }}>
      <div className="max-w-6xl mx-auto h-full">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{
        color: '#173e4e'
      }}>Three-Level Capital Investment</h2>
        
        <div className="flex justify-center items-center h-5/6">
          {/* Funding Partners - Full Width */}
          <div className="relative w-full max-w-4xl">
            <div className="rounded-2xl p-8 h-80" style={{
            background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)'
          }}>
              <div className="text-center text-white">
                <h4 className="text-2xl font-semibold mb-6">Funding Partners</h4>
                
                <div className="space-y-6">
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <div className="text-4xl font-bold mb-3" style={{
                    color: '#ffd700'
                  }}>
                      $2,270,000
                    </div>
                    <p className="text-base opacity-90">Capital Funding Committed</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white bg-opacity-15 rounded-lg p-3">
                      <p className="font-semibold text-sm">State of Maryland</p>
                      <p className="text-sm opacity-80">Government</p>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-lg p-3">
                      <p className="font-semibold text-sm">Montgomery County</p>
                      <p className="text-sm opacity-80">Local Gov</p>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-lg p-3">
                      <p className="font-semibold text-sm">City of Gaithersburg</p>
                      <p className="text-sm opacity-80">Municipal</p>
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