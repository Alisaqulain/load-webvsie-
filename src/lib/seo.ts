import type { Metadata } from "next";
import { SITE_NAME, TAGLINE, PHONES } from "@/lib/data";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nrinnovativesolutions.com";

export const LOGO_PATH = "/logo.jpeg";
export const DEFAULT_OG_IMAGE = LOGO_PATH;

export const DEFAULT_KEYWORDS = [
  "loan consultancy India",
  "personal loan India",
  "business loan",
  "home loan",
  "NR Innovative Solutions",
  "bank tie-ups",
  "loan advisor",
  "EMI calculator",
  "pan India loans",
] as const;

export const SITE_ROUTES = [
  "/",
  "/about",
  "/loan-services",
  "/calculators",
  "/loan-details",
  "/bank-tieups",
  "/eligibility",
  "/apply",
  "/contact",
  "/privacy-policy",
] as const;

const rootTitle = `${SITE_NAME} | ${TAGLINE}`;

const rootDescription =
  "Get personal, business, housing, mortgage, gold, vehicle, education and commercial loans through NR Innovative Solutions with 159+ bank tie-ups across India. Free expert consultancy.";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: rootTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: rootDescription,
  keywords: [...DEFAULT_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: LOGO_PATH, type: "image/jpeg" }],
    apple: [{ url: LOGO_PATH, type: "image/jpeg" }],
    shortcut: LOGO_PATH,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: rootTitle,
    description: rootDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: rootTitle,
    description: rootDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: keywords ?? [...DEFAULT_KEYWORDS],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE_NAME,
    description: rootDescription,
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_PATH}`,
    image: `${SITE_URL}${LOGO_PATH}`,
    telephone: PHONES.map((phone) => `+91-${phone}`),
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Personal Loan Consultancy",
      "Business Loan Consultancy",
      "Home Loan Consultancy",
      "Loan Advisory Services",
    ],
    contactPoint: PHONES.map((phone) => ({
      "@type": "ContactPoint",
      telephone: `+91-${phone}`,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: rootDescription,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: `${SITE_URL}${LOGO_PATH}`,
    },
  };
}

export function faqJsonLd(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
