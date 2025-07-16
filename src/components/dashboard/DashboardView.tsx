import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Users
  },
  {
    title: "Revenue",
    value: "$24,592",
    change: "+8%",
    trend: "up", 
    icon: DollarSign
  },
  {
    title: "Active Sessions",
    value: "1,234",
    change: "-3%",
    trend: "down",
    icon: Activity
  },
  {
    title: "Growth Rate",
    value: "23.4%",
    change: "+5%",
    trend: "up",
    icon: TrendingUp
  }
];

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
          
          return (
            <Card key={index} className="border shadow-sm bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground tracking-tight">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <TrendIcon className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {stat.change}
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border shadow-sm bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold tracking-tight">Recent Activity</CardTitle>
            <CardDescription className="text-sm">
              Your latest business activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { action: "New user registration", time: "2 minutes ago", type: "user" },
              { action: "Payment received", time: "1 hour ago", type: "payment" },
              { action: "Report generated", time: "3 hours ago", type: "report" },
              { action: "System backup completed", time: "6 hours ago", type: "system" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded bg-muted/20 border border-border/50">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border shadow-sm bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold tracking-tight">Quick Actions</CardTitle>
            <CardDescription className="text-sm">
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              "Generate monthly report",
              "Add new team member", 
              "Update billing settings",
              "Schedule maintenance"
            ].map((action, index) => (
              <button
                key={index}
                className="w-full text-left p-3 rounded bg-muted/20 hover:bg-muted/40 transition-colors text-sm font-medium text-foreground border border-border/50 hover:border-border"
              >
                {action}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};