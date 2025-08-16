import React from 'react';

const weavingImpactLogo = '/lovable-uploads/337ebe9b-d908-41ab-b8b8-413dabe06122.png';

const WeavingImpactBonaFidesSlide = () => {
  return (
    <div className="w-full h-full p-6" style={{
      aspectRatio: '16/9'
    }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{
          color: '#173e4e'
        }}>
          Weaving Impact Bona Fides
        </h2>
        <div className="w-20 h-1 mx-auto mb-4" style={{
          backgroundColor: '#b8832b'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 flex-1" style={{
          borderLeftColor: '#173e4e'
        }}>
          {/* Weaving Impact Logo Area */}
          <div className="text-center">
            <div 
              className="w-96 h-48 mx-auto rounded-lg flex items-center justify-center shadow-sm mb-8 relative"
              style={{
                backgroundImage: `url('/lovable-uploads/62723598-bffb-4395-847c-81f875e9ed72.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay to reduce saturation */}
              <div className="absolute inset-0 bg-white/70 rounded-lg"></div>
              <img src={weavingImpactLogo} alt="Weaving Impact Logo" className="w-56 h-32 object-contain relative z-10" />
            </div>
            
            {/* Business Support Impact Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-md border-2 border-gray-200 text-center">
                <div className="text-3xl font-bold" style={{
                  color: '#8aa1a9'
                }}>161</div>
                <div className="text-sm font-bold text-gray-700">Business-Owners Supported</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-md border-2 border-gray-200 text-center">
                <div className="text-3xl font-bold" style={{
                  color: '#8aa1a9'
                }}>148</div>
                <div className="text-sm font-bold text-gray-700">Black-led Enterprises</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-md border-2 border-gray-200 text-center">
                <div className="text-3xl font-bold" style={{
                  color: '#8aa1a9'
                }}>53</div>
                <div className="text-sm font-bold text-gray-700">New Social Enterprises 
in 2024</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-md border-2 border-gray-200 text-center">
                <div className="text-3xl font-bold" style={{
                  color: '#8aa1a9'
                }}>107</div>
                <div className="text-sm font-bold text-gray-700">Women & Non-Gender Conforming Led</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-md border-2 border-gray-200 text-center">
                <div className="text-3xl font-bold" style={{
                  color: '#8aa1a9'
                }}>$30 Million</div>
                <div className="text-sm font-bold text-gray-700">Invested in Social Enterprise Research</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-md border-2 border-gray-200 text-center">
                <div className="text-3xl font-bold" style={{
                  color: '#8aa1a9'
                }}>$5 Million</div>
                <div className="text-sm font-bold text-gray-700">Invested in Curriculum Methodology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeavingImpactBonaFidesSlide;