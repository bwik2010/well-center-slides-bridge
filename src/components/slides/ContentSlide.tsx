
import React from 'react';
import { CheckCircle, Users, Building2, Heart } from 'lucide-react';

const ContentSlide = () => {
  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="max-w-6xl mx-auto h-full">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#173e4e' }}>
          Key Partners & Collaborations
        </h2>
        
        <div className="grid grid-cols-2 gap-8 items-center h-5/6">
          {/* Left Content - Partners */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{
            color: '#173e4e'
          }}>Strategic Partners</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl border" style={{
              backgroundColor: '#173e4e',
              borderColor: '#173e4e'
            }}>
                <Users className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-white">Kidsco</h4>
                  <p className="text-white opacity-90 text-sm">Child development center operations and early childhood programming</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl border" style={{
              backgroundColor: '#8aa1a9',
              borderColor: '#8aa1a9'
            }}>
                <Building2 className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-white">WeavingImpact</h4>
                  <p className="text-white opacity-90 text-sm">Proven social enterprise strategies developed over 25 years as part of the Miller Center for Social Innovation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl border" style={{
              backgroundColor: '#b8832b',
              borderColor: '#b8832b'
            }}>
                <Heart className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-white">Miller Center for Global Impact</h4>
                  <p className="text-white opacity-90 text-sm">Academic partnership providing research and innovation support</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Funding */}
          <div className="relative">
            <div className="rounded-2xl p-6 h-64" style={{
              background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)'
            }}>
              <div className="text-center text-white">
                <h4 className="text-xl font-semibold mb-4">Funding Commitment</h4>
                
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <div className="text-3xl font-bold mb-2" style={{ color: '#ffd700' }}>
                      $2,250,000
                    </div>
                    <p className="text-sm opacity-90">Capital Funding Committed</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white bg-opacity-15 rounded-lg p-3">
                      <p className="font-semibold text-sm">State of Maryland</p>
                      <p className="text-xs opacity-80">Government Partner</p>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-lg p-3">
                      <p className="font-semibold text-sm">Montgomery County</p>
                      <p className="text-xs opacity-80">Local Government</p>
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
    </div>
  );
};

export default ContentSlide;
