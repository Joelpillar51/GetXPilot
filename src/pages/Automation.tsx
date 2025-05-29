
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Zap, MessageSquare, Heart, Repeat, Settings, Play, Pause } from "lucide-react";

const Automation = () => {
  const [rules, setRules] = useState([
    { id: 1, name: "Auto-reply to mentions", type: "reply", status: "active", triggers: 45 },
    { id: 2, name: "Like tweets with keywords", type: "like", status: "active", triggers: 128 },
    { id: 3, name: "Follow back new followers", type: "follow", status: "paused", triggers: 23 },
  ]);

  const toggleRule = (id: number) => {
    setRules(rules.map(rule => 
      rule.id === id 
        ? { ...rule, status: rule.status === "active" ? "paused" : "active" }
        : rule
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Automation</h1>
        <p className="text-gray-600">Set up smart rules to automate your Twitter engagement</p>
      </div>

      <Tabs defaultValue="rules" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rules">Active Rules</TabsTrigger>
          <TabsTrigger value="create">Create Rule</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="rules" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Automation Rules</h2>
              <p className="text-gray-600">Manage your active automation rules</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Rule
            </Button>
          </div>

          <div className="grid gap-4">
            {rules.map((rule) => (
              <Card key={rule.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {rule.type === "reply" && <MessageSquare className="w-5 h-5 text-blue-600" />}
                        {rule.type === "like" && <Heart className="w-5 h-5 text-blue-600" />}
                        {rule.type === "follow" && <Repeat className="w-5 h-5 text-blue-600" />}
                      </div>
                      <div>
                        <h3 className="font-medium">{rule.name}</h3>
                        <p className="text-sm text-gray-500">{rule.triggers} triggers this month</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={rule.status === "active" ? "default" : "secondary"}>
                        {rule.status}
                      </Badge>
                      <Switch
                        checked={rule.status === "active"}
                        onCheckedChange={() => toggleRule(rule.id)}
                      />
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Automation Rule</CardTitle>
              <CardDescription>Set up a new automation to engage with your audience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Auto-Reply</CardTitle>
                    <CardDescription>Automatically reply to mentions and DMs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="reply-trigger">Trigger Keywords</Label>
                        <Input id="reply-trigger" placeholder="hello, hi, support" />
                      </div>
                      <div>
                        <Label htmlFor="reply-message">Reply Message</Label>
                        <Input id="reply-message" placeholder="Thanks for reaching out!" />
                      </div>
                      <Button className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Create Auto-Reply Rule
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Auto-Like</CardTitle>
                    <CardDescription>Like tweets containing specific keywords</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="like-keywords">Keywords to Like</Label>
                        <Input id="like-keywords" placeholder="startup, entrepreneur, SaaS" />
                      </div>
                      <div>
                        <Label htmlFor="like-limit">Daily Limit</Label>
                        <Input id="like-limit" type="number" placeholder="50" />
                      </div>
                      <Button className="w-full">
                        <Heart className="w-4 h-4 mr-2" />
                        Create Auto-Like Rule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Follow-Back</CardTitle>
                  <CardDescription>Automatically follow back users who follow you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="follow-criteria">Follow Criteria</Label>
                      <Input id="follow-criteria" placeholder="Min followers: 100" />
                    </div>
                    <div>
                      <Label htmlFor="follow-delay">Delay (hours)</Label>
                      <Input id="follow-delay" type="number" placeholder="2" />
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Repeat className="w-4 h-4 mr-2" />
                    Create Follow-Back Rule
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Total Automations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">196</div>
                <p className="text-xs text-green-600">+23 this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.4%</div>
                <p className="text-xs text-green-600">+2.1% this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2h</div>
                <p className="text-xs text-gray-500">daily average</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Automation Performance</CardTitle>
              <CardDescription>See how your automation rules are performing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{rule.name}</p>
                      <p className="text-sm text-gray-500">{rule.triggers} actions this month</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">+15% engagement</p>
                      <p className="text-xs text-gray-500">vs. manual</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Automation;
