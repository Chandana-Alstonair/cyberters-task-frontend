import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import DataTableSimple from "@/components/DataTableSimple";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Play, GitBranch, CheckCircle, AlertCircle, Clock, Brain, BarChart3, Target, Eye, TrendingUp, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const automationData = [
  { name: "Mon", value: 45 },
  { name: "Tue", value: 52 },
  { name: "Wed", value: 48 },
  { name: "Thu", value: 61 },
  { name: "Fri", value: 55 },
  { name: "Sat", value: 38 },
  { name: "Sun", value: 42 },
];

const responseData = [
  { name: "Automated", value: 75 },
  { name: "Manual", value: 20 },
  { name: "Pending", value: 5 },
];

const incidentsColumns = [
  { key: "id", label: "ID" },
  { key: "type", label: "Incident Type" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => {
      const variants: Record<string, "default" | "destructive" | "secondary"> = {
        resolved: "default",
        "in progress": "secondary",
        pending: "destructive",
      };
      return <Badge variant={variants[value] || "default"}>{value}</Badge>;
    },
  },
  { key: "response", label: "Response Type" },
  { key: "time", label: "Detected" },
];

const incidentsData = [
  { id: "INC-001", type: "Malware Detection", status: "resolved", response: "Auto-quarantine", time: "10 min ago" },
  { id: "INC-002", type: "DDoS Attack", status: "in progress", response: "Auto-mitigate", time: "25 min ago" },
  { id: "INC-003", type: "Unauthorized Access", status: "pending", response: "Manual review", time: "1 hour ago" },
];

export default function Automation() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardShell breadcrumb={[{ label: "Dashboard" }, { label: "Automation & Response" }]}>
      <div className="p-6 space-y-6">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Automation & Response Center</h1>
            <p className="text-muted-foreground">
              Orchestrate automated responses and advanced analytics workflows
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="automation">Automation & Response</TabsTrigger>
            <TabsTrigger value="analytics">Analytics & Intelligence</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Active Playbooks"
                value="28"
                description="Running workflows"
                icon={Play}
                trend={{ value: 4, isPositive: true }}
              />
              <StatCard
                title="Automated Responses"
                value="347"
                description="This week"
                icon={Zap}
                trend={{ value: 12, isPositive: true }}
              />
              <StatCard
                title="Avg Response Time"
                value="< 1s"
                description="Automation speed"
                icon={Clock}
              />
              <StatCard
                title="Success Rate"
                value="99.2%"
                description="Playbook execution"
                icon={CheckCircle}
              />
            </div>
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard
                title="Automation Activity (7 Days)"
                type="bar"
                data={automationData}
                description="Automated responses per day"
              />
              <ChartCard
                title="Response Distribution"
                type="pie"
                data={responseData}
                description="Response types"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Orchestration (SOAR)</CardTitle>
                  <CardDescription>Active automated workflows</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg hover-elevate">
                      <div className="flex items-center gap-3">
                        <GitBranch className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">Threat Containment</p>
                          <p className="text-xs text-muted-foreground">Auto-isolate compromised endpoints</p>
                        </div>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg hover-elevate">
                      <div className="flex items-center gap-3">
                        <GitBranch className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">Incident Escalation</p>
                          <p className="text-xs text-muted-foreground">Auto-notify security team</p>
                        </div>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg hover-elevate">
                      <div className="flex items-center gap-3">
                        <GitBranch className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">Patch Deployment</p>
                          <p className="text-xs text-muted-foreground">Auto-apply security patches</p>
                        </div>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Patch Management</CardTitle>
                  <CardDescription>System patch status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Critical Patches</span>
                        <Badge variant="destructive">3 Pending</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">CVE-2024-12345, CVE-2024-12346, CVE-2024-12347</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Security Updates</span>
                        <Badge>12 Pending</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">Scheduled for next maintenance window</div>
                    </div>
                    <Button variant="outline" className="w-full">Apply All Critical Patches</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <DataTableSimple
              title="Recent Incidents"
              columns={incidentsColumns}
              data={incidentsData}
              actions={true}
            />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Tabs defaultValue="predictive-analytics" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="predictive-analytics">Predictive Analytics</TabsTrigger>
                <TabsTrigger value="threat-intelligence">Threat Intelligence</TabsTrigger>
                <TabsTrigger value="predictive-insights">Predictive Insights</TabsTrigger>
                <TabsTrigger value="attack-surface">Attack Surface</TabsTrigger>
                <TabsTrigger value="trend-analysis">Trend Analysis</TabsTrigger>
                <TabsTrigger value="behavioral-analytics">Behavioral Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="predictive-analytics" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Predictive Analytics Engine
                      </CardTitle>
                      <CardDescription>AI-powered threat prediction and forecasting</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Next 24h Threat Probability</span>
                          <span className="text-sm text-red-500">High (78%)</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Ransomware Risk</span>
                          <span className="text-sm text-yellow-500">Medium (45%)</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Data Breach Likelihood</span>
                          <span className="text-sm text-green-500">Low (12%)</span>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Prediction Accuracy</CardTitle>
                      <CardDescription>Model performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Overall Accuracy</span>
                          <span className="text-sm text-muted-foreground">94.7%</span>
                        </div>
                        <Progress value={94.7} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">False Positive Rate</span>
                          <span className="text-sm text-muted-foreground">3.2%</span>
                        </div>
                        <Progress value={3.2} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Model Confidence</span>
                          <span className="text-sm text-muted-foreground">91.8%</span>
                        </div>
                        <Progress value={91.8} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="threat-intelligence" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5" />
                        AI-driven Threat Intelligence Feeds
                      </CardTitle>
                      <CardDescription>Real-time intelligence from multiple sources</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div>
                            <p className="font-medium">MITRE ATT&CK Feed</p>
                            <p className="text-sm text-muted-foreground">Latest TTPs and indicators</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div>
                            <p className="font-medium">Dark Web Intelligence</p>
                            <p className="text-sm text-muted-foreground">Underground forum monitoring</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div>
                            <p className="font-medium">Commercial Threat Feeds</p>
                            <p className="text-sm text-muted-foreground">Premium intelligence sources</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Updating</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Intelligence Metrics</CardTitle>
                      <CardDescription>Feed performance and coverage</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">IOC Coverage</span>
                          <span className="text-sm text-muted-foreground">2.4M indicators</span>
                        </div>
                        <Progress value={87} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Feed Freshness</span>
                          <span className="text-sm text-muted-foreground">98.5% current</span>
                        </div>
                        <Progress value={98.5} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Attribution Accuracy</span>
                          <span className="text-sm text-muted-foreground">92.1%</span>
                        </div>
                        <Progress value={92.1} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="predictive-insights" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Predictive Insights Dashboard
                      </CardTitle>
                      <CardDescription>Future threat landscape predictions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="h-4 w-4 text-red-500" />
                          <span className="font-medium text-red-700 dark:text-red-300">High Risk Prediction</span>
                        </div>
                        <p className="text-sm text-red-600 dark:text-red-400">85% chance of targeted phishing campaign in next 72 hours</p>
                      </div>
                      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium text-yellow-700 dark:text-yellow-300">Emerging Threat</span>
                        </div>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">New malware variant detected in similar organizations</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Insight Confidence Levels</CardTitle>
                      <CardDescription>Prediction reliability metrics</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Threat Actor Attribution</span>
                          <span className="text-sm text-muted-foreground">89%</span>
                        </div>
                        <Progress value={89} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Attack Vector Prediction</span>
                          <span className="text-sm text-muted-foreground">76%</span>
                        </div>
                        <Progress value={76} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Timeline Accuracy</span>
                          <span className="text-sm text-muted-foreground">82%</span>
                        </div>
                        <Progress value={82} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="attack-surface" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Network className="h-5 w-5" />
                        Dynamic Attack Surface Manipulation
                      </CardTitle>
                      <CardDescription>Real-time attack surface management</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">External IP Addresses</p>
                          <p className="text-sm text-muted-foreground">47 exposed endpoints</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="destructive">High Risk</Badge>
                          <Button size="sm" className="ml-2">Reduce</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Open Ports</p>
                          <p className="text-sm text-muted-foreground">23 services running</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">Medium Risk</Badge>
                          <Button size="sm" className="ml-2">Optimize</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Attack Surface Metrics</CardTitle>
                      <CardDescription>Surface area analysis and trends</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Surface Reduction</span>
                          <span className="text-sm text-muted-foreground">-23% this month</span>
                        </div>
                        <Progress value={77} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Critical Exposure</span>
                          <span className="text-sm text-muted-foreground">3 high-risk assets</span>
                        </div>
                        <Progress value={15} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="trend-analysis" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Security Trend Analysis
                      </CardTitle>
                      <CardDescription>Historical patterns and future projections</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Phishing Attacks</span>
                          <Badge variant="destructive">↑ 34%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Significant increase over last 30 days</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Malware Detections</span>
                          <Badge className="bg-green-500">↓ 12%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Decreased due to improved defenses</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Trend Predictions</CardTitle>
                      <CardDescription>Next 90-day security outlook</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Expected Threat Volume</span>
                          <span className="text-sm text-red-500">+18% increase</span>
                        </div>
                        <Progress value={118} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Defense Effectiveness</span>
                          <span className="text-sm text-green-500">+7% improvement</span>
                        </div>
                        <Progress value={107} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="behavioral-analytics" className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Behavioral Threat Analytics
                      </CardTitle>
                      <CardDescription>User and entity behavior analysis</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Anomalous User Activity</p>
                          <p className="text-sm text-muted-foreground">john.doe@company.com</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="destructive">High Risk</Badge>
                          <p className="text-xs text-muted-foreground mt-1">Risk Score: 87</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Unusual Data Access</p>
                          <p className="text-sm text-muted-foreground">Database: customer_data</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">Medium Risk</Badge>
                          <p className="text-xs text-muted-foreground mt-1">Risk Score: 64</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Behavioral Baselines</CardTitle>
                      <CardDescription>Normal behavior patterns and deviations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Login Pattern Deviation</span>
                          <span className="text-sm text-muted-foreground">23% above normal</span>
                        </div>
                        <Progress value={123} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Data Access Volume</span>
                          <span className="text-sm text-muted-foreground">8% below normal</span>
                        </div>
                        <Progress value={92} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}