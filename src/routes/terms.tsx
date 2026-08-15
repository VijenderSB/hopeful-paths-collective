import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { LegalBody, LegalSection } from "@/components/site/Legal";
import { PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | DeAddictify Delhi NCR" },
      { name: "description", content: "Terms of Use governing DeAddictify's addiction treatment facilitation and recovery support services in Delhi NCR, including admission, pricing, consent and Indian legal compliance." },
      { property: "og:title", content: "Terms of Use | DeAddictify" },
      { property: "og:description", content: "Read the terms that govern use of the DeAddictify de-addiction and recovery support platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" subtitle="Please read these terms carefully before using DeAddictify or requesting counselling, assessment or admission assistance." />
      <LegalBody updated="15 August 2026">
        <LegalSection title="1. About DeAddictify">
          <p>DeAddictify (“DeAddictify”, “we”, “us”, “our”) operates this website as an addiction treatment facilitation, counselling and recovery support platform serving Delhi NCR and families travelling from other parts of India, including Uttar Pradesh. We help families understand treatment options, arrange clinical assessment and coordinate admission with affiliated rehabilitation, psychiatric and de-addiction treatment establishments.</p>
          <p>DeAddictify is not itself a hospital and does not hold itself out as a licensed medical establishment. Clinical services — including medical detoxification, psychiatric treatment, prescription of medicines, nursing and residential care — are delivered by qualified professionals and licensed partner establishments, each responsible for its own clinical decisions, registrations and statutory compliance.</p>
        </LegalSection>

        <LegalSection title="2. Acceptance of these terms">
          <p>By browsing this website, submitting an enquiry form, calling our helpline or engaging our counsellors, you confirm that you have read, understood and agreed to these Terms of Use, our Privacy Policy and our Disclaimer. If you do not agree, please do not use the website or our services.</p>
        </LegalSection>

        <LegalSection title="3. Eligibility and who may enquire">
          <ul>
            <li>You must be 18 years or older to submit an enquiry on your own behalf.</li>
            <li>Enquiries on behalf of a person under 18 must be made by a parent or lawful guardian.</li>
            <li>Enquiries on behalf of another adult may be made by a family member or nominated representative, but treatment of that adult will still require their own informed consent, or the process laid down under applicable law where they are unable to give consent.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Nature of our services">
          <p>Through DeAddictify you may receive: free initial telephonic or online counselling; guidance on suitable levels of care; help understanding programme durations and indicative costs; coordination of clinical assessment; admission assistance; family counselling support; and post-discharge follow-up and relapse-prevention guidance.</p>
          <p>What we do not do: we do not diagnose, we do not prescribe medicines, we do not provide emergency medical response, and we do not guarantee any specific clinical outcome. Nothing on this website constitutes medical advice or a doctor–patient relationship.</p>
        </LegalSection>

        <LegalSection title="5. Assessment, admission and consent">
          <p>Admission is never automatic. Every admission follows a clinical assessment by qualified professionals at the partner establishment, and depends on medical fitness, severity, co-occurring conditions, bed availability and the treating team's judgement.</p>
          <p>Consistent with the Mental Healthcare Act, 2017, admission of an adult is ordinarily on a voluntary, informed-consent basis. Supported admission is used only in the limited circumstances permitted by that Act, only by the treating establishment, and only with the safeguards it prescribes. DeAddictify does not offer, arrange or endorse forcible pick-up, coercive confinement, physical restraint as a routine practice, or any “forced admission” service. Requests of that nature will be declined.</p>
          <p>Patients retain the rights conferred by the Mental Healthcare Act, 2017, including the right to dignity, to confidentiality, to information about their treatment, to a nominated representative, to community living and to complain to the relevant Mental Health Review Board.</p>
        </LegalSection>

        <LegalSection title="6. Pricing, payments and refunds">
          <ul>
            <li>Programme prices shown on this website (for example daily rates for 14, 30, 60 and 90-day programmes) are indicative starting prices for planning purposes only.</li>
            <li>The final payable amount is confirmed in writing by the treating establishment after clinical assessment and depends on the treatment plan, medical requirements, accommodation category and duration.</li>
            <li>Fees for treatment are payable to the partner establishment as per its own invoice, payment schedule and refund policy. Please obtain and read that policy before making any payment.</li>
            <li>Additional costs such as investigations, specialist consultations, medicines, ambulance or transport are billed separately unless expressly included.</li>
            <li>DeAddictify does not collect payments on this website and does not ask for money over WhatsApp or from personal accounts. If someone does so in our name, stop and contact us at {PHONE_DISPLAY}.</li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Your responsibilities">
          <ul>
            <li>Provide accurate, complete and honest information about the patient's substance use, medical history, medication, allergies and previous treatment. Clinical safety during detox depends on it.</li>
            <li>Disclose any pregnancy, cardiac, hepatic, renal, neurological, seizure or psychiatric history before admission.</li>
            <li>Follow the partner establishment's admission rules, visiting hours, prohibited-items list and discharge process.</li>
            <li>Do not use this website to seek help in procuring, transporting or consuming any narcotic drug or psychotropic substance. Such use is prohibited and unlawful under the Narcotic Drugs and Psychotropic Substances Act, 1985.</li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Medical emergencies">
          <p>This website and our helpline are not emergency services. If there is overdose, seizure, delirium, chest pain, severe withdrawal, self-harm risk or suicidal intent, call 112, go to the nearest emergency department immediately, or reach the national mental health helpline Tele-MANAS at 14416.</p>
        </LegalSection>

        <LegalSection title="9. Communications and consent to contact">
          <p>When you submit your number or call us, you consent to being contacted by our counsellors by phone, SMS, WhatsApp or email regarding your enquiry, even if your number is registered on a DND list, for the limited purpose of responding to that enquiry. You may withdraw this consent at any time by telling the counsellor or writing to care@deaddictify.com.</p>
          <p>Calls may be recorded for quality and training purposes. Where recording occurs, it is handled as confidential health-related information under our Privacy Policy.</p>
        </LegalSection>

        <LegalSection title="10. Advertising and content compliance">
          <p>Our content is written for public education and is designed to comply with the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954, the Consumer Protection Act, 2019, and applicable advertising standards. We do not claim guaranteed cure, permanent sobriety, “100% success”, miracle treatment or results within a promised time. Testimonials, recovery stories and names shown on this website are representative accounts published with consent and with identifying details changed to protect privacy; they are not a promise of similar results.</p>
        </LegalSection>

        <LegalSection title="11. Intellectual property">
          <p>All text, layout, graphics, programme structures and compilations on this website are owned by or licensed to DeAddictify. You may read, print and share pages for personal, non-commercial use. Republishing, scraping, bulk copying or using our content to train commercial models without written permission is not permitted.</p>
        </LegalSection>

        <LegalSection title="12. Third-party partners and links">
          <p>Partner establishments are independent entities. DeAddictify facilitates introductions and coordination but is not liable for their clinical decisions, staffing, infrastructure, statutory registrations or conduct. Please verify licences and satisfy yourself before admission. External links are provided for convenience and are not endorsements.</p>
        </LegalSection>

        <LegalSection title="13. Limitation of liability">
          <p>To the maximum extent permitted by Indian law, DeAddictify is not liable for indirect, incidental or consequential loss arising from use of this website, from information provided here, from relapse, or from the acts or omissions of any partner establishment or treating professional. Nothing in these terms limits liability that cannot be limited by law.</p>
        </LegalSection>

        <LegalSection title="14. Governing law and grievances">
          <p>These terms are governed by the laws of India and courts at Delhi have exclusive jurisdiction. For any complaint or grievance, including grievances under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, write to our Grievance Officer at care@deaddictify.com or call {PHONE_DISPLAY}. We aim to acknowledge within 48 hours and resolve within 30 days.</p>
        </LegalSection>

        <LegalSection title="15. Changes to these terms">
          <p>We may update these Terms of Use to reflect changes in law, regulation or our services. The revised version takes effect when published on this page with a new “last updated” date.</p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
