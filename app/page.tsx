import AboutSnapshot from "@/components/home-layouts/about-snapshot";
import SectionFaqResources from "@/components/home-layouts/faq";
import Hero, { Hero2 } from "@/components/home-layouts/hero";
import MeetTheMind from "@/components/home-layouts/meet-the-mind";
import OurEthos from "@/components/home-layouts/our-ethos";
import SectionProof from "@/components/home-layouts/section-proof";
import { TreatmentsOverview } from "@/components/home-layouts/treatments";

const Home = () => {
  return (
    <main className="bg-background">
      <section aria-label="Welcome">
        <Hero2 />
        {/* <Hero /> */}
      </section>

      {/* 2. About snapshot / clinic philosophy */}
      <section
        aria-label="About Dr Purva Soni's ResplenDent Orthodontic & Dental Care"
        className="bg-muted/40"
      >
        <AboutSnapshot />
      </section>

      {/* 3. Meet the mind behind Resplendent */}
      <section aria-label="Meet the orthodontist" className="bg-background">
        <MeetTheMind />
      </section>

      {/* 4. Ethos – static cards on home for quick read */}
      <section aria-label="Our expertise and ethos" className="bg-background">
        <OurEthos />
      </section>

      {/* 5. Treatments overview – key offerings */}
      <section aria-label="Treatments overview" className="bg-muted/40">
        <TreatmentsOverview />
      </section>

      {/* 6. Proof – results + testimonials + differentiators */}
      <section aria-label="Results and stories" className="bg-background">
        <SectionProof />
      </section>

      {/* 7. FAQs + patient resources entry */}
      <section
        aria-label="Questions and patient resources"
        className="bg-muted/40"
      >
        <SectionFaqResources />
      </section>
    </main>
  );
};

export default Home;
