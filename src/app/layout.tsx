import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'LLacuash | Full-Stack Web Developer'

const description =
  "Desarrollador web full-stack experimentado en Lima. Construyo sitios web responsivos y fáciles de usar con React, NextJS y NodeJS. Hagamos realidad tu visión. ¡Contrátame hoy!"

const url = "https://llacuash.up.railway.app/"

// export const metadata: Metadata = {
//   title,
//   description,
//   category: 'technology',
//   metadataBase: new URL(url), 
//   alternates: {
//     canonical: url,
//   },
//   openGraph: {
//     title,
//     description,
//     url,
//     siteName: 'YoMac',
//     type: 'website',
//   },
//   twitter: {
//     title,
//     description,
//     card: 'summary_large_image',
//     creator: '@jllacuash',
//   },
// }

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Joseph Llacuash' }],
  openGraph: {
    title,
    description,
    url,
    siteName: 'LLacuash',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LLacuash Portfolio',
      },
    ],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@jllacuash',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
