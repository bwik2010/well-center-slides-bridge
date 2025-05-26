
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContentSlide = () => {
  return (
    <div className="h-full p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#173e4e' }}>Content Slide Template</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#173e4e' }}>Key Points & Benefits</h3>
            
            <div className="space-y-4">
              {[
                "Community-centered approach to development",
                "Sustainable resource management programs", 
                "Economic empowerment initiatives",
                "Environmental stewardship education",
                "Collaborative partnerships with local organizations"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#b8832b' }} />
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: '#8aa1a9', color: 'white' }}>
              <p className="font-medium italic">
                "Building resilient communities through sustainable practices and inclusive economic opportunities."
              </p>
            </div>
          </div>
          
          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="rounded-2xl p-8 h-80 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8aa1a9 0%, #173e4e 100%)' }}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#b8832b' }}>
                  <span className="text-4xl font-bold text-white">W</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Visual Content Area</h4>
                <p className="text-white opacity-90">Charts, images, or infographics can be placed here</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60" style={{ backgroundColor: '#b8832b' }}></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-60" style={{ backgroundColor: '#173e4e' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlide;
