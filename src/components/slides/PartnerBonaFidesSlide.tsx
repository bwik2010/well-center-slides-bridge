import React, { useEffect, useState } from 'react';
import { CheckCircle, Users, Building2 } from 'lucide-react';
import kidscoLogo from '@/assets/kidsco-inc-logo.png';
const weavingImpactLogo = '/lovable-uploads/337ebe9b-d908-41ab-b8b8-413dabe06122.png';
const PartnerBonaFidesSlide = () => {
  const [animateStats, setAnimateStats] = useState(false);
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);
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
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 flex flex-col justify-start h-full" style={{
          borderLeftColor: '#173e4e'
        }}>
            {/* KidsCo Logo Area */}
            <div className="text-center flex-shrink-0">
              <div className="w-56 h-32 mx-auto rounded-lg flex items-center justify-center bg-white shadow-sm mb-6">
                <img src="/lovable-uploads/f62fbb05-f31f-4cda-b7ae-b9647abb5edf.png" alt="KidsCo Logo" className="max-w-full max-h-full object-contain" />
              </div>
              
              {/* KidsCo Impact Stats */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-2">
                  {/* Years of Service */}
                  <div className={`bg-gradient-to-br from-red-50 to-red-100 p-1.5 rounded-lg shadow-md border-2 border-red-200 text-center transition-all duration-500 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    <span className="text-xl font-black block" style={{
                    color: '#ff6b6b',
                    textShadow: '2px 2px 0px #ff9999'
                  }}>27</span>
                    <div className="text-xs font-bold text-gray-700">Years of Service in Montgomery County</div>
                  </div>

                  {/* Children Served */}
                  <div className={`bg-gradient-to-br from-teal-50 to-teal-100 p-1.5 rounded-lg shadow-md border-2 border-teal-200 text-center transition-all duration-500 delay-100 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    <span className="text-xl font-black block" style={{
                    color: '#4ecdc4',
                    textShadow: '2px 2px 0px #7ed6cc'
                  }}>3,500</span>
                    <div className="text-xs font-bold text-gray-700">Happy Children Served in 2024!</div>
                  </div>

                  {/* School Programs */}
                  <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-1.5 rounded-lg shadow-md border-2 border-blue-200 text-center transition-all duration-500 delay-200 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    <span className="text-xl font-black block" style={{
                    color: '#45b7d1',
                    textShadow: '2px 2px 0px #73c5da'
                  }}>21</span>
                    <div className="text-xs font-bold text-gray-700">School-Based Programs</div>
                  </div>

                  {/* Team Members */}
                  <div className={`bg-gradient-to-br from-green-50 to-green-100 p-1.5 rounded-lg shadow-md border-2 border-green-200 text-center transition-all duration-500 delay-300 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    <span className="text-xl font-black block" style={{
                    color: '#96ceb4',
                    textShadow: '2px 2px 0px #b4d6c4'
                  }}>200</span>
                    <div className="text-xs font-bold text-gray-700">Amazing Team Members!</div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className={`mt-2 bg-gradient-to-br from-yellow-50 to-yellow-100 p-1.5 rounded-lg shadow-md border-2 border-yellow-200 text-center transition-all duration-500 delay-400 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                  <span className="text-xl font-black block" style={{
                  color: '#feca57',
                  textShadow: '2px 2px 0px #fed481'
                }}>5</span>
                  <div className="text-xs font-bold text-gray-700 mb-1">Star Rating from MD EXCELS</div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-xs text-yellow-400" style={{
                    animation: 'twinkle 2s ease-in-out infinite alternate',
                    animationDelay: `${i * 0.2}s`
                  }}>
                        ⭐
                      </span>)}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Weaving Impact Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 flex flex-col justify-start h-full" style={{
          borderLeftColor: '#173e4e'
        }}>
            {/* Weaving Impact Logo Area */}
            <div className="text-center flex-shrink-0">
              <div className="w-56 h-32 mx-auto rounded-lg flex items-center justify-center bg-white shadow-sm mb-6">
                <img src={weavingImpactLogo} alt="Weaving Impact Logo" className="max-w-full max-h-full object-contain" />
              </div>
              
              {/* Business Support Impact Stats */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-1.5 rounded-lg shadow-md border-2 border-gray-200 text-center">
                    <div className="text-xl font-bold" style={{
                    color: '#8aa1a9'
                  }}>161</div>
                    <div className="text-xs font-bold text-gray-700">Business-Owners Supported</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-1.5 rounded-lg shadow-md border-2 border-gray-200 text-center">
                    <div className="text-xl font-bold" style={{
                    color: '#8aa1a9'
                  }}>148</div>
                    <div className="text-xs font-bold text-gray-700">Black-led Enterprises</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-1.5 rounded-lg shadow-md border-2 border-gray-200 text-center">
                    <div className="text-xl font-bold" style={{
                    color: '#8aa1a9'
                  }}>53</div>
                    <div className="text-xs font-bold text-gray-700">New Social Enterprises 
in 2024</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-1.5 rounded-lg shadow-md border-2 border-gray-200 text-center">
                    <div className="text-xl font-bold" style={{
                    color: '#8aa1a9'
                  }}>107</div>
                    <div className="text-xs font-bold text-gray-700">Women & Non-Gender Conforming Led</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-1.5 rounded-lg shadow-md border-2 border-gray-200 text-center">
                    <div className="text-xl font-bold" style={{
                    color: '#8aa1a9'
                  }}>$30 Million</div>
                    <div className="text-xs font-bold text-gray-700">Invested in Social Enterprise Research</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-1.5 rounded-lg shadow-md border-2 border-gray-200 text-center">
                    <div className="text-xl font-bold" style={{
                    color: '#8aa1a9'
                  }}>$5 Million</div>
                    <div className="text-xs font-bold text-gray-700">Invested in Curriculum Methodology</div>
                  </div>
                </div>
                
                {/* Placeholder to match KidsCo star rating spacing */}
                <div className="mt-2 h-16"></div>
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