
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
    <div className="w-full h-full p-6 flex flex-col" style={{ aspectRatio: '16/9' }}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 rounded-full" style={{ backgroundColor: '#173e4e20' }}>
            <BookOpen className="h-6 w-6" style={{ color: '#173e4e' }} />
          </div>
          <h2 className="text-3xl font-bold" style={{ color: '#173e4e' }}>
            Citations & References
          </h2>
        </div>
        <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      {/* Citations List */}
      <div className="flex-1 space-y-4 overflow-y-auto">
        {citations.map((citation) => (
          <div 
            key={citation.number}
            className="bg-white rounded-lg p-4 shadow-md border-l-4 hover:shadow-lg transition-all duration-300"
            style={{ borderLeftColor: '#173e4e' }}
          >
            <div className="flex items-start gap-3">
              {/* Citation Number */}
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-0.5"
                style={{ backgroundColor: '#173e4e' }}
              >
                {citation.number}
              </div>
              
              {/* Citation Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {citation.author && (
                      <p className="text-xs font-medium text-gray-600 mb-1">
                        {citation.author}
                      </p>
                    )}
                    <h3 className="text-sm font-bold mb-1 leading-tight" style={{ color: '#173e4e' }}>
                      {citation.title}
                    </h3>
                    {citation.date && (
                      <p className="text-xs text-gray-500 mb-1">
                        {citation.date}
                      </p>
                    )}
                    <p className="text-xs text-gray-600 mb-2 leading-tight">
                      {citation.description}
                    </p>
                  </div>
                  
                  {/* External Link */}
                  <a 
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium hover:opacity-80 transition-opacity flex-shrink-0"
                    style={{ backgroundColor: '#b8832b20', color: '#b8832b' }}
                  >
                    <ExternalLink className="h-3 w-3" />
                    View
                  </a>
                </div>
                
                {/* URL */}
                <div className="bg-gray-50 p-2 rounded-md">
                  <p className="text-xs text-gray-500 font-mono break-all leading-tight">
                    {citation.url}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Accent */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1.5 rounded-full" style={{ backgroundColor: '#173e4e' }}></div>
          <div className="w-6 h-1.5 rounded-full" style={{ backgroundColor: '#b8832b' }}></div>
          <div className="w-6 h-1.5 rounded-full" style={{ backgroundColor: '#8aa1a9' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CitationsSlide;
