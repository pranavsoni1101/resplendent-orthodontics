"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Smile,
  Baby,
  Microscope,
  Droplets,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Scissors,
} from "lucide-react";


const treatments = [
  {
    title: "Clear Aligners",
    desc: "Virtually invisible, removable trays engineered for precision, comfort, and lifestyle flexibility.",
    sub: "Invisalign • Flash Aligners • TAC Aligners",
    icon: Smile,
    href: "/services/clear-aligners",
  },
  {
    title: "Brackets & Braces",
    desc: "From classic to aesthetic systems — braces planned carefully for confident, stable results.",
    sub: "Metal • Ceramic • Self-ligating • Lingual",
    icon: Sparkles,
    href: "/services/braces",
  },
  {
    title: "Scaling & Polishing",
    desc: "Professional cleaning to remove plaque and stains — a healthier foundation for your smile.",
    sub: "Routine hygiene • Stain removal",
    icon: Sparkles,
    href: "/services/scaling-polishing",
  },
  {
    title: "Teeth Whitening",
    desc: "Safe whitening options designed to brighten your smile while protecting enamel sensitivity.",
    sub: "In-clinic • Guided take-home",
    icon: Droplets,
    href: "/services/teeth-whitening",
  },
  {
    title: "Digital Smile Makeover",
    desc: "Design-led smile enhancements with careful planning for shape, symmetry, and natural aesthetics.",
    sub: "Veneers • Smile design",
    icon: Microscope,
    href: "/services/smile-makeover",
  },
  {
    title: "Dental Implants",
    desc: "A durable, natural-feeling option to replace missing teeth with function and confidence.",
    sub: "Implant planning • Restoration",
    icon: Stethoscope,
    href: "/services/implants",
  },
  {
    title: "Root Canal Treatment (RCT)",
    desc: "Relieve pain and save the natural tooth with gentle, precise endodontic care.",
    sub: "Pain relief • Tooth preservation",
    icon: ShieldCheck,
    href: "/services/rct",
  },
  {
    title: "Biologically-Friendly Fillings",
    desc: "Tooth-colored restorations that prioritize biocompatibility and long-term tooth strength.",
    sub: "Composite fillings • Minimal removal",
    icon: HeartHandshake,
    href: "/services/fillings",
  },
  {
    title: "Paediatric Dentistry",
    desc: "Kid-friendly care focused on comfort, prevention, and early interventions for healthy growth.",
    sub: "Drill-free cavity healing • Preventive care",
    icon: Baby,
    href: "/services/paediatric-dentistry",
  },
  {
    title: "Tooth Extractions",
    desc: "When removal is necessary, we ensure a safe, gentle process with clear aftercare support.",
    sub: "Simple extractions • Guided aftercare",
    icon: Scissors,
    href: "/services/extractions",
  },
];


export function TreatmentsOverview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Our Treatments
        </h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          Orthodontics, smile aesthetics, and modern dental care — thoughtfully planned around you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map(({ title, desc, sub, icon: Icon, href }) => (
            <Card
              key={title}
              className="flex flex-col justify-between border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 mb-4">
                  <Icon className="mb-3 size-8 text-primary" />
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </CardHeader>

                <CardContent className="flex flex-col justify-between p-0 flex-grow">
                  <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>

                  <div className="mt-6 pt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/40 text-primary hover:bg-primary/10"
                    >
                      <Link href={href}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
          <Card className="sm:col-span-2 border border-primary/30 bg-primary/5">
  <div className="p-8">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          Not sure which treatment is right for you?
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us what you’re facing — we’ll guide you with clarity and a plan that fits.
        </p>
      </div>

      <Button asChild className="shrink-0">
        <Link href="/contact">Book a Consultation</Link>
      </Button>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {[
        { title: "Share symptoms", desc: "Pain, crowding, gaps, stains, or sensitivity." },
        { title: "Get a plan", desc: "We explain options, timeline, and next steps." },
        { title: "Zero pressure", desc: "Ask questions — decide only when ready." },
      ].map((b) => (
        <div
          key={b.title}
          className="rounded-xl border border-border/60 bg-background/70 p-4 text-left"
        >
          <p className="text-sm font-medium text-foreground">{b.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
      <Button asChild variant="outline" className="w-full sm:w-auto">
        <Link href="/services">Explore all treatments</Link>
      </Button>
      <Button asChild variant="ghost" className="w-full sm:w-auto">
        <Link href="/contact#consultation-form">Ask a quick question</Link>
      </Button>
    </div>
  </div>
</Card>

        </div>
      </div>
    </section>
  );
}

export default TreatmentsOverview;
