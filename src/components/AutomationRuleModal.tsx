
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface AutomationRuleModalProps {
  trigger: React.ReactNode;
  onSubmit?: (rule: any) => void;
}

export const AutomationRuleModal = ({ trigger, onSubmit }: AutomationRuleModalProps) => {
  const [ruleType, setRuleType] = useState("");
  const [ruleName, setRuleName] = useState("");
  const [keywords, setKeywords] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!ruleType || !ruleName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const rule = {
      id: Date.now(),
      name: ruleName,
      type: ruleType,
      keywords,
      response,
      status: "active",
      triggers: 0
    };

    onSubmit?.(rule);
    toast({
      title: "Success",
      description: "Automation rule created successfully!"
    });
    
    // Reset form
    setRuleType("");
    setRuleName("");
    setKeywords("");
    setResponse("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Automation Rule</DialogTitle>
          <DialogDescription>
            Set up a new automation to engage with your audience
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="rule-type">Rule Type</Label>
            <Select value={ruleType} onValueChange={setRuleType}>
              <SelectTrigger>
                <SelectValue placeholder="Select rule type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reply">Auto-Reply</SelectItem>
                <SelectItem value="like">Auto-Like</SelectItem>
                <SelectItem value="follow">Follow-Back</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="rule-name">Rule Name</Label>
            <Input
              id="rule-name"
              value={ruleName}
              onChange={(e) => setRuleName(e.target.value)}
              placeholder="e.g., Welcome new followers"
            />
          </div>
          
          <div>
            <Label htmlFor="keywords">Keywords/Triggers</Label>
            <Input
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., hello, hi, support"
            />
          </div>
          
          {ruleType === "reply" && (
            <div>
              <Label htmlFor="response">Auto-Response</Label>
              <Input
                id="response"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Thanks for reaching out!"
              />
            </div>
          )}
          
          <Button onClick={handleSubmit} className="w-full">
            Create Rule
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
