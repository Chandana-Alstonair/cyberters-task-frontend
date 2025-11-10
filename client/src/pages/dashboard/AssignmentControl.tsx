import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { UserPlus, Upload, Users, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function AssignmentControl() {
  const [assignments, setAssignments] = useState([
    { id: "1", course: "Security Fundamentals", target: "IT Department", type: "department", assigned: 25, completed: 18, overdue: 3, dueDate: "2024-02-15" },
    { id: "2", course: "Phishing Awareness", target: "All Employees", type: "role", assigned: 150, completed: 120, overdue: 15, dueDate: "2024-01-30" }
  ]);

  const [enrollments] = useState([
    { id: "1", user: "John Doe", course: "Security Fundamentals", status: "completed", progress: 100, startDate: "2024-01-01", dueDate: "2024-02-15" },
    { id: "2", user: "Jane Smith", course: "Phishing Awareness", status: "in_progress", progress: 75, startDate: "2024-01-10", dueDate: "2024-01-30" },
    { id: "3", user: "Mike Johnson", course: "Data Protection", status: "overdue", progress: 30, startDate: "2023-12-15", dueDate: "2024-01-15" }
  ]);

  const createAssignment = () => {
    const newAssignment = {
      id: Date.now().toString(),
      course: "New Course",
      target: "Selected Target",
      type: "manual",
      assigned: 10,
      completed: 0,
      overdue: 0,
      dueDate: "2024-03-01"
    };
    setAssignments([...assignments, newAssignment]);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return <Badge variant="default">Completed</Badge>;
      case "in_progress": return <Badge variant="secondary">In Progress</Badge>;
      case "overdue": return <Badge variant="destructive">Overdue</Badge>;
      default: return <Badge variant="outline">Assigned</Badge>;
    }
  };

  return (
    <div className="space-y-6">

        <Tabs defaultValue="assignments" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="enrollment">Enrollment Status</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Assignment</TabsTrigger>
            <TabsTrigger value="automation">Auto Enrollment</TabsTrigger>
          </TabsList>

          <TabsContent value="assignments" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Course Assignments</h3>
              <Button onClick={createAssignment}>
                <UserPlus className="mr-2 h-4 w-4" />New Assignment
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manual Assignment</CardTitle>
                  <CardDescription>Assign courses to specific users or groups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="security">Security Fundamentals</SelectItem>
                        <SelectItem value="phishing">Phishing Awareness</SelectItem>
                        <SelectItem value="data">Data Protection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Assignment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">Individual User</SelectItem>
                        <SelectItem value="department">Department</SelectItem>
                        <SelectItem value="role">User Role</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Target</Label>
                    <Input placeholder="Enter user, department, or role" />
                  </div>

                  <div>
                    <Label>Due Date</Label>
                    <Input type="date" />
                  </div>

                  <Button className="w-full">Create Assignment</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Path Assignment</CardTitle>
                  <CardDescription>Assign sequential course lists</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Learning Path</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select learning path" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="security-basics">Security Basics Path</SelectItem>
                        <SelectItem value="advanced-security">Advanced Security Path</SelectItem>
                        <SelectItem value="compliance">Compliance Path</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Assign To</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select target" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-employees">New Employees</SelectItem>
                        <SelectItem value="it-dept">IT Department</SelectItem>
                        <SelectItem value="managers">All Managers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" variant="outline">Assign Learning Path</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Active Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {assignments.map(assignment => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{assignment.course}</p>
                        <p className="text-sm text-muted-foreground">
                          {assignment.target} • Due: {assignment.dueDate}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm">
                          <p>{assignment.completed}/{assignment.assigned} completed</p>
                          {assignment.overdue > 0 && (
                            <p className="text-red-500">{assignment.overdue} overdue</p>
                          )}
                        </div>
                        <Badge variant={assignment.overdue > 0 ? "destructive" : "default"}>
                          {Math.round((assignment.completed / assignment.assigned) * 100)}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="enrollment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Enrollment Status</CardTitle>
                <CardDescription>Monitor individual progress and completion status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="p-3">User</th>
                        <th className="p-3">Course</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Progress</th>
                        <th className="p-3">Start Date</th>
                        <th className="p-3">Due Date</th>
                        <th className="p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enrollments.map(enrollment => (
                        <tr key={enrollment.id} className="border-b">
                          <td className="p-3 font-medium">{enrollment.user}</td>
                          <td className="p-3">{enrollment.course}</td>
                          <td className="p-3">{getStatusBadge(enrollment.status)}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-gray-200 rounded-full">
                                <div 
                                  className="h-2 bg-blue-500 rounded-full" 
                                  style={{ width: `${enrollment.progress}%` }}
                                />
                              </div>
                              <span className="text-sm">{enrollment.progress}%</span>
                            </div>
                          </td>
                          <td className="p-3 text-sm">{enrollment.startDate}</td>
                          <td className="p-3 text-sm">{enrollment.dueDate}</td>
                          <td className="p-3">
                            <Button size="sm" variant="outline">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulk" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Assignment via CSV</CardTitle>
                <CardDescription>Import user-role mapping for mass assignments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>CSV File Upload</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600">Drop CSV file here or click to browse</p>
                    <p className="text-xs text-gray-500 mt-2">Format: user_id, course_id, due_date</p>
                  </div>
                </div>

                <div>
                  <Label>Organization Directory Sync</Label>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Auto-sync with HR System</p>
                      <p className="text-sm text-muted-foreground">Automatically assign courses based on role changes</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <Button className="w-full">Process Bulk Assignment</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Auto Enrollment Rules</CardTitle>
                <CardDescription>Configure triggers for automatic course assignment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">New Employee Onboarding</h4>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Automatically assign security fundamentals to new hires
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Trigger</Label>
                        <Select defaultValue="new-employee">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-employee">New Employee</SelectItem>
                            <SelectItem value="role-change">Role Change</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Course</Label>
                        <Select defaultValue="security-basics">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="security-basics">Security Basics</SelectItem>
                            <SelectItem value="compliance">Compliance Training</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">Failed Simulation Recovery</h4>
                      <Switch />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Assign remedial training after failed phishing simulation
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Trigger</Label>
                        <Select defaultValue="failed-sim">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="failed-sim">Failed Simulation</SelectItem>
                            <SelectItem value="low-score">Low Quiz Score</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Course</Label>
                        <Select defaultValue="phishing-remedial">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phishing-remedial">Phishing Remedial</SelectItem>
                            <SelectItem value="security-refresh">Security Refresh</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Save Automation Rules</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  );
}