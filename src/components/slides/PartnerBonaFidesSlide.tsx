import React from 'react';
import { CheckCircle, Users, Building2 } from 'lucide-react';

const PartnerBonaFidesSlide = () => {
  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#173e4e' }}>
          Partner Bona Fides
        </h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* KidsCo Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: '#173e4e' }}>
            {/* KidsCo Logo Area */}
            <div className="text-center mb-6">
              <div className="w-32 h-20 mx-auto mb-4 rounded-lg border-2 border-dashed flex items-center justify-center" style={{ borderColor: '#8aa1a9', backgroundColor: '#8aa1a920' }}>
                <div className="text-center">
                  <Building2 className="h-8 w-8 mx-auto mb-1" style={{ color: '#173e4e' }} />
                  <span className="text-xs font-medium" style={{ color: '#173e4e' }}>KidsCo Logo</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#173e4e' }}>KidsCo</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#b8832b' }} />
                <p className="text-gray-700 text-sm">
                  [KidsCo credentials and achievements]
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#b8832b' }} />
                <p className="text-gray-700 text-sm">
                  [Key partnership benefits and experience]
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#b8832b' }} />
                <p className="text-gray-700 text-sm">
                  [Track record and impact metrics]
                </p>
              </div>
            </div>
          </div>
          
          {/* Weaving Impact Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: '#b8832b' }}>
            {/* Weaving Impact Logo Area */}
            <div className="text-center mb-6">
              <div className="w-32 h-20 mx-auto mb-4 rounded-lg border-2 border-dashed flex items-center justify-center" style={{ borderColor: '#b8832b', backgroundColor: '#b8832b20' }}>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-1" style={{ color: '#173e4e' }} />
                  <span className="text-xs font-medium" style={{ color: '#173e4e' }}>Weaving Impact Logo</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#173e4e' }}>Weaving Impact</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#173e4e' }} />
                <p className="text-gray-700 text-sm">
                  [Weaving Impact credentials and expertise]
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#173e4e' }} />
                <p className="text-gray-700 text-sm">
                  [Strategic value and collaboration benefits]
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mt-1 mr-3 flex-shrink-0" style={{ color: '#173e4e' }} />
                <p className="text-gray-700 text-sm">
                  [Proven results and industry recognition]
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full" style={{ backgroundColor: '#8aa1a920' }}>
            <CheckCircle className="h-5 w-5 mr-2" style={{ color: '#173e4e' }} />
            <span className="font-semibold" style={{ color: '#173e4e' }}>
              Established partnerships with proven track records
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBonaFidesSlide;