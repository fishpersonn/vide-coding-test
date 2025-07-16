import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  User, 
  Bell, 
  Shield, 
  Palette,
  Save
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

export const SettingsView: React.FC = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="border shadow-sm bg-card">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-foreground" />
              <CardTitle className="text-lg font-semibold tracking-tight">Profile Information</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Update your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input 
                id="name" 
                defaultValue={user?.name}
                placeholder="Enter your full name"
                className="border-border bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email"
                defaultValue={user?.email}
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                placeholder="Enter your phone number"
              />
            </div>
            
            <Button onClick={handleSave} className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border shadow-sm bg-card">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-foreground" />
              <CardTitle className="text-lg font-semibold tracking-tight">Notifications</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Choose how you want to be notified
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium text-foreground">Email Notifications</div>
                <div className="text-sm text-muted-foreground">
                  Receive updates via email
                </div>
              </div>
              <Switch 
                checked={notifications.email}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, email: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium text-foreground">Push Notifications</div>
                <div className="text-sm text-muted-foreground">
                  Get notified on your devices
                </div>
              </div>
              <Switch 
                checked={notifications.push}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, push: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium text-foreground">Marketing Emails</div>
                <div className="text-sm text-muted-foreground">
                  Receive promotional content
                </div>
              </div>
              <Switch 
                checked={notifications.marketing}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border shadow-sm bg-card">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-foreground" />
              <CardTitle className="text-lg font-semibold tracking-tight">Security</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Manage your account security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start text-foreground border-border hover:bg-muted/20">
              Change Password
            </Button>
            
            <Button variant="outline" className="w-full justify-start text-foreground border-border hover:bg-muted/20">
              Two-Factor Authentication
            </Button>
            
            <Button variant="outline" className="w-full justify-start text-foreground border-border hover:bg-muted/20">
              Active Sessions
            </Button>
            
            <Button variant="outline" className="w-full justify-start text-muted-foreground border-border hover:bg-muted/20 hover:text-foreground">
              Delete Account
            </Button>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card className="border shadow-sm bg-card">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-foreground" />
              <CardTitle className="text-lg font-semibold tracking-tight">Appearance</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Customize how the app looks and feels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Theme</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="justify-start text-foreground border-border hover:bg-muted/20">
                  Light
                </Button>
                <Button variant="outline" size="sm" className="justify-start text-foreground border-border hover:bg-muted/20">
                  Dark
                </Button>
                <Button variant="outline" size="sm" className="justify-start text-foreground border-border hover:bg-muted/20">
                  System
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">Language</Label>
              <Button variant="outline" className="w-full justify-start text-foreground border-border hover:bg-muted/20">
                English (US)
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">Timezone</Label>
              <Button variant="outline" className="w-full justify-start text-foreground border-border hover:bg-muted/20">
                UTC-5 (Eastern Time)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};