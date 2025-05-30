
import React from 'react';
import { TrendingDown, Users, Home, GraduationCap, Heart } from 'lucide-react';

const ProblemSlide = () => {
  const keyAspects = [
    {
      icon: Users,
      title: "Cross-Class Connections",
      description: "Creating spaces where people from different economic backgrounds naturally interact through mixed-income developments and community centers"
    },
    {
      icon: GraduationCap,
      title: "Educational Integration",
      description: "Bringing together students from various socioeconomic backgrounds rather than segregating by income through housing or schooling patterns"
    },
    {
      icon: Heart,
      title: "Building Understanding",
      description: "Reducing prejudice and increasing empathy through meaningful interactions across economic divides"
    },
    {
      icon: TrendingDown,
      title: "Breaking Segmentation",
      description: "Addressing how modern societies become divided along economic lines with limited cross-class interaction"
    }
  ];

  return (
    <div className="w-full h-full p-8" style={{ aspectRatio: '16/9' }}>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#173e4e' }}>
          Montgomery County has a Problem
        </h2>
        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#b8832b' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold" style={{ color: '#173e4e' }}>Social economic bridging</span> connects people across different economic classes and income levels. 
            Modern societies often become segmented along economic lines with limited interaction between different income groups. 
            We create opportunities for meaningful contact and collaboration across these divides.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The result is an acute housing crisis and exhausted social and family services. In a county that still boasts being in the top 20 wealthiest in the country, there are multiple local census tracts with 30 and 40 percent child poverty. While the median household income in the county is $129,000, 70 percent of the population Cross Community serves earns less than $40,000 annually.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With median rent for a 2-bedroom apartment in Gaithersburg being $2,100 a month, upward mobility seems hopeless for most households. These problems have trended worse over the past two decades as the support infrastructure has not been able to keep up with the increasing need. The existing public and private social service infrastructure does not have the capacity, flexibility, or creativity to counter these challenges.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-semibold" style={{ color: '#173e4e' }}>
            This has produced a growing chasm of social and economic disparity and disconnection that keeps struggling residents in Montgomery County stuck in a cycle of poverty and hopelessness.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {keyAspects.map((aspect, index) => {
            const IconComponent = aspect.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    backgroundColor: '#173e4e20'
                  }}>
                    <IconComponent className="h-6 w-6" style={{ color: '#173e4e' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: '#173e4e' }}>{aspect.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{aspect.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-base text-gray-600 italic">
            Building "bridging" social capital that spans different communities, 
            creating opportunities for economic mobility and social cohesion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;
