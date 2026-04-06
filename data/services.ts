// data/services.ts
export type Service = {
  slug: string;                  // unique slug used in URLs
  title: string;
  category?: string;             // optional grouping
  short: string;                 // short one-liner / card subtitle
  heroImage?: string;            // optional hero image path
  overview: string;              // full overview (HTML or plain text)
  highlights?: string[];         // bullet points / benefits
  indications?: string[];        // when to consider this service
  procedure?: string[];          // steps / what to expect
  faqs?: { q: string; a: string }[];
  related?: string[];            // slugs of related services
  subitems?: {                    // useful for Brackets -> metal/ceramic ...
    id: string;
    title: string;
    short?: string;
    desc?: string;
  }[];
};

export const SERVICES: Service[] = [
  {
    slug: "brackets",
    title: "Brackets",
    short: "Reliable fixed appliance options for all ages",
    overview:
      "Brackets are fixed orthodontic appliances bonded to the teeth and joined by archwires. We offer modern bracket systems tailored to aesthetics and efficiency.",
    highlights: [
      "Precise tooth movement",
      "Durable and time-tested",
      "Options for discrete finishes (ceramic / lingual)",
    ],
    subitems: [
      { id: "metal-brackets", title: "Metal Brackets", short: "Strong, cost-effective" },
      { id: "ceramic-brackets", title: "Ceramic Brackets", short: "Tooth-colored aesthetics" },
      { id: "self-ligating-brackets", title: "Self-ligating Brackets", short: "Faster, lower friction" },
      { id: "lingual-brackets", title: "Lingual Brackets", short: "Hidden behind teeth" },
    ],
    indications: ["Crowding", "Malocclusion", "Complex tooth movements"],
    procedure: [
      "Comprehensive assessment & records",
      "Bonding visit: brackets placed and wire inserted",
      "Periodic adjustments (every 4–8 weeks)",
      "Finishing and retention phase",
    ],
    faqs: [
      { q: "Are brackets painful?", a: "You may feel pressure for a few days after placement or adjustments — usually manageable with mild analgesics." },
      { q: "Can I play sports?", a: "Yes — we recommend a mouthguard for contact sports while wearing braces." }
    ],
    related: ["clear-aligners",]
  },

  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    short: "Discreet, removable tooth alignment",
    overview:
      "Clear aligners are custom, removable trays that move teeth gradually. Ideal for patients seeking low-visibility treatment.",
    highlights: ["Aesthetic & removable", "Good for mild-to-moderate cases", "Digital treatment planning"],
    indications: ["Mild crowding", "Spacing", "Patients preferring discreet option"],
    procedure: [
      "3D scan & digital treatment plan",
      "Sequential aligner deliveries every 1–2 weeks",
      "Periodic follow-ups and refinements",
      "Retention phase using retainers"
    ],
    faqs: [
      { q: "How many hours per day should I wear them?", a: "Aim for 20–22 hours per day for predictable results." },
      { q: "What if I lose an aligner?", a: "Contact clinic — we will advise whether to move to the next set or issue a replacement." }
    ],
    related: ["brackets",]
  },

  {
    slug: "growth-modifying-appliances",
    title: "Growth Modifying Appliances",
    short: "Guiding jaw growth at key ages",
    overview:
      "Used mainly in growing patients to encourage or restrain jaw growth and correct skeletal discrepancies.",
    highlights: ["Early intervention", "Can reduce need for surgery later", "Targeted orthopedic change"],
    indications: ["Skeletal Class II/III in growing children", "Crossbite with jaw asymmetry"],
    procedure: [
      "Growth assessment & timing evaluation",
      "Appliance fitting and monitoring",
      "Adjustment visits during growth period",
      "Transition to fixed appliances if required"
    ],
    faqs: [{ q: "At what age should this be considered?", a: "Typically during active growth (around 8–14 years) — exact timing depends on individual evaluation." }],
    related: ["paediatric-dentistry"]
  },

  {
    slug: "mini-implant",
    title: "Mini-Implants (Temporary Anchorage Devices)",
    short: "Stable anchorage for complex tooth movements",
    overview:
      "Mini-implants provide temporary skeletal anchorage (TADs) to move teeth predictably without relying on patient compliance.",
    highlights: ["Precise anchorage", "Short surgical placement", "Facilitates complex mechanics"],
    indications: ["Intrusion of molars", "Space closure without reciprocal movement"],
    procedure: ["Local anaesthesia placement", "Load with orthodontic mechanics", "Removal after use (minor procedure)"],
    faqs: [{ q: "Are they painful?", a: "Placement is done under local anaesthesia and is usually well tolerated." }],
    related: ["extra-alveolar-screws", "artistic-mechanics"]
  },

  {
    slug: "extra-alveolar-screws",
    title: "Extra-Alveolar Screws",
    short: "Anchorage in specific biomechanical sites",
    overview:
      "Screws placed in extra-alveolar regions (e.g., buccal shelf) to manage larger movements safely and efficiently.",
    highlights: ["Strong anchorage", "Enables en-masse retraction", "Useful in adult cases"],
    indications: ["Large space closure", "Significant retraction needs"],
    procedure: ["CBCT planning if needed", "Placement under local anesthesia", "Integration with mechanics", "Removal post-treatment"],
    faqs: [{ q: "Do they integrate like implants?", a: "These are temporary screws and are easier to remove; they do not osseointegrate like dental implants." }],
    related: ["mini-implant"]
  },

  {
    slug: "digital-surgical-planning",
    title: "Digital Surgical Planning",
    short: "3D planning for combined orthodontic-surgical cases",
    overview:
      "We use CBCT and digital workflows to plan orthognathic surgery with precise surgical splints and coordinated orthodontics.",
    highlights: ["3D visualization", "Predictable surgical results", "Interdisciplinary collaboration"],
    indications: ["Severe skeletal discrepancies", "Facial asymmetry needing surgery"],
    procedure: ["Records & CBCT", "Virtual surgery & splint design", "Surgical execution and postoperative orthodontics"],
    faqs: [{ q: "Do you work with surgeons?", a: "Yes — we collaborate closely with oral & maxillofacial surgeons for combined care." }],
    related: ["artistic-mechanics"]
  },

  {
    slug: "artistic-mechanics",
    title: "Artistic Mechanics",
    short: "Finishing, detailing & smile artistry",
    overview:
      "The finishing phase — bracket positioning, detailing bends, and biomechanics — is where function and aesthetics are perfected.",
    highlights: ["Fine detailing", "Aesthetic tooth positioning", "Occlusal optimization"],
    indications: ["Finalizing alignment", "Smile design refinements"],
    procedure: ["Finishing visits", "Detailing bends and attachments", "Final polishing and retention planning"],
    faqs: [{ q: "What is smile design?", a: "Consideration of tooth proportions, gingival levels, and facial harmony to optimize the final result." }],
    related: ["digital-surgical-planning"]
  },
  {
    slug: "scaling-polishing",
    title: "Scaling & Polishing",
    short: "Professional cleaning for healthier gums and a fresher smile",
    overview:
      "Scaling and polishing help remove plaque, tartar, and surface stains. It supports gum health, reduces bad breath, and keeps your smile feeling clean and comfortable.",
    highlights: [
      "Removes plaque and tartar buildup",
      "Supports gum health",
      "Helps reduce staining and bad breath",
    ],
    indications: ["Bleeding gums", "Staining", "Bad breath", "Routine preventive care"],
    procedure: [
      "Clinical evaluation of gums and deposits",
      "Scaling to remove tartar and plaque",
      "Polishing to smooth enamel surfaces",
      "Aftercare guidance for home hygiene",
    ],
    faqs: [
      { q: "Is scaling painful?", a: "Most patients tolerate it well. If sensitivity is expected, we can make it more comfortable." },
      { q: "How often should I get it done?", a: "Typically every 6 months, but it varies based on gum health and deposits." },
    ],
    related: ["teeth-whitening", "biocompatible-fillings"],
  },

  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Safer brightening options designed around sensitivity",
    overview:
      "Teeth whitening helps brighten your smile by reducing stains caused by food, drinks, and aging. We recommend the most suitable approach based on enamel condition and sensitivity.",
    highlights: [
      "Noticeably brighter smile",
      "Sensitivity-conscious planning",
      "Guided, predictable outcomes",
    ],
    indications: ["Yellowing", "Tea/coffee stains", "Smile refresh before events"],
    procedure: [
      "Shade assessment and evaluation",
      "Whitening plan selection (in-clinic or guided take-home)",
      "Application and monitoring",
      "Aftercare and maintenance tips",
    ],
    faqs: [
      { q: "Does whitening damage teeth?", a: "When done properly with appropriate products, it is generally safe for enamel." },
      { q: "Will it work on crowns/veneers?", a: "No — restorations don’t whiten the same way as natural teeth. We plan accordingly." },
    ],
    related: ["scaling-polishing", "smile-makeover"],
  },

  {
    slug: "smile-makeover",
    title: "Digital Smile Makeover (Veneers)",
    short: "Aesthetic smile design planned for natural harmony",
    overview:
      "A digital smile makeover focuses on shape, symmetry, and facial harmony. Veneers can refine the appearance of teeth—planned carefully to keep results natural and long-lasting.",
    highlights: [
      "Design-led aesthetic planning",
      "Natural-looking proportions",
      "Personalized to facial harmony",
    ],
    indications: ["Chipped edges", "Uneven shapes", "Gaps", "Smile aesthetic enhancement"],
    procedure: [
      "Smile analysis and digital planning",
      "Mock-up / preview (where applicable)",
      "Conservative tooth preparation (if required)",
      "Veneer placement and finishing",
    ],
    faqs: [
      { q: "Are veneers permanent?", a: "They are long-term restorations. In many cases, minimal enamel changes may be needed." },
      { q: "Will veneers look natural?", a: "Yes — when planned with correct shape, translucency, and shade matching." },
    ],
    related: ["teeth-whitening", "clear-aligners", "artistic-mechanics"],
  },

  {
    slug: "implants",
    title: "Dental Implants",
    short: "A stable, natural-feeling option to replace missing teeth",
    overview:
      "Dental implants replace missing teeth with a strong foundation that supports function and aesthetics. We plan implant cases carefully for predictable bite and long-term stability.",
    highlights: [
      "Restores chewing and confidence",
      "Stable and long-lasting solution",
      "Planned for bite harmony",
    ],
    indications: ["Missing teeth", "Difficulty chewing", "Replacing extracted teeth"],
    procedure: [
      "Clinical evaluation and planning (imaging if needed)",
      "Implant placement under local anaesthesia",
      "Healing and integration period",
      "Final crown / restoration placement",
    ],
    faqs: [
      { q: "Do implants integrate like natural teeth?", a: "They integrate with bone and feel stable, but require good hygiene and follow-ups." },
      { q: "How long does it take?", a: "Timelines vary by case; we’ll outline the steps and expectations upfront." },
    ],
    related: ["extractions", "scaling-polishing"],
  },

  {
    slug: "rct",
    title: "Root Canal Treatment (RCT)",
    short: "Relieve pain and preserve the natural tooth",
    overview:
      "Root canal treatment removes infected pulp tissue and seals the tooth to prevent reinfection. The goal is to save the natural tooth structure and relieve pain safely.",
    highlights: [
      "Pain relief and infection control",
      "Saves the natural tooth",
      "Modern techniques for comfort",
    ],
    indications: ["Tooth pain", "Deep decay", "Sensitivity", "Dental infection"],
    procedure: [
      "Diagnosis and imaging",
      "Local anaesthesia and cleaning of canals",
      "Disinfection and sealing",
      "Final restoration (filling/crown as needed)",
    ],
    faqs: [
      { q: "Is RCT painful?", a: "It’s usually done under local anaesthesia and is generally comfortable." },
      { q: "Do I need a crown after RCT?", a: "Often recommended for strength, depending on tooth structure and bite forces." },
    ],
    related: ["biocompatible-fillings", "extractions"],
  },

  {
    slug: "biocompatible-fillings",
    title: "Biologically-Friendly Fillings",
    short: "Tooth-colored restorations with a conservative approach",
    overview:
      "Biologically-friendly fillings focus on preserving healthy tooth structure while restoring function and aesthetics. We use tooth-colored materials designed for a natural look and feel.",
    highlights: [
      "Tooth-colored, natural finish",
      "Conservative (minimal removal where possible)",
      "Restores strength and function",
    ],
    indications: ["Cavities", "Old fillings replacement", "Chipped tooth edges"],
    procedure: [
      "Cavity assessment and isolation",
      "Conservative cleaning of decay",
      "Layered filling placement",
      "Bite check and polish",
    ],
    faqs: [
      { q: "How long do fillings last?", a: "It depends on bite forces and hygiene; regular check-ups help increase longevity." },
    ],
    related: ["scaling-polishing", "rct", "pediatric-dentistry"],
  },

  {
    slug: "paediatric-dentistry",
    title: "Paediatric Dentistry",
    short: "Gentle, kid-friendly care focused on comfort and prevention",
    overview:
      "Paediatric dentistry supports healthy development with prevention-first care. We focus on a calm experience and treatment options appropriate for children, including drill-free approaches where suitable.",
    highlights: [
      "Comfort-first approach",
      "Preventive guidance and habit support",
      "Age-appropriate treatment planning",
    ],
    indications: ["Early cavities", "Tooth pain", "Preventive check-ups", "Habits affecting teeth/jaw"],
    procedure: [
      "Gentle assessment and child-friendly explanation",
      "Preventive plan (hygiene/diet/habits)",
      "Treatment as needed (conservative options first)",
      "Follow-ups to support healthy growth",
    ],
    faqs: [
      { q: "What does drill-free cavity care mean?", a: "In suitable early cases, we can consider minimally invasive approaches—your dentist will advise what’s appropriate." },
    ],
    related: ["growth-modifying-appliances", "biocompatible-fillings"],
  },

  {
    slug: "extractions",
    title: "Tooth Extractions",
    short: "Safe, gentle removal when a tooth cannot be preserved",
    overview:
      "When removal is necessary, we focus on safety, comfort, and clear aftercare. We also discuss replacement options if needed to maintain function and bite stability.",
    highlights: [
      "Comfort-focused procedure",
      "Clear aftercare guidance",
      "Future bite and replacement planning",
    ],
    indications: ["Severely damaged tooth", "Advanced decay", "Orthodontic space needs", "Infection risk"],
    procedure: [
      "Evaluation and imaging if needed",
      "Local anaesthesia and gentle extraction",
      "Bleeding control and post-op instructions",
      "Follow-up review and next-step planning",
    ],
    faqs: [
      { q: "Will there be swelling?", a: "Mild swelling can happen. We provide aftercare steps to manage it." },
      { q: "Do I need to replace the tooth?", a: "Not always. We’ll guide you based on function, bite, and aesthetics." },
    ],
    related: ["implants", "clear-aligners", "brackets"],
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    short: "Restore damaged or missing teeth with durable restorations",
    overview:
      "Crowns and bridges restore the function and appearance of damaged or missing teeth. A crown caps a weakened tooth; a bridge fills the gap left by one or more missing teeth, supported by adjacent teeth or implants.",
    highlights: [
      "Natural-looking and durable",
      "Restores chewing function and bite",
      "Custom-fitted for comfort and aesthetics",
    ],
    indications: ["Cracked or weakened teeth", "Missing teeth", "After RCT", "Large cavities"],
    procedure: [
      "Clinical evaluation and shade matching",
      "Tooth preparation and impressions",
      "Temporary restoration while permanent is made",
      "Fitting, adjustment, and cementation",
    ],
    faqs: [
      { q: "How long do crowns last?", a: "With good hygiene and regular check-ups, crowns can last many years." },
      { q: "Is the procedure painful?", a: "Done under local anaesthesia — most patients find it comfortable." },
    ],
    related: ["implants", "rct", "biocompatible-fillings"],
  },
];
