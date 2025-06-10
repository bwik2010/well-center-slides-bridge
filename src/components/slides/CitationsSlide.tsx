
import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const CitationsSlide = () => {
  const citations = [
    {
      number: 1,
      title: "ENOUGH Disaggregated Dashboard - Montgomery",
      url: "https://embed.clearimpact.com/Scorecard/Embed/88663",
      description: "Community data dashboard for Montgomery County"
    },
    {
      number: 2,
      author: "Neilsberg",
      title: "Montgomery County, MD Median Household Income - 2024 Update",
      date: "January 11, 2024",
      url: "https://www.neilsberg.com/insights/montgomery-county-md-median-household-income/",
      description: "Statistical analysis of household income data"
    },
    {
      number: 3,
      author: "Montgomery Planning",
      title: "The Opportunity Insights Project and Economic Mobility in Montgomery County, Part 2: A Closer Look at Neighborhoods",
      date: "August 11, 2021",
      url: "https://montgomeryplanning.org/blog-design/2021/08/the-opportunity-insights-project-and-economic-mobility-in-montgomery-county-part-2-a-closer-look-at-neighborhoods/",
      description: "Economic mobility research and neighborhood analysis"
    }
  ];

  return (
    <div className="w-full h-full p-8 flex flex-col" style={{ aspectRatio: '16/9' }}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: '#173e4e20' }}>
            <BookOpen className="h-8 w-8" style={{ color: '#173e4e' }} />
          </div>
          <h2 className="text-4xl font-bold" style={{ color: '#173e4e' }}>
            Citations & References
          </h2>
        </div>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      {/* Citations List */}
      <div className="flex-1 space-y-6">
        {citations.map((citation) => (
          <div 
            key={citation.number}
            className="bg-white rounded-xl p-6 shadow-lg border-l-4 hover:shadow-xl transition-all duration-300"
            style={{ borderLeftColor: '#173e4e' }}
          >
            <div className="flex items-start gap-4">
              {/* Citation Number */}
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1"
                style={{ backgroundColor: '#173e4e' }}
              >
                {citation.number}
              </div>
              
              {/* Citation Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {citation.author && (
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {citation.author}
                      </p>
                    )}
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#173e4e' }}>
                      {citation.title}
                    </h3>
                    {citation.date && (
                      <p className="text-sm text-gray-500 mb-2">
                        {citation.date}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mb-3">
                      {citation.description}
                    </p>
                  </div>
                  
                  {/* External Link */}
                  <a 
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: '#b8832b20', color: '#b8832b' }}
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Source
                  </a>
                </div>
                
                {/* URL */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 font-mono break-all">
                    {citation.url}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Accent */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#173e4e' }}></div>
          <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
          <div className="w-8 h-2 rounded-full" style={{ backgroundColor: '#8aa1a9' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CitationsSlide;
