import React from 'react';
import { Users, Heart, Home, BookOpen, Shield, Building2 } from 'lucide-react';

const TheBackgroundSlide = () => {
  return (
    <div className="w-full h-full flex flex-col relative rounded-xl text-white overflow-hidden" style={{
      background: 'linear-gradient(135deg, #173e4e 0%, #2a5a6b 50%, #8aa1a9 100%)',
      aspectRatio: '16/9'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-12 right-16 w-24 h-24 rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, #b8832b 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-16 left-12 w-16 h-16 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, #b8832b 0%, transparent 70%)'
        }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-6 pb-4">
        <h1 className="text-4xl font-montserrat font-bold mb-2 animate-[fade-in_1s_ease-out]" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Cross Community Story
        </h1>
        <div className="w-20 h-0.5 mx-auto rounded-full animate-[scale-in_1.2s_ease-out]" style={{
          background: 'linear-gradient(90deg, #b8832b 0%, #d4a574 100%)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-8 pb-6">
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Left Column - Food & Community-Driven */}
          <div className="space-y-6 animate-[fade-in_1.5s_ease-out]">
            {/* Food */}
            <div className="flex-1">
              <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
                Food
              </h2>
              
              {/* Video under Food */}
              <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 mb-4">
                <iframe
                  src="https://www.youtube.com/embed/E3UImx4VLPk"
                  title="Cross Community Story"
                  className="w-full h-40"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Community-Driven */}
            <div className="flex-1">
              <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
                Community-Driven
              </h2>
            </div>
          </div>
          
          {/* Right Column - Early Childhood Development & Social Enterprise */}
          <div className="space-y-6 animate-[fade-in_1.8s_ease-out]">
            {/* Early Childhood Development */}
            <div className="flex-1">
              <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
                Early Childhood Development
              </h2>
            </div>

            {/* Social Enterprise */}
            <div className="flex-1">
              <h2 className="text-2xl font-montserrat font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
                Social Enterprise
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default TheBackgroundSlide;