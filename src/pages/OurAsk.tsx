
import React from 'react';
import { DollarSign, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurAsk = () => {
  return (
    <div className="min-h-screen p-6" style={{ background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-white/20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#173e4e' }}>
                <DollarSign className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4" style={{ color: '#173e4e' }}>
              Our Ask
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#b8832b' }}></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Supporting The Well Center's mission to bridge communities and create lasting impact
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Main Ask */}
            <div className="space-y-6">
              <Card className="border-2 transition-transform duration-300 hover:scale-105" 
                    style={{ borderColor: '#b8832b' }}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <Target className="h-8 w-8" style={{ color: '#173e4e' }} />
                  </div>
                  <CardTitle className="text-2xl" style={{ color: '#173e4e' }}>
                    Funding Request
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-6xl font-bold mb-4" style={{ color: '#b8832b' }}>
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
            <div className="space-y-6">
              <Card className="border-2 transition-transform duration-300 hover:scale-105" 
                    style={{ borderColor: '#173e4e' }}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <TrendingUp className="h-8 w-8" style={{ color: '#173e4e' }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: '#173e4e' }}>
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

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link to="/financial-projections">
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                style={{ borderColor: '#8aa1a9', color: '#173e4e' }}
              >
                View Financial Projections
              </Button>
            </Link>
            <Link to="/">
              <Button 
                className="flex items-center gap-2"
                style={{ backgroundColor: '#173e4e', color: 'white' }}
              >
                Back to Presentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAsk;
