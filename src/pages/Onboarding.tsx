
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Target, Users, PenTool, Calendar, CheckCircle } from 'lucide-react';

const onboardingSteps = [
  {
    id: 'purpose',
    title: 'What brings you to GetXPilot?',
    description: 'Help us understand your goals so we can personalize your experience',
    icon: Target,
    options: [
      { value: 'content-creation', label: 'Content Creation', description: 'Building a personal brand and sharing ideas' },
      { value: 'growth-marketing', label: 'Growth Marketing', description: 'Growing my business or product on Twitter' },
      { value: 'agency-work', label: 'Agency Work', description: 'Managing Twitter accounts for clients' },
      { value: 'ghostwriting', label: 'Ghostwriting', description: 'Writing content for other people or brands' },
      { value: 'thought-leadership', label: 'Thought Leadership', description: 'Establishing expertise in my industry' }
    ]
  },
  {
    id: 'followers',
    title: 'What\'s your current follower count?',
    description: 'This helps us suggest the right growth strategies for your level',
    icon: Users,
    options: [
      { value: '0-100', label: 'Just starting out (0-100)', description: 'Building from the ground up' },
      { value: '100-1000', label: 'Growing steadily (100-1K)', description: 'Finding my voice and audience' },
      { value: '1000-10000', label: 'Building momentum (1K-10K)', description: 'Scaling my reach and engagement' },
      { value: '10000-50000', label: 'Established presence (10K-50K)', description: 'Optimizing for quality growth' },
      { value: '50000+', label: 'Large following (50K+)', description: 'Maintaining and monetizing my audience' }
    ]
  },
  {
    id: 'content-type',
    title: 'What type of content do you primarily share?',
    description: 'We\'ll suggest content ideas that match your style',
    icon: PenTool,
    options: [
      { value: 'educational', label: 'Educational Content', description: 'Tips, tutorials, and how-to content' },
      { value: 'industry-insights', label: 'Industry Insights', description: 'Professional expertise and analysis' },
      { value: 'personal-stories', label: 'Personal Stories', description: 'Life experiences and behind-the-scenes' },
      { value: 'news-commentary', label: 'News & Commentary', description: 'Current events and trending topics' },
      { value: 'entertainment', label: 'Entertainment', description: 'Humor, memes, and engaging content' },
      { value: 'mixed', label: 'Mixed Content', description: 'A variety of different content types' }
    ]
  },
  {
    id: 'tools',
    title: 'Do you currently use any scheduling tools?',
    description: 'Understanding your current workflow helps us integrate better',
    icon: Calendar,
    options: [
      { value: 'none', label: 'No scheduling tools', description: 'I post manually in real-time' },
      { value: 'native', label: 'Twitter\'s native scheduler', description: 'Using Twitter\'s built-in scheduling' },
      { value: 'buffer', label: 'Buffer', description: 'Currently using Buffer for scheduling' },
      { value: 'hootsuite', label: 'Hootsuite', description: 'Managing through Hootsuite' },
      { value: 'later', label: 'Later or similar', description: 'Using Later or other scheduling platforms' },
      { value: 'multiple', label: 'Multiple tools', description: 'Using a combination of different tools' }
    ]
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const currentStepData = onboardingSteps[currentStep];
  const progress = ((currentStep + 1) / onboardingSteps.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStepData.id]: value });
  };

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Onboarding completed with answers:', answers);
      navigate('/twitter-connect');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = answers[currentStepData.id] !== undefined;
  const Icon = currentStepData.icon;

  return (
    <div className="min-h-screen bg-[#FFF4ED] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/8c72e556-e52f-4bd8-a2af-4e23b5e18435.png" 
            alt="GetXPilot Logo" 
            className="h-12 w-auto mx-auto mb-6"
          />
          <div className="mb-6">
            <Progress value={progress} className="w-full max-w-md mx-auto h-2" />
            <p className="text-sm text-[#4A4A4A] mt-2">
              Step {currentStep + 1} of {onboardingSteps.length}
            </p>
          </div>
        </div>

        <Card className="border-[#EAEAEA] shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-12 h-12 bg-[#FF6154]/10 rounded-full flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-[#FF6154]" />
            </div>
            <CardTitle className="text-2xl text-[#1E1E1E] mb-2">
              {currentStepData.title}
            </CardTitle>
            <CardDescription className="text-[#4A4A4A] text-base">
              {currentStepData.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <RadioGroup 
              value={answers[currentStepData.id] || ''} 
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentStepData.options.map((option) => (
                <div key={option.value} className="relative">
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={option.value}
                    className="flex items-start space-x-3 p-4 rounded-lg border border-[#EAEAEA] cursor-pointer transition-all hover:border-[#FF6154] hover:bg-[#FF6154]/5 peer-checked:border-[#FF6154] peer-checked:bg-[#FF6154]/5 peer-checked:ring-2 peer-checked:ring-[#FF6154]/20"
                  >
                    <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#EAEAEA] peer-checked:border-[#FF6154] peer-checked:bg-[#FF6154] transition-all mt-0.5">
                      {answers[currentStepData.id] === option.value && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-[#1E1E1E] mb-1">
                        {option.label}
                      </div>
                      <div className="text-sm text-[#4A4A4A]">
                        {option.description}
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="border-[#EAEAEA] text-[#4A4A4A]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-[#FF6154] hover:bg-[#FF6154]/90 text-white"
              >
                {currentStep === onboardingSteps.length - 1 ? 'Complete Setup' : 'Continue'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-[#4A4A4A] mt-6">
          Your answers help us personalize GetXPilot for your specific needs and goals.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
