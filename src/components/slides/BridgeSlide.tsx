
import React from 'react';

const BridgeSlide = () => {
  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#173e4e' }}>THE WELL'S "BRIDGE" DIAGRAM</h2>
        <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto h-5/6 relative">
        {/* Top Partners */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-6">
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-36" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Chambers of Commerce</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-36" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Weaving Impact</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-36" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Non-Profit Montgomery</p>
          </div>
        </div>

        {/* Left Side - Included/Most-served */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <div className="rounded-3xl p-6 text-white text-center w-52" style={{ backgroundColor: '#8aa1a9' }}>
            <h3 className="font-bold text-xl mb-2">Included/</h3>
            <h3 className="font-bold text-xl">The most-served</h3>
          </div>
        </div>

        {/* Right Side - Excluded/Least-served */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="rounded-3xl p-6 text-white text-center w-52" style={{ backgroundColor: '#8aa1a9' }}>
            <h3 className="font-bold text-xl mb-2">Excluded/</h3>
            <h3 className="font-bold text-xl">The least-served</h3>
          </div>
        </div>

        {/* Bottom Partners */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-6">
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-36" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">USG/MC/MCPS</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-36" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Kidsco</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-36" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Worksource Montgomery</p>
          </div>
        </div>

        {/* Center - The Well Center */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-3xl p-6 text-center border-4 bg-white w-80" style={{ borderColor: '#173e4e' }}>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#173e4e' }}>The Well Center</h3>
            <p className="text-lg font-medium" style={{ color: '#173e4e' }}>@ Cross Community</p>
          </div>
        </div>

        {/* Top Arrow with text inside */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M60 10 L60 85" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at bottom */}
                <path d="M35 70 L60 95 L85 70" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 py-2 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                <p>Entrepreneurial</p>
                <p>system development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Arrow with text inside */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M60 110 L60 35" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at top */}
                <path d="M35 50 L60 25 L85 50" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 py-2 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                <p>Family and</p>
                <p>community development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Arrows with text inside */}
        <div className="absolute left-72 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-12">
            {/* Right arrow with Time and Talent */}
            <div className="relative">
              <svg width="160" height="60" viewBox="0 0 160 60" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M10 30 L130 30" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at right */}
                <path d="M115 15 L140 30 L115 45" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded text-white text-xs font-bold" style={{ backgroundColor: '#173e4e' }}>
                Time and Talent
              </div>
            </div>
            
            {/* Left arrow with Satisfaction/Connection */}
            <div className="relative">
              <svg width="160" height="60" viewBox="0 0 160 60" className="text-current" style={{ color: '#b8832b' }}>
                {/* Arrow line */}
                <path d="M150 30 L30 30" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at left */}
                <path d="M45 15 L20 30 L45 45" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                Satisfaction/Connection
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrows with text inside */}
        <div className="absolute right-72 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-12">
            {/* Right arrow with Capital/Connection */}
            <div className="relative">
              <svg width="160" height="60" viewBox="0 0 160 60" className="text-current" style={{ color: '#b8832b' }}>
                {/* Arrow line */}
                <path d="M10 30 L130 30" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at right */}
                <path d="M115 15 L140 30 L115 45" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                Capital/Connection
              </div>
            </div>
            
            {/* Left arrow with Participation */}
            <div className="relative">
              <svg width="160" height="60" viewBox="0 0 160 60" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M150 30 L30 30" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at left */}
                <path d="M45 15 L20 30 L45 45" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded text-white text-xs font-bold" style={{ backgroundColor: '#173e4e' }}>
                Participation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeSlide;
