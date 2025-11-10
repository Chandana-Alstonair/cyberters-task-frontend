import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, FileText, Search } from "lucide-react";

export default function AuditorReview() {
  return (
    <DashboardShell breadcrumb={[{ label: "Auditor" }, { label: "Audit Review" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Audit Review</h1>
          <p className="text-muted-foreground">
            Review audit submissions and evidence (read-only)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Review Audits
              </CardTitle>
              <CardDescription>View audit submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Eye className="h-4 w-4 mr-2" />
                View Audits
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Evidence Review
              </CardTitle>
              <CardDescription>Verify submitted evidence</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Review Evidence
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}