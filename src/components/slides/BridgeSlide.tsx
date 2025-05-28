
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
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="100" height="140" viewBox="0 0 100 140" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M50 15 L50 105" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at bottom */}
                <path d="M30 85 L50 105 L70 85" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 py-2 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                <p>Entrepreneurial</p>
                <p>system development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Arrow with text inside */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="100" height="140" viewBox="0 0 100 140" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M50 125 L50 35" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at top */}
                <path d="M30 55 L50 35 L70 55" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 py-2 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                <p>Family and</p>
                <p>community development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Arrows with text inside */}
        <div className="absolute left-64 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-8">
            {/* Right arrow with Time and Talent */}
            <div className="relative">
              <svg width="140" height="50" viewBox="0 0 140 50" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M15 25 L110 25" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at right */}
                <path d="M90 10 L110 25 L90 40" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded text-white text-xs font-bold" style={{ backgroundColor: '#173e4e' }}>
                Time and Talent
              </div>
            </div>
            
            {/* Left arrow with Satisfaction/Connection */}
            <div className="relative">
              <svg width="140" height="50" viewBox="0 0 140 50" className="text-current" style={{ color: '#b8832b' }}>
                {/* Arrow line */}
                <path d="M125 25 L30 25" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at left */}
                <path d="M50 10 L30 25 L50 40" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                Satisfaction/Connection
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrows with text inside */}
        <div className="absolute right-64 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-8">
            {/* Right arrow with Capital/Connection */}
            <div className="relative">
              <svg width="140" height="50" viewBox="0 0 140 50" className="text-current" style={{ color: '#b8832b' }}>
                {/* Arrow line */}
                <path d="M15 25 L110 25" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at right */}
                <path d="M90 10 L110 25 L90 40" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded text-white text-xs font-bold" style={{ backgroundColor: '#b8832b' }}>
                Capital/Connection
              </div>
            </div>
            
            {/* Left arrow with Participation */}
            <div className="relative">
              <svg width="140" height="50" viewBox="0 0 140 50" className="text-current" style={{ color: '#173e4e' }}>
                {/* Arrow line */}
                <path d="M125 25 L30 25" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
                {/* Large arrowhead at left */}
                <path d="M50 10 L30 25 L50 40" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
