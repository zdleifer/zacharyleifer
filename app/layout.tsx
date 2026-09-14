import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { OG_IMAGE } from "@/data/og-image";

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
  "@id": "https://zacharyleifer.com/#zachary-leifer",
  name: "Zachary Leifer",
  url: "https://zacharyleifer.com/",
  image: "https://zacharyleifer.com/images/headshot.png",
  jobTitle: ["Commercial Growth and Transformation Executive", "Strategic Marketing Advisor"],
  description:
    "Senior commercial growth and transformation executive based in Las Vegas, NV, who has served as Chief Marketing Officer at 1/ST Technology and Chief Commercial Officer at PokerAtlas. He builds the marketing and commercial operating system, including data architecture, CRM and CDP infrastructure, and measurement, that turns strategy into measurable growth. Harvard Business School Advanced Management Program graduate. Open to Chief Marketing Officer, Chief Commercial Officer, General Manager and operating-partner roles, board roles as a Board Candidate, advisory roles and speaking engagements.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
    postalCode: "89101",
  },
  sameAs: ["https://linkedin.com/in/zacharyleifer"],
  subjectOf: {
    "@type": "PodcastEpisode",
    url: "https://open.spotify.com/episode/4xHYHVFm9V7GcMO1Si4sl7",
    name: "Awesome in Action",
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "NC Labs Podcast",
    },
  },
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
    "AI Investment Governance",
    "AI Readiness",
    "AI Value Realization",
    "Generative Engine Optimization",
    "Board Governance",
    "Operating Partner",
    "Gaming and Hospitality Marketing",
    "Las Vegas Executive Leadership",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.somstrategies.com/#organization",
    name: "State of Mind Strategies",
    url: "https://www.somstrategies.com/",
    sameAs: ["https://www.linkedin.com/company/state-of-mind-strategies/"],
    description: "Boutique consulting practice specializing in strategy, marketing, digital transformation, AI Strategy and AI Value Realization.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  },
  // schema.org: hasOccupation expects Occupation; past professions are expressed
  // by wrapping the Occupation in a Role with startDate/endDate, so the executive
  // titles are dated and do not read as roles he currently holds.
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Commercial Growth and Transformation Executive",
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
    {
      "@type": "Role",
      startDate: "2020",
      endDate: "2024",
      hasOccupation: {
        "@type": "Occupation",
        name: "Chief Marketing Officer",
      },
    },
    {
      "@type": "Role",
      startDate: "2025",
      endDate: "2025",
      hasOccupation: {
        "@type": "Occupation",
        name: "Chief Commercial Officer",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zacharyleifer.com/#website",
  name: "Zachary Leifer",
  url: "https://zacharyleifer.com/",
  description:
    "Official site of Zachary Leifer, a Las Vegas-based commercial growth and transformation executive who has served as Chief Marketing Officer and Chief Commercial Officer, with experience in gaming, hospitality, customer data, AI strategy and revenue growth.",
  author: {
    "@id": "https://zacharyleifer.com/#zachary-leifer",
    "@type": "Person",
    name: "Zachary Leifer",
    url: "https://zacharyleifer.com/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.somstrategies.com/#organization",
  name: "State of Mind Strategies",
  url: "https://www.somstrategies.com/",
  sameAs: ["https://www.linkedin.com/company/state-of-mind-strategies/"],
  founder: {
    "@id": "https://zacharyleifer.com/#zachary-leifer",
    "@type": "Person",
    name: "Zachary Leifer",
    url: "https://zacharyleifer.com/",
  },
  description:
    "Boutique consulting practice specializing in strategy, marketing, digital transformation, AI Strategy and AI Value Realization. Founded by Zachary Leifer, who has served as Chief Marketing Officer at 1/ST Technology and Vice President at Las Vegas Sands.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
};




export const metadata: Metadata = {
  title: "Zachary Leifer | Chief Marketing Officer, Chief Commercial Officer",
  description:
    "Zachary Leifer helps companies create more predictable value from data, digital transformation, technology and AI. Speaker and advisor based in Las Vegas.",
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
    "AI Investment Governance Executive Las Vegas",
    "Marketing Executive Las Vegas Nevada",
    "Revenue Growth Executive",
    "Fractional CMO Las Vegas",
    "Board Governance Las Vegas",
    "Harvard Business School Executive",
    "Gaming Industry Marketing Executive",
    "Hospitality Marketing Executive Las Vegas",
    "Zachary Leifer",
    "Zachary Leifer Las Vegas",
    "Zachary Leifer CMO",
    "Las Vegas Sands Marketing Executive",
    "The Venetian Marketing VP",
    "1/ST Technology CMO",
    "Executive Recruiter Las Vegas",
  ],
  authors: [{ name: "Zachary Leifer", url: "https://zacharyleifer.com/" }],
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
    title: "Zachary Leifer | Chief Marketing Officer, Chief Commercial Officer",
    description:
      "Zachary Leifer helps companies create more predictable value from data, digital transformation, technology and AI. Speaker and advisor based in Las Vegas.",
    url: "https://zacharyleifer.com/",
    siteName: "Zachary Leifer",
    images: [OG_IMAGE],
    locale: "en_US",
    firstName: "Zachary",
    lastName: "Leifer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Leifer | Chief Marketing Officer, Chief Commercial Officer",
    description:
      "Zachary Leifer helps companies create more predictable value from data, digital transformation, technology and AI. Speaker and advisor based in Las Vegas.",
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
  // alternates.canonical lives in app/page.tsx so non-home routes (including
  // the 404 page) do not inherit the homepage canonical.
  other: {
    // GEO meta tags, which help local search engines and directories
    "geo.region": "US-NV",
    "geo.placename": "Las Vegas, Nevada",
    "geo.position": "36.1699;-115.1398",
    ICBM: "36.1699, -115.1398",
    // Dublin Core
    "DC.title": "Zachary Leifer, Commercial Growth Executive",
    "DC.creator": "Zachary Leifer",
    "DC.subject": "Executive Leadership, CMO, Las Vegas",
    "DC.description":
      "Zachary Leifer helps companies create more predictable value from data, digital transformation, technology and AI. Speaker and advisor based in Las Vegas.",
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
      suppressHydrationWarning
    >
      <head>
        {/* Runs before paint so CSS can scope JS-only styles under .js; the class
            is added outside React, hence suppressHydrationWarning on <html>. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <meta name="theme-color" content="#070B14" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }}
        />
      </head>
      <body
        className="min-h-full"
        style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif" }}
      >
        {children}
        <GoogleAnalytics gaId="G-1HQNN79VF6" />
      </body>
    </html>
  );
}
