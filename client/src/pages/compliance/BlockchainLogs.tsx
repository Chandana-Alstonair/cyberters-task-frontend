import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Search, Download } from "lucide-react";

export default function ComplianceBlockchainLogs() {
  return (
    <DashboardShell breadcrumb={[{ label: "Compliance" }, { label: "Blockchain Audit Logs" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Blockchain Audit Logs</h1>
          <p className="text-muted-foreground">
            View immutable audit trails and blockchain verification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Immutable Logs
              </CardTitle>
              <CardDescription>View blockchain audit entries</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Search className="h-4 w-4 mr-2" />
                View Logs
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export Logs
              </CardTitle>
              <CardDescription>Download audit trail reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Export Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}