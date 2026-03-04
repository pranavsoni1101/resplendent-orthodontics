"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Award, Microscope, HeartHandshake } from "lucide-react";

const items = [
  {
    title: "Personalized Care",
    icon: HeartHandshake,
    desc: "Every plan is tailored—aligned to facial harmony, bite function, lifestyle, and long-term stability.",
    image: "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg",
  },
  {
    title: "Foundations",
    icon: Sparkles,
    desc: "Compassion, clarity, and evidence-based treatment—so you feel confident at every step.",
    image: "https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg",
  },
  {
    title: "Recognitions",
    icon: Award,
    desc: "Trusted for a patient-first experience, modern planning, and consistent clinical outcomes.",
    image: "https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg",
  },
  {
    title: "Technology",
    icon: Microscope,
    desc: "Digital workflows, aligner systems, and 3D planning to make treatment efficient and predictable.",
    image: "https://images.pexels.com/photos/6627349/pexels-photo-6627349.jpeg",
  },
];

export function OurEthos() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Our Expertise &amp; Ethos
        </h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          The science, soul, and standards behind every Resplendent smile.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, icon: Icon, desc, image }) => (
            <article
              key={title}
              className={cn(
                "relative overflow-hidden rounded-xl shadow-md group transition-all duration-500",
                "border border-border/70 bg-card"
              )}
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/15" />
              <div className="relative z-10 flex h-[340px] flex-col justify-end p-6 text-left">
                <Icon className="mb-3 size-7 text-primary" />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurEthos;
