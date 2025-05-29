
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Square, Send, Image, Video, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VoiceTweetModalProps {
  trigger: React.ReactNode;
}

export const VoiceTweetModal = ({ trigger }: VoiceTweetModalProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const startRecording = () => {
    setIsRecording(true);
    // Simulate recording and transcription
    setTimeout(() => {
      setIsRecording(false);
      setHasRecording(true);
      // Simulate voice-to-text transcription
      setTranscription("This is a transcribed voice message. You can edit this text before posting your voice tweet.");
      setIsEditing(true);
    }, 3000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setHasRecording(true);
    // Simulate voice-to-text transcription
    setTranscription("This is a transcribed voice message. You can edit this text before posting your voice tweet.");
    setIsEditing(true);
  };

  const postVoiceTweet = () => {
    if (!transcription.trim()) {
      toast({
        title: "Error",
        description: "Please add some content to your voice tweet",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: "Voice tweet posted successfully!"
    });
    setHasRecording(false);
    setTranscription("");
    setIsEditing(false);
    setIsOpen(false);
  };

  const resetModal = () => {
    setHasRecording(false);
    setTranscription("");
    setIsEditing(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        resetModal();
      }
    }}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Voice Tweet</DialogTitle>
          <DialogDescription>
            Record your voice message and edit the transcription
          </DialogDescription>
        </DialogHeader>
        
        {!hasRecording ? (
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
            
            <div className="flex gap-2 justify-center">
              {!isRecording && (
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
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Transcription</label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="w-4 h-4 mr-1" />
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </div>
              
              {isEditing ? (
                <Textarea
                  value={transcription}
                  onChange={(e) => setTranscription(e.target.value)}
                  placeholder="Edit your transcription..."
                  className="min-h-[120px] resize-none"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-md min-h-[120px]">
                  <p>{transcription}</p>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Image className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-sm text-gray-500">{280 - transcription.length} characters left</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button onClick={resetModal} variant="outline" className="flex-1">
                Record Again
              </Button>
              <Button onClick={postVoiceTweet} className="flex-1">
                <Send className="w-4 h-4 mr-2" />
                Post Voice Tweet
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
