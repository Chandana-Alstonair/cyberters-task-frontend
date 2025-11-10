import DataTableSimple from '../DataTableSimple';
import { Badge } from "@/components/ui/badge";

const columns = [
  { key: "id", label: "ID" },
  { key: "threat", label: "Threat Type" },
  { 
    key: "severity", 
    label: "Severity",
    render: (value: string) => {
      const variants: Record<string, "default" | "destructive" | "secondary"> = {
        critical: "destructive",
        high: "destructive",
        medium: "secondary",
        low: "default",
      };
      return <Badge variant={variants[value] || "default"}>{value}</Badge>;
    }
  },
  { key: "source", label: "Source IP" },
  { key: "time", label: "Detected" },
];

const data = [
  { id: "TH-001", threat: "DDoS Attack", severity: "critical", source: "192.168.1.50", time: "2 min ago" },
  { id: "TH-002", threat: "Phishing Attempt", severity: "high", source: "10.0.0.45", time: "15 min ago" },
  { id: "TH-003", threat: "Malware Detected", severity: "medium", source: "172.16.0.12", time: "1 hour ago" },
  { id: "TH-004", threat: "Suspicious Activity", severity: "low", source: "192.168.2.100", time: "2 hours ago" },
  { id: "TH-005", threat: "Brute Force", severity: "high", source: "203.0.113.45", time: "3 hours ago" },
];

export default function DataTableSimpleExample() {
  return (
    <div className="p-6">
      <DataTableSimple 
        title="Recent Threats" 
        columns={columns}
        data={data}
        actions={true}
      />
    </div>
  );
}
