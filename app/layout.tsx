import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Figtree } from 'next/font/google'
import { WhatsAppButton } from '@/components/ars/whatsapp-button'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://arsimperiallandmark.com'),
  title: {
    default: 'ARS Imperial Landmark | Automotive Group in India',
    template: '%s | ARS Imperial Landmark',
  },
  description:
    'ARS Imperial Landmark is an automotive dealership group with 24+ dealerships and approximately 68 outlets, representing leading car, two-wheeler and commercial vehicle brands across North and East India.',
  keywords: [
    'ARS Imperial Landmark',
    'ARS Group',
    'ARS Imperial Group',
    'ARS automotive group',
    'ARS dealership group',
    'ARS Group India',
    'automotive dealerships in India',
    'ARS Imperial Noida',
  ],
  authors: [{ name: 'ARS Imperial Landmark' }],
  creator: 'ARS Imperial Landmark',
  publisher: 'ARS Imperial Landmark',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arsimperiallandmark.com/',
    siteName: 'ARS Imperial Landmark',
    title: 'ARS Imperial Landmark | Automotive Group in India',
    description:
      'ARS Imperial Landmark is an automotive dealership group with 24+ dealerships and approximately 68 outlets, representing leading car, two-wheeler and commercial vehicle brands across North and East India.',
    images: [
      {
        url: 'https://res.cloudinary.com/df01whs60/image/upload/v1791687797/ARS_Global_Automotive_at_Sunset_hychnu.png',
        width: 1200,
        height: 630,
        alt: 'ARS Imperial Landmark Automotive Dealership Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARS Imperial Landmark | Automotive Group in India',
    description:
      'ARS Imperial Landmark is an automotive dealership group with 24+ dealerships and approximately 68 outlets, representing leading car, two-wheeler and commercial vehicle brands across North and East India.',
    images: ['https://res.cloudinary.com/df01whs60/image/upload/v1791687797/ARS_Global_Automotive_at_Sunset_hychnu.png'],
  },
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png' },
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: 'https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png',
    apple: 'https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png',
  },
  verification: {
    google: 'Si-vc-ss8g3sYtICTdBsueN-U8yhw_cFOa4w4tNojNo',
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

export const viewport: Viewport = {
  themeColor: '#0b1a36',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://arsimperiallandmark.com/#organization',
      name: 'ARS Imperial Landmark',
      alternateName: ['ARS Group', 'ARS Imperial Group', 'ARS Imperial Landmark Group'],
      url: 'https://arsimperiallandmark.com/',
      logo: 'https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png',
      foundingDate: '2020',
      founder: {
        '@type': 'Person',
        name: 'Sahil Singh',
        jobTitle: 'Chairman & Managing Director',
      },
      telephone: '+91-6202122112',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pillar Number 99, Dadri Main Rd, Bhangel, Goyal Colony, Salarpur',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201301',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'AutoDealer',
      '@id': 'https://arsimperiallandmark.com/#dealership',
      name: 'ARS Imperial Landmark',
      url: 'https://arsimperiallandmark.com/',
      telephone: '+91-6202122112',
      priceRange: '₹₹₹',
      image: 'https://res.cloudinary.com/df01whs60/image/upload/v1791687797/ARS_Global_Automotive_at_Sunset_hychnu.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pillar Number 99, Dadri Main Rd, Bhangel, Goyal Colony, Salarpur',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201301',
        addressCountry: 'IN',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${poppins.variable} ${figtree.variable} bg-white`}>
      <head>
        <meta name="google-site-verification" content="Si-vc-ss8g3sYtICTdBsueN-U8yhw_cFOa4w4tNojNo" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/df01whs60/image/upload/v1791686790/Intense_Monochrome_Wolf_Emblem_lxin4e.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
