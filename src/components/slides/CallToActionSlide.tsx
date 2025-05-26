
import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToActionSlide = () => {
  return (
    <div className="h-full p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#173e4e' }}>Get Involved</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#b8832b' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in building stronger, more resilient communities in Montgomery County
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Call to Action */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#173e4e' }}>How You Can Help</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl border" style={{ backgroundColor: '#8aa1a920', borderColor: '#8aa1a9' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#173e4e' }}>
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#173e4e' }}>Volunteer</h4>
                  <p className="text-gray-600">Join our community programs and initiatives</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl border" style={{ backgroundColor: '#b8832b20', borderColor: '#b8832b' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#b8832b' }}>
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#173e4e' }}>Partner</h4>
                  <p className="text-gray-600">Collaborate with us on sustainable solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl border" style={{ backgroundColor: '#8aa1a920', borderColor: '#8aa1a9' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#8aa1a9' }}>
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#173e4e' }}>Support</h4>
                  <p className="text-gray-600">Help fund our community impact programs</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-8 text-lg py-6 text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#b8832b' }}>
              Learn More About Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Right: Contact Information */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#8aa1a920' }}>
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#173e4e' }}>Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#173e4e' }}>
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#173e4e' }}>Email</p>
                  <p className="text-gray-600">info@thewellcenter.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#b8832b' }}>
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#173e4e' }}>Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8aa1a9' }}>
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#173e4e' }}>Location</p>
                  <p className="text-gray-600">Montgomery County, MD</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-xl text-white text-center" style={{ backgroundColor: '#173e4e' }}>
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
