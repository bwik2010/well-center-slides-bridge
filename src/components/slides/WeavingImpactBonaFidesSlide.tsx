import React from 'react';

const WeavingImpactBonaFidesSlide = () => {
  return <div className="w-full h-full relative" style={{
    aspectRatio: '16/9',
    backgroundImage: 'url(/lovable-uploads/838c1836-ae5a-4c8c-b562-e27b461d5de0.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full p-6 flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <h2 className="text-3xl font-bold text-white">Strategic Partner:</h2>
            <img src="/lovable-uploads/337ebe9b-d908-41ab-b8b8-413dabe06122.png" alt="Weaving Impact" className="h-12" />
          </div>
          <div className="w-20 h-1 mx-auto" style={{
            backgroundColor: '#b8832b'
          }}></div>
        </div>
        
        {/* Data cells positioned attractively over the photo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/20 text-center">
              <div className="text-2xl font-bold text-white">161</div>
              <div className="text-sm font-medium text-white/90">Business-Owners Actively Engaged</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/20 text-center">
              <div className="text-2xl font-bold text-white">148</div>
              <div className="text-sm font-medium text-white/90">Black-led Enterprises</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/20 text-center">
              <div className="text-2xl font-bold text-white">22</div>
              <div className="text-sm font-medium text-white/90">Yrs of Social Enterprise Innovation</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/20 text-center">
              <div className="text-2xl font-bold text-white">&gt;100</div>
              <div className="text-sm font-medium text-white/90">Mentors in Network</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/20 text-center">
              <div className="text-2xl font-bold text-white">$30 Million</div>
              <div className="text-sm font-medium text-white/90">Invested in Social Enterprise Research</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/20 text-center">
              <div className="text-2xl font-bold text-white">$25 Million</div>
              <div className="text-sm font-medium text-white/90">Invested in Curriculum Methodology</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default WeavingImpactBonaFidesSlide;