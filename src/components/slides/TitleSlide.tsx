
import React from 'react';

const TitleSlide = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center relative rounded-xl text-white p-12" style={{ background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl">
        <div className="mb-8">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-3xl font-bold" style={{ color: '#173e4e' }}>W</span>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          The Well Center
        </h1>
        
        <p className="text-2xl mb-8 opacity-90 leading-relaxed">
          Bridging social and economic gaps that build sustainable living and community resilience in Montgomery County
        </p>
        
        <div className="flex items-center justify-center gap-4 text-lg opacity-80">
          <span>Building Communities</span>
          <span style={{ color: '#b8832b' }}>•</span>
          <span>Creating Opportunities</span>
          <span style={{ color: '#b8832b' }}>•</span>
          <span>Fostering Resilience</span>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
