import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Radiants collects, uses, and protects personal data on radiantsofficial.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Legal — privacy" title="Privacy Policy" updated="13 October 2026">
      <p>
        This policy explains how Radiants (&ldquo;Radiants&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), an AI
        studio operated by its founders from Chennai, Tamil Nadu, India, handles personal data when you visit{" "}
        <strong>radiantsofficial.com</strong> or contact us. Our products, such as MailMind, may have their own
        privacy terms, which apply when you use them.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Information you give us</strong> — your name, email address, company, and anything you include
          when you email us or book a call.
        </li>
        <li>
          <strong>Usage data</strong> — aggregated, anonymous statistics about page views, referrers, device type,
          and country, collected through Vercel Web Analytics. It does not use cookies and does not track you across
          other websites.
        </li>
        <li>
          <strong>Technical logs</strong> — our hosting provider records standard server data such as IP address,
          browser type, and request time to keep the site secure and running.
        </li>
      </ul>
      <p>We do not use advertising cookies, and we do not sell or rent personal data.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry, schedule calls, and prepare proposals.</li>
        <li>To deliver work you have engaged us for.</li>
        <li>To understand how the site is used and improve it.</li>
        <li>To protect the site against abuse and meet legal obligations.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>We share personal data only with service providers that help us run the studio, including:</p>
      <ul>
        <li>Vercel — website hosting and privacy-friendly analytics.</li>
        <li>Cal.com — call scheduling, when you book through our booking link.</li>
        <li>Our email provider — to send and receive email.</li>
      </ul>
      <p>
        These providers may process data outside India. We may also disclose data where the law requires it.
      </p>

      <h2>Client data</h2>
      <p>
        When we build or run systems for a client, any data we process on their behalf is handled under our written
        agreement with that client. Where our systems send data to AI models, we mask personal data before the model
        call wherever the system design allows.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and project correspondence for as long as needed for the purpose it was collected, and for
        any period required by law. You can ask us to delete it sooner.
      </p>

      <h2>Your rights</h2>
      <p>
        Subject to applicable law, including India&apos;s Digital Personal Data Protection Act, 2023, you can ask us
        to access, correct, or erase your personal data, withdraw consent, or raise a grievance about how we handled
        it. Email <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within a reasonable time.
      </p>

      <h2>Children</h2>
      <p>This site is intended for businesses and is not directed at anyone under 18.</p>

      <h2>Changes</h2>
      <p>
        We may update this policy as the studio grows. The date at the top shows when it last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests: <a href={`mailto:${site.email}`}>{site.email}</a> — Radiants, Chennai, Tamil Nadu,
        India.
      </p>
    </LegalPage>
  );
}
