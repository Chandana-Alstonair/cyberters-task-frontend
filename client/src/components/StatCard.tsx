import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export default function StatCard({ 
  title, 
  value, 
  description, 
  icon: Icon,
  trend,
  className 
}: StatCardProps) {
  return (
    <Card className={cn("hover-elevate", className)} data-testid={`card-stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && (
          <Icon className="h-4 w-4 text-accent" data-testid="icon-stat" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" data-testid="text-stat-value">{value}</div>
        {(description || trend) && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            {trend && (
              <span className={cn(
                "font-medium",
                trend.isPositive ? "text-green-500" : "text-red-500"
              )} data-testid="text-trend">
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
            )}
            {description && <span data-testid="text-description">{description}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
