
import React, { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '../../utils/backgroundRemoval';

const TitleSlide = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        // Fetch the original logo
        const response = await fetch('/lovable-uploads/cdf9fd12-ac7a-42a5-9118-1cab3e12b551.png');
        const blob = await response.blob();
        
        // Load the image
        const image = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(image);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original image
        setProcessedLogoUrl('/lovable-uploads/cdf9fd12-ac7a-42a5-9118-1cab3e12b551.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center relative rounded-xl text-white" style={{
      background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
      aspectRatio: '16/9'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-12 w-24 h-24 rounded-full" style={{
          backgroundColor: '#b8832b'
        }}></div>
        <div className="absolute bottom-12 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 rounded-full" style={{
          backgroundColor: '#b8832b'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl px-8">
        <div className="mb-6">
          <div className="w-64 h-64 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg p-6">
            {isProcessing ? (
              <div className="text-white text-lg">Processing logo...</div>
            ) : (
              <img 
                src={processedLogoUrl || '/lovable-uploads/cdf9fd12-ac7a-42a5-9118-1cab3e12b551.png'} 
                alt="The Well Center Logo" 
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          The Well Center
        </h1>
        
        <p className="text-xl mb-6 opacity-90 leading-relaxed max-w-4xl">
          Bridging social and economic gaps that build sustainable living and community resilience in Montgomery County
        </p>
        
        <div className="flex items-center justify-center gap-4 text-base opacity-80">
          <span>Bridging Gaps</span>
          <span style={{
            color: '#b8832b'
          }}>•</span>
          <span>Generating Wealth</span>
          <span style={{
            color: '#b8832b'
          }}>•</span>
          <span>Creating Sustainable Living</span>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
