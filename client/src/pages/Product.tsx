import { Brain, FileCheck, Zap, Shield, Cloud, GraduationCap, Users, BarChart, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';

const products = [
  {
    title: 'AI Threat Detection',
    desc: 'Advanced machine learning algorithms for real-time threat identification and prediction',
    icon: Brain,
    id: 'ai-threat-detection',
    features: ['Real-time anomaly detection', 'Predictive threat analytics', 'Dark web monitoring', 'Zero-day protection'],
    pricing: 'Starting at $299/month',
    deployment: 'Cloud, On-premise, Hybrid'
  },
  {
    title: 'Audit & Compliance',
    desc: 'Blockchain-verified audit trails with automated compliance checking and reporting',
    icon: FileCheck,
    id: 'audit-compliance',
    features: ['Blockchain audit trails', 'Automated compliance checks', 'Digital attestation', 'Regulatory reporting'],
    pricing: 'Starting at $199/month',
    deployment: 'Cloud, On-premise'
  },
  {
    title: 'SOAR Automation',
    desc: 'Security orchestration and automated response workflows with intelligent incident handling',
    icon: Zap,
    id: 'automation',
    features: ['Playbook automation', 'Incident response', 'Patch management', 'Custom workflows'],
    pricing: 'Starting at $399/month',
    deployment: 'Cloud, Hybrid'
  },
  {
    title: 'Risk Management',
    desc: 'AI-driven risk scoring with policy enforcement and predictive forecasting',
    icon: Shield,
    id: 'risk-management',
    features: ['AI risk scoring', 'Policy automation', 'Predictive forecasting', 'KPI tracking'],
    pricing: 'Starting at $249/month',
    deployment: 'Cloud, On-premise, Hybrid'
  },
  {
    title: 'Cloud Security',
    desc: 'Multi-cloud protection with vendor risk scoring and cyber insurance readiness',
    icon: Cloud,
    id: 'cloud-security',
    features: ['Multi-cloud monitoring', 'Vendor risk assessment', 'Insurance readiness', 'Configuration management'],
    pricing: 'Starting at $349/month',
    deployment: 'Cloud'
  },
  {
    title: 'Cyber Training',
    desc: 'Gamified security awareness training with certifications and progress tracking',
    icon: GraduationCap,
    id: 'cyber-training',
    features: ['Interactive modules', 'Gamification', 'Certifications', 'Progress analytics'],
    pricing: 'Starting at $99/month',
    deployment: 'Cloud'
  }
];

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">
            Cyber Safety, Guaranteed
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, i) => (
            <div key={i} id={product.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#205fde]/20 scroll-mt-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#205fde] to-[#4ca2b5] rounded-lg flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{product.desc}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#205fde] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Pricing:</span>
                  <span className="text-sm font-semibold text-[#205fde]">{product.pricing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Deployment:</span>
                  <span className="text-xs text-gray-600">{product.deployment}</span>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#205fde] to-[#4ca2b5] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
            <p className="text-gray-600 mb-4">
              Custom enterprise packages with dedicated support, advanced integrations, and tailored security solutions.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#205fde] rounded-full mr-3"></div>
                Dedicated security analysts
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#205fde] rounded-full mr-3"></div>
                Custom integrations
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#205fde] rounded-full mr-3"></div>
                24/7 premium support
              </li>
            </ul>
            <button className="px-6 py-3 bg-[#205fde] text-white rounded-lg font-semibold hover:shadow-lg transition">
              Contact Sales
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Trial</h3>
            <p className="text-gray-600 mb-4">
              Try Cyberters Pro free for 30 days with full access to all features and premium support.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#205fde] rounded-full mr-3"></div>
                No credit card required
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#205fde] rounded-full mr-3"></div>
                Full feature access
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#205fde] rounded-full mr-3"></div>
                Setup assistance included
              </li>
            </ul>
            <button className="px-6 py-3 bg-white text-[#205fde] border-2 border-[#205fde] rounded-lg font-semibold hover:bg-blue-50 transition">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Experience the power of next-generation cybersecurity
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-[#205fde] text-white rounded-lg font-semibold hover:shadow-lg transition">
              Request Demo
            </button>
            <button className="px-6 py-3 bg-white text-[#205fde] border-2 border-[#205fde] rounded-lg font-semibold hover:bg-blue-50 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}