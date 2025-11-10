import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Hash, CheckCircle } from "lucide-react";

export default function AuditorBlockchainValidator() {
  return (
    <DashboardShell breadcrumb={[{ label: "Auditor" }, { label: "Blockchain Validator" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Blockchain Validator</h1>
          <p className="text-muted-foreground">
            Verify blockchain hash validity and immutable trails
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Validate Hashes
              </CardTitle>
              <CardDescription>Verify blockchain hash integrity</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Hash className="h-4 w-4 mr-2" />
                Validate
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Audit Trail Verification
              </CardTitle>
              <CardDescription>Verify immutable audit trails</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Verify Trail
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}