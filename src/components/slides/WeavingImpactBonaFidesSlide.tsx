import React from 'react';
const weavingImpactLogo = '/lovable-uploads/337ebe9b-d908-41ab-b8b8-413dabe06122.png';
const WeavingImpactBonaFidesSlide = () => {
  return <div className="w-full h-full p-6" style={{
    aspectRatio: '16/9'
  }}>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-3">
          <h2 className="text-3xl font-bold" style={{
            color: '#173e4e'
          }}>Strategic Partner:</h2>
          <img src="/lovable-uploads/337ebe9b-d908-41ab-b8b8-413dabe06122.png" alt="Weaving Impact" className="h-12" />
        </div>
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
            <div className="w-full h-80 mx-auto rounded-lg mb-6 overflow-hidden shadow-sm">
              <img src="/lovable-uploads/52b31a26-97a1-4c36-a686-1d0fac3fc76e.png" alt="Weaving Impact - Empowering Social Entrepreneurs" className="w-full h-full object-contain" />
            </div>
            
            {/* Business Support Impact Stats */}
            <div className="grid grid-cols-3 gap-2 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-xl font-bold" style={{
                color: '#8aa1a9'
              }}>161</div>
                <div className="text-xs font-medium text-gray-700">Business-Owners Supported</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-xl font-bold" style={{
                color: '#8aa1a9'
              }}>148</div>
                <div className="text-xs font-medium text-gray-700">Black-led Enterprises</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-xl font-bold" style={{
                color: '#8aa1a9'
              }}>53</div>
                <div className="text-xs font-medium text-gray-700">New Social Enterprises in 2024</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-xl font-bold" style={{
                color: '#8aa1a9'
              }}>81</div>
                <div className="text-xs font-medium text-gray-700">Mentors in Network</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-xl font-bold" style={{
                color: '#8aa1a9'
              }}>$30 Million</div>
                <div className="text-xs font-medium text-gray-700">Invested in Social Enterprise Research</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-xl font-bold" style={{
                color: '#8aa1a9'
              }}>$5 Million</div>
                <div className="text-xs font-medium text-gray-700">Invested in Curriculum Methodology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default WeavingImpactBonaFidesSlide;