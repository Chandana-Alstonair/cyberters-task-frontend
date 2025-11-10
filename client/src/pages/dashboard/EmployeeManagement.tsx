import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import { Users, UserPlus, UserCheck, UserX, GraduationCap, BookOpen, Calendar, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import CertificationManagement from "./CertificationManagement";
import ReportingAnalytics from "./ReportingAnalytics";
import AssignmentControl from "./AssignmentControl";
import AutomationNotifications from "./AutomationNotifications";

export default function EmployeeManagement() {
  const [activeTab, setActiveTab] = useState("overview");
  const hideHeader = activeTab !== "overview" && activeTab !== "reports";

  return (
    <DashboardShell 
      breadcrumb={[{ label: "Dashboard" }, { label: "Employee Management" }]}
      hideHeader={hideHeader}
    >
      <div className="p-6 space-y-6">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Employee Management Dashboard</h1>
            <p className="text-muted-foreground">
              Manage employee training, certifications, and cybersecurity awareness
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="certification-mgmt">Certificates</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Employees"
                value="2,500"
                description="Active users"
                icon={Users}
                trend={{ value: 5, isPositive: true }}
              />
              <StatCard
                title="Training Completed"
                value="1,875"
                description="75% completion rate"
                icon={UserCheck}
                trend={{ value: 8, isPositive: true }}
              />
              <StatCard
                title="Pending Training"
                value="625"
                description="25% remaining"
                icon={UserX}
              />
              <StatCard
                title="Certified Employees"
                value="1,200"
                description="48% certified"
                icon={GraduationCap}
                trend={{ value: 12, isPositive: true }}
              />
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Add Training Module
                </CardTitle>
                <CardDescription>Create new training modules for employees</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="module-name">Module Name</Label>
                  <Input id="module-name" placeholder="e.g., Advanced Phishing" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="security">Security Awareness</SelectItem>
                      <SelectItem value="compliance">Compliance</SelectItem>
                      <SelectItem value="technical">Technical Skills</SelectItem>
                      <SelectItem value="policy">Policy Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (hours)</Label>
                  <Input id="duration" type="number" placeholder="2" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Module
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Assign Training
                  </CardTitle>
                  <CardDescription>Assign training modules to employees</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="training-module">Training Module</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select training module" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="security-fundamentals">Security Fundamentals</SelectItem>
                        <SelectItem value="phishing-awareness">Phishing Awareness</SelectItem>
                        <SelectItem value="data-protection">Data Protection</SelectItem>
                        <SelectItem value="incident-response">Incident Response</SelectItem>
                        <SelectItem value="compliance-training">Compliance Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employee-select">Select Employees</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department or individual" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-employees">All Employees</SelectItem>
                        <SelectItem value="it-department">IT Department</SelectItem>
                        <SelectItem value="hr-department">HR Department</SelectItem>
                        <SelectItem value="finance-department">Finance Department</SelectItem>
                        <SelectItem value="individual">Individual Employee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input type="date" id="due-date" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mandatory" />
                    <Label htmlFor="mandatory">Mandatory Training</Label>
                  </div>
                  <Button className="w-full">
                    <Target className="mr-2 h-4 w-4" />
                    Assign Training
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Training Schedule
                  </CardTitle>
                  <CardDescription>Upcoming training sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Security Fundamentals</p>
                        <p className="text-sm text-muted-foreground">Due: Jan 15, 2025</p>
                      </div>
                      <Badge>25 Assigned</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Phishing Awareness</p>
                        <p className="text-sm text-muted-foreground">Due: Jan 20, 2025</p>
                      </div>
                      <Badge variant="secondary">12 Assigned</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Data Protection</p>
                        <p className="text-sm text-muted-foreground">Due: Jan 25, 2025</p>
                      </div>
                      <Badge variant="outline">8 Assigned</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Training Progress Overview</CardTitle>
                <CardDescription>Track employee training completion status</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Assigned Training</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Sarah Johnson</TableCell>
                      <TableCell>IT</TableCell>
                      <TableCell>Security Fundamentals</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="w-16" />
                          <span className="text-sm">100%</span>
                        </div>
                      </TableCell>
                      <TableCell>Jan 15, 2025</TableCell>
                      <TableCell><Badge className="bg-green-500">Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mike Chen</TableCell>
                      <TableCell>Development</TableCell>
                      <TableCell>Phishing Awareness</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={75} className="w-16" />
                          <span className="text-sm">75%</span>
                        </div>
                      </TableCell>
                      <TableCell>Jan 20, 2025</TableCell>
                      <TableCell><Badge variant="secondary">In Progress</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Alex Rivera</TableCell>
                      <TableCell>HR</TableCell>
                      <TableCell>Data Protection</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={30} className="w-16" />
                          <span className="text-sm">30%</span>
                        </div>
                      </TableCell>
                      <TableCell>Jan 25, 2025</TableCell>
                      <TableCell><Badge variant="outline">Started</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emma Davis</TableCell>
                      <TableCell>Finance</TableCell>
                      <TableCell>Compliance Training</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={0} className="w-16" />
                          <span className="text-sm">0%</span>
                        </div>
                      </TableCell>
                      <TableCell>Jan 30, 2025</TableCell>
                      <TableCell><Badge variant="destructive">Not Started</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certification-mgmt" className="space-y-4">
            <CertificationManagement />
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <AssignmentControl />
          </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <AutomationNotifications />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <ReportingAnalytics />
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Training Reports</CardTitle>
                <CardDescription>Generate reports</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Generate Report</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}