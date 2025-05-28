
import React from 'react';

const BridgeSlide = () => {
  return (
    <div className="w-full h-full p-8 bg-gray-50" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#173e4e' }}>THE WELL'S "BRIDGE" DIAGRAM</h2>
        <div className="w-full h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto h-5/6 relative">
        {/* Top Partners */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-8">
          <div className="rounded-2xl px-6 py-4 text-white text-center" style={{ backgroundColor: '#4a9b8e' }}>
            <p className="font-semibold text-base">Chambers of<br />Commerce</p>
          </div>
          <div className="rounded-2xl px-6 py-4 text-white text-center" style={{ backgroundColor: '#4a9b8e' }}>
            <p className="font-semibold text-base">Weaving Impact</p>
          </div>
          <div className="rounded-2xl px-6 py-4 text-white text-center" style={{ backgroundColor: '#4a9b8e' }}>
            <p className="font-semibold text-base">Non-Profit<br />Montgomery</p>
          </div>
        </div>

        {/* Left Side - The Included */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="rounded-3xl p-8 text-white text-center w-56" style={{ backgroundColor: '#4a9b8e' }}>
            <h3 className="font-bold text-xl mb-2">The Included</h3>
            <p className="text-sm">(The well-served)</p>
          </div>
        </div>

        {/* Right Side - The Excluded */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="rounded-3xl p-8 text-white text-center w-56" style={{ backgroundColor: '#4a9b8e' }}>
            <h3 className="font-bold text-xl mb-2">The<br />Excluded</h3>
            <p className="text-sm">(The least-<br />served)</p>
          </div>
        </div>

        {/* Bottom Partners */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-8">
          <div className="rounded-2xl px-6 py-4 text-white text-center" style={{ backgroundColor: '#4a9b8e' }}>
            <p className="font-semibold text-base">USG/MC/MCPS</p>
          </div>
          <div className="rounded-2xl px-6 py-4 text-white text-center" style={{ backgroundColor: '#4a9b8e' }}>
            <p className="font-semibold text-base">Kidsco</p>
          </div>
          <div className="rounded-2xl px-6 py-4 text-white text-center" style={{ backgroundColor: '#4a9b8e' }}>
            <p className="font-semibold text-base">Worksource<br />Montgomery</p>
          </div>
        </div>

        {/* Center - The Well Center */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-3xl p-8 text-center border-4 bg-white" style={{ borderColor: '#4a9b8e', width: '320px' }}>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#173e4e' }}>The Well Center</h3>
            <p className="text-lg font-medium" style={{ color: '#173e4e' }}>@ Cross Community</p>
          </div>
        </div>

        {/* Top Vertical Arrows */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex gap-12">
          {/* Down Arrow - Entrepreneurial */}
          <div className="flex flex-col items-center">
            <svg width="40" height="100" viewBox="0 0 40 100" style={{ color: '#173e4e' }}>
              <path d="M20 10 L20 75" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M8 65 L20 85 L32 65" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="text-center text-xs font-bold mt-2 px-2 py-1 rounded text-white" style={{ backgroundColor: '#173e4e' }}>
              <p>Entrepreneurial</p>
              <p>system</p>
              <p>development</p>
            </div>
          </div>
          
          {/* Up Arrow - Family */}
          <div className="flex flex-col items-center">
            <div className="text-center text-xs font-bold mb-2 px-2 py-1 rounded text-white" style={{ backgroundColor: '#e67e52' }}>
              <p>Family and</p>
              <p>community</p>
              <p>development</p>
            </div>
            <svg width="40" height="100" viewBox="0 0 40 100" style={{ color: '#e67e52' }}>
              <path d="M20 90 L20 25" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M8 35 L20 15 L32 35" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Left Horizontal Arrows */}
        <div className="absolute left-72 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
          {/* Right Arrow - Time and Talent */}
          <div className="flex items-center">
            <svg width="180" height="40" viewBox="0 0 180 40" style={{ color: '#173e4e' }}>
              <path d="M10 20 L155 20" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M145 8 L165 20 L145 32" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-2 rounded text-white text-sm font-bold" style={{ backgroundColor: '#173e4e' }}>
              Time and Talent
            </div>
          </div>
          
          {/* Left Arrow - Purpose/Connection */}
          <div className="flex items-center">
            <svg width="180" height="40" viewBox="0 0 180 40" style={{ color: '#e67e52' }}>
              <path d="M170 20 L25 20" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M35 8 L15 20 L35 32" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-2 rounded text-white text-sm font-bold" style={{ backgroundColor: '#e67e52' }}>
              Purpose/Connection
            </div>
          </div>
        </div>

        {/* Right Horizontal Arrows */}
        <div className="absolute right-72 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
          {/* Right Arrow - Capital/Connection */}
          <div className="flex items-center">
            <svg width="180" height="40" viewBox="0 0 180 40" style={{ color: '#e67e52' }}>
              <path d="M10 20 L155 20" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M145 8 L165 20 L145 32" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-2 rounded text-white text-sm font-bold" style={{ backgroundColor: '#e67e52' }}>
              Capital/Connection
            </div>
          </div>
          
          {/* Left Arrow - Participation */}
          <div className="flex items-center">
            <svg width="180" height="40" viewBox="0 0 180 40" style={{ color: '#173e4e' }}>
              <path d="M170 20 L25 20" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M35 8 L15 20 L35 32" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-2 rounded text-white text-sm font-bold" style={{ backgroundColor: '#173e4e' }}>
              Participation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeSlide;
