import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
const CallToActionSlide = () => {
  return <div className="w-full h-full p-6" style={{
    aspectRatio: '16/9'
  }}>
      <div className="max-w-6xl mx-auto h-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-3" style={{
          color: '#173e4e'
        }}>Help us build the bridge!</h2>
          <div className="w-20 h-1 mx-auto mb-4" style={{
          backgroundColor: '#b8832b'
        }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in building stronger, more resilient communities in Montgomery County
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 items-center h-4/5">
          {/* Left: Call to Action */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{
            color: '#173e4e'
          }}>How You Can Help</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl border" style={{
              backgroundColor: '#8aa1a920',
              borderColor: '#8aa1a9'
            }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                backgroundColor: '#173e4e'
              }}>
                  <span className="text-white font-bold text-xs">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm" style={{
                  color: '#173e4e'
                }}>Join the Well team</h4>
                  <p className="text-gray-600 text-xs">Join our community programs and initiatives</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-xl border" style={{
              backgroundColor: '#b8832b20',
              borderColor: '#b8832b'
            }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                backgroundColor: '#b8832b'
              }}>
                  <span className="text-white font-bold text-xs">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm" style={{
                  color: '#173e4e'
                }}>Partner</h4>
                  <p className="text-gray-600 text-xs">Collaborate with us on sustainable solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-xl border" style={{
              backgroundColor: '#8aa1a920',
              borderColor: '#8aa1a9'
            }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                backgroundColor: '#8aa1a9'
              }}>
                  <span className="text-white font-bold text-xs">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm" style={{
                  color: '#173e4e'
                }}>Support</h4>
                  <p className="text-gray-600 text-xs">Help fund this project and build the bridge!</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 text-base py-4 text-white hover:opacity-90 transition-opacity" style={{
            backgroundColor: '#b8832b'
          }}>
              Learn More About Our Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right: Contact Information */}
          <div className="rounded-2xl p-6" style={{
          backgroundColor: '#8aa1a920'
        }}>
            <h3 className="text-xl font-semibold mb-4 text-center" style={{
            color: '#173e4e'
          }}>Contact Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                backgroundColor: '#173e4e'
              }}>
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm" style={{
                  color: '#173e4e'
                }}>Email</p>
                  <p className="text-gray-600 text-sm">info@thewellcenter.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                backgroundColor: '#b8832b'
              }}>
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm" style={{
                  color: '#173e4e'
                }}>Phone</p>
                  <p className="text-gray-600 text-sm">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                backgroundColor: '#8aa1a9'
              }}>
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm" style={{
                  color: '#173e4e'
                }}>Location</p>
                  <p className="text-gray-600 text-sm">630 E. Diamond Ave Gaithersburg, MD 20877</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-3 rounded-xl text-white text-center" style={{
            backgroundColor: '#173e4e'
          }}>
              <p className="font-medium text-sm">Ready to make a difference?</p>
              <p className="text-xs opacity-90 mt-1">Reach out today to get started!</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CallToActionSlide;