
import React from 'react';
import { Target, Users, Leaf, Building } from 'lucide-react';

const MissionSlide = () => {
  return (
    <div className="h-full p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-10 border border-emerald-100">
          <div className="flex items-center justify-center mb-6">
            <Target className="h-12 w-12 text-emerald-600" />
          </div>
          <p className="text-2xl text-gray-700 leading-relaxed text-center font-medium">
            To bridge social and economic gaps that build sustainable living and community resilience in Montgomery County
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Connection</h3>
            <p className="text-gray-600">Building stronger community bonds and social networks</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainable Living</h3>
            <p className="text-gray-600">Promoting environmentally conscious and sustainable practices</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Economic Resilience</h3>
            <p className="text-gray-600">Creating economic opportunities and financial stability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSlide;
