import React from 'react';
import theWellCenterLogo from '../../assets/the-well-center-logo.png';
import worksourceMontgomeryLogo from '../../assets/worksource-montgomery-logo.png';
import identityYouthLogo from '../../assets/identity-youth-logo.png';

const MontgomeryCountyConvergenceSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center px-8 py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      
      {/* Content */}
      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Montgomery County Community Convergence
          </h1>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* The Well Center */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg">
            <div className="h-24 flex items-center justify-center mb-4">
              <img 
                src={theWellCenterLogo} 
                alt="The Well Center Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">The Well Center</h3>
            <p className="text-gray-600 text-sm">
              Community wellness and health services
            </p>
          </div>

          {/* WorkSource Montgomery */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg">
            <div className="h-24 flex items-center justify-center mb-4">
              <img 
                src={worksourceMontgomeryLogo} 
                alt="WorkSource Montgomery Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">WorkSource Montgomery</h3>
            <p className="text-gray-600 text-sm">
              Employment and workforce development services
            </p>
          </div>

          {/* Identity */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg">
            <div className="h-24 flex items-center justify-center mb-4">
              <img 
                src={identityYouthLogo} 
                alt="Identity Youth Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Identity</h3>
            <p className="text-gray-600 text-sm">
              Youth empowerment and community programs
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-gray-700 text-lg font-medium">
            Building stronger communities through collaborative partnerships
          </p>
        </div>
      </div>
    </div>
  );
};

export default MontgomeryCountyConvergenceSlide;