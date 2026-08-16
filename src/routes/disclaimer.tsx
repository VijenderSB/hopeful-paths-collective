import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { LegalBody, LegalSection } from "@/components/site/Legal";
import { DISCLAIMER, PHONE_DISPLAY } from "@/lib/site";
import pageBanner from "@/assets/banner-legal.jpg";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | DeAddictify Delhi NCR" },
      { name: "description", content: "Medical, treatment-outcome and legal disclaimer for DeAddictify's de-addiction facilitation and recovery support services in Delhi NCR." },
      { property: "og:title", content: "Disclaimer | DeAddictify" },
      { property: "og:description", content: "Important medical and legal disclaimers for patients and families using DeAddictify." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <PageHero image={pageBanner} eyebrow="Legal" title="Disclaimer" subtitle="What this website is, what it is not, and what we can and cannot promise about addiction treatment." />
      <LegalBody updated="15 August 2026">
        <LegalSection title="1. General disclaimer">
          <p>{DISCLAIMER}</p>
        </LegalSection>

        <LegalSection title="2. Not medical advice">
          <p>The content on this website — including condition pages, programme descriptions, blog articles, FAQs and city pages — is general educational information. It is not medical advice, diagnosis or treatment, and reading it does not create a doctor–patient relationship. Always consult a qualified psychiatrist or physician before starting, stopping or changing any treatment or medication. Never attempt unsupervised detox from alcohol, benzodiazepines or opioids; withdrawal can be medically dangerous.</p>
        </LegalSection>

        <LegalSection title="3. No guarantee of outcome">
          <p>Addiction is a relapsing medical condition. Recovery outcomes depend on severity, duration of use, co-occurring psychiatric and medical conditions, family support, adherence to aftercare and factors outside anyone's control. DeAddictify and its affiliated partners make no claim or promise of guaranteed cure, permanent abstinence, a fixed success rate or results within any promised period. Any such claim made verbally by any person is unauthorised.</p>
        </LegalSection>

        <LegalSection title="4. Role of DeAddictify">
          <p>DeAddictify is a treatment facilitation, counselling and recovery support platform, not a hospital or licensed clinical establishment. Medical detoxification, psychiatric care, prescriptions, nursing and residential rehabilitation are provided by qualified professionals at affiliated establishments, which remain solely responsible for their clinical decisions, staffing, facilities and statutory registrations under applicable state clinical establishment and mental health rules.</p>
        </LegalSection>

        <LegalSection title="5. Pricing and inclusions">
          <p>All prices, daily rates, programme durations, inclusions and facility descriptions shown here are indicative and subject to change. The final treatment plan, duration and cost are confirmed only after clinical assessment and are documented by the treating establishment. Accommodation category, medicines, investigations, specialist consultations and transport may alter the total.</p>
        </LegalSection>

        <LegalSection title="6. Voluntary treatment and patient rights">
          <p>Treatment of adults is arranged on a voluntary, informed-consent basis. Supported admission is used only where permitted by the Mental Healthcare Act, 2017, and only by the treating establishment with the safeguards that Act requires. DeAddictify does not provide or endorse forced pick-up, coercive confinement or any service that violates a person's dignity or legal rights. Patients retain their rights under the Mental Healthcare Act, 2017, including confidentiality, information about treatment, a nominated representative and access to a Mental Health Review Board.</p>
        </LegalSection>

        <LegalSection title="7. No promotion of substance use">
          <p>Nothing on this website encourages, endorses or assists the procurement, possession, transport or consumption of any narcotic drug or psychotropic substance, all of which are regulated under the Narcotic Drugs and Psychotropic Substances Act, 1985. References to substances appear solely in a clinical, harm-reduction and treatment-seeking context.</p>
        </LegalSection>

        <LegalSection title="8. Testimonials and images">
          <p>Recovery stories, patient names, city testimonials and photographs on this website are representative. Names and identifying details are changed or anonymised to protect confidentiality, and some images are illustrative or model-based. Individual experiences vary and are not a prediction of your outcome.</p>
        </LegalSection>

        <LegalSection title="9. Emergencies">
          <p>This website is not an emergency service. For overdose, seizure, delirium, severe withdrawal, self-harm or suicidal thoughts, call 112 or go to the nearest emergency department immediately. National mental health helpline Tele-MANAS: 14416. Our counselling helpline is {PHONE_DISPLAY}.</p>
        </LegalSection>

        <LegalSection title="10. External links and accuracy">
          <p>We review our content periodically but do not warrant that it is complete, current or error-free, and clinical practice evolves. Links to third-party websites are provided for convenience and do not imply endorsement or responsibility for their content.</p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
