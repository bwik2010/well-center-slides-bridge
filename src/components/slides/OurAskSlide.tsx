
import React from 'react';
import { DollarSign, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OurAskSlide = () => {
  return (
    <div className="w-full h-full flex flex-col p-8" style={{ background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)' }}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <div className="p-3 rounded-full" style={{ backgroundColor: '#173e4e' }}>
            <DollarSign className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#173e4e' }}>
          Our Ask
        </h1>
        <div className="w-16 h-1 mx-auto mb-4" style={{ backgroundColor: '#b8832b' }}></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Supporting The Well Center's mission to bridge communities and create lasting impact
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6">
        {/* Left Column - Main Ask */}
        <div className="flex-1">
          <Card className="h-full border-2 transition-transform duration-300 hover:scale-105" 
                style={{ borderColor: '#b8832b' }}>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3">
                <Target className="h-6 w-6" style={{ color: '#173e4e' }} />
              </div>
              <CardTitle className="text-xl" style={{ color: '#173e4e' }}>
                Funding Request
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-bold mb-4" style={{ color: '#b8832b' }}>
                $1.6M
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Grant funding needed over three years
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
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
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3">
                <TrendingUp className="h-6 w-6" style={{ color: '#173e4e' }} />
              </div>
              <CardTitle className="text-lg" style={{ color: '#173e4e' }}>
                Revenue Self-Sufficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#b8832b' }}>
                    69%
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Operational costs covered by earned revenue after year 3
                  </p>
                </div>
                
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: '69%', 
                      background: 'linear-gradient(90deg, #b8832b 0%, #173e4e 100%)'
                    }}
                  ></div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1" style={{ color: '#173e4e' }}>
                    80%
                  </div>
                  <p className="text-xs text-gray-500">
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
