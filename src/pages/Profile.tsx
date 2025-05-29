
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Save, Camera, MapPin, Calendar, Link, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "@johndoe",
    bio: "Content creator and social media enthusiast. Building amazing things with AI.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    joinedDate: "March 2020"
  });
  const [editProfile, setEditProfile] = useState(profile);
  const { toast } = useToast();

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully!"
    });
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const stats = [
    { label: "Tweets", value: "1,234" },
    { label: "Following", value: "567" },
    { label: "Followers", value: "2,890" },
    { label: "Likes", value: "8,901" }
  ];

  const recentTweets = [
    { id: 1, content: "Just launched my new project! 🚀", likes: 45, retweets: 12, time: "2h" },
    { id: 2, content: "AI is revolutionizing how we create content", likes: 89, retweets: 23, time: "1d" },
    { id: 3, content: "Beautiful sunset today! 🌅", likes: 156, retweets: 34, time: "2d" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="w-20 h-20 bg-blue-100">
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-blue-600">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </Avatar>
                  <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <p className="text-gray-600">{profile.username}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {profile.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {profile.joinedDate}
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setIsEditing(!isEditing)}
                variant={isEditing ? "destructive" : "outline"}
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={editProfile.name}
                      onChange={(e) => setEditProfile({...editProfile, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={editProfile.username}
                      onChange={(e) => setEditProfile({...editProfile, username: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={editProfile.bio}
                    onChange={(e) => setEditProfile({...editProfile, bio: e.target.value})}
                    className="resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={editProfile.location}
                      onChange={(e) => setEditProfile({...editProfile, location: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={editProfile.website}
                      onChange={(e) => setEditProfile({...editProfile, website: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-700">{profile.bio}</p>
                <div className="flex items-center gap-2">
                  <Link className="w-4 h-4 text-gray-500" />
                  <a href={profile.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {profile.website}
                  </a>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Tabs defaultValue="tweets" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tweets">Recent Tweets</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tweets" className="space-y-4">
            {recentTweets.map((tweet) => (
              <Card key={tweet.id}>
                <CardContent className="p-4">
                  <p className="mb-3">{tweet.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>💬 {Math.floor(Math.random() * 20)}</span>
                      <span>🔄 {tweet.retweets}</span>
                      <span>❤️ {tweet.likes}</span>
                    </div>
                    <span>{tweet.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="media">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-gray-500">No media posts yet</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="likes">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-gray-500">Liked tweets will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
