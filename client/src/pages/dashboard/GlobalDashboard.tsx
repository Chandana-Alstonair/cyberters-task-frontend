import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import ThreatMap from "@/components/ThreatMap";
import DataTableSimple from "@/components/DataTableSimple";
import { Shield, AlertTriangle, Activity, Users, TrendingUp, Lock, Brain, BarChart3, Target, Eye, Zap, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const lineData = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 150 },
  { name: "Wed", value: 180 },
  { name: "Thu", value: 90 },
  { name: "Fri", value: 200 },
  { name: "Sat", value: 140 },
  { name: "Sun", value: 110 },
];

const pieData = [
  { name: "Phishing", value: 400 },
  { name: "Malware", value: 300 },
  { name: "DDoS", value: 200 },
  { name: "Insider", value: 100 },
];

const recentAlertsColumns = [
  { key: "type", label: "Type" },
  {
    key: "severity",
    label: "Severity",
    render: (value: string) => <Badge variant={value === "critical" ? "destructive" : "default"}>{value}</Badge>,
  },
  { key: "source", label: "Source" },
  { key: "time", label: "Time" },
];

const recentAlertsData = [
  { type: "DDoS Attack", severity: "critical", source: "192.168.1.50", time: "2 min ago" },
  { type: "Phishing", severity: "high", source: "10.0.0.45", time: "15 min ago" },
  { type: "Malware", severity: "medium", source: "172.16.0.12", time: "1 hour ago" },
];

export default function GlobalDashboard() {
  const [activeOverviewTab, setActiveOverviewTab] = useState("kpi-overview");
  const [activeMainTab, setActiveMainTab] = useState("overview");
  
  // Get tab from URL params and update when URL changes
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab === 'analytics') {
      setActiveMainTab('analytics');
    } else {
      setActiveMainTab('overview');
    }
  }, [window.location.search]);

  return (
    <DashboardShell breadcrumb={[{ label: "Dashboard" }, { label: "Global Overview" }]}>
      <div className="p-6 space-y-6">
        {activeMainTab === "overview" && activeOverviewTab === "kpi-overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2 heading-gradient-hover">Global Dashboard - Security Overview</h1>
            <p className="text-muted-foreground">
              Comprehensive overview of your security posture across all modules
            </p>
          </div>
        )}
        
        {activeMainTab === "analytics" && (
          <div>
            <h1 className="text-3xl font-bold mb-2 heading-gradient-hover">Global Dashboard - Analytics & Intelligence</h1>
            <p className="text-muted-foreground">
              Advanced AI-powered analytics and threat intelligence insights
            </p>
          </div>
        )}



        {activeMainTab === "overview" && (
          <Tabs value={activeOverviewTab} onValueChange={setActiveOverviewTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="kpi-overview" className="header-tab-hover">KPI Overview</TabsTrigger>
              <TabsTrigger value="threat-trends" className="header-tab-hover">Threat Trends</TabsTrigger>
              <TabsTrigger value="threat-distribution" className="header-tab-hover">Threat Distribution</TabsTrigger>
              <TabsTrigger value="live-threat-map" className="header-tab-hover">Live Threat Map</TabsTrigger>
            </TabsList>

              <TabsContent value="kpi-overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <DataTableSimple
                  title="Recent Critical Alerts"
                  columns={recentAlertsColumns}
                  data={recentAlertsData}
                  actions={true}
                />
              </TabsContent>

              <TabsContent value="threat-trends" className="space-y-4">
                <ChartCard
                  title="Threat Trend (7 Days)"
                  type="line"
                  data={lineData}
                  description="Daily threat detections"
                />
              </TabsContent>

              <TabsContent value="threat-distribution" className="space-y-4">
                <ChartCard
                  title="Threat Distribution"
                  type="pie"
                  data={pieData}
                  description="By category"
                />
              </TabsContent>

              <TabsContent value="live-threat-map" className="space-y-4">
                <ThreatMap />
              </TabsContent>


          </Tabs>
        )}
        
        {activeMainTab === "analytics" && (
          <Tabs defaultValue="predictive-analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="predictive-analytics" className="header-tab-hover">Predictive Analytics</TabsTrigger>
              <TabsTrigger value="threat-intelligence" className="header-tab-hover">Threat Intelligence</TabsTrigger>
              <TabsTrigger value="predictive-insights" className="header-tab-hover">Predictive Insights</TabsTrigger>
              <TabsTrigger value="attack-surface" className="header-tab-hover">Attack Surface</TabsTrigger>
              <TabsTrigger value="trend-analysis" className="header-tab-hover">Trend Analysis</TabsTrigger>
              <TabsTrigger value="behavioral-analytics" className="header-tab-hover">Behavioral Analytics</TabsTrigger>
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
                          <AlertTriangle className="h-4 w-4 text-red-500" />
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
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-blue-500" />
                          <span className="font-medium text-blue-700 dark:text-blue-300">Defensive Opportunity</span>
                        </div>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Optimal time window for security patch deployment</p>
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
                          <Button size="sm" className="ml-2 header-nav-hover">Reduce</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Open Ports</p>
                          <p className="text-sm text-muted-foreground">23 services running</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">Medium Risk</Badge>
                          <Button size="sm" className="ml-2 header-nav-hover">Optimize</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Cloud Resources</p>
                          <p className="text-sm text-muted-foreground">156 assets monitored</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-500">Low Risk</Badge>
                          <Button size="sm" className="ml-2 header-nav-hover">Maintain</Button>
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
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Monitoring Coverage</span>
                          <span className="text-sm text-muted-foreground">94.8%</span>
                        </div>
                        <Progress value={94.8} />
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
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Insider Threats</span>
                          <Badge variant="secondary">→ 0%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Stable with no significant change</p>
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
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Risk Exposure</span>
                          <span className="text-sm text-yellow-500">+3% increase</span>
                        </div>
                        <Progress value={103} className="h-2" />
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
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Off-hours Login Pattern</p>
                          <p className="text-sm text-muted-foreground">Multiple users affected</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">Medium Risk</Badge>
                          <p className="text-xs text-muted-foreground mt-1">Risk Score: 58</p>
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
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Application Usage</span>
                          <span className="text-sm text-muted-foreground">Within normal range</span>
                        </div>
                        <Progress value={100} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardShell>
  );
}