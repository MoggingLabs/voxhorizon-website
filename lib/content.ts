/**
 * Central marketing copy — confident & premium voice, real (anonymized) proof.
 * Both the application pages and frontend components read from here so copy
 * stays consistent. Edit copy in one place.
 */

export const company = {
  name: "VoxHorizon",
  tagline: "The end of the shared lead",
  founder: "Diogo Silva",
  copyrightYear: 2026,
};

/**
 * Flip to `true` once real photos are added to /public/images (see its README).
 * Components fall back to branded gradient placeholders while this is false.
 */
export const photosReady = false;

export const nav = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Results", href: "/results" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const primaryCta = { label: "See if your territory is open", href: "/apply" };
export const secondaryCta = { label: "View results", href: "/results" };

export const hero = {
  eyebrow: "Growth program · 2026 cohort",
  headline: "The end of the",
  headlineAccent: "shared lead.",
  headlineRest: "",
  subhead:
    "A growth program for operators done being one of five contractors racing for the same phone call. Exclusive territory. Pre-qualified, pre-scheduled projects — the kind of partnership that gets written into a quarterly plan, not a credit-card receipt.",
  trustLine: "Featured across 400+ news outlets.",
};

export const press = [
  { name: "Benzinga", href: "https://www.benzinga.com/pressreleases/25/02/ab43794488/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
  { name: "Barchart", href: "https://www.barchart.com/story/news/30987525/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
  { name: "The Globe and Mail", href: "https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/30987731/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
  { name: "Chronicle Journal", href: "http://markets.chroniclejournal.com/chroniclejournal/article/getnews-2025-2-18-voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry/" },
  { name: "NewsChannel Nebraska", href: "https://www.newschannelnebraska.com/story/52406331/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
];

export const steps = [
  {
    title: "We lock your territory",
    body: "One operator per zip, secured for the year. We map your service area and the project profile you actually want, so every appointment fits the work your crew does best.",
  },
  {
    title: "Our data and AI engine finds the demand",
    body: "We rank local homeowners against your historical close rate, ticket size, and crew availability — then qualify scope, budget, and timeline before anything reaches you.",
  },
  {
    title: "Pre-scheduled appointments hit your calendar",
    body: "Not raw leads — real appointments, on the calendar, ready for the estimate. You show up, sit, and sign. No chasing, no shared pool.",
  },
];

export type Stat = {
  count?: number; // animates up when in view
  prefix?: string;
  suffix?: string;
  value?: string; // static display (used when no count)
  label: string;
  attribution?: string;
};

export const stats: Stat[] = [
  { count: 170000, prefix: "$", label: "in new jobs · first 60 days", attribution: "Mitch" },
  { count: 100, label: "qualified appointments · 60 days", attribution: "Jonathan" },
  { value: "53 → 35", label: "leads to remodel appointments · 30 days" },
  { value: "263 → 134", label: "leads to reroof appointments · 3 months" },
];

export const industries = [
  {
    key: "kitchen-bath",
    name: "Kitchen & Bath",
    blurb:
      "High-ticket remodel projects, pre-qualified on scope and budget, matched to your crew's capacity.",
    href: "/industries/kitchen-bath",
    image: "/images/industry-kitchen-bath.jpg",
  },
  {
    key: "roofing",
    name: "Roofing",
    blurb:
      "Re-roof and repair appointments at volume, cleared on budget and timeline before they reach you.",
    href: "/industries/roofing",
    image: "/images/industry-roofing.jpg",
  },
  {
    key: "decking",
    name: "Decking",
    blurb:
      "Outdoor-living projects from homeowners ready to build, inside your exact service area.",
    href: "/industries/decking",
    image: "/images/industry-decking.jpg",
  },
];

export const differentiators = [
  {
    title: "Exclusive, never shared",
    body: "One operator per zip. The same homeowner never goes to five contractors racing for the same phone call. Your territory is yours alone.",
  },
  {
    title: "Pre-qualified and pre-scheduled",
    body: "Scope, budget, and timeline cleared before the appointment hits your calendar. Real appointments, ready for the estimate — not raw leads.",
  },
  {
    title: "Data and AI matching",
    body: "Prospects ranked against your close rate, ticket size, and crew availability. A system built to find demand, not spray ads and hope.",
  },
  {
    title: "Measured in signed work",
    body: "We report on appointments booked, sat, and signed — not impressions or clicks. The only number that matters is work on the books.",
  },
  {
    title: "Territory scarcity",
    body: "We work with one operator per market. When your zip is taken, your competition can't buy in next month.",
  },
];

export const faqs = [
  {
    q: "How is this different from shared-lead platforms?",
    a: "Those platforms sell the same homeowner to several contractors and leave you to fight on price. Our appointments are exclusive to you and pre-qualified on scope, budget, and timeline before they hit your calendar.",
  },
  {
    q: "What does exclusive territory mean?",
    a: "One operator per zip, secured for the year. While we work with you, we won't take on a competitor in your service area.",
  },
  {
    q: "Who is this for?",
    a: "Established home-improvement operators doing $50K/mo or more — kitchen and bath remodelers, roofers, and deck builders. It is not built for subcontractors or independent sales reps.",
  },
  {
    q: "Do you guarantee results?",
    a: "We measure in signed work, not impressions. Show rate across our last cohort was 92%, on an average ticket near $11.4K. We'll walk you through the numbers for your market on the call.",
  },
  {
    q: "How fast can I expect appointments?",
    a: "Most operators see qualified appointments within the first few weeks. One booked 100 in 60 days; another closed $170K in his first 60.",
  },
  {
    q: "What does it cost?",
    a: "It depends on your market and capacity. We'll cover it plainly on the call, once we confirm your territory is open.",
  },
];

export const founder = {
  name: "Diogo Silva",
  role: "Founder & CEO",
  image: "/images/founder.jpg",
  bio: "Diogo built VoxHorizon for operators done being one of five contractors racing for the same phone call. No shared leads, no empty promises, no spray-and-pray ad spend. Just exclusive territory and pre-qualified, pre-scheduled projects, measured in signed work — a program now featured across 400+ news outlets.",
};

export const finalCta = {
  heading: "See if your territory is open",
  body: "One operator per zip, secured for the year. Apply for a call and we'll check whether your zip is still open and map out your numbers.",
};
