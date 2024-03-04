import type { Metadata } from 'next'
import { inter } from '~/config/fonts'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { ModalsProvider } from '~/providers/modals-provider'
import '~/styles/reset.css'
import '~/styles/globals.css'

export const metadata: Metadata = {
  title: 'VEXARA: online fashion',
  description: 'Descubre la ropa de hombre en Vexara. Pantalones, camisas, camisetas, chaquetas.',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <div className='__next'>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <ModalsProvider />
      </body>
    </html>
  )
}
