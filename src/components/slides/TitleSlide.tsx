import React from 'react';
const TitleSlide = () => {
  return <div className="w-full h-full flex flex-col items-center justify-center text-center relative rounded-xl text-white" style={{
    background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
    aspectRatio: '16/9'
  }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-12 w-24 h-24 rounded-full" style={{
        backgroundColor: '#b8832b'
      }}></div>
        <div className="absolute bottom-12 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 rounded-full" style={{
        backgroundColor: '#b8832b'
      }}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl px-8">
        <div className="mb-6">
          <div className="w-64 h-40 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/10 p-6">
            <img src="/lovable-uploads/79668293-242e-481e-b2b3-393660634277.png" alt="The Well Center Logo" className="w-full h-full object-contain" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          The Well Center
        </h1>
        
        <p className="text-xl mb-6 opacity-90 leading-relaxed max-w-4xl">
          Bridging social and economic gaps that build sustainable living and community resilience in Montgomery County
        </p>
        
        <div className="flex items-center justify-center gap-4 text-base opacity-80">
          <span>Human Dignity</span>
          <span style={{
          color: '#b8832b'
        }}>•</span>
          <span>Personal Freedom</span>
          <span style={{
          color: '#b8832b'
        }}>•</span>
          <span>Community Solidarity</span>
        </div>
      </div>
    </div>;
};
export default TitleSlide;