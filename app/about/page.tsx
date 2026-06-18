"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  HeartHandshake,
  ScanLine,
  Brain,
  ShieldCheck,
  Baby,
  SmilePlus,
  Activity,
  ArrowRight,
  SearchCheck,
  Repeat,
  MapPin,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b border-border/60 bg-secondary/10 py-14 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground/80">
              About Dr Purva Soni's ResplenDent Orthodontic & Dental Care
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Crafting confident smiles with precision, science, and compassion.
            </h1>
            <p className="text-base text-muted-foreground">
              Every smile holds a unique story. At Dr Purva Soni's ResplenDent Orthodontic & Dental Care, our
              goal is to understand that story, elevate it, and guide you toward
              a healthier, more confident version of yourself.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs md:text-sm">
              <PillStat
                icon={<Sparkles className="size-3.5" />}
                label="Personalized care"
              />
              <PillStat
                icon={<ScanLine className="size-3.5" />}
                label="Digital precision"
              />
              <PillStat
                icon={<HeartHandshake className="size-3.5" />}
                label="Comfort-first experience"
              />
            </div>
          </div>

          {/* Doctor snapshot card */}
          <Card className="max-w-sm border-primary/40 bg-background/80 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted">
                {/* Replace src with actual image path */}
                <Image
                  src="/images/dr-purva-soni.JPG"
                  alt="Dr. Purva Soni, Orthodontist"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <CardTitle className="text-base font-semibold">
                  Dr. Purva Verma Soni
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  BDS Gold Medallist · MDS Orthodontist
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Dr. Purva Verma Soni is a BDS Gold Medallist from DAVV University, Indore,
                and holds an MDS in Orthodontics from Saveetha University, Chennai — one
                of India&apos;s top dental schools (2022).
              </p>
              <p>
                She is trained across braces, clear aligners, jaw growth modification,
                orthognathic surgical planning, dental veneers, and advanced restorative
                procedures.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-1 border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/contact">
                  Meet Dr. Purva <ArrowRight className="ml-1.5 size-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-[1.4fr_1fr] items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Our philosophy:
              <span className="block md:inline">
                {" "}
                personalized, predictable, pleasant.
              </span>
            </h2>
            <p className="text-base text-muted-foreground">
              Every individual is different — and so is every smile. We don’t
              believe in rushed consultations or one-size-fits-all solutions.
              Our approach blends evidence-based orthodontics, digital
              precision, thorough diagnosis, and clear communication.
            </p>
            <p className="text-base text-muted-foreground">
              Orthodontic care is not only about straightening teeth — it&apos;s
              about shaping confidence, function, balance, and long-term oral
              health.
            </p>
          </div>

          <div className="grid gap-4">
            <MiniValue
              icon={<Brain className="size-4 text-primary" />}
              title="Evidence-based"
              text="Treatment decisions are rooted in current orthodontic science and careful measurements."
            />
            <MiniValue
              icon={<HeartHandshake className="size-4 text-primary" />}
              title="Patient-centered"
              text="We take time to listen, explain, and ensure you feel informed and comfortable at every visit."
            />
            <MiniValue
              icon={<ShieldCheck className="size-4 text-primary" />}
              title="Long-term focused"
              text="Our plans aim for stable, lasting results—not quick fixes that compromise your future."
            />
          </div>
        </div>
      </section>

      {/* APPROACH / JOURNEY */}
      <section className="border-y border-border/60 bg-muted/40 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              A clear, calm journey from first visit to final smile.
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              We structure your orthodontic experience into simple, predictable
              steps so you always know what comes next.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <ApproachStep
              step="01"
              title="Comprehensive assessment"
              text="Photos, scans, bite analysis, and a detailed conversation about your concerns and goals."
            />
            <ApproachStep
              step="02"
              title="Transparent plans"
              text="Clear timelines, options, and costs—explained in simple language, with all your questions answered."
            />
            <ApproachStep
              step="03"
              title="Comfort-first treatment"
              text="Modern braces and aligner systems designed for efficiency, comfort, and aesthetics."
            />
            <ApproachStep
              step="04"
              title="Retention & stability"
              text="Thoughtful retainer plans and follow-ups so your new smile stays beautifully aligned."
            />
          </div>
        </div>
      </section>

      {/* DOCTOR + TECH SECTION */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Doctor story */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl font-semibold text-foreground">
                Meet your orthodontist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm md:text-base text-muted-foreground">
              <p>
                Dr. Purva Verma Soni is a <span className="font-medium text-foreground">BDS Gold Medallist</span> from
                DAVV University, Indore, and completed her MDS in Orthodontics from
                Saveetha University, Chennai — one of India&apos;s top dental schools — in 2022.
              </p>
              <p>
                She is finely trained across all forms of orthodontic treatment including
                braces, clear aligners, jaw growth modification strategies, and orthognathic
                surgical planning.
              </p>
              <p>
                Passionate about restoring smiles to full confidence, Dr. Purva is also
                trained in dental veneers and advanced restorative procedures by leading
                dentists in India.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <Badge className="bg-secondary/20 text-secondary-foreground">
                  Orthodontics &amp; Dentofacial Orthopedics
                </Badge>
                <Badge className="bg-primary/10 text-primary">
                  BDS Gold Medallist
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Technology / Modern clinic */}
          <Card className="border-primary/40 bg-primary/10">
            <CardHeader>
              <CardTitle className="text-base md:text-lg font-semibold text-foreground">
                Best-in-class technology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                ResplenDent is equipped with industry-leading technology to ensure
                total digital precision and a comfortable patient experience at every step.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <ScanLine className="mt-0.5 size-4 text-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">iTero Intra-oral Scanner</span> — total digital
                    workflow with precise 3D visualisation of your teeth and bite, eliminating
                    uncomfortable traditional impressions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Activity className="mt-0.5 size-4 text-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">Aeroblast Technology</span> — efficient dental
                    cleaning using controlled air and water pressure. One of the few clinics
                    in Jaipur to offer this.
                  </span>
                </li>
                <li className="flex gap-2">
                  <SmilePlus className="mt-0.5 size-4 text-primary shrink-0" />
                  <span>
                    Aesthetic treatment options — clear aligners, ceramic braces,
                    and dental veneers tailored to your lifestyle.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Baby className="mt-0.5 size-4 text-primary shrink-0" />
                  <span>
                    Growth-guided protocols for early orthodontic intervention in children.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="border-y border-border/60 bg-muted/40 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              The values behind every smile we treat.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ValueCard
              icon={<ScanLine className="size-5" />}
              title="Precision"
              text="From diagnosis to finishing, each detail is measured, planned, and refined with care."
            />

            <ValueCard
              icon={<HeartHandshake className="size-5" />}
              title="Compassion"
              text="We remember there is a person attached to every tooth — your comfort matters deeply."
            />

            <ValueCard
              icon={<SearchCheck className="size-5" />}
              title="Clarity"
              text="No hidden steps or confusing jargon. You’ll always know where you are in your journey."
            />

            <ValueCard
              icon={<Repeat className="size-5" />}
              title="Consistency"
              text="Reliable follow-ups, continuity of care, and a familiar team at every visit."
            />

            <ValueCard
              icon={<Sparkles className="size-5" />}
              title="Excellence"
              text="We continuously learn, update, and refine our protocols with modern evidence."
            />

            <ValueCard
              icon={<ShieldCheck className="size-5" />}
              title="Trust"
              text="We recommend only what is genuinely necessary and in your long-term best interest."
            />
          </div>
        </div>
      </section>

      {/* WHY PATIENTS TRUST US + CTA */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Why patients choose Dr Purva Soni's ResplenDent Orthodontic & Dental Care.
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Patients often tell us they feel heard, informed, and cared for
                — not just treated. A few things they appreciate:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  • Calm, welcoming environment for both adults and children.
                </li>
                <li>• Friendly team that explains every step with patience.</li>
                <li>• Transparent plans, payment structure, and timelines.</li>
                <li>
                  • Aesthetic, discreet treatment options suitable for
                  professionals.
                </li>
                <li>
                  • Focus on both facial balance and dental health, not just
                  straight teeth.
                </li>
              </ul>
            </div>

            <Card className="border-primary/40 bg-primary/5">
              <CardContent className="space-y-3 p-5">
                <p className="text-sm font-semibold text-foreground">
                  Ready to begin your smile journey?
                </p>
                <p className="text-sm text-muted-foreground">
                  A short consultation can help you understand whether braces,
                  aligners, or another option is right for you or your child.
                </p>
                <div className="pt-1 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contact">Book an appointment</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-secondary text-secondary-foreground hover:bg-secondary/10"
                  >
                    <Link href="/resources">Explore patient resources</Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://www.instagram.com/resplendent_jaipur/reels/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" className="size-4 fill-current shrink-0" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://share.google/lxHFkj7ItyXixVbRK"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="size-4" />
                      Find us on Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------ Subcomponents ------------ */

function PillStat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-secondary/40 bg-background/80 px-3 py-1">
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

function MiniValue({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-secondary/80 bg-card/80 p-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function ApproachStep({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  const stepNumber = parseInt(step);

  const bgClass =
    stepNumber % 2 === 1
      ? "bg-primary/10 border-primary/20"
      : "bg-secondary/10 border-secondary/30";

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-4 transition-colors",
        bgClass
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
        Step {step}
      </span>
      <h3 className="mt-2 text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground flex-1">{text}</p>
    </div>
  );
}

function ValueCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="h-full border-primary/80 bg-card shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="flex items-start gap-4 p-5">
        {/* Icon */}

        <div className="space-y-1">
          <div className="flex size-10 items-center justify-center rounded-full bg-secondary/15 ring-1 ring-secondary/30 text-secondary">
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
}
