export const PHONE = "+91-9999999999";
export const PHONE_DISPLAY = "+91 99999 99999";
export const WHATSAPP = "919999999999";
export const WHATSAPP_MSG = "Hi%20DeAddictify%2C%20I%20would%20like%20a%20free%20confidential%20counselling.";

export const waLink = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;
export const telLink = `tel:${PHONE.replace(/[^+\d]/g, "")}`;

export const CITIES = [
  { slug: "delhi", name: "Delhi" },
  { slug: "noida", name: "Noida" },
  { slug: "greater-noida", name: "Greater Noida" },
  { slug: "ghaziabad", name: "Ghaziabad" },
  { slug: "faridabad", name: "Faridabad" },
  { slug: "gurugram", name: "Gurugram" },
];

export const CONDITIONS = [
  { slug: "alcohol-addiction", name: "Alcohol Addiction" },
  { slug: "drug-addiction", name: "Drug Addiction" },
  { slug: "cannabis-addiction", name: "Cannabis Addiction" },
  { slug: "heroin-addiction", name: "Heroin Addiction" },
  { slug: "smack-addiction", name: "Smack Addiction" },
  { slug: "cocaine-addiction", name: "Cocaine Addiction" },
  { slug: "prescription-drug-addiction", name: "Prescription Drug Addiction" },
  { slug: "multiple-substance-abuse", name: "Multiple Substance Abuse" },
  { slug: "dual-diagnosis", name: "Dual Diagnosis" },
  { slug: "alcohol-depression", name: "Alcohol & Depression" },
  { slug: "alcohol-anxiety", name: "Alcohol & Anxiety" },
  { slug: "alcohol-bipolar-disorder", name: "Alcohol & Bipolar Disorder" },
  { slug: "alcohol-schizophrenia", name: "Alcohol & Schizophrenia" },
];

export const SERVICES = [
  { slug: "medical-detoxification", name: "Medical Detoxification" },
  { slug: "psychiatric-care", name: "Psychiatric Care" },
  { slug: "clinical-psychology", name: "Clinical Psychology" },
  { slug: "individual-counselling", name: "Individual Counselling" },
  { slug: "group-therapy", name: "Group Therapy" },
  { slug: "family-therapy", name: "Family Therapy" },
  { slug: "relapse-prevention", name: "Relapse Prevention" },
  { slug: "occupational-rehabilitation", name: "Occupational Rehabilitation" },
  { slug: "aftercare-program", name: "Aftercare Program" },
];

export const FAMILY_PAGES = [
  { slug: "how-to-help-an-addicted-loved-one", name: "How To Help An Addicted Loved One" },
  { slug: "my-son-is-addicted-to-drugs", name: "My Son Is Addicted To Drugs" },
  { slug: "my-husband-drinks-too-much", name: "My Husband Drinks Too Much" },
  { slug: "understanding-addiction", name: "Understanding Addiction" },
  { slug: "relapse-management", name: "Relapse Management" },
  { slug: "family-counselling", name: "Family Counselling" },
  { slug: "recovery-after-discharge", name: "Recovery After Discharge" },
];

export const PROGRAMS = [
  {
    days: 14,
    title: "14-Day Intensive Recovery Program",
    best: "Early-stage addiction, first-time treatment seekers, motivated individuals.",
    perDay: 9999,
    total: 139986,
    includes: [
      "Psychiatrist Evaluation",
      "Medical Monitoring",
      "Individual Counselling",
      "Recovery Planning",
      "Family Counselling Session",
      "Structured Daily Routine",
    ],
  },
  {
    days: 30,
    title: "30-Day Residential Recovery Program",
    best: "Moderate addiction, alcohol dependence, drug dependence.",
    perDay: 8999,
    total: 269970,
    includes: [
      "Psychiatrist Supervision",
      "Individual Counselling",
      "Group Therapy",
      "Family Counselling",
      "Recovery Planning",
      "Relapse Prevention",
    ],
  },
  {
    days: 60,
    title: "60-Day Transformation Recovery Program",
    best: "Chronic addiction, multiple relapses, long-term substance abuse.",
    perDay: 7999,
    total: 479940,
    includes: [
      "Extended Psychiatric Care",
      "Intensive Counselling",
      "Behavioural Transformation",
      "Family Recovery Program",
      "Life Skills Training",
      "Relapse Prevention Framework",
    ],
  },
  {
    days: 90,
    title: "90-Day Long-Term Recovery Program",
    badge: "Most Recommended",
    best: "Severe addiction, dual diagnosis, multiple failed recovery attempts.",
    perDay: 5999,
    total: 539910,
    includes: [
      "Comprehensive Recovery Plan",
      "Psychiatrist-Led Care",
      "Individual & Group Counselling",
      "Family Therapy",
      "Relapse Prevention Program",
      "Recovery Reintegration Planning",
      "Long-Term Recovery Framework",
    ],
  },
];

export const HOME_FAQ = [
  ["What is DeAddictify?", "DeAddictify is an affordable alcohol & drug de-addiction, rehabilitation and recovery support platform serving Delhi NCR. We provide psychiatrist-led treatment guidance, admission assistance and family counselling."],
  ["Is DeAddictify a rehab centre?", "DeAddictify is a treatment facilitation and recovery support platform. Treatment is delivered through affiliated rehabilitation, psychiatric and de-addiction partners after clinical assessment."],
  ["How do I know if rehab is required?", "If alcohol or drug use is affecting health, work, relationships, finances or causing withdrawal symptoms, a clinical assessment is recommended. Book a free confidential counselling to know more."],
  ["How long does de-addiction treatment take?", "Programs typically range from 14 to 90 days depending on severity, dual diagnosis and relapse history. Long-term recovery monitoring continues after discharge."],
  ["What is the cost of alcohol rehab?", "Our alcohol rehab programs start at ₹5,999 per day for the 90-day program. Final cost depends on clinical assessment, accommodation and treatment plan."],
  ["What is the cost of drug rehab?", "Drug rehab programs follow the same affordable structure starting at ₹5,999 per day for long-term care. A detailed estimate is shared after assessment."],
  ["Is treatment confidential?", "Yes. All enquiries, counselling and treatment information are kept strictly confidential."],
  ["Can family members speak to a counsellor first?", "Absolutely. Most families begin with a free counsellor consultation to plan the next steps for their loved one."],
  ["Do you help with emergency admission?", "Yes. We offer admission assistance including emergency cases, subject to clinical screening and bed availability."],
  ["What happens after discharge?", "Patients enter our long-term recovery monitoring, aftercare and relapse prevention framework with continued family support."],
  ["Do you support relapse prevention?", "Yes. Relapse prevention is built into every program and continues through aftercare."],
  ["Are programs available in Delhi NCR?", "Yes. We cover Delhi, Noida, Greater Noida, Ghaziabad, Faridabad and Gurugram."],
];

export const GLOBAL_FAQ = [
  ["What is addiction?", "Addiction is a chronic medical condition involving compulsive substance use despite harmful consequences. It is treatable with structured care."],
  ["What are signs of addiction?", "Loss of control, tolerance, withdrawal, neglected responsibilities, secrecy, mood changes and continued use despite harm."],
  ["When is rehab required?", "When outpatient efforts fail, withdrawal risk is high, or daily functioning is impaired. A clinical assessment confirms the right level of care."],
  ["Can addiction be treated?", "Yes. With medical detox, psychiatric care, counselling and family support, recovery is achievable and sustainable."],
  ["Can relapse happen?", "Relapse can happen, especially without aftercare. Our relapse prevention framework reduces this risk substantially."],
  ["How long does treatment take?", "Most patients benefit from 14 to 90 days of structured care followed by long-term recovery monitoring."],
  ["How much does treatment cost?", "Programs start at ₹5,999/day. Final cost depends on assessment, accommodation and program duration."],
  ["Can families participate?", "Yes. Family counselling is part of every program."],
  ["Will treatment remain confidential?", "All information is kept strictly confidential."],
  ["Do you offer emergency admission help?", "Yes, subject to clinical screening and bed availability."],
  ["Do you offer online counselling?", "Yes, online counselling is available for initial consultations and family support."],
  ["What is detoxification?", "Detox is the medically supervised process of safely removing the substance from the body and managing withdrawal."],
  ["What is residential rehabilitation?", "A structured in-patient program combining medical, psychiatric and psychological care in a controlled environment."],
  ["What is relapse prevention?", "A structured plan including therapy, lifestyle changes and ongoing monitoring to prevent return to substance use."],
  ["What is aftercare?", "Continued support after discharge — counselling, family check-ins and recovery monitoring."],
];

export const BLOG_POSTS = [
  { slug: "10-signs-loved-one-needs-de-addiction-help", title: "10 Signs Your Loved One Needs De-Addiction Help", category: "Family Support", excerpt: "Recognising early signs of addiction can save lives. Here's what to look for and when to seek help." },
  { slug: "alcohol-addiction-treatment-options-delhi-ncr", title: "Alcohol Addiction Treatment Options in Delhi NCR", category: "Alcohol Addiction", excerpt: "A clear guide to detox, residential rehab and long-term recovery options available across Delhi NCR." },
  { slug: "drug-rehab-cost-delhi-ncr", title: "Drug Rehab Cost in Delhi NCR", category: "Drug Addiction", excerpt: "Understand what determines the cost of drug rehab and how to choose an affordable, effective program." },
  { slug: "how-to-convince-someone-to-join-rehab", title: "How To Convince Someone To Join Rehab", category: "Family Support", excerpt: "Practical, compassionate strategies for families ready to start the conversation." },
  { slug: "what-happens-during-alcohol-detox", title: "What Happens During Alcohol Detox?", category: "Withdrawal Symptoms", excerpt: "A day-by-day overview of medically supervised alcohol detoxification." },
  { slug: "why-relapse-happens-after-rehab", title: "Why Relapse Happens After Rehab", category: "Relapse Prevention", excerpt: "Common relapse triggers and how a structured aftercare plan keeps recovery on track." },
  { slug: "how-families-can-support-addiction-recovery", title: "How Families Can Support Addiction Recovery", category: "Family Support", excerpt: "The family's role is one of the strongest predictors of long-term recovery." },
  { slug: "difference-between-detox-and-rehabilitation", title: "Difference Between Detox and Rehabilitation", category: "Recovery Tips", excerpt: "Detox is the start. Rehabilitation is the journey. Here's how they fit together." },
  { slug: "14-day-vs-30-day-rehab-program", title: "14-Day vs 30-Day Rehab Program", category: "Recovery Tips", excerpt: "Which program duration fits your loved one's situation? A practical comparison." },
  { slug: "how-to-identify-drug-addiction-in-young-adults", title: "How To Identify Drug Addiction In Young Adults", category: "Drug Addiction", excerpt: "Behavioural, physical and emotional warning signs parents should not ignore." },
];

export const BLOG_CATEGORIES = [
  "Alcohol Addiction",
  "Drug Addiction",
  "Family Support",
  "Recovery Tips",
  "Relapse Prevention",
  "Mental Health & Addiction",
  "Withdrawal Symptoms",
];

export const TRUST_POINTS = [
  "Confidential Care",
  "Affordable Treatment Plans",
  "Psychiatrist Supervision",
  "Family Counselling",
  "Structured Recovery Programs",
  "Delhi NCR Coverage",
];

export const WHY_CHOOSE = [
  "Affordable Programs",
  "Psychiatrist-Led Care",
  "Family Counselling",
  "Confidential Treatment",
  "Admission Assistance",
  "Recovery Monitoring",
  "Delhi NCR Coverage",
  "Structured Rehabilitation",
];

export const DISCLAIMER = "DeAddictify acts as an addiction treatment facilitation and recovery support platform. Treatment services may be provided through affiliated rehabilitation, psychiatric and de-addiction treatment partners where applicable. Admission, treatment plan and duration are subject to clinical assessment by qualified professionals. Pricing, facilities, inclusions and program structure may vary based on individual needs. Terms & Conditions Apply.";
