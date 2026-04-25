import { CtaFooter } from "@/components/landing/cta-footer";
import { Features } from "@/components/landing/features";
import { Flow } from "@/components/landing/flow";
import { Hero } from "@/components/landing/hero";
import { Mobile } from "@/components/landing/mobile";
import { Nav } from "@/components/landing/nav";
import { PainPoints } from "@/components/landing/pain-points";

export default function LandingPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Features />
        <Flow />
        <Mobile />
        <CtaFooter />
      </main>
    </div>
  );
}
