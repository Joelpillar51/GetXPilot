
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, MessageSquare, Heart, Repeat, Eye, BarChart3, Calendar } from "lucide-react";

const Analytics = () => {
  const topTweets = [
    { id: 1, content: "Just launched our new feature! 🚀", impressions: 15420, engagements: 892, date: "2 days ago" },
    { id: 2, content: "Thread about growth strategies...", impressions: 8934, engagements: 567, date: "5 days ago" },
    { id: 3, content: "Behind the scenes content", impressions: 6721, engagements: 423, date: "1 week ago" },
  ];

  const metrics = [
    { label: "Total Impressions", value: "247.3K", change: "+12.5%", icon: Eye },
    { label: "Profile Visits", value: "8.9K", change: "+8.2%", icon: Users },
    { label: "Engagements", value: "15.2K", change: "+15.7%", icon: MessageSquare },
    { label: "Followers", value: "3,247", change: "+73", icon: TrendingUp },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Track your Twitter performance and growth</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="growth">Growth</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <Card key={metric.label}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-green-600">{metric.change} from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Overview</CardTitle>
                <CardDescription>Your engagement metrics for the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">Likes</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">8,234</p>
                      <p className="text-xs text-green-600">+12%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Repeat className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Retweets</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">1,892</p>
                      <p className="text-xs text-green-600">+18%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Replies</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">567</p>
                      <p className="text-xs text-green-600">+25%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Trend</CardTitle>
                <CardDescription>Follower growth over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Your best performing tweets from the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topTweets.map((tweet) => (
                  <div key={tweet.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium mb-2">{tweet.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {tweet.impressions.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {tweet.engagements}
                        </span>
                        <span>{tweet.date}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {((tweet.engagements / tweet.impressions) * 100).toFixed(1)}% rate
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
                <CardDescription>Who follows you on Twitter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Top Locations</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">United States</span>
                        <span className="text-sm text-gray-500">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">United Kingdom</span>
                        <span className="text-sm text-gray-500">12%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Canada</span>
                        <span className="text-sm text-gray-500">8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
                <CardDescription>What your audience cares about</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Technology</Badge>
                  <Badge variant="secondary">Startups</Badge>
                  <Badge variant="secondary">SaaS</Badge>
                  <Badge variant="secondary">Marketing</Badge>
                  <Badge variant="secondary">Productivity</Badge>
                  <Badge variant="secondary">AI</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="growth" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Follower Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+73</div>
                <p className="text-xs text-gray-500">this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">2.3%</div>
                <p className="text-xs text-gray-500">weekly average</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Projected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,100</div>
                <p className="text-xs text-gray-500">by end of month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Growth Strategy Recommendations</CardTitle>
              <CardDescription>AI-powered suggestions to boost your growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Optimal Posting Time</h4>
                  <p className="text-sm text-blue-700">Post between 2-4 PM EST for maximum engagement</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Content Strategy</h4>
                  <p className="text-sm text-green-700">Your tech-focused content gets 40% more engagement</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Hashtag Optimization</h4>
                  <p className="text-sm text-purple-700">Use #SaaS and #Startup hashtags for better reach</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
