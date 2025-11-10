import { FileText, Book, Code, Shield, Users, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Link } from 'wouter';

const resources = [
  { 
    title: 'All Documentation', 
    desc: 'Browse the complete Cyberters documentation library with setup guides, tutorials, and best practices', 
    icon: FileText, 
    id: 'all-docs',
    content: {
      overview: 'Complete documentation hub for Cyberters cybersecurity platform',
      sections: ['Getting Started', 'Installation Guide', 'Configuration', 'Troubleshooting', 'FAQ']
    }
  },
  {
    title: 'API Documentation',
    desc: 'Comprehensive REST API guides with authentication, endpoints, and integration examples',
    icon: Code,
    id: 'api-docs',
    content: {
      overview: 'RESTful API documentation for Cyberters platform integration',
      sections: ['Authentication', 'Threat Detection API', 'Compliance API', 'Automation Endpoints', 'Webhooks']
    }
  },
  {
    title: 'Security Analytics Guide',
    desc: 'Advanced analytics documentation covering AI models, threat intelligence, and reporting',
    icon: Shield,
    id: 'analytics-docs',
    content: {
      overview: 'Deep dive into security analytics and AI-powered threat detection',
      sections: ['ML Models', 'Threat Intelligence', 'Custom Reports', 'Dashboard Configuration', 'Alert Management']
    }
  },
  {
    title: 'Getting Started',
    desc: 'Quick start guides, onboarding tutorials, and initial setup documentation',
    icon: Users,
    id: 'getting-started',
    content: {
      overview: 'Step-by-step guides to get you up and running with Cyberters',
      sections: ['Initial Setup', 'User Management', 'First Dashboard', 'Basic Configuration', 'Support Resources']
    }
  },
  {
    title: 'Automation Playbooks',
    desc: 'SOAR workflow documentation with playbook templates and automation guides',
    icon: Calendar,
    id: 'automation-docs',
    content: {
      overview: 'Comprehensive guide to security orchestration and automated response',
      sections: ['Playbook Builder', 'Incident Response', 'Patch Management', 'Custom Workflows', 'Integration Hub']
    }
  },
  {
    title: 'Developer Resources',
    desc: 'SDKs, code samples, integration guides, and developer tools documentation',
    icon: Book,
    id: 'developer-docs',
    content: {
      overview: 'Resources for developers integrating with Cyberters platform',
      sections: ['SDKs & Libraries', 'Code Examples', 'Integration Patterns', 'Testing Tools', 'Community']
    }
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">
            Stay Informed, Stay Secure
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, i) => (
            <article key={i} id={resource.id} className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#205fde]/25 hover:shadow-md transition scroll-mt-20">
              <header className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#205fde] to-[#4ca2b5] rounded-lg flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
              </header>
              <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Overview</h4>
                <p className="text-sm text-gray-600 mb-3">{resource.content.overview}</p>
                <h5 className="font-medium text-gray-700 mb-2">Sections:</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  {resource.content.sections.map((section, j) => (
                    <li key={j} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#205fde] rounded-full mr-2"></div>
                      {section}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        
        {/* Framework Documentation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance Framework Documentation</h2>
          <div className="space-y-8">
            
            <div id="iso-27001" className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg scroll-mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Information Security Management</h3>
              <p className="text-gray-600 mb-4">
                ISO 27001 is the international standard for information security management systems (ISMS). 
                Cyberters Pro helps organizations achieve and maintain ISO 27001 compliance through automated controls and continuous monitoring.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Risk assessment and treatment</li>
                    <li>• Security policy framework</li>
                    <li>• Asset management</li>
                    <li>• Access control measures</li>
                    <li>• Incident management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cyberters Pro Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automated risk assessments</li>
                    <li>• Policy management dashboard</li>
                    <li>• Asset inventory tracking</li>
                    <li>• RBAC implementation</li>
                    <li>• Incident response automation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div id="soc-2-type-ii" className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg scroll-mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SOC 2 Type II Compliance</h3>
              <p className="text-gray-600 mb-4">
                SOC 2 Type II evaluates the effectiveness of security controls over time. 
                Our platform provides continuous monitoring and evidence collection for all five trust service criteria.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Trust Service Criteria:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Security</li>
                    <li>• Availability</li>
                    <li>• Processing Integrity</li>
                    <li>• Confidentiality</li>
                    <li>• Privacy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Evidence Collection:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automated control testing</li>
                    <li>• Continuous monitoring logs</li>
                    <li>• Audit trail generation</li>
                    <li>• Exception reporting</li>
                    <li>• Remediation tracking</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div id="gdpr-compliant" className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg scroll-mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">GDPR Compliance Framework</h3>
              <p className="text-gray-600 mb-4">
                General Data Protection Regulation compliance through automated data discovery, 
                classification, and privacy controls with built-in breach notification capabilities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">GDPR Principles:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Data minimization</li>
                    <li>• Purpose limitation</li>
                    <li>• Storage limitation</li>
                    <li>• Accuracy requirements</li>
                    <li>• Accountability measures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Platform Capabilities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Data discovery and mapping</li>
                    <li>• Consent management</li>
                    <li>• Breach detection alerts</li>
                    <li>• Data subject rights automation</li>
                    <li>• Privacy impact assessments</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div id="nist-framework" className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg scroll-mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NIST Cybersecurity Framework</h3>
              <p className="text-gray-600 mb-4">
                Implementation of NIST CSF core functions through integrated security controls, 
                risk management, and continuous improvement processes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Core Functions:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Identify assets and risks</li>
                    <li>• Protect critical infrastructure</li>
                    <li>• Detect security events</li>
                    <li>• Respond to incidents</li>
                    <li>• Recover from disruptions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Implementation Tools:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Asset inventory management</li>
                    <li>• Control implementation tracking</li>
                    <li>• Threat detection analytics</li>
                    <li>• Incident response playbooks</li>
                    <li>• Recovery planning tools</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div id="pci-dss" className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg scroll-mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PCI DSS Payment Security</h3>
              <p className="text-gray-600 mb-4">
                Payment Card Industry Data Security Standard compliance through secure payment processing controls, 
                network segmentation, and cardholder data protection measures.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">PCI DSS Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Secure network architecture</li>
                    <li>• Cardholder data protection</li>
                    <li>• Vulnerability management</li>
                    <li>• Access control measures</li>
                    <li>• Security monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Security Controls:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Network segmentation monitoring</li>
                    <li>• Data encryption management</li>
                    <li>• Vulnerability scanning</li>
                    <li>• Access logging and monitoring</li>
                    <li>• Security testing automation</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Our support team is here to help you get the most out of Cyberters
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-[#205fde] text-white rounded-lg font-semibold hover:shadow-lg transition">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white text-[#205fde] border-2 border-[#205fde] rounded-lg font-semibold hover:bg-blue-50 transition">
              Community Forum
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}