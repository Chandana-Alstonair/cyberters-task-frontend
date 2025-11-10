import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Database, HardDrive, Download, Upload, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function AdminDatabase() {
  const [activeTab, setActiveTab] = useState("overview");
  const hideHeader = activeTab !== "overview";

  const [backups] = useState([
    { id: "1", name: "Daily_Backup_2024-01-15", size: "2.4 GB", date: "2024-01-15 02:00", status: "completed", type: "full" },
    { id: "2", name: "Daily_Backup_2024-01-14", size: "2.3 GB", date: "2024-01-14 02:00", status: "completed", type: "full" },
    { id: "3", name: "Incremental_2024-01-15", size: "156 MB", date: "2024-01-15 14:00", status: "completed", type: "incremental" }
  ]);

  const [connections] = useState([
    { id: "1", user: "app_user", database: "cyberters_prod", host: "10.0.1.50", status: "active", queries: 1247 },
    { id: "2", user: "readonly_user", database: "cyberters_analytics", host: "10.0.1.51", status: "active", queries: 89 },
    { id: "3", user: "backup_user", database: "cyberters_prod", host: "10.0.1.52", status: "idle", queries: 0 }
  ]);

  return (
    <DashboardShell 
      breadcrumb={[{ label: "Admin" }, { label: "Database Management" }]}
      hideHeader={hideHeader}
    >
      <div className="p-6 space-y-6">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Database Management</h1>
            <p className="text-muted-foreground">
              Monitor database performance, manage backups, and configure settings
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="backups">Backups</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Database Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4 GB</div>
                  <p className="text-xs text-muted-foreground">+120 MB this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Active Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">23</div>
                  <p className="text-xs text-muted-foreground">Max: 100</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Queries/sec</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">Average</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Last Backup</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">2h ago</div>
                  <p className="text-xs text-muted-foreground">Successful</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Database Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CPU Usage</span>
                    <span className="text-sm">23%</span>
                  </div>
                  <Progress value={23} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Memory Usage</span>
                    <span className="text-sm">67%</span>
                  </div>
                  <Progress value={67} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Disk Usage</span>
                    <span className="text-sm">45%</span>
                  </div>
                  <Progress value={45} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Network I/O</span>
                    <span className="text-sm">12%</span>
                  </div>
                  <Progress value={12} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Create Backup Now
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Optimize Database
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <HardDrive className="mr-2 h-4 w-4" />
                    Check Disk Space
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Database className="mr-2 h-4 w-4" />
                    View Query Logs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Query Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Slow Queries</p>
                        <p className="text-sm text-muted-foreground">&gt; 1 second execution time</p>
                      </div>
                      <Badge variant="destructive">12</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Average Query Time</p>
                        <p className="text-sm text-muted-foreground">All queries</p>
                      </div>
                      <Badge variant="default">0.23s</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Cache Hit Ratio</p>
                        <p className="text-sm text-muted-foreground">Buffer pool efficiency</p>
                      </div>
                      <Badge variant="default">94.2%</Badge>
                    </div>
                  </div>
                  <Button className="w-full">View Detailed Analytics</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Index Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">users_email_idx</p>
                        <p className="text-sm text-muted-foreground">Usage: 89% • Size: 45MB</p>
                      </div>
                      <Badge variant="default">Optimal</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">training_date_idx</p>
                        <p className="text-sm text-muted-foreground">Usage: 12% • Size: 23MB</p>
                      </div>
                      <Badge variant="secondary">Underused</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Missing Index</p>
                        <p className="text-sm text-muted-foreground">certificates.user_id</p>
                      </div>
                      <Badge variant="destructive">Recommended</Badge>
                    </div>
                  </div>
                  <Button className="w-full">Optimize Indexes</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="backups" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Backup Management</h3>
              <Button>
                <Download className="mr-2 h-4 w-4" />Create Backup
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Backup History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {backups.map(backup => (
                      <div key={backup.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {backup.status === "completed" ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          )}
                          <div>
                            <p className="font-medium">{backup.name}</p>
                            <p className="text-sm text-muted-foreground">{backup.date} • {backup.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={backup.type === "full" ? "default" : "secondary"}>
                            {backup.type}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backup Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto Backup</p>
                      <p className="text-sm text-muted-foreground">Daily at 2:00 AM</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <Label>Retention Period (days)</Label>
                    <Input type="number" defaultValue="30" />
                  </div>
                  <div>
                    <Label>Backup Type</Label>
                    <Select defaultValue="full">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Backup</SelectItem>
                        <SelectItem value="incremental">Incremental</SelectItem>
                        <SelectItem value="differential">Differential</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Storage Location</Label>
                    <Select defaultValue="local">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local Storage</SelectItem>
                        <SelectItem value="s3">Amazon S3</SelectItem>
                        <SelectItem value="azure">Azure Blob</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Save Settings</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="connections" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Database Connections</CardTitle>
                <CardDescription>Monitor current database connections and activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {connections.map(conn => (
                    <div key={conn.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${conn.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <div>
                          <p className="font-medium">{conn.user}@{conn.host}</p>
                          <p className="text-sm text-muted-foreground">{conn.database} • {conn.queries} queries</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={conn.status === "active" ? "default" : "secondary"}>
                          {conn.status}
                        </Badge>
                        <Button size="sm" variant="outline">Kill</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connection Pool Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Max Connections</Label>
                    <Input type="number" defaultValue="100" />
                  </div>
                  <div>
                    <Label>Connection Timeout (seconds)</Label>
                    <Input type="number" defaultValue="30" />
                  </div>
                  <div>
                    <Label>Idle Timeout (minutes)</Label>
                    <Input type="number" defaultValue="10" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Connection Pooling</p>
                      <p className="text-sm text-muted-foreground">Reuse database connections</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Button>Update Pool Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Username</Label>
                    <Input placeholder="new_user" />
                  </div>
                  <div>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Strong password" />
                  </div>
                  <div>
                    <Label>Privileges</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select privileges" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="readonly">Read Only</SelectItem>
                        <SelectItem value="readwrite">Read/Write</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Database Access</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select database" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cyberters_prod">cyberters_prod</SelectItem>
                        <SelectItem value="cyberters_analytics">cyberters_analytics</SelectItem>
                        <SelectItem value="all">All Databases</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Create User</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Database Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Analyze Tables
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Database className="mr-2 h-4 w-4" />
                      Optimize Tables
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <HardDrive className="mr-2 h-4 w-4" />
                      Rebuild Indexes
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Update Statistics
                    </Button>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      Maintenance operations may impact performance
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto Optimize</p>
                      <p className="text-sm text-muted-foreground">Weekly table optimization</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <Label>Maintenance Window</Label>
                    <Select defaultValue="sunday-2am">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sunday-2am">Sunday 2:00 AM</SelectItem>
                        <SelectItem value="saturday-3am">Saturday 3:00 AM</SelectItem>
                        <SelectItem value="daily-1am">Daily 1:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Maintenance Notifications</p>
                      <p className="text-sm text-muted-foreground">Email alerts for maintenance</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Button>Schedule Maintenance</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}