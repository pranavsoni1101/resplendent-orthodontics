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
import { Calendar, Phone } from "lucide-react";
import { desc } from "framer-motion/client";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ---------- Brand Logo ---------- */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Image
            src="/logo.svg"
            alt="Respeldent Orthodontics"
            width={36}
            height={36}
            className="h-9 w-auto"
          /> */}
          <span className="text-base font-semibold tracking-tight text-foreground">
            Resplendent
          </span>
        </Link>

        {/* ---------- Navigation Menu ---------- */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>

            {/* Treatments Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Treatments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 sm:grid-cols-2">
                  <NavLink href="/services/metal-braces" title="Metal Braces"  desc="lorem lorem lorem"/>
                  <NavLink href="/services/ceramic-braces" title="Ceramic Braces" desc="lorem lorem lorem" />
                  <NavLink href="/services/lingual-braces" title="Lingual Braces" desc="lorem lorem lorem" />
                  <NavLink href="/services/clear-aligners" title="Clear Aligners" desc="lorem lorem lorem" />
                  <NavLink href="/services/pediatric-orthodontics" title="Pediatric Orthodontics" desc="lorem lorem lorem" />
                  <NavLink href="/services/surgical-planning" title="Digital Surgical Planning" desc="lorem lorem lorem" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/team" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Our Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Patient Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/success" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Success Stories
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ---------- Actions ---------- */}
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href="tel:+91XXXXXXXXXX" aria-label="Call clinic">
              <Phone className="size-4" />
              Call
            </a>
          </Button>
          <Button asChild size="sm" className="gap-2">
            <Link href="/contact#book">
              <Calendar className="size-4" />
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* Helper link card inside dropdown */
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
          "group block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors",
          "hover:bg-muted focus:bg-muted"
        )}
      >
        <div>
          <h6 className="text-sm font-medium leading-none text-foreground transition-colors group-hover:text-primary">
            {title}
          </h6>
          <p
            className={cn(
              "text-sm text-muted-foreground transition-colors duration-300",
              "group-hover:text-accent"
            )}
          >
            {desc}
          </p>
        </div>
      </Link>
    </li>
  );
}

