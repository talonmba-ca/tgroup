import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/providers/I18nProvider'
import GoToTop from '@/components/global/GoToTop'
import Footer from '@/components/layout/Footer'
import HomeHeader from '@/components/layout/HomeHeader'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Talonmba Formation',
  description:
    'Rentabiliser les programmes de développement des compétences dans les grandes organisations en formant autrement les employés et en transformant positivement leur rapport aux changements'
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
        <I18nProvider locale={locale}>
          <main className='flex flex-col min-h-screen'>
            <HomeHeader className='bg-white shadow-1' />
            {/* <main> */}
            {children}

            {/* </main> */}
            <GoToTop />
            <Footer />
          </main>
        </I18nProvider>
      </body>
    </html>
  )
}
