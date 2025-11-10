import DashboardShell from "@/components/DashboardShell";
import StatCard from "@/components/StatCard";
import { GraduationCap, Trophy, Target, Award, Play, Shield, FileText, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Training() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardShell breadcrumb={[{ label: "Dashboard" }, { label: "Training & Awareness Center" }]}>
      <div className="p-6 space-y-6 bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-slate-900/5 min-h-screen">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Training & Awareness Center</h1>
            <p className="text-muted-foreground">
              Comprehensive cyber security training and awareness programs
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview" className="hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-orange-400 hover:text-orange-300 transition-all duration-300">Overview</TabsTrigger>
            <TabsTrigger value="modules" className="hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-orange-400 hover:text-orange-300 transition-all duration-300">Training Modules</TabsTrigger>
            <TabsTrigger value="gamified" className="hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-orange-400 hover:text-orange-300 transition-all duration-300">Gamified Programs</TabsTrigger>
            <TabsTrigger value="phishing" className="hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-orange-400 hover:text-orange-300 transition-all duration-300">Phishing Simulations</TabsTrigger>
            <TabsTrigger value="quiz" className="hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-orange-400 hover:text-orange-300 transition-all duration-300">Quiz & Certification</TabsTrigger>
            <TabsTrigger value="leaderboard" className="hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-orange-400 hover:text-orange-300 transition-all duration-300">Leaderboard</TabsTrigger>
            <TabsTrigger value="certificates" className="hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-orange-400 hover:text-orange-300 transition-all duration-300">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Completed Modules"
                value="24"
                description="This month"
                icon={GraduationCap}
                trend={{ value: 15.2, isPositive: true }}
              />
              <StatCard
                title="Compliance Score"
                value="87%"
                description="Employee average"
                icon={Award}
                trend={{ value: 5.1, isPositive: true }}
              />
              <StatCard
                title="Phishing Tests Passed"
                value="342"
                description="This week"
                icon={Target}
                trend={{ value: 8.3, isPositive: true }}
              />
              <StatCard
                title="Certificates Earned"
                value="156"
                description="Total issued"
                icon={Trophy}
              />
            </div>
          </TabsContent>

          <TabsContent value="modules" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security Fundamentals
                  </CardTitle>
                  <CardDescription>Basic cybersecurity principles</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={100} className="mb-3" />
                  <Button className="w-full hover:bg-white/10 hover:backdrop-blur-lg hover:border-orange-400 hover:text-orange-300 transition-all duration-300"><Play className="mr-2 h-4 w-4" />Complete</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Phishing Awareness
                  </CardTitle>
                  <CardDescription>Identify and avoid phishing attacks</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={75} className="mb-3" />
                  <Button className="w-full hover:bg-white/10 hover:backdrop-blur-lg hover:border-orange-400 hover:text-orange-300 transition-all duration-300" variant="outline"><Play className="mr-2 h-4 w-4" />Continue</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Data Protection
                  </CardTitle>
                  <CardDescription>GDPR and data handling best practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={30} className="mb-3" />
                  <Button className="w-full hover:bg-white/10 hover:backdrop-blur-lg hover:border-orange-400 hover:text-orange-300 transition-all duration-300" variant="outline"><Play className="mr-2 h-4 w-4" />Start</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gamified" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cyber Defense Challenge</CardTitle>
                  <CardDescription>Interactive security scenarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-3">
                    <span>Level 5/10</span>
                    <Badge>850 XP</Badge>
                  </div>
                  <Button className="w-full">Continue Challenge</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Security Awareness Quest</CardTitle>
                  <CardDescription>Gamified learning journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-3">
                    <span>3/5 Missions</span>
                    <Badge variant="secondary">1,200 XP</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Start Quest</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="phishing" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Email Phishing Test</CardTitle>
                  <CardDescription>Identify suspicious emails</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">Last Score: 85%</span>
                  </div>
                  <Button className="w-full">Take Test</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Engineering Sim</CardTitle>
                  <CardDescription>Phone and social media attacks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">Last Score: 92%</span>
                  </div>
                  <Button className="w-full" variant="outline">Start Simulation</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Website Spoofing Test</CardTitle>
                  <CardDescription>Detect fake websites</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">Not attempted</span>
                  </div>
                  <Button className="w-full" variant="outline">Begin Test</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Security Fundamentals Quiz</CardTitle>
                  <CardDescription>25 questions • 30 minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge className="mb-2">Certification Available</Badge>
                    <p className="text-sm text-muted-foreground">Pass rate: 80% required</p>
                  </div>
                  <Button className="w-full">Start Quiz</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Security Quiz</CardTitle>
                  <CardDescription>40 questions • 45 minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge variant="secondary" className="mb-2">Prerequisites Required</Badge>
                    <p className="text-sm text-muted-foreground">Complete fundamentals first</p>
                  </div>
                  <Button className="w-full" variant="outline" disabled>Locked</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Earned Certificates</CardTitle>
                  <CardDescription>Your completed certifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Security Fundamentals</p>
                      <p className="text-sm text-muted-foreground">Completed: Dec 15, 2024</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Phishing Awareness</p>
                      <p className="text-sm text-muted-foreground">Completed: Nov 28, 2024</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Available Certificates</CardTitle>
                  <CardDescription>Complete training to earn these</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg opacity-60">
                    <div>
                      <p className="font-medium">Data Protection Specialist</p>
                      <p className="text-sm text-muted-foreground">Progress: 60%</p>
                    </div>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg opacity-60">
                    <div>
                      <p className="font-medium">Advanced Security Expert</p>
                      <p className="text-sm text-muted-foreground">Prerequisites required</p>
                    </div>
                    <Badge variant="outline">Locked</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Employee Compliance Scoring</CardTitle>
                <CardDescription>Top performers this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-6 w-6 text-yellow-500" />
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Security Analyst</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-500">2,450 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="font-medium">Mike Chen</p>
                        <p className="text-sm text-muted-foreground">Developer</p>
                      </div>
                    </div>
                    <Badge variant="secondary">2,180 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-6 w-6 text-orange-500" />
                      <div>
                        <p className="font-medium">Alex Rivera</p>
                        <p className="text-sm text-muted-foreground">HR Manager</p>
                      </div>
                    </div>
                    <Badge variant="secondary">1,950 pts</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}