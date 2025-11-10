import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import { Cloud, Users, DollarSign, ShieldCheck, Database, Lock, CheckCircle, Monitor, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function CloudVendor() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const isNestedNavActive = ['vendor-dashboard', 'risk-policy-management', 'automation-response'].includes(activeTab);

  return (
    <DashboardShell 
      breadcrumb={[{ label: "Dashboard" }, { label: "Cloud & Vendor Security" }]}
      hideHeaderOnNestedNav={isNestedNavActive}
    >
      <div className="p-6 space-y-6 bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-slate-900/5 min-h-screen">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Cloud & Vendor Security Center</h1>
            <p className="text-muted-foreground">
              Comprehensive cloud security, vendor management, and third-party compliance
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {!['vendor-dashboard', 'risk-policy-management', 'automation-response'].includes(activeTab) && (
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="client-management">Client Management</TabsTrigger>
              <TabsTrigger value="vendor-verification">Vendor Verification</TabsTrigger>
              <TabsTrigger value="third-party-compliance">Third Party Compliance</TabsTrigger>
              <TabsTrigger value="continuous-monitoring">Continuous Monitoring</TabsTrigger>
              <TabsTrigger value="integration-catalog">Integration Catalog</TabsTrigger>
            </TabsList>
          )}

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Active Clients"
                value="127"
                description="Managed clients"
                icon={Users}
                trend={{ value: 5, isPositive: true }}
              />
              <StatCard
                title="Verified Vendors"
                value="42"
                description="Third-party services"
                icon={ShieldCheck}
              />
              <StatCard
                title="Compliance Rate"
                value="94%"
                description="Third-party compliance"
                icon={CheckCircle}
                trend={{ value: 3, isPositive: true }}
              />
              <StatCard
                title="Integrations"
                value="156"
                description="Active protocols"
                icon={Settings}
              />
            </div>
          </TabsContent>

          <TabsContent value="client-management" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Portfolio</CardTitle>
                  <CardDescription>Managed client organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">TechCorp Industries</p>
                      <p className="text-sm text-muted-foreground">Enterprise • 2,500 users</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Security Score: 92%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">HealthSystem Plus</p>
                      <p className="text-sm text-muted-foreground">Healthcare • 850 users</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Security Score: 88%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">FinanceFirst Bank</p>
                      <p className="text-sm text-muted-foreground">Financial • 1,200 users</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Onboarding</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Security Score: 76%</p>
                    </div>
                  </div>
                  <Button className="w-full">Add New Client</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client Security Metrics</CardTitle>
                  <CardDescription>Aggregated security performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Average Security Score</span>
                      <span className="text-sm text-muted-foreground">85.3%</span>
                    </div>
                    <Progress value={85.3} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Compliance Rate</span>
                      <span className="text-sm text-muted-foreground">92.1%</span>
                    </div>
                    <Progress value={92.1} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Incident Response Time</span>
                      <span className="text-sm text-muted-foreground">94.7%</span>
                    </div>
                    <Progress value={94.7} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Training Completion</span>
                      <span className="text-sm text-muted-foreground">78.9%</span>
                    </div>
                    <Progress value={78.9} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vendor-verification" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vendor Verification Status</CardTitle>
                  <CardDescription>Third-party vendor security assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">CloudSecure Inc</p>
                      <p className="text-sm text-muted-foreground">Cloud Infrastructure Provider</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Verified</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Score: 92/100</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">DataVault Solutions</p>
                      <p className="text-sm text-muted-foreground">Backup & Recovery Service</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Verified</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Score: 88/100</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">QuickAuth Systems</p>
                      <p className="text-sm text-muted-foreground">SSO & Identity Provider</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Under Review</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Score: 75/100</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Request Verification</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Verification Criteria</CardTitle>
                  <CardDescription>Security assessment parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Security Certifications</span>
                    <Badge className="bg-green-500">Passed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Penetration Testing</span>
                    <Badge className="bg-green-500">Passed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Data Encryption Standards</span>
                    <Badge className="bg-green-500">Passed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Incident Response Plan</span>
                    <Badge variant="secondary">Under Review</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Business Continuity</span>
                    <Badge variant="destructive">Failed</Badge>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center font-bold">
                      <span>Overall Verification Score</span>
                      <span className="text-2xl text-green-500">85/100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="third-party-compliance" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Framework Status</CardTitle>
                  <CardDescription>Third-party regulatory compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">SOC 2 Type II Attestations</p>
                      <p className="text-xs text-muted-foreground">38 out of 42 vendors</p>
                    </div>
                    <Badge className="bg-green-500">90%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">GDPR Compliance</p>
                      <p className="text-xs text-muted-foreground">42 out of 42 vendors</p>
                    </div>
                    <Badge className="bg-green-500">100%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">ISO 27001 Certified</p>
                      <p className="text-xs text-muted-foreground">35 out of 42 vendors</p>
                    </div>
                    <Badge variant="secondary">83%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">HIPAA Compliance</p>
                      <p className="text-xs text-muted-foreground">12 out of 15 healthcare vendors</p>
                    </div>
                    <Badge variant="secondary">80%</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Monitoring</CardTitle>
                  <CardDescription>Real-time compliance tracking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Certificate Expiry Alerts</p>
                      <p className="text-sm text-muted-foreground">3 certificates expiring in 30 days</p>
                    </div>
                    <Badge variant="destructive">Action Required</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Audit Report Updates</p>
                      <p className="text-sm text-muted-foreground">5 vendors submitted new reports</p>
                    </div>
                    <Badge className="bg-green-500">Updated</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Compliance Violations</p>
                      <p className="text-sm text-muted-foreground">2 minor violations detected</p>
                    </div>
                    <Badge variant="secondary">Under Review</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Generate Compliance Report</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="continuous-monitoring" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    Third Party Tool Monitoring
                  </CardTitle>
                  <CardDescription>Real-time monitoring of integrated tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">Slack Integration</p>
                        <p className="text-sm text-muted-foreground">Communication Platform</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Online</Badge>
                      <p className="text-xs text-muted-foreground mt-1">99.9% uptime</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">Salesforce CRM</p>
                        <p className="text-sm text-muted-foreground">Customer Management</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Online</Badge>
                      <p className="text-xs text-muted-foreground mt-1">99.8% uptime</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <p className="font-medium">GitHub Enterprise</p>
                        <p className="text-sm text-muted-foreground">Code Repository</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Degraded</Badge>
                      <p className="text-xs text-muted-foreground mt-1">97.2% uptime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring Metrics</CardTitle>
                  <CardDescription>Performance and security metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Average Response Time</span>
                      <span className="text-sm text-muted-foreground">245ms</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Security Score</span>
                      <span className="text-sm text-muted-foreground">92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Data Transfer Security</span>
                      <span className="text-sm text-muted-foreground">98%</span>
                    </div>
                    <Progress value={98} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">API Rate Limit Compliance</span>
                      <span className="text-sm text-muted-foreground">87%</span>
                    </div>
                    <Progress value={87} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration-catalog" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Protocols</CardTitle>
                  <CardDescription>Supported integration protocols and standards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 border rounded-lg text-center">
                      <Settings className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">REST API</p>
                      <p className="text-xs text-muted-foreground">HTTP/HTTPS</p>
                    </div>
                    <div className="p-3 border rounded-lg text-center">
                      <Settings className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">GraphQL</p>
                      <p className="text-xs text-muted-foreground">Query Language</p>
                    </div>
                    <div className="p-3 border rounded-lg text-center">
                      <Settings className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">SAML 2.0</p>
                      <p className="text-xs text-muted-foreground">SSO Protocol</p>
                    </div>
                    <div className="p-3 border rounded-lg text-center">
                      <Settings className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">OAuth 2.0</p>
                      <p className="text-xs text-muted-foreground">Authorization</p>
                    </div>
                    <div className="p-3 border rounded-lg text-center">
                      <Settings className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">SCIM</p>
                      <p className="text-xs text-muted-foreground">User Provisioning</p>
                    </div>
                    <div className="p-3 border rounded-lg text-center">
                      <Settings className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">Webhook</p>
                      <p className="text-xs text-muted-foreground">Event Driven</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Integration Marketplace</CardTitle>
                  <CardDescription>Pre-built integrations and connectors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Microsoft 365</p>
                      <p className="text-sm text-muted-foreground">Office Suite Integration</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-500">Certified</Badge>
                      <Button size="sm" variant="outline">Install</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">AWS Security Hub</p>
                      <p className="text-sm text-muted-foreground">Cloud Security Monitoring</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-500">Certified</Badge>
                      <Button size="sm" variant="outline">Install</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Splunk SIEM</p>
                      <p className="text-sm text-muted-foreground">Security Information Management</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Community</Badge>
                      <Button size="sm" variant="outline">Install</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">ServiceNow ITSM</p>
                      <p className="text-sm text-muted-foreground">IT Service Management</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-500">Certified</Badge>
                      <Button size="sm" variant="outline">Install</Button>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Browse All Integrations</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="automation-response" className="space-y-4">
            <Tabs defaultValue="compliance-reports" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="compliance-reports">Compliance Reports</TabsTrigger>
                <TabsTrigger value="alert-notifications">Alert Notifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="compliance-reports" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Automated Vendor Compliance Report</CardTitle>
                    <CardDescription>Periodic automated compliance health reports generated by the system (view-only)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Monthly Compliance Report - December 2024</p>
                          <p className="text-sm text-muted-foreground">Generated: Dec 1, 2024 • Overall Score: 85%</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Available</Badge>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Weekly SLA Performance Report</p>
                          <p className="text-sm text-muted-foreground">Generated: Dec 8, 2024 • SLA Compliance: 75%</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Available</Badge>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Security Assessment Summary</p>
                          <p className="text-sm text-muted-foreground">Generated: Nov 30, 2024 • Risk Score: Medium</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Available</Badge>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Quarterly Compliance Trend Analysis</p>
                          <p className="text-sm text-muted-foreground">Generated: Oct 1, 2024 • Trend: Improving</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Available</Badge>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-medium mb-2">Latest Report Summary</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Compliance Areas</p>
                          <ul className="text-xs text-muted-foreground mt-1 space-y-1">
                            <li>• Data Protection: 92%</li>
                            <li>• Security Controls: 88%</li>
                            <li>• SLA Performance: 75%</li>
                            <li>• Policy Adherence: 80%</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Recommendations</p>
                          <ul className="text-xs text-muted-foreground mt-1 space-y-1">
                            <li>• Improve data recovery times</li>
                            <li>• Update incident response procedures</li>
                            <li>• Complete pending policy acknowledgements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="alert-notifications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Alert Notifications (Vendor-Specific)</CardTitle>
                    <CardDescription>View alerts for SLA breaches or verification issues (read-only)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border-l-4 border-red-500 bg-red-50 rounded-lg">
                        <div>
                          <p className="font-medium text-red-800">SLA Breach Alert</p>
                          <p className="text-sm text-red-700">Data Recovery Time exceeded 24-hour target</p>
                          <p className="text-xs text-red-600 mt-1">Triggered: Dec 8, 2024 at 14:30</p>
                        </div>
                        <Badge variant="destructive">Critical</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
                        <div>
                          <p className="font-medium text-yellow-800">Verification Issue</p>
                          <p className="text-sm text-yellow-700">Backup solution proof pending upload</p>
                          <p className="text-xs text-yellow-600 mt-1">Triggered: Dec 5, 2024 at 09:15</p>
                        </div>
                        <Badge variant="secondary">Warning</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border-l-4 border-red-500 bg-red-50 rounded-lg">
                        <div>
                          <p className="font-medium text-red-800">Policy Acknowledgement Overdue</p>
                          <p className="text-sm text-red-700">Business Continuity Requirements not acknowledged</p>
                          <p className="text-xs text-red-600 mt-1">Triggered: Dec 6, 2024 at 00:00</p>
                        </div>
                        <Badge variant="destructive">Overdue</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium text-blue-800">Compliance Report Available</p>
                          <p className="text-sm text-blue-700">Monthly compliance report ready for download</p>
                          <p className="text-xs text-blue-600 mt-1">Triggered: Dec 1, 2024 at 08:00</p>
                        </div>
                        <Badge className="bg-blue-500">Info</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border-l-4 border-green-500 bg-green-50 rounded-lg">
                        <div>
                          <p className="font-medium text-green-800">SLA Performance Improved</p>
                          <p className="text-sm text-green-700">System availability exceeded target for 7 consecutive days</p>
                          <p className="text-xs text-green-600 mt-1">Triggered: Dec 7, 2024 at 23:59</p>
                        </div>
                        <Badge className="bg-green-500">Success</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="p-3 text-center border rounded-lg">
                        <p className="text-2xl font-bold text-red-500">2</p>
                        <p className="text-xs text-muted-foreground">Critical Alerts</p>
                      </div>
                      <div className="p-3 text-center border rounded-lg">
                        <p className="text-2xl font-bold text-yellow-500">1</p>
                        <p className="text-xs text-muted-foreground">Warnings</p>
                      </div>
                      <div className="p-3 text-center border rounded-lg">
                        <p className="text-2xl font-bold text-blue-500">1</p>
                        <p className="text-xs text-muted-foreground">Info Alerts</p>
                      </div>
                      <div className="p-3 text-center border rounded-lg">
                        <p className="text-2xl font-bold text-green-500">1</p>
                        <p className="text-xs text-muted-foreground">Success Alerts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="risk-policy-management" className="space-y-4">
            <Tabs defaultValue="risk-assessment" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="risk-assessment">Risk Assessment</TabsTrigger>
                <TabsTrigger value="sla-compliance">SLA Compliance</TabsTrigger>
                <TabsTrigger value="policy-acknowledgement">Policy Acknowledgement</TabsTrigger>
              </TabsList>
              
              <TabsContent value="risk-assessment" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Risk Assessment Summary</CardTitle>
                    <CardDescription>View summary of risk categories assigned (read-only)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-2xl font-bold text-yellow-500 mb-2">Medium</div>
                        <p className="font-medium">Confidentiality Risk</p>
                        <p className="text-sm text-muted-foreground mt-2">Data handling processes require monitoring</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-500 mb-2">Low</div>
                        <p className="font-medium">Availability Risk</p>
                        <p className="text-sm text-muted-foreground mt-2">Strong uptime and redundancy measures</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-500 mb-2">Low</div>
                        <p className="font-medium">Integrity Risk</p>
                        <p className="text-sm text-muted-foreground mt-2">Robust data validation and controls</p>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-medium mb-2">Overall Risk Rating: Medium</p>
                      <p className="text-sm text-muted-foreground mb-3">Last assessed: December 1, 2024</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Key Risk Factors:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Data encryption in transit needs improvement</li>
                          <li>• Access control policies require updates</li>
                          <li>• Incident response time within acceptable limits</li>
                          <li>• Strong backup and recovery procedures</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                      <p className="text-sm font-medium text-yellow-800">Action Required</p>
                      <p className="text-sm text-yellow-700 mt-1">Please address confidentiality risk factors to improve overall rating</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sla-compliance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>SLA Compliance Status</CardTitle>
                    <CardDescription>View if SLAs are met or breached (read-only)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">System Availability SLA</p>
                          <p className="text-sm text-muted-foreground">Target: 99.5% • Actual: 99.8%</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-500">Met</Badge>
                          <p className="text-xs text-muted-foreground mt-1">+0.3% above target</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Incident Response Time</p>
                          <p className="text-sm text-muted-foreground">Target: &lt; 4 hours • Actual: 2.3 hours</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-500">Met</Badge>
                          <p className="text-xs text-muted-foreground mt-1">1.7h under target</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Data Recovery Time</p>
                          <p className="text-sm text-muted-foreground">Target: &lt; 24 hours • Actual: 28 hours</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="destructive">Breached</Badge>
                          <p className="text-xs text-muted-foreground mt-1">4h over target</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Security Patch Deployment</p>
                          <p className="text-sm text-muted-foreground">Target: &lt; 72 hours • Actual: 48 hours</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-500">Met</Badge>
                          <p className="text-xs text-muted-foreground mt-1">24h under target</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="font-medium text-green-800">SLAs Met</p>
                        <p className="text-2xl font-bold text-green-600">3/4</p>
                        <p className="text-sm text-green-700">75% compliance rate</p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="font-medium text-red-800">SLAs Breached</p>
                        <p className="text-2xl font-bold text-red-600">1/4</p>
                        <p className="text-sm text-red-700">Requires attention</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="policy-acknowledgement" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Policy Acknowledgement</CardTitle>
                    <CardDescription>Accept or acknowledge relevant cybersecurity and data protection policies</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-medium">Cybersecurity Policy v2.1</p>
                            <p className="text-sm text-muted-foreground">Updated: December 1, 2024</p>
                          </div>
                          <Badge variant="secondary">Pending</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          This policy outlines mandatory cybersecurity requirements for all vendor partners including data encryption, access controls, and incident reporting procedures.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Policy</Button>
                          <Button size="sm">Acknowledge</Button>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-medium">Data Protection Agreement</p>
                            <p className="text-sm text-muted-foreground">Updated: November 15, 2024</p>
                          </div>
                          <Badge className="bg-green-500">Acknowledged</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Agreement covering GDPR compliance, data processing procedures, and privacy protection measures for vendor operations.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Policy</Button>
                          <Button size="sm" disabled>Acknowledged</Button>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-medium">Incident Response Protocol</p>
                            <p className="text-sm text-muted-foreground">Updated: October 30, 2024</p>
                          </div>
                          <Badge className="bg-green-500">Acknowledged</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Protocol defining vendor responsibilities during security incidents, notification requirements, and escalation procedures.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Policy</Button>
                          <Button size="sm" disabled>Acknowledged</Button>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-medium">Business Continuity Requirements</p>
                            <p className="text-sm text-muted-foreground">Updated: December 5, 2024</p>
                          </div>
                          <Badge variant="destructive">Overdue</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Requirements for maintaining business operations during disruptions, backup procedures, and disaster recovery planning.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Policy</Button>
                          <Button size="sm" variant="destructive">Acknowledge (Overdue)</Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-medium mb-2">Acknowledgement Status</p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-green-500">2</p>
                          <p className="text-xs text-muted-foreground">Acknowledged</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-yellow-500">1</p>
                          <p className="text-xs text-muted-foreground">Pending</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-red-500">1</p>
                          <p className="text-xs text-muted-foreground">Overdue</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="vendor-dashboard" className="space-y-4">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
                <TabsTrigger value="profile">Vendor Profile</TabsTrigger>
                <TabsTrigger value="verification">Verification</TabsTrigger>
                <TabsTrigger value="risk-scoring">Risk Scoring</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="tools-verification">Tools Verification</TabsTrigger>
                <TabsTrigger value="sla-tracking">SLA Tracking</TabsTrigger>
                <TabsTrigger value="assurance-docs">Assurance Docs</TabsTrigger>
                <TabsTrigger value="data-security">Data Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Profile Page</CardTitle>
                    <CardDescription>View and update your organization profile, security contacts, and certifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Organization Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" defaultValue="TechVendor Solutions Inc" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Industry</label>
                        <input type="text" className="w-full p-2 border rounded-md" defaultValue="Software Development" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Security Contact</label>
                        <input type="email" className="w-full p-2 border rounded-md" defaultValue="security@techvendor.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Compliance Officer</label>
                        <input type="email" className="w-full p-2 border rounded-md" defaultValue="compliance@techvendor.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Current Certifications</label>
                      <div className="flex gap-2 flex-wrap">
                        <Badge className="bg-green-500">ISO 27001</Badge>
                        <Badge className="bg-green-500">SOC 2 Type II</Badge>
                        <Badge variant="secondary">GDPR Compliant</Badge>
                      </div>
                    </div>
                    <Button className="w-full">Update Profile</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="verification" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Verification Module</CardTitle>
                    <CardDescription>Upload required compliance proofs for verification by auditors</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">SOC 2 Type II Report</p>
                          <p className="text-sm text-muted-foreground">Upload current SOC 2 attestation</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Uploaded</Badge>
                          <Button size="sm">Update</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">ISO 27001 Certificate</p>
                          <p className="text-sm text-muted-foreground">Upload ISO certification</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Uploaded</Badge>
                          <Button size="sm">Update</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Penetration Test Report</p>
                          <p className="text-sm text-muted-foreground">Upload latest pentest results</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Pending</Badge>
                          <Button size="sm">Upload</Button>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Submit for Verification</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="risk-scoring" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Risk Scoring Dashboard</CardTitle>
                    <CardDescription>View assigned cyber risk score and risk factors (read-only)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-500 mb-2">85/100</div>
                      <p className="text-sm text-muted-foreground">Overall Risk Score</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Security Certifications</span>
                        <Badge className="bg-green-500">95/100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Incident History</span>
                        <Badge className="bg-green-500">90/100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Financial Stability</span>
                        <Badge variant="secondary">75/100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Technical Controls</span>
                        <Badge className="bg-green-500">88/100</Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-secondary rounded-lg">
                      <p className="text-sm font-medium mb-2">Risk Factors:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Strong security certification portfolio</li>
                        <li>• No major security incidents in past 12 months</li>
                        <li>• Regular security assessments conducted</li>
                        <li>• Minor: Financial rating could be improved</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="compliance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Third Party Compliance Checklist</CardTitle>
                    <CardDescription>Fill out automated compliance questionnaires</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium mb-2">Data Protection Questionnaire</p>
                        <p className="text-sm text-muted-foreground mb-2">25 questions • Due: Dec 31, 2024</p>
                        <div className="flex justify-between items-center">
                          <Progress value={80} className="flex-1 mr-3" />
                          <Button size="sm">Continue</Button>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium mb-2">Security Controls Assessment</p>
                        <p className="text-sm text-muted-foreground mb-2">40 questions • Due: Jan 15, 2025</p>
                        <div className="flex justify-between items-center">
                          <Progress value={45} className="flex-1 mr-3" />
                          <Button size="sm">Continue</Button>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium mb-2">Business Continuity Planning</p>
                        <p className="text-sm text-muted-foreground mb-2">15 questions • Due: Feb 1, 2025</p>
                        <div className="flex justify-between items-center">
                          <Progress value={0} className="flex-1 mr-3" />
                          <Button size="sm">Start</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tools-verification" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Third Party Tools Verification</CardTitle>
                    <CardDescription>Upload tool verification reports</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Antivirus Solution Report</p>
                          <p className="text-sm text-muted-foreground">CrowdStrike Falcon verification</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Verified</Badge>
                          <Button size="sm">Update</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Firewall Configuration</p>
                          <p className="text-sm text-muted-foreground">Palo Alto Networks setup</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Verified</Badge>
                          <Button size="sm">Update</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Backup Solution Proof</p>
                          <p className="text-sm text-muted-foreground">Veeam backup verification</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Pending</Badge>
                          <Button size="sm">Upload</Button>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Upload New Verification</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sla-tracking" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>SLA Tracking Dashboard</CardTitle>
                    <CardDescription>View SLA metrics (read-only)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-medium">System Uptime</p>
                        <p className="text-2xl font-bold text-green-500">99.8%</p>
                        <p className="text-xs text-muted-foreground">Target: 99.5%</p>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-medium">Incident Response Time</p>
                        <p className="text-2xl font-bold text-green-500">2.3h</p>
                        <p className="text-xs text-muted-foreground">Target: &lt; 4h</p>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-medium">Compliance Score</p>
                        <p className="text-2xl font-bold text-green-500">94%</p>
                        <p className="text-xs text-muted-foreground">Target: &gt; 90%</p>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-medium">Security Incidents</p>
                        <p className="text-2xl font-bold text-green-500">0</p>
                        <p className="text-xs text-muted-foreground">This month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="assurance-docs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Assurance Documents</CardTitle>
                    <CardDescription>Upload signed agreements, download compliance requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Master Service Agreement</p>
                          <p className="text-sm text-muted-foreground">Signed: Dec 1, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Signed</Badge>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Data Processing Agreement</p>
                          <p className="text-sm text-muted-foreground">Status: Pending signature</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Pending</Badge>
                          <Button size="sm">Upload Signed</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Security Requirements Document</p>
                          <p className="text-sm text-muted-foreground">Updated: Nov 15, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500">Available</Badge>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">Upload New Document</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="data-security" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Backup & Data Security</CardTitle>
                    <CardDescription>View required encryption/tokenization compliance guidance (read-only)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-medium mb-2">Encryption Requirements</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Data at rest: AES-256 encryption required</li>
                          <li>• Data in transit: TLS 1.3 minimum</li>
                          <li>• Key management: FIPS 140-2 Level 3</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-medium mb-2">Tokenization Standards</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• PCI DSS compliant tokenization</li>
                          <li>• Format preserving encryption</li>
                          <li>• Secure token vault implementation</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg">
                        <p className="font-medium mb-2">Backup Requirements</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 3-2-1 backup strategy mandatory</li>
                          <li>• Encrypted backups with separate keys</li>
                          <li>• Regular restore testing required</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Download Full Compliance Guide</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}