
import React from 'react';
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react';

const BridgeSlide = () => {
  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#173e4e' }}>THE WELL'S "BRIDGE" DIAGRAM</h2>
        <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto h-5/6 relative">
        {/* Top Partners */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-8">
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-32" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Chambers of Commerce</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-32" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Weaving Impact</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-32" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Non-Profit Montgomery</p>
          </div>
        </div>

        {/* Left Side - Included/Most-served */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="rounded-3xl p-6 text-white text-center w-48" style={{ backgroundColor: '#8aa1a9' }}>
            <h3 className="font-bold text-lg mb-2">Included/</h3>
            <h3 className="font-bold text-lg">The most-served</h3>
          </div>
        </div>

        {/* Right Side - Excluded/Least-served */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="rounded-3xl p-6 text-white text-center w-48" style={{ backgroundColor: '#8aa1a9' }}>
            <h3 className="font-bold text-lg mb-2">Excluded/</h3>
            <h3 className="font-bold text-lg">The least-served</h3>
          </div>
        </div>

        {/* Bottom Partners */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-8">
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-32" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">USG/MC/MCPS</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-32" style={{ backgroundColor: '#8aa1a9' }}>
            <p className="font-semibold text-sm">Kidsco</p>
          </div>
          <div className="rounded-2xl px-4 py-3 text-white text-center min-w-32" style={{ backgroundColor: '#8aa1a9' }}>
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

        {/* Arrows and Labels */}
        {/* Top Arrow - Entrepreneurial system development */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <ArrowDown className="h-8 w-8 mb-2" style={{ color: '#173e4e' }} />
            <div className="text-center bg-white px-3 py-1 rounded" style={{ backgroundColor: '#b8832b20' }}>
              <p className="text-xs font-medium" style={{ color: '#173e4e' }}>Entrepreneurial</p>
              <p className="text-xs font-medium" style={{ color: '#173e4e' }}>system development</p>
            </div>
          </div>
        </div>

        {/* Bottom Arrow - Family and community development */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="text-center bg-white px-3 py-1 rounded mb-2" style={{ backgroundColor: '#b8832b20' }}>
              <p className="text-xs font-medium" style={{ color: '#173e4e' }}>Family and</p>
              <p className="text-xs font-medium" style={{ color: '#173e4e' }}>community development</p>
            </div>
            <ArrowUp className="h-8 w-8" style={{ color: '#173e4e' }} />
          </div>
        </div>

        {/* Left Arrows */}
        <div className="absolute left-52 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-6 w-6" style={{ color: '#173e4e' }} />
              <div className="text-center bg-white px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#173e4e', color: 'white' }}>
                Time and Talent
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-center bg-white px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#b8832b', color: 'white' }}>
                Satisfaction/Connection
              </div>
              <ArrowLeft className="h-6 w-6" style={{ color: '#b8832b' }} />
            </div>
          </div>
        </div>

        {/* Right Arrows */}
        <div className="absolute right-52 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-center bg-white px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#b8832b', color: 'white' }}>
                Capital/Connection
              </div>
              <ArrowRight className="h-6 w-6" style={{ color: '#b8832b' }} />
            </div>
            <div className="flex items-center gap-2">
              <ArrowLeft className="h-6 w-6" style={{ color: '#173e4e' }} />
              <div className="text-center bg-white px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#173e4e', color: 'white' }}>
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
