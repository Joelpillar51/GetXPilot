
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Bell, Shield, Palette, Download, Trash2, Save, Twitter, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      smsNotifications: false,
      mentions: true,
      directMessages: true,
      followers: false
    },
    privacy: {
      profileVisibility: "public",
      allowDirectMessages: true,
      showActivity: false,
      allowTagging: true
    },
    appearance: {
      theme: "light",
      language: "en",
      timezone: "UTC-8"
    },
    account: {
      email: "joel.pillar@example.com",
      phone: "+1 (555) 123-4567"
    }
  });

  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully!"
    });
  };

  const handleConnectTwitter = () => {
    toast({
      title: "Twitter Connection",
      description: "Redirecting to Twitter for authentication...",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data Export Started",
      description: "Your data export will be ready in a few minutes. We'll send you an email when it's complete."
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "Please contact support to delete your account.",
      variant: "destructive"
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose how you want to be notified about activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={settings.notifications.emailNotifications}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, emailNotifications: checked }
                        }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-gray-500">Receive push notifications in your browser</p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={settings.notifications.pushNotifications}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, pushNotifications: checked }
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Activity Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="mentions">Mentions and Replies</Label>
                    <Switch
                      id="mentions"
                      checked={settings.notifications.mentions}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, mentions: checked }
                        }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="direct-messages">Direct Messages</Label>
                    <Switch
                      id="direct-messages"
                      checked={settings.notifications.directMessages}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, directMessages: checked }
                        }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="followers">New Followers</Label>
                    <Switch
                      id="followers"
                      checked={settings.notifications.followers}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, followers: checked }
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Control who can see your content and interact with you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <Select
                    value={settings.privacy.profileVisibility}
                    onValueChange={(value) => 
                      setSettings(prev => ({
                        ...prev,
                        privacy: { ...prev.privacy, profileVisibility: value }
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="allow-dms">Allow Direct Messages</Label>
                    <p className="text-sm text-gray-500">Anyone can send you direct messages</p>
                  </div>
                  <Switch
                    id="allow-dms"
                    checked={settings.privacy.allowDirectMessages}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({
                        ...prev,
                        privacy: { ...prev.privacy, allowDirectMessages: checked }
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-activity">Show Activity Status</Label>
                    <p className="text-sm text-gray-500">Let others see when you're online</p>
                  </div>
                  <Switch
                    id="show-activity"
                    checked={settings.privacy.showActivity}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({
                        ...prev,
                        privacy: { ...prev.privacy, showActivity: checked }
                      }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize how the app looks and feels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <Select
                    value={settings.appearance.theme}
                    onValueChange={(value) => 
                      setSettings(prev => ({
                        ...prev,
                        appearance: { ...prev.appearance, theme: value }
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select
                    value={settings.appearance.language}
                    onValueChange={(value) => 
                      setSettings(prev => ({
                        ...prev,
                        appearance: { ...prev.appearance, language: value }
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={settings.appearance.timezone}
                    onValueChange={(value) => 
                      setSettings(prev => ({
                        ...prev,
                        appearance: { ...prev.appearance, timezone: value }
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="UTC+0">Greenwich Mean Time (UTC+0)</SelectItem>
                      <SelectItem value="UTC+1">Central European Time (UTC+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Update your account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.account.email}
                    onChange={(e) => 
                      setSettings(prev => ({
                        ...prev,
                        account: { ...prev.account, email: e.target.value }
                      }))
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={settings.account.phone}
                    onChange={(e) => 
                      setSettings(prev => ({
                        ...prev,
                        account: { ...prev.account, phone: e.target.value }
                      }))
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Button variant="outline" className="mt-2 w-full">
                    Change Password
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="w-5 h-5" />
                Connected Accounts
              </CardTitle>
              <CardDescription>
                Manage your social media integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Twitter</h3>
                    <p className="text-sm text-gray-500">Connect your Twitter account to sync data</p>
                  </div>
                </div>
                <Button onClick={handleConnectTwitter} variant="outline">
                  <Twitter className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Data Export
                </CardTitle>
                <CardDescription>
                  Download a copy of your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleExportData}>
                  <Download className="w-4 h-4 mr-2" />
                  Request Data Export
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <Trash2 className="w-5 h-5" />
                  Delete Account
                </CardTitle>
                <CardDescription>
                  Permanently delete your account and all associated data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <div className="flex justify-end pt-6">
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;
