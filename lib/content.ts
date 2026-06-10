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

export const primaryCta = { label: "See if your territory is open", href: "/apply" };
export const secondaryCta = { label: "View results", href: "/results" };

/**
 * The live cohort state. Every urgency line on the site (navbar crumb, closing
 * CTAs, territory copy) reads from here so the numbers can never contradict
 * each other. Update this object when the quarter rolls.
 */
export const cohort = {
  quarter: "Q3",
  year: "MMXXVI",
  closesOn: "Sept 30",
  slotsTotal: 24,
  slotsOpen: 12,
  activeOperators: 63,
};

/** Network-wide audited numbers, shared by home / system / results. */
export const metrics = {
  apptsPerDay: 187,
  apptsDelta: "+12% vs 7D",
  operatorsDelta: "+4 QoQ",
  avgTicket: "$32.4K",
  avgTicketDelta: "+$1.8K MoM",
  keptRate: 83, // qualified → kept, %
  keptRateIndustry: 34,
  signedRate90d: 61, // kept → signed within 90 days, %
  signedRateIndustry: 22,
  rejectRate: 71, // applicant inquiries rejected, %
  networkRevenueYtd: { value: 184, prefix: "$", suffix: "M", delta: "+22% YoY" },
  medianOpRevenue: { value: 1.4, prefix: "$", suffix: "M", delta: "+$180K YoY" },
  topQuartileRevenue: { value: 3.2, prefix: "$", suffix: "M", delta: "+$420K YoY" },
};

export const press = [
  { name: "Benzinga", href: "https://www.benzinga.com/pressreleases/25/02/ab43794488/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
  { name: "Barchart", href: "https://www.barchart.com/story/news/30987525/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
  { name: "The Globe and Mail", href: "https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/30987731/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
  { name: "Chronicle Journal", href: "http://markets.chroniclejournal.com/chroniclejournal/article/getnews-2025-2-18-voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry/" },
  { name: "NewsChannel Nebraska", href: "https://www.newschannelnebraska.com/story/52406331/voxhorizon-unveils-powerful-lead-generation-system-transforming-the-contracting-industry" },
];

/* ── Territory ──────────────────────────────────────────────────────────
   The live grid — 16 wide × 6 tall = 96 cells. Sequence ported verbatim
   from the design handoff: 73 claimed, 19 open, 4 closing ("open-hot"). */

export type CellState = "claimed" | "open" | "open-hot";

export const territoryCells: readonly CellState[] = [
  "claimed", "open", "claimed", "claimed", "claimed", "claimed", "open", "claimed",
  "claimed", "open-hot", "open", "claimed", "open-hot", "open", "claimed", "claimed",
  "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "claimed", "open", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "open", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "open",
  "open", "claimed", "open", "open", "claimed", "claimed", "open", "claimed",
  "claimed", "claimed", "claimed", "open", "open", "claimed", "open-hot", "open",
  "open", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "claimed", "claimed", "claimed", "open", "claimed", "open", "open-hot", "claimed",
  "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "open", "claimed", "open", "claimed", "claimed", "claimed", "claimed", "claimed",
];

export const territoryCounts = {
  total: 96,
  claimed: 73,
  open: 19,
  hot: 4, // closing in 48h, multiple applicants
  states: 27,
};

export type OpenZip = {
  zip: string;
  city: string;
  state: string; // full state name
  abbr: string; // two-letter code
  applicants: number; // 0 == "quiet"
  hot?: boolean; // 48-hour close, multiple applicants
  featured?: boolean; // shown in the home-page teaser table
};

export const openZips: OpenZip[] = [
  { zip: "67501", city: "Wichita", state: "Kansas", abbr: "KS", applicants: 2, hot: true, featured: true },
  { zip: "28207", city: "Charlotte", state: "North Carolina", abbr: "NC", applicants: 3, hot: true, featured: true },
  { zip: "89509", city: "Reno", state: "Nevada", abbr: "NV", applicants: 1, featured: true },
  { zip: "05401", city: "Burlington", state: "Vermont", abbr: "VT", applicants: 0 },
  { zip: "83702", city: "Boise", state: "Idaho", abbr: "ID", applicants: 4, hot: true, featured: true },
  { zip: "53703", city: "Madison", state: "Wisconsin", abbr: "WI", applicants: 2 },
  { zip: "97402", city: "Eugene", state: "Oregon", abbr: "OR", applicants: 0 },
  { zip: "78704", city: "Austin", state: "Texas", abbr: "TX", applicants: 6, hot: true, featured: true },
  { zip: "87505", city: "Santa Fe", state: "New Mexico", abbr: "NM", applicants: 1 },
  { zip: "14618", city: "Rochester", state: "New York", abbr: "NY", applicants: 2 },
  { zip: "68114", city: "Omaha", state: "Nebraska", abbr: "NE", applicants: 1 },
  { zip: "37205", city: "Nashville", state: "Tennessee", abbr: "TN", applicants: 3 },
  { zip: "29401", city: "Charleston", state: "South Carolina", abbr: "SC", applicants: 2 },
  { zip: "99205", city: "Spokane", state: "Washington", abbr: "WA", applicants: 0 },
  { zip: "03801", city: "Portsmouth", state: "New Hampshire", abbr: "NH", applicants: 1 },
  { zip: "04401", city: "Bangor", state: "Maine", abbr: "ME", applicants: 0 },
  { zip: "59715", city: "Bozeman", state: "Montana", abbr: "MT", applicants: 2 },
  { zip: "82001", city: "Cheyenne", state: "Wyoming", abbr: "WY", applicants: 0 },
  { zip: "57104", city: "Sioux Falls", state: "South Dakota", abbr: "SD", applicants: 1 },
];

/* ── Live feed ──────────────────────────────────────────────────────────
   Sample desk events. The hero panel shows the first four; the feed
   section shows all of them. */

export type FeedEvent = {
  kind: "L" | "K" | "$"; // qualified lead · kept appointment · signed contract
  title: string;
  sub: string;
  time: string;
};

export const feedEvents: FeedEvent[] = [
  { kind: "L", title: "QUAL LEAD · re-roof 24sq", sub: "MITCH · 67501 WICHITA KS · $18–22K", time: "+00:02" },
  { kind: "K", title: "APPT CONF · kitchen remodel", sub: "JONATHAN · 78704 AUSTIN TX · THU 10:00", time: "+00:09" },
  { kind: "$", title: "SIGNED · $34,600 composite deck", sub: "DECKWORKS · 55410 MINNEAPOLIS MN", time: "+00:36" },
  { kind: "L", title: "QUAL LEAD · loft conversion", sub: "NADIA · 03110 NH BUILD SVCS", time: "+00:52" },
  { kind: "K", title: "APPT CONF · 14 windows", sub: "STERLING · 49503 GRAND RAPIDS MI", time: "+01:14" },
  { kind: "$", title: "SIGNED · $21,200 master bath", sub: "HALLORAN · 83702 BOISE ID", time: "+02:03" },
  { kind: "L", title: "QUAL LEAD · whole-house siding", sub: "WILL · 74105 TULSA OK · $42–58K", time: "+03:27" },
  { kind: "$", title: "SIGNED · $62,000 kitchen", sub: "GREENWAY · 28207 CHARLOTTE NC", time: "+07:09" },
];

/* ── Operators ──────────────────────────────────────────────────────────
   Highlighted profiles + the audited roster table. */

export type OperatorProfile = {
  name: string;
  zip: string;
  abbr: string;
  tag: string; // "★ TOP DECILE" | "★ TOP QUARTILE" | "— STEADY" | "— NEW · CAL."
  quote: string;
  signedQ3: number;
  avgTicket: string;
  tenure: string;
};

export const operatorProfiles: OperatorProfile[] = [
  {
    name: "Deckworks", zip: "55410", abbr: "MN", tag: "★ TOP DECILE",
    quote: "The phone rings, I drive, I sign. I haven't run a Google ad in fourteen months. My wife took the year off.",
    signedQ3: 41, avgTicket: "$38K", tenure: "14mo",
  },
  {
    name: "Halloran & Sons", zip: "83702", abbr: "ID", tag: "★ TOP QUARTILE",
    quote: "Used to spend $4,800/mo on lead aggregators for half the close rate. Cancelled in week three.",
    signedQ3: 34, avgTicket: "$28K", tenure: "9mo",
  },
  {
    name: "Sterling Glass", zip: "49503", abbr: "MI", tag: "— STEADY",
    quote: "Window work is brutal in Michigan winters. The leads keep coming because Erin tuned the intake to my season.",
    signedQ3: 28, avgTicket: "$22K", tenure: "22mo",
  },
  {
    name: "Birchwood Build", zip: "05401", abbr: "VT", tag: "★ TOP QUARTILE",
    quote: "Three years on aggregators got me twenty signs. Eighteen months on Vox got me eighty-one.",
    signedQ3: 32, avgTicket: "$44K", tenure: "18mo",
  },
  {
    name: "Greenway Remodel", zip: "28207", abbr: "NC", tag: "— STEADY",
    quote: "Two of my kept appointments last week were over $60K. That's not a lead — that's a customer.",
    signedQ3: 22, avgTicket: "$48K", tenure: "11mo",
  },
  {
    name: "Olafsen Build", zip: "53703", abbr: "WI", tag: "— STEADY",
    quote: "The guarantee is a real thing. They missed me 4 in Q1, worked free for fifteen days, hit thirty in twenty-six.",
    signedQ3: 29, avgTicket: "$31K", tenure: "7mo",
  },
  {
    name: "Calder Plumbing", zip: "97402", abbr: "OR", tag: "— NEW · CAL.",
    quote: "Eight kept appointments in week one. I haven't seen volume like this since 2018.",
    signedQ3: 11, avgTicket: "$19K", tenure: "2mo",
  },
  {
    name: "NH Building Services", zip: "03110", abbr: "NH", tag: "— STEADY",
    quote: "Loft conversions in three different towns this month. Nadia (intake) reads my zone better than I do.",
    signedQ3: 24, avgTicket: "$54K", tenure: "13mo",
  },
  {
    name: "Mitch Roofing", zip: "67501", abbr: "KS", tag: "— NEW · CAL.",
    quote: "Twelve roofs in week eight. The K-rate is the part nobody believes until they see it.",
    signedQ3: 18, avgTicket: "$21K", tenure: "3mo",
  },
];

export type RosterRow = {
  zip: string;
  entry: string; // "Name · City ST · trade"
  signedQ3: number;
  revenue: string;
};

export const operatorRoster: RosterRow[] = [
  { zip: "87505", entry: "Adobe Custom · Santa Fe NM · kitchens", signedQ3: 26, revenue: "$1.1M" },
  { zip: "05401", entry: "Birchwood Build · Burlington VT · additions", signedQ3: 32, revenue: "$1.4M" },
  { zip: "59715", entry: "Bridger Trades · Bozeman MT · whole house", signedQ3: 17, revenue: "$1.7M" },
  { zip: "97402", entry: "Calder Plumbing · Eugene OR · re-pipe", signedQ3: 11, revenue: "$208K" },
  { zip: "55410", entry: "Deckworks · Minneapolis MN · decks", signedQ3: 41, revenue: "$1.6M" },
  { zip: "28207", entry: "Greenway Remodel · Charlotte NC · kitchens", signedQ3: 22, revenue: "$1.0M" },
  { zip: "83702", entry: "Halloran & Sons · Boise ID · baths", signedQ3: 34, revenue: "$952K" },
  { zip: "67501", entry: "Mitch Roofing · Wichita KS · roofs", signedQ3: 18, revenue: "$378K" },
  { zip: "03110", entry: "NH Building Services · Manchester NH · lofts", signedQ3: 24, revenue: "$1.3M" },
  { zip: "53703", entry: "Olafsen Build · Madison WI · sunrooms", signedQ3: 29, revenue: "$898K" },
  { zip: "14618", entry: "Pittsford Custom · Rochester NY · baths", signedQ3: 21, revenue: "$612K" },
  { zip: "29401", entry: "Rainsford & Co · Charleston SC · porches", signedQ3: 19, revenue: "$740K" },
  { zip: "99205", entry: "Riverview Build · Spokane WA · additions", signedQ3: 16, revenue: "$704K" },
  { zip: "49503", entry: "Sterling Glass · Grand Rapids MI · windows", signedQ3: 28, revenue: "$616K" },
  { zip: "37205", entry: "Tannehill Carpentry · Nashville TN · whole house", signedQ3: 20, revenue: "$1.2M" },
  { zip: "68114", entry: "Three Oaks Build · Omaha NE · kitchens", signedQ3: 23, revenue: "$782K" },
  { zip: "82001", entry: "Wind River Custom · Cheyenne WY · decks", signedQ3: 15, revenue: "$452K" },
  { zip: "78704", entry: "Zilker Build · Austin TX · whole house", signedQ3: 27, revenue: "$1.5M" },
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
