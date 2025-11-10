import Navigation from '../../components/Navigation';
import { useRoute } from 'wouter';

type Section = { heading: string; body: string[] };

const content: Record<string, { title: string; intro: string; sections: Section[] }> = {
  'getting-started': {
    title: 'Getting Started',
    intro: 'Install, run, and explore Cyberters locally.',
    sections: [
      { heading: 'Installation', body: ['Clone repository', 'Run npm install', 'Start dev server with npm run dev'] },
      { heading: 'Project Structure', body: ['React + Tailwind front-end', 'Wouter routing', 'Framer Motion animations'] },
    ],
  },
  'ai-intelligence': {
    title: 'AI Intelligence & Threat Detection',
    intro: 'Real-time anomalies, alerts, and geo-visualization.',
    sections: [
      { heading: 'Key Pages', body: ['Threat Overview', 'Alerts Feed', 'Live Threat Map'] },
      { heading: 'APIs', body: ['GET /api/threats', 'GET /api/alerts?severity=high'] },
    ],
  },
  'audit-compliance': {
    title: 'Audit & Compliance',
    intro: 'Immutable audits with blockchain-backed trails.',
    sections: [
      { heading: 'Workflows', body: ['Scheduling', 'Evidence Management', 'Attestations'] },
      { heading: 'Validation', body: ['Blockchain hash verification', 'Digital signatures'] },
    ],
  },
  automation: {
    title: 'Automation & Response',
    intro: 'SOAR playbooks and automated remediation.',
    sections: [
      { heading: 'Playbooks', body: ['Triggers', 'Conditions', 'Actions'] },
      { heading: 'RCA', body: ['Timeline generation', 'PDF export'] },
    ],
  },
  'risk-policy': {
    title: 'Risk & Policy',
    intro: 'AI risk scoring and forecasting.',
    sections: [
      { heading: 'Metrics', body: ['Risk score 0–100', 'Heatmaps', 'Trends'] },
      { heading: 'Policies', body: ['Templates', 'Enforcement logs'] },
    ],
  },
  'cloud-vendor': {
    title: 'Cloud & Vendor',
    intro: 'Cloud assessment and vendor scoring.',
    sections: [
      { heading: 'Integrations', body: ['Cloud APIs', 'Vendor registry'] },
      { heading: 'Insurance', body: ['Eligibility score', 'Quotes integration'] },
    ],
  },
  training: {
    title: 'Cyber Training',
    intro: 'Interactive modules, quizzes, and certificates.',
    sections: [
      { heading: 'Modules', body: ['Videos', 'Challenges', 'Leaderboard'] },
      { heading: 'Assessment', body: ['Auto-grading', 'Downloadable certificates'] },
    ],
  },
  organization: {
    title: 'Organization Management',
    intro: 'Users, roles, MFA/SSO, and notifications.',
    sections: [
      { heading: 'RBAC', body: ['Role matrix', 'Permissions', 'Audit logs'] },
      { heading: 'Auth', body: ['MFA options', 'SSO providers'] },
    ],
  },
  analytics: {
    title: 'Analytics & Visualization',
    intro: 'Dashboards, KPIs, and predictive insights.',
    sections: [
      { heading: 'Charts', body: ['Chart.js & Recharts', 'Heatmaps', 'Trends'] },
      { heading: 'Reports', body: ['Report Builder', 'Scheduled exports'] },
    ],
  },
  api: {
    title: 'API Reference',
    intro: 'Auth, endpoints, and code examples.',
    sections: [
      { heading: 'Auth', body: ['Bearer token via login', 'JWT in Authorization header'] },
      { heading: 'Endpoints', body: ['GET /api/alerts', 'POST /api/incidents', 'GET /api/risk/scores'] },
    ],
  },
};

export default function DocPage() {
  const [, params] = useRoute<{ slug: string }>("/docs/:slug");
  const slug = params?.slug || 'getting-started';
  const doc = content[slug] || content['getting-started'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 max-w-5xl mx-auto px-6">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">{doc.title}</h1>
        <p className="text-gray-600 mb-8">{doc.intro}</p>

        <div className="space-y-10">
          {doc.sections.map((s, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{s.heading}</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {s.body.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}


