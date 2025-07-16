import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Download, 
  Calendar,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

const reports = [
  {
    title: "Monthly Sales Report",
    description: "Comprehensive sales analysis for the current month",
    type: "Sales",
    lastGenerated: "2 hours ago",
    icon: BarChart3
  },
  {
    title: "User Analytics",
    description: "User behavior and engagement metrics",
    type: "Analytics", 
    lastGenerated: "1 day ago",
    icon: PieChart
  },
  {
    title: "Financial Summary",
    description: "Revenue and expense breakdown",
    type: "Finance",
    lastGenerated: "3 days ago",
    icon: LineChart
  },
  {
    title: "Performance Metrics",
    description: "System and application performance data",
    type: "Performance",
    lastGenerated: "1 week ago",
    icon: FileText
  }
];

export const ReportsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Reports</h1>
          <p className="text-muted-foreground">
            Generate and download comprehensive business reports
          </p>
        </div>
        
        <Button className="flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary-hover">
          <FileText className="h-4 w-4" />
          <span>New Report</span>
        </Button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, index) => {
          const Icon = report.icon;
          
          return (
            <Card key={index} className="border shadow-sm bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted/40 rounded border border-border/50">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{report.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          {report.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2">
                  {report.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Last generated: {report.lastGenerated}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <Card className="border shadow-sm bg-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold tracking-tight">Report Statistics</CardTitle>
          <CardDescription className="text-sm">
            Overview of your reporting activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-semibold text-foreground tracking-tight">24</div>
              <div className="text-sm text-muted-foreground">Reports Generated</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-semibold text-foreground tracking-tight">156</div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-semibold text-foreground tracking-tight">8</div>
              <div className="text-sm text-muted-foreground">Scheduled Reports</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};