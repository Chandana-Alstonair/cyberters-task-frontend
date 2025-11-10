import { motion } from 'framer-motion';
import { Lock, Eye, Shield, Brain, Zap, FileCheck, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const features = [
  {
    title: 'AI Intelligence & Threat Detection',
    description: 'Advanced machine learning algorithms for real-time threat identification and prediction. Our AI-powered system continuously monitors network traffic, analyzes behavioral patterns, and detects anomalies that could indicate potential security threats.',
    image: '/ai-threat-intelloigence.png',
    features: [
      'Real-time anomaly detection using machine learning',
      'Predictive analytics for threat forecasting',
      'Dark web monitoring for credential leaks',
      'Zero-day exploit protection',
      'Behavioral analysis and pattern recognition',
      'Automated threat intelligence gathering'
    ]
  },
  {
    title: 'Audit & Compliance',
    description: 'Blockchain-verified audit trails with automated compliance checking and reporting. Ensure regulatory compliance with immutable records and automated attestation processes.',
    image: '/audit-compliance.png',
    features: [
      'Blockchain-verified audit trails',
      'Automated compliance checking',
      'Digital attestation and signatures',
      'Regulatory framework support (ISO, GDPR, SOC 2)',
      'Evidence management and retention',
      'Compliance dashboard and reporting'
    ]
  },
  {
    title: 'Automation & Response',
    description: 'SOAR workflows with intelligent incident response and automated patch management. Streamline security operations with automated playbooks and response protocols.',
    image: '/automation-and-response.png',
    features: [
      'SOAR workflow automation',
      'Intelligent incident response',
      'Automated patch management',
      'Playbook builder and customization',
      'Root cause analysis',
      'Integration with security tools'
    ]
  },
  {
    title: 'Risk & Policy Management',
    description: 'AI-driven risk scoring with policy enforcement and predictive forecasting. Comprehensive risk assessment and policy management for proactive security governance.',
    image: '/risk and policy.png',
    features: [
      'AI-driven risk scoring and assessment',
      'Policy automation and enforcement',
      'Predictive risk forecasting',
      'KPI tracking and monitoring',
      'Risk mitigation strategies',
      'Compliance policy management'
    ]
  },
  {
    title: 'Cloud & Vendor Security',
    description: 'Multi-cloud protection with vendor risk scoring and cyber insurance readiness. Comprehensive security for cloud environments and third-party vendor relationships.',
    image: '/cloud-vendor.png',
    features: [
      'Multi-cloud security monitoring',
      'Vendor risk assessment and scoring',
      'Third-party security evaluation',
      'Cloud configuration management',
      'Cyber insurance readiness assessment',
      'Supply chain security monitoring'
    ]
  },
  {
    title: 'Cyber Training',
    description: 'Gamified security awareness training with certifications and leaderboards. Interactive training modules designed to enhance security awareness across your organization.',
    image: '/cyber-training.png',
    features: [
      'Interactive training modules',
      'Gamification and leaderboards',
      'Security awareness certifications',
      'Progress tracking and analytics',
      'Phishing simulation campaigns',
      'Customizable training content'
    ]
  },
  {
    title: 'Organization Management',
    description: 'Role-based access control with MFA/SSO and comprehensive user management. Advanced identity and access management for secure organizational operations.',
    image: '/Oorganizations-mgnt.png',
    features: [
      'Role-based access control (RBAC)',
      'Multi-factor authentication (MFA)',
      'Single sign-on (SSO) integration',
      'User lifecycle management',
      'Access monitoring and analytics',
      'Privileged access management'
    ]
  },
  {
    title: 'Analytics & Visualization',
    description: 'AI-driven insights with custom reports and predictive dashboards. Comprehensive analytics platform for security intelligence and business insights.',
    image: '/analytics-visualization.png',
    features: [
      'Custom report generation',
      'Real-time security analytics',
      'Predictive threat insights',
      'Interactive data visualization',
      'Executive dashboards',
      'Automated reporting and alerts'
    ]
  }
];



const docsMap: Record<string, { intro: string; points: string[] }> = {
  'ai-intelligence': {
    intro: 'AI-driven threat detection: anomalies, alerts, and live threat mapping.',
    points: ['Endpoints: GET /api/threats, GET /api/alerts', 'Widgets: Summary cards, alerts feed, geo map', 'Risk scoring with trend charts']
  },
  'audit-compliance': {
    intro: 'Immutable audits with automated checklists and attestations.',
    points: ['Evidence versioning + hash verification', 'Scheduling with calendar view', 'Digital attestation workflows']
  },
  'automation': {
    intro: 'SOAR playbooks, incident response, and patch automation.',
    points: ['Drag-and-drop playbooks', 'RCA generator + PDF export', 'Patch status overview and bulk actions']
  },
  'risk-policy': {
    intro: 'AI risk scoring, forecasting and policy enforcement.',
    points: ['Risk heatmaps and trends', 'Policy templates and enforcement logs', 'Predictive insights panel']
  },
  'cloud-vendor': {
    intro: 'Cloud posture monitoring and vendor risk scoring.',
    points: ['Cloud API integrations', 'Vendor verification and scoring', 'Insurance readiness score']
  },
  'training': {
    intro: 'Interactive modules, quizzes, and certificates.',
    points: ['Gamified challenges', 'Auto-grading with certificates', 'Leaderboard and progress stats']
  },
  'organization': {
    intro: 'Users, roles, MFA/SSO, and notifications.',
    points: ['RBAC matrix', 'MFA/SSO providers', 'Audit log viewer']
  },
  'analytics': {
    intro: 'Dashboards, KPIs, and predictive analytics.',
    points: ['Executive overview', 'Trend analyzer', 'Report builder and scheduler']
  }
};

export default function Features() {
  const [openDoc, setOpenDoc] = useState<string | null>(null);

  useEffect(() => {
    const setFromHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h && docsMap[h]) setOpenDoc(h); else setOpenDoc(null);
    };
    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">
            Elevate Your Productivity
          </h1>
        </div>

        <div className="space-y-20 mb-16">
          {features.map((feature, i) => (
            <motion.div
              id={[
                'ai-intelligence',
                'audit-compliance',
                'automation',
                'risk-policy',
                'cloud-vendor',
                'training',
                'organization',
                'analytics'
              ][i]}
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {feature.features.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <div className="w-2 h-2 bg-[#205fde] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                

              </div>
              
              <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                {/* Inline documentation panel when hash matches this section */}
                {(() => {
                  const slug = [
                    'ai-intelligence',
                    'audit-compliance',
                    'automation',
                    'risk-policy',
                    'cloud-vendor',
                    'training',
                    'organization',
                    'analytics'
                  ][i];
                  const show = openDoc === slug;
                  const doc = docsMap[slug];
                  return (
                    <div className={`mt-6 overflow-hidden transition-all ${show ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h4>
                        <p className="text-gray-700 mb-3">{doc?.intro}</p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {doc?.points.map((p, idx) => (<li key={idx}>{p}</li>))}
                        </ul>
                        {/* No external actions on Features page as requested */}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Advanced Security Capabilities</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">Cutting-edge technologies protecting your organization from evolving cyber threats</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Zero-Day Protection</h3>
              <p className="text-gray-600 text-sm">AI-powered detection of unknown exploits</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quantum-Resistant</h3>
              <p className="text-gray-600 text-sm">Post-quantum cryptography algorithms</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Response</h3>
              <p className="text-gray-600 text-sm">Automated incident containment</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dark Web Monitoring</h3>
              <p className="text-gray-600 text-sm">Continuous credential leak scanning</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600 text-sm">ML-based threat forecasting</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Blockchain Verified</h3>
              <p className="text-gray-600 text-sm">Immutable audit trail logging</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Automation</h3>
              <p className="text-gray-600 text-sm">ISO, GDPR, SOC 2 ready</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#205fde] rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Monitoring</h3>
              <p className="text-gray-600 text-sm">24/7 AI-driven surveillance</p>
            </div>
          </div>
        </div>

        {/* No CTAs or explore buttons on Features page */}
      </div>
    </div>
    <Footer />
    </div>
  );
}