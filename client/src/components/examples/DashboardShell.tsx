import DashboardShell from '../DashboardShell';
import StatCard from '../StatCard';
import { Shield } from 'lucide-react';

export default function DashboardShellExample() {
  return (
    <DashboardShell breadcrumb={[
      { label: "Dashboard" },
      { label: "AI Intelligence" },
      { label: "Overview" }
    ]}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard Content</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Sample Metric" value="123" icon={Shield} />
          <StatCard title="Another Metric" value="456" icon={Shield} />
          <StatCard title="Third Metric" value="789" icon={Shield} />
        </div>
      </div>
    </DashboardShell>
  );
}
