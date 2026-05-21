/**
 * Central marketing copy — confident & premium voice, real (anonymized) proof.
 * Both the Claude Code pages and Claude Design components read from here so copy
 * stays consistent. Edit copy in one place.
 */

export const company = {
  name: "VoxHorizon",
  tagline: "The Remodeler Growth Partner",
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
  eyebrow: "The Remodeler Growth Partner",
  headline: "Predictable, exclusive remodeling projects",
  headlineAccent: "booked on your calendar",
  headlineRest: "— not bought from a shared pool.",
  subhead:
    "VoxHorizon delivers 8–12 pre-qualified projects a month to established home-improvement contractors. Exclusive territory. Performance-backed.",
  trustLine:
    "Featured in Benzinga, Barchart, The Globe and Mail, and 400+ news sites.",
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
    title: "We map your exclusive territory",
    body: "We lock in your service area and define the ideal project profile — so every opportunity fits the work you actually want.",
  },
  {
    title: "Our data + AI engine finds high-intent homeowners",
    body: "We put your offer in front of local homeowners who are ready to remodel now, then qualify them against your criteria.",
  },
  {
    title: "Pre-qualified appointments land on your calendar",
    body: "Vetted, pre-scheduled appointments arrive booking-ready. You show up and close. No chasing, no junk leads.",
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
      "High-ticket remodel projects from homeowners ready to invest — matched to your crew's capacity.",
    href: "/industries/kitchen-bath",
    image: "/images/industry-kitchen-bath.jpg",
  },
  {
    key: "roofing",
    name: "Roofing",
    blurb:
      "Re-roof and repair appointments at volume, pre-qualified for budget and timeline.",
    href: "/industries/roofing",
    image: "/images/industry-roofing.jpg",
  },
  {
    key: "decking",
    name: "Decking",
    blurb:
      "Outdoor-living projects from motivated homeowners in your exact service area.",
    href: "/industries/decking",
    image: "/images/industry-decking.jpg",
  },
];

export const differentiators = [
  {
    title: "Exclusive, never shared",
    body: "Your leads are yours alone. We don't resell the same homeowner to five competitors like Angi or HomeAdvisor.",
  },
  {
    title: "Pre-qualified & pre-scheduled",
    body: "Every appointment is vetted against your criteria and booked before it reaches you.",
  },
  {
    title: "Data + AI driven",
    body: "We target high-intent homeowners with a system built to find demand, not spray ads and hope.",
  },
  {
    title: "Performance-backed",
    body: "A model built around measurable ROI — projects booked, not impressions promised.",
  },
  {
    title: "Territory scarcity",
    body: "We work with one contractor per market. When your area is taken, it's taken.",
  },
];

export const faqs = [
  {
    q: "How are your leads different from Angi or HomeAdvisor?",
    a: "Those platforms sell the same homeowner to several contractors and leave you to fight on price. Our leads are exclusive to you and pre-qualified against your project criteria before an appointment is booked.",
  },
  {
    q: "What does 'exclusive territory' mean?",
    a: "We partner with a single contractor per market. While we work with you, we won't take on a competitor in your service area.",
  },
  {
    q: "Who is this for?",
    a: "Established home-improvement contractors doing $50K/mo or more — kitchen & bath remodelers, roofers, and deck builders. It is not built for subcontractors or independent sales reps.",
  },
  {
    q: "Do you guarantee results?",
    a: "Our model is performance-oriented and built around measurable ROI. We'll walk you through exactly how that works for your market on your strategy call.",
  },
  {
    q: "How fast can I expect appointments?",
    a: "Most partners see qualified appointments within the first few weeks of launch. Several have booked dozens within their first 30–60 days.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on your market and capacity. We'll cover it transparently on your strategy call once we confirm your territory is open.",
  },
];

export const founder = {
  name: "Diogo Silva",
  role: "Founder & CEO",
  image: "/images/founder.jpg",
  bio: "Diogo founded VoxHorizon to fix what's broken in contractor lead generation: shared leads, empty promises, and wasted ad spend. The result is a data-driven system that delivers exclusive, pre-qualified projects to serious contractors — and it's been featured across 400+ news outlets.",
};

export const finalCta = {
  heading: "See if your territory is still open",
  body: "We work with one contractor per market. Apply for a strategy call to check availability in your area.",
};
