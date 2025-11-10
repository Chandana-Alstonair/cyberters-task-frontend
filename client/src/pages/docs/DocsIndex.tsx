import Navigation from '../../components/Navigation';
import { Book, Link as LinkIcon } from 'lucide-react';
import { Link } from 'wouter';

const docs = [
  { slug: 'getting-started', title: 'Getting Started', desc: 'Install, configure and deploy Cyberters quickly.' },
  { slug: 'ai-intelligence', title: 'AI Intelligence & Threat Detection', desc: 'Anomaly detection, alerts, and live threat map.' },
  { slug: 'audit-compliance', title: 'Audit & Compliance', desc: 'Immutable audits, checklists, and attestations.' },
  { slug: 'automation', title: 'Automation & Response', desc: 'SOAR playbooks, RCA, patching and orchestration.' },
  { slug: 'risk-policy', title: 'Risk & Policy', desc: 'Risk scoring, forecasting and policy enforcement.' },
  { slug: 'cloud-vendor', title: 'Cloud & Vendor', desc: 'Cloud assessments, vendor scoring and insurance.' },
  { slug: 'training', title: 'Cyber Training', desc: 'Interactive modules, gamified challenges and certs.' },
  { slug: 'organization', title: 'Organization Management', desc: 'Users, roles, MFA/SSO and notifications.' },
  { slug: 'analytics', title: 'Analytics & Visualization', desc: 'Executive dashboards, trends and reports.' },
  { slug: 'api', title: 'API Reference', desc: 'REST endpoints, auth and examples.' },
];

export default function DocsIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-3">Documentation</h1>
          <p className="text-gray-600">Find guides and references for every Cyberters module.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <Link key={d.slug} href={`/docs/${d.slug}`} className="block">
              <div className="h-full bg-white rounded-xl p-6 border border-gray-100 hover:border-[#205fde]/30 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#205fde] to-[#4ca2b5] text-white flex items-center justify-center">
                    <Book className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{d.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{d.desc}</p>
                <div className="text-[#205fde] text-sm inline-flex items-center gap-1">
                  Read docs <LinkIcon className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


