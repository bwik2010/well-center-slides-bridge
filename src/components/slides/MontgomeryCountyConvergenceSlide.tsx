import React from 'react';
import crossCommunityLogo from '@/assets/cross-community-logo.png';
import worksourceMontgomeryLogo from '/lovable-uploads/7e021967-b150-401d-aa23-a9a7b772776a.png';
import identityYouthLogo from '/lovable-uploads/8661bd69-0afa-46d3-8417-fc9e1c1717a3.png';
import cwnLogo from '@/assets/cwn-logo.png';

const MontgomeryCountyConvergenceSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center px-6 py-6 bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Content */}
      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Montgomery County Collaborative Convergence
          </h1>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Cross Community */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-gray-200 shadow-lg">
            <div className="h-20 flex items-center justify-center mb-3">
              <img src={crossCommunityLogo} alt="Cross Community Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-gray-600 text-sm">Mentorship, training, and entrepreneur support</p>
          </div>

          {/* WorkSource Montgomery */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-gray-200 shadow-lg">
            <div className="h-20 flex items-center justify-center mb-3">
              <img src={worksourceMontgomeryLogo} alt="WorkSource Montgomery Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-gray-600 text-sm">Co-located American Job Center and employment services</p>
          </div>

          {/* Identity */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-gray-200 shadow-lg">
            <div className="h-20 flex items-center justify-center mb-3">
              <img src={identityYouthLogo} alt="Identity Youth Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-gray-600 text-sm">Case Management and Community Support</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mb-4">
          <p className="text-gray-700 text-base font-medium">Cross Community and Identity are members of the CWN Grant Program since its inception.</p>
        </div>

        {/* CWN Logo */}
        <div className="flex justify-center">
          <img src={cwnLogo} alt="Community Workforce Network Montgomery County" className="h-16 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default MontgomeryCountyConvergenceSlide;
