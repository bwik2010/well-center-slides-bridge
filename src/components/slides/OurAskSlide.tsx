
import React from 'react';
import { DollarSign, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OurAskSlide = () => {
  return (
    <div className="w-full h-full flex flex-col p-6" style={{ background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)' }}>
      {/* Header */}
      <div className="text-center mb-4">
        <div className="flex justify-center mb-2">
          <div className="p-2 rounded-full" style={{ backgroundColor: '#173e4e' }}>
            <DollarSign className="h-6 w-6 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#173e4e' }}>
          Our Ask
        </h1>
        <div className="w-12 h-1 mx-auto mb-3" style={{ backgroundColor: '#b8832b' }}></div>
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          Supporting The Well Center's mission to bridge communities and create lasting impact
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-4">
        {/* Left Column - Main Ask */}
        <div className="flex-1">
          <Card className="h-full border-2 transition-transform duration-300 hover:scale-105" 
                style={{ borderColor: '#b8832b' }}>
            <CardHeader className="text-center pb-3">
              <div className="flex justify-center mb-2">
                <Target className="h-5 w-5" style={{ color: '#173e4e' }} />
              </div>
              <CardTitle className="text-lg" style={{ color: '#173e4e' }}>
                Funding Request
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-3" style={{ color: '#b8832b' }}>
                $1.6M
              </div>
              <p className="text-base text-gray-700 mb-3">
                Grant funding needed over three years
              </p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">
                  This investment will support operational costs during our critical growth phase
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sustainability Metrics */}
        <div className="flex-1">
          <Card className="h-full border-2 transition-transform duration-300 hover:scale-105" 
                style={{ borderColor: '#173e4e' }}>
            <CardHeader className="text-center pb-3">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-5 w-5" style={{ color: '#173e4e' }} />
              </div>
              <CardTitle className="text-lg" style={{ color: '#173e4e' }}>
                Revenue Self-Sufficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2" style={{ color: '#b8832b' }}>
                    69%
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Operational costs covered by earned revenue after year 3
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1" style={{ color: '#173e4e' }}>
                    80%
                  </div>
                  <p className="text-base font-semibold text-gray-700">
                    By 2030
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurAskSlide;
