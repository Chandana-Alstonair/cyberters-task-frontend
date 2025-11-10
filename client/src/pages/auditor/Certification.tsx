import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, FileSignature, Stamp } from "lucide-react";

export default function AuditorCertification() {
  return (
    <DashboardShell breadcrumb={[{ label: "Auditor" }, { label: "Final Certification" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Final Certification</h1>
          <p className="text-muted-foreground">
            Final approve and certify attestation workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certify Attestations
              </CardTitle>
              <CardDescription>Final certification of attestations</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Award className="h-4 w-4 mr-2" />
                Certify
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSignature className="h-5 w-5" />
                Digital Signatures
              </CardTitle>
              <CardDescription>Apply digital signatures</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Sign Documents
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stamp className="h-5 w-5" />
                Release Proofs
              </CardTitle>
              <CardDescription>Release certified proofs</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Release
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}