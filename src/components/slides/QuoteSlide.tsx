
import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8" style={{ aspectRatio: '16/9' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#173e4e' }}
          >
            <Quote className="h-8 w-8 text-white" />
          </div>
        </div>
        
        {/* Main Quote */}
        <div 
          className="rounded-2xl p-8 mb-6 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)'
          }}
        >
          <blockquote className="text-white">
            <p className="text-2xl leading-relaxed font-medium mb-4">
              "We all know the truth: more connects us than separates us. But in times of crisis the wise build bridges, while the foolish build barriers."
            </p>
          </blockquote>
          
          {/* Attribution */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-0.5" style={{ backgroundColor: '#b8832b' }}></div>
            <cite className="text-lg font-semibold not-italic" style={{ color: '#b8832b' }}>
              King T'Challa, Black Panther
            </cite>
            <div className="w-12 h-0.5" style={{ backgroundColor: '#b8832b' }}></div>
          </div>
          <p className="text-white opacity-75 text-sm mt-2">2018</p>
        </div>
        
        {/* Bottom Accent */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#173e4e' }}></div>
            <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
            <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#8aa1a9' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSlide;
