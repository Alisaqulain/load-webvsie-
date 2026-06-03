export const SITE_NAME = "NR Innovative Solutions";
export const TAGLINE = "All Loans, One Trusted Solution";

export const PHONES = [
  "9449048829",
  "8147342672",
  "9632227229",
  "9036166473",
] as const;

export const PRIMARY_PHONE = PHONES[0];
export const PRIMARY_WHATSAPP = `https://wa.me/91${PRIMARY_PHONE}`;

export function phoneHref(phone: string) {
  return `tel:+91${phone}`;
}

export function whatsappHref(phone: string, message?: string) {
  const base = `https://wa.me/91${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/loan-services", label: "Loan Services" },
  { href: "/calculators", label: "Calculators" },
  { href: "/loan-details", label: "Loan Details" },
  { href: "/bank-tieups", label: "Bank Tie-ups" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/apply", label: "Apply Now" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const TRUST_BADGES = [
  { label: "159+ Banks", icon: "building" },
  { label: "Pan India Service", icon: "map" },
  { label: "100% Free Service", icon: "shield" },
  { label: "Quick Approval", icon: "zap" },
  { label: "Minimum Documentation", icon: "file" },
] as const;

export const LOAN_TYPES = [
  "Personal Loan",
  "Business Loan",
  "Housing Loan",
  "Home Loan",
  "Mortgage Loan / LAP",
  "Old Loan BT Top Up",
  "Project Funding Loan",
  "Overdraft",
  "Site Purchase Loan",
  "Industrial Loan",
  "Construction Loan",
  "Purchase Cum Construction Loan",
  "Apartment Purchasing Loan",
  "Education Loan",
  "Letter Credit LC",
  "Vehicle Loan",
  "Gold Loan",
  "Mutual Funds",
  "Loans Against Security & Bonds",
  "Bank Guarantee BG",
  "Commercial Loan",
  "Hospital Expansion Loan",
  "Nursing Home Loan",
  "Bar & Restaurant Development Loan",
  "Petrol Pump Loan",
  "Jewellery Shop Loan",
  "Hardware Shop Loan",
  "Cotton Mill Loan",
  "Cinema Hall Loan",
  "Transport Loan",
  "Medical Distributor Loan",
  "Fertilizer Distributor Loan",
  "Rice Mill Distributor Loan",
  "Shopping Mall Loan",
  "Super Bazaar Loan",
  "Retailer / Wholesaler Loan",
  "Tailoring Shop Loan",
  "Beauty Parlour Loan",
  "Oil Dealer Loan",
] as const;

export type LoanType = (typeof LOAN_TYPES)[number];

export const LOAN_CATEGORIES = [
  {
    title: "Personal & Lifestyle",
    loans: [
      "Personal Loan",
      "Education Loan",
      "Vehicle Loan",
      "Gold Loan",
    ],
    description: "Flexible funding for personal goals, education, vehicles, and gold-backed needs.",
    icon: "user",
  },
  {
    title: "Home & Property",
    loans: [
      "Housing Loan",
      "Home Loan",
      "Mortgage Loan / LAP",
      "Site Purchase Loan",
      "Construction Loan",
      "Purchase Cum Construction Loan",
      "Apartment Purchasing Loan",
    ],
    description: "Complete property financing from purchase to construction and mortgage solutions.",
    icon: "home",
  },
  {
    title: "Business & Commercial",
    loans: [
      "Business Loan",
      "Commercial Loan",
      "Overdraft",
      "Project Funding Loan",
      "Old Loan BT Top Up",
    ],
    description: "Working capital, expansion, balance transfer, and structured commercial funding.",
    icon: "briefcase",
  },
  {
    title: "Industry & Trade",
    loans: [
      "Industrial Loan",
      "Letter Credit LC",
      "Bank Guarantee BG",
      "Loans Against Security & Bonds",
      "Mutual Funds",
    ],
    description: "Trade finance, guarantees, securities-backed lending, and industrial credit.",
    icon: "factory",
  },
] as const;

export const BUSINESS_LOAN_CATEGORIES = [
  "Hospital Expansion Loan",
  "Nursing Home Loan",
  "Bar & Restaurant Development Loan",
  "Petrol Pump Loan",
  "Jewellery Shop Loan",
  "Hardware Shop Loan",
  "Cotton Mill Loan",
  "Cinema Hall Loan",
  "Transport Loan",
  "Medical Distributor Loan",
  "Fertilizer Distributor Loan",
  "Rice Mill Distributor Loan",
  "Shopping Mall Loan",
  "Super Bazaar Loan",
  "Retailer / Wholesaler Loan",
  "Tailoring Shop Loan",
  "Beauty Parlour Loan",
  "Oil Dealer Loan",
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "159+ Bank & NBFC Tie-ups",
    description:
      "Access the widest lender network in India. We match your profile with the right bank or NBFC for better rates and faster approval.",
    icon: "network",
  },
  {
    title: "Zero Service Charges",
    description:
      "Transparent consultancy with no hidden fees. Our advisory service is completely free for customers across all loan types.",
    icon: "wallet",
  },
  {
    title: "Expert Loan Advisory",
    description:
      "Seasoned consultants guide you through eligibility, documentation, and lender selection — saving time and avoiding rejections.",
    icon: "advisor",
  },
  {
    title: "Minimum Documentation",
    description:
      "Streamlined paperwork with digital support. We help you submit only what lenders need for quicker processing.",
    icon: "docs",
  },
  {
    title: "Quick Approval Support",
    description:
      "Priority coordination with partner banks for faster credit assessment, sanction, and disbursement timelines.",
    icon: "clock",
  },
  {
    title: "Pan India Service",
    description:
      "From metros to tier-2 cities — we serve customers across India with phone, WhatsApp, and remote consultation support.",
    icon: "globe",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Apply",
    description: "Share your loan requirement online or call our advisors for a free consultation.",
  },
  {
    step: "02",
    title: "Document Check",
    description: "We review your profile and prepare a checklist tailored to your loan type and lender.",
  },
  {
    step: "03",
    title: "Bank Match",
    description: "We shortlist the best banks/NBFCs from our 159+ partner network for your case.",
  },
  {
    step: "04",
    title: "Approval",
    description: "Application submission and follow-up until sanction letter is issued.",
  },
  {
    step: "05",
    title: "Disbursement",
    description: "Funds released to your account with end-to-end support until closure.",
  },
] as const;

export const PARTNER_BANKS = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Bank of Baroda",
  "Punjab National Bank",
  "Canara Bank",
  "Union Bank of India",
  "IDFC First Bank",
  "Yes Bank",
  "IndusInd Bank",
  "Federal Bank",
  "RBL Bank",
  "Bandhan Bank",
  "AU Small Finance Bank",
  "Bajaj Finserv",
  "Tata Capital",
  "Mahindra Finance",
  "LIC Housing Finance",
  "PNB Housing Finance",
  "Aditya Birla Capital",
  "Fullerton India",
  "Hero FinCorp",
  "Cholamandalam Finance",
  "Shriram Finance",
  "Muthoot Finance",
  "Manappuram Finance",
  "IIFL Finance",
  "L&T Finance",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Does NR Innovative Solutions charge any service fee?",
    answer:
      "No. Our loan consultancy is 100% free for customers. We earn through bank partnerships — you pay zero service charges and no hidden fees.",
  },
  {
    question: "How many banks and NBFCs are you tied up with?",
    answer:
      "We are partnered with 159+ banks and NBFCs across India, enabling us to find competitive rates and higher approval chances for diverse profiles.",
  },
  {
    question: "How fast can I get loan approval?",
    answer:
      "Timelines vary by loan type and lender. With complete documentation, many personal and business loans can be processed within a few working days.",
  },
  {
    question: "Can I apply if I am self-employed or run a small business?",
    answer:
      "Yes. We specialize in business, commercial, and industry-specific loans for proprietors, MSMEs, retailers, and professionals across sectors.",
  },
  {
    question: "Do you provide services outside major cities?",
    answer:
      "Yes. We offer pan India loan assistance via phone and WhatsApp, supporting customers in metros, towns, and rural areas.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Typically KYC, income proof, bank statements, and property/business documents depending on loan type. Visit our Eligibility page for detailed checklists.",
  },
] as const;

export const ELIGIBILITY_SECTIONS = [
  {
    title: "Salaried Individuals",
    items: [
      "Age: 21–60 years (varies by lender)",
      "Minimum 1 year employment with current employer",
      "Stable monthly income as per lender norms",
      "Good credit score (650+ preferred)",
      "KYC: Aadhaar, PAN, address proof",
      "Salary slips (3–6 months), Form 16",
      "Bank statements (6 months)",
    ],
  },
  {
    title: "Self-Employed / Business Owners",
    items: [
      "Business vintage: 2–3 years (varies)",
      "ITR and financials for last 2–3 years",
      "GST registration / business proof",
      "Current account statements",
      "Office or shop establishment proof",
      "Property documents if collateral-based",
    ],
  },
  {
    title: "Home / Mortgage Loans",
    items: [
      "Property documents (sale deed, approvals)",
      "Income proof (salaried or business)",
      "Co-applicant details if applicable",
      "Down payment proof",
      "NOC and chain documents for resale property",
      "Valuation report (arranged by lender)",
    ],
  },
  {
    title: "Commercial & Industry Loans",
    items: [
      "Business plan / project report",
      "Licenses specific to industry (hospital, petrol pump, etc.)",
      "Collateral or security documents",
      "Existing loan statements for BT/top-up",
      "Partnership deed / company incorporation",
    ],
  },
] as const;

export const LOAN_DETAILS = [
  {
    slug: "personal-loan",
    name: "Personal Loan",
    amount: "₹50,000 – ₹40 Lakhs+",
    tenure: "12 – 60 months",
    rate: "From 10.5% p.a. onwards",
    features: ["No collateral", "Quick disbursal", "Flexible end-use"],
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    amount: "₹1 Lakh – ₹5 Crore+",
    tenure: "12 – 84 months",
    rate: "Competitive MSME rates",
    features: ["Working capital", "Expansion funding", "Unsecured options"],
  },
  {
    slug: "home-loan",
    name: "Home Loan",
    amount: "Up to 90% of property value",
    tenure: "Up to 30 years",
    rate: "From 8.4% p.a. onwards",
    features: ["Balance transfer", "Top-up available", "Tax benefits"],
  },
  {
    slug: "lap",
    name: "Mortgage Loan / LAP",
    amount: "₹5 Lakhs – ₹10 Crore+",
    tenure: "Up to 15 years",
    rate: "Lower than unsecured loans",
    features: ["Loan against property", "Business & personal use", "Higher ticket size"],
  },
  {
    slug: "vehicle-loan",
    name: "Vehicle Loan",
    amount: "Up to 100% on-road (select lenders)",
    tenure: "12 – 84 months",
    rate: "From 8.75% p.a. onwards",
    features: ["New & used vehicles", "Commercial vehicles", "Quick processing"],
  },
  {
    slug: "gold-loan",
    name: "Gold Loan",
    amount: "Based on gold valuation",
    tenure: "3 – 36 months",
    rate: "From 9% p.a. onwards",
    features: ["Same-day disbursal", "Minimal documentation", "Flexible repayment"],
  },
] as const;
