import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Check } from "lucide-react";

export default function ComplianceDigitalProof() {
  return (
    <DashboardShell breadcrumb={[{ label: "Compliance" }, { label: "Digital Proof Upload" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Digital Proof Upload</h1>
          <p className="text-muted-foreground">
            Upload compliance evidence and documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Evidence
              </CardTitle>
              <CardDescription>Upload compliance documents</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Manage Documents
              </CardTitle>
              <CardDescription>View uploaded evidence</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                View Documents
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}