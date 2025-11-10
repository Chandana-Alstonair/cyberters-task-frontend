import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, CheckSquare } from "lucide-react";

export default function AuditorVerification() {
  return (
    <DashboardShell breadcrumb={[{ label: "Auditor" }, { label: "Verification Center" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Verification Center</h1>
          <p className="text-muted-foreground">
            Verify evidence and validate compliance data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Verify Evidence
              </CardTitle>
              <CardDescription>Validate submitted evidence</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Verify
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                Validate Checklists
              </CardTitle>
              <CardDescription>Review compliance checklists</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Validate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}