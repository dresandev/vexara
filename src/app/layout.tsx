import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { auth } from '~/auth'
import { inter } from '~/config/fonts'
import { Header } from '~/components/ui/header'
import { Footer } from '~/components/ui/footer'
import { ToastsProvider } from '~/providers/toasts-provider'
import { ModalsProvider } from '~/providers/modals-provider'
import '~/styles/reset.css'
import '~/styles/globals.css'

export const metadata: Metadata = {
  title: 'VEXARA: online fashion',
  description: 'Descubre la ropa de hombre en Vexara. Pantalones, camisas, camisetas, chaquetas.',
}

export default async function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const session = await auth()

  return (
    <html lang='es'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className='__next'>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
          <ToastsProvider />
          <ModalsProvider />
        </SessionProvider>
      </body>
    </html>
  )
}
