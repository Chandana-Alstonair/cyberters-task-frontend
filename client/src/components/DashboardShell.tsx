import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import logoUrl from "@assets/cyberters logo_1761815306032.png";

interface DashboardShellProps {
  children: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  hideHeader?: boolean;
  hideHeaderOnNestedNav?: boolean;
}

export default function DashboardShell({ children, breadcrumb, hideHeader = false, hideHeaderOnNestedNav = false }: DashboardShellProps) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          {!hideHeader && (
            <>
              <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:px-6">
                <SidebarTrigger data-testid="button-sidebar-toggle" className="header-icon-orange" />
                
                <div className="flex-1 flex items-center gap-4">
                  <div className="relative max-w-md flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-8"
                      data-testid="input-search"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative header-icon-orange" data-testid="button-notifications">
                        <Bell className="h-5 w-5" />
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          3
                        </Badge>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium">Critical threat detected</p>
                          <p className="text-xs text-muted-foreground">DDoS attack from 192.168.1.50</p>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium">Audit completed</p>
                          <p className="text-xs text-muted-foreground">Q4 2024 compliance check</p>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium">New policy assigned</p>
                          <p className="text-xs text-muted-foreground">GDPR update required</p>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="header-icon-orange" data-testid="button-profile">
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => {
                        localStorage.removeItem("userRole");
                        localStorage.removeItem("userEmail");
                        window.location.href = "/auth/signin";
                      }}>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </header>

              {breadcrumb && !hideHeaderOnNestedNav && (
                <div className="flex items-center gap-2 px-6 py-3 text-sm text-muted-foreground border-b bg-card">
                  {breadcrumb.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {idx > 0 && <span>/</span>}
                      <span className={idx === breadcrumb.length - 1 ? "text-foreground font-medium" : ""}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          <main className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
