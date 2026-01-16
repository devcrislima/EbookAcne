import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { DifferentialSection } from "@/components/sections/DifferentialSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <DifferentialSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <FloatingCTA />
    </main>
  );
};

export default Index;
