
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Presentation, TrendingUp, Users, DollarSign, Printer, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TitleSlide from './slides/TitleSlide';
import TheBackgroundSlide from './slides/TheBackgroundSlide';
import MissionSlide from './slides/MissionSlide';
import TheProblemSlide from './slides/TheProblemSlide';
import BridgeSlide from './slides/BridgeSlide';
import BridgeTeamSlide from './slides/BridgeTeamSlide';
import ContentSlide from './slides/ContentSlide';

import SourcesOfRevenueSlide from './slides/SourcesOfRevenueSlide';
import FinancialProjectionsSlide from './slides/FinancialProjectionsSlide';
import CallToActionSlide from './slides/CallToActionSlide';
import QuoteSlide from './slides/QuoteSlide';
import CitationsSlide from './slides/CitationsSlide';
import KidsCoBonaFidesSlide from './slides/KidsCoBonaFidesSlide';
import WeavingImpactBonaFidesSlide from './slides/WeavingImpactBonaFidesSlide';
import MontgomeryCountyConvergenceSlide from './slides/MontgomeryCountyConvergenceSlide';


const slides = [
  { id: 1, component: TitleSlide, title: "Title Slide" },
  { id: 2, component: TheBackgroundSlide, title: "The Background Story" },
  { id: 3, component: TheProblemSlide, title: "The Problem" },
  { id: 4, component: MissionSlide, title: "Mission Statement" },
  { id: 5, component: KidsCoBonaFidesSlide, title: "KidsCo Inc. Bona Fides" },
  { id: 6, component: WeavingImpactBonaFidesSlide, title: "Weaving Impact Bona Fides" },
  { id: 7, component: MontgomeryCountyConvergenceSlide, title: "Montgomery County Community Convergence" },
  { id: 8, component: ContentSlide, title: "Key Partners & Collaborations" },
  
  { id: 9, component: SourcesOfRevenueSlide, title: "Sources of Revenue" },
  { id: 10, component: FinancialProjectionsSlide, title: "Financial Projections" },
  { id: 11, component: QuoteSlide, title: "Inspirational Quote" },
  { id: 12, component: CallToActionSlide, title: "Call to Action" },
  { id: 13, component: CitationsSlide, title: "Citations & References" },
  { id: 14, component: BridgeSlide, title: "Bridge Diagram" },
  
];

const PresentationTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const CurrentSlideComponent = slides[currentSlide].component;
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="w-full h-full max-w-none bg-white">
          <CurrentSlideComponent />
        </div>
        
        {/* Fullscreen controls overlay */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            onClick={prevSlide}
            variant="outline"
            size="sm"
            className="bg-white/80 backdrop-blur-sm"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            onClick={nextSlide}
            variant="outline"
            size="sm"
            className="bg-white/80 backdrop-blur-sm"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <Button 
            onClick={toggleFullscreen}
            variant="outline"
            size="sm"
            className="bg-white/80 backdrop-blur-sm"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Slide counter overlay */}
        <div className="absolute bottom-4 right-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentSlide + 1} of {slides.length}
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-6" style={{ background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#173e4e' }}>
              <Presentation className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#173e4e' }}>The Well Center</h1>
              <p className="text-sm text-gray-600">Presentation Template</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Print View Link */}
            <Link to="/print-view">
              <Button 
                variant="outline"
                className="flex items-center gap-2 hover:opacity-80"
                style={{ borderColor: '#173e4e', color: '#173e4e' }}
              >
                <Printer className="h-4 w-4" />
                Print View
              </Button>
            </Link>
            
            {/* PDF View Link */}
            <Link to="/pdf-view">
              <Button 
                variant="outline"
                className="flex items-center gap-2 hover:opacity-80"
                style={{ borderColor: '#b8832b', color: '#173e4e' }}
              >
                <Printer className="h-4 w-4" />
                PDF Version
              </Button>
            </Link>
            
            {/* Bridge Team Link */}
            <Link to="/bridge-team">
              <Button 
                variant="outline"
                className="flex items-center gap-2 hover:opacity-80"
                style={{ borderColor: '#173e4e', color: '#173e4e' }}
              >
                <Users className="h-4 w-4" />
                Bridge Team
              </Button>
            </Link>
            
            {/* Financial Projections Link */}
            <Link to="/financial-projections">
              <Button 
                variant="outline"
                className="flex items-center gap-2 hover:opacity-80"
                style={{ borderColor: '#b8832b', color: '#173e4e' }}
              >
                <TrendingUp className="h-4 w-4" />
                Financial Projections
              </Button>
            </Link>

            {/* Our Ask Link */}
            <Link to="/our-ask">
              <Button 
                variant="outline"
                className="flex items-center gap-2 hover:opacity-80"
                style={{ borderColor: '#8aa1a9', color: '#173e4e' }}
              >
                <DollarSign className="h-4 w-4" />
                Our Ask
              </Button>
            </Link>
            
            {/* Fullscreen Toggle */}
            <Button 
              onClick={toggleFullscreen}
              variant="outline"
              className="flex items-center gap-2 hover:opacity-80"
              style={{ borderColor: '#173e4e', color: '#173e4e' }}
            >
              <Maximize2 className="h-4 w-4" />
              Fullscreen
            </Button>
            
            {/* Slide Counter */}
            <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
              {currentSlide + 1} of {slides.length}
            </div>
          </div>
        </div>
        
        {/* Main Slide Area - 16:9 Aspect Ratio */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6 mx-auto" style={{ width: '100%', maxWidth: '1200px', aspectRatio: '16/9' }}>
          <CurrentSlideComponent />
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <Button 
            onClick={prevSlide}
            variant="outline"
            className="flex items-center gap-2 hover:opacity-80"
            style={{ borderColor: '#8aa1a9', color: '#173e4e' }}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          {/* Slide Thumbnails */}
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-12 h-8 rounded border-2 transition-all duration-200 ${
                  index === currentSlide 
                    ? 'border-opacity-100 opacity-100' 
                    : 'border-opacity-50 opacity-50 hover:opacity-75'
                }`}
                style={{ 
                  borderColor: '#b8832b',
                  backgroundColor: index === currentSlide ? '#b8832b20' : '#8aa1a920'
                }}
                title={slide.title}
              >
                <span className="text-xs font-medium" style={{ color: '#173e4e' }}>{index + 1}</span>
              </button>
            ))}
          </div>
          
          <Button 
            onClick={nextSlide}
            variant="outline"
            className="flex items-center gap-2 hover:opacity-80"
            style={{ borderColor: '#8aa1a9', color: '#173e4e' }}
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PresentationTemplate;
