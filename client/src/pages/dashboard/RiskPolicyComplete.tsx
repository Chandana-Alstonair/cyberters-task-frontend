import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import { Shield, AlertTriangle, FileText, TrendingUp, Target, Activity, Users, CheckSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function RiskPolicy() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const isNestedNavActive = ['risk-assurance', 'policy-governance'].includes(activeTab);

  return (
    <DashboardShell 
      breadcrumb={[{ label: "Dashboard" }, { label: "Risk & Policy Management" }]}
      hideHeaderOnNestedNav={isNestedNavActive}
    >
      <div className="p-6 space-y-6 bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-slate-900/5 min-h-screen">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Risk & Policy Management Center</h1>
            <p className="text-muted-foreground">
              Comprehensive risk assessment and policy governance with AI-driven insights
            </p>
          </div>
        )}

        {!isNestedNavActive && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="risk-assurance">Risk & Assurance Dashboard</TabsTrigger>
              <TabsTrigger value="policy-governance">Policy & Governance Dashboard</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Overall Risk Score"
                  value="42"
                  description="Low risk"
                  icon={Shield}
                  trend={{ value: 8, isPositive: true }}
                />
                <StatCard
                  title="Active Policies"
                  value="45"
                  description="Enforced"
                  icon={FileText}
                />
                <StatCard
                  title="Compliance Rate"
                  value="96.8%"
                  description="All frameworks"
                  icon={Target}
                  trend={{ value: 1.2, isPositive: true }}
                />
                <StatCard
                  title="Risk Assessments"
                  value="23"
                  description="This quarter"
                  icon={Activity}
                />
              </div>
            </TabsContent>
          </Tabs>
        )}
        
        {activeTab === 'risk-assurance' && (
          <Tabs defaultValue="risk-scoring" className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="risk-scoring">Risk Scoring</TabsTrigger>
              <TabsTrigger value="forecasting">Risk Forecasting</TabsTrigger>
              <TabsTrigger value="vulnerability">Vulnerability Assessment</TabsTrigger>
              <TabsTrigger value="vendor-risk">Vendor Risk</TabsTrigger>
              <TabsTrigger value="sla-tracking">SLA Tracking</TabsTrigger>
              <TabsTrigger value="insurance">Cyber Insurance</TabsTrigger>
              <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
            </TabsList>

            <TabsContent value="risk-scoring" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Driven Risk Scoring</CardTitle>
                    <CardDescription>Real-time risk assessment across all domains</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium">Infrastructure Risk</p>
                          <p className="text-xs text-muted-foreground">Network, servers, cloud</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-500">35</p>
                          <p className="text-xs text-muted-foreground">Low</p>
                        </div>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium">Application Risk</p>
                          <p className="text-xs text-muted-foreground">Software vulnerabilities</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-yellow-500">65</p>
                          <p className="text-xs text-muted-foreground">Medium</p>
                        </div>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium">Human Risk</p>
                          <p className="text-xs text-muted-foreground">User behavior, training</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-red-500">78</p>
                          <p className="text-xs text-muted-foreground">High</p>
                        </div>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium">Data Risk</p>
                          <p className="text-xs text-muted-foreground">Data classification, access</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-500">42</p>
                          <p className="text-xs text-muted-foreground">Low</p>
                        </div>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Score Trends</CardTitle>
                    <CardDescription>Historical risk progression</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-500 mb-2">55</div>
                      <p className="text-sm text-muted-foreground">Overall Risk Score</p>
                      <Badge variant="secondary">Medium Risk</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Last Week</span>
                        <span className="text-sm text-red-500">↑ +8 points</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Last Month</span>
                        <span className="text-sm text-green-500">↓ -12 points</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Last Quarter</span>
                        <span className="text-sm text-green-500">↓ -25 points</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Risk Factor Analysis</CardTitle>
                  <CardDescription>Detailed breakdown of contributing factors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Unpatched Vulnerabilities</p>
                      <p className="text-sm text-muted-foreground">23 critical, 45 high severity</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Critical Impact</Badge>
                      <p className="text-xs text-muted-foreground mt-1">+15 risk points</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Failed Phishing Tests</p>
                      <p className="text-sm text-muted-foreground">12% failure rate this month</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">High Impact</Badge>
                      <p className="text-xs text-muted-foreground mt-1">+8 risk points</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Privileged Access</p>
                      <p className="text-sm text-muted-foreground">156 admin accounts active</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Medium Impact</Badge>
                      <p className="text-xs text-muted-foreground mt-1">+5 risk points</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forecasting" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Forecasting Models</CardTitle>
                    <CardDescription>Predictive risk analysis using AI</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <span className="font-medium text-red-700 dark:text-red-300">High Risk Forecast</span>
                      </div>
                      <p className="text-sm text-red-600 dark:text-red-400">78% probability of security incident in next 30 days</p>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium text-yellow-700 dark:text-yellow-300">Emerging Risks</span>
                      </div>
                      <p className="text-sm text-yellow-600 dark:text-yellow-400">Supply chain vulnerabilities trending upward</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-blue-500" />
                        <span className="font-medium text-blue-700 dark:text-blue-300">Mitigation Opportunity</span>
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Employee training can reduce risk by 25%</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Forecast Accuracy</CardTitle>
                    <CardDescription>Model performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">30-Day Accuracy</span>
                        <span className="text-sm text-muted-foreground">87.3%</span>
                      </div>
                      <Progress value={87.3} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">90-Day Accuracy</span>
                        <span className="text-sm text-muted-foreground">72.1%</span>
                      </div>
                      <Progress value={72.1} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Confidence Level</span>
                        <span className="text-sm text-muted-foreground">94.2%</span>
                      </div>
                      <Progress value={94.2} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vulnerability" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Vulnerability Assessment</CardTitle>
                    <CardDescription>Automated vulnerability scanning and analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Critical Vulnerabilities</p>
                        <p className="text-sm text-muted-foreground">CVE-2024-12345, CVE-2024-12346</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="destructive">23</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Immediate action</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">High Severity</p>
                        <p className="text-sm text-muted-foreground">Requires patching within 7 days</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">45</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Schedule patches</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Medium Severity</p>
                        <p className="text-sm text-muted-foreground">Patch within 30 days</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">127</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Plan remediation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Scan Results</CardTitle>
                    <CardDescription>Latest vulnerability scan summary</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-500 mb-2">195</div>
                      <p className="text-sm text-muted-foreground">Total Vulnerabilities</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Last Scan:</span>
                        <span>2 hours ago</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Assets Scanned:</span>
                        <span>1,247</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Scan Duration:</span>
                        <span>3h 24m</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vendor-risk" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Third-Party Risk Assessment</CardTitle>
                    <CardDescription>Vendor security posture evaluation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">CloudSecure Inc</p>
                        <p className="text-sm text-muted-foreground">Cloud Infrastructure Provider</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-500">Low Risk</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Score: 25/100</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">DataVault Solutions</p>
                        <p className="text-sm text-muted-foreground">Backup & Recovery Service</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">Medium Risk</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Score: 58/100</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">QuickAuth Systems</p>
                        <p className="text-sm text-muted-foreground">SSO & Identity Provider</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="destructive">High Risk</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Score: 82/100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Mitigation Actions</CardTitle>
                    <CardDescription>Recommended actions for high-risk vendors</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg">
                      <p className="font-medium text-red-800 dark:text-red-300 mb-1">QuickAuth Systems</p>
                      <p className="text-sm text-red-700 dark:text-red-400">Require additional security controls and monitoring</p>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 rounded-lg">
                      <p className="font-medium text-yellow-800 dark:text-yellow-300 mb-1">DataVault Solutions</p>
                      <p className="text-sm text-yellow-700 dark:text-yellow-400">Request updated security certifications</p>
                    </div>
                    <Button className="w-full" variant="outline">Generate Risk Report</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sla-tracking" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>SLA Performance Tracking</CardTitle>
                  <CardDescription>Service level agreement compliance monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-500 mb-2">99.8%</div>
                      <p className="font-medium">System Uptime</p>
                      <p className="text-sm text-muted-foreground">Target: 99.5%</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-500 mb-2">4.2h</div>
                      <p className="font-medium">Incident Response</p>
                      <p className="text-sm text-muted-foreground">Target: < 4h</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-500 mb-2">28h</div>
                      <p className="font-medium">Recovery Time</p>
                      <p className="text-sm text-muted-foreground">Target: < 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insurance" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cyber Insurance Integration</CardTitle>
                    <CardDescription>Insurance policy management and claims</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Policy #CI-2024-001</p>
                        <p className="text-sm text-muted-foreground">Coverage: $5M • Expires: Dec 2024</p>
                      </div>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Claim #CL-2024-003</p>
                        <p className="text-sm text-muted-foreground">Data breach incident • Filed: Nov 2024</p>
                      </div>
                      <Badge variant="secondary">Processing</Badge>
                    </div>
                    <Button className="w-full">File New Claim</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk-Based Premiums</CardTitle>
                    <CardDescription>Premium calculation based on risk score</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Current Premium</span>
                        <span className="text-sm text-muted-foreground">$45,000/year</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Risk Adjustment</span>
                        <span className="text-sm text-red-500">+15% (High Risk)</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Potential Savings</span>
                        <span className="text-sm text-green-500">-$6,750 (if risk reduced)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contracts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Contract Risk Management</CardTitle>
                  <CardDescription>Blockchain-based automated risk contracts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Auto-Penalty Contract</p>
                      <p className="text-sm text-muted-foreground">Triggers penalties for SLA breaches</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <p className="text-xs text-muted-foreground mt-1">0x4a5e1e4b...</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Insurance Payout Contract</p>
                      <p className="text-sm text-muted-foreground">Automated claim processing</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Pending</Badge>
                      <p className="text-xs text-muted-foreground mt-1">0x8f2a9b5c...</p>
                    </div>
                  </div>
                  <Button className="w-full">Deploy New Contract</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
        
        {activeTab === 'policy-governance' && (
          <Tabs defaultValue="policy-builder" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="policy-builder">Policy Builder</TabsTrigger>
              <TabsTrigger value="enforcement">Policy Enforcement</TabsTrigger>
              <TabsTrigger value="custom-creation">Custom Creation</TabsTrigger>
              <TabsTrigger value="version-control">Version Control</TabsTrigger>
              <TabsTrigger value="alerts">Breach Alerts</TabsTrigger>
              <TabsTrigger value="workflows">Acknowledgement</TabsTrigger>
            </TabsList>

            <TabsContent value="policy-builder" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Policy Builder</CardTitle>
                    <CardDescription>Create policies using templates and drag-drop components</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Policy Template</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Security Policy Template</option>
                        <option>Data Protection Template</option>
                        <option>Access Control Template</option>
                        <option>Incident Response Template</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Policy Name</label>
                      <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter policy name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Scope</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>All Employees</option>
                        <option>IT Department</option>
                        <option>Management Only</option>
                        <option>External Contractors</option>
                      </select>
                    </div>
                    <Button className="w-full">Build New Policy</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Policy Components</CardTitle>
                    <CardDescription>Drag and drop policy elements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-secondary">
                      <p className="font-medium">Password Requirements</p>
                      <p className="text-sm text-muted-foreground">Minimum length, complexity rules</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-secondary">
                      <p className="font-medium">Access Control Rules</p>
                      <p className="text-sm text-muted-foreground">Role-based permissions</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-secondary">
                      <p className="font-medium">Data Classification</p>
                      <p className="text-sm text-muted-foreground">Confidential, internal, public</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="enforcement" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Policy Enforcement Engine</CardTitle>
                  <CardDescription>Automated policy compliance monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Password Policy</p>
                      <p className="text-sm text-muted-foreground">15 violations detected</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Violations</Badge>
                      <Button size="sm" className="ml-2">Enforce</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Data Access Policy</p>
                      <p className="text-sm text-muted-foreground">3 unauthorized access attempts</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Monitoring</Badge>
                      <Button size="sm" className="ml-2">Review</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Device Security Policy</p>
                      <p className="text-sm text-muted-foreground">All devices compliant</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Compliant</Badge>
                      <Button size="sm" className="ml-2" variant="outline">Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custom-creation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Custom Policy Creation</CardTitle>
                  <CardDescription>Build policies from scratch with AI assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Policy Title</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter policy title" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Policy Content</label>
                    <textarea className="w-full p-2 border rounded-md h-32" placeholder="Enter policy content or use AI assistant"></textarea>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">AI Assistant</Button>
                    <Button className="flex-1" variant="outline">Save Draft</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="version-control" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Policy Version Control</CardTitle>
                  <CardDescription>Track policy changes and revisions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Security Policy v2.1</p>
                      <p className="text-sm text-muted-foreground">Updated: Dec 8, 2024 • Author: John Doe</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Current</Badge>
                      <Button size="sm" className="ml-2" variant="outline">View</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Security Policy v2.0</p>
                      <p className="text-sm text-muted-foreground">Updated: Nov 15, 2024 • Author: Jane Smith</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Previous</Badge>
                      <Button size="sm" className="ml-2" variant="outline">Compare</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alerts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Policy Breach Alerts</CardTitle>
                  <CardDescription>Real-time policy violation notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border-l-4 border-red-500 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium text-red-800">Critical Policy Violation</p>
                      <p className="text-sm text-red-700">Unauthorized admin access detected</p>
                      <p className="text-xs text-red-600 mt-1">User: john.doe@company.com • Time: 2 min ago</p>
                    </div>
                    <Button size="sm" variant="destructive">Investigate</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-medium text-yellow-800">Policy Violation</p>
                      <p className="text-sm text-yellow-700">Weak password detected</p>
                      <p className="text-xs text-yellow-600 mt-1">User: jane.smith@company.com • Time: 15 min ago</p>
                    </div>
                    <Button size="sm" variant="secondary">Notify User</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workflows" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Policy Acknowledgement Workflows</CardTitle>
                  <CardDescription>Manage policy acceptance and training workflows</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Security Policy v2.1</p>
                      <p className="text-sm text-muted-foreground">Pending acknowledgement: 45 users</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">In Progress</Badge>
                      <Button size="sm" className="ml-2">Send Reminder</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Data Protection Policy</p>
                      <p className="text-sm text-muted-foreground">Acknowledged: 234/250 users</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">94% Complete</Badge>
                      <Button size="sm" className="ml-2" variant="outline">View Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardShell>
  );
}