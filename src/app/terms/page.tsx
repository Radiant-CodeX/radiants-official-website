import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you use radiantsofficial.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage kicker="Legal — terms" title="Terms of Service" updated="13 October 2026">
      <p>
        These terms apply to your use of <strong>radiantsofficial.com</strong> (the &ldquo;site&rdquo;), operated by
        Radiants (&ldquo;Radiants&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), an AI studio run by its founders from
        Chennai, Tamil Nadu, India. By using the site, you agree to them.
      </p>

      <h2>Using the site</h2>
      <p>
        You may browse and share the site for lawful purposes. Please don&apos;t attempt to disrupt it, access it in
        unauthorised ways, scrape it at volume, or use it to send spam or harmful content.
      </p>

      <h2>Our services</h2>
      <p>
        The site describes the work we do. It is not an offer. Any project, audit, or ongoing service is governed by
        a separate written proposal or agreement that sets out scope, price, timelines, ownership, and
        responsibilities. If that agreement conflicts with these terms, the agreement wins. Timelines and examples on
        the site are typical, not guaranteed.
      </p>

      <h2>Our products</h2>
      <p>
        Products we operate, such as MailMind, may have their own terms. Those terms apply when you use the product.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site&apos;s content, design, logos, and code belong to Radiants or its licensors. You may not copy or
        reuse them commercially without our written permission. Ownership of work we create for clients is set out
        in the relevant client agreement.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site links to services we don&apos;t control, such as Cal.com for booking calls. Their own terms and
        privacy policies apply, and we aren&apos;t responsible for their content.
      </p>

      <h2>No warranty</h2>
      <p>
        The site and its content are provided &ldquo;as is&rdquo; for general information. We work to keep them
        accurate but don&apos;t guarantee they are complete, current, or error-free, and nothing on the site is
        professional, legal, or financial advice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, Radiants is not liable for any indirect or consequential loss arising from
        your use of the site. Nothing in these terms limits liability that cannot be limited by law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. The courts at Chennai, Tamil Nadu have exclusive jurisdiction
        over any dispute arising from them.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows when they last changed.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
