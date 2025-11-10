import StatCard from '../StatCard';
import { Shield, AlertTriangle, Activity, Users } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <StatCard 
        title="Total Threats" 
        value="1,284" 
        description="Last 24 hours"
        icon={Shield}
        trend={{ value: 12.5, isPositive: false }}
      />
      <StatCard 
        title="Active Alerts" 
        value="47" 
        description="Requires attention"
        icon={AlertTriangle}
        trend={{ value: 5.2, isPositive: true }}
      />
      <StatCard 
        title="System Health" 
        value="98.5%" 
        description="All systems"
        icon={Activity}
        trend={{ value: 0.3, isPositive: true }}
      />
      <StatCard 
        title="Protected Users" 
        value="12,543" 
        description="Active accounts"
        icon={Users}
      />
    </div>
  );
}
