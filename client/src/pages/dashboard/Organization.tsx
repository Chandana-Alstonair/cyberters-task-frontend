import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import DataTableSimple from "@/components/DataTableSimple";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bell, Ticket, Settings, UserPlus, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const userGrowthData = [
  { name: "Jan", value: 450 },
  { name: "Feb", value: 520 },
  { name: "Mar", value: 580 },
  { name: "Apr", value: 650 },
  { name: "May", value: 720 },
  { name: "Jun", value: 800 },
];

const roleDistData = [
  { name: "Employee", value: 450 },
  { name: "SOC Analyst", value: 150 },
  { name: "Admin", value: 100 },
  { name: "Compliance", value: 75 },
  { name: "Other", value: 25 },
];

const usersColumns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  {
    key: "status",
    label: "Status",
    render: (value: string) => <Badge variant={value === "active" ? "default" : "secondary"}>{value}</Badge>,
  },
  { key: "lastActive", label: "Last Active" },
];

const usersData = [
  { name: "John Smith", email: "john.smith@company.com", role: "Admin", status: "active", lastActive: "2 min ago" },
  { name: "Jane Doe", email: "jane.doe@company.com", role: "SOC Analyst", status: "active", lastActive: "15 min ago" },
  { name: "Bob Johnson", email: "bob.j@company.com", role: "Employee", status: "inactive", lastActive: "2 days ago" },
];

const ticketsColumns = [
  { key: "id", label: "ID" },
  { key: "subject", label: "Subject" },
  {
    key: "priority",
    label: "Priority",
    render: (value: string) => {
      const variants: Record<string, "default" | "destructive" | "secondary"> = {
        high: "destructive",
        medium: "secondary",
        low: "default",
      };
      return <Badge variant={variants[value] || "default"}>{value}</Badge>;
    },
  },
  {
    key: "status",
    label: "Status",
    render: (value: string) => <Badge variant="secondary">{value}</Badge>,
  },
  { key: "created", label: "Created" },
];

const ticketsData = [
  { id: "TKT-001", subject: "Cannot access dashboard", priority: "high", status: "open", created: "1 hour ago" },
  { id: "TKT-002", subject: "MFA setup issue", priority: "medium", status: "in progress", created: "3 hours ago" },
  { id: "TKT-003", subject: "Report generation error", priority: "low", status: "resolved", created: "1 day ago" },
];

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye } from "lucide-react";

export default function Organization() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUserRole, setSelectedUserRole] = useState("");

  const handleRoleSwitch = (role: string) => {
    setSelectedUserRole(role);
    localStorage.setItem("originalUserRole", localStorage.getItem("userRole") || "Admin");
    localStorage.setItem("userRole", role);
    
    // Navigate to appropriate dashboard based on role
    switch(role) {
      case "SOC Analyst":
        window.location.href = "/dashboard/ai-intelligence";
        break;
      case "Compliance Officer":
        window.location.href = "/dashboard/audit";
        break;
      case "Vendor":
        window.location.href = "/dashboard/cloud";
        break;
      case "Client":
        window.location.href = "/dashboard/client";
        break;
      case "Employee":
        window.location.href = "/dashboard/training";
        break;
      default:
        window.location.href = "/dashboard/organization";
    }
  };

  return (
    <DashboardShell breadcrumb={[{ label: "Dashboard" }, { label: "Organization" }, { label: "Overview" }]}>
      <div className="p-6 space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Organization & User Management</h1>
                <p className="text-muted-foreground">
                  Manage users, settings, notifications, and support tickets
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <Select onValueChange={handleRoleSwitch}>
                    <SelectTrigger className="w-48 header-nav-hover">
                      <SelectValue placeholder="Switch to user view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SOC Analyst">SOC Analyst View</SelectItem>
                      <SelectItem value="Compliance Officer">Compliance Officer View</SelectItem>
                      <SelectItem value="Vendor">Vendor View</SelectItem>
                      <SelectItem value="Client">Client View</SelectItem>
                      <SelectItem value="Employee">Employee View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button data-testid="button-add-user">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Users"
                value="800"
                description="Active accounts"
                icon={Users}
                trend={{ value: 11, isPositive: true }}
              />
              <StatCard
                title="Pending Invites"
                value="12"
                description="Awaiting acceptance"
                icon={UserPlus}
              />
              <StatCard
                title="Open Tickets"
                value="23"
                description="Support requests"
                icon={Ticket}
                trend={{ value: 3, isPositive: false }}
              />
              <StatCard
                title="Notifications"
                value="47"
                description="Unread alerts"
                icon={Bell}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard
                title="User Growth (6 Months)"
                type="line"
                data={userGrowthData}
                description="Total user count over time"
              />
              <ChartCard
                title="Users by Role"
                type="pie"
                data={roleDistData}
                description="Role distribution"
              />
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">

            <DataTableSimple
              title="User Management"
              columns={usersColumns}
              data={usersData}
              actions={true}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Role-Based Access Control</CardTitle>
                  <CardDescription>Permission management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium">Admin</p>
                        <p className="text-xs text-muted-foreground">Full system access</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>100 users</Badge>
                        <Button variant="outline" size="sm" data-testid="button-edit-admin">Edit</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium">SOC Analyst</p>
                        <p className="text-xs text-muted-foreground">Security operations</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>150 users</Badge>
                        <Button variant="outline" size="sm" data-testid="button-edit-analyst">Edit</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium">Compliance Officer</p>
                        <p className="text-xs text-muted-foreground">Audit & compliance</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>75 users</Badge>
                        <Button variant="outline" size="sm" data-testid="button-edit-compliance">Edit</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium">Employee</p>
                        <p className="text-xs text-muted-foreground">Basic access</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>450 users</Badge>
                        <Button variant="outline" size="sm" data-testid="button-edit-employee">Edit</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Settings</CardTitle>
                  <CardDescription>Security configurations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Multi-Factor Authentication</p>
                          <p className="text-xs text-muted-foreground">Required for all users</p>
                        </div>
                      </div>
                      <Badge>Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Single Sign-On (SSO)</p>
                          <p className="text-xs text-muted-foreground">Azure AD, Okta, Google</p>
                        </div>
                      </div>
                      <Badge>Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Session Timeout</p>
                          <p className="text-xs text-muted-foreground">Auto-logout after inactivity</p>
                        </div>
                      </div>
                      <Badge>30 minutes</Badge>
                    </div>
                    <Button variant="outline" className="w-full" data-testid="button-auth-settings">
                      Configure Authentication
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Center</CardTitle>
                <CardDescription>Alert configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">Email Alerts</p>
                      <p className="text-xs text-muted-foreground">Critical security events</p>
                    </div>
                    <Badge>Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-xs text-muted-foreground">Urgent threats only</p>
                    </div>
                    <Badge>Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">Microsoft Teams Integration</p>
                      <p className="text-xs text-muted-foreground">Security channel updates</p>
                    </div>
                    <Badge>Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-xs text-muted-foreground">Mobile app alerts</p>
                    </div>
                    <Badge variant="secondary">Disabled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <DataTableSimple
              title="Support Tickets"
              columns={ticketsColumns}
              data={ticketsData}
              actions={true}
            />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Platform configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary rounded-lg hover-elevate">
                    <Settings className="h-8 w-8 text-primary mb-2" />
                    <p className="font-medium mb-1">General Settings</p>
                    <p className="text-xs text-muted-foreground mb-3">Organization details and preferences</p>
                    <Button variant="outline" size="sm" className="w-full" data-testid="button-general-settings">
                      Configure
                    </Button>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg hover-elevate">
                    <Settings className="h-8 w-8 text-primary mb-2" />
                    <p className="font-medium mb-1">API Integration</p>
                    <p className="text-xs text-muted-foreground mb-3">Third-party service connections</p>
                    <Button variant="outline" size="sm" className="w-full" data-testid="button-api-settings">
                      Configure
                    </Button>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg hover-elevate">
                    <Settings className="h-8 w-8 text-primary mb-2" />
                    <p className="font-medium mb-1">Audit Logs</p>
                    <p className="text-xs text-muted-foreground mb-3">View system activity logs</p>
                    <Button variant="outline" size="sm" className="w-full" data-testid="button-audit-logs">
                      View Logs
                    </Button>
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
