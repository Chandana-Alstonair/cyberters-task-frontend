import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import { FileCheck, Calendar, Upload, FileText, CheckSquare, Shield, Link as LinkIcon, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function AuditCompliance() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const isNestedNavActive = ['automation', 'risk-policy', 'insurance'].includes(activeTab);

  return (
    <DashboardShell 
      breadcrumb={[{ label: "Dashboard" }, { label: "Audit & Compliance" }]}
      hideHeaderOnNestedNav={isNestedNavActive}
    >
      <div className="p-6 space-y-6 bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-slate-900/5 min-h-screen">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Audit & Compliance Center</h1>
            <p className="text-muted-foreground">
              Comprehensive audit management with blockchain-verified compliance tracking
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="proof">Proof</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Active Audits"
                value="12"
                description="In progress"
                icon={FileCheck}
                trend={{ value: 3, isPositive: true }}
              />
              <StatCard
                title="Compliance Score"
                value="94.5%"
                description="Overall rating"
                icon={CheckSquare}
                trend={{ value: 2.1, isPositive: true }}
              />
              <StatCard
                title="Evidence Files"
                value="1,247"
                description="Uploaded this month"
                icon={Upload}
              />
              <StatCard
                title="Blockchain Records"
                value="2,453"
                description="Immutable entries"
                icon={LinkIcon}
              />
            </div>
          </TabsContent>


          <TabsContent value="scheduling" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule New Audit
                  </CardTitle>
                  <CardDescription>Create and schedule compliance audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Create Audit Schedule</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Audits</CardTitle>
                  <CardDescription>Next 30 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">ISO 27001 Review</p>
                      <p className="text-sm text-muted-foreground">Dec 15, 2024</p>
                    </div>
                    <Badge>Scheduled</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">SOC 2 Assessment</p>
                      <p className="text-sm text-muted-foreground">Dec 22, 2024</p>
                    </div>
                    <Badge variant="secondary">Pending</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Audit Calendar</CardTitle>
                  <CardDescription>Monthly overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Audits this month</p>
                  </div>
                  <Button className="w-full mt-3" variant="outline">View Calendar</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Progress Overview</CardTitle>
                  <CardDescription>Current audit status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Q4 2024 Compliance</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">GDPR Annual Review</span>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <Progress value={100} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">SOC 2 Type II</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Milestone Tracking</CardTitle>
                  <CardDescription>Key audit milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Planning Phase</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Evidence Collection</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Review & Analysis</p>
                      <p className="text-sm text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="evidence" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload Evidence
                  </CardTitle>
                  <CardDescription>Upload audit evidence and documentation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Drag & drop files or click to browse</p>
                  </div>
                  <Button className="w-full">Upload Files</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Uploads</CardTitle>
                  <CardDescription>Latest evidence files</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">security-policy-v2.pdf</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                    <Badge>Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">access-control-matrix.xlsx</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                    <Badge>Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">incident-response-log.csv</p>
                      <p className="text-sm text-muted-foreground">3 days ago</p>
                    </div>
                    <Badge variant="secondary">Processing</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>ISO 27001 Template</CardTitle>
                  <CardDescription>Information Security Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge className="mb-2">Standard Template</Badge>
                    <p className="text-sm text-muted-foreground">114 controls • 12 domains</p>
                  </div>
                  <Button className="w-full" variant="outline">Use Template</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SOC 2 Type II Template</CardTitle>
                  <CardDescription>Service Organization Control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge className="mb-2">Standard Template</Badge>
                    <p className="text-sm text-muted-foreground">5 trust principles • 64 criteria</p>
                  </div>
                  <Button className="w-full" variant="outline">Use Template</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>GDPR Compliance Template</CardTitle>
                  <CardDescription>Data Protection Regulation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge className="mb-2">Standard Template</Badge>
                    <p className="text-sm text-muted-foreground">99 articles • 7 principles</p>
                  </div>
                  <Button className="w-full" variant="outline">Use Template</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Generate Report
                  </CardTitle>
                  <CardDescription>Create comprehensive audit reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Generate New Report</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Generated audit reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Q4 2024 Compliance Report</p>
                      <p className="text-sm text-muted-foreground">Generated today</p>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">GDPR Assessment Report</p>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Automated Policy Checks</CardTitle>
                  <CardDescription>Real-time compliance monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Password Policy</span>
                    <Badge className="bg-green-500">Compliant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Access Control</span>
                    <Badge className="bg-green-500">Compliant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Data Encryption</span>
                    <Badge variant="destructive">Non-Compliant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Backup Policy</span>
                    <Badge variant="secondary">Under Review</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Frameworks</CardTitle>
                  <CardDescription>Active compliance standards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">ISO 27001:2022</span>
                      <span className="text-sm text-muted-foreground">92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">GDPR Compliance</span>
                      <span className="text-sm text-muted-foreground">98%</span>
                    </div>
                    <Progress value={98} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">SOC 2 Type II</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Immutable Audit Logs
                </CardTitle>
                <CardDescription>Blockchain-verified audit trail entries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Block Hash:</span>
                    <Badge className="bg-green-500">Verified</Badge>
                  </div>
                  <p className="text-xs break-all text-primary">
                    0x4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Entry: Security policy update - 2024-12-10 14:23:45 UTC</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Block Hash:</span>
                    <Badge className="bg-green-500">Verified</Badge>
                  </div>
                  <p className="text-xs break-all text-primary">
                    0x8f2a9b5c7d3e1f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4c6d8e0f2
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Entry: User access review - 2024-12-10 12:15:32 UTC</p>
                </div>
                <Button variant="outline" className="w-full">View Full Blockchain Log</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="proof" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Digital Certificates
                  </CardTitle>
                  <CardDescription>Compliance certifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">ISO 27001:2022 Certificate</p>
                      <p className="text-sm text-muted-foreground">Valid until: Dec 2025</p>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">SOC 2 Type II Report</p>
                      <p className="text-sm text-muted-foreground">Valid until: Jun 2025</p>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Badges</CardTitle>
                  <CardDescription>Digital proof of compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 border rounded-lg">
                      <Shield className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      <p className="text-sm font-medium">ISO 27001</p>
                      <p className="text-xs text-muted-foreground">Certified</p>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <Shield className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                      <p className="text-sm font-medium">SOC 2</p>
                      <p className="text-xs text-muted-foreground">Type II</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">Generate Compliance Badge</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Automated Assessment Flows</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Configure and launch automated audits" 
                      : "View automated audit flows (read-only)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">ISO 27001 Assessment</p>
                      <p className="text-sm text-muted-foreground">Automated compliance check</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Active</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Configure</Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">GDPR Compliance Flow</p>
                      <p className="text-sm text-muted-foreground">Data protection assessment</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Scheduled</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Launch</Button>
                      )}
                    </div>
                  </div>
                  {localStorage.getItem("userRole") === "Compliance Officer" && (
                    <Button className="w-full">Create New Assessment Flow</Button>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Auto Prioritization Engine</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Assign risk weights and configure scoring" 
                      : "View scoring output (read-only)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Critical Findings</span>
                      <span className="text-sm text-red-500">Weight: 90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" variant="outline">Adjust Weight</Button>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">High Risk Issues</span>
                      <span className="text-sm text-orange-500">Weight: 70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" variant="outline">Adjust Weight</Button>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Medium Risk Issues</span>
                      <span className="text-sm text-yellow-500">Weight: 40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" variant="outline">Adjust Weight</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Root Cause Analysis</CardTitle>
                <CardDescription>
                  {localStorage.getItem("userRole") === "Compliance Officer" 
                    ? "Trigger RCA on compliance failures" 
                    : "View completed RCAs (read-only)"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">GDPR Data Breach Incident</p>
                    <p className="text-sm text-muted-foreground">RCA Status: Completed</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500">Resolved</Badge>
                    <Button size="sm" className="ml-2" variant="outline">View Report</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Access Control Violation</p>
                    <p className="text-sm text-muted-foreground">RCA Status: In Progress</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Analyzing</Badge>
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" className="ml-2">Manage RCA</Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Policy Compliance Failure</p>
                    <p className="text-sm text-muted-foreground">RCA Status: Pending</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive">Critical</Badge>
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" className="ml-2">Trigger RCA</Button>
                    )}
                  </div>
                </div>
                {localStorage.getItem("userRole") === "Compliance Officer" && (
                  <Button className="w-full" variant="outline">Create New RCA</Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk-policy" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Status Page</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Full visibility and edit status capabilities" 
                      : "View compliance status (read-only)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">GDPR Compliance</p>
                      <p className="text-sm text-muted-foreground">Status: 98% compliant</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Compliant</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Edit Status</Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">ISO 27001</p>
                      <p className="text-sm text-muted-foreground">Status: 92% compliant</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Compliant</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Edit Status</Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">SOC 2 Type II</p>
                      <p className="text-sm text-muted-foreground">Status: 85% compliant</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">In Progress</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Update Status</Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Automated Policy Compliance Check</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Execute automated compliance checks" 
                      : "View compliance check results (read-only)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Password Policy Check</span>
                      <Badge className="bg-green-500">Passed</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" variant="outline">Re-run Check</Button>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Access Control Check</span>
                      <Badge variant="destructive">Failed</Badge>
                    </div>
                    <Progress value={65} className="h-2" />
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" variant="outline">Execute Check</Button>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Data Encryption Check</span>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <Progress value={0} className="h-2" />
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" variant="outline">Start Check</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regulatory AI Assistant</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Generate regulatory mapping and guidance" 
                      : "Access mapped compliance summary (read-only)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">GDPR Article 32 Mapping</span>
                      <Badge className="bg-green-500">Complete</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Security of processing requirements mapped to controls</p>
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" className="mt-2">Regenerate Mapping</Button>
                    )}
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">ISO 27001 Control Mapping</span>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Information security controls alignment</p>
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" className="mt-2">Generate Mapping</Button>
                    )}
                  </div>
                  {localStorage.getItem("userRole") === "Compliance Officer" && (
                    <Button className="w-full">Ask AI Assistant</Button>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Policy Builder Access</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Draft new compliance-related policies" 
                      : "No policy creation rights"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {localStorage.getItem("userRole") === "Compliance Officer" ? (
                    <>
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium mb-2">Data Protection Policy</p>
                        <p className="text-sm text-muted-foreground mb-2">Draft status: In Review</p>
                        <Button size="sm" variant="outline">Edit Policy</Button>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium mb-2">Access Control Policy</p>
                        <p className="text-sm text-muted-foreground mb-2">Draft status: Published</p>
                        <Button size="sm" variant="outline">View Policy</Button>
                      </div>
                      <Button className="w-full">Create New Policy</Button>
                    </>
                  ) : (
                    <div className="text-center p-6 border-2 border-dashed border-muted rounded-lg">
                      <p className="text-muted-foreground">Policy creation access restricted</p>
                      <p className="text-sm text-muted-foreground mt-1">Contact Compliance Officer for policy requests</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Policy Enforcement Logs</CardTitle>
                <CardDescription>
                  {localStorage.getItem("userRole") === "Compliance Officer" 
                    ? "View and update enforcement actions" 
                    : "Read-only verification of enforcement logs"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Password Policy Violation</p>
                    <p className="text-sm text-muted-foreground">User: john.doe@company.com • Action: Account locked</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive">Enforced</Badge>
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" className="ml-2">Update Action</Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Data Access Policy Breach</p>
                    <p className="text-sm text-muted-foreground">User: jane.smith@company.com • Action: Access revoked</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500">Resolved</Badge>
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" className="ml-2">View Details</Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Compliance Training Overdue</p>
                    <p className="text-sm text-muted-foreground">User: bob.wilson@company.com • Action: Pending</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Pending</Badge>
                    {localStorage.getItem("userRole") === "Compliance Officer" && (
                      <Button size="sm" className="ml-2">Take Action</Button>
                    )}
                  </div>
                </div>
                {localStorage.getItem("userRole") === "Compliance Officer" && (
                  <Button className="w-full" variant="outline">View All Enforcement Logs</Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SLA Tracking</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Monitor and flag non-compliance issues" 
                      : "View finalized SLA data (read-only)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Incident Response SLA</p>
                      <p className="text-sm text-muted-foreground">Target: &lt; 2 hours • Actual: 1.2 hours</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Met</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Monitor</Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">System Uptime SLA</p>
                      <p className="text-sm text-muted-foreground">Target: 99.9% • Actual: 99.2%</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Breach</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Flag Issue</Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Data Recovery SLA</p>
                      <p className="text-sm text-muted-foreground">Target: &lt; 4 hours • Actual: 3.8 hours</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Met</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Review</Button>
                      )}
                    </div>
                  </div>
                  {localStorage.getItem("userRole") === "Compliance Officer" && (
                    <Button className="w-full" variant="outline">Configure SLA Monitoring</Button>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Assurance Tracking</CardTitle>
                  <CardDescription>
                    {localStorage.getItem("userRole") === "Compliance Officer" 
                      ? "Manage ongoing assurance workflows" 
                      : "Review completed assurance records (read-only)"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Q4 2024 Security Assessment</p>
                      <p className="text-sm text-muted-foreground">Status: In Progress • Due: Dec 31, 2024</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Active</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Manage</Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Vendor Risk Assessment</p>
                      <p className="text-sm text-muted-foreground">Status: Completed • Score: 85/100</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500">Complete</Badge>
                      <Button size="sm" className="ml-2" variant="outline">View Report</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Insurance Eligibility Review</p>
                      <p className="text-sm text-muted-foreground">Status: Pending • Next Review: Jan 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">Scheduled</Badge>
                      {localStorage.getItem("userRole") === "Compliance Officer" && (
                        <Button size="sm" className="ml-2">Start Review</Button>
                      )}
                    </div>
                  </div>
                  {localStorage.getItem("userRole") === "Compliance Officer" && (
                    <Button className="w-full">Create Assurance Workflow</Button>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Digital Proof for Insurance</CardTitle>
                <CardDescription>
                  {localStorage.getItem("userRole") === "Compliance Officer" 
                    ? "Draft digital proofs for insurance claims" 
                    : "Certify and release digital proofs"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Cyber Insurance Proof - Policy #CI-2024-001</p>
                    <p className="text-sm text-muted-foreground">Security controls evidence • Status: Draft</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Draft</Badge>
                    {localStorage.getItem("userRole") === "Compliance Officer" ? (
                      <Button size="sm" className="ml-2">Edit Draft</Button>
                    ) : (
                      <Button size="sm" className="ml-2">Certify</Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Data Breach Response Proof - Policy #CI-2024-002</p>
                    <p className="text-sm text-muted-foreground">Incident response evidence • Status: Ready for Certification</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-yellow-500">Pending</Badge>
                    {localStorage.getItem("userRole") === "Auditor" && (
                      <Button size="sm" className="ml-2">Certify & Release</Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Business Continuity Proof - Policy #CI-2024-003</p>
                    <p className="text-sm text-muted-foreground">BCP testing evidence • Status: Certified</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500">Certified</Badge>
                    <Button size="sm" className="ml-2" variant="outline">Download</Button>
                  </div>
                </div>
                {localStorage.getItem("userRole") === "Compliance Officer" ? (
                  <Button className="w-full">Create New Digital Proof</Button>
                ) : (
                  <Button className="w-full" variant="outline">View Certification Queue</Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}