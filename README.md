# ResplenDent Orthodontic & Dental Care — Website

Marketing website for **Dr. Purva Verma Soni's ResplenDent Orthodontic & Dental Care**, a specialist orthodontic clinic based in Jaipur, India.

## Project Brief

**Client:** Dr. Purva Verma Soni  
**Clinic:** ResplenDent Orthodontic & Dental Care, Jaipur  
**Type:** Marketing / patient-facing website

### About the clinic

Dr. Purva Verma Soni is a BDS Gold Medallist (DAVV University, Indore) and holds an MDS in Orthodontics from Saveetha University, Chennai (2022). The clinic specialises in braces, clear aligners, jaw growth modification, orthognathic surgical planning, dental veneers, and advanced restorative procedures.

Technology highlights:
- **iTero intra-oral scanner** — full digital workflow with 3D visualisation
- **Aeroblast technology** — air & water pressure dental cleaning (one of few clinics in Jaipur to offer this)

### Site goals

- Establish credibility and trust for a specialist orthodontic practice
- Drive consultation bookings via the contact/booking page
- Showcase treatments, clinic philosophy, and doctor credentials
- Provide patient education resources

### Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, about snapshot, meet the doctor, ethos, treatments overview, proof/testimonials, FAQ |
| `/about` | Full about page — doctor bio, philosophy, treatment journey, technology, values |
| `/services` | Searchable treatments index |
| `/services/[slug]` | Individual treatment detail pages |
| `/resources` | Patient resources |
| `/contact` | Booking & contact form |

### Key assets

| File | Used in |
|---|---|
| `public/images/dr-purva-soni.JPG` | Meet the Mind (homepage), About hero card |
| `public/images/clinic-room.JPG` | About Snapshot (homepage) |
| `public/mov/general-checkup.mov` | Hero background video |
| `public/mov/internal-oral-scan.mov` | Hero floating scan preview card |

### External links

- Instagram: https://www.instagram.com/resplendent_jaipur/reels/
- Google Maps: https://share.google/lxHFkj7ItyXixVbRK

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Radix UI primitives) |
| Icons | Lucide React |
| Animation | Lottie React |
| Carousel | Embla Carousel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # development server (Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # lint
```
