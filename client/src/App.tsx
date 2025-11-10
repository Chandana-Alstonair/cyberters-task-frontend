import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import Features from "@/pages/Features";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";
import Product from "@/pages/Product";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import GlobalDashboard from "@/pages/dashboard/GlobalDashboard";
import AIIntelligence from "@/pages/dashboard/AIIntelligence";
import AuditCompliance from "@/pages/dashboard/AuditCompliance";
import Automation from "@/pages/dashboard/Automation";
import RiskPolicy from "@/pages/dashboard/RiskPolicy";
import CloudVendor from "@/pages/dashboard/CloudVendor";
import Training from "@/pages/dashboard/Training";
import Organization from "@/pages/dashboard/Organization";
import EmployeeManagement from "@/pages/dashboard/EmployeeManagement";
import Client from "@/pages/dashboard/Client";
import DocsIndex from "@/pages/docs/DocsIndex";
import DocPage from "@/pages/docs/DocPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/features" component={Features} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resources" component={Resources} />
      <Route path="/product" component={Product} />
      <Route path="/docs" component={DocsIndex} />
      <Route path="/docs/:slug" component={DocPage} />
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
      <Route path="/dashboard" component={GlobalDashboard} />
      <Route path="/dashboard/ai-intelligence" component={AIIntelligence} />
      <Route path="/dashboard/audit" component={AuditCompliance} />
      <Route path="/dashboard/automation" component={Automation} />
      <Route path="/dashboard/risk" component={RiskPolicy} />
      <Route path="/dashboard/cloud" component={CloudVendor} />
      <Route path="/dashboard/training" component={Training} />
      <Route path="/dashboard/organization" component={Organization} />
      <Route path="/dashboard/employee-management" component={EmployeeManagement} />
      <Route path="/dashboard/client" component={Client} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
