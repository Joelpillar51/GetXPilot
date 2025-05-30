
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowRight, Play, Users, Clock, Calendar, Zap, BarChart3, Bot, Repeat, FileText, Upload, MessageSquare, TrendingUp, Edit3, Target, Briefcase, GraduationCap, FlaskConical, Link, Eye, Shuffle, Archive } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Visual Tweet Scheduler",
      description: "Plan tweets & threads with ease"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track impressions, likes, reposts, and saves"
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Automated Threads",
      description: "Set up content loops, evergreen reposting"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Writing Assistant",
      description: "Draft or optimize tweets in seconds"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Account Access",
      description: "Manage multiple handles in one place"
    }
  ];

  const features = [
    {
      icon: <Link className="w-6 h-6" />,
      title: "Thread Composer",
      description: "Drag-and-drop thread editor with live preview"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Smart Analytics",
      description: "See what's working and what's not"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Tweet Generator",
      description: "Trained on high-performing tweets"
    },
    {
      icon: <Archive className="w-6 h-6" />,
      title: "Content Library",
      description: "Save top tweets and templates"
    },
    {
      icon: <Shuffle className="w-6 h-6" />,
      title: "Reposting Engine",
      description: "Auto-reshare evergreen content"
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Bulk Scheduling",
      description: "Upload a full week's content in minutes"
    }
  ];

  const useCases = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Content Creators",
      description: "Stay consistent without burnout"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Agencies & Ghostwriters",
      description: "Manage client accounts effortlessly"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Info Sellers & Coaches",
      description: "Build & engage your audience on autopilot"
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Growth Marketers",
      description: "Test and scale tweet formats with ease"
    }
  ];

  const testimonials = [
    {
      name: "Fola B.",
      role: "Creator & Ghostwriter",
      content: "GetXPilot helped me grow from 0 to 10k followers without stressing what to post."
    },
    {
      name: "James T.",
      role: "Founder, BrandStudio",
      content: "It's like having a Twitter VA and growth strategist in one place."
    }
  ];

  const pricingPlans = [
    {
      name: "Solo Creator",
      price: "Free",
      description: "Perfect for getting started",
      features: ["1 account", "20 threads/month", "10 AI tweet credits/mo", "Email support"],
      popular: false
    },
    {
      name: "Growth Mode",
      price: "$25",
      period: "/month",
      description: "For serious growth",
      features: ["3 accounts", "150 threads/month", "50 AI tweet credits/mo", "Collaboration", "Priority support"],
      popular: true
    },
    {
      name: "Twitter Pro",
      price: "$99",
      period: "/month",
      description: "For teams & agencies",
      features: ["10+ accounts", "Unlimited threads", "200 AI tweet credits/mo", "Team access", "Dedicated support"],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I write and schedule threads with media?",
      answer: "Yes. Threads with images, videos, and polls are fully supported."
    },
    {
      question: "Is this safe to use with my Twitter account?",
      answer: "Absolutely. We use the official X API and never store your credentials."
    },
    {
      question: "Can I manage multiple accounts?",
      answer: "Yes, multi-account support is available on Growth and Pro plans."
    },
    {
      question: "Will it help me write tweets?",
      answer: "Yes! Use our AI-powered assistant to create or refine tweets instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF4ED]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#EAEAEA] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img 
                src="/lovable-uploads/8c72e556-e52f-4bd8-a2af-4e23b5e18435.png" 
                alt="GetXPilot Logo" 
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-[#4A4A4A] hover:text-[#FF6154] transition-colors duration-200">Features</a>
              <a href="#use-cases" className="text-sm font-medium text-[#4A4A4A] hover:text-[#FF6154] transition-colors duration-200">Use Cases</a>
              <a href="#pricing" className="text-sm font-medium text-[#4A4A4A] hover:text-[#FF6154] transition-colors duration-200">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-[#4A4A4A] hover:text-[#FF6154] transition-colors duration-200">FAQ</a>
              <ThemeToggle />
              <Button className="bg-[#FF6154] hover:bg-[#FF6154]/90 text-white hover:scale-105 transition-all duration-200" onClick={() => navigate('/signup')}>
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-8 px-6 py-3 bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/20 hover:scale-105 transition-transform duration-300">
                ✨ Used by 6,000+ top creators and marketing teams
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-[#1E1E1E] tracking-tight">
                Supercharge Your
                <br />
                <span className="text-[#FF6154] bg-gradient-to-r from-[#FF6154] to-[#FF6154]/80 bg-clip-text">Twitter Presence</span>
                <br />
                with GetXPilot
              </h1>
              
              <p className="text-2xl text-[#4A4A4A] mb-12 max-w-4xl mx-auto leading-relaxed">
                Manage threads, schedule tweets, track analytics, and grow your audience — all from one intelligent dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button size="lg" className="text-xl px-10 py-8 bg-[#FF6154] hover:bg-[#FF6154]/90 text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => navigate('/signup')}>
                  👉 Get Started Free – No Card Required
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button variant="outline" size="lg" className="text-xl px-10 py-8 border-2 border-[#EAEAEA] text-[#4A4A4A] hover:border-[#FF6154] hover:text-[#FF6154] hover:scale-105 transform transition-all duration-300">
                  <Play className="mr-3 w-6 h-6" />
                  🎥 Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Hero Dashboard Preview */}
            <div className={`mt-20 relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
              <div className="bg-white rounded-3xl shadow-2xl border border-[#EAEAEA] p-8 max-w-6xl mx-auto hover:shadow-3xl transition-shadow duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-[#EAEAEA] hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8">
                      <Bot className="w-12 h-12 text-[#FF6154] mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-bold text-xl text-[#1E1E1E] mb-3">AI Writing</h3>
                      <p className="text-[#4A4A4A]">Generate viral tweets instantly</p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#EAEAEA] hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8">
                      <Calendar className="w-12 h-12 text-[#4E7EFF] mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-bold text-xl text-[#1E1E1E] mb-3">Smart Scheduling</h3>
                      <p className="text-[#4A4A4A]">Post at optimal times</p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#EAEAEA] hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8">
                      <TrendingUp className="w-12 h-12 text-[#10B981] mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-bold text-xl text-[#1E1E1E] mb-3">Growth Analytics</h3>
                      <p className="text-[#4A4A4A]">Track your success</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" data-animate className="py-20 px-6 lg:px-8 bg-white" >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${animatedSections.has('benefits') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#1E1E1E]">Why Choose GetXPilot for Twitter?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-[#EAEAEA] ${animatedSections.has('benefits') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#FF6154]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FF6154] group-hover:scale-110 group-hover:bg-[#FF6154]/20 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#1E1E1E]">{benefit.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Writing Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#FFF4ED]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight">
                ✍️ AI-Powered Writing, Refined for 
                <span className="text-[#FF6154]"> Twitter Growth</span>
              </h2>
              <p className="text-xl text-[#4A4A4A] leading-relaxed">
                Create smarter, faster, and more impactful tweets with GetXPilot's built-in AI tools.
                Get fresh tweet suggestions daily, instantly rewrite underperforming drafts, and generate thread ideas tailored to your niche.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                We work with top Twitter strategists to surface proven hooks and formats across 10+ industries — so you're always inspired, never stuck.
              </p>
              <Button size="lg" className="bg-[#FF6154] hover:bg-[#FF6154]/90 text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300">
                Try AI Writing Free
                <Edit3 className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <Card className="border-[#EAEAEA] shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Bot className="w-8 h-8 text-[#FF6154]" />
                      <span className="font-semibold text-[#1E1E1E]">AI Tweet Generator</span>
                    </div>
                    <div className="bg-[#FFF4ED] p-4 rounded-lg">
                      <p className="text-[#4A4A4A] italic">"Just shipped a new feature that will save you hours every week..."</p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="text-[#10B981] border-[#10B981]">High Engagement</Badge>
                      <Badge variant="outline" className="text-[#4E7EFF] border-[#4E7EFF]">Thread Starter</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-1">
              <Card className="border-[#EAEAEA] shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-[#1E1E1E]">Content Calendar</h4>
                      <Calendar className="w-6 h-6 text-[#4E7EFF]" />
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-xs font-medium text-[#4A4A4A] p-2">{day}</div>
                      ))}
                      {Array.from({ length: 14 }, (_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i === 7 ? 'bg-[#FF6154] text-white' : i === 12 ? 'bg-[#4E7EFF] text-white' : 'text-[#4A4A4A] hover:bg-[#FFF4ED]'} transition-colors duration-200`}>
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight">
                ⏱️ Schedule Weeks of Content in 
                <span className="text-[#FF6154]"> Minutes</span>
              </h2>
              <p className="text-xl text-[#4A4A4A] leading-relaxed">
                Stop wasting time on tasks that don't move the needle.
                GetXPilot helps you schedule a full month of tweets — including threads, media, and polls — in a single focused session.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Stay consistent and visible with automations that repost high-performers, optimize post timing, and keep your content flowing — even when you're offline.
              </p>
              <Button size="lg" className="bg-[#4E7EFF] hover:bg-[#4E7EFF]/90 text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300">
                Start Scheduling
                <Clock className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" data-animate className="py-20 px-6 lg:px-8 bg-[#FFF4ED]">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${animatedSections.has('use-cases') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E1E1E]">🎯 Who It's For</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-[#EAEAEA] ${animatedSections.has('use-cases') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#FF6154]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FF6154] group-hover:scale-110 group-hover:bg-[#FF6154]/20 transition-all duration-300 mx-auto">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-[#1E1E1E]">{useCase.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" data-animate className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${animatedSections.has('features') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E1E1E]">🔍 Powerful Features</h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              Everything you need to dominate Twitter, all in one place.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-[#EAEAEA] ${animatedSections.has('features') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#FF6154]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FF6154] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#1E1E1E]">{feature.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 lg:px-8 bg-[#FFF4ED]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E1E1E]">🧠 What Our Users Say</h2>
            <p className="text-xl text-[#4A4A4A]">Join thousands of successful creators</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-[#EAEAEA] hover:-translate-y-2">
                <CardContent className="p-8 bg-white">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <p className="text-lg text-[#4A4A4A] italic leading-relaxed mb-6">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-bold text-[#1E1E1E]">{testimonial.name}</h4>
                    <p className="text-sm text-[#4A4A4A]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" data-animate className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${animatedSections.has('pricing') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E1E1E]">💸 Pick a Plan That Fits Your Growth Stage</h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative border-[#EAEAEA] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-[#FF6154] scale-105' : ''} ${animatedSections.has('pricing') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 200}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#FF6154] text-white px-4 py-1 animate-pulse">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 bg-white">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-[#1E1E1E]">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-[#1E1E1E]">{plan.price}</span>
                      {plan.period && <span className="text-[#4A4A4A] ml-1">{plan.period}</span>}
                    </div>
                    <p className="text-[#4A4A4A]">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-[#10B981] mr-3 flex-shrink-0" />
                        <span className="text-[#4A4A4A]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 hover:scale-105 transition-all duration-300 ${plan.popular ? 'bg-[#FF6154] hover:bg-[#FF6154]/90 text-white' : 'border-[#EAEAEA] text-[#4A4A4A] hover:bg-[#FFF4ED] hover:border-[#FF6154]'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate('/signup')}
                  >
                    {plan.price === 'Free' ? 'Start Free' : 'Start 14-day trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-animate className="py-20 px-6 lg:px-8 bg-[#FFF4ED]">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${animatedSections.has('faq') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E1E1E]">❓ Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className={`border-[#EAEAEA] hover:shadow-lg transition-all duration-300 ${animatedSections.has('faq') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 bg-white">
                  <h3 className="text-lg font-bold mb-4 text-[#1E1E1E]">Q: {faq.question}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#FF6154] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6154] to-[#FF6154]/80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Supercharge Your Twitter?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 6,000+ creators using GetXPilot to build their Twitter presence. Start free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-[#FF6154] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg" onClick={() => navigate('/signup')}>
              👉 Start Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
              Compare Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/d04303cc-a47b-4888-929d-60e19d481024.png" 
                  alt="GetXPilot Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                Your mission control for Twitter. Create. Schedule. Grow.
              </p>
              <div className="space-y-2 text-white/70">
                <p>🐦 @GetXPilot</p>
                <p>✉️ support@getxpilot.io</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Use Cases</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Creators</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2025 GetXPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
