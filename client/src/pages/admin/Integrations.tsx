import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Webhook, Plus, Settings } from "lucide-react";

export default function AdminIntegrations() {
  return (
    <DashboardShell breadcrumb={[{ label: "Admin" }, { label: "API Integrations" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">API Integrations</h1>
          <p className="text-muted-foreground">
            Manage API connections and security connectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5" />
                API Management
              </CardTitle>
              <CardDescription>Configure API endpoints and keys</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Integration
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Security Connectors
              </CardTitle>
              <CardDescription>Manage security tool integrations</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Configure Connectors
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}