import React, { useEffect, useState } from 'react';
const KidsCoBonaFidesSlide = () => {
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
      }}>Key Partner: KidsCo Inc.</h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{
        backgroundColor: '#b8832b'
      }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 flex-1" style={{
        borderLeftColor: '#173e4e'
      }}>
          {/* KidsCo Logo Area */}
          <div className="text-center">
            <div className="w-96 h-48 mx-auto rounded-lg flex items-center justify-center shadow-sm mb-8 relative" style={{
            backgroundImage: `url('/lovable-uploads/f62fbb05-f31f-4cda-b7ae-b9647abb5edf.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
              {/* Overlay to reduce saturation */}
              <div className="absolute inset-0 bg-white/70 rounded-lg"></div>
              <img src="/lovable-uploads/f62fbb05-f31f-4cda-b7ae-b9647abb5edf.png" alt="KidsCo Logo" className="w-56 h-32 object-contain relative z-10" />
            </div>
            
            {/* KidsCo Impact Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              {/* Years of Service */}
              <div className={`bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg shadow-md border-2 border-red-200 text-center transition-all duration-500 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <span className="text-3xl font-black block" style={{
                color: '#ff6b6b',
                textShadow: '2px 2px 0px #ff9999'
              }}>27</span>
                <div className="text-sm font-bold text-gray-700">Years of Service in Montgomery County</div>
              </div>

              {/* Children Served */}
              <div className={`bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg shadow-md border-2 border-teal-200 text-center transition-all duration-500 delay-100 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <span className="text-3xl font-black block" style={{
                color: '#4ecdc4',
                textShadow: '2px 2px 0px #7ed6cc'
              }}>3,500</span>
                <div className="text-sm font-bold text-gray-700">Happy Children Served in 2024!</div>
              </div>

              {/* School Programs */}
              <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg shadow-md border-2 border-blue-200 text-center transition-all duration-500 delay-200 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <span className="text-3xl font-black block" style={{
                color: '#45b7d1',
                textShadow: '2px 2px 0px #73c5da'
              }}>21</span>
                <div className="text-sm font-bold text-gray-700">School-Based Programs</div>
              </div>

              {/* Team Members */}
              <div className={`bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg shadow-md border-2 border-green-200 text-center transition-all duration-500 delay-300 ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <span className="text-3xl font-black block" style={{
                color: '#96ceb4',
                textShadow: '2px 2px 0px #b4d6c4'
              }}>200</span>
                <div className="text-sm font-bold text-gray-700">Amazing Team Members!</div>
              </div>
            </div>

            {/* Star Rating */}
            <div className={`mt-6 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-md border-2 border-yellow-200 text-center transition-all duration-500 delay-400 max-w-sm mx-auto ${animateStats ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <span className="text-3xl font-black block" style={{
              color: '#feca57',
              textShadow: '2px 2px 0px #fed481'
            }}>5</span>
              <div className="text-sm font-bold text-gray-700 mb-2">Star Rating from MD EXCELS</div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-lg text-yellow-400" style={{
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
      
      <style>{`
        @keyframes twinkle {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
      `}</style>
    </div>;
};
export default KidsCoBonaFidesSlide;