import type { Metadata } from 'next'
import './globals.css'

// TODO: Replace with actual custom domain once purchased
const SITE_URL = 'https://emanuel-blueboard.vercel.app'

export const metadata: Metadata = {
  title: 'Emanuel Blueboard Corporation | Plastering & Blueboard Contractor — Framingham & MetroWest MA',
  description: 'Licensed plastering and blueboard contractor serving Framingham, Natick, Ashland, and MetroWest MA since 2001. Skim coat plastering, vaulted ceilings, water damage repair, and new construction. Free estimates — call (508) 250-8872.',
  keywords: 'blueboard installation, plastering contractor, MetroWest MA, Framingham MA, Natick MA, skim coat plastering, vaulted ceiling plastering, water damage repair, drywall contractor, blueboard contractor near me',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Emanuel Blueboard Corporation — Plastering & Blueboard Contractor',
    description: 'Expert blueboard installation and plastering across MetroWest MA since 2001. Licensed & insured. Free estimates — (508) 250-8872.',
    url: SITE_URL,
    siteName: 'Emanuel Blueboard Corporation',
    images: [
      {
        url: '/images/vaulted-ceiling-plastering-new-build.jpg',
        width: 1200,
        height: 630,
        alt: 'Vaulted ceiling plastering by Emanuel Blueboard Corporation — MetroWest MA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emanuel Blueboard Corporation — Plastering & Blueboard Contractor',
    description: 'Expert blueboard installation and plastering across MetroWest MA since 2001. Free estimates — (508) 250-8872.',
    images: ['/images/vaulted-ceiling-plastering-new-build.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD Structured Data — LocalBusiness + Service Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Emanuel Blueboard & Plastering Corp.',
  alternateName: 'Emanuel Blueboard Corporation',
  url: SITE_URL,
  logo: `${SITE_URL}/images/emanuel-blueboard-logo.png`,
  image: `${SITE_URL}/images/vaulted-ceiling-plastering-new-build.jpg`,
  description: 'Licensed plastering and blueboard contractor serving Framingham, Natick, Ashland, and MetroWest MA since 2001. Specializing in skim coat plastering, vaulted ceilings, water damage repair, and new construction.',
  telephone: '+1-508-250-8872',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '49 Cedar St',
    addressLocality: 'Framingham',
    addressRegion: 'MA',
    postalCode: '01760',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.2793,
    longitude: -71.4162,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Framingham' },
    { '@type': 'City', name: 'Natick' },
    { '@type': 'City', name: 'Ashland' },
    { '@type': 'City', name: 'Holliston' },
    { '@type': 'City', name: 'Milford' },
    { '@type': 'City', name: 'Hopkinton' },
    { '@type': 'City', name: 'Marlborough' },
    { '@type': 'City', name: 'Sudbury' },
    { '@type': 'City', name: 'Wayland' },
    { '@type': 'City', name: 'Westborough' },
    { '@type': 'City', name: 'Southborough' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plastering & Blueboard Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blueboard Installation', description: 'Professional installation of blueboard drywall panels for new construction, additions, and full room buildouts.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skim Coat Plastering', description: 'Smooth, hard plaster finish applied over blueboard — the most durable wall surface available.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vaulted & Complex Ceilings', description: 'Specialty work on angled, cathedral, coffered, and architectural ceilings.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Damage Repair', description: 'Full restoration after leaks, flooding, or moisture damage — matching existing finishes seamlessly.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Room Renovation', description: 'Complete wall and ceiling work for gut renovations, working alongside general contractors and homeowners.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Patch & Repair', description: 'Holes, cracks, crumbling plaster, failed tape — patched and blended seamlessly.' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Michael R.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Emanuel and his crew did our entire new build — every room, every ceiling. The finish is immaculate.',
      datePublished: '2024-01-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah L.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'We had a complicated vaulted ceiling situation that two other contractors declined. The result was stunning.',
      datePublished: '2024-03-22',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'James P.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Water damage repair blended so perfectly we could not tell where the old plaster ended and new work began.',
      datePublished: '2024-06-10',
    },
  ],
  foundingDate: '2001',
  slogan: 'Making Dreams Come True Since 2001',
  knowsAbout: ['blueboard installation', 'skim coat plastering', 'veneer plastering', 'drywall', 'vaulted ceiling construction', 'water damage restoration'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
