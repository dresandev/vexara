import { Toaster } from '~/components/ui/toaster'
import { ModalsProvider } from '~/providers/modals-provider'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { OnAuthSuccess } from '~/components/on-auth-success'
import { PurchaseSuccessToast } from '~/components/on-purchase-success'

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
        <Toaster />
        <OnAuthSuccess />
        <PurchaseSuccessToast />
      </div>
      <ModalsProvider />
    </>
  )
}
