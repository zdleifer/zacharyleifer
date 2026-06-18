import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "900"],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zachary Leifer",
  url: "https://zacharyleifer.com",
  image: "https://zacharyleifer.com/images/headshot.png",
  jobTitle: ["Chief Marketing Officer", "Chief Commercial Officer", "General Manager", "Commercial Growth Executive"],
  description:
    "Senior commercial growth executive based in Las Vegas, NV. CMO, CCO, and GM who builds the marketing and commercial operating system, including data architecture, CRM and CDP infrastructure, and measurement, that turns strategy into measurable growth. Harvard Business School Advanced Management Program graduate. Open to board, advisory, and senior operating roles.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
    postalCode: "89101",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1699",
    longitude: "-115.1398",
  },
  sameAs: ["https://linkedin.com/in/zacharyleifer"],
  award: [
    "2015 Gold HSMAI Adrian Award",
    "2015 Silver HSMAI Adrian Award",
    "2015 Bronze HSMAI Adrian Award (Breakfast Offer Campaign)",
    "2015 Bronze HSMAI Adrian Award (The Palazzo Suite Campaign)",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Harvard Business School",
      url: "https://www.hbs.edu",
    },
    {
      "@type": "EducationalOrganization",
      name: "Cornell University",
      url: "https://www.cornell.edu",
    },
  ],
  knowsAbout: [
    "Chief Marketing Officer",
    "Chief Commercial Officer",
    "Commercial Growth",
    "Revenue Strategy",
    "P&L Management",
    "Digital Transformation",
    "AI Strategy",
    "Customer Data Platform",
    "Marketing Technology",
    "Go-to-Market Strategy",
    "Enterprise Technology Leadership",
    "EBITDA Growth",
    "Customer Acquisition",
    "CRM Strategy",
    "Marketing Operating Model",
    "Marketing Operating System",
    "Marketing Measurement and Analytics",
    "AI Governance",
    "AI Enablement",
    "Generative Engine Optimization",
    "Board Advisory",
    "Operating Partner",
    "Gaming and Hospitality Marketing",
    "Las Vegas Executive Leadership",
  ],
  worksFor: {
    "@type": "Organization",
    name: "State of Mind Strategies",
    url: "https://zacharyleifer.com",
    description: "Boutique strategic consulting practice specializing in marketing, digital transformation, and AI enablement.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Chief Marketing Officer",
    occupationLocation: {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    skills:
      "Commercial Growth, P&L Management, Revenue Strategy, Digital Transformation, AI Strategy, Customer Data, Marketing Technology, Executive Leadership",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "State of Mind Strategies",
  url: "https://zacharyleifer.com",
  founder: {
    "@type": "Person",
    name: "Zachary Leifer",
    url: "https://zacharyleifer.com",
  },
  description:
    "Boutique strategic consulting practice specializing in marketing, digital transformation, and AI enablement. Founded by Zachary Leifer, former CMO at 1/ST Technology and VP at Las Vegas Sands.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries does Zachary Leifer specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zachary Leifer specializes in integrated resorts and gaming, hospitality, sports wagering and horse racing, iGaming, eCommerce, luxury retail, and sports media. He has held CMO and VP roles at Las Vegas Sands, 1/ST Technology, PokerAtlas, and MLB Advanced Media, spanning Fortune 500 enterprise and high-growth platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What results did Zachary Leifer achieve at 1/ST Technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As CMO at 1/ST Technology from 2020 to 2024, Zachary Leifer drove 67% revenue growth and a 22% EBITDA CAGR, reduced customer acquisition cost by 56%, and improved LTV/CAC by 73%. A wagering app he launched generated $60M in handle and $4M in net gaming revenue within 10 months.",
      },
    },
    {
      "@type": "Question",
      name: "Is Zachary Leifer available for board or advisory roles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Zachary Leifer is actively open to board director, advisory, and senior operating roles. He brings particular value in growth strategy, AI enablement, marketing operating models, and digital transformation, with credentialed experience across Fortune 500 hospitality, gaming technology, and consumer platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What is Zachary Leifer's approach to AI and digital transformation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zachary Leifer treats AI as a commercial operating tool, not a technology project. His focus is building data infrastructure, CDP architecture, and measurement systems that make AI actionable for revenue growth and customer retention. His Harvard Business School AMP capstone focused on enterprise value from data and AI.",
      },
    },
    {
      "@type": "Question",
      name: "What is Zachary Leifer's background in gaming and hospitality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zachary Leifer spent six years at Las Vegas Sands/The Venetian as VP Digital Marketing and VP Corporate IT, generating $36M in direct revenue from a $13M investment. He also served as CMO at 1/ST Technology (horse racing and wagering) and CCO at PokerAtlas, a global gaming platform.",
      },
    },
    {
      "@type": "Question",
      name: "What marketing technology and CDP experience does Zachary Leifer have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zachary Leifer has built two enterprise customer data platforms from the ground up — at Las Vegas Sands/The Venetian and at 1/ST Technology — delivering predictive customer-valuation models, personalization, and attribution. His CDP work at 1/ST reduced CAC by 56% and improved LTV/CAC by 73%.",
      },
    },
    {
      "@type": "Question",
      name: "What is Zachary Leifer's educational background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zachary Leifer completed the Advanced Management Program at Harvard Business School in 2026, with a capstone focused on enterprise value from data, digital transformation, and AI. He holds a Bachelor of Science in Applied Economics and Management from Cornell University.",
      },
    },
  ],
};

const reviewSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Person", name: "Zachary Leifer", url: "https://zacharyleifer.com" },
    author: { "@type": "Person", name: "Michael Jordan", jobTitle: "Chief Operating Officer, 1/ST Technology" },
    reviewBody:
      "Zack brought real operating discipline to the CMO role. By linking investment directly to customer behavior and unit economics, he turned marketing into a predictable commercial engine. Low ego and high standards. I recommend him without hesitation for a corporate CMO role where growth and innovation are the mandate.",
    publisher: { "@type": "Organization", name: "LinkedIn" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Person", name: "Zachary Leifer", url: "https://zacharyleifer.com" },
    author: { "@type": "Person", name: "Paul Williams", jobTitle: "Chief Technology Officer, 1/ST Technology" },
    reviewBody:
      "He built a great team at 1/ST and allowed us to move our revenue and profits considerably over the last 4 years. I would recommend Zach to anyone in need of acquisition and retention marketing, and anyone who needs a creative marketing approach to existing business challenges.",
    publisher: { "@type": "Organization", name: "LinkedIn" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Person", name: "Zachary Leifer", url: "https://zacharyleifer.com" },
    author: { "@type": "Person", name: "David Kahn", jobTitle: "Key Account Director, Google Cloud" },
    reviewBody:
      "An amazingly rare blend of deep marketing knowledge, strong technical proficiency, and proven leadership skills that puts him on the bleeding edge of his craft. He translates that combination into powerful, meaningful business solutions and drives innovation like I've never seen. He truly is an A+ talent.",
    publisher: { "@type": "Organization", name: "LinkedIn" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Person", name: "Zachary Leifer", url: "https://zacharyleifer.com" },
    author: { "@type": "Person", name: "Kevin U, Ph.D.", jobTitle: "SVP & CIO, Enterprise Data & AI, Fidelity Investments" },
    reviewBody:
      "Zach is one of the very rare leaders who can lead both business and IT as a whole. He showed strong business sense and shared ideas for potential business improvement and innovations. One of the most clever and hardworking persons I have ever met.",
    publisher: { "@type": "Organization", name: "LinkedIn" },
  },
];

export const metadata: Metadata = {
  title: "Zachary Leifer | CMO · CCO · GM | Las Vegas",
  description:
    "Zachary Leifer — CMO, CCO, GM. Las Vegas, NV. 67% revenue growth at 1/ST Technology. Harvard Business School AMP. Former VP, Las Vegas Sands. Open to board, advisory & C-suite roles. Builds the marketing operating system — CDP, CRM, AI — that turns strategy into measurable growth. Former CMO at 1/ST Technology, CCO at PokerAtlas, VP at The Venetian.",
  keywords: [
    "Chief Marketing Officer Las Vegas",
    "CMO Las Vegas",
    "CCO Las Vegas Nevada",
    "Chief Commercial Officer Las Vegas",
    "Commercial Growth Executive Las Vegas",
    "President Las Vegas Nevada",
    "CEO Las Vegas",
    "GM Las Vegas",
    "Executive Leadership Las Vegas",
    "VP Marketing Las Vegas",
    "Digital Transformation Executive Las Vegas",
    "AI Strategy Executive Las Vegas",
    "Marketing Executive Las Vegas Nevada",
    "Revenue Growth Executive",
    "Fractional CMO Las Vegas",
    "Board Advisory Las Vegas",
    "Harvard Business School Executive",
    "Gaming Industry Marketing Executive",
    "Hospitality Marketing Executive Las Vegas",
    "Zachary Leifer",
    "Zachary Leifer Las Vegas",
    "Zachary Leifer CMO",
    "Las Vegas Sands Marketing Executive",
    "The Venetian Marketing VP",
    "1ST Technology CMO",
    "Executive Recruiter Las Vegas",
  ],
  authors: [{ name: "Zachary Leifer", url: "https://zacharyleifer.com" }],
  creator: "Zachary Leifer",
  publisher: "Zachary Leifer",
  category: "Executive Leadership",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "profile",
    title: "Zachary Leifer | Commercial Growth Executive | Las Vegas, NV",
    description:
      "Senior commercial growth executive in Las Vegas. Former CMO at 1/ST Technology, CCO at PokerAtlas, VP at Las Vegas Sands. Harvard Business School AMP. Open to C-suite, board, and advisory roles.",
    url: "https://zacharyleifer.com",
    siteName: "Zachary Leifer",
    images: [
      {
        url: "https://zacharyleifer.com/images/headshot.png",
        width: 1200,
        height: 630,
        alt: "Zachary Leifer, Commercial Growth Executive, Las Vegas NV",
      },
    ],
    locale: "en_US",
    firstName: "Zachary",
    lastName: "Leifer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Leifer | Commercial Growth Executive | Las Vegas, NV",
    description:
      "Senior commercial growth executive. CMO, CCO, GM. Harvard Business School AMP. Based in Las Vegas, NV.",
    images: ["https://zacharyleifer.com/images/headshot.png"],
  },
  alternates: {
    canonical: "https://zacharyleifer.com",
  },
  other: {
    // GEO meta tags — helps local search engines and directories
    "geo.region": "US-NV",
    "geo.placename": "Las Vegas, Nevada",
    "geo.position": "36.1699;-115.1398",
    ICBM: "36.1699, -115.1398",
    // Dublin Core
    "DC.title": "Zachary Leifer, Commercial Growth Executive",
    "DC.creator": "Zachary Leifer",
    "DC.subject": "Executive Leadership, CMO, Las Vegas",
    "DC.description":
      "Senior commercial growth executive in Las Vegas, NV. CMO, CCO, GM with expertise in revenue strategy, digital transformation, and AI.",
    "DC.language": "en",
    // Additional discovery
    "og:locality": "Las Vegas",
    "og:region": "NV",
    "og:country-name": "United States",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#070B14" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {reviewSchemas.map((r, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(r) }}
          />
        ))}
      </head>
      <body
        className="min-h-full"
        style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
