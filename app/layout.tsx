import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  "@id": "https://zacharyleifer.com/#zachary-leifer",
  name: "Zachary Leifer",
  url: "https://zacharyleifer.com",
  image: "https://zacharyleifer.com/images/headshot.png",
  jobTitle: ["Commercial Growth Executive", "Strategic Marketing Advisor"],
  description:
    "Senior commercial growth executive based in Las Vegas, NV. Former CMO and CCO who builds the marketing and commercial operating system, including data architecture, CRM and CDP infrastructure, and measurement, that turns strategy into measurable growth. Harvard Business School Advanced Management Program graduate. Open to CMO, CCO, GM, President, board, and advisory roles.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
    postalCode: "89101",
  },
  sameAs: [
    "https://linkedin.com/in/zacharyleifer",
    "https://open.spotify.com/episode/4xHYHVFm9V7GcMO1Si4sl7",
  ],
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
    url: "https://www.somstrategies.com/",
  sameAs: ["https://www.somstrategies.com/"],
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
    name: "Commercial Growth Executive",
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zachary Leifer",
  url: "https://zacharyleifer.com",
  description:
    "Official site of Zachary Leifer, Las Vegas-based commercial growth executive, former CMO and CCO specializing in gaming, hospitality, AI, customer data, and revenue growth.",
  author: {
    "@type": "Person",
    name: "Zachary Leifer",
    url: "https://zacharyleifer.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zacharyleifer.com/#som",
  name: "State of Mind Strategies",
  url: "https://www.somstrategies.com/",
  sameAs: ["https://www.somstrategies.com/"],
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




export const metadata: Metadata = {
  title: "Zachary Leifer | CMO · CCO | Las Vegas",
  description:
    "Zachary Leifer, CMO and CCO. Las Vegas, NV. 67% revenue growth at 1/ST Technology. Harvard Business School AMP. Former VP, Las Vegas Sands. Open to CMO, CCO, GM, President, board & advisory roles. Builds the marketing operating system, CDP, CRM, AI, that turns strategy into measurable growth. Former CMO at 1/ST Technology, CCO at PokerAtlas, VP at The Venetian.",
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
      "Senior commercial growth executive. CMO, CCO. Harvard Business School AMP. Based in Las Vegas, NV. Open to CMO, CCO, GM, President, board & advisory roles.",
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
      "Senior commercial growth executive in Las Vegas, NV. CMO, CCO with expertise in revenue strategy, digital transformation, and AI.",
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
