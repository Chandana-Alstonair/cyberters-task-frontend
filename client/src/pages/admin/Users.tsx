import DashboardShell from "@/components/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, Edit, Trash2 } from "lucide-react";

export default function AdminUsers() {
  return (
    <DashboardShell breadcrumb={[{ label: "Admin" }, { label: "User Role Management" }]}>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">User Role Management</h1>
          <p className="text-muted-foreground">
            Manage users, roles, and permissions across the system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Create User
              </CardTitle>
              <CardDescription>Add new users to the system</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New User
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-5 w-5" />
                Manage Roles
              </CardTitle>
              <CardDescription>Assign and modify user roles</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Roles
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="h-5 w-5" />
                User Management
              </CardTitle>
              <CardDescription>View and manage existing users</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                View All Users
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}