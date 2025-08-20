import React from 'react';

const TheWellCenterLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`inline-flex justify-center items-center ${className}`}>
      <div 
        className="relative w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-300/30"
        style={{
          background: 'radial-gradient(circle at center, #f0f8ff 0%, #e6fffa 50%, #4fd1c7 100%)',
        }}
      >
        {/* Stone border effect */}
        <div 
          className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full -z-10"
          style={{
            background: `repeating-conic-gradient(from 0deg, 
              #696969 0deg 15deg, 
              #808080 15deg 30deg, 
              #a9a9a9 30deg 45deg,
              #778899 45deg 60deg)`
          }}
        ></div>

        {/* Water reflection effect */}
        <div 
          className="absolute top-1 left-1 right-1 bottom-1 rounded-full"
          style={{
            background: `
              radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.6) 0%, transparent 30%),
              radial-gradient(circle at center, rgba(135, 206, 235, 0.8) 0%, rgba(70, 130, 180, 0.9) 100%)`
          }}
        ></div>
        
        {/* Curved Text SVG */}
        <svg 
          className="absolute top-0 left-0 w-full h-full z-10" 
          viewBox="0 0 80 80"
        >
          <defs>
            <path id="top-curve" d="M 20 40 A 20 20 0 0 1 60 40" />
            <path id="bottom-curve" d="M 15 40 A 25 25 0 1 0 65 40" />
          </defs>
          <text 
            className="fill-gray-700" 
            style={{ 
              fontFamily: 'Arial, sans-serif', 
              fontWeight: '500',
              fontSize: '9px',
              letterSpacing: '1px',
              textShadow: '0 1px 2px rgba(255,255,255,0.8)'
            }}
          >
            <textPath href="#top-curve" startOffset="50%" textAnchor="middle">
              THE
            </textPath>
          </text>
          <text 
            className="fill-gray-700" 
            style={{ 
              fontFamily: 'Arial, sans-serif', 
              fontWeight: '500',
              fontSize: '8px',
              letterSpacing: '0.5px',
              textShadow: '0 1px 2px rgba(255,255,255,0.8)'
            }}
          >
            <textPath href="#bottom-curve" startOffset="50%" textAnchor="middle">
              CENTER
            </textPath>
          </text>
        </svg>
        
        {/* Center Text */}
        <div 
          className="text-lg font-bold text-gray-700 tracking-wide z-20 relative"
          style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}
        >
          WeLL
        </div>
      </div>
    </div>
  );
};

export default TheWellCenterLogo;