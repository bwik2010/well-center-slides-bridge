import React from 'react';
import { CheckCircle, Users, Building2 } from 'lucide-react';
import kidscoLogo from '@/assets/kidsco-inc-logo.png';
import weavingImpactLogo from '@/assets/weaving-impact-logo.png';
const PartnerBonaFidesSlide = () => {
  return <div className="w-full h-full p-6" style={{
    aspectRatio: '16/9'
  }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{
        color: '#173e4e'
      }}>
          Partner Bona Fides
        </h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{
        backgroundColor: '#b8832b'
      }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* KidsCo Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{
          borderLeftColor: '#173e4e'
        }}>
            {/* KidsCo Logo Area */}
            <div className="text-center mb-6">
              <div className="w-56 h-32 mx-auto rounded-lg flex items-center justify-center bg-white shadow-sm">
                <img src="/lovable-uploads/f62fbb05-f31f-4cda-b7ae-b9647abb5edf.png" alt="KidsCo Logo" className="max-w-full max-h-full object-contain" />
              </div>
              
            </div>
            
          </div>
          
          {/* Weaving Impact Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{
            borderLeftColor: '#173e4e'
          }}>
            {/* Weaving Impact Logo Area */}
            <div className="text-center mb-6">
              <div className="w-40 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center bg-white shadow-sm">
                <img src={weavingImpactLogo} alt="Weaving Impact Logo" className="max-w-full max-h-full object-contain" />
              </div>
              
              {/* Business Support Impact Stats */}
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg text-center">
                    <div className="text-2xl font-bold" style={{ color: '#8aa1a9' }}>161</div>
                    <div className="text-gray-700 text-sm leading-tight">Business-Owners Supported</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg text-center">
                    <div className="text-2xl font-bold" style={{ color: '#8aa1a9' }}>148</div>
                    <div className="text-gray-700 text-sm leading-tight">Black-led Enterprises</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg text-center">
                    <div className="text-2xl font-bold" style={{ color: '#8aa1a9' }}>53</div>
                    <div className="text-gray-700 text-sm leading-tight">New Social Enterprises</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg text-center">
                    <div className="text-2xl font-bold" style={{ color: '#8aa1a9' }}>107</div>
                    <div className="text-gray-700 text-sm leading-tight">Women & Non-Gender Led</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg text-center">
                    <div className="text-2xl font-bold" style={{ color: '#8aa1a9' }}>12</div>
                    <div className="text-gray-700 text-sm leading-tight">Accelerator Participants</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg text-center">
                    <div className="text-2xl font-bold" style={{ color: '#8aa1a9' }}>24</div>
                    <div className="text-gray-700 text-sm leading-tight">Boost Participants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full" style={{
          backgroundColor: '#8aa1a920'
        }}>
            <CheckCircle className="h-5 w-5 mr-2" style={{
            color: '#173e4e'
          }} />
            <span className="font-semibold" style={{
            color: '#173e4e'
          }}>
              Established partnerships with proven track records
            </span>
          </div>
        </div>
      </div>
    </div>;
};
export default PartnerBonaFidesSlide;