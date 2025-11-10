import { Shield, Users, Award, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">
            Your Digital Shield
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Cyberters Pro is a next-generation AI-powered cybersecurity platform that combines artificial intelligence, 
              blockchain verification, and quantum-resistant protection. Our comprehensive ecosystem features eight integrated 
              dashboards providing complete visibility and control over your organization's security posture.
            </p>
            <p className="text-gray-600 mb-4">
              Built with cutting-edge technologies including machine learning algorithms, blockchain-verified audit trails, 
              and automated SOAR workflows, we deliver real-time threat detection, predictive analytics, and automated 
              incident response capabilities.
            </p>
            <p className="text-gray-600">
              From AI intelligence and threat detection to compliance automation and cyber training, Cyberters Pro 
              offers end-to-end cybersecurity solutions trusted by organizations across healthcare, finance, government, 
              and enterprise sectors worldwide.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/690630357960f44207f5d769_1762013300442_a9d77a32.webp" 
              alt="Cybersecurity Dashboard" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-[#205fde] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Security</h3>
            <p className="text-gray-600">AI-powered threat detection and quantum-resistant protection</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-[#205fde] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600">Cybersecurity professionals with decades of experience</p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-[#205fde] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Recognition</h3>
            <p className="text-gray-600">Award-winning solutions trusted by leading organizations</p>
          </div>
          <div className="text-center p-6">
            <Globe className="w-12 h-12 text-[#205fde] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">Protecting organizations worldwide across all industries</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Platform Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8 Integrated Dashboards</h3>
              <p className="text-gray-600 mb-4">
                AI Intelligence, Audit & Compliance, Automation & Response, Risk & Policy, Cloud & Vendor Security, 
                Cyber Training, Organization Management, and Analytics & Visualization.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced AI Capabilities</h3>
              <p className="text-gray-600">
                Zero-day protection, quantum-resistant encryption, real-time response, dark web monitoring, 
                and predictive analytics powered by machine learning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blockchain Verification</h3>
              <p className="text-gray-600 mb-4">
                Immutable audit trails, digital attestation, and compliance automation with blockchain-verified 
                evidence management for complete transparency.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Ready</h3>
              <p className="text-gray-600">
                ISO 27001, SOC 2 Type II, GDPR compliant with role-based access control, MFA/SSO integration, 
                and 24/7 continuous monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}