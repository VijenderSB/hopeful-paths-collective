import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { LegalBody, LegalSection } from "@/components/site/Legal";
import { PHONE_DISPLAY } from "@/lib/site";
import pageBanner from "@/assets/banner-legal.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | DeAddictify Delhi NCR" },
      { name: "description", content: "How DeAddictify collects, uses, stores and protects sensitive personal and health information, in line with India's DPDP Act 2023, IT SPDI Rules and the Mental Healthcare Act, 2017." },
      { property: "og:title", content: "Privacy Policy | DeAddictify" },
      { property: "og:description", content: "Our confidentiality commitments for patients and families seeking de-addiction treatment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero image={pageBanner} eyebrow="Legal" title="Privacy Policy" subtitle="Addiction enquiries are deeply personal. This page explains exactly what we collect, why, who can see it and how you stay in control." />
      <LegalBody updated="15 August 2026">
        <LegalSection title="1. Our commitment">
          <p>DeAddictify treats every enquiry from a patient or family as confidential health information. This policy is written to be consistent with the Digital Personal Data Protection Act, 2023, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the confidentiality provisions of the Mental Healthcare Act, 2017, and the Telemedicine Practice Guidelines, 2020, where online consultations are involved.</p>
        </LegalSection>

        <LegalSection title="2. Information we collect">
          <ul>
            <li><strong>Contact details</strong> you give us: name, phone number, WhatsApp number, email, and city or district.</li>
            <li><strong>Relationship and enquiry details</strong>: whether you are the patient or a family member, and what help you are seeking.</li>
            <li><strong>Health-related information</strong> you choose to share: substance used, duration and pattern of use, withdrawal symptoms, previous treatment or relapse history, psychiatric or medical conditions, and current medication. This is sensitive personal data and we ask only for what is needed to guide you.</li>
            <li><strong>Call and message records</strong>: helpline call logs and, where recording is enabled for quality and training, call recordings.</li>
            <li><strong>Technical data</strong>: IP address, device and browser type, pages viewed and referring source, collected through standard web logs and analytics.</li>
          </ul>
          <p>We do not ask for Aadhaar, PAN, bank details, card numbers or passwords on this website. Identity and insurance documents, when required, are collected directly by the treating establishment at the time of admission.</p>
        </LegalSection>

        <LegalSection title="3. Why we use it">
          <ul>
            <li>To respond to your enquiry and provide free initial counselling.</li>
            <li>To recommend a suitable level of care and share indicative programme costs.</li>
            <li>To coordinate clinical assessment and admission with an affiliated establishment you have chosen.</li>
            <li>To provide family counselling support, aftercare check-ins and relapse-prevention follow-up.</li>
            <li>To improve our content and service quality, using aggregated and de-identified data.</li>
            <li>To comply with law, regulatory requests and lawful court or authority orders.</li>
          </ul>
          <p>We do not sell your data, do not rent contact lists, and do not use your health information for advertising or profiling.</p>
        </LegalSection>

        <LegalSection title="4. Consent and lawful basis">
          <p>We process your information on the basis of the consent you give when you submit a form, call our helpline or continue a WhatsApp conversation, and to the extent necessary for the purpose you approached us for. Where you enquire on behalf of another adult, we assume you have their knowledge or that you are acting in their interest as a family member; that person's own informed consent is required before any treatment begins.</p>
        </LegalSection>

        <LegalSection title="5. Who we share it with">
          <ul>
            <li><strong>Affiliated treatment partners</strong>: only the information needed for clinical assessment and admission, and only for the partner you agree to be referred to. Each partner is bound by its own confidentiality and statutory obligations.</li>
            <li><strong>Our counsellors and coordinators</strong>: on a strict need-to-know basis under confidentiality obligations.</li>
            <li><strong>Service providers</strong>: hosting, communication and analytics providers who process data on our instructions under contractual safeguards.</li>
            <li><strong>Authorities</strong>: where disclosure is required by law, or where there is a serious and immediate risk to the life or safety of the patient or another person.</li>
          </ul>
          <p>We never disclose a patient's status to an employer, neighbour, landlord, college or any third party without explicit permission.</p>
        </LegalSection>

        <LegalSection title="6. Retention">
          <p>Enquiry and counselling records are retained only as long as needed to support your recovery journey and to meet legal, accounting or dispute-resolution requirements, and are then deleted or de-identified. Clinical records created during treatment are retained by the treating establishment as per medical record-keeping norms applicable to it.</p>
        </LegalSection>

        <LegalSection title="7. Security">
          <p>We use access controls, need-to-know internal permissions, encrypted transport (HTTPS), reputable hosting and staff confidentiality commitments. No system is completely secure; if a breach affecting your data occurs, we will act promptly and notify you and the relevant authority as required under the DPDP Act, 2023.</p>
        </LegalSection>

        <LegalSection title="8. Your rights">
          <ul>
            <li>Access a summary of the information we hold about you.</li>
            <li>Correct or complete inaccurate details.</li>
            <li>Withdraw consent and ask us to stop contacting you.</li>
            <li>Request erasure of your enquiry data, where we are not required to retain it by law.</li>
            <li>Nominate someone to exercise these rights if you are unable to.</li>
            <li>Raise a grievance with us, and escalate to the Data Protection Board of India if unresolved.</li>
          </ul>
          <p>To exercise any right, email care@deaddictify.com or call {PHONE_DISPLAY}. We verify identity before acting and respond within 30 days.</p>
        </LegalSection>

        <LegalSection title="9. Children">
          <p>We do not knowingly collect data directly from anyone under 18. Enquiries concerning a minor must come from a parent or lawful guardian, and no tracking, profiling or targeted advertising is carried out in relation to children.</p>
        </LegalSection>

        <LegalSection title="10. Cookies and analytics">
          <p>We use minimal cookies and privacy-respecting analytics to understand which pages help families most. These do not store your health details. You can block cookies in your browser without losing access to the site's content.</p>
        </LegalSection>

        <LegalSection title="11. Grievance Officer and contact">
          <p>Grievance Officer, DeAddictify — email care@deaddictify.com, phone {PHONE_DISPLAY}, Delhi NCR, India. Complaints are acknowledged within 48 hours. We will publish any update to this policy on this page with a revised “last updated” date.</p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
