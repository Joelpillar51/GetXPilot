
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export const PerformanceOverview = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Follower Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Last 7 days</span>
              <div className="flex items-center text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">+12.3%</span>
              </div>
            </div>
            <div className="h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-end justify-center">
              <div className="text-2xl font-bold text-blue-600">+127 followers</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Performing Tweet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-gray-700 line-clamp-3">
              "Just discovered this AI tool that turns my voice into engaging tweets. Game changer for content creators! 🚀"
            </p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>2 hours ago</span>
              <div className="flex space-x-4">
                <span>247 likes</span>
                <span>89 retweets</span>
                <span>23 replies</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
