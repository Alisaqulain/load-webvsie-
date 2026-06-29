import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SITE_NAME, PHONES, phoneHref } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | NR Innovative Solutions",
  description:
    "Learn how NR Innovative Solutions collects, uses, and protects your personal information when you use our loan consultancy services.",
};

const LAST_UPDATED = "June 29, 2025";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this website to
          provide loan consultancy and advisory services across India. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you visit our website,
          submit a loan application, use our calculators, or contact us by phone or WhatsApp.
        </p>
        <p className="mt-4">
          By using our website or sharing your details with us, you agree to the practices described
          in this policy. If you do not agree, please do not use our services or submit personal
          information through our site.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-navy-900">Contact details:</strong> name, phone number, email
            address, city, and state.
          </li>
          <li>
            <strong className="text-navy-900">Loan-related information:</strong> loan type, loan
            amount, employment type, income range, and other details you provide in application or
            enquiry forms.
          </li>
          <li>
            <strong className="text-navy-900">Calculator usage data:</strong> information you enter
            to unlock calculator results, such as email, phone, and loan requirements.
          </li>
          <li>
            <strong className="text-navy-900">Communications:</strong> messages sent via phone,
            WhatsApp, or other channels when you reach out for consultation.
          </li>
          <li>
            <strong className="text-navy-900">Technical data:</strong> browser type, device
            information, IP address, and pages visited, collected automatically when you browse our
            site.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Respond to your loan enquiries and provide free consultancy</li>
          <li>Assess eligibility and match you with suitable banks or NBFCs from our partner network</li>
          <li>Coordinate documentation, application submission, and follow-up with lenders</li>
          <li>Improve our website, calculators, and customer experience</li>
          <li>Send service-related updates by phone, SMS, email, or WhatsApp where permitted</li>
          <li>Comply with applicable laws, regulations, and lender requirements</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Sharing of Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share your details only when necessary
          to deliver our services, including with:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-navy-900">Partner banks and NBFCs:</strong> to process loan
            applications, credit assessment, and disbursement
          </li>
          <li>
            <strong className="text-navy-900">Service providers:</strong> such as hosting,
            communication, or technology partners who assist our operations under confidentiality
            obligations
          </li>
          <li>
            <strong className="text-navy-900">Legal authorities:</strong> when required by law,
            court order, or to protect our rights and users&apos; safety
          </li>
        </ul>
        <p className="mt-4">
          Once information is shared with a lender for processing, that lender&apos;s own privacy
          policy will also apply.
        </p>
      </>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <p>
        We retain your information only for as long as needed to provide consultancy services,
        complete loan processing, resolve disputes, and meet legal or regulatory requirements.
        When data is no longer required, we take reasonable steps to delete or anonymize it.
      </p>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>
        We implement reasonable administrative, technical, and physical safeguards to protect your
        information against unauthorized access, alteration, disclosure, or destruction. However,
        no method of transmission over the internet or electronic storage is completely secure,
        and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "7. Cookies and Similar Technologies",
    content: (
      <p>
        Our website may use essential cookies and similar technologies to enable basic
        functionality and improve browsing experience. We do not use third-party advertising
        cookies. You can control cookies through your browser settings, though disabling them may
        affect certain site features.
      </p>
    ),
  },
  {
    title: "8. Your Rights and Choices",
    content: (
      <>
        <p>Subject to applicable law, you may have the right to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of your information, where legally permitted</li>
          <li>Withdraw consent for marketing communications at any time</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, contact us using the details in the Contact section below.
        </p>
      </>
    ),
  },
  {
    title: "9. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites, including partner banks, WhatsApp,
        and other external services. We are not responsible for the privacy practices or content of
        those sites. We encourage you to review their privacy policies before sharing information.
      </p>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        Our services are intended for individuals aged 18 and above. We do not knowingly collect
        personal information from minors. If you believe we have received information from a minor,
        please contact us so we can remove it.
      </p>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The revised version will be posted on
        this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our website after
        changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    title: "12. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your data, please
          contact us:
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-navy-900">{SITE_NAME}</strong>
          </li>
          <li>Pan India Service</li>
          {PHONES.map((phone) => (
            <li key={phone}>
              <a
                href={phoneHref(phone)}
                className="font-medium text-gold-700 transition hover:text-gold-600"
              >
                +91 {phone}
              </a>
            </li>
          ))}
          <li>
            <Link href="/contact" className="font-medium text-gold-700 transition hover:text-gold-600">
              Contact page →
            </Link>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-silver-500">Last updated: {LAST_UPDATED}</p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-xl font-semibold text-navy-900">{section.title}</h2>
                <div className="mt-4 text-sm leading-relaxed text-silver-500">{section.content}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
