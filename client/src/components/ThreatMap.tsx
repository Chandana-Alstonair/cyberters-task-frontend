import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface ThreatLocation {
  id: string;
  lat: number;
  lng: number;
  severity: "low" | "medium" | "high" | "critical";
  type: string;
}

export default function ThreatMap() {
  const [threats, setThreats] = useState<ThreatLocation[]>([]);

  useEffect(() => {
    const mockThreats: ThreatLocation[] = [
      { id: "1", lat: 40.7128, lng: -74.0060, severity: "high", type: "DDoS Attack" },
      { id: "2", lat: 51.5074, lng: -0.1278, severity: "medium", type: "Phishing" },
      { id: "3", lat: 35.6762, lng: 139.6503, severity: "critical", type: "Malware" },
      { id: "4", lat: -33.8688, lng: 151.2093, severity: "low", type: "Suspicious Activity" },
      { id: "5", lat: 37.7749, lng: -122.4194, severity: "high", type: "Brute Force" },
    ];
    setThreats(mockThreats);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "#dc2626";
      case "high": return "#f97316";
      case "medium": return "#eab308";
      case "low": return "#22c55e";
      default: return "#3b82f6";
    }
  };

  return (
    <Card className="h-full" data-testid="card-threat-map">
      <CardHeader>
        <CardTitle>Live Threat Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[400px] bg-card rounded-lg overflow-hidden border border-border">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <rect width="800" height="400" fill="hsl(var(--background))" />
            
            <g opacity="0.3">
              {Array.from({ length: 20 }).map((_, i) => (
                <line
                  key={`lat-${i}`}
                  x1="0"
                  y1={i * 20}
                  x2="800"
                  y2={i * 20}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                />
              ))}
              {Array.from({ length: 40 }).map((_, i) => (
                <line
                  key={`lng-${i}`}
                  x1={i * 20}
                  y1="0"
                  x2={i * 20}
                  y2="400"
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                />
              ))}
            </g>

            {threats.map((threat) => {
              const x = ((threat.lng + 180) / 360) * 800;
              const y = ((90 - threat.lat) / 180) * 400;
              
              return (
                <g key={threat.id}>
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill={getSeverityColor(threat.severity)}
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="8"
                      to="16"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill={getSeverityColor(threat.severity)}
                  />
                </g>
              );
            })}
          </svg>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <span className="text-xs text-muted-foreground">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-xs text-muted-foreground">High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-xs text-muted-foreground">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">Low</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
