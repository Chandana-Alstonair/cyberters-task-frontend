import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Award, Download, QrCode } from "lucide-react";
import { useState } from "react";

interface CertificateTemplate {
  name: string;
  logo: string;
  signatures: string;
  layout: string;
  blockchain: boolean;
}

export default function CertificateBuilder() {
  const [template, setTemplate] = useState<CertificateTemplate>({
    name: "Security Fundamentals Certificate",
    logo: "",
    signatures: "John Doe, CEO\nJane Smith, CTO",
    layout: "modern",
    blockchain: true
  });

  const [previewData] = useState({
    recipientName: "John Smith",
    courseName: "Cybersecurity Fundamentals",
    completionDate: "December 15, 2024",
    certificateNumber: "CERT-2024-001"
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Template Builder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cert-name">Certificate Name</Label>
            <Input 
              id="cert-name"
              value={template.name}
              onChange={(e) => setTemplate({...template, name: e.target.value})}
            />
          </div>
          
          <div>
            <Label htmlFor="logo-url">Logo URL</Label>
            <Input 
              id="logo-url"
              value={template.logo}
              onChange={(e) => setTemplate({...template, logo: e.target.value})}
              placeholder="https://example.com/logo.png"
            />
          </div>

          <div>
            <Label htmlFor="signatures">Authorized Signatures</Label>
            <Textarea 
              id="signatures"
              value={template.signatures}
              onChange={(e) => setTemplate({...template, signatures: e.target.value})}
              placeholder="Name, Title (one per line)"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch 
              checked={template.blockchain}
              onCheckedChange={(checked) => setTemplate({...template, blockchain: checked})}
            />
            <Label>Blockchain Anchoring</Label>
          </div>

          <Button className="w-full">Save Template</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Certificate Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-yellow-500" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Certificate of Completion
              </h2>
              
              <p className="text-lg">This certifies that</p>
              
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {previewData.recipientName}
              </h3>
              
              <p>has successfully completed</p>
              
              <h4 className="text-lg font-medium">
                {previewData.courseName}
              </h4>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t">
                <div className="text-sm">
                  <p>Date: {previewData.completionDate}</p>
                  <p>Certificate #: {previewData.certificateNumber}</p>
                </div>
                
                <div className="flex gap-2">
                  {template.blockchain && (
                    <Badge variant="outline" className="text-xs">
                      <QrCode className="h-3 w-3 mr-1" />
                      Blockchain Verified
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mt-4">
                {template.signatures.split('\n').map((sig, i) => (
                  <div key={i}>{sig}</div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex-1">
              <QrCode className="h-4 w-4 mr-2" />
              Generate QR
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}