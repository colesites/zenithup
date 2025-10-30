import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <FeaturesGrid />
      <CTASection />
    </main>
  );
}
