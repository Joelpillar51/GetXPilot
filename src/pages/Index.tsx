
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Twitter, TrendingUp, MessageSquare, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { SocialProof } from "@/components/SocialProof";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <HeroSection />
      <SocialProof />
      <FeatureShowcase />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
