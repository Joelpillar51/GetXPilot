
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, Square, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VoiceTweetModalProps {
  trigger: React.ReactNode;
}

export const VoiceTweetModal = ({ trigger }: VoiceTweetModalProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const startRecording = () => {
    setIsRecording(true);
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false);
      setHasRecording(true);
    }, 3000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setHasRecording(true);
  };

  const postVoiceTweet = () => {
    toast({
      title: "Success",
      description: "Voice tweet posted successfully!"
    });
    setHasRecording(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Voice Tweet</DialogTitle>
          <DialogDescription>
            Record your voice message for Twitter
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-center">
          <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
            {isRecording ? (
              <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
            ) : (
              <Mic className="w-16 h-16 text-blue-600" />
            )}
          </div>
          
          {isRecording && (
            <p className="text-red-500 font-medium">Recording...</p>
          )}
          
          {hasRecording && (
            <p className="text-green-500 font-medium">Recording complete!</p>
          )}
          
          <div className="flex gap-2 justify-center">
            {!isRecording && !hasRecording && (
              <Button onClick={startRecording}>
                <Mic className="w-4 h-4 mr-2" />
                Start Recording
              </Button>
            )}
            
            {isRecording && (
              <Button onClick={stopRecording} variant="destructive">
                <Square className="w-4 h-4 mr-2" />
                Stop Recording
              </Button>
            )}
            
            {hasRecording && (
              <Button onClick={postVoiceTweet}>
                <Send className="w-4 h-4 mr-2" />
                Post Voice Tweet
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
