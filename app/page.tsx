import { ContactModalProvider } from "@/components/landing/contact-modal";
import { Cta } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Flow } from "@/components/landing/flow";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Nav } from "@/components/landing/nav";
import { PainPoints } from "@/components/landing/pain-points";

export default function LandingPage() {
  return (
    <ContactModalProvider>
      <div className="flex min-h-full flex-1 flex-col">
        <Nav />
        <main className="flex-1">
          <Hero />
          <PainPoints />
          <Features />
          <Flow />
          <Cta />
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
