import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import { Brain, AlertTriangle, Eye, TrendingUp, Target, Lock, Search, Zap, Settings, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function AIIntelligence() {
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const isNestedNavActive = ['threat-intelligence', 'risk-assurance', 'attack-simulation'].includes(activeTab);

  return (
    <DashboardShell 
      breadcrumb={[{ label: "Dashboard" }, { label: "SOC Analyst Intelligence" }]}
      hideHeaderOnNestedNav={isNestedNavActive}
    >
      <div className="p-6 space-y-6 bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-slate-900/5 min-h-screen">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">SOC Analyst Intelligence Center</h1>
            <p className="text-muted-foreground">
              Advanced threat detection, hunting, and automated incident response
            </p>
          </div>
        )}



        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {!['threat-intelligence', 'risk-assurance', 'attack-simulation'].includes(activeTab) && (
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
              <TabsTrigger value="overview" className="header-tab-hover">Overview</TabsTrigger>
              <TabsTrigger value="threat-detection" className="header-tab-hover">Threat Detection</TabsTrigger>
              <TabsTrigger value="threat-hunting" className="header-tab-hover">Threat Hunting</TabsTrigger>
              <TabsTrigger value="anomaly-detection" className="header-tab-hover">Anomaly Detection</TabsTrigger>
              <TabsTrigger value="incident-response" className="header-tab-hover">Incident Response</TabsTrigger>
              <TabsTrigger value="soar-integration" className="header-tab-hover">SOAR Integration</TabsTrigger>
              <TabsTrigger value="brand-monitoring" className="header-tab-hover">Brand Monitoring</TabsTrigger>
            </TabsList>
          )}

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Threats"
                value="347"
                description="Last 24 hours"
                icon={AlertTriangle}
                trend={{ value: 8.3, isPositive: false }}
              />
              <StatCard
                title="Active Incidents"
                value="23"
                description="Currently open"
                icon={Eye}
                trend={{ value: 3, isPositive: false }}
              />
              <StatCard
                title="Anomalies Detected"
                value="28"
                description="AI-detected anomalies"
                icon={Brain}
              />
              <StatCard
                title="Automated Responses"
                value="156"
                description="SOAR playbooks executed"
                icon={Zap}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Incident Summary Widget</CardTitle>
                  <CardDescription>Current incident status overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Open Incidents</p>
                      <p className="text-sm text-muted-foreground">Requires immediate attention</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">15</Badge>
                      <Button size="sm" className="ml-2">Update Status</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">In-Progress Incidents</p>
                      <p className="text-sm text-muted-foreground">Currently being investigated</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">8</Badge>
                      <Button size="sm" className="ml-2">Update Status</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Resolved Incidents</p>
                      <p className="text-sm text-muted-foreground">Completed today</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">12</Badge>
                      <Button size="sm" className="ml-2" variant="outline">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Active Hunts Tracker</CardTitle>
                  <CardDescription>Ongoing threat hunting activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">APT29 Campaign Hunt</p>
                      <p className="text-sm text-muted-foreground">Assigned: John Smith</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <Button size="sm" className="ml-2">Assign Self</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Insider Threat Analysis</p>
                      <p className="text-sm text-muted-foreground">Unassigned</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Available</Badge>
                      <Button size="sm" className="ml-2">Assign Self</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Ransomware Precursors</p>
                      <p className="text-sm text-muted-foreground">Assigned: Current User</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-500">My Hunt</Badge>
                      <Button size="sm" className="ml-2" variant="outline">View Progress</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts Feed</CardTitle>
                <CardDescription>Latest threat detections with severity tagging</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div>
                      <p className="font-medium">Malware Detection - DESKTOP-ABC123</p>
                      <p className="text-sm text-muted-foreground">Trojan.Win32.Agent detected</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive">Critical</Badge>
                    <Button size="sm" className="ml-2">Tag Severity</Button>
                    <p className="text-xs text-muted-foreground mt-1">2 min ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <div>
                      <p className="font-medium">Brute Force Attack - SSH Server</p>
                      <p className="text-sm text-muted-foreground">Multiple failed login attempts</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">High</Badge>
                    <Button size="sm" className="ml-2">Tag Severity</Button>
                    <p className="text-xs text-muted-foreground mt-1">15 min ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div>
                      <p className="font-medium">Suspicious Network Traffic</p>
                      <p className="text-sm text-muted-foreground">Unusual outbound connections</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Medium</Badge>
                    <Button size="sm" className="ml-2">Tag Severity</Button>
                    <p className="text-xs text-muted-foreground mt-1">32 min ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium">Policy Violation Alert</p>
                      <p className="text-sm text-muted-foreground">Unauthorized software installation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Low</Badge>
                    <Button size="sm" className="ml-2">Tag Severity</Button>
                    <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                  </div>
                </div>
                <Button className="w-full header-nav-hover" variant="outline">View All Alerts</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="threat-intelligence" className="space-y-4">
            <Tabs defaultValue="feeds" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="feeds">Threat Feeds</TabsTrigger>
                <TabsTrigger value="ioc-search">IOC Search</TabsTrigger>
                <TabsTrigger value="correlation">Correlation</TabsTrigger>
                <TabsTrigger value="reports">Intel Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="feeds" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">MISP Threat Feed</p>
                        <p className="text-sm text-muted-foreground">Last updated: 5 min ago</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">AlienVault OTX</p>
                        <p className="text-sm text-muted-foreground">Last updated: 12 min ago</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">VirusTotal Intelligence</p>
                        <p className="text-sm text-muted-foreground">Last updated: 8 min ago</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <p className="font-medium">Internal Threat Feed</p>
                        <p className="text-sm text-muted-foreground">Last updated: 45 min ago</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Delayed</Badge>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ioc-search" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Enter IP, hash, domain, or URL..." 
                      className="w-full p-2 border rounded-md"
                    />
                    <Button className="w-full">Search IOC</Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recent Lookups:</p>
                    <div className="p-2 bg-secondary rounded-lg">
                      <p className="text-sm font-medium">192.168.1.100</p>
                      <p className="text-xs text-muted-foreground">Reputation: Clean • Sources: 3</p>
                    </div>
                    <div className="p-2 bg-secondary rounded-lg">
                      <p className="text-sm font-medium">malicious-domain.com</p>
                      <p className="text-xs text-muted-foreground">Reputation: Malicious • Sources: 7</p>
                    </div>
                    <div className="p-2 bg-secondary rounded-lg">
                      <p className="text-sm font-medium">a1b2c3d4e5f6...</p>
                      <p className="text-xs text-muted-foreground">Reputation: Suspicious • Sources: 2</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="correlation" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">IOC Match: 192.168.1.45</p>
                      <p className="text-sm text-muted-foreground">Found in Incident #INC-2024-001</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">High Correlation</Badge>
                      <Button size="sm" className="ml-2">Link to Incident</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Domain Pattern Match</p>
                      <p className="text-sm text-muted-foreground">Similar to Incident #INC-2024-003</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Medium Correlation</Badge>
                      <Button size="sm" className="ml-2">Analyze</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Hash Signature Match</p>
                      <p className="text-sm text-muted-foreground">Related to Incident #INC-2024-005</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Confirmed Link</Badge>
                      <Button size="sm" className="ml-2" variant="outline">View Incident</Button>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Run Full Correlation Analysis</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="reports" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Daily Threat Digest - Today</p>
                      <p className="text-sm text-muted-foreground">47 new IOCs, 12 campaigns, 3 vulnerabilities</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Ready</Badge>
                      <Button size="sm" className="ml-2">Download</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Weekly Intelligence Summary</p>
                      <p className="text-sm text-muted-foreground">Comprehensive threat landscape overview</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Available</Badge>
                      <Button size="sm" className="ml-2">Download</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">APT Campaign Analysis</p>
                      <p className="text-sm text-muted-foreground">Detailed analysis of recent APT activities</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Generating</Badge>
                      <Button size="sm" className="ml-2" disabled>Processing</Button>
                    </div>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg">
                    <p className="text-sm font-medium mb-2">Today's Key Insights:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 23% increase in phishing campaigns targeting financial sector</li>
                      <li>• New ransomware variant detected: BlackCat v2.1</li>
                      <li>• Critical vulnerability in Apache Struts (CVE-2024-XXXX)</li>
                      <li>• Increased activity from APT28 group</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="risk-assurance" className="space-y-4">
            <Tabs defaultValue="risk-posture" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="risk-posture">Risk Posture</TabsTrigger>
                <TabsTrigger value="threat-mapping">Threat Mapping</TabsTrigger>
                <TabsTrigger value="incident-assurance">Incident Assurance</TabsTrigger>
                <TabsTrigger value="audit-readiness">Audit Readiness</TabsTrigger>
              </TabsList>
              
              <TabsContent value="risk-posture" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Critical Assets</span>
                      <Badge variant="destructive">High Risk</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">12 assets require immediate attention</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Network Infrastructure</span>
                      <Badge variant="secondary">Medium Risk</Badge>
                    </div>
                    <Progress value={55} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">8 vulnerabilities identified</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">User Endpoints</span>
                      <Badge className="bg-green-500">Low Risk</Badge>
                    </div>
                    <Progress value={25} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Well-maintained security posture</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Cloud Services</span>
                      <Badge variant="secondary">Medium Risk</Badge>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Configuration improvements needed</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="threat-mapping" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Ransomware Threat</p>
                      <p className="text-sm text-muted-foreground">Contributes to Business Continuity Risk</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">High Impact</Badge>
                      <Button size="sm" className="ml-2">Add Comment</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Phishing Campaigns</p>
                      <p className="text-sm text-muted-foreground">Contributes to Data Breach Risk</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Medium Impact</Badge>
                      <Button size="sm" className="ml-2">Add Comment</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Insider Threats</p>
                      <p className="text-sm text-muted-foreground">Contributes to Intellectual Property Risk</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Medium Impact</Badge>
                      <Button size="sm" className="ml-2">Add Comment</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Supply Chain Attacks</p>
                      <p className="text-sm text-muted-foreground">Contributes to Third-Party Risk</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">High Impact</Badge>
                      <Button size="sm" className="ml-2">Add Comment</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="incident-assurance" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">INC-2024-001: Malware Detection</p>
                      <p className="text-sm text-muted-foreground">Remediation: Endpoint isolated & cleaned</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Pending Verification</Badge>
                      <Button size="sm" className="ml-2">Update Status</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">INC-2024-003: Phishing Attack</p>
                      <p className="text-sm text-muted-foreground">Remediation: User training completed</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Risk Closed</Badge>
                      <Button size="sm" className="ml-2" variant="outline">View Details</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">INC-2024-005: Vulnerability Exploit</p>
                      <p className="text-sm text-muted-foreground">Remediation: Patch applied & tested</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Awaiting Validation</Badge>
                      <Button size="sm" className="ml-2">Update Status</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">INC-2024-007: Data Access Violation</p>
                      <p className="text-sm text-muted-foreground">Remediation: Access revoked & monitored</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Risk Remains Open</Badge>
                      <Button size="sm" className="ml-2">Update Status</Button>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">View All Incident Assurance Checks</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="audit-readiness" className="space-y-4">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">87%</div>
                    <p className="text-sm text-muted-foreground">Overall Audit Readiness Score</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">ISO 27001 Compliance</span>
                      <Badge className="bg-green-500">92%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">SOC 2 Type II</span>
                      <Badge className="bg-green-500">89%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">NIST Framework</span>
                      <Badge variant="secondary">78%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Risk Management</span>
                      <Badge className="bg-green-500">91%</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="attack-simulation" className="space-y-4">
            <Tabs defaultValue="catalog" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="catalog">Simulation Catalog</TabsTrigger>
                <TabsTrigger value="execute">Execute Simulation</TabsTrigger>
                <TabsTrigger value="results">Results Panel</TabsTrigger>
                <TabsTrigger value="effectiveness">Effectiveness Score</TabsTrigger>
              </TabsList>
              
              <TabsContent value="catalog" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Phishing Email Campaign</p>
                      <p className="text-sm text-muted-foreground">Test email security awareness</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Approved</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Duration: 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Malware Infection Simulation</p>
                      <p className="text-sm text-muted-foreground">Test endpoint detection response</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Approved</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Duration: 1.5 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Network Intrusion Test</p>
                      <p className="text-sm text-muted-foreground">Test network monitoring capabilities</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Pending Approval</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Duration: 3 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Data Exfiltration Scenario</p>
                      <p className="text-sm text-muted-foreground">Test DLP and monitoring systems</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Approved</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Duration: 2.5 hours</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="execute" className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium mb-2">Ready to Execute:</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Phishing Email Campaign</span>
                        <Button size="sm">Execute</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Malware Infection Simulation</span>
                        <Button size="sm">Execute</Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Data Exfiltration Scenario</span>
                        <Button size="sm">Execute</Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg">
                    <p className="font-medium mb-2">Currently Running:</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Phishing Campaign #SIM-2024-003</p>
                        <p className="text-xs text-muted-foreground">Started: 45 minutes ago</p>
                      </div>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">View Simulation Schedule</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">SIM-2024-001: Phishing Test</p>
                      <p className="text-sm text-muted-foreground">Detection Time: 3.2 minutes</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Passed</Badge>
                      <Button size="sm" className="ml-2">Add Comment</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">SIM-2024-002: Malware Simulation</p>
                      <p className="text-sm text-muted-foreground">Detection Time: 8.7 minutes</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Partial</Badge>
                      <Button size="sm" className="ml-2">Add Comment</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">SIM-2024-003: Network Intrusion</p>
                      <p className="text-sm text-muted-foreground">Detection Time: 15.3 minutes</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Failed</Badge>
                      <Button size="sm" className="ml-2">Add Comment</Button>
                    </div>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg">
                    <p className="text-sm font-medium mb-2">Latest Simulation Metrics:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>Detection Rate: 78%</div>
                      <div>Response Time: 6.4 min avg</div>
                      <div>False Positives: 12%</div>
                      <div>Containment: 85%</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="effectiveness" className="space-y-4">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-500 mb-2">82%</div>
                    <p className="text-sm text-muted-foreground">Overall Team Effectiveness</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Threat Detection</span>
                        <span className="text-sm text-muted-foreground">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Incident Response</span>
                        <span className="text-sm text-muted-foreground">79%</span>
                      </div>
                      <Progress value={79} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Communication</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Documentation</span>
                        <span className="text-sm text-muted-foreground">76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg">
                    <p className="text-xs text-muted-foreground">Performance trend: +5% improvement over last month</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="threat-detection" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Real-Time Threat Detection</CardTitle>
                  <CardDescription>Active threat monitoring and analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div>
                        <p className="font-medium">Malware Detection</p>
                        <p className="text-sm text-muted-foreground">Endpoint: DESKTOP-ABC123</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Critical</Badge>
                      <p className="text-xs text-muted-foreground mt-1">2 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <p className="font-medium">Suspicious Network Traffic</p>
                        <p className="text-sm text-muted-foreground">Source: 192.168.1.45</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Medium</Badge>
                      <p className="text-xs text-muted-foreground mt-1">15 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <div>
                        <p className="font-medium">Brute Force Attack</p>
                        <p className="text-sm text-muted-foreground">Target: SSH Server</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">High</Badge>
                      <p className="text-xs text-muted-foreground mt-1">32 min ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Detection Rules & Signatures</CardTitle>
                  <CardDescription>Active detection mechanisms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">YARA Rules</span>
                      <span className="text-sm text-muted-foreground">1,247 active</span>
                    </div>
                    <Progress value={95} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Snort Signatures</span>
                      <span className="text-sm text-muted-foreground">3,456 active</span>
                    </div>
                    <Progress value={88} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Custom IOCs</span>
                      <span className="text-sm text-muted-foreground">892 active</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Behavioral Rules</span>
                      <span className="text-sm text-muted-foreground">567 active</span>
                    </div>
                    <Progress value={78} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="threat-hunting" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Active Threat Hunts
                  </CardTitle>
                  <CardDescription>Ongoing threat hunting operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">APT29 Campaign Hunt</p>
                      <p className="text-sm text-muted-foreground">Hunting for Cozy Bear indicators</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Day 3 of 7</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Insider Threat Analysis</p>
                      <p className="text-sm text-muted-foreground">Behavioral anomaly investigation</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Day 1 of 5</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Ransomware Precursors</p>
                      <p className="text-sm text-muted-foreground">Early stage ransomware detection</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Completed</Badge>
                      <p className="text-xs text-muted-foreground mt-1">5 IOCs found</p>
                    </div>
                  </div>
                  <Button className="w-full header-nav-hover">Start New Hunt</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Hunt Methodologies</CardTitle>
                  <CardDescription>Available hunting frameworks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">MITRE ATT&CK Framework</span>
                      <Badge className="bg-green-500">Available</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Tactics, techniques, and procedures mapping</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Diamond Model</span>
                      <Badge className="bg-green-500">Available</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Adversary, capability, infrastructure, victim</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Cyber Kill Chain</span>
                      <Badge className="bg-green-500">Available</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Seven-stage attack lifecycle model</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="anomaly-detection" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    AI-Driven Anomaly Detection
                  </CardTitle>
                  <CardDescription>Machine learning-based anomaly identification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">User Behavior Analytics</span>
                      <Badge variant="destructive">3 Anomalies</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Unusual login patterns detected</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Network Traffic Analysis</span>
                      <Badge variant="secondary">1 Anomaly</Badge>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Abnormal data transfer volume</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">System Performance</span>
                      <Badge className="bg-green-500">Normal</Badge>
                    </div>
                    <Progress value={20} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">All systems within baseline</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ML Model Performance</CardTitle>
                  <CardDescription>Anomaly detection model metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Detection Accuracy</span>
                      <span className="text-sm text-muted-foreground">94.7%</span>
                    </div>
                    <Progress value={94.7} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">False Positive Rate</span>
                      <span className="text-sm text-muted-foreground">2.3%</span>
                    </div>
                    <Progress value={2.3} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Model Confidence</span>
                      <span className="text-sm text-muted-foreground">91.2%</span>
                    </div>
                    <Progress value={91.2} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Training Data Quality</span>
                      <span className="text-sm text-muted-foreground">96.8%</span>
                    </div>
                    <Progress value={96.8} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="incident-response" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Automated Incident Response Playbooks</CardTitle>
                  <CardDescription>Pre-configured response workflows</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Malware Containment</p>
                      <p className="text-sm text-muted-foreground">Isolate infected endpoints</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Executed 12 times</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Phishing Response</p>
                      <p className="text-sm text-muted-foreground">Block URLs and notify users</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Executed 8 times</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Data Breach Protocol</p>
                      <p className="text-sm text-muted-foreground">Secure data and notify stakeholders</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Standby</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Never executed</p>
                    </div>
                  </div>
                  <Button className="w-full header-nav-hover" variant="outline">Create New Playbook</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Response Metrics</CardTitle>
                  <CardDescription>Incident response performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Mean Time to Detection</span>
                      <span className="text-sm text-muted-foreground">4.2 minutes</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Mean Time to Response</span>
                      <span className="text-sm text-muted-foreground">12.8 minutes</span>
                    </div>
                    <Progress value={78} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Containment Success Rate</span>
                      <span className="text-sm text-muted-foreground">96.3%</span>
                    </div>
                    <Progress value={96.3} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Playbook Execution Rate</span>
                      <span className="text-sm text-muted-foreground">89.7%</span>
                    </div>
                    <Progress value={89.7} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="soar-integration" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    SOAR Platform Integration
                  </CardTitle>
                  <CardDescription>Security Orchestration, Automation & Response</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">Phantom SOAR</p>
                        <p className="text-sm text-muted-foreground">Primary orchestration platform</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">Demisto XSOAR</p>
                        <p className="text-sm text-muted-foreground">Secondary automation engine</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <p className="font-medium">IBM Resilient</p>
                        <p className="text-sm text-muted-foreground">Incident response platform</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Configuring</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automation Statistics</CardTitle>
                  <CardDescription>SOAR platform performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Automated Actions</span>
                      <span className="text-sm text-muted-foreground">1,247 today</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Workflow Success Rate</span>
                      <span className="text-sm text-muted-foreground">94.8%</span>
                    </div>
                    <Progress value={94.8} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Time Saved</span>
                      <span className="text-sm text-muted-foreground">156 hours</span>
                    </div>
                    <Progress value={87} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Integration Health</span>
                      <span className="text-sm text-muted-foreground">98.2%</span>
                    </div>
                    <Progress value={98.2} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="brand-monitoring" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Underground Forum Monitoring
                  </CardTitle>
                  <CardDescription>Brand mentions in dark web and underground forums</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Brand Mention Alert</p>
                      <p className="text-sm text-muted-foreground">Source: Dark Web Forum XYZ</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Critical</Badge>
                      <p className="text-xs text-muted-foreground mt-1">5 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Credential Leak Discussion</p>
                      <p className="text-sm text-muted-foreground">Source: Telegram Channel</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">High</Badge>
                      <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Company Data Dump</p>
                      <p className="text-sm text-muted-foreground">Source: Pastebin</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">High</Badge>
                      <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Configure Monitoring</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring Sources</CardTitle>
                  <CardDescription>Active monitoring channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">Dark Web Forums</p>
                      <p className="text-xs text-muted-foreground">47 sources monitored</p>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">Telegram Channels</p>
                      <p className="text-xs text-muted-foreground">23 channels monitored</p>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">Paste Sites</p>
                      <p className="text-xs text-muted-foreground">12 sites monitored</p>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">Social Media</p>
                      <p className="text-xs text-muted-foreground">8 platforms monitored</p>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}