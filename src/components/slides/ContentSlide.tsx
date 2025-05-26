
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContentSlide = () => {
  return (
    <div className="w-full h-full p-6" style={{ aspectRatio: '16/9' }}>
      <div className="max-w-6xl mx-auto h-full">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#173e4e' }}>Content Slide Template</h2>
        
        <div className="grid grid-cols-2 gap-8 items-center h-5/6">
          {/* Left Content */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#173e4e' }}>Key Points & Benefits</h3>
            
            <div className="space-y-3">
              {[
                "Community-centered approach to development",
                "Sustainable resource management programs", 
                "Economic empowerment initiatives",
                "Environmental stewardship education",
                "Collaborative partnerships with local organizations"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#b8832b' }} />
                  <p className="text-gray-700 text-sm">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#8aa1a9', color: 'white' }}>
              <p className="font-medium italic text-sm">
                "Building resilient communities through sustainable practices and inclusive economic opportunities."
              </p>
            </div>
          </div>
          
          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="rounded-2xl p-6 h-64 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)' }}>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ backgroundColor: '#b8832b' }}>
                  <span className="text-3xl font-bold text-white">W</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Visual Content Area</h4>
                <p className="text-white opacity-90 text-sm">Charts, images, or infographics can be placed here</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60" style={{ backgroundColor: '#b8832b' }}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-60" style={{ backgroundColor: '#173e4e' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlide;
