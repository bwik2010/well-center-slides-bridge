import React, { useEffect, useState } from 'react';

const ImpactSlide = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Start confetti animation
    setShowConfetti(true);
    
    // Repeat confetti every 10 seconds
    const interval = setInterval(() => {
      setShowConfetti(false);
      setTimeout(() => setShowConfetti(true), 100);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const Confetti = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    
    return (
      <>
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="fixed w-2.5 h-2.5 animate-pulse"
            style={{
              left: `${Math.random() * 100}vw`,
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              animationDelay: `${i * 0.2}s`,
              animation: `confetti-fall ${Math.random() * 3 + 2}s linear infinite`,
              animationFillMode: 'both'
            }}
          />
        ))}
      </>
    );
  };

  return (
    <div className="h-full relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 animate-pulse"
        style={{
          background: 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #ffd89b 100%)',
          animation: 'backgroundShift 8s ease-in-out infinite alternate'
        }}
      />
      
      {/* Confetti */}
      {showConfetti && <Confetti />}
      
      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
        {/* Header */}
        <div className="text-center mb-12 bg-white rounded-3xl p-8 shadow-2xl border-4 border-red-400 relative overflow-hidden max-w-4xl">
          {/* Animated stripes background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 107, 107, 0.1) 10px,
                rgba(255, 107, 107, 0.1) 20px
              )`,
              animation: 'stripes 10s linear infinite'
            }}
          />
          
          <h1 
            className="text-6xl font-black mb-4 relative z-10"
            style={{
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s ease-in-out infinite'
            }}
          >
            Our Amazing Impact!
          </h1>
          <p className="text-2xl text-gray-600 font-semibold relative z-10">
            Making a Difference Every Day in Montgomery County 🌟
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-6 max-w-6xl w-full">
          {/* Years of Service */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-2xl border-4 border-red-400 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1">
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500"
            />
            <span className="text-4xl block mb-3 animate-bounce">🎂</span>
            <span 
              className="text-6xl font-black block mb-4 relative z-10"
              style={{ 
                color: '#ff6b6b',
                textShadow: '3px 3px 0px #ff9999'
              }}
            >
              27
            </span>
            <div className="text-xl font-bold text-gray-700 relative z-10">Years of Awesome Adventures!</div>
          </div>

          {/* Children Served */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-2xl border-4 border-teal-400 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1">
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500"
            />
            <span className="text-4xl block mb-3 animate-bounce" style={{ animationDelay: '0.5s' }}>👶</span>
            <span 
              className="text-6xl font-black block mb-4 relative z-10"
              style={{ 
                color: '#4ecdc4',
                textShadow: '3px 3px 0px #7ed6cc'
              }}
            >
              3,500
            </span>
            <div className="text-xl font-bold text-gray-700 relative z-10">Happy Children Served in 2024!</div>
          </div>

          {/* School Programs */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-2xl border-4 border-blue-400 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1">
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500"
            />
            <span className="text-4xl block mb-3 animate-bounce" style={{ animationDelay: '1s' }}>🏫</span>
            <span 
              className="text-6xl font-black block mb-4 relative z-10"
              style={{ 
                color: '#45b7d1',
                textShadow: '3px 3px 0px #73c5da'
              }}
            >
              21
            </span>
            <div className="text-xl font-bold text-gray-700 relative z-10">School-Based After Care Programs</div>
          </div>

          {/* Team Members */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-2xl border-4 border-green-400 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1">
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500"
            />
            <span className="text-4xl block mb-3 animate-bounce" style={{ animationDelay: '1.5s' }}>👨‍👩‍👧‍👦</span>
            <span 
              className="text-6xl font-black block mb-4 relative z-10"
              style={{ 
                color: '#96ceb4',
                textShadow: '3px 3px 0px #b4d6c4'
              }}
            >
              200
            </span>
            <div className="text-xl font-bold text-gray-700 relative z-10">Amazing People on Our Team!</div>
          </div>

          {/* Star Rating */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-2xl border-4 border-yellow-400 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1">
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500"
            />
            <span className="text-4xl block mb-3 animate-bounce" style={{ animationDelay: '2s' }}>🏆</span>
            <span 
              className="text-6xl font-black block mb-4 relative z-10"
              style={{ 
                color: '#feca57',
                textShadow: '3px 3px 0px #fed481'
              }}
            >
              5
            </span>
            <div className="text-xl font-bold text-gray-700 relative z-10 mb-3">Star Rating from MD EXCELS</div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i}
                  className="text-2xl text-yellow-400 animate-pulse"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animation: 'twinkle 2s ease-in-out infinite alternate'
                  }}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ImpactSlide;