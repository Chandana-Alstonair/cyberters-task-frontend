import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import { Shield, FileDown, Bell, FileCheck2, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function Client() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const isNestedNavActive = ['insurance-integration'].includes(activeTab);

  return (
    <DashboardShell 
      breadcrumb={[{ label: "Dashboard" }, { label: "Client Portal" }]}
      hideHeaderOnNestedNav={isNestedNavActive}
    >
      <div className="p-6 space-y-6">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Client Management Dashboard</h1>
            <p className="text-muted-foreground">
              Personalized view of your cybersecurity health, incidents, and service metrics
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Client Overview</TabsTrigger>
            <TabsTrigger value="incidents">Incident Summary</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Snapshot</TabsTrigger>
            <TabsTrigger value="tickets">Ticket Tracker</TabsTrigger>
            <TabsTrigger value="reports">Security Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Client Overview Panel</CardTitle>
                <CardDescription>Summary of your organization and service details (view-only)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">Organization Name</p>
                      <p className="text-xl font-bold">TechCorp Industries</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">Service Tier</p>
                      <p className="text-xl font-bold">Enterprise Premium</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">Last Assessment Date</p>
                      <p className="text-xl font-bold">December 1, 2024</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">Account Manager</p>
                      <p className="text-xl font-bold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">sarah.johnson@cyberters.com</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">Contract Status</p>
                      <p className="text-xl font-bold text-green-500">Active</p>
                      <p className="text-sm text-muted-foreground">Expires: December 2025</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">Users Covered</p>
                      <p className="text-xl font-bold">2,500</p>
                      <p className="text-sm text-muted-foreground">Enterprise employees</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="incidents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Incident Summary</CardTitle>
                <CardDescription>Open incidents affecting your environment (view & comment on own incidents only)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">INC-2024-001: Phishing Email Detected</p>
                    <p className="text-sm text-muted-foreground">Detected: Dec 8, 2024 • Affected: 3 users</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive">Critical</Badge>
                    <Button size="sm" className="ml-2">Add Comment</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">INC-2024-002: Suspicious Network Activity</p>
                    <p className="text-sm text-muted-foreground">Detected: Dec 7, 2024 • Source: External IP</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Medium</Badge>
                    <Button size="sm" className="ml-2">Add Comment</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">INC-2024-003: Failed Login Attempts</p>
                    <p className="text-sm text-muted-foreground">Detected: Dec 6, 2024 • Account: admin@techcorp.com</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500">Resolved</Badge>
                    <Button size="sm" className="ml-2" variant="outline">View Details</Button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="p-3 text-center border rounded-lg">
                    <p className="text-2xl font-bold text-red-500">1</p>
                    <p className="text-xs text-muted-foreground">Critical</p>
                  </div>
                  <div className="p-3 text-center border rounded-lg">
                    <p className="text-2xl font-bold text-yellow-500">1</p>
                    <p className="text-xs text-muted-foreground">Medium</p>
                  </div>
                  <div className="p-3 text-center border rounded-lg">
                    <p className="text-2xl font-bold text-green-500">1</p>
                    <p className="text-xs text-muted-foreground">Resolved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Snapshot</CardTitle>
                <CardDescription>Visual gauge showing compliance readiness (view-only)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-500 mb-4">93%</div>
                  <p className="text-lg font-medium">Overall Compliance Readiness</p>
                  <p className="text-sm text-muted-foreground">Last updated: December 8, 2024</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">98%</div>
                    <p className="font-medium">GDPR Compliance</p>
                    <p className="text-sm text-muted-foreground">Data Protection Regulation</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">94%</div>
                    <p className="font-medium">ISO 27001</p>
                    <p className="text-sm text-muted-foreground">Information Security</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">87%</div>
                    <p className="font-medium">SOC 2 Type II</p>
                    <p className="text-sm text-muted-foreground">Service Organization Control</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">GDPR Compliance</span>
                      <span className="text-sm text-muted-foreground">98%</span>
                    </div>
                    <Progress value={98} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">ISO 27001 Compliance</span>
                      <span className="text-sm text-muted-foreground">94%</span>
                    </div>
                    <Progress value={94} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">SOC 2 Type II</span>
                      <span className="text-sm text-muted-foreground">87%</span>
                    </div>
                    <Progress value={87} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ticket / Request Tracker</CardTitle>
                  <CardDescription>Track your requests and create new tickets (view & create own tickets only)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">TKT-2024-001: Risk Report Request</p>
                      <p className="text-sm text-muted-foreground">Requested: Dec 5, 2024 • Priority: High</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">In Progress</Badge>
                      <p className="text-xs text-muted-foreground mt-1">ETA: Dec 12, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">TKT-2024-002: Compliance Validation</p>
                      <p className="text-sm text-muted-foreground">Requested: Dec 3, 2024 • Priority: Medium</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Completed</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Completed: Dec 7, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">TKT-2024-003: Threat Report Request</p>
                      <p className="text-sm text-muted-foreground">Requested: Dec 1, 2024 • Priority: Low</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Open</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Awaiting assignment</p>
                    </div>
                  </div>
                  <Button className="w-full">Create New Ticket</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Request Options</CardTitle>
                  <CardDescription>Common request types for faster ticket creation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <FileDown className="mr-2 h-4 w-4" />
                    Request Risk Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="mr-2 h-4 w-4" />
                    Request Compliance Validation
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Request Threat Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileCheck2 className="mr-2 h-4 w-4" />
                    Request Security Assessment
                  </Button>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="p-3 text-center border rounded-lg">
                      <p className="text-2xl font-bold text-red-500">1</p>
                      <p className="text-xs text-muted-foreground">Open</p>
                    </div>
                    <div className="p-3 text-center border rounded-lg">
                      <p className="text-2xl font-bold text-yellow-500">1</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                    <div className="p-3 text-center border rounded-lg">
                      <p className="text-2xl font-bold text-green-500">1</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>



          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Posture Report Download</CardTitle>
                <CardDescription>Export latest audit or assurance summary (download only)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Latest Security Audit Report</p>
                    <p className="text-sm text-muted-foreground">Generated: December 1, 2024 • 42 pages • PDF</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-500">Available</Badge>
                    <Button size="sm" variant="outline">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Compliance Assurance Summary</p>
                    <p className="text-sm text-muted-foreground">Generated: November 28, 2024 • 28 pages • PDF</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-500">Available</Badge>
                    <Button size="sm" variant="outline">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Risk Assessment Report</p>
                    <p className="text-sm text-muted-foreground">Generated: November 15, 2024 • 35 pages • PDF</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-500">Available</Badge>
                    <Button size="sm" variant="outline">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Quarterly Security Summary</p>
                    <p className="text-sm text-muted-foreground">Generated: October 31, 2024 • 22 pages • PDF</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-500">Available</Badge>
                    <Button size="sm" variant="outline">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-secondary rounded-lg mt-6">
                  <p className="font-medium mb-2">Report Summary</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Latest Assessment Date</p>
                      <p className="text-sm text-muted-foreground">December 1, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Overall Security Score</p>
                      <p className="text-sm text-green-500 font-bold">93/100</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Critical Issues</p>
                      <p className="text-sm text-muted-foreground">0 identified</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Next Assessment</p>
                      <p className="text-sm text-muted-foreground">March 1, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}