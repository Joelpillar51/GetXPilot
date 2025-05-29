
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Edit } from "lucide-react";

export const ContentPipeline = () => {
  const scheduledTweets = [
    { content: "5 productivity tips that changed my life as a creator...", time: "2:00 PM", status: "scheduled" },
    { content: "The biggest mistake I see new Twitter users make (and how to avoid it)", time: "6:00 PM", status: "scheduled" },
    { content: "Thread: How I grew from 100 to 10k followers in 6 months", time: "Tomorrow 10:00 AM", status: "scheduled" },
  ];

  const drafts = [
    { content: "AI is changing the game for content creators...", status: "draft" },
    { content: "3 tools every solopreneur needs in 2024", status: "draft" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Next 5 Scheduled Tweets</h3>
            <div className="space-y-3">
              {scheduledTweets.map((tweet, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 line-clamp-2">{tweet.content}</p>
                    <p className="text-xs text-blue-600 mt-1">{tweet.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Draft Tweets</h3>
            <div className="space-y-3">
              {drafts.map((draft, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Edit className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 line-clamp-2">{draft.content}</p>
                    <p className="text-xs text-gray-500 mt-1">Draft</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
