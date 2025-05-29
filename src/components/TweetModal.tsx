
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, Video, Mic, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TweetModalProps {
  trigger: React.ReactNode;
  onSubmit?: (tweet: any) => void;
}

export const TweetModal = ({ trigger, onSubmit }: TweetModalProps) => {
  const [content, setContent] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleTweetNow = () => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Tweet content cannot be empty",
        variant: "destructive"
      });
      return;
    }

    const tweet = {
      id: Date.now(),
      content,
      status: "published",
      date: new Date().toISOString()
    };

    onSubmit?.(tweet);
    toast({
      title: "Success",
      description: "Tweet posted successfully!"
    });
    setContent("");
    setIsOpen(false);
  };

  const handleSchedule = () => {
    if (!content.trim() || !scheduledTime) {
      toast({
        title: "Error",
        description: "Please fill in content and schedule time",
        variant: "destructive"
      });
      return;
    }

    const tweet = {
      id: Date.now(),
      content,
      scheduledFor: new Date(scheduledTime).toLocaleString(),
      status: "scheduled",
      date: new Date().toISOString()
    };

    onSubmit?.(tweet);
    toast({
      title: "Success",
      description: "Tweet scheduled successfully!"
    });
    setContent("");
    setScheduledTime("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Tweet</DialogTitle>
          <DialogDescription>
            Craft your next viral tweet
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="content">Tweet Content</Label>
            <Textarea
              id="content"
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] resize-none"
            />
            <div className="flex items-center justify-between mt-2">
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
              <span className="text-sm text-gray-500">{280 - content.length} characters left</span>
            </div>
          </div>
          
          <div>
            <Label htmlFor="schedule">Schedule (optional)</Label>
            <Input
              id="schedule"
              type="datetime-local"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleTweetNow} className="flex-1">
              <Send className="w-4 h-4 mr-2" />
              Tweet Now
            </Button>
            <Button onClick={handleSchedule} variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
