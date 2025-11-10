import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, QrCode, Shield, Download, Eye, X, Plus, Settings } from "lucide-react";
import { useState } from "react";
import CertificateBuilder from "@/components/CertificateBuilder";

export default function CertificationManagement() {
  const [templates, setTemplates] = useState([
    { id: "1", name: "Security Fundamentals", expiry: 365, recertification: true, active: true },
    { id: "2", name: "Phishing Awareness", expiry: 180, recertification: false, active: true }
  ]);

  const [certificates, setCertificates] = useState([
    { id: "1", user: "John Doe", course: "Security Fundamentals", number: "SEC-2024-001", issued: "2024-01-15", expires: "2025-01-15", status: "active", blockchain: true },
    { id: "2", user: "Jane Smith", course: "Phishing Awareness", number: "PH-2024-002", issued: "2024-02-01", expires: "2024-08-01", status: "expired", blockchain: false }
  ]);

  const [newTemplate, setNewTemplate] = useState({
    name: "", expiry: 365, recertification: false, logo: "", signatures: "", blockchain: false
  });

  const createTemplate = () => {
    const template = {
      id: Date.now().toString(),
      name: newTemplate.name,
      expiry: newTemplate.expiry,
      recertification: newTemplate.recertification,
      active: true
    };
    setTemplates([...templates, template]);
    setNewTemplate({ name: "", expiry: 365, recertification: false, logo: "", signatures: "", blockchain: false });
  };

  const issueCertificate = (userId: string, courseId: string, templateId: string) => {
    const cert = {
      id: Date.now().toString(),
      user: "New User",
      course: "Selected Course",
      number: `CERT-${Date.now()}`,
      issued: new Date().toISOString().split('T')[0],
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: "active",
      blockchain: true
    };
    setCertificates([...certificates, cert]);
  };

  const revokeCertificate = (id: string) => {
    setCertificates(certificates.map(cert => 
      cert.id === id ? { ...cert, status: "revoked" } : cert
    ));
  };

  return (
    <div className="space-y-6">

        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-4">
            <CertificateBuilder />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Template</CardTitle>
                  <CardDescription>Design custom certificate templates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="template-name">Template Name</Label>
                    <Input 
                      id="template-name" 
                      value={newTemplate.name}
                      onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                      placeholder="e.g., Security Fundamentals"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiry">Expiry Duration (days)</Label>
                    <Input 
                      id="expiry" 
                      type="number" 
                      value={newTemplate.expiry}
                      onChange={(e) => setNewTemplate({...newTemplate, expiry: parseInt(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="logo">Logo URL</Label>
                    <Input 
                      id="logo" 
                      value={newTemplate.logo}
                      onChange={(e) => setNewTemplate({...newTemplate, logo: e.target.value})}
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signatures">Signatures (comma-separated)</Label>
                    <Textarea 
                      id="signatures" 
                      value={newTemplate.signatures}
                      onChange={(e) => setNewTemplate({...newTemplate, signatures: e.target.value})}
                      placeholder="John Doe, CEO; Jane Smith, CTO"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="recertification"
                      checked={newTemplate.recertification}
                      onCheckedChange={(checked) => setNewTemplate({...newTemplate, recertification: checked})}
                    />
                    <Label htmlFor="recertification">Requires Re-certification</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="blockchain"
                      checked={newTemplate.blockchain}
                      onCheckedChange={(checked) => setNewTemplate({...newTemplate, blockchain: checked})}
                    />
                    <Label htmlFor="blockchain">Blockchain Anchoring</Label>
                  </div>
                  <Button onClick={createTemplate} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />Create Template
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Existing Templates</CardTitle>
                  <CardDescription>Manage certificate templates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {templates.map((template) => (
                      <div key={template.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{template.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Expires: {template.expiry} days | Recert: {template.recertification ? "Yes" : "No"}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Badge variant={template.active ? "default" : "secondary"}>
                            {template.active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Certificate Management</h3>
              <Button onClick={() => issueCertificate("", "", "")}>
                <Award className="mr-2 h-4 w-4" />Issue Certificate
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="p-4">Certificate #</th>
                        <th className="p-4">User</th>
                        <th className="p-4">Course</th>
                        <th className="p-4">Issued</th>
                        <th className="p-4">Expires</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Blockchain</th>
                        <th className="p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificates.map((cert) => (
                        <tr key={cert.id} className="border-b">
                          <td className="p-4 font-mono text-sm">{cert.number}</td>
                          <td className="p-4">{cert.user}</td>
                          <td className="p-4">{cert.course}</td>
                          <td className="p-4">{cert.issued}</td>
                          <td className="p-4">{cert.expires}</td>
                          <td className="p-4">
                            <Badge variant={
                              cert.status === "active" ? "default" : 
                              cert.status === "expired" ? "destructive" : "secondary"
                            }>
                              {cert.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            {cert.blockchain ? (
                              <Shield className="h-4 w-4 text-green-500" />
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <QrCode className="h-4 w-4" />
                              </Button>
                              {cert.status === "active" && (
                                <Button 
                                  size="sm" 
                                  variant="destructive"
                                  onClick={() => revokeCertificate(cert.id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certificate Verification</CardTitle>
                  <CardDescription>Verify certificate authenticity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cert-number">Certificate Number</Label>
                    <Input id="cert-number" placeholder="Enter certificate number" />
                  </div>
                  <Button className="w-full">
                    <Shield className="mr-2 h-4 w-4" />Verify Certificate
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>QR Code Generator</CardTitle>
                  <CardDescription>Generate verification QR codes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select certificate" />
                    </SelectTrigger>
                    <SelectContent>
                      {certificates.map((cert) => (
                        <SelectItem key={cert.id} value={cert.id}>
                          {cert.number} - {cert.user}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button className="w-full">
                    <QrCode className="mr-2 h-4 w-4" />Generate QR Code
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Blockchain Settings</CardTitle>
                <CardDescription>Configure blockchain anchoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Blockchain Anchoring</p>
                    <p className="text-sm text-muted-foreground">Anchor certificates to blockchain for immutable verification</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-anchor New Certificates</p>
                    <p className="text-sm text-muted-foreground">Automatically anchor certificates upon issuance</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="badges" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Security Expert
                  </CardTitle>
                  <CardDescription>Complete 5 security courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Earned by 23 users</span>
                    <Badge>Active</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Phishing Hunter
                  </CardTitle>
                  <CardDescription>Pass 10 phishing simulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Earned by 45 users</span>
                    <Badge>Active</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Create Badge
                  </CardTitle>
                  <CardDescription>Design new recognition badge</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />New Badge
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
    </div>
  );
}