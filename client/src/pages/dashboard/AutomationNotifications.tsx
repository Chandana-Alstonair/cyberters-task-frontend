import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Zap, Mail, MessageSquare, Bell, Clock, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function AutomationNotifications() {
  const [rules, setRules] = useState([
    { id: "1", name: "Failed Course Remedial", trigger: "course_failed", action: "assign_remedial", active: true },
    { id: "2", name: "Course Expiry Alert", trigger: "course_expires", action: "notify_recert", active: true }
  ]);

  const [templates, setTemplates] = useState([
    { id: "1", name: "Course Due Reminder", type: "email", subject: "Training Due Tomorrow", active: true },
    { id: "2", name: "Overdue Escalation", type: "teams", subject: "Employee Overdue Training", active: true }
  ]);

  return (
    <div className="space-y-6">

        <Tabs defaultValue="automation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="automation">Training Automation</TabsTrigger>
            <TabsTrigger value="notifications">Notification Templates</TabsTrigger>
            <TabsTrigger value="escalation">Escalation Rules</TabsTrigger>
          </TabsList>

          <TabsContent value="automation" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Automation Rule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Rule Name</Label>
                    <Input placeholder="e.g., Failed Course Auto-Remedial" />
                  </div>
                  <div>
                    <Label>Trigger</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trigger" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course_failed">Employee Fails Course</SelectItem>
                        <SelectItem value="course_expires">Course Expires</SelectItem>
                        <SelectItem value="overdue">Training Overdue</SelectItem>
                        <SelectItem value="new_employee">New Employee</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Action</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="assign_remedial">Auto-assign Remedial Training</SelectItem>
                        <SelectItem value="notify_recert">Auto-notify + Assign Re-certification</SelectItem>
                        <SelectItem value="send_reminder">Send Reminder</SelectItem>
                        <SelectItem value="escalate">Escalate to Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Target Course (for assignment)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remedial_security">Remedial Security Training</SelectItem>
                        <SelectItem value="phishing_refresh">Phishing Awareness Refresh</SelectItem>
                        <SelectItem value="compliance_update">Compliance Update</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Zap className="mr-2 h-4 w-4" />Create Rule
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Automation Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {rules.map(rule => (
                      <div key={rule.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{rule.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {rule.trigger} → {rule.action}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch checked={rule.active} />
                          <Badge variant={rule.active ? "default" : "secondary"}>
                            {rule.active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Setup - Common Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Failed Course → Remedial Training</h4>
                    <p className="text-sm text-muted-foreground mb-3">Auto-assign remedial when employee fails</p>
                    <Button size="sm" className="w-full">Enable Rule</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Course Expiry → Re-certification</h4>
                    <p className="text-sm text-muted-foreground mb-3">Auto-notify and assign renewal</p>
                    <Button size="sm" className="w-full">Enable Rule</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Notification Template</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Template Name</Label>
                    <Input placeholder="e.g., Course Due Reminder" />
                  </div>
                  <div>
                    <Label>Notification Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="teams">Microsoft Teams</SelectItem>
                        <SelectItem value="slack">Slack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Subject/Title</Label>
                    <Input placeholder="Training Due Tomorrow" />
                  </div>
                  <div>
                    <Label>Message Template</Label>
                    <Textarea 
                      placeholder="Hi {{employee_name}}, your {{course_name}} training is due {{due_date}}. Please complete it to maintain compliance."
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label>Schedule</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When to send" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1_day_before">1 day before due date</SelectItem>
                        <SelectItem value="3_days_before">3 days before due date</SelectItem>
                        <SelectItem value="1_week_before">1 week before due date</SelectItem>
                        <SelectItem value="on_overdue">On overdue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />Create Template
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {templates.map(template => (
                      <div key={template.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {template.type === "email" && <Mail className="h-4 w-4" />}
                          {template.type === "teams" && <MessageSquare className="h-4 w-4" />}
                          {template.type === "sms" && <Bell className="h-4 w-4" />}
                          <div>
                            <p className="font-medium">{template.name}</p>
                            <p className="text-sm text-muted-foreground">{template.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch checked={template.active} />
                          <Badge variant="outline">{template.type}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <Clock className="h-6 w-6 mb-2" />
                    Due Reminder
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <AlertTriangle className="h-6 w-6 mb-2" />
                    Overdue Alert
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Bell className="h-6 w-6 mb-2" />
                    Completion Notice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="escalation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Escalation Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Manager Escalation</h4>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Notify direct manager when employee training is overdue
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Escalate After</Label>
                      <Select defaultValue="3_days">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1_day">1 day overdue</SelectItem>
                          <SelectItem value="3_days">3 days overdue</SelectItem>
                          <SelectItem value="1_week">1 week overdue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Notification Method</Label>
                      <Select defaultValue="email">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="teams">Teams Message</SelectItem>
                          <SelectItem value="both">Email + Teams</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Compliance Officer Escalation</h4>
                    <Switch />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Notify compliance officer for critical overdue training
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Escalate After</Label>
                      <Select defaultValue="1_week">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3_days">3 days overdue</SelectItem>
                          <SelectItem value="1_week">1 week overdue</SelectItem>
                          <SelectItem value="2_weeks">2 weeks overdue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Priority Level</Label>
                      <Select defaultValue="high">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="high">High Priority</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">HR Department Escalation</h4>
                    <Switch />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Escalate to HR for disciplinary action on extended overdue
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Escalate After</Label>
                      <Select defaultValue="2_weeks">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1_week">1 week overdue</SelectItem>
                          <SelectItem value="2_weeks">2 weeks overdue</SelectItem>
                          <SelectItem value="1_month">1 month overdue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Action Required</Label>
                      <Select defaultValue="review">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="review">Performance Review</SelectItem>
                          <SelectItem value="warning">Formal Warning</SelectItem>
                          <SelectItem value="action">Disciplinary Action</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Save Escalation Rules</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  );
}