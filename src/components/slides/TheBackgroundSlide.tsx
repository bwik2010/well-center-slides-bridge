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
      <div className="relative z-10 text-center pt-8 pb-6">
        <h1 className="text-5xl font-montserrat font-bold mb-3 animate-[fade-in_1s_ease-out]" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          The Background Story
        </h1>
        <div className="w-24 h-1 mx-auto rounded-full animate-[scale-in_1.2s_ease-out]" style={{
          background: 'linear-gradient(90deg, #b8832b 0%, #d4a574 100%)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-12 pb-8">
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Left Column - Cross Community Story */}
          <div className="flex flex-col justify-center animate-[fade-in_1.5s_ease-out]">
            <div className="mb-6">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 flex items-center gap-3">
                <Building2 className="h-6 w-6" style={{ color: '#b8832b' }} />
                Cross Community Foundation
              </h2>
              <p className="text-lg leading-relaxed mb-6 opacity-95">
                Operating as <span className="font-semibold" style={{ color: '#b8832b' }}>The Equity Center</span>, Cross Community has been a trusted partner serving low-income, immigrant, and marginalized populations in Montgomery County, Maryland since its founding.
              </p>
              
              {/* Community Impact Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5" style={{ color: '#b8832b' }} />
                    <span className="text-sm opacity-80">Weekly Reach</span>
                  </div>
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-xs opacity-70">Individuals served weekly</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-5 w-5" style={{ color: '#b8832b' }} />
                    <span className="text-sm opacity-80">Food Distribution</span>
                  </div>
                  <div className="text-2xl font-bold">2M+</div>
                  <div className="text-xs opacity-70">Pounds distributed</div>
                </div>
              </div>

              <p className="text-base opacity-90 leading-relaxed">
                With 70% of those served being native Spanish speakers and many being non-citizens, Cross Community has made 300-500 direct connections weekly, addressing immediate needs while fostering long-term empowerment.
              </p>
            </div>
          </div>

          {/* Right Column - Key Initiatives & Well Center Genesis */}
          <div className="flex flex-col justify-center animate-[fade-in_2s_ease-out]">
            <div className="mb-6">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 flex items-center gap-3">
                <Home className="h-6 w-6" style={{ color: '#b8832b' }} />
                Genesis of The Well Center
              </h2>
              
              {/* Key Initiatives */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#b8832b' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Educational Equity Hub</h3>
                    <p className="text-sm opacity-85">Supporting 1,400+ low-income students with virtual learning access</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#b8832b' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Community Health Initiative</h3>
                    <p className="text-sm opacity-85">1,500+ vaccine doses delivered to Black and Brown communities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#b8832b' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Community-Based Hiring</h3>
                    <p className="text-sm opacity-85">Employing staff from the communities we serve</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-base leading-relaxed">
                  Through this deep community work, <span className="font-semibold" style={{ color: '#b8832b' }}>The Well Center</span> emerged as a vision to bridge social and economic gaps, creating sustainable living and community resilience that builds upon Cross Community's proven foundation of trust and impact.
                </p>
              </div>
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