import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  Brain, 
  FileCheck, 
  Zap, 
  Shield, 
  Cloud, 
  GraduationCap, 
  Users,
  LayoutDashboard,
  Activity,
  Radar,
  TrendingUp,
  Eye,
  Target,
  Lock,
  Settings,
  Key,
  Database,
  Webhook,
  Search,
  AlertTriangle,
  BarChart3,
  Play,
  FileSignature,
  CheckCircle,
  Download,
  Upload,
  Award,
  Trophy,
  BookOpen,
  Video,
  FileCheck2,
  Clock,
  Handshake,
  Bell,
  FileDown,
  CreditCard
} from "lucide-react";
import { useLocation } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import BackButton from "../BackButton";
import Logo from "@/components/Logo";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";


const dashboards = [
  {
    title: "Global Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
    submenu: [
      { title: "Security Overview", url: "/dashboard?tab=overview" },
      { title: "Analytics & Intelligence", url: "/dashboard?tab=analytics" },
    ],
  },
  {
    title: "AI Intelligence",
    icon: Brain,
    url: "/dashboard/ai-intelligence",
    submenu: [
      { title: "AI Threat Overview", url: "/dashboard/ai-intelligence" },
      { title: "Anomaly Detection", url: "/dashboard/ai-intelligence/anomaly" },
      { title: "Threat Intelligence", url: "/dashboard/ai-intelligence/intelligence" },
      { title: "Predictive Analytics", url: "/dashboard/ai-intelligence/predictive" },
      { title: "Dark Web Monitoring", url: "/dashboard/ai-intelligence/darkweb" },
      { title: "Deception Systems", url: "/dashboard/ai-intelligence/deception" },
      { title: "Zero Day & Quantum", url: "/dashboard/ai-intelligence/quantum" },
    ],
  },
  {
    title: "Audit & Compliance",
    icon: FileCheck,
    url: "/dashboard/audit",
    submenu: [
      { title: "Audit Overview", url: "/dashboard/audit" },
      { title: "Audit Scheduling", url: "/dashboard/audit/scheduling" },
      { title: "Evidence Management", url: "/dashboard/audit/evidence" },
      { title: "Audit Reports", url: "/dashboard/audit/reports" },
      { title: "Compliance Checklists", url: "/dashboard/audit/checklists" },
      { title: "Attestation Workflows", url: "/dashboard/audit/attestation" },
      { title: "Immutable Audit Trails", url: "/dashboard/audit/blockchain" },
    ],
  },
  {
    title: "Automation & Response",
    icon: Zap,
    url: "/dashboard/automation",
    submenu: [
      { title: "Control Center", url: "/dashboard/automation" },
      { title: "Incident Response", url: "/dashboard/automation/incident" },
      { title: "Patch Management", url: "/dashboard/automation/patches" },
      { title: "Penetration Testing", url: "/dashboard/automation/pentest" },
      { title: "Security Orchestration", url: "/dashboard/automation/soar" },
      { title: "Auto Prioritization", url: "/dashboard/automation/prioritization" },
      { title: "Automated Reports", url: "/dashboard/automation/reports" },
    ],
  },
  {
    title: "Risk & Policy",
    icon: Shield,
    url: "/dashboard/risk",
    submenu: [
      { title: "Risk Overview", url: "/dashboard/risk" },
      { title: "Risk Assessment", url: "/dashboard/risk/assessment" },
      { title: "Policy Management", url: "/dashboard/risk/policies" },
      { title: "Compliance Status", url: "/dashboard/risk/compliance" },
      { title: "KPI & SLA Tracking", url: "/dashboard/risk/kpi" },
      { title: "Forecasting", url: "/dashboard/risk/forecasting" },
    ],
  },
  {
    title: "Cloud & Vendor",
    icon: Cloud,
    url: "/dashboard/cloud",
    submenu: [
      { title: "Cloud Security", url: "/dashboard/cloud" },
      { title: "Vendor Management", url: "/dashboard/cloud/vendors" },
      { title: "Cyber Insurance", url: "/dashboard/cloud/insurance" },
      { title: "Third-Party Compliance", url: "/dashboard/cloud/third-party" },
      { title: "Backup & Data Security", url: "/dashboard/cloud/backup" },
    ],
  },
  {
    title: "Cyber Training",
    icon: GraduationCap,
    url: "/dashboard/training",
    submenu: [
      { title: "Training Overview", url: "/dashboard/training" },
      { title: "Interactive Modules", url: "/dashboard/training/modules" },
      { title: "Gamified Challenges", url: "/dashboard/training/challenges" },
      { title: "Assessment & Certification", url: "/dashboard/training/assessment" },
      { title: "Leaderboard", url: "/dashboard/training/leaderboard" },
      { title: "Cyber Awareness Content", url: "/dashboard/training/content" },
    ],
  },
  {
    title: "Organization",
    icon: Users,
    url: "/dashboard/organization",
    submenu: [
      { title: "User Management", url: "/dashboard/organization" },
      { title: "Organization Setup", url: "/dashboard/organization/setup" },
      { title: "Notification Center", url: "/dashboard/organization/notifications" },
      { title: "Support & Tickets", url: "/dashboard/organization/support" },
      { title: "System Settings", url: "/dashboard/organization/settings" },
    ],
  },
  {
    title: "Client Portal",
    icon: Users,
    url: "/dashboard/client",
    submenu: [
      { title: "Client Overview", url: "/dashboard/client" },
      { title: "Insurance Portal", url: "/dashboard/client/insurance" },
      { title: "Compliance Reports", url: "/dashboard/client/compliance" },
      { title: "Risk Dashboard", url: "/dashboard/client/risk" },
      { title: "Attestation Requests", url: "/dashboard/client/attestations" },
    ],
  },
  {
    title: "Employee Management",
    icon: GraduationCap,
    url: "/dashboard/employee-management",
    submenu: [
      { title: "Employee Overview", url: "/dashboard/employee-management" },
      { title: "Training Management", url: "/dashboard/employee-management/training" },
      { title: "Certifications", url: "/dashboard/employee-management/certifications" },
      { title: "Assessments", url: "/dashboard/employee-management/assessments" },
      { title: "Training Reports", url: "/dashboard/employee-management/reports" },
    ],
  },
];

export function AppSidebar() {
  const [location] = useLocation();
  const userRole = localStorage.getItem("userRole") || "Employee";
  const [expandedDashboard, setExpandedDashboard] = useState<string | null>(null);
  
  // Filter dashboards based on user role
  const filteredDashboards = dashboards.filter(item => {
    switch(userRole) {
      case "Admin":
        // Admin has access to all dashboards except Cyber Training
        return item.title !== "Cyber Training";
      case "SOC Analyst":
        return ["Global Dashboard", "AI Intelligence"].includes(item.title) && item.title !== "Client Portal";
      case "Compliance Officer":
        return ["Global Dashboard", "Audit & Compliance"].includes(item.title) && item.title !== "Client Portal";
      case "Auditor":
        return ["Global Dashboard", "Audit & Compliance"].includes(item.title) && item.title !== "Client Portal";
      case "Vendor":
        return ["Global Dashboard", "Cloud & Vendor"].includes(item.title) && item.title !== "Client Portal";
      case "Client":
        return ["Client Portal"].includes(item.title);
      default:
        return item.title === "Cyber Training";
    }
  });



  const socAnalystTools = [
    {
      title: "Threat Intelligence",
      icon: Brain,
      url: "/dashboard/ai-intelligence?tab=threat-intelligence",
    },
    {
      title: "Risk & Assurance",
      icon: Shield,
      url: "/dashboard/ai-intelligence?tab=risk-assurance",
    },
    {
      title: "Attack Simulation",
      icon: Target,
      url: "/dashboard/ai-intelligence?tab=attack-simulation",
    },
  ];

  const complianceOfficerTools = [
    {
      title: "Automation & Response",
      icon: Zap,
      url: "/dashboard/audit?tab=automation",
    },
    {
      title: "Risk & Policy",
      icon: Shield,
      url: "/dashboard/audit?tab=risk-policy",
    },
    {
      title: "Insurance",
      icon: CreditCard,
      url: "/dashboard/audit?tab=insurance",
    },
  ];

  const auditorTools = [
    {
      title: "Automation & Response",
      icon: Zap,
      url: "/dashboard/audit?tab=automation",
    },
    {
      title: "Risk & Policy",
      icon: Shield,
      url: "/dashboard/audit?tab=risk-policy",
    },
    {
      title: "Insurance",
      icon: CreditCard,
      url: "/dashboard/audit?tab=insurance",
    },
    {
      title: "Audit Review",
      icon: Eye,
      url: "/auditor/review",
    },
    {
      title: "Approval Dashboard",
      icon: CheckCircle,
      url: "/auditor/approvals",
    },
    {
      title: "Verification Center",
      icon: Shield,
      url: "/auditor/verification",
    },
    {
      title: "Blockchain Validator",
      icon: Lock,
      url: "/auditor/blockchain-validator",
    },
    {
      title: "Final Certification",
      icon: Award,
      url: "/auditor/certification",
    },
  ];

  const employeeTools = [];

  const adminTools = [
    { title: "User Role Management", icon: Users, url: "/admin/users" },
    { title: "Settings", icon: Settings, url: "/admin/settings" },
    { title: "Security", icon: Shield, url: "/admin/security" },
    { title: "Database", icon: Database, url: "/admin/database" },
    { title: "Integrations", icon: Webhook, url: "/admin/integrations" },
  ];

  const vendorTools = [
    {
      title: "Cloud, Vendor & Insurance",
      icon: Cloud,
      url: "/dashboard/cloud?tab=vendor-dashboard",
    },
    {
      title: "Risk & Policy Management",
      icon: Shield,
      url: "/dashboard/cloud?tab=risk-policy-management",
    },
    {
      title: "Automation & Response",
      icon: Zap,
      url: "/dashboard/cloud?tab=automation-response",
    },
  ];

  const clientTools = [
    {
      title: "Insurance Integration",
      icon: CreditCard,
      url: "/dashboard/client?tab=insurance-integration",
    },
  ];

  return (
    <Sidebar className="bg-gradient-to-b from-indigo-50 via-blue-50 to-slate-100 border-r border-indigo-200">
      <SidebarHeader className="border-b border-indigo-200 p-4 bg-indigo-100/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">

            <Logo size="md" showText={false} />
          </div>
          <ThemeToggle />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredDashboards.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.title === "Global Dashboard" && item.submenu ? (
                    <div>
                      <SidebarMenuButton
                        onClick={() => setExpandedDashboard(expandedDashboard === item.title ? null : item.title)}
                        className="w-full justify-between"
                        data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                        {expandedDashboard === item.title ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </SidebarMenuButton>
                      {expandedDashboard === item.title && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <SidebarMenuButton
                              key={subItem.title}
                              asChild
                              isActive={location.includes(subItem.url)}
                              className="text-sm"
                            >
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuButton>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        


        {userRole === "SOC Analyst" && (
          <SidebarGroup>
            <SidebarGroupLabel>🔍 SOC Tools</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {socAnalystTools.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      data-testid={`link-soc-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        
        {userRole === "Compliance Officer" && (
          <SidebarGroup>
            <SidebarGroupLabel>📋 Compliance Tools</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {complianceOfficerTools.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      data-testid={`link-compliance-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        
        {userRole === "Auditor" && (
          <SidebarGroup>
            <SidebarGroupLabel>✅ Auditor Tools</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {auditorTools.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      data-testid={`link-auditor-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        

        
        {userRole === "Vendor" && (
          <SidebarGroup>
            <SidebarGroupLabel>🤝 Vendor Tools</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {vendorTools.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      data-testid={`link-vendor-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        
        {userRole === "Client" && (
          <SidebarGroup>
            <SidebarGroupLabel>📊 Client Portal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {clientTools.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      data-testid={`link-client-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
