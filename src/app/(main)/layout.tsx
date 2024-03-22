import { Header } from '~/components/ui/header'
import { Footer } from '~/components/ui/footer'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
