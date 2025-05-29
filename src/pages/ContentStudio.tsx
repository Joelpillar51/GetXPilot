
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar, Clock, Edit, Trash2, Sparkles } from "lucide-react";
import { TweetModal } from "@/components/TweetModal";
import { useToast } from "@/hooks/use-toast";

const ContentStudio = () => {
  const [selectedTab, setSelectedTab] = useState("create");
  const { toast } = useToast();

  const [scheduledPosts, setScheduledPosts] = useState([
    { id: 1, content: "Just launched our new feature! 🚀", scheduledFor: "Today, 2:00 PM", status: "scheduled" },
    { id: 2, content: "Thread about growth strategies...", scheduledFor: "Tomorrow, 9:00 AM", status: "scheduled" },
    { id: 3, content: "Behind the scenes content", scheduledFor: "Dec 1, 10:00 AM", status: "draft" },
  ]);

  const [drafts, setDrafts] = useState([
    { id: 4, content: "AI is changing the game for content creators...", status: "draft", updatedAt: "2 hours ago" },
    { id: 5, content: "3 tools every solopreneur needs in 2024", status: "draft", updatedAt: "1 day ago" },
  ]);

  const threadTemplates = [
    { id: 1, name: "Growth Tips", tweets: 5, category: "Education" },
    { id: 2, name: "Product Launch", tweets: 7, category: "Announcement" },
    { id: 3, name: "Behind the Scenes", tweets: 4, category: "Personal" },
  ];

  const handleEditPost = (postId: number) => {
    toast({
      title: "Edit Mode",
      description: `Editing post ${postId}...`
    });
  };

  const handleDeletePost = (postId: number) => {
    setScheduledPosts(scheduledPosts.filter(post => post.id !== postId));
    toast({
      title: "Post Deleted",
      description: "Scheduled post has been deleted"
    });
  };

  const handlePreviewTemplate = (templateId: number) => {
    const template = threadTemplates.find(t => t.id === templateId);
    toast({
      title: "Template Preview",
      description: `Previewing ${template?.name} template...`
    });
  };

  const handleUseTemplate = (templateId: number) => {
    const template = threadTemplates.find(t => t.id === templateId);
    toast({
      title: "Template Applied",
      description: `Using ${template?.name} template for new thread`
    });
  };

  const handleCreateDraft = () => {
    const newDraft = {
      id: Date.now(),
      content: "New draft content...",
      status: "draft",
      updatedAt: "Just now"
    };
    setDrafts([newDraft, ...drafts]);
    toast({
      title: "Draft Created",
      description: "New draft has been created"
    });
  };

  const handleEditDraft = (draftId: number) => {
    const draft = drafts.find(d => d.id === draftId);
    if (draft) {
      toast({
        title: "Edit Draft",
        description: `Opening draft editor for: "${draft.content.substring(0, 30)}..."`
      });
      // In a real app, this would open the draft in an editor
    }
  };

  const handleDeleteDraft = (draftId: number) => {
    setDrafts(drafts.filter(draft => draft.id !== draftId));
    toast({
      title: "Draft Deleted",
      description: "Draft has been deleted"
    });
  };

  const handleGenerateIdeas = () => {
    toast({
      title: "AI Ideas Generated",
      description: "New content ideas have been generated!"
    });
  };

  const handleTweetSubmit = (tweet: any) => {
    if (tweet.status === "scheduled") {
      setScheduledPosts(prev => [...prev, tweet]);
    } else {
      toast({
        title: "Tweet Posted",
        description: "Your tweet has been published successfully!"
      });
    }
  };

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
            <TweetModal
              onSubmit={handleTweetSubmit}
              trigger={
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Create New Tweet
                    </CardTitle>
                    <CardDescription>Craft your next viral tweet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Click to open tweet composer</p>
                  </CardContent>
                </Card>
              }
            />

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
                <Button onClick={handleGenerateIdeas} className="w-full" variant="outline">
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
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEditPost(post.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
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
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleUseTemplate(template.id)}
                      >
                        Use Template
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handlePreviewTemplate(template.id)}
                      >
                        Preview
                      </Button>
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
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Draft Posts</CardTitle>
                  <CardDescription>Continue working on your saved drafts</CardDescription>
                </div>
                <Button onClick={handleCreateDraft}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Draft
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {drafts.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No drafts yet</p>
                  <Button variant="outline" onClick={handleCreateDraft}>
                    Create Your First Draft
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {drafts.map((draft) => (
                    <div key={draft.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex-1">
                        <p className="font-medium">{draft.content}</p>
                        <p className="text-sm text-gray-500 mt-1">Last updated: {draft.updatedAt}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditDraft(draft.id)}
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteDraft(draft.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentStudio;
