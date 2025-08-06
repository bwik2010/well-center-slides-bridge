
import React from 'react';
import { Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TitleSlide from './slides/TitleSlide';
import MissionSlide from './slides/MissionSlide';
import TheProblemSlide from './slides/TheProblemSlide';
import BridgeSlide from './slides/BridgeSlide';
import BridgeTeamSlide from './slides/BridgeTeamSlide';
import ContentSlide from './slides/ContentSlide';
import ImpactSlide from './slides/ImpactSlide';
import SourcesOfRevenueSlide from './slides/SourcesOfRevenueSlide';
import FinancialProjectionsSlide from './slides/FinancialProjectionsSlide';
import OurAskSlide from './slides/OurAskSlide';
import CallToActionSlide from './slides/CallToActionSlide';
import QuoteSlide from './slides/QuoteSlide';
import CitationsSlide from './slides/CitationsSlide';
import PartnerBonaFidesSlide from './slides/PartnerBonaFidesSlide';

const slides = [
  { id: 1, component: TitleSlide, title: "Title Slide" },
  { id: 2, component: TheProblemSlide, title: "The Problem" },
  { id: 3, component: MissionSlide, title: "Mission Statement" },
  { id: 4, component: BridgeSlide, title: "Bridge Diagram" },
  { id: 5, component: ContentSlide, title: "Key Partners & Collaborations" },
  { id: 6, component: PartnerBonaFidesSlide, title: "Partner Bona Fides" },
  { id: 7, component: ImpactSlide, title: "Impact & Results" },
  { id: 8, component: SourcesOfRevenueSlide, title: "Sources of Revenue" },
  { id: 9, component: FinancialProjectionsSlide, title: "Financial Projections" },
  { id: 10, component: OurAskSlide, title: "Our Ask" },
  { id: 11, component: BridgeTeamSlide, title: "Bridge Team" },
  { id: 12, component: QuoteSlide, title: "Inspirational Quote" },
  { id: 13, component: CallToActionSlide, title: "Call to Action" },
  { id: 14, component: CitationsSlide, title: "Citations & References" }
];

const PrintView = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print Header - Only visible on screen */}
      <div className="print:hidden sticky top-0 bg-white border-b shadow-sm z-10 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#173e4e' }}>
              <Printer className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#173e4e' }}>Print View</h1>
              <p className="text-sm text-gray-600">The Well Center Presentation</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 hover:opacity-90 transition-opacity"
                style={{ borderColor: '#173e4e', color: '#173e4e' }}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Presentation
              </button>
            </Link>
            
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#173e4e' }}
            >
              <Printer className="h-4 w-4" />
              Print / Save as PDF
            </button>
          </div>
        </div>
      </div>

      {/* Print Content */}
      <div className="max-w-6xl mx-auto p-4 space-y-8 print:space-y-0 print:p-0">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <div 
              key={slide.id} 
              className="print:break-before-page print:break-after-page"
            >
              {/* Slide Number and Title - Only visible when printing */}
              <div className="hidden print:block text-center mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#173e4e' }}>
                  {index + 1}. {slide.title}
                </h2>
                <div className="w-20 h-0.5 mx-auto mt-2" style={{ backgroundColor: '#b8832b' }}></div>
              </div>
              
              {/* Slide Content */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm print:border-0 print:shadow-none print:rounded-none">
                <SlideComponent />
              </div>
            </div>
          );
        })}
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: letter;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          .print\\:break-before-page {
            break-before: page;
          }
          
          .print\\:break-after-page {
            break-after: page;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintView;
