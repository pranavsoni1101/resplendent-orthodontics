"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MeetTheMind() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                    {/* Image */}
                    <div className="lg:col-span-5">
                        <div
                            className={cn(
                                "relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
                                "aspect-[4/5] w-full"
                            )}
                        >
                            {/* Replace with Dr. Purva’s real photo */}
                            <Image
                                src="https://images.pexels.com/photos/3845765/pexels-photo-3845765.jpeg"
                                alt="Dr. Purva Soni, Orthodontist"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority={false}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="rounded-xl bg-black/55 backdrop-blur px-4 py-3 text-white">
                                    <p className="text-sm font-medium">Dr. Purva Soni</p>
                                    <p className="text-xs text-white/80">
                                        Orthodontist • Smile Design • Evidence-based care
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/80">
                                Meet the Mind Behind Dr Purva Soni's ResplenDent Orthodontic & Dental Care
                            </p>

                            <p className="mt-2 text-xs text-muted-foreground">
                                Patient-first care • Evidence-based orthodontics • Modern treatment planning
                            </p>


                        </div>

                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                            Precision-led. Empathy-driven.
                        </h2>

                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Dr. Purva Soni leads Resplendent Orthodontic & Dental Care with a simple belief:
                            every smile deserves thoughtful planning, gentle care, and results
                            that feel natural. Her approach blends clinical precision with
                            modern tools—so you always know what to expect, and why.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Personalized treatment plans (not one-size-fits-all)",
                                "Clear communication at every step — no confusion, no surprises",
                                "Modern planning tools for predictable outcomes",
                                "A calm, supportive experience for teens and adults",
                            ].map((text) => (
                                <li key={text} className="flex gap-3">
                                    <CheckCircle2 className="mt-0.5 size-5 text-primary" />
                                    <span className="text-sm leading-relaxed text-foreground/90">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button asChild className="gap-2">
                                <Link href="/contact">
                                    Book a Consultation <ArrowRight className="size-4" />
                                </Link>
                            </Button>

                            <Button variant="outline">
                                View Credentials & Approach
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
