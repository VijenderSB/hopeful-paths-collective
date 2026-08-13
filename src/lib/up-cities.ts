// Uttar Pradesh city coverage. Patients and families from these districts
// travel to DeAddictify's affiliated Delhi NCR de-addiction centres.

export type UPCity = {
  slug: string;
  name: string;
  tier: 2 | 3;
  region: string;
  travel: string; // how families usually reach Delhi NCR
  note: string; // one locally-grounded line used in copy
};

const T2: UPCity[] = [
  { slug: "agra", name: "Agra", tier: 2, region: "Braj region", travel: "2–3 hours by Yamuna Expressway or Gatimaan/Shatabdi trains", note: "a large student and tourism workforce, where after-hours drinking often escalates quietly" },
  { slug: "aligarh", name: "Aligarh", tier: 2, region: "Doab belt", travel: "roughly 2.5–3 hours by road via Yamuna Expressway or GT Road", note: "a university city where cannabis and prescription-pill misuse frequently begin in the late teens" },
  { slug: "prayagraj", name: "Allahabad (Prayagraj)", tier: 2, region: "Purvanchal", travel: "an overnight train or a short flight to Delhi", note: "a coaching and legal-services hub where long study cycles and stress fuel dependence" },
  { slug: "bareilly", name: "Bareilly", tier: 2, region: "Rohilkhand", travel: "5–6 hours by road or a direct overnight train", note: "strong family networks that often step in before the patient is ready to accept help" },
  { slug: "firozabad", name: "Firozabad", tier: 2, region: "Braj region", travel: "3–4 hours by road via Agra and the Yamuna Expressway", note: "shift-based glass-industry work, where alcohol use is often normalised among co-workers" },
  { slug: "gautam-buddha-nagar", name: "Gautam Buddha Nagar (Noida / Greater Noida)", tier: 2, region: "Delhi NCR", travel: "within Delhi NCR — same-day admission is usually possible", note: "corporate and hostel populations with high-functioning, hidden addiction" },
  { slug: "ghaziabad-up", name: "Ghaziabad", tier: 2, region: "Delhi NCR", travel: "inside NCR — under an hour to most partner centres", note: "dense residential colonies where families seek discreet, non-local treatment" },
  { slug: "gorakhpur", name: "Gorakhpur", tier: 2, region: "Purvanchal", travel: "an overnight train to Delhi or a direct flight", note: "migration-driven separation from family, a known relapse risk" },
  { slug: "jhansi", name: "Jhansi", tier: 2, region: "Bundelkhand", travel: "a 5–6 hour train journey to Delhi via the central line", note: "limited local psychiatric capacity, so structured rehab usually means travelling" },
  { slug: "kanpur-nagar", name: "Kanpur Nagar", tier: 2, region: "Central UP", travel: "4–5 hours by Vande Bharat/Shatabdi or an overnight train", note: "industrial employment patterns where daily drinking is treated as routine" },
  { slug: "lucknow", name: "Lucknow", tier: 2, region: "Awadh", travel: "under 6 hours by train or a one-hour flight", note: "families who want treatment outside their own social circle for privacy" },
  { slug: "meerut", name: "Meerut", tier: 2, region: "Western UP", travel: "1.5–2 hours by Delhi–Meerut Expressway or RRTS", note: "very early intervention is realistic because travel is short and repeatable" },
  { slug: "moradabad", name: "Moradabad", tier: 2, region: "Rohilkhand", travel: "3.5–4 hours by road or a direct train", note: "export-unit work cycles with cash-in-hand income that funds daily use" },
  { slug: "saharanpur", name: "Saharanpur", tier: 2, region: "Upper Doab", travel: "3.5–4 hours by road via Yamunanagar or a direct train", note: "opioid and smack availability along the interstate belt" },
  { slug: "varanasi", name: "Varanasi", tier: 2, region: "Purvanchal", travel: "an overnight train or a 1.5-hour flight to Delhi", note: "long-standing cannabis normalisation that delays families from calling it addiction" },
];

const T3_RAW: Array<[string, string, string, string]> = [
  ["Ambedkar Nagar", "Purvanchal", "overnight train via Ayodhya or Faizabad junction", "young men leaving for work early and returning with untreated dependence"],
  ["Amethi", "Awadh", "train from Rae Bareli or Sultanpur, then Delhi", "small-town privacy concerns that make local treatment uncomfortable"],
  ["Amroha", "Rohilkhand", "3–4 hours by road or a direct Moradabad-line train", "household alcohol use that families discover late"],
  ["Auraiya", "Central UP", "road to Kanpur or Etawah, then train to Delhi", "highway-corridor access to cheap liquor and pills"],
  ["Azamgarh", "Purvanchal", "an overnight train to Delhi", "long migration cycles that interrupt any local follow-up"],
  ["Baghpat", "Western UP", "1.5–2 hours by road to Delhi NCR", "close enough for family visits during treatment"],
  ["Bahraich", "Awadh terai", "train via Gonda or Lucknow to Delhi", "limited district psychiatric services for withdrawal management"],
  ["Ballia", "Purvanchal", "an overnight train via Varanasi to Delhi", "returning migrant workers presenting with severe dependence"],
  ["Balrampur", "Awadh terai", "train via Gonda, then Delhi", "cross-border substance movement in the terai belt"],
  ["Banda", "Bundelkhand", "train via Jhansi or Mahoba to Delhi", "agricultural distress that pushes drinking into daily routine"],
  ["Barabanki", "Awadh", "train via Lucknow, under 8 hours to Delhi", "families who want treatment away from their own neighbourhood"],
  ["Basti", "Purvanchal", "an overnight train on the Gorakhpur line", "delayed diagnosis of dual conditions such as depression with alcohol use"],
  ["Bhadohi", "Purvanchal", "train via Varanasi or Prayagraj to Delhi", "carpet-industry piece-rate work with irregular income and use"],
  ["Bijnor", "Rohilkhand", "3–4 hours by road via Meerut to NCR", "young adults commuting to NCR and picking up use there"],
  ["Budaun", "Rohilkhand", "road to Bareilly, then train to Delhi", "joint families able to support a longer residential program"],
  ["Bulandshahr", "Western UP", "2–2.5 hours by road via Yamuna Expressway", "short travel time that supports family therapy sessions"],
  ["Chandauli", "Purvanchal", "train via Varanasi to Delhi", "transport-corridor work where drinking is treated as normal"],
  ["Chitrakoot", "Bundelkhand", "train via Banda or Prayagraj to Delhi", "very limited local rehabilitation capacity"],
  ["Deoria", "Purvanchal", "an overnight train via Gorakhpur", "migration-linked relapse after short local abstinence"],
  ["Etah", "Braj region", "road to Agra or Aligarh, then to NCR", "prescription-drug misuse without medical supervision"],
  ["Etawah", "Central UP", "train on the Delhi–Kanpur line", "highway-belt availability of alcohol and opioids"],
  ["Ayodhya", "Awadh", "an overnight train or road via Lucknow", "families seeking confidential care outside a close-knit city"],
  ["Farrukhabad", "Central UP", "train via Kanpur or Kannauj to Delhi", "hidden household drinking that surfaces during health emergencies"],
  ["Fatehpur", "Central UP", "train on the Kanpur–Prayagraj–Delhi line", "late presentation with liver and withdrawal complications"],
  ["Ghazipur", "Purvanchal", "an overnight train via Varanasi", "returning workers needing supervised detox"],
  ["Gonda", "Awadh", "a direct overnight train to Delhi", "few structured aftercare options within the district"],
  ["Hamirpur", "Bundelkhand", "road to Kanpur or Jhansi, then train", "seasonal income cycles that affect treatment planning"],
  ["Hapur", "Western UP", "under 2 hours by road to Delhi NCR", "quick access for both admission and family sessions"],
  ["Hardoi", "Awadh", "train via Lucknow or Shahjahanpur to Delhi", "young adults with cannabis and alcohol co-use"],
  ["Hathras", "Braj region", "road via Aligarh or Agra to NCR", "students and first-time treatment seekers"],
  ["Jalaun", "Bundelkhand", "train via Orai and Jhansi to Delhi", "distance from psychiatric services delaying detox"],
  ["Jaunpur", "Purvanchal", "an overnight train via Varanasi or Prayagraj", "families managing repeated relapses without a plan"],
  ["Kannauj", "Central UP", "train via Kanpur to Delhi", "small-industry workforce with routine evening drinking"],
  ["Kanpur Dehat", "Central UP", "road to Kanpur, then train to Delhi", "rural households with little addiction awareness"],
  ["Kasganj", "Braj region", "train via Mathura or road via Aligarh", "adolescent inhalant and cannabis use"],
  ["Kaushambi", "Purvanchal", "train via Prayagraj to Delhi", "low-cost liquor access and daily-wage work patterns"],
  ["Lakhimpur Kheri", "Awadh terai", "train via Lucknow or road to Delhi", "agricultural-belt alcohol dependence across generations"],
  ["Kushinagar", "Purvanchal", "train via Gorakhpur to Delhi", "migration to metros followed by relapse on return"],
  ["Lalitpur", "Bundelkhand", "train via Jhansi to Delhi", "distance from any residential rehabilitation facility"],
  ["Maharajganj", "Purvanchal", "train via Gorakhpur to Delhi", "border-belt substance availability"],
  ["Mahoba", "Bundelkhand", "train via Jhansi or Banda to Delhi", "mining-work income patterns tied to drinking"],
  ["Mainpuri", "Braj region", "road via Etawah or Agra, then to NCR", "families needing help to convince a reluctant patient"],
  ["Mathura", "Braj region", "2–3 hours by Yamuna Expressway or train", "short travel allowing weekly family involvement"],
  ["Mau", "Purvanchal", "an overnight train via Varanasi", "powerloom shift work with normalised alcohol use"],
  ["Mirzapur", "Purvanchal", "train via Prayagraj or Varanasi to Delhi", "limited detox facilities within the district"],
  ["Muzaffarnagar", "Upper Doab", "2–2.5 hours by road to Delhi NCR", "opioid and smack use along the highway belt"],
  ["Pilibhit", "Rohilkhand", "train via Bareilly to Delhi", "long-standing rural alcohol dependence"],
  ["Pratapgarh", "Awadh", "an overnight train via Prayagraj or Lucknow", "families seeking discreet out-of-district care"],
  ["Rae Bareli", "Awadh", "a direct train to Delhi via Lucknow", "industrial-township drinking culture"],
  ["Rampur", "Rohilkhand", "road via Moradabad or a direct train to Delhi", "household-level alcohol dependence in joint families"],
  ["Sambhal", "Rohilkhand", "road via Moradabad to NCR", "young adults with cannabis and tobacco co-dependence"],
  ["Sant Kabir Nagar", "Purvanchal", "train via Khalilabad and Gorakhpur", "few counselling services locally"],
  ["Shahjahanpur", "Rohilkhand", "a direct train on the Delhi–Lucknow line", "cantonment-area alcohol availability"],
  ["Shamli", "Upper Doab", "under 3 hours by road to Delhi NCR", "sugar-belt seasonal work and heavy drinking"],
  ["Shravasti", "Awadh terai", "train via Balrampur or Gonda to Delhi", "very limited district-level psychiatric access"],
  ["Siddharth Nagar", "Purvanchal", "train via Gorakhpur to Delhi", "border-belt availability of opioids"],
  ["Sitapur", "Awadh", "train via Lucknow to Delhi", "families discovering dependence during a medical crisis"],
  ["Sonbhadra", "Purvanchal", "train via Mirzapur or Varanasi to Delhi", "industrial and mining shift work with routine drinking"],
  ["Sultanpur", "Awadh", "an overnight train to Delhi", "repeated relapse without structured aftercare"],
  ["Unnao", "Central UP", "train via Kanpur or Lucknow to Delhi", "tannery and factory work with normalised alcohol use"],
];

const slugify = (n: string) =>
  n
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const T3: UPCity[] = T3_RAW.map(([name, region, travel, note]) => ({
  slug: slugify(name),
  name,
  tier: 3,
  region,
  travel,
  note,
}));

export const UP_CITIES: UPCity[] = [...T2, ...T3];
export const UP_TIER2 = T2;
export const UP_TIER3 = T3;

export const findUPCity = (slug: string) => UP_CITIES.find((c) => c.slug === slug);

const shortName = (c: UPCity) => c.name.replace(/\s*\(.*?\)\s*/, "");

/** Deterministic per-city variation so no two pages read the same. */
const pick = <T,>(arr: T[], seed: number) => arr[seed % arr.length];
const seedOf = (slug: string) => slug.split("").reduce((a, ch) => a + ch.charCodeAt(0), 0);

export function cityIntro(c: UPCity) {
  const n = shortName(c);
  const s = seedOf(c.slug);
  const openers = [
    `Families in ${n} often try to manage alcohol or drug dependence at home for years before asking for clinical help.`,
    `Most enquiries we receive from ${n} start with a family member, not the patient — usually after a health scare or a financial crisis.`,
    `In ${n}, addiction is frequently treated as a discipline problem long before anyone calls it a medical condition.`,
    `By the time a family from ${n} reaches out, there have usually been several failed attempts at stopping without medical support.`,
  ];
  const middles = [
    `${n} sits in the ${c.region}, where structured residential de-addiction capacity is limited and withdrawal is rarely managed under supervision.`,
    `Because ${n} falls in the ${c.region}, options for psychiatrist-led residential rehabilitation are thin, and detox is often attempted unsafely at home.`,
    `Local outpatient care in the ${c.region} can help, but it rarely provides the round-the-clock supervision that moderate to severe dependence needs.`,
  ];
  const closers = [
    `DeAddictify connects ${n} families to affiliated de-addiction and psychiatric centres in Delhi NCR, where medical detox, therapy and aftercare run as one continuous program.`,
    `We help ${n} families move to a supervised Delhi NCR program — assessment first, then detox, therapy, family counselling and long-term monitoring.`,
    `Through DeAddictify, patients from ${n} are assessed and admitted to partner de-addiction centres across Delhi NCR, with the family kept involved throughout.`,
  ];
  return [pick(openers, s), pick(middles, s + 1), pick(closers, s + 2)];
}

export function cityWhyDelhi(c: UPCity) {
  const n = shortName(c);
  return [
    {
      title: "Distance helps recovery",
      body: `Leaving ${n} during treatment breaks contact with the people, places and suppliers tied to daily use — one of the strongest predictors of early relapse.`,
    },
    {
      title: "Psychiatrist-led supervision",
      body: `Withdrawal from alcohol and opioids can be medically risky. Partner centres in Delhi NCR provide 24-hour monitoring and psychiatric review that most ${c.region} districts cannot offer locally.`,
    },
    {
      title: "Dual diagnosis handled together",
      body: `Depression, anxiety, bipolar disorder and psychosis often sit underneath addiction. Delhi NCR centres treat both together instead of referring the patient elsewhere.`,
    },
    {
      title: "Privacy for the family",
      body: `Treatment outside ${n} keeps the family's situation away from neighbours, workplaces and extended relatives — a common reason ${n} families delay getting help.`,
    },
    {
      title: "Travel is practical",
      body: `Reaching Delhi NCR from ${n} typically means ${c.travel}, so admission and family visits stay workable.`,
    },
    {
      title: "Aftercare continues at home",
      body: `After discharge, follow-up counselling and relapse-prevention check-ins continue online so recovery does not stop when the patient returns to ${n}.`,
    },
  ];
}

export function cityJourney(c: UPCity) {
  const n = shortName(c);
  return [
    { step: "1", title: "Free confidential call", body: `Speak to a recovery counsellor from ${n} — no cost, no judgment. We listen to the history and current risk.` },
    { step: "2", title: "Clinical assessment", body: `Severity, withdrawal risk, relapse history and any mental-health condition are assessed before a program length is suggested.` },
    { step: "3", title: "Travel & admission planning", body: `We plan the move from ${n} to Delhi NCR — ${c.travel} — and arrange admission at a suitable partner centre.` },
    { step: "4", title: "Medical detox & therapy", body: `Supervised detox, psychiatric care, individual and group counselling, and family sessions inside a structured routine.` },
    { step: "5", title: "Return & aftercare", body: `A written relapse-prevention plan, online follow-ups and family check-ins support the patient back in ${n}.` },
  ];
}

export function cityFAQ(c: UPCity): [string, string][] {
  const n = shortName(c);
  const s = seedOf(c.slug);
  const costLine = pick(
    [
      `Programs start at ₹5,999 per day for the 90-day plan. Shorter programs cost more per day. Travel from ${n} is arranged by the family, and the final estimate is shared only after clinical assessment.`,
      `The 90-day program is the most affordable per day at ₹5,999; 14-day care is the highest per day. Families from ${n} receive a written estimate after assessment, before admission.`,
    ],
    s,
  );
  return [
    [
      `Is there a de-addiction centre in ${n}?`,
      `DeAddictify does not run a facility inside ${n}. We assess patients from ${n} and admit them to affiliated psychiatrist-led de-addiction and rehabilitation centres in Delhi NCR, where medical detox and residential therapy are available under supervision.`,
    ],
    [
      `Why should a patient from ${n} travel to Delhi NCR for rehab?`,
      `Two reasons: clinical depth and distance. Delhi NCR partner centres offer 24-hour medical monitoring, psychiatric care and dual-diagnosis treatment. Moving away from ${n} also removes the daily triggers and suppliers that make early recovery fail.`,
    ],
    [
      `How does a family from ${n} reach the centre?`,
      `Most families travel via ${c.travel}. Once assessment is done, our counsellor helps you plan the day of travel and coordinates the admission so there is no waiting on arrival.`,
    ],
    [
      `What does treatment cost for a patient from ${n}?`,
      costLine,
    ],
    [
      `Can we get emergency admission from ${n}?`,
      `Yes, emergency admission assistance is available subject to clinical screening and bed availability. Call the helpline first so a counsellor can judge withdrawal risk before you begin the journey from ${n}.`,
    ],
    [
      `Will anyone in ${n} find out about the treatment?`,
      `No. Enquiries, counselling records and admission details are kept strictly confidential. Treating outside ${n} is one of the reasons many families choose a Delhi NCR program.`,
    ],
    [
      `The patient from ${n} refuses treatment. What can we do?`,
      `This is the most common situation we handle. Families in ${n} usually begin with a counsellor-led family session — either on the phone or online — to plan a calm, non-confrontational intervention instead of forcing admission.`,
    ],
    [
      `Which addictions are treated for patients from ${n}?`,
      `Alcohol, cannabis, heroin and smack, cocaine, prescription-drug and multiple-substance dependence, along with dual diagnosis such as alcohol with depression, anxiety, bipolar disorder or schizophrenia.`,
    ],
    [
      `How long will the patient stay away from ${n}?`,
      `Programs run 14, 30, 60 or 90 days. Severity, withdrawal history and past relapses decide the length. Families from ${n} dealing with repeated relapse are usually advised 60 to 90 days.`,
    ],
    [
      `Can the family from ${n} visit during treatment?`,
      `Yes, within the centre's visiting and therapy schedule. Since travel from ${n} usually means ${c.travel}, family therapy sessions are often scheduled together with a visit, or held online.`,
    ],
    [
      `What happens after the patient returns to ${n}?`,
      `Aftercare continues remotely — relapse-prevention counselling, periodic reviews and family check-ins — so support does not end at discharge.`,
    ],
    [
      `Is online counselling available in ${n} before admission?`,
      `Yes. Initial counselling and family guidance for ${n} are available by phone or video, and many families use this stage to prepare the patient for admission.`,
    ],
  ];
}

export function cityTestimonials(c: UPCity) {
  const n = shortName(c);
  const s = seedOf(c.slug);
  const a = pick(
    [
      {
        quote: `We had tried everything in ${n} — local doctors, promises, a few sober weeks, then the same cycle. Shifting him to a Delhi NCR centre was the first time detox happened under proper medical supervision. He completed the 90-day program and has been sober since.`,
        who: `Brother of a patient · ${n}`,
      },
      {
        quote: `My husband's drinking had reached a point where his liver reports frightened us. The counsellor spoke to us from ${n} for almost an hour before we agreed to travel. Ninety days later he came home a different person — and the follow-up calls still continue.`,
        who: `Wife of a patient · ${n}`,
      },
      {
        quote: `Nobody in ${n} was supposed to know. That was our only condition. The team respected it completely, arranged admission in Delhi NCR quietly, and treated my son's depression along with the addiction.`,
        who: `Mother of a patient · ${n}`,
      },
    ],
    s,
  );
  const b = pick(
    [
      {
        quote: `I was using smack for six years in ${n} and had convinced myself I could stop alone. The 60-day program in Delhi NCR gave me structure, therapy and people who had been where I was. I finished treatment and I'm working again.`,
        who: `Recovered patient · ${n}`,
      },
      {
        quote: `Leaving ${n} was the part I resisted most, and it turned out to be the part that worked. Away from my old circle, detox and counselling finally held. I'm past a year of sobriety with monthly follow-ups.`,
        who: `Recovered patient · ${n}`,
      },
      {
        quote: `After two relapses in ${n}, my family chose a longer program in Delhi NCR. The family therapy sessions changed how we speak to each other at home — that is what has kept me sober after discharge.`,
        who: `Recovered patient · ${n}`,
      },
    ],
    s + 1,
  );
  return [a, b];
}

export function cityLocalSubstances(c: UPCity) {
  const n = shortName(c);
  return `Enquiries from ${n} most often involve alcohol dependence, followed by cannabis, smack or heroin, and prescription-drug misuse. What we see locally reflects ${c.note}.`;
}
