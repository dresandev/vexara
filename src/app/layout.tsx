import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import '~/styles/reset.css'
import '~/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'VEXARA: online fashion',
  description: 'Descubre la ropa de hombre en Vexara. Pantalones, camisas, camisetas, chaquetas.',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
