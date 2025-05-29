
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar, Clock, Send, Image, Video, Mic, Sparkles } from "lucide-react";

const ContentStudio = () => {
  const [selectedTab, setSelectedTab] = useState("create");

  const scheduledPosts = [
    { id: 1, content: "Just launched our new feature! 🚀", scheduledFor: "Today, 2:00 PM", status: "scheduled" },
    { id: 2, content: "Thread about growth strategies...", scheduledFor: "Tomorrow, 9:00 AM", status: "scheduled" },
    { id: 3, content: "Behind the scenes content", scheduledFor: "Dec 1, 10:00 AM", status: "draft" },
  ];

  const threadTemplates = [
    { id: 1, name: "Growth Tips", tweets: 5, category: "Education" },
    { id: 2, name: "Product Launch", tweets: 7, category: "Announcement" },
    { id: 3, name: "Behind the Scenes", tweets: 4, category: "Personal" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Studio</h1>
        <p className="text-gray-600">Create, schedule, and manage your Twitter content</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Create New Tweet
                </CardTitle>
                <CardDescription>Craft your next viral tweet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="What's happening?"
                  className="min-h-[120px] resize-none"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Image className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-gray-500">280 characters left</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    Tweet Now
                  </Button>
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  AI Assistant
                </CardTitle>
                <CardDescription>Get AI-powered content suggestions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Topic or keyword..." />
                <Button className="w-full" variant="outline">
                  Generate Ideas
                </Button>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Suggested topics:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">#ProductivityTips</Badge>
                    <Badge variant="secondary">#TechTrends</Badge>
                    <Badge variant="secondary">#StartupLife</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Posts</CardTitle>
              <CardDescription>Manage your upcoming tweets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{post.content}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{post.scheduledFor}</span>
                        <Badge variant={post.status === "scheduled" ? "default" : "secondary"}>
                          {post.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thread Templates</CardTitle>
              <CardDescription>Pre-built templates for different content types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {threadTemplates.map((template) => (
                  <div key={template.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-medium mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{template.tweets} tweets</p>
                    <Badge variant="outline" className="mb-3">{template.category}</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Use Template</Button>
                      <Button size="sm" variant="ghost">Preview</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Draft Posts</CardTitle>
              <CardDescription>Continue working on your saved drafts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No drafts yet</p>
                <Button variant="outline">Create Your First Draft</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentStudio;
