import React from 'react';

const TitleSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center relative rounded-xl text-white overflow-hidden" style={{
      background: 'linear-gradient(135deg, #173e4e 0%, #2a5a6b 30%, #8aa1a9 100%)',
      aspectRatio: '16/9'
    }}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
        
        {/* Floating elements */}
        <div className="absolute top-8 left-12 w-32 h-32 rounded-full opacity-20 animate-[fade-in_2s_ease-out]" style={{
          background: 'radial-gradient(circle, #b8832b 0%, transparent 70%)'
        }}></div>
        <div className="absolute top-1/3 right-12 w-16 h-16 rounded-full opacity-25 animate-[fade-in_3s_ease-out]" style={{
          background: 'radial-gradient(circle, #b8832b 0%, transparent 70%)'
        }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #b8832b 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl px-8 animate-[fade-in_1s_ease-out]">
        {/* Main Title with enhanced styling */}
        <div className="mb-8">
          <h1 className="text-7xl font-merriweather font-bold mb-2 leading-tight animate-[scale-in_1.2s_ease-out]" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #e6f3ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 20px rgba(184, 131, 43, 0.3)'
          }}>
            The Well Center
          </h1>
          <div className="w-32 h-1 mx-auto rounded-full animate-[scale-in_1.5s_ease-out]" style={{
            background: 'linear-gradient(90deg, #b8832b 0%, #d4a574 50%, #b8832b 100%)'
          }}></div>
        </div>
        
        {/* Enhanced subtitle */}
        <p className="text-2xl mb-10 opacity-95 leading-relaxed max-w-5xl mx-auto animate-[fade-in_1.8s_ease-out]" style={{
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
        }}>
          Bridging social and economic gaps that build sustainable living and community resilience in Montgomery County
        </p>
        
        {/* Enhanced values section */}
        <div className="flex items-center justify-center gap-8 text-lg animate-[fade-in_2.2s_ease-out]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
            <span className="font-medium">Human Dignity</span>
          </div>
          <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
            <span className="font-medium">Personal Freedom</span>
          </div>
          <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
            <span className="font-medium">Community Solidarity</span>
          </div>
        </div>
        
        {/* Subtle call to action */}
        <div className="mt-12 animate-[fade-in_2.8s_ease-out]">
          <div className="inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-sm opacity-80">
            Building bridges to a stronger community
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};
export default TitleSlide;