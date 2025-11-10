import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Search } from "lucide-react";

export default function ComplianceAIAssistant() {
  return (
    <DashboardShell breadcrumb={[{ label: "Compliance" }, { label: "Regulatory Assistant" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Regulatory AI Assistant</h1>
          <p className="text-muted-foreground">
            AI-powered regulatory guidance and compliance assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Guidance
              </CardTitle>
              <CardDescription>Get regulatory recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Ask Assistant
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Regulatory Search
              </CardTitle>
              <CardDescription>Search compliance requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Search Regulations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}