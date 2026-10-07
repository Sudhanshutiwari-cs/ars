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
  title: 'ARS Imperial Landmark | Driven by Excellence',
  description:
    'ARS Imperial Landmark operates a diverse network of automotive dealerships across North and East India, representing leading passenger, two-wheeler and commercial vehicle brands.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0b1a36',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${figtree.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
