import React from 'react';
import TitleSlide from './slides/TitleSlide';
import TheBackgroundSlide from './slides/TheBackgroundSlide';
import MissionSlide from './slides/MissionSlide';
import TheProblemSlide from './slides/TheProblemSlide';
import ContentSlide from './slides/ContentSlide';

import SourcesOfRevenueSlide from './slides/SourcesOfRevenueSlide';
import FinancialProjectionsSlide from './slides/FinancialProjectionsSlide';
import QuoteSlide from './slides/QuoteSlide';
import CallToActionSlide from './slides/CallToActionSlide';
import CitationsSlide from './slides/CitationsSlide';
import BridgeSlide from './slides/BridgeSlide';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import PartnerBonaFidesSlide from './slides/PartnerBonaFidesSlide';

const PDFPresentation = () => {
  const slides = [
    { component: TitleSlide, title: "Title Slide" },
    { component: TheBackgroundSlide, title: "The Background Story" },
    { component: TheProblemSlide, title: "The Problem" },
    { component: MissionSlide, title: "Mission Statement" },
    { component: PartnerBonaFidesSlide, title: "Partner Bona Fides" },
    { component: ContentSlide, title: "Key Partners & Collaborations" },
    
    { component: SourcesOfRevenueSlide, title: "Sources of Revenue" },
    { component: FinancialProjectionsSlide, title: "Financial Projections" },
    { component: QuoteSlide, title: "Inspirational Quote" },
    { component: CallToActionSlide, title: "Call to Action" },
    { component: CitationsSlide, title: "Citations & References" },
    { component: BridgeSlide, title: "Bridge Diagram" }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // For modern browsers, this will trigger the print dialog with save as PDF option
    window.print();
  };

  return (
    <div className="pdf-presentation">
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <Button 
          onClick={handlePrint}
          className="flex items-center gap-2"
          style={{ backgroundColor: '#173e4e', color: 'white' }}
        >
          <Printer className="h-4 w-4" />
          Print
        </Button>
        <Button 
          onClick={handleDownloadPDF}
          variant="outline"
          className="flex items-center gap-2"
          style={{ borderColor: '#173e4e', color: '#173e4e' }}
        >
          <Download className="h-4 w-4" />
          Save as PDF
        </Button>
      </div>

      {/* PDF Content */}
      <div className="pdf-content">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <div 
              key={index}
              className="pdf-slide"
              style={{
                width: '100%',
                height: '100vh',
                pageBreakAfter: index < slides.length - 1 ? 'always' : 'auto',
                pageBreakInside: 'avoid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <div 
                className="slide-container"
                style={{
                  width: '1200px',
                  height: '675px', // 16:9 aspect ratio
                  maxWidth: '100%',
                  maxHeight: '100%',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <SlideComponent />
              </div>
              
              {/* Slide number - hidden on print */}
              <div 
                className="print:hidden absolute bottom-4 right-4 text-sm text-gray-500 bg-white px-2 py-1 rounded"
                style={{ color: '#173e4e' }}
              >
                {index + 1} / {slides.length}
              </div>
            </div>
          );
        })}
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          .pdf-presentation {
            margin: 0;
            padding: 0;
          }
          
          .pdf-slide {
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
            page-break-after: always;
            page-break-inside: avoid;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .slide-container {
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Remove the page break after the last slide */
          .pdf-slide:last-child {
            page-break-after: auto !important;
          }
          
          /* Ensure videos and iframes are handled properly */
          iframe, video {
            background: #f0f0f0;
            border: 2px solid #ccc;
          }
          
          /* Print-specific color adjustments */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
        
        @page {
          size: A4 landscape;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default PDFPresentation;