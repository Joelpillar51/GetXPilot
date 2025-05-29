
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";

export const AIInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Content Performance",
      description: "Your motivational tweets get 3x more engagement",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Optimal Timing",
      description: "Tweet at 2PM for 40% more engagement",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Audience Preference",
      description: "Your audience loves numbered lists and how-to content",
      color: "text-purple-600"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <insight.icon className={`w-5 h-5 mt-1 ${insight.color}`} />
              <div>
                <h4 className="font-medium text-gray-900 text-sm">{insight.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Growth Tip</h4>
          <p className="text-sm text-gray-700">
            Threads perform 3x better than single tweets for you. Try turning your next big idea into a 5-tweet thread!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
