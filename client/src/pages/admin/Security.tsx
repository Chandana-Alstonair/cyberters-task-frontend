import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Brain, Shield } from "lucide-react";

export default function AdminSecurity() {
  return (
    <DashboardShell breadcrumb={[{ label: "Admin" }, { label: "Security Configuration" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Security Configuration</h1>
          <p className="text-muted-foreground">
            Manage AI models, detection APIs, and security configurations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Models
              </CardTitle>
              <CardDescription>Configure AI detection models</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Manage AI Models
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Detection APIs
              </CardTitle>
              <CardDescription>Enable/disable detection APIs</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Configure APIs
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Honeypots
              </CardTitle>
              <CardDescription>Configure honeypot systems</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Manage Honeypots
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}