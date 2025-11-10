import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <div className="mb-4">
              <Logo size="md" showText={false} />
            </div>
            <p className="text-gray-600 mb-2">
              Next-generation AI-powered cybersecurity platform protecting organizations worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#4ca2b5] transition"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#4ca2b5] transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#4ca2b5] transition"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-2">Product</h3>
            <ul className="space-y-1">
              <li><a href="/product" className="hover:text-[#4ca2b5] transition">View All Products</a></li>
              {['AI Threat Detection', 'Audit & Compliance', 'Automation', 'Risk Management', 'Cloud Security'].map((item, i) => (
                <li key={i}><a href="/product" className="hover:text-[#4ca2b5] transition">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><a href="/resources" className="hover:text-[#4ca2b5] transition">View All Resources</a></li>
              {['Documentation', 'API Reference', 'Security Blog', 'Case Studies', 'Webinars'].map((item, i) => (
                <li key={i}><a href="/resources" className="hover:text-[#4ca2b5] transition">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-2">Contact</h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@alstonair.com" className="hover:text-[#4ca2b5] transition">info@alstonair.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+918068447416</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>#28 Third floor MCHS Layout KV Jayaram Road, Jakkur Bangalore 560064</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-sm">© 2025 CyberMatrix AI Shield. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#4ca2b5] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#4ca2b5] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#4ca2b5] transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}