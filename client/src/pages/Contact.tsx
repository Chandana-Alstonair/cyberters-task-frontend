import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full">


          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">ADDRESS:</h3>
                    <p className="text-gray-600">
                      #28 Third floor MCHS Layout<br />
                      KV Jayaram Road, Jakkur<br />
                      Bangalore 560064
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">PHONE:</h3>
                    <p className="text-gray-600">+918068447416</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">EMAIL:</h3>
                    <p className="text-gray-600">info@alstonair.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">WEBSITE:</h3>
                    <p className="text-gray-600">cyberters.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-300/30">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              
              <form className="space-y-4">
                <Input 
                  placeholder="Name" 
                  className="bg-white/90 border-blue-300/50 text-gray-900 placeholder:text-gray-500"
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/90 border-blue-300/50 text-gray-900 placeholder:text-gray-500"
                />
                <Input 
                  placeholder="Subject" 
                  className="bg-white/90 border-blue-300/50 text-gray-900 placeholder:text-gray-500"
                />
                <Textarea 
                  placeholder="Message" 
                  rows={6}
                  className="bg-white/90 border-blue-300/50 text-gray-900 placeholder:text-gray-500 resize-none"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}