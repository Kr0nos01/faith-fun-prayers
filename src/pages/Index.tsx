import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ProductSection } from "@/components/ProductSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ContentSection } from "@/components/ContentSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <ProductSection />
      <HowItWorksSection />
      <ResultsSection />
      <ContentSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <Footer />
    </main>
  );
};

export default Index;
