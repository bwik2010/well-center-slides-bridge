import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Presentation, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TitleSlide from './slides/TitleSlide';
import MissionSlide from './slides/MissionSlide';
import BridgeSlide from './slides/BridgeSlide';
import ContentSlide from './slides/ContentSlide';
import ImpactSlide from './slides/ImpactSlide';
import FinancialProjectionsSlide from './slides/FinancialProjectionsSlide';
import CallToActionSlide from './slides/CallToActionSlide';

const slides = [
  { id: 1, component: TitleSlide, title: "Title Slide" },
  { id: 2, component: MissionSlide, title: "Mission Statement" },
  { id: 3, component: BridgeSlide, title: "Bridge Diagram" },
  { id: 4, component: ContentSlide, title: "Content Slide" },
  { id: 5, component: ImpactSlide, title: "Impact & Results" },
  { id: 6, component: FinancialProjectionsSlide, title: "Financial Projections" },
  { id: 7, component: CallToActionSlide, title: "Call to Action" }
];

const PresentationTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
