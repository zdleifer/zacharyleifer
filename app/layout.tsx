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
  jobTitle: "Commercial Growth & Transformation Executive",
  description:
    "Zachary Leifer is a commercial growth and transformation executive based in Las Vegas who has served as Chief Marketing Officer of 1/ST Technology, Chief Commercial Officer of PokerAtlas, and Vice President of Corporate Information Technology at Las Vegas Sands. He leads marketing, commercial, digital, data, and technology initiatives that connect customer insight and operating capabilities to measurable business value. He completed the Harvard Business School Advanced Management Program in 2026.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
    postalCode: "89101",
  },
  sameAs: ["https://www.linkedin.com/in/zacharyleifer/", "https://www.youtube.com/@zacharyleifer"],
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
    "2015 Gold HSMAI Adrian Award: Brand Site Improvements",
    "2015 Silver HSMAI Adrian Award: Ultimo Campaign",
    "2015 Bronze HSMAI Adrian Award: Breakfast Offer Campaign",
    "2015 Bronze HSMAI Adrian Award: The Palazzo Suite Campaign",
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
  // Shared with somstrategies.com's knowsAbout list. Job titles and role/opportunity
  // descriptors live in jobTitle and visible copy, not here.
  knowsAbout: [
    "Commercial Growth",
    "Customer Economics",
    "Digital Transformation",
    "AI Strategy",
    "AI Investment Governance",
    "AI Readiness",
    "AI Value Realization",
    "Customer Data Platforms",
    "Marketing Technology",
    "Marketing Operating Models",
    "Revenue Strategy",
    "Gaming and Hospitality",
  ],
  worksFor: {
    "@id": "https://www.somstrategies.com/#organization",
  },
  // schema.org: hasOccupation expects Occupation; past professions are expressed
  // by wrapping the Occupation in a Role with startDate/endDate, so the executive
  // titles are dated and do not read as roles he currently holds.
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Commercial Growth & Transformation Executive",
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
      roleName: "Founder & Executive Advisor, Commercial & Technology Transformation",
      description: "Founder & Executive Advisor, Commercial & Technology Transformation at State of Mind Strategies",
      startDate: "2024",
      hasOccupation: {
        "@type": "Occupation",
        name: "Founder & Executive Advisor",
      },
    },
    {
      "@type": "Role",
      roleName: "Chief Marketing Officer",
      description: "Chief Marketing Officer at 1/ST Technology",
      startDate: "2020",
      endDate: "2024",
      hasOccupation: {
        "@type": "Occupation",
        name: "Chief Marketing Officer",
      },
    },
    {
      "@type": "Role",
      roleName: "Chief Commercial Officer",
      description: "Chief Commercial Officer at PokerAtlas",
      startDate: "2025",
      endDate: "2025",
      hasOccupation: {
        "@type": "Occupation",
        name: "Chief Commercial Officer",
      },
    },
    {
      "@type": "Role",
      roleName: "Vice President of Corporate Information Technology",
      description: "Vice President of Corporate Information Technology at Las Vegas Sands",
      startDate: "2019",
      endDate: "2020",
      hasOccupation: {
        "@type": "Occupation",
        name: "Vice President of Corporate Information Technology",
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
    "Official site of Zachary Leifer, a Las Vegas-based commercial growth and transformation executive who has served as Chief Marketing Officer, Chief Commercial Officer, and Vice President of Corporate Information Technology.",
  author: {
    "@id": "https://zacharyleifer.com/#zachary-leifer",
    "@type": "Person",
    name: "Zachary Leifer",
    url: "https://zacharyleifer.com/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
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
    "State of Mind Strategies is a commercial growth and transformation advisory founded by Zachary Leifer. It helps leadership teams find what is holding growth back and connect AI, digital, data, and technology investments to revenue, EBITDA, and enterprise value.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
};




const HOME_TITLE = "Zachary Leifer | Commercial Growth & Transformation Executive";
const HOME_DESC =
  "Zachary Leifer has served as CMO, CCO and VP of Corporate IT. Based in Las Vegas, he connects AI, data and technology to revenue, EBITDA and enterprise value.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESC,
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
    title: HOME_TITLE,
    description: HOME_DESC,
    url: "https://zacharyleifer.com/",
    siteName: "Zachary Leifer",
    images: [OG_IMAGE],
    locale: "en_US",
    firstName: "Zachary",
    lastName: "Leifer",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESC,
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
  // alternates.canonical lives in app/page.tsx so non-home routes (including
  // the 404 page) do not inherit the homepage canonical.
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
