
import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToActionSlide = () => {
  return (
    <div className="h-full p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in building stronger, more resilient communities in Montgomery County
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Call to Action */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">How You Can Help</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Volunteer</h4>
                  <p className="text-gray-600">Join our community programs and initiatives</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl border border-teal-100">
                <div className="bg-teal-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Partner</h4>
                  <p className="text-gray-600">Collaborate with us on sustainable solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Support</h4>
                  <p className="text-gray-600">Help fund our community impact programs</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
              Learn More About Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Right: Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">info@thewellcenter.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Montgomery County, MD</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-emerald-600 rounded-xl text-white text-center">
              <p className="font-medium">Ready to make a difference?</p>
              <p className="text-sm opacity-90 mt-1">Reach out today to get started!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSlide;
