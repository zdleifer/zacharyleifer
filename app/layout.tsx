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
  image: "https://zacharyleifer.com/images/headshot.jpg",
  jobTitle: "Chief Marketing Officer",
  email: "zacharyleifer@gmail.com",
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

export const metadata: Metadata = {
  title: "Zachary Leifer | CMO · CCO · GM | Commercial Growth Executive | Las Vegas, NV",
  description:
    "Zachary Leifer is a senior commercial growth executive in Las Vegas, NV. CMO, CCO, and GM who builds the marketing and commercial operating system that drives measurable growth. Former CMO at 1/ST Technology (67% revenue growth, 22% EBITDA CAGR), CCO at PokerAtlas, and VP at Las Vegas Sands / The Venetian. Harvard Business School AMP graduate. Open to board, advisory, and senior operating roles.",
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
        url: "https://zacharyleifer.com/images/headshot.jpg",
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
    images: ["https://zacharyleifer.com/images/headshot.jpg"],
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
    "og:email": "zacharyleifer@gmail.com",
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
