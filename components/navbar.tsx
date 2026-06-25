"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ---------- Brand Logo ---------- */}
        <Link href="/" className="flex items-center">

          <Image
            src="/images/logo.png"
            alt="Dr Purva Soni's ResplenDent Orthodontic & Dental Care"
            width={200}
            height={64}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* ---------- Desktop Navigation ---------- */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {/* Treatments Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "text-sm font-medium text-muted-foreground",
                  "data-[state=open]:bg-secondary/20 data-[state=open]:text-foreground"
                )}
              >
                Treatments
              </NavigationMenuTrigger>
              <NavigationMenuContent className="rounded-xl border border-border/60 bg-card/95 shadow-lg backdrop-blur-sm">
                <div className="w-[520px] lg:w-[600px] p-4">

                  {/* Orthodontic Care */}
                  <div className="mb-4">
                    <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/80">
                      Orthodontic Care
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      <NavLink href="/services/clear-aligners" title="Clear Aligners (Invisalign)" desc="Removable, nearly invisible trays planned digitally for predictable results." />
                      <NavLink href="/services/brackets" title="Braces" desc="Metal, ceramic, and self-ligating options for precise fixed orthodontics." />
                      <NavLink href="/services/growth-modifying-appliances" title="Growth Modifying Appliances" desc="Early orthopedic guidance for jaw growth in children and adolescents." />
                    </ul>
                  </div>

                  <div className="my-3 h-px bg-border/60" />

                  {/* Dental Care */}
                  <div>
                    <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/80">
                      Dental Care
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      <NavLink href="/services/implants" title="Dental Implants" desc="A stable, natural-feeling option to replace missing teeth." />
                      <NavLink href="/services/smile-makeover" title="Digital Smile Design & Veneers" desc="Aesthetic smile design planned for natural harmony." />
                      <NavLink href="/services/rct" title="Root Canal Treatment" desc="Relieve pain and preserve the natural tooth." />
                      <NavLink href="/services/paediatric-dentistry" title="Paediatric Dental Care" desc="Gentle, kid-friendly care focused on comfort and prevention." />
                    </ul>
                  </div>

                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Static nav links */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/resources">Patient Resources</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/success">Success Stories</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ---------- Actions (Desktop) ---------- */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 border-secondary text-secondary-foreground hover:bg-secondary/10"
          >
            <a href="tel:+919644057773" aria-label="Call clinic">
              <Phone className="size-4" />
              Call
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">
              <Calendar className="size-4" />
              Book Appointment
            </Link>
          </Button>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            asChild
            size="icon"
            variant="outline"
            className="border-secondary text-secondary-foreground hover:bg-secondary/10"
          >
            <a href="tel:+919644057773" aria-label="Call clinic">
              <Phone className="size-4" />
            </a>
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

/* Dropdown item card (desktop Treatments menu) */
function NavLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-snug no-underline transition-colors",
          "border border-transparent hover:border-primary/25 hover:bg-secondary/10"
        )}
      >
        <h6 className="text-sm font-semibold text-foreground">{title}</h6>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </Link>
    </li>
  );
}

/* Mobile nav – full-screen sheet */
function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="border-border">
          <Menu className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="h-screen w-screen border-none bg-background p-0 [&>button]:hidden"
      >
        {/* A11y-only header + title */}
        <SheetHeader className="sr-only">
          <SheetTitle>Site navigation</SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          {/* Visual header */}
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <Image
              src="/images/logo.png"
              alt="Dr Purva Soni's ResplenDent Orthodontic & Dental Care"
              width={160}
              height={50}
              style={{ height: "36px", width: "auto" }}
            />
            <SheetClose asChild>
              <button
                className="inline-flex items-center justify-center rounded-full border border-border bg-card p-1.5 text-muted-foreground hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </SheetClose>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            {/* Treatments */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Orthodontic Care
              </p>
              <div className="mt-1 flex flex-col space-y-1 text-sm">
                <SheetClose asChild><Link href="/services/clear-aligners" className="rounded-md px-1.5 py-1.5 hover:bg-secondary/10 hover:text-primary">Clear Aligners (Invisalign)</Link></SheetClose>
                <SheetClose asChild><Link href="/services/brackets" className="rounded-md px-1.5 py-1.5 hover:bg-secondary/10 hover:text-primary">Braces</Link></SheetClose>
                <SheetClose asChild><Link href="/services/growth-modifying-appliances" className="rounded-md px-1.5 py-1.5 hover:bg-secondary/10 hover:text-primary">Growth Modifying Appliances</Link></SheetClose>
              </div>
            </div>

            <div className="my-3 h-px bg-border/60" />

            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Dental Care
              </p>
              <div className="mt-1 flex flex-col space-y-1 text-sm">
                <SheetClose asChild><Link href="/services/implants" className="rounded-md px-1.5 py-1.5 hover:bg-secondary/10 hover:text-primary">Dental Implants</Link></SheetClose>
                <SheetClose asChild><Link href="/services/smile-makeover" className="rounded-md px-1.5 py-1.5 hover:bg-secondary/10 hover:text-primary">Digital Smile Design & Veneers</Link></SheetClose>
                <SheetClose asChild><Link href="/services/rct" className="rounded-md px-1.5 py-1.5 hover:bg-secondary/10 hover:text-primary">Root Canal Treatment</Link></SheetClose>
                <SheetClose asChild><Link href="/services/paediatric-dentistry" className="rounded-md px-1.5 py-1.5 hover:bg-secondary/10 hover:text-primary">Paediatric Dental Care</Link></SheetClose>
              </div>
            </div>

            <div className="my-5 h-px bg-border/60" />

            {/* Main pages */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Clinic
              </p>
              <div className="mt-1 flex flex-col space-y-1 text-sm">
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/resources"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Patient Resources
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/success"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Success Stories
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-border px-4 py-4 space-y-2">
            <SheetClose asChild>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </SheetClose>
            <Button
              asChild
              variant="outline"
              className="w-full border-secondary text-secondary-foreground hover:bg-secondary/10"
            >
              <a href="tel:+919644057773">Call Clinic</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
