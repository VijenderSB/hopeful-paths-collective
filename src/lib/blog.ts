import art1 from "@/assets/blog-art1.jpg.asset.json";
import art2 from "@/assets/blog-drug-rehab-cost.jpg.asset.json";
import art3 from "@/assets/blog-art3.jpg.asset.json";
import art4 from "@/assets/blog-alcohol-treatment.jpg.asset.json";
import art5 from "@/assets/blog-art5.jpg.asset.json";
import art6 from "@/assets/blog-art6.jpg.asset.json";
import art7 from "@/assets/blog-art7.jpg.asset.json";
import art8 from "@/assets/blog-art8.jpg.asset.json";
import art9 from "@/assets/blog-art9.jpg.asset.json";
import art10 from "@/assets/blog-art10.jpg.asset.json";
import familyImg from "@/assets/blog-family-signs.jpg.asset.json";

export type BlogBlock = { h?: string; p?: string[]; ul?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  readMins: number;
  body: BlogBlock[];
  faqs: [string, string][];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-de-addiction-centre-delhi-ncr-how-to-choose",
    title: "Best De-Addiction Centre in Delhi NCR: How to Choose the Right One?",
    category: "Recovery Tips",
    excerpt: "Six practical checks families should make before selecting an alcohol or drug de-addiction centre anywhere in Delhi NCR.",
    metaTitle: "Best De-Addiction Centre in Delhi NCR: How to Choose?",
    metaDescription: "Looking for a de-addiction centre in Delhi NCR? Learn what families should check for alcohol or drug addiction treatment, detox, psychiatric care and rehabilitation.",
    image: art1.url,
    imageAlt: "Doctor guiding a family at a de-addiction clinic in Delhi NCR",
    readMins: 7,
    body: [
      {
        h: "How do you choose the right de-addiction centre?",
        p: [
          "The right de-addiction centre in Delhi NCR should do far more than keep a person away from alcohol or drugs. Addiction can involve physical dependence, withdrawal symptoms, cravings, behavioural change, family conflict and associated mental-health conditions, so treatment has to be built around the individual patient.",
          "A comprehensive program may include medical assessment, supervised withdrawal management when required, psychiatric evaluation, medicines where clinically appropriate, psychological interventions, family counselling and relapse-prevention planning.",
        ],
      },
      {
        h: "1. Look for proper medical assessment",
        p: [
          "Before admission the treatment team should understand which substance is being used, how much and how often, how long dependence has existed, previous attempts to stop, earlier withdrawal symptoms, other substance use, medical conditions and mental-health symptoms.",
          "This assessment is what determines whether outpatient treatment may be appropriate or whether inpatient care should be considered.",
        ],
      },
      {
        h: "2. Ask about medically supervised detox",
        p: [
          "Detoxification and rehabilitation are not the same thing. Detox focuses on managing withdrawal and helping a patient become medically stable after reducing or stopping a substance. Rehabilitation addresses the psychological, behavioural, family and social factors behind continued use and relapse.",
          "For some substances, particularly alcohol, withdrawal can occasionally become serious. Patients at risk of severe withdrawal, or those with significant medical or psychiatric illness or inadequate support at home, may need inpatient management.",
        ],
      },
      {
        h: "3. Check for psychiatric support",
        p: [
          "Addiction can coexist with depression, anxiety, bipolar disorder, psychosis and sleep disorders. When substance dependence and another mental-health disorder occur together it is commonly called dual diagnosis, and both conditions need appropriate assessment and treatment.",
        ],
      },
      {
        h: "4. Ask what happens beyond detox",
        p: [
          "Stopping alcohol or drugs is only the beginning of recovery. An effective program should address why the person repeatedly returns to substance use through counselling, motivational interventions, behavioural therapy, medication when appropriate and relapse-prevention strategies.",
        ],
      },
      {
        h: "5. Family involvement matters",
        p: [
          "Addiction rarely affects only one person. Parents, spouses, children and siblings may live with years of arguments, financial strain, broken trust and emotional distress. A structured program should help families understand addiction, recognise triggers, set appropriate boundaries and identify early signs of relapse.",
        ],
      },
      {
        h: "6. Be careful with guaranteed-cure claims",
        p: [
          "Be cautious about promises such as “100% cure in 7 days” or “permanent recovery in 14 days”. Recovery cannot responsibly be guaranteed for every patient within a fixed number of days. A 14-day program may be a useful intensive or stabilisation phase, but longer treatment and follow-up may still be required.",
        ],
      },
      {
        h: "Delhi NCR accessibility",
        p: [
          "For families in Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad, accessibility matters — especially when family counselling and follow-up visits are involved. But location should not be the only criterion. Quality and appropriateness of care matter more than proximity.",
        ],
      },
    ],
    faqs: [
      ["Which de-addiction centre is best in Delhi NCR?", "There is no single centre that is best for everyone. Look for qualified professionals, appropriate withdrawal management, counselling, family involvement and structured aftercare."],
      ["Does everyone need admission?", "No. Some patients can be treated on an outpatient basis, while others benefit from inpatient treatment. A clinical assessment decides this."],
      ["Is detox enough to cure addiction?", "Detox addresses withdrawal and physical stabilisation. Longer-term recovery usually needs psychological, behavioural, pharmacological and social interventions."],
    ],
  },
  {
    slug: "de-addiction-treatment-cost-delhi-ncr",
    title: "How Much Does De-Addiction Treatment Cost in Delhi NCR?",
    category: "Recovery Tips",
    excerpt: "What actually drives rehab pricing, what a package should include, and the questions to ask before you pay a single rupee.",
    metaTitle: "De-Addiction Treatment Cost in Delhi NCR – Complete Guide",
    metaDescription: "What does alcohol or drug de-addiction treatment cost in Delhi NCR? Understand what affects rehab costs and what families should check before admission.",
    image: art2.url,
    imageAlt: "Family discussing affordable de-addiction treatment costs in Delhi NCR",
    readMins: 6,
    body: [
      {
        h: "Is there a standard price?",
        p: [
          "There is no single standard price for de-addiction treatment in Delhi NCR. Cost depends on the patient's condition, the substance involved, treatment setting, duration, accommodation, level of medical supervision and the services included. Comparing centres only by advertised package price is therefore misleading.",
        ],
      },
      {
        h: "What determines the cost?",
        p: [
          "Outpatient and inpatient treatment have very different cost structures. Residential treatment includes accommodation, nursing and facility expenses. The need for medical detoxification, investigations, medication, psychiatric care, treatment duration and room category all affect the final figure.",
          "Families should separate the cost of clinical treatment from the cost of hospitality or premium accommodation.",
        ],
      },
      {
        h: "What should a package include?",
        p: ["Ask for a written breakdown covering:"],
        ul: [
          "Initial medical and psychiatric assessment",
          "Doctor consultations and nursing care",
          "Withdrawal management and medicines",
          "Laboratory investigations",
          "Individual counselling and family sessions",
          "Accommodation and meals",
          "Follow-up consultations and aftercare",
        ],
      },
      {
        h: "Should you choose the cheapest Nasha Mukti Kendra?",
        p: [
          "Not necessarily. Affordability is important, but the lowest price should never override safety and clinical quality. Equally, expensive accommodation does not automatically mean better addiction treatment. Look at the clinical program first and facilities second.",
        ],
      },
      {
        h: "Questions to ask before paying",
        ul: [
          "What exactly is included in the package?",
          "Are medicines and investigations charged separately?",
          "Who will medically assess the patient, and what are their qualifications?",
          "Is psychiatric care included?",
          "How is severe withdrawal handled?",
          "Is family counselling included?",
          "What happens after discharge?",
        ],
      },
      {
        h: "Why treatment can save more than it costs",
        p: [
          "Prolonged addiction creates its own financial damage — lost productivity, employment problems, accidents, medical complications, borrowing, relationship breakdown and continuous spending on the substance itself. Treatment cost should be weighed against the long-term cost of leaving addiction untreated.",
        ],
      },
    ],
    faqs: [
      ["Is a 14-day program cheaper than long-term rehabilitation?", "A shorter residential stay usually costs less, but it may not be clinically appropriate for every patient."],
      ["Does every alcohol-dependent patient need residential rehab?", "No. Appropriate care ranges from structured outpatient treatment to inpatient management."],
      ["What should families compare?", "Clinical supervision, treatment components, psychiatric support, family counselling, aftercare and pricing transparency."],
    ],
  },
  {
    slug: "what-happens-during-14-day-de-addiction-program",
    title: "What Happens During a 14-Day De-Addiction Program?",
    category: "Recovery Tips",
    excerpt: "A stage-by-stage look at a short-term de-addiction program — assessment, withdrawal management, counselling and relapse planning.",
    metaTitle: "14-Day De-Addiction Program: What Happens During Treatment?",
    metaDescription: "Understand what may happen during a 14-day de-addiction program, from medical assessment and withdrawal management to counselling and relapse planning.",
    image: art3.url,
    imageAlt: "Group therapy session during a 14-day de-addiction program",
    readMins: 7,
    body: [
      {
        h: "What is a 14-day de-addiction program?",
        p: [
          "A 14-day program can serve as an intensive initial phase of addiction treatment for carefully selected patients. It should never be presented as a guaranteed 14-day cure. The aim is to assess the patient, safely manage the period after substance cessation, begin psychological treatment, involve the family and build a longer-term recovery plan.",
        ],
      },
      { h: "Stage 1: Comprehensive assessment", p: ["Treatment begins by understanding the substance consumed, quantity and frequency, duration of dependence, last use, previous withdrawal symptoms, earlier treatment attempts, other substance use, medical conditions, mental-health symptoms and current medicines."] },
      { h: "Stage 2: Withdrawal management", p: ["Where physical dependence has developed, stopping can cause withdrawal. Alcohol withdrawal may involve tremors, sweating, anxiety, nausea and disturbed sleep; severe withdrawal can include seizures, marked confusion or delirium. A heavily dependent person should not simply be told to stop at home without assessing risk."] },
      { h: "Stage 3: Physical stabilisation", p: ["Early days focus on monitoring, sleep, nutrition, hydration, prescribed medication and treating associated health problems. As the patient becomes medically stable, attention moves toward psychological recovery."] },
      { h: "Stage 4: Understanding the addiction cycle", p: ["Treatment maps the cycle of trigger, craving, use, temporary relief, negative consequence and renewed trigger. Recognising this pattern is central to preventing relapse."] },
      { h: "Stage 5: Counselling and motivation", p: ["Counselling helps the patient understand how substance use developed, which situations trigger it, its consequences, how to manage cravings, what alternative coping strategies exist and why continuing recovery is worth it."] },
      { h: "Stage 6: Family counselling", p: ["Family sessions cover communication, boundaries, financial control, triggers, enabling behaviours and how to respond if warning signs reappear."] },
      { h: "Stage 7: Relapse prevention", p: ["Before discharge the patient should have a written plan: personal triggers, high-risk situations to avoid, prescribed medication, follow-up consultations, ongoing counselling, family involvement and a clear response plan for cravings or a lapse."] },
      { h: "Is 14 days enough?", p: ["There is no universal answer. For some patients 14 days provides a strong intensive start. Others need longer inpatient care or continuing outpatient rehabilitation. Recovery usually continues well beyond discharge."] },
    ],
    faqs: [
      ["Is 14-day treatment a guaranteed cure?", "No. It is an intensive treatment phase, not a guarantee."],
      ["What happens after 14 days?", "Treatment continues through follow-up consultations, medicines, counselling, family sessions and relapse-prevention support."],
      ["Can someone relapse after a 14-day program?", "Yes, which is exactly why structured aftercare matters."],
    ],
  },
  {
    slug: "how-to-stop-drinking-alcohol-safely",
    title: "How to Stop Drinking Alcohol Safely",
    category: "Alcohol Addiction",
    excerpt: "Why dependent drinkers should not quit suddenly without assessment, and how safe alcohol treatment actually works.",
    metaTitle: "How to Stop Drinking Alcohol Safely – Medical Guide",
    metaDescription: "Want to stop drinking alcohol? Learn why some dependent drinkers should not quit suddenly without medical assessment and how alcohol treatment works.",
    image: art4.url,
    imageAlt: "Doctor consulting a patient about stopping alcohol safely",
    readMins: 6,
    body: [
      {
        h: "Can you simply stop drinking?",
        p: [
          "For an occasional drinker, stopping alcohol may cause no significant withdrawal. But a person who has developed alcohol dependence can experience withdrawal symptoms and, in some cases, serious complications. For a heavy or dependent drinker the safest first step is medical assessment — not unsupervised detoxification.",
        ],
      },
      {
        h: "Signs that dependence may have developed",
        ul: [
          "Drinking every day or almost every day",
          "Needing larger quantities for the same effect",
          "Morning drinking and strong cravings",
          "Trembling, sweating or anxiety when alcohol is unavailable",
          "Difficulty sleeping without alcohol",
          "Repeated failed attempts to quit",
          "Continuing to drink despite health, family or work problems",
        ],
      },
      { h: "What happens when alcohol is stopped?", p: ["Withdrawal can include tremors, sweating, anxiety, irritability, nausea, headache, insomnia, raised pulse and agitation. Some individuals develop more serious complications such as seizures or delirium."] },
      { h: "Who may need supervised withdrawal?", p: ["Medical supervision matters most where there is a history of severe withdrawal or seizures, significant physical illness, psychiatric illness, heavy dependence, multiple substance use or inadequate support at home. The right setting should be decided by a healthcare professional."] },
      { h: "Detox is only the first step", p: ["Physical withdrawal and addiction recovery are different problems. Once withdrawal settles, the reasons behind repeated drinking still need work — usually a combination of counselling and other psychosocial interventions, with medicines where clinically appropriate."] },
      { h: "Identify your drinking triggers", p: ["Common triggers include stress, arguments, loneliness, social gatherings, particular friends, salary day, work pressure, poor sleep, anxiety and easy access to alcohol. Naming your own triggers lets a recovery plan be built around them."] },
      { h: "Family support", p: ["Families should support treatment but must not prescribe medicines or attempt a risky detox themselves. A spouse or parent can arrange assessment, attend family counselling and support adherence to the plan."] },
      { h: "When to seek urgent medical attention", p: ["Seizures, severe confusion, hallucinations, marked agitation, loss of consciousness or rapidly worsening physical symptoms after stopping alcohol need urgent medical evaluation."] },
    ],
    faqs: [
      ["Can I stop alcohol at home?", "Some people can; others should not attempt unsupervised withdrawal. Risk depends on severity of dependence and health status."],
      ["How long does alcohol withdrawal last?", "The course varies between individuals and should be monitored clinically."],
      ["Is willpower enough?", "Addiction is not simply weak willpower. It often needs medical, psychological and social interventions together."],
    ],
  },
  {
    slug: "alcohol-withdrawal-symptoms-when-dangerous",
    title: "Alcohol Withdrawal Symptoms: When Can They Become Dangerous?",
    category: "Withdrawal Symptoms",
    excerpt: "Common withdrawal symptoms, the warning signs of severe withdrawal, and when someone needs urgent medical care.",
    metaTitle: "Alcohol Withdrawal Symptoms: Signs, Risks & Treatment",
    metaDescription: "Learn common alcohol withdrawal symptoms, warning signs of severe withdrawal and when someone stopping alcohol may need urgent medical care.",
    image: art5.url,
    imageAlt: "Medical monitoring of a patient during alcohol withdrawal",
    readMins: 6,
    body: [
      { h: "What is alcohol withdrawal?", p: ["Alcohol withdrawal can occur when someone who has developed dependence suddenly stops or substantially reduces drinking. Symptoms range from mild discomfort to potentially serious complications."] },
      { h: "Common symptoms", ul: ["Shaking hands and sweating", "Anxiety and restlessness", "Headache, nausea or vomiting", "Difficulty sleeping", "Increased heart rate and irritability"] },
      { h: "Severe alcohol withdrawal", p: ["Some patients develop dangerous complications. Warning signs include seizures, severe confusion, hallucinations, extreme agitation, disorientation and significant physical deterioration. These require urgent medical evaluation."] },
      { h: "Who is at higher risk?", p: ["A clinician will consider previous withdrawal complications, the amount and duration of drinking, coexisting medical illness, psychiatric illness, other substance use and the level of support at home."] },
      { h: "Why cold turkey can be risky", p: ["Families sometimes remove all alcohol and tell a heavily dependent person to stop immediately. The intention is understandable, but abrupt cessation without assessing withdrawal risk is not safe for everyone. Higher-risk patients may need medically supervised or inpatient withdrawal management."] },
      { h: "How is withdrawal managed?", p: ["Management depends on severity and individual medical needs, and can involve monitoring, supportive care, appropriate medication and nutritional measures. Medicines and doses must be decided by qualified clinicians, never through self-medication."] },
      { h: "Withdrawal treatment is not complete addiction treatment", p: ["Once withdrawal improves, the question becomes how to prevent a return to alcohol. That usually involves psychological interventions, medication where appropriate, trigger management, family involvement and relapse-prevention planning."] },
    ],
    faqs: [
      ["Can alcohol withdrawal cause seizures?", "Yes, in some patients — which is why risk assessment before stopping matters."],
      ["Are hallucinations after stopping alcohol normal?", "They can occur in serious withdrawal states and need urgent assessment."],
      ["Can withdrawal be treated at home?", "Some lower-risk patients can be managed outside hospital under professional guidance; higher-risk patients may require inpatient care."],
    ],
  },
  {
    slug: "can-alcohol-addiction-be-treated-at-home",
    title: "Can Alcohol Addiction Be Treated at Home?",
    category: "Alcohol Addiction",
    excerpt: "When structured outpatient care is reasonable, when admission is safer, and why DIY detox is a bad idea.",
    metaTitle: "Can Alcohol Addiction Be Treated at Home or Is Rehab Needed?",
    metaDescription: "Can alcohol addiction be treated at home? Learn when outpatient treatment may work and when supervised detox or inpatient treatment may be safer.",
    image: art6.url,
    imageAlt: "Outpatient consultation for alcohol treatment at home",
    readMins: 6,
    body: [
      { h: "Is home treatment possible?", p: ["Some people with alcohol-use problems can be treated without residential admission. But home treatment is not suitable for every patient. The real question is whether it is safe and appropriate for this particular patient."] },
      { h: "When outpatient treatment may be considered", p: ["A clinician weighs severity of dependence, withdrawal risk, physical health, psychiatric condition, previous treatment history and the support available at home. Patients who are clinically stable with adequate support can sometimes be managed through structured outpatient care."] },
      { h: "When admission may be preferable", ul: ["Risk of severe withdrawal", "Significant medical illness", "Serious psychiatric symptoms", "Repeated failed outpatient attempts", "Multiple substance use", "An unsafe or unsupportive home environment"] },
      { h: "The problem with DIY detox", p: ["Home treatment must never mean buying sedatives without prescription, using someone else's medication, locking the patient in a room, abruptly removing alcohol without assessing dependence, physically restraining the patient or assuming sleeping pills will solve addiction. Medical detoxification requires clinical judgement."] },
      { h: "What can outpatient treatment include?", ul: ["Doctor consultations and prescribed medication", "Psychiatric assessment", "Psychological therapy and motivational counselling", "Family counselling", "Regular monitoring and follow-up", "Relapse-prevention planning"] },
      { h: "What can family members do?", p: ["Families can help the patient attend appointments, follow prescribed treatment, avoid known triggers and maintain a stable environment. They should also learn the warning signs that require escalation to medical care."] },
    ],
    faqs: [
      ["Does every alcoholic need rehab?", "No. The appropriate level of care is decided by clinical assessment."],
      ["Can medicines cure alcohol addiction at home?", "Medication may be one component, but treatment usually also needs psychological and behavioural interventions."],
      ["When should we consider admission?", "When withdrawal risk, physical health, psychiatric condition or the home environment make outpatient care unsafe."],
    ],
  },
  {
    slug: "my-husband-drinks-every-day-does-he-need-treatment",
    title: "My Husband Drinks Every Day – Does He Need De-Addiction Treatment?",
    category: "Family Support",
    excerpt: "Warning signs of dependence, what a wife can realistically do, and when to seek a professional assessment.",
    metaTitle: "My Husband Drinks Every Day – Is He Addicted to Alcohol?",
    metaDescription: "If your husband drinks alcohol every day, learn the warning signs of dependence, how family members can respond and when to seek professional help.",
    image: art7.url,
    imageAlt: "Worried wife at home while husband drinks alcohol",
    readMins: 6,
    body: [
      { h: "Does daily drinking mean addiction?", p: ["Not every daily drinker has the same level of dependence. But daily drinking — particularly with loss of control, cravings, withdrawal symptoms or family and work problems — is a strong reason to seek professional assessment."] },
      { h: "Warning signs families should notice", ul: ["Drinks more than he intended", "Cannot reduce despite trying", "Drinks in the morning or hides alcohol", "Becomes shaky without alcohol", "Gets angry when questioned", "Neglects responsibilities", "Financial problems because of alcohol", "Repeatedly promises to quit but restarts"] },
      { h: "He says he can stop whenever he wants", p: ["Rather than arguing about whether he is “an alcoholic”, focus on observable consequences: “Alcohol is affecting your health, sleep, work and our family. We want you to speak with a professional.” Specific observations are more constructive than accusation or humiliation."] },
      { h: "Should you force him to stop suddenly?", p: ["If significant dependence is present, stopping abruptly without assessing withdrawal risk may be unsafe. Arrange a professional assessment first."] },
      { h: "Why does he keep drinking despite family problems?", p: ["Addiction progressively alters behaviour, motivation and decision-making. Continued use is not proof that he does not love his family. Understanding this does not mean tolerating violence, financial exploitation or unsafe behaviour — boundaries still matter."] },
      { h: "What can a wife do?", ul: ["Choose a sober moment for any serious conversation", "Describe specific problems alcohol has caused", "Avoid arguing while he is intoxicated", "Encourage a professional assessment", "Involve trusted family members where appropriate", "Attend family counselling", "Protect yourself and your children if behaviour becomes unsafe"] },
      { h: "Treatment", p: ["Depending on severity, treatment may involve outpatient care, medically supervised withdrawal, medication, counselling, psychiatric treatment or residential rehabilitation."] },
    ],
    faqs: [
      ["Can I secretly give medicine to stop his drinking?", "No. Medication should never be administered secretly or without medical guidance."],
      ["Does he need admission?", "Not necessarily — an assessment decides the appropriate level of care."],
      ["What if he refuses?", "A family consultation can help you build a structured approach to encouraging treatment."],
    ],
  },
  {
    slug: "how-to-convince-someone-with-addiction-to-get-treatment",
    title: "How Do You Convince Someone With Addiction to Get Treatment?",
    category: "Family Support",
    excerpt: "A six-step, non-confrontational approach families can use to move a loved one toward a first professional assessment.",
    metaTitle: "How to Convince Someone With Addiction to Get Treatment",
    metaDescription: "A practical guide for families trying to convince someone with alcohol or drug addiction to accept treatment or rehabilitation.",
    image: art8.url,
    imageAlt: "Family member gently encouraging a loved one to seek addiction treatment",
    readMins: 6,
    body: [
      { h: "Why do people with addiction refuse treatment?", p: ["Refusal often comes from denial, fear of withdrawal, shame, stigma, earlier negative experiences, fear of losing work, or genuine belief that the problem is not serious. Repeated shouting rarely resolves any of these."] },
      { h: "Step 1: Choose the right time", p: ["Do not attempt a serious conversation while the person is heavily intoxicated or while everyone is angry. Choose a calmer period."] },
      { h: "Step 2: Discuss consequences, not labels", p: ["Instead of “you are an addict”, describe specifics: “In the last six months alcohol has affected your health, your work and our relationship. We want you to get assessed.” Observations are harder to dismiss than labels."] },
      { h: "Step 3: Start with assessment, not rehab", p: ["The word rehab frightens many patients. The first request can simply be: “Let's speak to a doctor and find out whether admission is even needed.” This lowers the psychological barrier."] },
      { h: "Step 4: Listen to their concerns", p: ["Ask what worries them about treatment. The answer often reveals a solvable issue — work, cost, withdrawal, confidentiality or fear of being confined."] },
      { h: "Step 5: Set boundaries", p: ["Supporting someone does not require financing substance use or repeatedly covering up its consequences. Family counselling helps relatives tell support apart from enabling."] },
      { h: "Step 6: Offer a concrete next step", p: ["Rather than “you need treatment someday”, offer a specific action — an appointment on a specific day. A concrete next step is far easier to accept."] },
      { h: "What if they still say no?", p: ["Change takes time. Families can get professional guidance before the patient agrees to anything; a clinician or counsellor can help build a structured engagement strategy."] },
    ],
    faqs: [
      ["Can counselling help someone who does not want rehab?", "Yes, motivational work can build readiness for treatment over time."],
      ["Should the entire family confront the patient?", "Large confrontations can be counterproductive. A calm, planned conversation usually works better."],
      ["Should we threaten divorce or police action?", "Threats made only to force treatment tend to escalate conflict, though genuine safety or legal concerns need appropriate action."],
    ],
  },
  {
    slug: "what-if-a-dependent-person-refuses-treatment",
    title: "What If an Alcohol or Drug-Dependent Person Refuses Treatment?",
    category: "Family Support",
    excerpt: "Practical options for families when a loved one says “I don't have a problem” — including when refusal becomes an emergency.",
    metaTitle: "What If an Addicted Person Refuses Treatment?",
    metaDescription: "What can families do when someone with alcohol or drug dependence refuses rehab? Learn practical ways to encourage assessment and treatment.",
    image: art9.url,
    imageAlt: "Young man refusing help while concerned parents look on",
    readMins: 6,
    body: [
      { h: "Treatment refusal is common", p: ["One of the hardest situations for a family is knowing someone needs help while hearing “I don't have a problem”. Refusal does not mean nothing can be done — it means the family's strategy needs to change."] },
      { h: "Understand why the person is refusing", ul: ["Denial or low motivation", "Fear of withdrawal or hospitalisation", "Stigma and shame", "Fear of losing employment", "Financial worry", "Previous unsuccessful treatment", "Untreated psychiatric symptoms"] },
      { h: "Stop repeating the same argument", p: ["If the same confrontation has already happened many times without result, repeating it will not produce a different outcome. Shift from accusation to consequences and solutions."] },
      { h: "Ask for one consultation", p: ["Instead of demanding a month-long admission, ask for a single assessment. A clinician can then explain the options, and some patients will not need residential treatment at all."] },
      { h: "Family members can seek help first", p: ["A spouse, parent or sibling can consult an addiction professional even while the patient refuses, and discuss behaviour, use patterns, safety concerns and previous attempts to learn how to approach the person."] },
      { h: "Establish boundaries", p: ["Families sometimes unintentionally soften the consequences of addiction by giving money, making excuses at work, repeatedly paying debts or hiding the problem. Professional family counselling helps define healthier boundaries."] },
      { h: "When is it an emergency?", p: ["Routine refusal and a medical or psychiatric emergency are different situations. Seizures, unconsciousness, severe confusion, hallucinations, self-harm risk, extreme behavioural disturbance or other acute problems require urgent assessment."] },
      { h: "Can you force someone into rehab?", p: ["Legal and ethical questions around involuntary treatment are complex and depend on the person's condition and applicable law. Families should take professional or legal guidance rather than assuming addiction alone permits forced admission."] },
    ],
    faqs: [
      ["Should we wait until the patient agrees?", "No — you can begin by seeking professional advice for the family itself."],
      ["Should we stop giving the patient money?", "Financial boundaries can be appropriate as part of a broader safety and treatment plan."],
      ["Can the patient recover if they initially refuse?", "Yes. Initial resistance does not mean recovery is impossible; motivation can change."],
    ],
  },
  {
    slug: "nasha-mukti-kendra-delhi-what-families-should-check",
    title: "Nasha Mukti Kendra in Delhi – What Should Families Check Before Admission?",
    category: "Recovery Tips",
    excerpt: "Ten questions to ask before admitting a loved one to any Nasha Mukti Kendra or de-addiction centre in Delhi.",
    metaTitle: "Nasha Mukti Kendra in Delhi: 10 Things to Check Before Admission",
    metaDescription: "Searching for a Nasha Mukti Kendra in Delhi? Check medical supervision, detox, psychiatric care, counselling, family support, costs and aftercare before admission.",
    image: art10.url,
    imageAlt: "Calm courtyard of a rehabilitation centre in Delhi NCR",
    readMins: 7,
    body: [
      { h: "Before choosing a centre, ask questions", p: ["When a family is exhausted by alcohol or drug addiction, the instinct is to arrange immediate admission. But choosing a Nasha Mukti Kendra in Delhi is a healthcare decision. Check the quality, safety and structure of treatment first."] },
      { h: "1. Who assesses the patient?", p: ["Ask who conducts the initial medical and psychiatric assessment, and what their qualifications are."] },
      { h: "2. How is withdrawal managed?", p: ["Ask what happens if the patient develops withdrawal symptoms after admission — especially important for alcohol and certain other substances."] },
      { h: "3. Is medical supervision available?", p: ["A rehabilitation environment and a medical treatment facility are not automatically the same thing. Understand what clinical supervision actually exists on site."] },
      { h: "4. Is psychiatric assessment available?", p: ["Depression, anxiety, psychosis and bipolar disorder can coexist with substance-use disorders. The centre must have a process to identify and manage such conditions."] },
      { h: "5. Is treatment individualised?", p: ["Be cautious if every patient receives identical treatment regardless of substance, severity, medical history or psychiatric condition."] },
      { h: "6. What counselling is provided?", p: ["Ask about individual counselling, motivational interventions, behavioural treatment, group sessions, family counselling and relapse prevention. Psychosocial care is a core component, not an add-on."] },
      { h: "7. How is the family involved?", p: ["Ask when family members can speak with the treatment team, whether family counselling is offered and how discharge planning is communicated."] },
      { h: "8. What is included in the price?", p: ["Get clarity on admission, accommodation, doctor visits, medicines, investigations, counselling, food, additional procedures and follow-up — before admission, not after."] },
      { h: "9. What happens after discharge?", p: ["Ask specifically about relapse prevention and aftercare. Recovery does not end when residential treatment ends."] },
      { h: "10. What happens in an emergency?", p: ["Ask how medical or psychiatric emergencies are handled and where a patient is transferred if a higher level of medical care becomes necessary."] },
      { h: "Nasha Mukti Kendra vs de-addiction centre", p: ["Families often use these terms interchangeably. Whatever terminology a facility uses, focus on the actual quality, safety and structure of treatment. Modern addiction care combines outpatient, inpatient, pharmacological and psychosocial approaches rather than simple residential isolation."] },
    ],
    faqs: [
      ["Which is the best Nasha Mukti Kendra in Delhi?", "There is no universally best centre; suitability depends on the patient's clinical needs."],
      ["How long should someone stay?", "There is no single duration suitable for everyone. Duration should follow clinical assessment."],
      ["Should I choose a centre near my home?", "Accessibility helps with family sessions and follow-up, but clinical quality should take priority over distance."],
    ],
  },
];

export const FEATURED_FAMILY_IMAGE = familyImg.url;

export const BLOG_CATEGORIES = [
  "Alcohol Addiction",
  "Drug Addiction",
  "Family Support",
  "Recovery Tips",
  "Relapse Prevention",
  "Withdrawal Symptoms",
];
