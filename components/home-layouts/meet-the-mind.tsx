"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
                                src="/images/dr-purva-soni.JPG"
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
                            Dr. Purva Verma Soni is a <span className="font-medium text-foreground">BDS Gold Medallist</span> from
                            DAVV University, Indore, and holds an MDS in Orthodontics from
                            Saveetha University, Chennai — one of India&apos;s top dental schools (2022).
                            She is comprehensively trained in braces, clear aligners, jaw growth
                            modification, and orthognathic surgical planning, and is additionally
                            certified in dental veneers and advanced restorative procedures by
                            leading dentists across India.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "BDS Gold Medallist — DAVV University, Indore",
                                "MDS Orthodontics — Saveetha University, Chennai (2022)",
                                "Trained in dental veneers & advanced restorative procedures",
                                "Braces, clear aligners, jaw growth modification & orthognathic surgical planning",
                            ].map((text) => (
                                <li key={text} className="flex gap-3">
                                    <CheckCircle2 className="mt-0.5 size-5 text-primary shrink-0" />
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

                            <Button asChild variant="outline" className="gap-2">
                                <a
                                    href="https://www.instagram.com/resplendent_jaipur/reels/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    Follow on Instagram
                                </a>
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
