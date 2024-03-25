import { ToastsProvider } from '~/providers/toasts-provider'
import { ModalsProvider } from '~/providers/modals-provider'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <div className='__next'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ToastsProvider />
      </div>
      <ModalsProvider />
    </>
  )
}
