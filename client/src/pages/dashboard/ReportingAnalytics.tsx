import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, AlertTriangle, TrendingUp, Users, Clock } from "lucide-react";

export default function ReportingAnalytics() {
  const employeeData = [
    { id: "1", name: "John Doe", department: "IT", completed: 8, total: 10, overdue: 1, lastActivity: "2024-01-10" },
    { id: "2", name: "Jane Smith", department: "HR", completed: 10, total: 10, overdue: 0, lastActivity: "2024-01-15" },
    { id: "3", name: "Mike Johnson", department: "Finance", completed: 5, total: 10, overdue: 3, lastActivity: "2023-12-20" },
    { id: "4", name: "Sarah Wilson", department: "IT", completed: 7, total: 10, overdue: 2, lastActivity: "2024-01-05" }
  ];

  const departmentData = [
    { name: "IT", completed: 75, total: 100, compliance: 75, overdue: 15 },
    { name: "HR", completed: 95, total: 100, compliance: 95, overdue: 2 },
    { name: "Finance", completed: 60, total: 100, compliance: 60, overdue: 25 },
    { name: "Marketing", completed: 80, total: 100, compliance: 80, overdue: 10 }
  ];

  const complianceData = [
    { name: "Compliant", value: 70, color: "#22c55e" },
    { name: "Overdue", value: 20, color: "#ef4444" },
    { name: "In Progress", value: 10, color: "#f59e0b" }
  ];

  const overdueUsers = employeeData.filter(emp => emp.overdue > 0);

  return (
    <div className="space-y-6">

        <Tabs defaultValue="employee" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="employee">Employee Progress</TabsTrigger>
            <TabsTrigger value="department">Departmental Analytics</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="employee" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Individual Progress Breakdown</h3>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />Export Report
              </Button>
            </div>

            {overdueUsers.length > 0 && (
              <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <AlertTriangle className="h-5 w-5" />
                    Overdue Users Alert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {overdueUsers.map(user => (
                      <div key={user.id} className="flex justify-between items-center p-2 bg-white dark:bg-gray-900 rounded">
                        <span>{user.name} ({user.department})</span>
                        <Badge variant="destructive">{user.overdue} overdue</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Employee Progress Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="p-3">Employee</th>
                        <th className="p-3">Department</th>
                        <th className="p-3">Progress</th>
                        <th className="p-3">Completion Rate</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Last Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeData.map(emp => (
                        <tr key={emp.id} className="border-b">
                          <td className="p-3 font-medium">{emp.name}</td>
                          <td className="p-3">{emp.department}</td>
                          <td className="p-3">
                            <div className="w-24">
                              <Progress value={(emp.completed / emp.total) * 100} />
                            </div>
                          </td>
                          <td className="p-3">{emp.completed}/{emp.total} ({Math.round((emp.completed / emp.total) * 100)}%)</td>
                          <td className="p-3">
                            {emp.overdue > 0 ? (
                              <Badge variant="destructive">Overdue</Badge>
                            ) : emp.completed === emp.total ? (
                              <Badge variant="default">Complete</Badge>
                            ) : (
                              <Badge variant="secondary">In Progress</Badge>
                            )}
                          </td>
                          <td className="p-3 text-sm text-muted-foreground">{emp.lastActivity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="department" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Departmental Comparison</h3>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="north">North Region</SelectItem>
                    <SelectItem value="south">South Region</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />Export
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {departmentData.map(dept => (
                <Card key={dept.name}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completion</span>
                        <span>{dept.compliance}%</span>
                      </div>
                      <Progress value={dept.compliance} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Completed:</span>
                      <span className="font-medium">{dept.completed}/{dept.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Overdue:</span>
                      <span className={`font-medium ${dept.overdue > 15 ? 'text-red-500' : 'text-gray-500'}`}>
                        {dept.overdue}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Department Comparison Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={departmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="compliance" fill="#3b82f6" name="Compliance %" />
                    <Bar dataKey="overdue" fill="#ef4444" name="Overdue" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Readiness Export</CardTitle>
                <CardDescription>Generate detailed compliance reports per department</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {departmentData.map(dept => (
                  <div key={dept.name} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{dept.name} Department</p>
                      <p className="text-sm text-muted-foreground">
                        {dept.compliance}% compliant • {dept.overdue} overdue employees
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />Export
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">248</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overdue Training</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">52</div>
                  <p className="text-xs text-muted-foreground">-8% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2d</div>
                  <p className="text-xs text-muted-foreground">-0.5d from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Overall Compliance Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={complianceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                      >
                        {complianceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-4 mt-4">
                    {complianceData.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Export Full Compliance Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Send Overdue Reminders
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Generate Executive Summary
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
    </div>
  );
}