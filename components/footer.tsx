import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold">Dr Purva Soni's ResplenDent Orthodontic & Dental Care</h3>
            <p className="mt-3 text-sm text-white/80 max-w-sm leading-relaxed">
              Creating confident smiles through precision, technology,
              and compassionate orthodontic care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Treatments</FooterLink>
              <FooterLink href="/success">Success Stories</FooterLink>
              <FooterLink href="/resources">Patient Resources</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider ">
              Orthodontic Treatments
            </h4>
            <ul className="space-y-2 text-sm ">
              <li><Link href="/services/brackets" className="text-white/90 transition-all hover:text-black/70 ">Brackets</Link></li>
              <li><Link href="/services/clear-aligners" className="text-white/90 transition-all hover:text-black/70 ">Clear Aligners</Link></li>
              <li><Link href="/services/growth-modifying-appliances" className="text-white/90 transition-all hover:text-black/70 ">Growth Modifying Appliances</Link></li>
              <li><Link href="/services/mini-implant" className="text-white/90 transition-all hover:text-black/70 ">Mini-Implants (TADs)</Link></li>
              <li><Link href="/services/extra-alveolar-screws" className="text-white/90 transition-all hover:text-black/70 ">Extra-Alveolar Screws</Link></li>
              <li><Link href="/services/digital-surgical-planning" className="text-white/90 transition-all hover:text-black/70 ">Digital Surgical Planning</Link></li>
              <li><Link href="/services/artistic-mechanics" className="text-white/90 transition-all hover:text-black/70 ">Artistic Mechanics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider ">
              General & Cosmetic Care
            </h4>
            <ul className="space-y-2 text-sm ">
              <li><Link href="/services/scaling-polishing" className="text-white/90 transition-all hover:text-black/70 ">Scaling & Polishing</Link></li>
              <li><Link href="/services/teeth-whitening" className="text-white/90 transition-all hover:text-black/70 ">Teeth Whitening</Link></li>
              <li><Link href="/services/smile-makeover" className="text-white/90 transition-all hover:text-black/70 ">Smile Makeover (Veneers)</Link></li>
              <li><Link href="/services/implants" className="text-white/90 transition-all hover:text-black/70 ">Dental Implants</Link></li>
              <li><Link href="/services/rct" className="text-white/90 transition-all hover:text-black/70 ">Root Canal Treatment</Link></li>
              <li><Link href="/services/pediatric-dentistry" className="text-white/90 transition-all hover:text-black/70 ">Paediatric Dentistry</Link></li>
            </ul>
          </div>


        </div>
        {/* Contact / CTA band */}
        <div className="mt-14 rounded-xl border border-white/15 bg-white/5 px-6 py-8 max-w-2xl mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Contact Us
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex gap-2">
                  <Phone className="size-4" />
                  <a href="tel:+919644057773" className="hover:text-black/70 transition">
                    +91 9644-057-773
                  </a>
                </li>

                <li className="flex gap-2">
                  <Mail className="size-4" />
                  <a
                    href="mailto:resplendent.jaipur@gmail.com"
                    className="hover:text-black/70 transition"
                  >
                    resplendent.jaipur@gmail.com
                  </a>
                </li>

                <li className="flex gap-2">
                  <MapPin className="size-4" />
                  <span>
                    C-30, Pankaj Singhvi marg ,
                    <br />
                    Lal kothi, vidhan sabha road.
                    <br />
                    Pin code: 302015
                  </span>
                </li>
              </ul>
            </div>

            <div className="shrink-0 self-center text-left md:text-right">
              <Link
                href="/contact#book"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition"
              >
                Book Appointment
              </Link>

              {/* <p className="mt-2 max-w-[260px] text-xs text-white/90">
        Call or book online. Fees vary by case complexity.
      </p> */}
            </div>

          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Dr Purva Soni's ResplenDent Orthodontic & Dental Care. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/80">
            <Link href="/privacy" className="hover:text-black/70 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-black/70 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>

            {/* Built By Srizen */}
            <Link
              href="https://srizen.com"
              target="_blank"
              className="hover:text-black/70 transition-colors"
            >
              Built by Srizen
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/90 transition-all hover:text-black/70 "
      >
        {children}
      </Link>
    </li>
  );
}

