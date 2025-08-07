import React, { useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { Button } from '@/components/ui/button';
import { Download, Upload } from 'lucide-react';

const LogoExtractor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const extractLogoFromKidsCoImage = async () => {
    try {
      setIsProcessing(true);
      
      // Load the KidsCo image
      const response = await fetch('/lovable-uploads/f62fbb05-f31f-4cda-b7ae-b9647abb5edf.png');
      const blob = await response.blob();
      const imageElement = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for display
      const url = URL.createObjectURL(processedBlob);
      setProcessedImage(url);
      
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Error processing image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadProcessedImage = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'kidsco-logo-extracted.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
      <h3 className="text-lg font-semibold mb-3">KidsCo Logo Extractor</h3>
      
      <div className="space-y-3">
        <Button 
          onClick={extractLogoFromKidsCoImage}
          disabled={isProcessing}
          className="w-full"
        >
          <Upload className="w-4 h-4 mr-2" />
          {isProcessing ? 'Processing...' : 'Extract KidsCo Logo'}
        </Button>
        
        {processedImage && (
          <div className="space-y-2">
            <div className="border rounded p-2 bg-gray-50">
              <img 
                src={processedImage} 
                alt="Extracted Logo" 
                className="max-w-32 max-h-32 mx-auto"
              />
            </div>
            <Button 
              onClick={downloadProcessedImage}
              variant="outline"
              className="w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoExtractor;