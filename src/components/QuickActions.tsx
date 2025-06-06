
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Mic, Calendar, Settings } from "lucide-react";
import { TweetModal } from "./TweetModal";
import { VoiceTweetModal } from "./VoiceTweetModal";
import { useToast } from "@/hooks/use-toast";

export const QuickActions = () => {
  const { toast } = useToast();

  const handleScheduleThread = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Thread scheduling will be available soon!"
    });
  };

  const handleAutoReplyRule = () => {
    toast({
      title: "Auto-Reply Setup",
      description: "Redirecting to automation settings..."
    });
    // In a real app, this would navigate to automation page
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TweetModal
            trigger={
              <Button className="h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-6 h-6 mb-2" />
                <span className="text-sm">Create Tweet</span>
              </Button>
            }
          />
          
          <VoiceTweetModal
            trigger={
              <Button className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 text-white">
                <Mic className="w-6 h-6 mb-2" />
                <span className="text-sm">Voice Tweet</span>
              </Button>
            }
          />
          
          <Button 
            onClick={handleScheduleThread}
            className="h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Calendar className="w-6 h-6 mb-2" />
            <span className="text-sm">Schedule Thread</span>
          </Button>
          
          <Button 
            onClick={handleAutoReplyRule}
            className="h-20 flex flex-col items-center justify-center bg-orange-600 hover:bg-orange-700 text-white"
          >
            <Settings className="w-6 h-6 mb-2" />
            <span className="text-sm">Auto-Reply Rule</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
