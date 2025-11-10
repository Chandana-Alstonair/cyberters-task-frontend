import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";

export default function AuditorApprovals() {
  return (
    <DashboardShell breadcrumb={[{ label: "Auditor" }, { label: "Approval Dashboard" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Approval Dashboard</h1>
          <p className="text-muted-foreground">
            Approve or reject audit reports and submissions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Approve Reports
              </CardTitle>
              <CardDescription>Approve audit submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Reject Reports
              </CardTitle>
              <CardDescription>Reject non-compliant submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="destructive">
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Pending Reviews
              </CardTitle>
              <CardDescription>Items awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                View Pending
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}